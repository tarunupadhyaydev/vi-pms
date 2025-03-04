import React from "react";
import { ScrollView } from "react-native";
import { useRouter ,Redirect} from "expo-router";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
 
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

   return <Redirect href={'/pms'}  />;
  return (
    <Box className="flex-1 bg-white h-[100vh]">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex flex-1  items-center justify-center   ">
          <FormControl className="p-6 border rounded-lg border-outline-300 bg-red-600">
            <VStack space="xl">
              <Heading className="text-typography-0">Login</Heading>
              <VStack space="xs">
                <Text className="text-typography-0">Email</Text>
                <Input style={{borderColor:"white"}} className="min-w-[250px]"  >
                  <InputField type="text" className="text-white"   />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text className="text-typography-0">Password</Text>
                <Input style={{borderColor:"white"}} className="text-center">
                  <InputField type={showPassword ? "text" : "password"} className="text-white" />
                  <InputSlot  className="pr-3" onPress={handleState}>
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="white" />
                  </InputSlot>
                </Input>
              </VStack>
              <Button
                className="ml-auto"
                onPress={() => {
                  router.push('/pms')
                }}
              >
                <ButtonText className="text-typography-0">Login</ButtonText>
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </ScrollView>
    </Box>
  );
}
