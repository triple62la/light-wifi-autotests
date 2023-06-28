import {defineStore} from "pinia"

export const useRootStore = defineStore("root", {
    state:()=>({
        burgerBtnOpened:true,
        navBarOpened:true,
    }),
    actions:{
        navBarToggleOpened(){
            this.burgerBtnOpened = !this.burgerBtnOpened
            this.navBarOpened = !this.navBarOpened
        },

    }
})