import { Stack } from "expo-router";
import { AppProvider } from "hooks/app";

export default function Layout() {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AppProvider>
  );
}
