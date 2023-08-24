

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


<template>
  <Transition name="grow">
    <nav v-if="navBarOpened" class="nav">
      <nav-link  v-for="(link, index) in links"
                 :link-data="link"
                 :class="{'nav__link_active':link.name === activeLinkName}"
                 @click="linkClick(link.name, link.route)"
      >{{ link.name }}</nav-link>
    </nav>
  </Transition>
</template>


<style scoped>
.nav{
  background-color: #242424;
  display: flex;
  flex-direction: column;
}

.grow-enter-active{
  animation: grow 0.2s;
}
.grow-leave-active {
  animation: grow 0.2s  reverse;
}
@keyframes grow {
  0% {
    width: 0;
  }
  100% {
    width: 230px;
  }
}


</style>