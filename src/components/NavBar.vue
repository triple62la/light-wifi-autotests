<template>
  <transition name="fade">
    <nav v-show="navBarOpened" class="nav">
      <nav-link  v-for="(link, index) in links"
                 :link-data="link"
                  :class="{'nav__link_active':link.name === activeLinkName}"
                 @click="linkClick(link.name, link.route)"
      >{{ link.name }}</nav-link>
    </nav>
  </transition>
</template>

<script>
import {mapState} from "pinia";
import {useRootStore} from "@/stores/rootStore";
import NavLink from "@/components/NavLink";

export default {
  name: "NavBar",
  components: {NavLink},
  props:["activeLinkName"],
  computed:{
    ...mapState(useRootStore, ["navBarOpened"])
  },
  data(){
    return{
      links:[
        {
          name:"Мониторинг",
          route:"/",
          isActive:false,

        },
        {
          name:"Внеочередные проверки",
          route:"/extras",
          isActive:false,

        },
        {
          name:"История проверок",
          route:"/history",
          isActive:false,

        },
        {
          name:"Пользователи",
          route:"/users",
          isActive:false,

        },
      ]
    }
  },
  methods:{
    changeActiveLink(linkName){
      for (const link of this.links){
        linkName === link.name? link.isActive=true : link.isActive=false
      }
    },
    linkClick(name, route){
        this.changeActiveLink(name)
        this.$router.push(route)
    }
  },

}

</script>

<style scoped>
.nav{
  background-color: #242424;
  display: flex;
  flex-direction: column;



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