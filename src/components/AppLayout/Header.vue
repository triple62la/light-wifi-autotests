<template>
  <header class="header">
    <div class="header__app-title-wrapper">
      <div v-show="showBurger" @click="navBarToggleOpened" :class="[`header__burger-btn`, {'header__burger-btn_active': this.burgerBtnOpened}]"></div>
      <h1 class="header__app-title">Light WiFi Sanity</h1>
    </div>
    <div class="header__container">
      <h2 class="header__page-title">{{title}}</h2>
      <UserProfile :show-profile="showProfile"/>
    </div>
  </header>
</template>

<script>
import UserProfile from "@/components/UsersPage/UserProfile";
import {useRootStore} from "@/stores/rootStore";
import {mapActions, mapState} from "pinia";

export default {
  name: "Header",
  components: {UserProfile},
  props:["title", "showProfile", "showBurger"],
  data(){
   return {

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

<style scoped>
  .header{
    margin: 0 auto;
    background-color: #242424;
    height: 100px;
    border-bottom: 2px #EC7D18 solid;
    width: 100%;
    flex: 0 0 auto;
    position: relative;

  }
  .header__container{
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: left;
  }
  .header__app-title-wrapper{
    position: absolute;
    top:35px;
    left: 20px;
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
    margin: 0 auto;
    font-size: 26px;
    font-weight: 700;
    line-height: 29px;
    color: white;
    padding-top: 35px;
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