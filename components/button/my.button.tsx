import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IPops {
  title: string;
  onPress: any;
}

const MineButton = (props: IPops) => {
  const { title, onPress } = props;
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed === true ? 0.5 : 1,
        alignSelf: "flex-start",
      })}
      onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <Text style={styles.text}> button</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
  },
});

export default MineButton;
