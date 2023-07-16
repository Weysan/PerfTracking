import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import {GetCurrentPerformance} from './../src/helper'
import {getPerformanceHistory} from './../src/storeHelper'
import EmptyStatePerformance from './../src/components/EmptyStatePerformance'
import Separator from './../src/components/Separator'
import MonthlyChart from './../src/components/MonthlyChart'

export default function MovementDetailsScreen({route, navigation}) {
    const [performance, setPerformance] = React.useState([]);
    const [view, setView] = React.useState("graph");
    // Get the parameters from the route
    const { title, description, link } = route.params;
    getPerformanceHistory(title).then((data) => { if (data && performance.length == 0) { setPerformance(data); } });

    let curPerformance = GetCurrentPerformance(performance);

    currentPerformanceRender = <EmptyStatePerformance />
    if (curPerformance !== null) {
        currentPerformanceRender = <Text style={styles.titleCurrent}>Current Performance: {curPerformance.weight} {curPerformance.unit}</Text>;
    }

    content = <MonthlyChart performance={performance} />
    if (view === 'list') {
        content = <FlatList
        data={performance}
        renderItem={({item}) => { perfDate = new Date(item.date); return(<Text style={styles.listItem}>- {perfDate.toLocaleString()}: {item.weight} {item.unit}</Text>)}}
        />
    }
    
    return (
        <View style={styles.containerDetail}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.link}>More details: {link}</Text>
            {currentPerformanceRender}
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.buttonTab, view == 'graph' ? styles.buttonTabActive : '']}  onPress={() => setView('graph')}>
                    <Text style={[styles.buttonLabel, view == 'graph' ? styles.buttonLabelActive : '']}>Graph</Text>
                </Pressable>
                <Pressable style={[styles.buttonTab, view == 'list' ? styles.buttonTabActive : '']}  onPress={() => setView('list')}>
                    <Text style={[styles.buttonLabel, view == 'list' ? styles.buttonLabelActive : '']}>Historic data</Text>
                </Pressable>
            </View>
            {content}
            <Button title="Log a new performance" onPress={() => navigation.navigate('AddPerformance', {"type":title})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    titleCurrent: {
        fontSize: 30,
        paddingTop: 20,
    },
    title: {
        fontSize: 30,
    },
    description:{
        marginTop: 0,
    },
    link: {
        paddingTop: 5,
        fontStyle: 'italic',
    },
    listItem: {
        paddingTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonTab: {
        padding: 10,
        borderColor: "#000",
        width: "50%",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 15,
    },
    buttonTabActive: {
        backgroundColor: 'grey',
        color: '#fff',
    },
    buttonLabel: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    buttonLabelActive: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    containerDetail: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 10
    },
});