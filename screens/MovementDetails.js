import { FlatList, StyleSheet, Text, View } from 'react-native';
import ErrorScreen from './Error';

export default function MovementDetailsScreen({route}) {
    // Get the parameters from the route
    const { movement, description, link } = route.params;

    if (movement == undefined) {
        return <ErrorScreen/>
    }

    return (
        <View style={styles.container}>
            <Text>{description}</Text>
            <Text>More details: {link}</Text>
            <Text style={styles.title}>Performance History</Text>
            <FlatList
            data={[
            {date: '2023-01-01 19:41:30', performance: '100', unit:'kg'},
            {date: '2022-09-01 19:41:30', performance: '95', unit:'kg'},
            ]}
            renderItem={({item}) => <Text>- {item.date}: {item.performance} {item.unit}</Text>}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
});