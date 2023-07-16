import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storePerformance(movementType, weightInKg) {
    getPerformanceHistory(movementType).then((history) => {
        initData = []
        if (history) {
            initData = history
        }
        initData.push(getObjectToStore(weightInKg))
        try {
            realKey = '@' + movementType
            const jsonValue = JSON.stringify(initData)
            AsyncStorage.setItem(realKey, jsonValue)
        } catch (e) {
            // saving error
            console.warn(e)
        }
    })
}

getObjectToStore = (weightInKg) => {
    let currentDate = new Date()
    return {
        "date": currentDate,
        "weight": weightInKg,
        "unit": "kg"
    };
}

export async function getPerformanceHistory(movementType) {
    try {
      realKey = '@' + movementType
      const jsonValue = await AsyncStorage.getItem(realKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.warn(e)
    }
  }