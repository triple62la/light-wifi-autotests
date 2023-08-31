import {defineStore} from "pinia"
import {apiDeleteUser, apiEditUser, apiGetUsers} from "@/api/mock";


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
        selectedUser(state){
            return state.usersList.find(user=>user.selected)
        }


    },
    actions:{
        toggleBtns(){
            this.editBtnDisabled = !this.editBtnDisabled
            this.deleteBtnDisabled = !this.deleteBtnDisabled
        },
        async deleteSelectedUser(){
            const id = this.selectedUser.id
            await apiDeleteUser(id)
            this.selectedUser.unselect()
            const index = this.usersList.findIndex(user=>user.id === id)
            this.usersList.splice(index, 1)
        },
        async editUser(newData){
            console.log(newData)
            await apiEditUser(newData)
            const user  = this.usersList.find(user=>user.id === newData.id)
            Object.assign(user, newData)
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