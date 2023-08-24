
<script>

import CustomSelect from "@/components/UI/CustomSelect";
import {useRootStore} from "@/stores/rootStore";
import {mapStores} from "pinia";
import {useUsersStore} from "@/stores/usersStore";
export default {
  name: "EditUserForm",
  components: {CustomSelect},
  props:{
    userProps:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
      userData:{
        ...this.userProps
      }
    }
  },
    methods:{
      onSubmitClick(){
          this.usersStore.editUser(this.userData)
      }
    },
  computed:{
    ...mapStores(useRootStore, useUsersStore),


  }
}
</script>

<template>
  <form class="form" @submit.prevent="$emit('accept')" autocomplete="off">
    <fieldset class="form__fieldset" >
      <div class="form__item">
        <label for="id" class="form__item-caption">Id</label>
        <input v-model="userData.id" class="form__item-input form__item-input_type_id" type="text" name="id" id="id" autocomplete="off" disabled>
      </div>
      <div class="form__item">
        <label class="form__item-caption">Имя</label>
        <input v-model="userData.name" class="form__item-input" type="text" name="name" id="name" autocomplete="off">
      </div>
      <div class="form__item">
        <label class="form__item-caption">Фамилия</label>
        <input v-model="userData.lastName" class="form__item-input" type="text" name="last-name" id="last-name" autocomplete="off">
      </div>
      <div class="form__item">
        <label class="form__item-caption">Отчество</label>
        <input v-model="userData.patronymic" class="form__item-input" type="text" name="patronymic" id="patronymic" autocomplete="off">
      </div>
      <div class="form__item">
        <label class="form__item-caption">Логин</label>
        <input v-model="userData.login" class="form__item-input" type="text" name="login" id="login" autocomplete="off">
      </div>
      <div class="form__item">
        <label class="form__item-caption">Роль</label>
       <CustomSelect :options="this.rootStore.userRoles"
                     v-model:selectedValue="userData.role"
       />
      </div>
    </fieldset>
    <div class="form__controls">
      <button @click.stop="" class="popup__btn" type="submit">Сохранить</button>
    </div>
  </form>
</template>


<style scoped>

select {
 /*A reset of styles, including removing the default dropdown arrow*/
appearance: none;
/* Additional resets for further consistency*/
background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  box-sizing: border-box;
  outline: none;
}


.form__fieldset{

  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px white;
  padding: 40px 20px;
  row-gap: 20px;

}
.form__item{
  display: flex;
  flex-direction: column;
  row-gap: 5px;

}
.form__item-caption{
  color: white;
  transform: translateX(10px);
  font-size: 15px;
  font-weight: 600;
}
.form__item-input{
  outline: none;
  background-color: #333333;
  border: none;
  border-bottom: 2px solid #EC7D18;
  height: 32px;
  color: #d0d0d0;
  font-style: italic;
  font-weight: 400;
  font-size:  16px;

}
.form__item-input:focus{
  box-shadow: 0 0 10px 0 inset;
  border-radius: 7px;
  border-bottom: 1px solid white;
}
.form__item-input_type_id{
    font-size:  14px;
}
.form__controls{
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
}
.form__select{
  position: relative;
  display: inline-block;
  border-bottom: 2px solid #EC7D18;
  height: 32px;
  padding-left: 10px;
  color: #d0d0d0;
  font-style: italic;
  font-weight: 400;
  font-size:  16px;
  cursor: pointer;
  background: url("@/assets/images/icons/down-arrow-icon2.svg") no-repeat  center right;
}
/*.form__select::after{*/
/*  content: "";*/
/*  width: 10px;*/
/*  height: 10px;*/
/*  position: absolute;*/
/*  right: 0;*/
/*  top: 0;*/
/*  color: #EC7D18;*/
/*  clip-path:polygon(0 0, 50% 100%, 100% 0);*/
/*  background-color: #EC7D18;*/
/*  z-index: 2;*/
/*}*/
</style>