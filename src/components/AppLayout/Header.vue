<script>
import UserProfile from "@/components/UsersPage/UserProfile";
import {useRootStore} from "@/stores/rootStore";
import {mapActions, mapState} from "pinia";
import rtk_logo from "@/assets/images/rtk-logo.svg"


export default {
  name: "Header",
  components: {UserProfile},
  props:["title", "showProfile", "showBurger"],
  data(){
    return {
      logo:rtk_logo,
    }
  },
  computed:{
    ...mapState(useRootStore, ["burgerBtnOpened"])
  },
  methods: {
    burgerBtnClick(){

    },
    ...mapActions(useRootStore,["navBarToggleOpened"])
  }
}
</script>


<template>
  <header class="header">
    <div class="header__container">
      <div class="header__app-title-wrapper">
        <!--      <div v-show="showBurger" @click="navBarToggleOpened" :class="[`header__burger-btn`, {'header__burger-btn_active': this.burgerBtnOpened}]"></div>-->
        <img :src="logo" alt="логотип РТК ЦОД">
        <h1 class="header__app-title">Light WiFi Sanity</h1>
      </div>
      <h2 class="header__page-title">{{title}}</h2>
      <UserProfile :show-profile="showProfile"/>
    </div>
  </header>
</template>



<style scoped>
  .header{
    margin: 0 auto;
    background-color: #242424;
    height: 100px;
    border-bottom: 2px #EC7D18 solid;
    width: 100%;
    display: flex;
    flex: 0 0 auto;
    position: relative;

  }
  .header__container{
    margin: 0 auto;
    max-width: 1900px;
    width: 100%;
    display: flex;

    padding: 0 50px;
  }
  .header__app-title-wrapper{

    display: flex;
    align-items: center;
  }
  .header__burger-btn{
    background-image: url("../../assets/images/icons/burger-icon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 36px;
    height: 36px;
    background-color: #333;
    border-radius: 50%;
  }
  .header__burger-btn_active{
    background-color: #949494;
  }
  .header__burger-btn:hover{
    opacity: 0.6;
    cursor: pointer;
  }

  .header__app-title{

    font-size: 32px;
    font-weight: 700;
    line-height: 29px;
    color: #FFFCFC;
    margin: 0;
    min-width: 246px;
    padding-left: 10px;

  }
  @media (max-width: 1024px) {
    .header__app-title{

      font-size: 24px;
      line-height: 22px;
      min-width: 200px;
      padding-left: 10px;
    }
  }
  @media (max-width: 800px) {
    .header__app-title{

      display: none;
    }
  }
  .header__page-title{
    margin: auto;
    font-size: 26px;
    font-weight: 700;
    line-height: 29px;
    color: white;
  }
  @media (max-width: 1024px) {
    .header__page-title{
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
      padding-top: 40px;
    }
  }
</style>