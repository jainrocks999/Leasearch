initialstate={
    isFetching:false,
    Menu:[],
    MenuDetails:null,
}
export default (state=initialstate,action)=>{
switch (action.type){
//menu data
    case 'Fetch_Menu_Request':
    return {...state,isFetching:true}
    case 'Fetch_Menu_Success':
    return {...state,isFetching:false,Menu:action.payload}
    case 'Fetch_Menu_Error':
    return{...state,isFetching:false}

//menu details data
    case 'Fetch_Menu_Details_Request':
    return{...state,isFetching:true}
    case 'Fetch_Menu_Details_Success':
    return{...state,isFetching:false,MenuDetails:action.payload}   
    case 'Fetch_Menu_Details_Error':
    return{...state,isFetching:false}
    default:
             return state;
}
}
    
    
    
    
    
    
    
    
    
    
    
    