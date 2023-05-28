import { SafeAreaView, FlatList, Button, StyleSheet, Text, View } from 'react-native';
import {MOVEMENT_LIST} from './../src/constants'

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}><View style={styles.container}>
         <FlatList
            data={MOVEMENT_LIST}
            renderItem={({item}) => <Button title={item.key} onPress={() => navigation.navigate('Details', {title: item.key, movement: item.key, description: item.description, link: item.link})}/>}
        />
        </View></SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});