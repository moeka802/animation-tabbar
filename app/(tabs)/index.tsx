import { StyleSheet, Text } from "react-native";
import React, { useRef } from "react";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { SafeAreaView } from "react-native-safe-area-context";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

type Props = {};

const Home = (props: Props) => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <SafeAreaView className="flex-1 h-full flex justify-center items-center px-5">
      <VideoView player={player} style={styles.videoContainer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 350,
    height: 275,
  },
});

export default Home;
