import { Stack, useNavigation } from "expo-router";

export default function Layout() {
  const navigation = useNavigation();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
        }}
        initialParams={{
          folder: "Inbox",
        }}
      />
      <Stack.Screen
        name="view"
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          presentation: "modal",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
