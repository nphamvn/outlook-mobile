import { Stack, useNavigation } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        fullScreenGestureEnabled: true,
      }}
      screenListeners={{
        state: (e) => {
          if (e.data.state.routes[e.data.state.index].name === "index") {
          }
        },
      }}
    >
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
