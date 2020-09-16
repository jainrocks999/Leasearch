import AsyncStorage from '@react-native-community/async-storage';

export const getData = async(name) => {
    try {
        const data = await AsyncStorage.getItem(`@${name}`)
      
       
        return data;
      
    } catch(e) {
        
    }
}

export const saveData = async(name, data) => {
  
    try {
        await AsyncStorage.setItem(`@${name}`, data)
        return true;
    } catch(e) {
       
        return false;
    }
}

export const removeData = async(name) => {
  
    try {
        const res = await AsyncStorage.removeItem(`@${name}`)
      
        return true;
    } catch(e) {
      
        return false;
    }
}