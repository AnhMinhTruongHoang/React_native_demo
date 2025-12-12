import { FlatList, Text, TouchableOpacity } from "react-native";

interface Iprops {
  todoList: ITodo[];
  deleteTodo: (v: number) => void;
}

const ListTodo = (props: Iprops) => {
  const { todoList, deleteTodo } = props;

  return (
    <>
      {/* <ScrollView>
    {todoList.map((todo) => {
      return <Text key={todo.id}>{todo.title}</Text>;
    })}
  </ScrollView> */}

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default ListTodo;
