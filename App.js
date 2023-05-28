import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import MovementDetailsScreen from './screens/MovementDetails';
import FeedbackScreen from './screens/Feedback';
import CalculationScreen from './screens/Calculation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Performance Tracking' }} />
      <Stack.Screen name="Details" component={MovementDetailsScreen} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  );
}

function CalculationStack() {
  return (
    <Stack.Navigator initialRouteName="Calculation">
      <Stack.Screen name="Calculation" component={CalculationScreen} options={{ title: 'Calculation' }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Feedback">
      <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ title: 'Feedback' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{ headerShown: false, activeTintColor: '#3254a8', }}>
        <Tab.Screen
          name="HomeTab"
          component={MainStack}
          options={{
            tabBarLabel: 'Performance Tracking',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CalculationTab"
          component={CalculationStack}
          options={{
            tabBarLabel: 'Calculation',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calculator-variant-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="FeedbackTab"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Feedback',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="connection"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
