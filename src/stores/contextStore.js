import {defineStore} from "pinia"

export const useContextStore = defineStore("context", {
    state: ()=> ({
        x: null,
        y:null,
        isOpened:false,
        parentEl: {},
        items:[],

    }),

    actions:{
         open(init){
             this.x = init.x
             this.y = init.y
             this.parentEl = init.parent
             this.items = init.items
             this.isOpened = true
        },
        close(){
             this.parentEl.selected = false
            this.parentEl = {}
            this.isOpened = false

        },

    }
})