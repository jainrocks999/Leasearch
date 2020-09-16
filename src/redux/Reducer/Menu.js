initialstate={
    isFetching:false,
    Menu:[],
    MenuDetail:'',
    NewsFeed:[],
    Footer:[],
}
export default (state=initialstate,action)=>{
    // console.log('reducer data '+type)
    console.log('reducer data '+ JSON.stringify(action.payload))
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
    return{...state,isFetching:false,MenuDetail:action.payload}   
    case 'Fetch_Menu_Details_Error':
    return{...state,isFetching:false}

    //News feed data
    case 'Fetch_News_Feed_Request':
    return {...state,isFetching:true}
    case 'Fetch_News_Feed_Success':
    return {...state,isFetching:false,NewsFeed:action.payload}
    case 'Fetch_News_Feed_Error':
    return{...state,isFetching:false}

//Footer data
    case 'Fetch_Footer_Request':
    return {...state,isFetching:true}
    case 'Fetch_Footer_Success':
    return {...state,isFetching:false,Footer:action.payload}
    case 'Fetch_Footer_Error':
    return{...state,isFetching:false}

    default:

             return state;
}
}
    
    
    
    
    
    
    
    
    
    
    
    