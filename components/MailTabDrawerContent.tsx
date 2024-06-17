import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useGlobalSearchParams } from "expo-router";
import { useAppContext } from "hooks/app";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MailIcon from "./MailIcon";
import { useMemo } from "react";

export default function MailTabDrawerContent({
  navigation,
}: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();

  const { accounts } = useAppContext()!;

  const { email, folder } = useGlobalSearchParams<{
    email?: string;
    folder?: string;
  }>();

  const currentAccount = accounts.find((acc) => acc.email === email);

  const provider = useMemo(() => {
    if (currentAccount) {
      const domain = currentAccount.email.split("@")[1];
      switch (domain.toLowerCase()) {
        case "gmail.com":
          return "Gmail";
        case "outlook.com":
        case "hotmail.com":
          return "Outlook";
        case "yahoo.com":
          return "Yahoo";
        default:
          return "Other";
      }
    }
    return undefined;
  }, [currentAccount]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={[
          styles.accountsContainer,
          {
            paddingTop: insets.top,
            backgroundColor: "#f9f9f9",
          },
        ]}
      >
        <Pressable
          onPress={() => {
            navigation.setParams({ email: "", folder: "Inbox" });
            navigation.closeDrawer();
          }}
        >
          <View
            style={[
              styles.mailIconWrapper,
              {
                borderColor: !currentAccount ? "#007AFF" : "#ccc",
                borderWidth: !currentAccount ? 2 : 1,
                backgroundColor: !currentAccount ? "white" : "transparent",
              },
            ]}
          >
            <MailIcon mail={""} style={styles.mailIcon} />
          </View>
        </Pressable>
        {accounts.map((acc) => {
          const isCurrentAccount = acc.email === currentAccount?.email;
          return (
            <Pressable
              style={{
                marginTop: 20,
              }}
              key={acc.email}
              onPress={() => {
                if (!isCurrentAccount) {
                  navigation.setParams({
                    email: acc.email,
                    folder: acc.folders[0],
                  });
                }
                navigation.closeDrawer();
              }}
            >
              <View
                style={[
                  styles.mailIconWrapper,
                  {
                    borderColor: isCurrentAccount ? "#007AFF" : "#ccc",
                    borderWidth: isCurrentAccount ? 2 : 1,
                    backgroundColor: isCurrentAccount ? "white" : "transparent",
                  },
                ]}
              >
                <MailIcon mail={acc.email} style={styles.mailIcon} />
              </View>
            </Pressable>
          );
        })}
      </View>
      <View
        style={[
          styles.foldersContainer,
          {
            paddingTop: insets.top,
          },
        ]}
      >
        <View
          style={{
            padding: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: "#ccc",
          }}
        >
          {currentAccount && provider ? (
            <View>
              <Text style={{ fontWeight: "bold" }}>{provider}</Text>
              <Text style={{ marginTop: 4, color: "#666" }}>
                {currentAccount.email}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={{ fontWeight: "bold" }}>All Accounts</Text>
            </View>
          )}
        </View>
        {currentAccount
          ? currentAccount.folders.map((f) => (
              <Pressable
                key={f}
                onPress={() => {
                  navigation.setParams({
                    folder: f,
                  });
                  navigation.closeDrawer();
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontWeight: folder === f ? "bold" : "normal",
                      color: folder === f ? "#007AFF" : "black",
                    }}
                  >
                    {f}
                  </Text>
                </View>
              </Pressable>
            ))
          : [
              "Inbox",
              "Drafts",
              "Archive",
              "Sent Items",
              "Deleted Items",
              "Junk Email",
            ].map((f) => (
              <Pressable
                key={f}
                onPress={() => {
                  navigation.setParams({
                    folder: f,
                  });
                  navigation.closeDrawer();
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontWeight: folder === f ? "bold" : "normal",
                      color: folder === f ? "#007AFF" : "black",
                    }}
                  >
                    {f}
                  </Text>
                </View>
              </Pressable>
            ))}
      </View>
    </View>
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
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
  },
  mailIcon: {
    width: 24,
    height: 24,
  },
});
