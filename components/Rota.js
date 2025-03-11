import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './Casa';
import Placa_mae from './Placa_mae';
import Placa_video from './Placa_video';
 
const Stack = createStackNavigator();
 
export default function Rota() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Placa_mae" component={Placa_mae}/>
          <Stack.Screen name="Placa_video" component={Placa_video}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
 
 