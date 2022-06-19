import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Button } from "react-native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className={"flex-1 bg-white items-center justify-center"}>
      <Text className="text-red-500">Homescreen</Text>
      <Button title="Open Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};
export default HomeScreen;
