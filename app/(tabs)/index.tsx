import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text className="pt-10 pb-5">Home</Text>

        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "violet",
          }}
        ></Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
