import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmptyStatePerformance() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No performance logged!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontStyle: 'italic',
    },
});