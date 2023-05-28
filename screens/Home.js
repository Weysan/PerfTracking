import { FlatList, Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
         <FlatList
            data={[
            {key: 'Clean', link:'https://www.crossfit.com/essentials/the-clean-2', description: 'The clean is a pure bit of functionality. The clean is simply pulling a load from the ground to the shoulders, where frequently the object is being readied for lifting overhead. With the clean, we take ourselves from standing over an object and pulling it to moving under it and supporting it.'},
            {key: 'Push Press', description: 'In the push press, the core-to-extremity principle is obvious as the muscles of the power zone — including the hip flexors, hip extensors (glutes and hams), spinal erectors, and quadriceps — assist the arms in driving the barbell overhead. With the push press, you will be able to move overhead as much as 30% more weight than with the shoulder press. Regular practice of the push press — and the push jerk — develops power and speed, which are critical to effective and efficient athletic movement. —Adapted from “The Overhead Lifts” by Greg Glassman', link: 'https://www.crossfit.com/essentials/the-push-press'},
            {key: 'Snatch', description: 'The Olympic lifts train athletes to effectively activate more muscle fibers more rapidly than through any other modality of training. The explosiveness that results from this training is of vital necessity to every sport. Practicing the snatch teaches one to apply force to muscle groups in proper sequence — i.e., from the center of the body to its extremities (core to extremity). Learning this vital technical lesson benefits all athletes who need to impart force to another person or object, as is commonly required in nearly all sports.', link: 'https://www.crossfit.com/essentials/the-snatch'},
            {key: 'Deadlift', description: 'The deadlift, being no more than the safe and sound approach by which any object should be lifted from the ground, keeps company with standing, running, jumping, and throwing for functionality but imparts quick and prominent athletic advantage like no other exercise. It is unrivaled in its simplicity and impact while unique in its capacity for increasing head-to-toe strength.', link: 'https://www.crossfit.com/essentials/the-deadlift'},
            ]}
            renderItem={({item}) => <Button title={item.key} onPress={() => navigation.navigate('Details', {title: item.key, movement: item.key, description: item.description, link: item.link})}/>}
        />
        </View>
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