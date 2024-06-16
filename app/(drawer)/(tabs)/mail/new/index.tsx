import { useNavigation, usePathname, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";

export default function Screen() {
  const router = useRouter();
  const path = usePathname();
  const navigation = useNavigation();

  useLayoutEffect(() => { 
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Cancel"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);
  return (
    <View>
      <Text>New</Text>
      <Button
        title="Modal"
        onPress={() => {
          router.navigate(path + "/modal");
        }}
      />
    </View>
  );
}
