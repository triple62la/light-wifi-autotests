<template>


  <Header :title="this.pageTitle" :show-profile="false"/>
  <LoginForm/>
  <Footer/>

</template>

<script>
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
export default {
  name: "LoginPage",
  components: {Footer, Header,  LoginForm},
  data(){
    return {
      pageTitle: "Страница авторизации"
    }
  }
}
</script>

<style scoped>

</style>