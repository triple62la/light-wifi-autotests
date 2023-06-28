<template>
  <Header :title="this.pageTitle" :show-profile="true" :show-burger="true"/>
  <main class="main" @click="this.contextStore.close" @click.right.prevent="this.contextStore.close" >
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
import {mapStores} from "pinia/dist/pinia";
import {useContextStore} from "@/stores/contextStore";
export default {
  name: "MainPage",
  components: {MonitoringSection, NavBar, LoginForm,Header,Footer},
  methods:{
  },
  data(){
    return {
      pageTitle:"Мониторинг"
    }
  },
  computed:{
    ...mapStores( useContextStore)
  },

}
</script>

<style scoped>
  .main{
    display: flex;
    flex: 1 0 auto;
  }
</style>