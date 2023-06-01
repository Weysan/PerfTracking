import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import {GetCurrentPerformance} from './../src/helper'
import {getPerformanceHistory} from './../src/storeHelper'

export default function MovementDetailsScreen({route, navigation}) {
    const [performance, setPerformance] = React.useState([]);
    // Get the parameters from the route
    const { title, description, link } = route.params;

    getPerformanceHistory(title).then((data) => { if (data) { setPerformance(data) } });

    let curPerformance = GetCurrentPerformance(performance);

    currentPerformanceRender = null
    if (curPerformance !== null) {
        currentPerformanceRender = <Text style={styles.title}>Current Performance: {curPerformance.weight} {curPerformance.unit}</Text>;
    }
 
    historyRender = null;
    if (performance.length) {
        historyRender = <Text style={styles.title}>Performance History</Text>;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.link}>More details: {link}</Text>
            {currentPerformanceRender}
            {historyRender}
            <FlatList
                data={performance}
                renderItem={({item}) => { perfDate = new Date(item.date); return(<Text style={styles.listItem}>- {perfDate.toLocaleString()}: {item.weight} {item.unit}</Text>)}}
            />
            <Button title="Add a new performance" onPress={() => navigation.navigate('AddPerformance', {"type":title})}/>
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