

<script>
import EditUserForm from "@/components/EditUserForm";
export default {
  name: "Sidepage",
  components: {EditUserForm},
  emits:["close-sidepage"],
  props:{
    isShown:{
      type:Boolean,
      default:true
    },
    title:{
      type:String,
      default:""
    },

  },
  methods:{
    _onOverlayClick(evt){
      if (evt.target.classList.contains("popup__overlay")){
        this.$emit("close-sidepage")
      }
    },
    _onEscPress(evt){
      if (evt.key==="Escape"){
        this.$emit("close-sidepage")
      }
    },
  }
}
</script>


<template>

    <div v-show="isShown" :class="['popup__overlay']" @click="_onOverlayClick">
      <Transition name="grow">
        <div v-if="isShown" @click.stop="" :class="['sidepage', ]">
          <h2 class="sidepage__title">{{title}}</h2>
          <button @click="$emit('close-sidepage')" class="sidepage__close-btn" type="button"></button>
          <slot>

          </slot>
        </div>
      </Transition>
    </div>
</template>

<style scoped>


.grow-enter-active{
  animation: grow 0.3s;
}
.grow-leave-active {
  animation: grow 0.3s  reverse;
}
@keyframes grow {
  0% {
    width: 0;
  }
  100% {
    width: 30%;
  }
}


.sidepage{

  position: absolute;
  top:0;
  right: 0;
  width: 30%;
  max-width: 450px;
  height: 100vh;
  background-color: #333333;
  padding: 60px 40px;
  box-sizing: border-box;
  box-shadow: -1px 1px 13px 0 #949494;
  overflow: hidden;
  display: flex;
  flex-direction: column;

}



.sidepage__close-btn{
  position: absolute;
  top: 20px;
  right:20px;
  padding: 5px;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-image: url("@/assets/images/icons/icon-x-black-slim.png");
  background-color: white;
  background-size: cover;
  border: white 5px solid;
  cursor: pointer;
  margin: 0 auto;
}
.sidepage__close-btn:hover{
  opacity: 0.6;
}





@media (max-width:1024px) {
  .sidepage{
    width: 400px;
    padding: 60px 20px;
  }
}

</style>