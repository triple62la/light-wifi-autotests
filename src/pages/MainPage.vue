<template>
  <Header :title="this.pageTitle"/>
  <main class="main">
    <NavBar/>
    <MonitoringSection/>

  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/NavBar";
import MonitoringSection from "@/components/MonitoringSection";
export default {
  name: "MainPage",
  components: {MonitoringSection, NavBar, LoginForm,Header,Footer},
  methods:{
  },
  data(){
    return {
      pageTitle:"Мониторинг"
    }
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    flex: 1 0 auto;
  }
</style>