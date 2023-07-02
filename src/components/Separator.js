import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Separator() {
    return (
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
      height: 1,
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      alignItems: 'center',
      backgroundColor: 'grey',
    },
});