<script>
import {useContextStore} from "@/stores/contextStore";
import {mapActions} from "pinia";
import {apiCancelForced, apiSendDisabled, apiSendEnabled, apiSendForced} from "@/api/mock";
export default {
  name: "Card",

  emits:["cardRightClick"],
  props:{
    cardData:Object,

  },
  data(){
    return {
      cardStatus:this.cardData.status,
      contextMenuEnabled:[
          {
            name: "Проверить вне очереди",
            func: this.setForced,
            args:[]
      },
        {
          name: "Настройки ",
          func: this.openSettings,
          args:[]
        },
        {
          name: "Исключить из очереди",
          func: this.setDisabled,
          args:[]
        },
      ],
      contextMenuDisabled:[
        {
          name: "Включить в очередь",
          func: this.setEnabled,
          args:[]
        },
        {
          name: "Настройки ",
          func: this.openSettings,
          args:[]
        },
      ],
      contextMenuForced:[
        {
          name: "Отмена",
          func: this.cancelForced,
          args:[]
        },
        {
          name: "Настройки ",
          func: this.openSettings,
          args:[]
        },
      ],

    }
  },


  computed:{
    timeFormat(){
      const options = {
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        year: 'numeric', month: 'numeric', day: 'numeric',
      }
      return this.cardData.lastCheck? this.cardData.lastCheck.toLocaleDateString("ru-RU", options) : "проверяется"
    },
    getCardClass(){
      let statusClasses = this.cardData.status? "card "  + "card_type_" + this.cardData.status : "card"
      return  this.selected? statusClasses + " card_selected": statusClasses
    },

    getInternetClass(){
      return this.cardData.internet?
          "card__subtitle-icon " + "card__subtitle-icon_type_" + this.cardData.internet
          : "card__subtitle-icon"
    },
    contextMenu(){
      switch (true){
        case this.cardData.disabled :
          return this.contextMenuDisabled
        case this.cardData.status === "forced" :
          return this.contextMenuForced
        default:
          return this.contextMenuEnabled
      }


    }
  },

  methods:{

    getItemStatusClass(status){
      return status?
          "card__subtitle-icon " + "card__subtitle-icon_type_" + status
          : "card__subtitle-icon"
    },
    openSettings(){
      console.log("вызван метод openSettings")
    },
    ...mapActions(useContextStore, {contextOpen:"open", contextClose: "close"}),

    openContext(evt){
      evt.stopPropagation()
      this.contextClose()
      this.contextOpen({
        x:evt.pageX,
        y: evt.pageY,
        parent: this.cardData,
        items: this.contextMenu
      })
      this.cardData.selected = true

    },
    setDisabled(){
      apiSendDisabled(this.cardData.id)
          .then((data)=>{
            this.cardData.disabled=true
          })
    },
    setEnabled(){
      apiSendEnabled(this.cardData.id)
          .then((data)=>{
            this.cardData.disabled=false
          })
    },
    setForced(){
      if (this.cardData.status === "forced"){
        alert("Внеочередная проверка на данном обьекте уже была запрошена")
        return
      }
      apiSendForced(this.cardData.id)
          .then((data)=>{
            this.cardData.status = "forced"
            this.cardData.forcedQueueIndex = data.forcedQueueIndex

          })

    },
    cancelForced(){
      apiCancelForced(this.cardData.id)
          .then(()=>{
            this.cardData.status = ""
            this.cardData.forcedQueueIndex = 0
          })
    },
    test(){
      this.cardData.internet = "success"
    }
  },
}
</script>


<template>
  <div @click="test" @click.right.prevent.stop="openContext" class="card" :class="[{
    selected:this.cardData.selected,
    disabled_card: cardData.disabled},
    cardData.status, ]">
    <h3 class="card__title">{{this.cardData.title}}</h3>
    <img v-if="!cardData.disabled" class="card__icon" src="../assets/images/icons/free-icon-wifi-router-128px.png" alt="иконка карточки">
    <img v-else class="card__icon" src="../assets/images/icons/x-button.png" alt="отключено">
    <p v-show="!cardData.disabled" class="card__subtitle">Подключение<span  :class="getItemStatusClass(this.cardData.connection)"></span></p>
    <p v-show="!cardData.disabled" class="card__subtitle">Портал<span :class="getItemStatusClass(this.cardData.portal)"></span></p>
    <p v-show="!cardData.disabled" class="card__subtitle">Авторизация<span :class="getItemStatusClass(this.cardData.authorization)"></span></p>
    <p v-show="!cardData.disabled" class="card__subtitle">Интернет<span :class="getItemStatusClass(this.cardData.internet)"></span></p>
    <p v-show="!cardData.disabled" class="card__subtitle card__subtitle_type_lastcheck">{{timeFormat}}</p>
    <p v-show="cardData.forcedQueueIndex" class="card__index">{{cardData.forcedQueueIndex}}</p>
  </div>

</template>


<style scoped>
.card{
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
.selected{
  /*border: 2px #EC7D18 solid;*/
  background-color: rgba(211, 211, 211, 0.15);
}
.inprogress{
  background-color: #EC7D1826;
}
.disabled_card{
  background-color: #BABABA8C;
  border: 1px #C6C0BC solid;
}
.forced{
  background-color: #47178361;
}


.card__title{
  margin: 0 auto;
  font-size: 17px;
  font-weight: 900;
  line-height: 18px;
  text-align: center;

}
.card__icon{
  margin: 0 auto;
  object-fit: cover;
  object-position: center;
  width: 48px;
  height: 48px;
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
.card__subtitle-icon_type_success{
  background-image: url("@/assets/images/icons/icon-success.png");
}
.card__subtitle-icon_type_failed{
  background-image:  url("@/assets/images/icons/icon-failed.png");
}
.card__subtitle-icon_type_inprogress{
  background-image:  url("@/assets/images/icons/icon-inprogress.png");
}
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