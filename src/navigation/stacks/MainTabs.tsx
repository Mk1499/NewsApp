import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from '../ScreenNames';
import Favourites from '../../screens/Favourites';
import HomeScreen from '../../screens/Home';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.Favourites} component={Favourites} />
    </Tab.Navigator>
  );
}
