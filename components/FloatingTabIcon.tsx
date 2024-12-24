import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import icons from "@/constraints/icons";

type Props = {
  icon: ImageSourcePropType;
  focused: boolean;
};

const FloatingTabIcon = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Image source={icons.add} />
    </TouchableOpacity>
  );
};

export default FloatingTabIcon;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 12,
    backgroundColor: "#F20000",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
