import AsyncStorage from '@react-native-community/async-storage'

class Storage {

    static instance = new Storage();

    store = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
            return true;
        } catch (error) {
            console.error("Storage Error: " , error);
            return false;
        }
    }

    get = async (key)=> {
        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            console.error("Error obtener storage: ", error);
            throw Error(error)
        }
    }

    multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys)
        } catch (error) {
            console.error("Error al obtener todos ", error);
            throw Error(error)
        }
    }

    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.error("Error al obtener todos los keys ", error);
            throw Error(error)
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            return true;
        } catch (error) {
            console.error("Error remove storage: ", error);
            return false;
        }
    }
}

export default Storage;