import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
