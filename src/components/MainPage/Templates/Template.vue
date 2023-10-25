
<script setup>
import {ref, defineProps, computed} from "vue";
import RegularTemplate from "./RegularTemplate"
import DisabledTemplate from "./DisabledTemplate"
import ForcedTemplate from "./ForcedTemplate"
import ContextMenu from "@imengyu/vue3-context-menu";
import Results from "@/components/MainPage/Results/Results";

const props = defineProps({
  data:Object
})

const selected = ref(false)

const template = computed(()=>{
  switch (true){
    case props.data.disabled:
      return DisabledTemplate
    case (props.data.forced):
      return ForcedTemplate
    default:
      return RegularTemplate
  }
})


const openSettings = (tempId)=>console.log("Запрошен метод открытия настроек для обьекта с id=", tempId)
const setSelected = (value)=>selected.value = value
const openContext = (e, contextActions, )=>{
    ContextMenu.showContextMenu({
      x:e.x,
      y:e.y,
      theme:"dark",
      items:contextActions,
      onClose:()=>setSelected(false)
    })
   setSelected(true)
}
</script>

<template>
  <component  :class="['template', {selected}]" :is="template" :data="data" :methods="{openSettings, openContext}">
    <template v-slot:title>
      <h3 class="title">{{ props.data.title }}</h3>
      <img v-if="data.disabled" class="icon" src="../../../assets/images/icons/x-button.png" alt="отключено">
<!--      <img  v-else class="icon" src="../../../assets/images/icons/free-icon-wifi-router-128px.png" alt="иконка карточки">-->
      <p class="subtitle">{{props.data.ssid}}</p>
    </template>
    <template v-slot:results>
      <Results :results="props.data.results" />
    </template>
  </component>
</template>



<style>

.template{
  font-family: Arial sans-serif;
  width: 235px;
  min-height: 220px;
  border: 1px #EC7D18 solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 10px 0;
  row-gap: 7px;
  position: relative;
}
.title{
  margin: 0 auto;
  font-size: 17px;
  font-weight: 900;
  line-height: 18px;
  text-align: center;

}
.subtitle{
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
}
.icon{
  margin: 0 auto;
  object-fit: cover;
  object-position: center;
  width: 48px;
  height: 48px;
}
.selected{
  border: 2px #EC7D18 solid;
  background-color: rgba(211, 211, 211, 0.15);
}

</style>