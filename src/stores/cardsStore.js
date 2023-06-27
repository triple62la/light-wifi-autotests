import {defineStore} from "pinia"
import {getCards} from "@/api/mock";
export const useCardsStore = defineStore("cards", {
    state: ()=> ({
        items: []
    }),
    getters:{
        cards(state){
            return state.items
        }
    },
    actions:{
        async fetchCards(){
            const cards =  await getCards()
            this.items = cards.map(card=>Object.assign(card, {
                selected:false,

                }))
        },

    }
})