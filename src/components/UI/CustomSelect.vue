

<script>
// import downArrow from ""
export default {
  name: "CustomSelect",
  props:{
    options:{
      type:Array,
      default:[]
    },
    defaultHeading:{
      type:Number,
      default: 0,
    },
    selectedValue:{
      type:String,
      required:true
    }
  },
  data(){
    return {

      isOptionsShown:false,

    }
  },
  methods:{
    onOptionClick(option){
      this.$emit ("update:selectedValue",  option.value)
      this.isOptionsShown = false
    }
  },
  computed:{
    heading(){
      return this.selectedValue ?
          this.options.find(option=>option.value === this.selectedValue)?.name
          : ""
    },
      optionsPosition(){
        const height = this.options.length*32
          return `bottom: -${height}px`
      }
  }
}
</script>


<template>
    <div class="wrapper">
        <div @click="this.isOptionsShown=!this.isOptionsShown" class="heading">
            <p class="heading__text">{{heading}}</p>
            <button class="heading__arrow">&lt;</button>
        </div>
        <div v-show="isOptionsShown" class="options" :style="optionsPosition" >
            <p class="options__item" v-for="item in options" :key="item.value" @click.stop="this.onOptionClick(item)">{{item.name}}</p>
        </div>
    </div>
</template>


<style scoped>
.wrapper{
    position: relative;
}
  .heading{
    width: 100%;
    height: 32px;
    background-color: transparent;
    border-bottom: 2px solid #EC7D18;
      display: flex;
      justify-content: space-between;
      cursor: pointer;

  }
  .heading__text{
      margin: 0;
      color: #d0d0d0;
      font-style: italic;
      font-weight: 400;
      font-size:  16px;
      padding-top: 7px;
  }

  .heading__arrow{
    width: 24px;
    height: 24px;
  background-image: url("@/assets/images/icons/down-arrow-icon2.svg");
  background-position: center;
  background-size: 100% 100%;
    background-color: transparent;
      border:none;
    transform: rotate(90deg);
  }
  .options{
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #3D3D3D;
      padding: 5px;
      border: 1px white solid;
      border-radius: 5px;

  }
  .options__item{
      margin: 0;
      color: #d0d0d0;
      font-style: italic;
      font-weight: 400;
      font-size:  16px;
      cursor: pointer;
      transition: background-color 0.3s ease, opacity 0.3s ease;
      padding: 5px 0;

  }
  .options__item:hover{
      opacity: 0.6;
      background-color: #636363;
  }
</style>