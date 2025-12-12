import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("minh");
  const [age, setAge] = useState<number>(54);
  const [person, setPerson] = useState({
    name: "a",
    age: 3,
  });

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello !</Text>
      <Text style={styles.text}>{person.age}</Text>
      <Text style={styles.text}>{JSON.stringify(person)}</Text>
      <TextInput
        onChangeText={(value) => setName(value)}
        autoCapitalize="words"
        autoCorrect
        style={{ borderBlockColor: "red", borderWidth: 1, padding: 10 }}
      />
      <Button title="add new" onPress={() => alert("ok")} />

      <View>
        {todoList.map((todo) => {
          return <Text>{todo.title}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
