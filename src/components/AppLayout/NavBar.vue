

<script>
import {mapActions, mapState} from "pinia";
import {useRootStore} from "@/stores/rootStore";
import NavLink from "@/components/AppLayout/NavLink";

export default {
  name: "NavBar",
  components: {NavLink},
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
      ],
      minimized: true
    }
  },
  methods:{
    linkClick(name, route){
        this.$router.push(route)
    },
    ...mapActions(useRootStore, ["openNavBar", "closeNavBar"]),

  },

}

</script>


<template>
  <Transition name="grow">
    <nav  @mouseleave="minimized=true"  @mouseover="minimized=false" class="nav">
      <nav-link  v-for="(link, index) in links"
                 :link-data="link"
                 :minimized="minimized"
                 @click="linkClick(link.name, link.route)"
      >{{ link.name }}</nav-link>
    </nav>
  </Transition>
</template>


<style scoped>
.nav{
  position: fixed;
  top: 102px;
  left: 0;
  background-color: #242424;
  height: calc(100vh - 162px);
  display: flex;
  flex-direction: column;
  width: 50px;
  transition: width 0.4s ease;
  z-index: 100;
}
.nav:hover{
  width: 230px;
  cursor: pointer;
}
.nav > li{
  border-radius: 50%;
}
.nav:hover > li{
  border-radius: 0;
}

.grow-enter-active{
  animation: grow 0.2s;
}
.grow-leave-active {
  animation: grow 0.2s  reverse;
}
@keyframes grow {
  0% {
    width: 50px;
  }
  100% {
    width: 230px;
  }
}


</style>