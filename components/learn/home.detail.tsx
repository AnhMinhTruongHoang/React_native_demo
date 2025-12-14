import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const HomeDT = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>user id = {route?.params?.userId}</Text>
      <Text>name = {route?.params?.name}</Text>

      <Button title="Go back Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeDT;
