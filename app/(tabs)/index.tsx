import { Text, View, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

type Props = {};

const Home = (props: Props) => {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 50);
  };
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text className="pt-10 pb-5">Home</Text>

        <Animated.View
          style={[styles.box, { transform: [{ translateX }] }]}
        ></Animated.View>

        <Button onPress={handlePress} title="Click me" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "violet",
  },
});

export default Home;
