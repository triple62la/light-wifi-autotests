<template>

  <App/>
  <Header/>

  <Footer/>
  <Test/>
</template>

<script>
import Header from "@/App";
import LoginForm from "@/App";
import Footer from "@/App";
import Test from "@/App";
export default {
  name: "LoginPage",
  components: {Test, Footer, LoginForm, Header}
}
</script>

<style scoped>

</style>