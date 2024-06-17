import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function Screen() {
  const drawer = useNavigation("/(drawer)");
  useLayoutEffect(() => {
    drawer.setOptions({
      swipeEnabled: false,
    });
  }, [drawer]);
  return (
    <SafeAreaView>
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
}
