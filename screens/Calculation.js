import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, FlatList, Switch } from 'react-native';
import {GetBBPlatesCount} from './../src/helper'

export default function CalculationScreen({ }) {
    const [weight, onChangeText] = React.useState('100');
    const [percent, onChangePercent] = React.useState('90');
    const [barWeight20Kg, onChangeBarChange] = React.useState(true);

    result = weight * percent / 100;
    barWeight = barWeight20Kg ? 20 : 15; // in Kg
    plates = GetBBPlatesCount(result, barWeight)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ flexDirection:'row' }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={weight}
                        placeholder="kg"
                        keyboardType="numeric"
                    />
                    <Text style={styles.inlineInput}>kg</Text>
                </View>
                <View style={{ flexDirection:'row' }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePercent}
                        value={percent}
                        placeholder="%"
                        keyboardType="numeric"
                    />
                    <Text style={styles.inlineInput}>%</Text>
                </View>
                <Text style={styles.result}>Result: {result} kg</Text>
                <Switch
                style={{ marginTop: 30 }}
                onValueChange={onChangeBarChange}
                value={barWeight20Kg}
                />
                <Text style={styles.plates}>Plates ({barWeight} kg barbell)</Text>
                <FlatList
                    data={plates}
                    renderItem={({item}) => <Text>{item.weight} {item.unit}: {item.count}</Text>}
                />
            </View>
            </TouchableWithoutFeedback>
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
    result: {
        paddingTop: 50,
        fontSize: 30,
    },
    plates: {
        fontSize: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});