import { Button, StyleSheet, Text, View } from 'react-native';

export default function ErrorScreen({ navigation }) {
    return (
        <View style={styles.container}>
         <Text>Probably in the wrong place buddy</Text>
         <Button title="Back home" onPress={() => navigation.navigate('Home')}/>
        </View>
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