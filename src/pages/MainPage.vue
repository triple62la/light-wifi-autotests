<template>
  <Header/>
  <LoginForm/>
  <Footer/>
  <div @click="gotoHUI">HUI</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
export default {
  name: "MainPage",
  components: {LoginForm,Header,Footer},
  methods:{
    gotoHUI(){
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>