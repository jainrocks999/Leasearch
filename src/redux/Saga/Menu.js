import { takeEvery,put,call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

 function* fetchData(action){
   console.log('qqq'+action.url)
   try{
   const response=yield call(Api.fetchDataByGET,action.url)
        console.log(''+JSON.sresponse)
        if (response.meta.code == '200') {
            yield put({
                type:'Fetch_Menu_Success',
                payload:response.data.data,
    
            })
            
        } else {
            console.log(response.meta.message)
            Alert.alert(
                'Explored',
                response.meta.message,
                [
                    {text:'Ok',style:'cancel',onPress:()=>console.log('Cancel Pressed')}
                ]
            )
            yield put({
                type:'Fetch_Menu_Error',
            }) 
      
        }
    } catch (error) {
        console.log('dddddddd'+error)
        
        yield put({
            type:'Fetch_Menu_Error',
        }) 
    }  

 }

export default function* MenuSaga(){
    yield takeEvery('Fetch_Data_Request',fetchData)
}
//  / export default function* taxiSaga(){
// //     yield takeEvery('Fetch_Zone_Request',fetchZone)
// //     yield takeEvery('Fetch_Taxi_Request',fetchTaxi)
// //     yield takeEvery('Request_Transfer_Request',requestTransfer)
// // }
// //         
// // function* fetchTaxi(action) {
// //     try {
// //         const formdata=new FormData();
// //         formdata.append('device_token',action.devicetoken)
// //         formdata.append('device_id',action.deviceid)
// //         formdata.append('lang',action.lang)
// //         formdata.append('country',action.country)
// //         formdata.append('module_id',action.moduleid)
// //         formdata.append('slug',action.slug)
// //         formdata.append('cat_id',action.catid)
          
// //         const response=yield call(Api.fetchDataByPOST,action.url,formdata)
// //         console.log(response)
// //         if (response.meta.code == '200') {
// //             yield put({
// //                 type:'Fetch_Taxi_Success',
// //                 payload:response.data.post,
// //             })
            
// //         } else {
// //             console.log(response.meta.message)
// //             Alert.alert(
// //                 'Explored',
// //                 response.meta.message,
// //                 [
// //                     {text:'Ok',style:'cancel',onPress:()=>console.log('Cancel Pressed')}
// //                 ]
// //             )
// //             yield put({
// //                 type:'Fetch_Taxi_Error',
// //             }) 
// //         }
       
// //     } catch (error) {
// //         console.log(error)
     
// //         yield put({
// //             type:'Fetch_Taxi_Error',
// //         }) 
// //     }  
// // }

// // function* requestTransfer(action) {
// //     try {
// //         const formdata=new FormData();
// //         formdata.append('device_token',action.devicetoken)
// //         formdata.append('device_id',action.deviceid)
// //         formdata.append('lang',action.lang)
// //         formdata.append('country',action.country)
// //         formdata.append('date',action.date)
// //         formdata.append('pick_time',action.time)
// //         formdata.append('flight_number',action.flitghtno)
// //         formdata.append('drop_off',action.dropoff)
// //         formdata.append('pick_up',action.pickup)
// //         formdata.append('people',action.noofpeople)
// //         formdata.append('luggage',action.luggage)
// //         formdata.append('comments',action.comment)
// //         formdata.append('item_slug',action.slug)
// //         formdata.append('uid',action.uid)

// //         const response=yield call(Api.fetchDataByPOST,action.url,formdata)
// //         console.log(response)
// //         if (response.meta.code == '200') {
// //             Alert.alert(
// //                 'Explored',
// //                 response.meta.message,
// //                 [
// //                     {text:'Ok',style:'cancel',onPress:()=>console.log('Cancel Pressed')}
// //                 ]
// //             )
// //             yield put({
// //                 type:'Request_Transfer_Success',
// //             })
// //             action.navigation.navigate('Home')
// //         } else {
// //             console.log(response.meta.message)
// //             Alert.alert(
// //                 'Explored',
// //                 response.meta.message,
// //                 [
// //                     {text:'Ok',style:'cancel',onPress:()=>console.log('Cancel Pressed')}
// //                 ]
// //             )
// //             yield put({
// //                 type:'Request_Transfer_Error',
// //             }) 
// //         }
       
// //     } catch (error) {
// //         console.log(error)
     
// //         yield put({
// //             type:'Request_Transfer_Error',
// //         }) 
// //     }  
// // }




