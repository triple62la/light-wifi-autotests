

<script>
import CustomSelect from "@/components/UI/CustomSelect";
import {mapStores} from "pinia";
import {useRootStore} from "@/stores/rootStore";
import {useVuelidate} from "@vuelidate/core";
import { sameAs, helpers} from "@vuelidate/validators";
import {noCyrilics, correctPassw, customRequired, customMinLength} from "@/scripts/Validator";

export default {
  name: "AddUserForm",
  components:{CustomSelect},
  setup(){
    return{
      v$:useVuelidate()
    }
  },
  data(){
    return {
      name:"",
      lastName:"",
      patronymic:"",
      login:"",
      passw:"",
      passwConfirm:"",
      role:"",

    }
  },
  methods:{
    test(){
      console.log(!this.role, this.v$.$invalid)
    }
  },
  computed:{
    ...mapStores(useRootStore)

  },
  validations(){
    return{
      name:{
        required:customRequired,
        minLength:customMinLength(2)
      },
      lastName:{
        required:customRequired,
        minLength:customMinLength(2)
      },
      login:{
        required:customRequired,
        noCyrilics:noCyrilics,
        minLength:customMinLength(5)
      },
      passw:{
        required:customRequired,
        minLength:customMinLength(5),
        passTest:correctPassw
      },
      passwConfirm:{
        required:customRequired,
        sameAs:helpers.withMessage("Пароли несовпадают", sameAs(this.passw))
      }
    }
  }
}
</script>


<template>
  <form class="form" @submit.prevent="test" autocomplete="off">
    <fieldset class="form__fieldset" >
      <div class="form__item">
        <label class="form__item-caption form__item-caption_required">Имя</label>
        <input v-model="v$.name.$model"
               :class="['form__item-input', {'form__item-input_invalid':v$.name.$dirty && v$.name.$invalid}]"
               type="text" name="name" id="name" autocomplete="off">
        <p class="form__error" v-if="v$.name.$dirty"  v-for="error of v$.name.$errors">{{error.$message}}</p>
      </div>
      <div class="form__item">
        <label class="form__item-caption form__item-caption_required">Фамилия</label>
        <input v-model="v$.lastName.$model"
               :class="['form__item-input', {'form__item-input_invalid':v$.lastName.$dirty && v$.lastName.$invalid}]"
               type="text" name="last-name" id="last-name" autocomplete="off">
        <p class="form__error" v-if="v$.lastName.$dirty"  v-for="error of v$.lastName.$errors">{{error.$message}}</p>
      </div>
      <div class="form__item">
        <label class="form__item-caption">Отчество</label>
        <input v-model="patronymic" class="form__item-input" type="text" name="patronymic" id="patronymic" autocomplete="off">
      </div>
      <div class="form__item">
        <label class="form__item-caption form__item-caption_required">Логин</label>
        <input v-model="v$.login.$model"
               :class="['form__item-input', {'form__item-input_invalid':v$.login.$dirty && v$.login.$invalid}]"
               type="text" name="login" id="login" autocomplete="off">
        <p  v-if="v$.login.$dirty"  v-for="error of v$.login.$errors" class="form__error">{{error.$message}}</p>
      </div>
      <div class="form__item">
        <label class="form__item-caption form__item-caption_required">Пароль</label>
        <input v-model="v$.passw.$model"
               :class="['form__item-input', {'form__item-input_invalid':v$.passw.$dirty && v$.passw.$invalid}]"
               type="password" name="login" id="login" autocomplete="off">
        <p v-if="v$.passw.$dirty" v-for="error of v$.passw.$errors" class="form__error">{{error.$message}}</p>
      </div>
      <div class="form__item">
        <label class="form__item-caption form__item-caption_required">Подтверждение пароля</label>
        <input v-model="v$.passwConfirm.$model"
               :class="['form__item-input', {'form__item-input_invalid':v$.passwConfirm.$dirty && v$.passwConfirm.$invalid}]"
               type="password" name="login" id="login" autocomplete="off">
        <p v-for="error of v$.passwConfirm.$errors" class="form__error">{{error.$message}}</p>
      </div>
      <div class="form__item">
        <label class="form__item-caption form__item-caption_required">Роль</label>
        <CustomSelect :options="this.rootStore.userRoles"
                      v-model:selectedValue="role"
        />
      </div>
    </fieldset>
    <div class="form__controls">
      <button :class="['popup__btn', {'popup__btn_disabled':!this.role || v$.$invalid}]" type="submit">Сохранить</button>
    </div>
  </form>
</template>


<style scoped>
.form__item-caption_required::after{
  content: " *";
  color: #F06957;
}
.form__error{
  margin: 0 auto 0 0;
  color:  #F06957;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
}

</style>