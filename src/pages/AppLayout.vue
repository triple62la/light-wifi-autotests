<template>
  <Header
      :title="this.title"
      :show-burger="this.showNav"
  />
  <Main>
    <NavBar v-if="showNav"/>
    <slot/>
  </Main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
export default {
  name: "AppLayout",
  components: {Header, Main, Footer, NavBar},
  props: {
    title:{
      type:String,
      default:"",
    },
    showNav:{
      type:Boolean,
      default:false,
    },

  }
}
</script>

<style >
  .disabled{
    background-color: #949494 !important;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>