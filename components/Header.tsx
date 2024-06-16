import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Header({
  leftButtonType,
  title,
}: {
  leftButtonType: "back" | "menu";
  title: string;
}) {
  const navigation = useNavigation();
  console.log(navigation.canGoBack());
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      }}
    >
      {leftButtonType === "back" ? (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="blue" />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            //@ts-ignore
            navigation.openDrawer()
          }}
        >
          <MaterialIcons name="menu" size={24} color="blue" />
        </Pressable>
      )}

      <Text style={{
        marginLeft: 8,
        fontWeight: "bold",
        fontSize: 16,
      }}>{title}</Text>
    </View>
  );
}
