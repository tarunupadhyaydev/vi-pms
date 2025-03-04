import React, { useState } from "react";
import { Platform } from "react-native";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { ChevronRightIcon, Icon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import { FlatList } from "@/components/ui/flat-list";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@/components/ui/slider";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { startCase } from "lodash";

export type IHomeProps = {};

type ItemData = {
  id: string;
  title: string;
  hpsm_task: string;
  task_status: string;
  ticket_id: string;
  location: string;
  priority: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Home: React.FC<IHomeProps> = ({}) => {
  const [selectedId, setSelectedId] = useState<string>();

  const DATA: ItemData[] = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "TO10-INAS000932",
      hpsm_task: " 2 HPSM task in this location",
      task_status: "new-task",
      ticket_id: "CLK-SN_IM_24012024_45900",
      location: "Marine Drive,beside ginger,Unific tower..",
      priority: "critical",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "T293-IDAP100192",
      hpsm_task: " 5 HPSM task in this location",
      task_status: "in-progress",
      ticket_id: "CLK-SN_IM_24012024_45901",
      location: "Marine Drive,beside ginger,Unific tower..",
      priority: "major",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "T163-INWB000906",
      hpsm_task: " 5 HPSM task in this location",
      task_status: "in-progress",
      ticket_id: "CLK-SN_IM_24012024_45902",
      location: "Marine Drive,beside ginger,Unific tower..",
      priority: "critical",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "T155-INWB000944",
      hpsm_task: " 4 HPSM task in this location",
      task_status: "new-task",
      ticket_id: "CLK-SN_IM_24012024_45903",
      location: "Marine Drive,beside ginger,Unific tower..",
      priority: "major",
    },
  ];

  const Item = ({ item, onPress }: ItemProps) => (
    <VStack space={"sm"} className="my-2  bg-sky-100 rounded-t-2xl">
      <HStack className="items-center pt-2">
        <Text className="py-2 px-2 text-black font-medium ">
          {item.hpsm_task}
        </Text>
        <Link href={"/"} className="underline">
          view
        </Link>
      </HStack>

      <Card
        size="lg"
        variant="filled"
        className={`bg-white pr-0  ${
          Platform.OS === "android" ? "shadow-md" : "shadow-sm"
        } `}
      >
        <HStack className="flex-1 justify-between my-2 pr-3">
          <VStack space={"sm"}>
            <Box>
              <Text
                className={`w-1/2 ${
                  item.task_status == "in-progress"
                    ? "bg-info-600"
                    : "bg-orange-600"
                }   text-white text-center py-0 rounded-r-3xl`}
              >
                {startCase(item.task_status)}
              </Text>
            </Box>
            <HStack space={"lg"} className="justify-around items-center">
              <Heading size="md" className="mb-1">
                {item.title}
              </Heading>
              <HStack
                className={`${
                  item.priority == "critical" ? "bg-red-100" : " bg-amber-100"
                } py-1 px-3 rounded-full items-center`}
              >
                <Text
                  className={`${
                    item.priority == "critical"
                      ? "text-[#e3560a]"
                      : "text-[#d9692c]"
                  }  font-bold `}
                >
                  {item.priority}
                </Text>
                {item.priority == "critical" ? (
                  <MaterialIcons
                    name="local-fire-department"
                    className="color-red-400"
                    color="#e3560a"
                    size={18}
                  />
                ) : (
                  <Feather name="alert-triangle" size={18} color="#EA9F12" />
                )}
              </HStack>
            </HStack>
          </VStack>
          <Link href={'/pms/task-detail'}>
          <Icon
            as={ChevronRightIcon}
            style={{ marginRight: 20 }}
            color="black"
            size={"xl"}
          />
          </Link>
        </HStack>

        <VStack space={"sm"} className="bg-[#f4f8fe] px-2 mr-2 py-4">
          <HStack space={"sm"} className="items-center">
            <MaterialCommunityIcons name="crop-square" size={24} color="grey" />
            <Text size="sm" className="font-medium">
              {item.ticket_id}
            </Text>
            <Text className="px-2 bg-indigo-100 font-medium text-black text-sm rounded-2xl">
              Tower
            </Text>
          </HStack>

          <Divider className="my-2" />
          <HStack className="flex-1 justify-between">
            <HStack space={"sm"}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={18}
                color="grey"
              />
              <Text size="sm" className="font-medium">
                {item.location}
              </Text>
            </HStack>

            <Icon
              as={ChevronRightIcon}
              style={{ marginRight: 10 }}
              color="black"
              size={"xl"}
            />
          </HStack>
        </VStack>
        {item.task_status == "in-progress" && (
          <VStack>
            <HStack
              space={"sm"}
              className="flex-1 justify-center items-center pt-5"
            >
              <Text>time since start:</Text>
              <HStack className="items-center">
                <MaterialCommunityIcons
                  name="clock-time-three-outline"
                  size={16}
                  color="#2a7948"
                />
                <Text className="text-green-600 font-medium">57m</Text>
              </HStack>
            </HStack>
            <VStack className=" px-2 mr-2 pt-5">
              <HStack>
                <Text className="text-teal-600 font-bold">3</Text>
                <Text className=" text-black">/6 completed</Text>
              </HStack>
              <Slider
                defaultValue={3}
                size="sm"
                orientation="horizontal"
                isDisabled={false}
                isReversed={false}
                minValue={1}
                maxValue={6}
              >
                <SliderTrack>
                  <SliderFilledTrack className="bg-teal-600" />
                </SliderTrack>
                {/* <SliderThumb /> */}
              </Slider>
            </VStack>
          </VStack>
        )}
      </Card>
    </VStack>
  );

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <VStack
      space={"md"}
      style={{ backgroundColor: "#be1f2c" }}
      className="flex flex-1"
    >
      <HStack space={"xs"} className="py-4  mx-1 flex justify-center">
        <Button
          variant="solid"
          size={"md"}
          className=" bg-white rounded-full pr-1"
        >
          <ButtonText className="text-black">All</ButtonText>
          <Badge
            className="h-[22px] w-[22px] bg-red-600 rounded-full "
            variant="solid"
          >
            <BadgeText className="text-white">8</BadgeText>
          </Badge>
        </Button>

        <Button
          variant="solid"
          size={"md"}
          className=" bg-red-800 rounded-full pr-1"
        >
          <ButtonText className="text-white">New</ButtonText>
          <Badge
            className="h-[22px] w-[22px] bg-red-600 rounded-full "
            variant="solid"
          >
            <BadgeText className="text-white">2</BadgeText>
          </Badge>
        </Button>

        <Button
          variant="solid"
          size={"md"}
          className=" bg-red-800 rounded-full pr-1"
        >
          <ButtonText className="text-white">In Progress</ButtonText>
          <Badge
            className="h-[22px] w-[22px] bg-red-600 rounded-full "
            variant="solid"
          >
            <BadgeText className="text-white">2</BadgeText>
          </Badge>
        </Button>

        <Button
          variant="solid"
          size={"md"}
          className=" bg-red-800 rounded-full pr-1"
        >
          <ButtonText className="text-white">On Hold</ButtonText>
          <Badge
            className="h-[22px] w-[22px] bg-red-600 rounded-full "
            variant="solid"
          >
            <BadgeText className="text-white">0</BadgeText>
          </Badge>
        </Button>
      </HStack>
      <Box className="flex flex-1 bg-[#f4f4f4] rounded-t-3xl py-4 px-2 ">
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          className="px-2"
        />
      </Box>
    </VStack>
  );
};

export default Home;
