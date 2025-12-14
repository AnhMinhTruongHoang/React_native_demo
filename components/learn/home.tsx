import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details (no params)"
        onPress={() => navigation.navigate("DetailsScreen")}
      />

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go user id = 1"
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              userId: 1,
              name: "minh",
            })
          }
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go user id = 2"
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              userId: 2,
              name: "minh 2",
            })
          }
        />
      </View>
    </View>
  );
};

export default Home;
