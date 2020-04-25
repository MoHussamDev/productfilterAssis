export const handlers = {
    reducer: '',
    mainChange : (e,cb)=>{
        cb({
            type:'HANDLECHANGES',
            payload:{[e.target.name]: e.target.value}
        })
},
    nestedChange:(e,cb)=>{
        cb({
            type:'NESTEDCHANGE',
            payload:{
                target:e.target.name,
                value : e.target.value
            }
        })
},
    birthDateReducer:(e,cb)=>{
        cb({
            type:'BIRTHDATEREDUCER',
            payload:{
                target:e.target,
                value : e.value
            }
        })
},

}