

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
        return `top:${this.y + 2}px; left:${this.x+2}px; height: ${this.height}px`
      }
      return ""
    },
    height(){
      return this.items.length*42
    },
    computedClasses(){
      if (this.isOpened){
        return "context context_opened"
      }
      return "context"
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
  <ul :class="computedClasses" :style="computedStyles" @click.right.prevent >
    <li v-for="item in this.items"
        @click="handleItemClick(item.func,item.args)"
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
    visibility: hidden;
    height: 0;
    transition: visibility 0s;

  }
  .context_opened{
    visibility: visible;
    transition:visibility 0s;
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
    padding-top: 15px;
    border-bottom: 1px solid white;
  }
  .context__element:hover{
    background-color: #333333;
    cursor: pointer;
  }
</style>