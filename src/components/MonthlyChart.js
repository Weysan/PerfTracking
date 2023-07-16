import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {GetGraphPerformances} from '../helper'

export default function MonthlyChart(props) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    var today = new Date();
    let months = [];
    let dataSet = [];
    for (i = 3; i >=0; i--) {
        monthNumber = today.getMonth() - i;
        months.push(monthNames[(today.getMonth() - i)]);
        dataSet.push(GetGraphPerformances(props.performance, monthNumber, today.getFullYear()))
    }
    return (
        <View style={styles.containerGraph}>
        <LineChart
                data={{
                labels: months,
                datasets: [
                        {
                            data: dataSet,
                            strokeWidth: 2,
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: () => "#000",
                    style: {
                        borderRadius: 16,
                    },
                }}
            />
            </View>
    )
}

const styles = StyleSheet.create({
    containerGraph: {
      margin: 20,
      alignItems: 'center',
    },
});