<script setup>

  import {apiSendEnabled} from "@/api/mock";
  import {useTemplatesStore} from "@/stores/templatesStore";

  const contextActions=[
    {
      label: "Включить в очередь",
      onClick: setEnabled,
      args:[]
    },
    {
      label: "Настройки",
      onClick: (e)=>props.methods.openSettings(props.data.id),
      args:[]
    },
  ]
  const props = defineProps({
    data:Object,
    methods:Object
  })
  const store = useTemplatesStore()

  function onContext(e){
    props.methods.openContext(e,contextActions)
  }

  function setEnabled() {
    apiSendEnabled(props.data.id)
        .then((data)=>{
          store.setTemplateProperty("disabled", false, data.id)
        })
  }
</script>

<template>

  <div @click.right.prevent.stop="onContext" class="disabled_card" :class="{selected:props.data.selected}" >
  <slot name="title"></slot>
  </div>

</template>

<style scoped>

.disabled_card{
  background-color: #BABABA8C;
  border: 1px #C6C0BC solid;
}
.card__icon{
  margin: 0 auto;
  object-fit: cover;
  object-position: center;
  width: 48px;
  height: 48px;
}

</style>