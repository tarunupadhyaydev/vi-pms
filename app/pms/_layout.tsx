export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
import { BellIcon,Icon} from "@/components/ui/icon";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(drawer)",
};

import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="task-detail" 
      options={{
        title:'Task Detail',
        headerTitle:"Task Detail",
        headerBackButtonDisplayMode:"minimal",
        headerRight:()=><Icon  as={BellIcon} style={{marginRight:10}} color="white"   />,
        headerStyle: {
          backgroundColor: '#be1f2c',
        },
        headerTintColor: '#fff',
          headerTitleStyle: {
            
          },
        }}  />
    </Stack>
  );
}
