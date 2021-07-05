const initialState ={
    data : [] ,
    type:"images",
    total:0
}

export const dataReducer = (state = initialState , action) => {
    switch(action.type){
        case 'CHANGE_TYPE' : return {
            ...state,
            type : action.payload
        }
        case 'ADD_DATA' : return {
            ...state,
            data : action.payload,
            total:action.payload.total
        }
    
        default : return state
    }
} 
