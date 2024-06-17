import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function Screen() {
  const drawer = useNavigation("/(drawer)");
  useLayoutEffect(() => {
    drawer.setOptions({
      swipeEnabled: true,
    });
  }, [drawer]);

  return (
    <SafeAreaView>
      <View>
        <Text>Schedule</Text>
      </View>
    </SafeAreaView>
  );
}
