import { takeEvery,put,call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

 function* fetchMenuData(action){
  
   try{
   const response=yield call(Api.fetchDataByGET,action.url)
       
        if (response.code == '200') {
            
            yield put({
                type:'Fetch_Menu_Success',
                payload:response.data,
    
            })
            
        } else {
          
            yield put({
                type:'Fetch_Menu_Error',
            }) 
      
        }
    } catch (error) {
        yield put({
            type:'Fetch_Menu_Error',
        }) 
    }  

 }
 function* fetchMenuDetailsData(action){
     console.log('Api fetch '+action)
   
    try{
    const response=yield call(Api.fetchDataByGET,action.url)
         console.log('Api fetch good '+JSON.stringify(response))
         console.log('Api fetch '+response.code)
         if (response.code == '200') {
           console.log('Api fetch dekho '+JSON.stringify(response.data))
             yield put({
                 type:'Fetch_Menu_Details_Success',
                 payload:response.data,
     
             })
             
         } else {
             yield put({
                 type:'Fetch_Menu_Details_Error',
             }) 
       
         }
     } catch (error) {
         yield put({
             type:'Fetch_Menu_Details_Error',
         }) 
     }  
 
  }

//footer data
  function* fetchFooterData(action){
 
   try{
   const response=yield call(Api.fetchDataByGET,action.url)
       
        if (response.code == '200') {
           
            yield put({
                type:'Fetch_Footer_Success',
                payload:response.data,
    
            })
            
        } else {
            console.log(response.meta.message)
            yield put({
                type:'Fetch_Footer_Error',
            }) 
      
        }
    } catch (error) {
        yield put({
            type:'Fetch_Footer_Error',
        }) 
    }  

 }

//news feed
 function* fetchNewsFeed(action){
  
   try{
   const response=yield call(Api.fetchDataByGET,action.url)
       
        if (response.code == '200') {
            
            yield put({
                type:'Fetch_News_Feed_Success',
                payload:response.data,
    
            })
            
        } else {
           
            yield put({
                type:'Fetch_News_Feed_Error',
            }) 
      
        }
    } catch (error) {
        yield put({
            type:'Fetch_News_Feed_Error',
        }) 
    }  

 }
 
export default function* MenuSaga(){
    yield takeEvery('Fetch_Menu_Request',fetchMenuData);
    yield takeEvery('Fetch_Menu_Details_Request',fetchMenuDetailsData);
yield takeEvery('Fetch_Footer_Request',fetchFooterData);
yield takeEvery('Fetch_News_Feed_Request',fetchNewsFeed);

}
