import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import {GetCurrentPerformance} from './../src/helper'

export default function MovementDetailsScreen({route}) {
    // Get the parameters from the route
    const { description, link } = route.params;

    const PERFORMANCE_HISTORY_DUMMY = [
        {date: '2023-01-01 19:41:30', performance: '100', unit:'kg'},
        {date: '2022-09-01 19:41:30', performance: '95', unit:'kg'},
    ];

    let curPerformance = GetCurrentPerformance(PERFORMANCE_HISTORY_DUMMY);

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.link}>More details: {link}</Text>
            <Text style={styles.title}>Current Performance: {curPerformance.performance} {curPerformance.unit}</Text>
            <Text style={styles.title}>Performance History</Text>
            <FlatList
                data={PERFORMANCE_HISTORY_DUMMY}
                renderItem={({item}) => <Text style={styles.listItem}>- {item.date}: {item.performance} {item.unit}</Text>}
            />
            <Button title="Add a new performance" onPress={() => console.log('click')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    description:{},
    link: {
        paddingTop: 5,
        fontStyle: 'italic',
    },
    listItem: {
        paddingTop: 5,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 10
    },
});