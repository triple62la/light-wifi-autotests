

<script>
import {useContextStore} from "@/stores/contextStore";
import {mapActions, mapState} from "pinia"
export default {

  name: "CardContext",
  emits:["cancelTests"],
  data(){
    return{
    }
  },
  computed:{
    computedStyles(){
      if (this.x && this.y){
        console.log(window.screen.width,document.documentElement.clientWidth, this.x )
        return {
          top:`${this.y+this.items.length*42>document.documentElement.clientWidth? //делаем так чтобы контекстное меню не вылезало за пределы экрана
              this.y - this.items.length*42 - 2 :this.y + 2}px`,
          left:`${this.x+220>document.documentElement.clientWidth? this.x- 202:this.x+2}px`, //делаем так чтобы контекстное меню не вылезало за пределы экрана
          height: `${this.items.length*42}px`}
      }
      return ""
    },

    ...mapState(useContextStore, ["x", "y", "isOpened", "parentEl", "items", ])
  },
  methods:{
    ...mapActions(useContextStore, ["open", "close"]),

    handleItemClick(func, args){
      this.close()
      func(...args)
    },

  }
}
</script>

<template>
  <ul v-show="this.isOpened" :class="[`context`,]" :style="computedStyles" @click.right.prevent >
    <li v-for="item in this.items"
        @click.stop="handleItemClick(item.func,item.args)"
        class="context__element">{{item.name}}</li>
  </ul>
</template>

<style scoped>
  .context{
    margin: 0;
    position: absolute;
    flex-direction: column;
    display: flex;
    list-style: none;
    padding-inline-start: 0;
    z-index: 100;
    box-shadow: 1px 1px 3px white;
    height: 0;


  }

  .context__element{
    width: 200px;
    height: 42px;
    background-color: #2d2d2d;
    color: white;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding: 15px 5px 0;
    border-bottom: 1px solid white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

  }
  .context__element:hover{
    background-color: #333333;
    cursor: pointer;
  }
</style>