import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";

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
      <Button title="add new" onPress={() => handleTodo()} />
    </>
  );
};

export default InputTodo;
