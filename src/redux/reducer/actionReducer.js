const initState={
    flashCard:{}
}


export const actionReducer=(store=initState,action)=>{
   
    switch(action.type){
       
        case 'CREATE_FLASH_CARD':


            return {  ...store,flashCard:action.paylaod }
    }

}