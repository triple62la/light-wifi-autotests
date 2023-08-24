

<script>
// import downArrow from ""
export default {
  name: "CustomSelect",
  emits:["selectedValue"],
  props:{
    options:{
      type:Array,
      default:[]
    },
    defaultHeading:{
      type:Number,
      default: 0,
    }
  },
  data(){
    return {
      selected:{},
      isOptionsShown:false,

    }
  },
  methods:{
    onOptionClick(option){
      this.selected = option
      this.isOptionsShown = false
      this.$emit("selectedValue", option.value)

    }
  },
  computed:{
    heading(){
      return this.selected.name ||
          this.options[this.defaultHeading].name || ""
    }
  }
}
</script>


<template>
  <div @click="this.isOptionsShown=!this.isOptionsShown" class="heading">
    <p class="heading__text">{{heading}}</p>
    <img class="heading__arrow" src="@/assets/images/icons/down-arrow-icon2.svg" alt="">
    <div v-if="isOptionsShown" class="options">
      <p class="options__item" v-for="item in options" :key="item.value" @click.stop="this.onOptionClick(item)">{{item.name}}</p>
    </div>
  </div>
</template>


<style scoped>
  .heading{
    width: 100%;
    height: 32px;
    background-color: #949494;
    border-bottom: 2px solid #EC7D18;
  }
  .heading__arrow{
    width: 24px;
    height: 24px;
  }
</style>