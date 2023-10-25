<script setup>
import { apiSendDisabled, apiSendEnabled, apiSetForced} from "@/api/mock";
import {computed, ref} from "vue";
import {useTemplatesStore} from "@/stores/templatesStore";
import ContextMenu from "@imengyu/vue3-context-menu";


const props = defineProps({
  data:Object,
  methods:Object
})



const contextMenuEnabled=[
      {
        label: "Проверить вне очереди",
        onClick: setForced,
        args:[]
      },
      {
        label: "Настройки",
        onClick: (e)=>props.methods.openSettings(data.id),
        args:[]
      },
      {
        label: "Исключить из очереди",
        onClick: setDisabled,
        args:[]
      },
    ]


const store = useTemplatesStore()




const timeFormat = computed(()=>{
  const options = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    year: 'numeric', month: 'numeric', day: 'numeric',
  }
  return props.data.lastCheck? props.data.lastCheck.toLocaleDateString("ru-RU", options) : "проверяется"
})

const getCardClass = computed(()=>{
  let statusClasses = props.data.status? "card "  + "card_type_" + props.data.status : "card"
  return  props.data.selected? statusClasses + " card_selected": statusClasses
})

const getInternetClass = computed(()=>{
  return this.data.internet?
      "card__subtitle-icon " + "card__subtitle-icon_type_" + props.data.internet
      : "card__subtitle-icon"
})
const onContext=(e)=>{

  props.methods.openContext(e,contextMenuEnabled)
}

function getItemStatusClass(status){
  return status?
      "card__subtitle-icon " + "card__subtitle-icon_type_" + status
      : "card__subtitle-icon"
}

function setDisabled(){
  apiSendDisabled(props.data.id)
      .then((data)=>{
        store.setTemplateProperty("disabled", true, props.data.id)
      })
}

function setForced(){
  if (props.data.status === "forced"){
    alert("Внеочередная проверка на данном обьекте уже была запрошена")
    return
  }
  apiSetForced(props.data.id)
      .then((data)=>{
        store.setTemplateProperty("forced", true, props.data.id)
        //TODO Метод для обработки внеочередных проверок
      })
}
</script>

<template>
  <div  @click.right.prevent.stop="onContext"  :class="[props.data.status]">
    <slot name="title"></slot>
    <slot name="results"></slot>
    <p  class="card__subtitle card__subtitle_type_lastcheck">{{timeFormat}}</p>
  </div>
</template>

<style scoped>

.inprogress{
  background-color: #EC7D1826;
}
.failed{
  background-color: rgba(215, 45, 22, 0.6);
}

.forced{
  background-color: #47178361;
}

.card__subtitle{
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
}
.card__subtitle_type_lastcheck{
  padding-top: 10px;
}
.card__subtitle-icon{
  display: inline-block;
  width: 14px;
  height: 17px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


</style>