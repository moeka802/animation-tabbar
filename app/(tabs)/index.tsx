import { Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

type Props = {};

const Home = (props: Props) => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text className="pt-10 pb-5">Home</Text>

        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: "violet",
          }}
        ></Animated.View>

        <Button onPress={handlePress} title="Click me" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
