import {defineStore} from "pinia"
import {apiGetUsers} from "@/api/mock";


export const useUsersStore = defineStore("users", {
    state:()=>({
        usersList:[],
        editBtnDisabled: true,
        deleteBtnDisabled: true,
    }),
    getters:{
        users(state){
            return state.usersList
        },
        selectedUser(){

        }

    },
    actions:{
        toggleBtns(){
            this.editBtnDisabled = !this.editBtnDisabled
            this.deleteBtnDisabled = !this.deleteBtnDisabled
        },
        deleteUser(id){
            const index = usersList.findIndex(user=>user.id === id)
            usersList.splice(index, 1)
        },
        addUser(obj){
            usersList.push(obj)
        },
        async fetchUsers(){
            this.usersList =  await apiGetUsers()
            this.usersList.forEach(user=>{
                user.unselect = ()=>{
                    this.toggleBtns()
                    user.selected = false
                    document.removeEventListener("click", user.unselect, {once:true})
                    //TODO делаем геттер selected User
                }
                user.select = ()=>{
                    this.toggleBtns()
                    user.selected = true
                    document.addEventListener("click", user.unselect, {once:true})
                }
            })

        }
    }
})