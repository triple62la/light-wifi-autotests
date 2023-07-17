import {defineStore} from "pinia"
import {apiGetUsers} from "@/api/mock";


export const useUsersStore = defineStore("users", {
    state:()=>({
        users:[],
    }),
    actions:{
        selectUser(id){
            for (const user of users){
                user.selected = user.id === id;
            }
        },
        deleteUser(id){
            const index = users.findIndex(user=>user.id === id)
            users.splice(index, 1)
        },
        addUser(obj){
            users.push(obj)
        },
        async fetchUsers(){
           this.users = await apiGetUsers()
        }
    }
})