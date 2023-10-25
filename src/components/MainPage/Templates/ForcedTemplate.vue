

<script setup>
import ContextMenu from "@imengyu/vue3-context-menu";
import {apiCancelForced} from "@/api/mock";
import {useTemplatesStore} from "@/stores/templatesStore";


const props=defineProps({
  data:Object,
  methods:Object
})

const store = useTemplatesStore()

const contextMenuForced=[
  {
    label: "Отмена",
    onClick: cancelForced,
    args:[]
  },
  {
    label: "Настройки ",
    onClick: ()=>console.log("Вызван метод открытия настроек"),
    args:[]
  },
]

const openContextMenu =(e)=>{
  ContextMenu.showContextMenu({
    x:e.x,
    y:e.y,
    theme:"dark",
    items:contextMenuForced
  })
}

function cancelForced(){
  apiCancelForced(props.data.id)
      .then(()=>{
        store.setTemplateProperty("status",  "", props.data.id)
        props.data.forcedQueueIndex = 0
      })
}



</script>


<template>
  <div  @click="test" @click.right.prevent.stop="openContextMenu" class="card" :class="[{
    selected:props.data.selected},
    data.status, ]">
    <slot name="title"></slot>
    <slot name="results"></slot>
  </div>
</template>


<style scoped>

.card__index{
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 0;
  top:15px;
  left:15px;
  background-color: #C4C4C4;
  border-radius: 50%;
  text-align: center;
  color: black;
}


</style>