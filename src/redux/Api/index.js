import axios from 'axios';
import Constants from '../Constants';


export default class Api {

    static fetchDataByPOST=async(url,data)=>{
        try {
            const response=await axios({
                method:'POST',
                headers:{ 'content-type': 'application/json','Accept': 'application/json'},
                url: Constants.BasicUrl+url,
                data
            })
           return response.data
        } catch (error) {
            throw error
        }
    }
  
    static fetchDataByGET=async(url)=>{
        console.log('kkkkkkkkkkk'+Constants.BasicUrl+url)
      try {

        const response=await axios({
            method:'GET',
            url:Constants.BasicUrl + url
        })
          console.log('ppp'+response.data)
         return response.data
      } catch (error) {
            console.log('ppp'+error)
          throw error
      }
  }
  
  
  
  }