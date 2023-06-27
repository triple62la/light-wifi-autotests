
<script>
import Card from "@/components/Card";
import CardContext from "@/components/ContextMenu";
import {mapState, mapActions, mapStores} from 'pinia'
import {useCardsStore} from "@/stores/cardsStore";
import {useContextStore} from "@/stores/contextStore";

export default {
  name: "MonitoringSection",
  components: {Card, CardContext},
  data(){
    return {
    x:""
  }

  },
  methods:{

    handleLeftClick(){
      this.contextStore.close()
    }

  },
  computed:{
    ...mapStores(useCardsStore, useContextStore)
  },
  mounted() {
    this.cardsStore.fetchCards()
  }

}
</script>

<template>
  <section @click="handleLeftClick" @click.right.prevent = "handleLeftClick" class="cards" >
    <Card v-for="item in this.cardsStore.items"
          :key="item.id"
          :card-data="item"
    ></Card>
    <CardContext/>
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
    padding: 50px;
    box-sizing: border-box;
    gap: 25px;
    max-width: 1000px;

  }
</style>