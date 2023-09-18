<template>
  <Header
      :title="this.title"
      :show-burger="this.showNav"
      :show-profile="this.showProfile"
  />
  <Main>
    <NavBar v-if="showNav"/>
    <slot/>
  </Main>
  <Footer/>
</template>

<script>
import Header from "@/components/AppLayout/Header"
import Main from "@/components/AppLayout/Main"
import Footer from "@/components/AppLayout/Footer"
import NavBar from "@/components/AppLayout/NavBar"
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
    showProfile:{
      type:Boolean,
      default:false
    }
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