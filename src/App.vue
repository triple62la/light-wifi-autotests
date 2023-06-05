<script >
import "./assets/styles/main.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Test from "@/components/test";
import NotFound from "@/pages/NotFound";
export default {
  name:"App",
  components: {Footer, LoginForm},
  data(){
    return {

    }
  },
  methods: {
    gotoLogin() {
      this.$router.push("/login")
    }
  }
}
</script>

<template>
  <div class="page">
    <LoginForm/>
    <Footer/>
  </div>
  <router-link to="NotFound"> HUI</router-link>
  <div @click="gotoHUI">HUI</div>
</template>


<style >
  .page{
    font-family: Inter Arial sans-serif;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #333;
    width: 100vw;
    height: 100vh;

  }
  .main{
    display: flex;
    flex: 1 0 auto;
  }
</style>