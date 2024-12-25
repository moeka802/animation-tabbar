import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constraints/icons";
import FloatingTabIcon from "@/components/FloatingTabIcon";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

interface TabIconProps {
  icon: ImageSourcePropType;
  focused: boolean;
}

type Props = {};

const TabIcon = ({ focused, icon }: TabIconProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${20}deg` }],
  }));
  return (
    <TouchableOpacity className="flex-1 flex-col pt-3">
      <Animated.View style={animatedStyle}>
        <Image source={icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const TabLayout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.add} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: "Heart",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.heart} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.user} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
