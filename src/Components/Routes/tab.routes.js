import Home from "../Screens/Home";
import Welcome from "../Screens/Welcome";
import Data from "../Screens/Data";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function Routes() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{headerShown:false}}
      />
       <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown:false}}
      />
       <Stack.Screen
      name="Data"
      component={Data}
      options={{headerShown:false}}
      />
    </Stack.Navigator>

   </NavigationContainer>
  );
}