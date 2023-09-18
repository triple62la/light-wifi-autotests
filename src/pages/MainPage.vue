<template>
  <Header :title="this.pageTitle" :show-profile="true" :show-burger="true"/>
  <Main>
    <NavBar active-link-name="Мониторинг"/>
    <MonitoringSection/>
  </Main>
  <Footer/>
</template>

<script>
import Header from "@/components/AppLayout/Header";
import Footer from "@/components/AppLayout/Footer";
import LoginForm from "@/components/LoginPage/LoginForm";
import NavBar from "@/components/AppLayout/NavBar";
import MonitoringSection from "@/components/MainPage/MonitoringSection";
import {mapStores} from "pinia/dist/pinia";
import {useContextStore} from "@/stores/contextStore";
import Main from "@/components/AppLayout/Main";
export default {
  name: "MainPage",
  components: {Main, MonitoringSection, NavBar, Header,Footer},
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

<style >

</style>