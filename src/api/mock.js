const cards = [
    {
        id:crypto.randomUUID(),
        title:"ОГО",
        status:"",
        connection:"",
        internet:"",
        lastCheck:new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"АГА",
        status:"",
        connection:"",
        internet:"",
        lastCheck:new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"ЕГЕ",
        status:"",
        connection:"",
        internet:"",
        lastCheck:new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"УГУ",
        status:"",
        connection:"",
        internet:"",
        lastCheck: new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"ОГО",
        status:"",
        connection:"",
        internet:"",
        lastCheck:new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"АГА",
        status:"",
        connection:"",
        internet:"",
        lastCheck:new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"ЕГЕ",
        status:"",
        connection:"",
        internet:"",
        lastCheck:new Date(),
        disabled:false,
        forcedQueueIndex:0,
    },
    {
        id:crypto.randomUUID(),
        title:"ластецкая",
        status:"",
        connection:"",
        internet:"",
        lastCheck: new Date(),
        disabled:false,
        forcedQueueIndex:0,
    }
]

function getCards(){
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
function apiSendForced(cardId){
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


export {cards, getCards, apiSendDisabled, apiSendEnabled, apiSendForced, apiCancelForced}