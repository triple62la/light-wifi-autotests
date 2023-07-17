

<script>

import {required, minLength, maxLength} from "@vuelidate/validators"
import {useVuelidate} from "@vuelidate/core";

const testCyrilics = (str)=> {
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  const re = RegExp(cyrillicPattern);
      for (const el of str) {
        if (re.test(el)) {
          return false
        }
      }
  return  true
}
export default {



  name: "LoginForm",
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data(){
    return {

        login: "",
        password: "",
        btnState:false,
    }
  },
  validations(){
    return {
      login:{
        required,


      },
      password:{
        required,


      },
    }
  },


  methods:{
    getValidationMsg(evt){
      const element = evt.target
      return element.validity.patternMismatch ?
          element.dataset.errorMessage : element.validationMessage
    },
    setElementValidation(evt){
      const msg = this.getValidationMsg(evt)
      this[`${evt.target.name}`+"ErrMsg"] = msg
      this[`${evt.target.name}` + "NotValid"] = Boolean(msg)
    },
    isFieldEmpty(vModel){
      return vModel.required.$invalid && vModel.$dirty
    },
    hasCyrilics(vModel)  {
     return  vModel.testCyrilics.$invalid && vModel.$dirty
    },
    notRequiredLength(vModel){
      return (vModel.minLength.$invalid || vModel.maxLength.$invalid) && vModel.$dirty
    },
    onSubmit(evt){
      if (this.v$.$invalid){
        return
      }
      this.$router.push('/')
    },
  }
}
</script>


<template>
  <section class="login-section">
  <form class="login-form" novalidate @submit.prevent="onSubmit" >
    <h2 class="login-form__title">Введите учетные данные:</h2>
    <input v-model.trim="v$.login.$model"
           :class="['login-form__input',{'login-form__input_invalid':v$.login.$invalid && v$.login.$dirty}]"
           type="text" name="login" id="login"
           placeholder="Логин"
           >
      <span v-if="isFieldEmpty(v$.login)" class="login-form__error login-form__error_login" >Заполните это поле</span>
    <input v-model.trim="v$.password.$model"
           @input="setElementValidation"
           :class="['login-form__input',{'login-form__input_invalid':v$.password.$invalid && v$.password.$dirty}]"
           type="password" name="password" id="password"
            placeholder="Пароль"
           >
    <span v-if="isFieldEmpty(v$.password)" class="login-form__error login-form__error_login" >Заполните это поле</span>
    <button type="submit" class="" :class="['login-form__button',{'login-form__button_disabled':v$.$invalid}]">вход</button>
  </form>
  </section>
</template>

<style scoped>
  .login-section{
    display: flex;
    flex: 1 0 auto;
  }
  .login-form{
    margin: auto;
    width: 668px;

    border: 2px solid #EC7D18;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;

  }
  .login-form__title{
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin: 0 auto;
    color: white;
    padding-bottom: 24px;
  }
  .login-form__input{
    margin: 10px auto;
    width: 350px;
    height: 41px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: lightgray;

  }
  .login-form__input:focus{
    outline: none;

  }
  .login-form__input::placeholder{
    color: gray;
    padding-left: 10px;
    font-size: 14px;
  }
  .login-form__input_invalid{
    border-bottom: 2px solid #F06957;
    background-color: rgba(240, 105, 87, 0.2);
    border-radius: 8px;
  }

  .login-form__error{
    margin: 0 auto;
    color:  #F06957;
    padding-top: 9px;
    width: 350px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    min-height: 30px;

  }

  .login-form__button{
    margin: 0 auto;
    width: 161px;
    height: 34px;
    background-color: transparent;
    border: 1px solid #EC7D18;
    border-radius: 8px;
    color: #EC7D18;
    font-family: Inter Arial sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 19px;
  }
  .login-form__button:hover{
    opacity: 0.6;
  }
  .login-form__button_disabled{
    color: #C4C4C4;
    border: 1px solid #C4C4C4;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>