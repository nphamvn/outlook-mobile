import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="mail"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="mail"
        options={{
          title: "Mail",
          tabBarLabel: "mail",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarLabel: "Search",
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarLabel: "Schedule",
        }}
      />
    </Tabs>
  );
}
