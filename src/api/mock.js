import { v4 as uuidv4 } from 'uuid';



const cards = [
    {
        id:uuidv4(),
        title:"Центр",
        type:"light",
        ssid:"20_Centr_open_test",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"ДВ",
        type:"light",
        ssid:"20_DV_open_test",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Сибирь",
        type:"light",
        ssid: "light_2.0_open",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"СЗ",
        type:"light",
        ssid:"20_SZ_open_test",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck: new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Юг",
        type:"light",
        ssid:"20_Ug_open_test",
        status:"failed",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Урал",
        type:"light",
        ssid:"20_Ural_open_test",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Волга",
        type:"light",
        ssid:"20_Ural_open_test",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Keenetic",
        type:"keenetic",
        ssid:"OTT20KEEN",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck: new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Microtik",
        type:"microtik",
        ssid: "OTT_2.0_Mikrotik",
        status:"",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
    {
        id:uuidv4(),
        title:"Классика Сибирь",
        type:"classic",
        ssid:"Classic_2.0_eltex",
        status:"inprogress",
        results:{
            connection:"success",
            sms:"success",
            call:"success",
            esia:"success",
            room:"success",
            closed:"success",
            internet:"failed",
        },
        lastCheck:new Date(),
        disabled:false,
        forced:false,
        forcedQueueIndex:0,
    },
]

const users = [
    {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    }, {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    }, {
        id:uuidv4(),
        name:"Васян",
        lastName:"Копченый",
        patronymic : "",
        login:"whosYourDaddy",
        role:"user"
    },
    {
        id:uuidv4(),
        name:"Оран",
        lastName:"Лохматов",
        patronymic : "Гутанович",
        login:"monkeyBuisness",
        role:"admin"
    },
    {
        id:uuidv4(),
        name:"Пыпыт",
        lastName:"Хулемяувов",
        patronymic : "Пыпытович",
        login:"imapussy",
        role:"admin"
    },
]


const history = [
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"sms",
        ssid:"sib-esr-hi-fi-wifi-536",
        result:"success",
        customer:users[4]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"sms",
        ssid:"sib-esr-hi-fi-wifi-64574",
        result:"success",
        customer:users[4]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"sms",
        ssid:"sib-esr-hi-fi-wifi-782536",
        result:"success",
        customer:users[4]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"sms",
        ssid:"sib-esr-hi-fi-wifi-5347286",
        result:"success",
        customer:users[4]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"call",
        ssid:"sib-esr-hi-fi-wifi-55752236",
        result:"success",
        customer:users[1]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"call",
        ssid:"sib-esr-hi-fi-wifi-71428236",
        result:"success",
        customer:users[1]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"call",
        ssid:"sib-esr-hi-fi-wifi-52785752236",
        result:"success",
        customer:users[1]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"ordinary",
        authType:"call",
        ssid:"sib-esr-hi-fi-wifi-528242236",
        result:"success",
        customer:users[1]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"extra",
        authType:"esia",
        ssid:"sib-esr-hi-fi-wifi-52836",
        result:"success",
        customer:users[3]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"extra",
        authType:"esia",
        ssid:"sib-esr-hi-fi-wifi-154442236",
        result:"failed",
        customer:users[3]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"extra",
        authType:"esia",
        ssid:"sib-esr-hi-fi-wifi-18582236",
        result:"failed",
        customer:users[3]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"extra",
        authType:"esia",
        ssid:"sib-esr-hi-fi-wifi-154572236",
        result:"failed",
        customer:users[3]
    },
    {
        id: uuidv4(),
        date: new Date(),
        testType:"extra",
        authType:"esia",
        ssid:"sib-esr-hi-fi-wifi-15214136",
        result:"failed",
        customer:users[3]
    },
]



function apiGetTemplates(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(cards), 150)
    })
}

function cancelTests(cardId){
    return new Promise((resolve,reject)=>{
        if (!cardId){
            reject("Invalid CardID")
            return
        }
        setTimeout(()=>resolve({
            id:cardId,
                title:"ЕГЕ",
                status:"cancelled",
                connection:"",
                internet:"",
                lastCheck:""
        }), 250)
    })
}
function apiSendDisabled(cardId){
    return new Promise((resolve,reject)=>{
        if (!cardId){
            reject("Invalid CardID")
            return
        }
        setTimeout(()=>resolve({
            id:cardId,
            title:"ЕГЕ",
            status:"cancelled",
            connection:"",
            internet:"",
            lastCheck:"",

        }), 250)
    })
}
function apiSendEnabled(cardId){
    return new Promise((resolve,reject)=>{
        if (!cardId){
            reject("Invalid CardID")
            return
        }
        setTimeout(()=>resolve({
            id:cardId,
            title:"ЕГЕ",
            status:"",
            connection:"",
            internet:"",
            lastCheck:"",

        }), 250)
    })
}
function apiSetForced(cardId){
    return new Promise((resolve,reject)=>{
        if (!cardId){
            reject("Invalid CardID")
            return
        }
        setTimeout(()=>{

            let maxInd = getMaxQueueIndex(cards)
            maxInd++
            const cardInd = cards.findIndex(card => card.id === cardId)
            cards[cardInd].forcedQueueIndex = maxInd
            resolve({
                id:cardId,
                title:"ЕГЕ",
                status:"forced",
                connection:"",
                internet:"",
                lastCheck:"",
                forcedQueueIndex:maxInd,
            })
        }, 250)
    })
}
function getMaxQueueIndex(items){
    return Math.max(...items.map(item=>item.forcedQueueIndex))
}
function apiCancelForced(cardId){
    return new Promise((resolve,reject)=>{
        if (!cardId){
            reject("Invalid CardID")
            return
        }
        setTimeout(()=>{

            resolve({
                id:cardId,
                title:"ЕГЕ",
                status:"",
                connection:"",
                internet:"",
                lastCheck:"",
                forcedQueueIndex:0,
            })
        }, 250)
    })
}
function apiGetUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(users), 400)
    })
}

function apiDeleteUser(userID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(users), 400)
    })
}
function apiEditUser(userID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({status:"success"}), 400)
    })
}

function apiGetHistory(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(history), 400)
    })
}

export {
    cards,
    apiGetTemplates,
    apiSendDisabled,
    apiSendEnabled,
    apiSetForced,
    apiCancelForced,
    apiGetUsers,
    apiDeleteUser,
    apiEditUser,
    apiGetHistory
}