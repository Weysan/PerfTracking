import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import {storePerformance, getPerformanceHistory} from './../src/storeHelper'

export default function AddPerformanceScreen({ route, navigation }) {
    const { type } = route.params;
    const [weight, onChangeText] = React.useState('100');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Add your performance</Text>
                <View style={{ flexDirection:'row' }}>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        placeholder="kg"
                        keyboardType="numeric"
                        onChangeText={onChangeText}
                    />
                    <Text style={styles.inlineInput}>kg</Text>
                </View>

                <Button title="Persist" onPress={() => storePerformance(type, weight).then(() => navigation.goBack())}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inlineInput: {
        paddingTop: 15,
        fontSize: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
