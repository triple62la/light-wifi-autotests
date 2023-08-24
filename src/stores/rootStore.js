import {defineStore} from "pinia"

export const useRootStore = defineStore("root", {
    state:()=>({
        burgerBtnOpened:true,
        navBarOpened:true,
        userRoles:[
            {value:"user",name:"Пользователь"},
            {value:"admin",name:"Администратор"},
            {value:"stand",name:"Cтенд"},
        ],
    }),
    getters:{

    },
    actions:{
        navBarToggleOpened(){
            this.burgerBtnOpened = !this.burgerBtnOpened
            this.navBarOpened = !this.navBarOpened
        },

    }
})