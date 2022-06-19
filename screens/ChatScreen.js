import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 bg-black items-center justify-center"}>
      <Text className="text-white">ChatScreen</Text>
      <Button title="Open Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
export default ChatScreen;
