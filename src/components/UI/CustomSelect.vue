//для корректной работы компонента необходимо передать в пропс "options" массив с обьектами вида {name:str, value:str}
// а так же в родительском компонентe подписаться  c помощьью v-model на selected-value
// Пример: CustomSelect v-model:selected-value="searchBar.selectedType" :default-heading="0" :options="selectOptions"/>
<script>

export default {
  name: "CustomSelect",
  props:{
    options:{
      type:Array,
      default:[],
      required: true
    },
    defaultHeading:{
      type:Number,
      default: null,
    },
    selectedValue:{
      type:String,
      required:false
    },
    extraClass:{
      type:Object,
      required:false
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
     this.closeOptions()
    },
    openOptions(){
      this.isOptionsShown=true
      document.addEventListener("click", this.closeOptions)
    },
    closeOptions(){
      this.isOptionsShown=false
      document.removeEventListener("click", this.closeOptions)
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
    <div class="wrapper" :style="extraClass">
        <div @click.stop="openOptions" class="heading">
            <p :style="extraClass" class="heading__text">{{heading || "Выберите"}}</p>
            <button type="button" class="heading__arrow" :class="{'heading__arrow_rotate-reversed':this.isOptionsShown}">&lt;</button>
        </div>
        <div v-show="isOptionsShown" class="options" :style="optionsPosition" >
            <p class="options__item" v-for="item in options" :key="item.value" @click.stop="this.onOptionClick(item)">{{item.name}}</p>
        </div>
    </div>

</template>


<style scoped>

.wrapper{
  position: relative;
  border-bottom: #EC7D18 2px solid;
  width: max-content;
  display: flex;


}
.heading{
  margin: auto;
  width: max-content;
  height: 32px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #EC7D18;

}
.heading__text{
  margin: 0;
  font-style: italic;
  font-weight: 400;
  font-size:  16px;
  padding: 0 5px 0 0;
  overflow:hidden ;
  color: #d5d5d5;
}

.heading__arrow{

  margin: 0;
  display: flex;
  color: #EC7D18;
  background-color: transparent;
  transform: rotate(270deg);
  font-weight: 600;
  font-size: 16px;
  /*transition: transform 0.3s ease;*/
  border: none;
  outline: none;
  align-items: center;
  justify-content: center;
  cursor:pointer ;


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
    width: max-content;
    background-color: #3D3D3D;
    padding: 10px;
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
    padding: 5px;
  border-radius: 5px;

}
.options__item:hover{
    opacity: 0.6;
    background-color: #636363;
}
</style>