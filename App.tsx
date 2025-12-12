import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputTodo from "./components/todo/input.todo";
import ListTodo from "./components/todo/list";

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
  ]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (title: string) => {
    alert(title);
    const todo = { id: randomInteger(1, 1000000), title: title };
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter((todo) => todo.id != id);
    setTodoList(newTodo);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={styles.container}>
        <InputTodo addTodo={addTodo} />
        <ListTodo todoList={todoList} deleteTodo={deleteTodo} />
      </View>
    </TouchableWithoutFeedback>
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
