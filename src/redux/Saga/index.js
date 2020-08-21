import React,{Component} from 'react';
import {Alert} from 'react-native';
import {takeEvery,put,call} from 'redux-saga/effects';
import Actions from '../Actions';
import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../Constants';
import { StackActions ,NavigationActions} from 'react-navigation';
import qs from 'qs';

export default function* authSaga(){
    yield takeEvery('Dispatcher',functions)
}         

// export default function* authSaga(){
//     yield takeEvery('Fetch_TourData_Request',fetchTourData)
//     yield takeEvery('Fetch_User_Request',fetchUser)
//     yield takeEvery('Fetch_Profile_Request',fetchProfile)
//     yield takeEvery('User_Register_Request',doRegister)
//     yield takeEvery('Influencer_Register_Request',doInfluencerRegister)
//     yield takeEvery('Business_Register_Request',doBusinessRegister)
//     yield takeEvery('PhotoG_Register_Request',doPhotoGRegister)
//     yield takeEvery('Taxi_Register_Request',doTaxiRegister)
//     yield takeEvery('User_Login_Request',doLogin)
//     yield takeEvery('Change_Password_Request',changePassword)
//     yield takeEvery('Set_ProfileEmpty_Request',setProfileEmpty)
//     yield takeEvery('Set_ProfilPic_Request',setProfilePic)
//     yield takeEvery('Fetch_Bookings_Request',fetchBookings)
//     yield takeEvery('Remove_FcmToken_Request',unsetFcm)
// }