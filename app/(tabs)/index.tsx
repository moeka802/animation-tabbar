import { Text, View, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";

type Props = {};

const Home = (props: Props) => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${30}deg` }],
  }));

  const handlePress = () => {};
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text className="pt-10 pb-5">Home</Text>

        <Animated.View style={[styles.box, animatedStyle]}></Animated.View>

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
