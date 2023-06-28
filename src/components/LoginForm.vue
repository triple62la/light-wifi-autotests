

<script>
export default {

  name: "LoginForm",
  data(){
    return {
        loginNotValid:true,
        passwordNotValid:true,
        loginValue: "",
        passwordValue: "",
        loginErrMsg: "",
        passwordErrMsg:"",
        btnState:false,
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
      this.btnState = [this.loginNotValid, this.passwordNotValid].every(el=>el===false)
    }
  }
}
</script>


<template>
  <section class="login-section">
  <form class="login-form" novalidate @submit.prevent="this.$router.push('/')">
    <h2 class="login-form__title">Введите учетные данные:</h2>
    <input v-model="loginValue" @input="setElementValidation" class="login-form__input" type="text" name="login" id="login"
           minlength="3" maxlength="30" required pattern="^[a-zA-Z0-9\-]+$" placeholder="Логин"
           data-error-message="Разрешены только латинские буквы, цифры и спецсимволы"
    :class="{'login-form__input_invalid':loginNotValid}">
    <span class="login-form__error login-form__error_login">{{loginErrMsg}}</span>
    <input v-model="passwordValue" @input="setElementValidation" class="login-form__input" type="password" name="password" id="password"
           required maxlength="20" placeholder="Пароль"
           :class="{'login-form__input_invalid':passwordNotValid}">
    <span class="login-form__error login-form__error_password">{{passwordErrMsg}}</span>
    <button type="submit" class="" :class="{'login-form__button':true,'login-form__button_disabled':!btnState}">вход</button>
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
    height: 316px;
    border: 2px solid #EC7D18;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .login-form__title{
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin: 0 auto;
    color: white;
    padding-bottom: 24px;
  }
  .login-form__input{
    margin: 0 auto;
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