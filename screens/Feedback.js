import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function FeedbackScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>We would love your feedback! Please feel the form below.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});