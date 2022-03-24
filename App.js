import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './Screens/LoadingScreen/LoadingScreen';
import Login from './Screens/Login/Login';
import Information from './Screens/Information/Information';
import Fee from './Screens/Fee/Fee';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Calendar from './Screens/Calendar/Calendar';
import Score from './Screens/Score/Score';
import Total from './Screens/Total/Total';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import GlobalColors from './Utils/GlobalColors';
import { useState } from 'react';
import { UserContext } from './Context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer >
        {user ? (
          <Tab.Navigator
            backBehavior='history'
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name === "Thông tin") {
                  iconName = "user"
                  color = focused ? GlobalColors.orange.color : 'white'
                }
                else if (route.name === "Học phí") {
                  iconName = "wallet"
                  color = focused ? GlobalColors.orange.color : 'white'
                }
                else if (route.name === "Lịch") {
                  iconName = "calendar-alt"
                  color = focused ? GlobalColors.orange.color : 'white'
                }
                else if (route.name === "Điểm") {
                  iconName = "list"
                  color = focused ? GlobalColors.orange.color : 'white'
                }
                else if (route.name === "Tất cả") {
                  iconName = "th-large"
                  color = focused ? GlobalColors.orange.color : 'white'
                }
                return (
                  <FontAwesome5 solid name={iconName} size={26} color={color} />
                )
              },
              tabBarStyle: { backgroundColor: GlobalColors.blue.color, height: 50 },
              headerTitleAlign: 'center',
              headerTintColor: GlobalColors.orange.color,
              tabBarActiveTintColor: 'white',
              tabBarInactiveTintColor: 'white',
            })}
          >
            <Tab.Screen name='Thông tin' component={Information} />
            <Tab.Screen name='Học phí' component={Fee} />
            <Tab.Screen name='Tất cả' component={Total} />
            <Tab.Screen name='Lịch' component={Calendar} />
            <Tab.Screen name='Điểm' component={Score} options={{ headerShown: false }} />
          </Tab.Navigator>
        ) :
          <>
            <Stack.Navigator
              screenOptions={() => ({
                headerTitleAlign: 'center',
                headerTintColor: GlobalColors.orange.color,
              })}>
              <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
          </>
        }

      </NavigationContainer>
    </UserContext.Provider>
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
