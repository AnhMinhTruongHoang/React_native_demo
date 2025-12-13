import { useState } from "react";
import {
  Alert,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MineButton from "../button/my.button";

interface Iprops {
  addTodo: (v: string) => void;
}

const InputTodo = (props: Iprops) => {
  const { addTodo } = props;
  const [name, setName] = useState<string>("minh");
  const [age, setAge] = useState<number>(54);
  const [person, setPerson] = useState({
    name: "a",
    age: 3,
  });

  const handleTodo = () => {
    if (!name) {
      Alert.alert("empty", "not empty", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
      return;
    }
    addTodo(name);
    setName("");
  };

  return (
    <>
      <View>
        <TextInput
          onChangeText={(value) => setName(value)}
          autoCapitalize="words"
          autoCorrect
          style={{ borderBlockColor: "red", borderWidth: 1, padding: 10 }}
        />
      </View>
      <AntDesign name="pluscircle" size={24} color="black" />

      {/* <Button title="add new" onPress={() => handleTodo()} /> */}

      <MineButton title="add new" onPress={handleTodo} />
    </>
  );
};

export default InputTodo;
