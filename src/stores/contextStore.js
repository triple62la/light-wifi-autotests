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
             document.addEventListener("click", this.close, {once:true})
             document.addEventListener("contextmenu", this.handleRmbClick, {once:true})
        },
        close(){
             this.parentEl.selected = false
            this.parentEl = {}
            this.isOpened = false
            document.removeEventListener("click", this.close, {once:true})
            document.removeEventListener("contextmenu", this.handleRmbClick, {once:true})
        },
        handleRmbClick(evt){
             evt.preventDefault()
            this.close()
        }


    }
})