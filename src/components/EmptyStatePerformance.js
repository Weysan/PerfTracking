import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmptyStatePerformance() {
    return (
        <View style={styles.containerEmpty}>
            <Text style={styles.textEmtpy}>No performance logged!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerEmpty: {
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textEmtpy: {
        fontStyle: 'italic',
    },
});