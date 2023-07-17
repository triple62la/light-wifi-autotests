import {defineStore} from "pinia"
import {apiGetCards} from "@/api/mock";
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
            const cards =  await apiGetCards()
            this.items = cards.map(card=>Object.assign(card, {
                selected:false,

                }))
        },

    }
})