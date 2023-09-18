

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
      default: null,
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
  },
  mounted() {
    if (this.defaultHeading!==null){
      this.onOptionClick(this.options[this.defaultHeading])
    }
  },
}
</script>


<template>
    <div class="wrapper">
        <div @click.stop="this.isOptionsShown=!this.isOptionsShown" class="heading">
            <p class="heading__text">{{heading || "Выберите"}}</p>
            <div class="heading__arrow" :class="{'heading__arrow_rotate-reversed':this.isOptionsShown}">&lt;</div>
        </div>
        <div v-show="isOptionsShown" class="options" :style="optionsPosition" >
            <p class="options__item" v-for="item in options" :key="item.value" @click.stop="this.onOptionClick(item)">{{item.name}}</p>
        </div>
    </div>

</template>


<style scoped>



/*body {*/
/*  background: linear-gradient(35deg, red, purple);*/
/*}*/

/* <select> styles */
select {
  /* Reset */
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: max-content;
  height: 3em;
  padding: 0 4em 0 1em;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
  no-repeat right 0.8em center / 1.4em,
  linear-gradient(to left, rgba(255, 255, 255, 0.3) 3em, rgba(255, 255, 255, 0.2) 3em);
  color: white;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
/* <option> colors */
option {
  color: inherit;
  background-color: #320a28;
}
/* Remove focus outline */
&:focus {
   outline: none;
 }
/* Remove IE arrow */
&::-ms-expand {
   display: none;
 }
}



.wrapper{
    position: relative;
}
  .heading{
    width: max-content;
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
    overflow:hidden ;
  }

  .heading__arrow{

    margin: 0;
    display: inline-block;
    color: #EC7D18;
    background-color: transparent;
    transform: rotate(270deg);
    font-weight: 600;
    font-size: 16px;
    padding-top: 20px;
    /*transition: transform 0.3s ease;*/
  }
  .heading__arrow_rotate-reversed{
    transform: rotate(90deg);
    padding-top: 0;
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