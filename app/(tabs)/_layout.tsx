import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

type Props = {};

const TabLayout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
