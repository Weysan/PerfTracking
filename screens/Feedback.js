import { SafeAreaView, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function FeedbackScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>We would love your feedback! Please feel the form below.</Text>
                <TextInput 
                    style={styles.textInput} 
                    multiline={true}
                    numberOfLines={4}
                 />
                 <Button title="Send" onPress={() => console.log('click')} />
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
    textInput: {
        margin: 15,
        width: '90%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
    },
});