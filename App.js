import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EquipmentsScreen from './screens/EquipmentsScreen';
import EquipmentDetailScreen from './screens/EquipmentDetailScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const LogoTitle = () => (
  <Image
    style={{ width: 40, height: 40, marginRight: -20 }}
    source={require('./assets/printer-icon.svg')}
  />
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#747474', // Цвет навигационной шапки
            },
            headerTintColor: 'white', // Цвет текста в навигационной шапке
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center', // Align title to the center
          }}
        >
          <Stack.Screen
            name='Техническое Оборудование'
            component={EquipmentsScreen}
            options={{
              headerLeft: () => <LogoTitle />,
            }}
          />
          <Stack.Screen
            name='Подробнее'
            component={EquipmentDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
