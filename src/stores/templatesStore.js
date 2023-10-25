import {defineStore} from "pinia"
import {apiGetTemplates} from "@/api/mock";
export const useTemplatesStore = defineStore("templates", {
    state: ()=> ({
        items: []
    }),
    getters:{
        templates(state){
            return state.items
        }
    },
    actions:{
        async fetchTemplates(){
            const templates =  await apiGetTemplates()
            this.items = templates.map(template=>({...template,selected:false}))
        },
        setTemplateProperty(property,value,templateId){
            const template = this.templates.find(template=>template.id === templateId)
            template[property] = value
        },
        setStatus(value, templateId){
            return (value, templateId)=>this.setTemplateProperty("status", value, templateId)
        }
    }
})