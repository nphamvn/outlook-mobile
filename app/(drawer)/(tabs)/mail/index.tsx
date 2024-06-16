import MailIcon from "@components/MailIcon";
import {
  useGlobalSearchParams,
  useNavigation,
  usePathname,
  useRouter,
} from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MailFilterMenu from "@components/MailFilterMenu";

export default function Screen() {
  const { email, folder } = useGlobalSearchParams<{
    email?: string;
    folder?: string;
  }>();

  const router = useRouter();
  const path = usePathname();
  const navigation = useNavigation();

  const HeaderLeft = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          marginBottom: 8,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            //@ts-ignore
            navigation.openDrawer();
          }}
        >
          <View style={styles.mailIconWrapper}>
            <MailIcon mail={email} style={styles.mailIcon} />
          </View>
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              fontSize: 24,
              color: "white",
            }}
          >
            {folder || "Inbox"}
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginLeft: "auto",
            marginRight: 30,
          }}
          onPress={() => {
            setShowFilterMenu(true);
          }}
        >
          <MaterialIcons name="menu" size={24} color="white" />
        </Pressable>
      </View>
    );
  };

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filter, setFilter] = useState<string>();
  useLayoutEffect(() => {
    console.log("app/(drawer)/(tabs)/mail/index.tsx::useLayoutEffect");
    navigation.setOptions({
      headerLeft: () => <HeaderLeft />,
    });
  }, [email, folder, navigation]);

  useEffect(() => {}, [email, folder]);

  return (
    <React.Fragment>
      <View>
        <Text>Mail ({filter})</Text>
        <Button
          title="View"
          onPress={() => {
            router.navigate(path + "/view");
          }}
        />
        <Button
          title="New"
          onPress={() => {
            router.navigate(path + "/new");
          }}
        />
      </View>
      <MailFilterMenu
        visible={showFilterMenu}
        onDismiss={(type) => {
          setFilter(type);
          setShowFilterMenu(false);
        }}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  accountsContainer: {
    width: 70,
    alignItems: "center",
    borderRightWidth: 0.5,
    borderRightColor: "#ccc",
  },
  foldersContainer: {
    flex: 1,
  },
  mailIconWrapper: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "white",
  },
  mailIcon: {
    width: 20,
    height: 20,
  },
});
