import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

export default function Screen() {
  const drawer = useNavigation("/(drawer)");
  useLayoutEffect(() => {
    drawer.setOptions({
      swipeEnabled: false,
    });
  }, [drawer]);
  return (
    <View>
      <Text>newModal</Text>
    </View>
  );
}
