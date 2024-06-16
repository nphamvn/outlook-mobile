import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";

export default function Screen() {
  const navigation = useNavigation();
  console.log(
    "app/(drawer)/(tabs)/mail/view.tsx::navigation.getId: ",
    navigation.getId()
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props: HeaderBackButtonProps) => (
        <HeaderBackButton labelVisible={false} onPress={() => {
          navigation.goBack();
        }} {...props} />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>View</Text>
    </View>
  );
}
