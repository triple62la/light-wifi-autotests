<template>
  <div class="wrapper">
    <div v-show="showProfile" class="user-profile" @click.stop="toggleContext" :class="{opened:contextIsVisible}">
      <img src="../../assets/images/icons/icon-profile-user2.png" alt="профиль" class="user-profile__image">
    </div>
    <ul v-show="contextIsVisible" class="context" >
      <li class="context__element" @click="logoutUser">Выйти</li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from "pinia/dist/pinia";
import {useContextStore} from "@/stores/contextStore";

export default {
  name: "UserProfile",
  props:["showProfile"],
  data(){
    return{
      contextActions:[
        {
          name: "Выйти",
          func: this.logoutUser,
          args:[]
        },
      ],
      contextIsVisible:false
    }
  },
  methods: {
    logoutUser() {

      this.$router.push("/login")
    },
    openContext(){
      this.contextIsVisible = true;
      document.addEventListener("click", this.closeContext, {once:true})
    },
    closeContext(){
      this.contextIsVisible = false
    },
    toggleContext(){
      this.contextIsVisible? this.closeContext(): this.openContext()
    }
  }
}
</script>

<style scoped>

.wrapper{
  position: relative;
  margin: auto 0;
}
  .user-profile{
    position: relative;
    margin: auto 0;
    background-color: #333333;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
  }
  .user-profile:hover{
    opacity: 0.6;
    cursor: pointer;
  }
  .opened{
    background-color: #949494;
  }
  .user-profile__image{

    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
  }
  .context{
    position: absolute;
    top:0;
    left:0;
    transform: translate(-110%, 25%);
    height: 24px;
    flex-direction: column;
    display: flex;
    list-style: none;
    padding-inline-start: 0;
    z-index: 100;
    box-shadow: 1px 1px 3px white;
  }
  .context__element{
    width: 200px;
    height: 42px;
    background-color: #2d2d2d;
    color: white;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    text-decoration:none;
    padding-top: 5px;
  }

  .context__element:hover{
    cursor: pointer;
    opacity: 0.5;

  }
  .context__element >a{

  }
</style>