<script>

export default {
  name: "Dialog",
  emits:["accept", "decline"],
  props:{
    isShown:{
      type:Boolean,
      default:true
    },
    title:{
      type:String,
      default: "",
    },
  },

  methods:{
    _onOverlayClick(evt){
      if (evt.target.classList.contains("popup__overlay")){
        this.$emit("decline")
      }
    },
    _onKeyPress(evt){
      if (evt.key==="Escape"){
        this.$emit("decline")
      }
      else if (evt.key==="Enter"){
        this.$emit("accept")
      }
    },
    setListeners(){
      document.addEventListener("keyup", this._onKeyPress)
    },
    removeListeners(){
      document.removeEventListener("keyup", this._onKeyPress)
    }
  },
  watch:{
    isShown:{
      immediate:false,
      handler(val, oldVal){
        if (val){
          this.setListeners()
        } else {
          this.removeListeners()
        }
      }
    }
  },
  computed:{

  },

}

</script>


<template>
  <div v-if="this.isShown" @click="_onOverlayClick" class="popup__overlay">
    <div class="popup">
      <h2 class="popup__title">{{title}}</h2>
      <form class="popup__form" @submit.prevent="">
        <div class="popup__controls">
          <button @click.stop="$emit('accept')" class="popup__btn" type="submit">Да</button>
          <button @click="$emit('decline')" class="popup__btn" type="button" >Нет</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style>
.popup__overlay{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  transition: all 3s ease;
}
.popup{
  margin: auto;
  max-width: 500px;
  background-color: #444443;
  padding: 40px;
  box-shadow: 0 0 20px 2px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(100px);
  border-radius: 10px;
}
.popup__title{
  margin: 0;
  color: white;
  text-align: center;
}
.popup__form{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.popup__controls{
  padding-top: 30px;
  align-self: end;
  display: flex;
  column-gap: 20px;
}
.popup__btn{
  background-color: #EC7D18;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}
.popup__btn:hover{
  opacity: 0.6;
}
</style>