const initialState ={
    data : [] ,
    type:"images",
    total:0,
    query:"",
    category:""
}

export const dataReducer = (state = initialState , action) => {
    switch(action.type){
        case 'CHANGE_TYPE' : return {
            ...state,
            type : action.payload
        }
        case 'CHANGE_QUERY' : return {
            ...state,
            query : action.payload
        }
        case 'CHANGE_CATEGORY' : return {
            ...state,
            category : action.payload
        }
        case 'ADD_DATA' : return {
            ...state,
            data : action.payload,
            total:action.payload.total
        }
    
        default : return state
    }
} 
