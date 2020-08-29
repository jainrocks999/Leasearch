initialstate={
    isFetching:false,
    Menu:[],
}
export default (state=initialstate,action)=>{
switch (action.type){
    
    case 'Fetch_Menu_Request':
    return {...state,isFetching:true}
    case 'Fetch_Menu_Success':
    return {...state,isFetching:false,Menu:action.payload}
    case 'Fetch_Menu_Error':
    return{...state,isFetching:false}
    default:
             return state;
}
}
    
    
    
    
    
    
    
    
    
    
    
    