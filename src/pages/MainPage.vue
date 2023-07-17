<template>
  <Header :title="this.pageTitle" :show-profile="true" :show-burger="true"/>
  <Main>
    <NavBar active-link-name="Мониторинг"/>
    <MonitoringSection/>
  </Main>
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
import Main from "@/components/Main";
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