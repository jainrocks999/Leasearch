import axios from 'axios';
import Constants from '../Constants';


export default class Api {

    static fetchDataByPOST=async(url,data,token)=>{
        try {
            const response=await axios({
                method:'POST',
                headers:{ 'content-type': 'application/json','Accept': 'application/json'},
                url: Constants.MainUrl+url,
                data
            })
           return response.data
        } catch (error) {
            throw error
        }
    }
  
    static fetchDataByGET=async(url,token)=>{
      try {
        const response=await axios({
            method:'GET',
             headers: {
                'Authorization': 'bearer ' + token
            },
            url:url 
        })
         return response.data
      } catch (error) {
          throw error
      }
  }
  
  
  
  }