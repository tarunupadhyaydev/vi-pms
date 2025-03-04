import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { BellIcon,Icon} from "@/components/ui/icon";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
// }
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: "home",
  // home:{
  //   initialRouteName: "index",
  // }
};
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight:()=><Icon  as={BellIcon} style={{marginRight:10}} color="white"   />,
        headerStyle: {
          backgroundColor: '#be1f2c',
        },
        headerTintColor: '#fff',
          headerTitleStyle: {
            
          },
       
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
           headerTitle:"Preventive Maintenance",
           headerStyle: {
            backgroundColor: '#be1f2c',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          //tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

    </Drawer>
    </GestureHandlerRootView>
  );
}
