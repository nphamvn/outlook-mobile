import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { View, Text, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MailTabDrawerContent from "@components/MailTabDrawerContent";

export default function Layout() {
  const { width } = useWindowDimensions();
  console.log("width", width);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({}) => {
          return {
            headerShown: false,
            drawerType: "front",
            swipeEdgeWidth: width,
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
