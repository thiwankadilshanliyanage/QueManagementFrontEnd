import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/homeScreen/homeScreen'
import NotificationScreen from '../../screens/notificationScreen/notificationScreen'
import UserScreen from '../../screens/userScreen/userScreen'

const Tab = createBottomTabNavigator();

const Tabs =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;