import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import MainTabs from './stacks/MainTabs';

export function MainNavigator() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.MainTabs}>
      <RootStack.Screen name={ScreenNames.MainTabs} component={MainTabs} />
    </RootStack.Navigator>
  );
}
