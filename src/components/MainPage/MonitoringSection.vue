
<script setup>
import Template from "@/components/MainPage/Templates/Template";
import {useTemplatesStore} from "@/stores/templatesStore";
import {onMounted} from "vue";
import {storeToRefs} from "pinia/dist/pinia";


const templatesStore = useTemplatesStore()
const {items} = storeToRefs(templatesStore)


onMounted(()=>{
  templatesStore.fetchTemplates()
})


</script>

<template>
  <section  class="cards" >
    <Template v-for="item in items"
          :key="item.id"
          :data="item">
    </Template>
  </section>
</template>


<style scoped>
  .cards{
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 25px;
    box-sizing: border-box;
    gap: 25px;
    max-width: 100%;

  }
</style>