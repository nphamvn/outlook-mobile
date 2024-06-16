import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MailTabDrawerContent from "@components/MailTabDrawerContent";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => {
          const state = navigation.getState();
          const tabsState = state.routes[state.index].state;
          const tab = tabsState?.routes[tabsState.index]?.name ?? "mail";
          return {
            headerShown: false,
            drawerType: "front",
            swipeEnabled: tab === "mail" || tab === "schedule",
          };
        }}
        drawerContent={DrawerContent}
      >
        <Drawer.Screen name="(tabs)" />
      </Drawer>
    </GestureHandlerRootView>
  );
}

function DrawerContent({
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps) {
  const tab = state.routes[state.index].state;
  const activeTab = tab?.routes[tab?.index ?? -1]?.name ?? "mail";
  switch (activeTab) {
    case "mail":
      return <MailTabDrawerContent {...{ state, navigation, descriptors }} />;
  }
  return (
    <View>
      <Text>{activeTab}</Text>
    </View>
  );
}
