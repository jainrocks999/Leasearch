import AsyncStorage from '@react-native-community/async-storage';

export const getData = async(name) => {
    try {
        const data = await AsyncStorage.getItem(`@${name}`)
        console.log(`get ${name} from local`,data)
       
        return data;
      
    } catch(e) {
        console.warn('error: get data from local')
    }
}

export const saveData = async(name, data) => {
    console.log(`save ${name} in local`, data)
    try {
        await AsyncStorage.setItem(`@${name}`, data)
        return true;
    } catch(e) {
        console.warn(`error: save ${name} in local`, e)
        return false;
    }
}

export const removeData = async(name) => {
    console.log(`remove ${name} in app`)
    try {
        const res = await AsyncStorage.removeItem(`@${name}`)
        console.log(res, "ressss")
        return true;
    } catch(e) {
        console.warn(`error: remove ${name} in local`, e)
        return false;
    }
}