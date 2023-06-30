<template>
  <transition name="fade">
    <nav v-show="navBarOpened" class="nav">
      <router-link class="nav__link nav__link_active" to="">Мониторинг</router-link>
      <router-link class="nav__link" to="">Внеочередные проверки</router-link>
      <router-link class="nav__link" to="">История проверок</router-link>
      <router-link class="nav__link" to="">Пользователи</router-link>
    </nav>
  </transition>
</template>

<script>
import {mapState} from "pinia";
import {useRootStore} from "@/stores/rootStore";

export default {
  name: "NavBar",
  computed:{
    ...mapState(useRootStore, ["navBarOpened"])
  }
}

</script>

<style scoped>
.nav{


  background-color: #242424;
  display: flex;
  flex-direction: column;

}
.nav__link{
  box-sizing: border-box;
  min-height: 35px;
  width: 230px;
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 15px 10px;


}

.nav__link:hover{
  opacity: 0.6;
  background-color: #2d2d2d;
}
.nav__link_active{
  background-color: #2d2d2d;
}
.fade-enter-active{
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from{
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>