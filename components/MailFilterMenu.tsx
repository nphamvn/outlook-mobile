import {
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useLayoutEffect, useRef } from "react";

interface MailFilterMenuProps extends ModalProps {
  onDismiss: (type?: string) => void;
}
export default function MailFilterMenu({
  onDismiss,
  ...rest
}: MailFilterMenuProps) {
  const headerHeight = useHeaderHeight();
  const visible = rest.visible;
  console.log("components/MailFilterMenu.tsx::: ");
  const animatedValue = useRef(new Animated.Value(0)).current;
  useLayoutEffect(() => {
    if (visible) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const hide = (type?: string) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onDismiss(type);
    });
  };
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-headerHeight, 0], // Start above the screen and move to top: 100
  });
  return (
    <Modal transparent={true} animationType="none" {...rest}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onPress={() => {
          console.log("components/MailFilterMenu.tsx::onPress");
          hide();
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: headerHeight,
            width: "100%",
            backgroundColor: "white",
            transform: [
              {
                translateY: translateY,
              },
            ],
          }}
        >
          {[
            "All",
            "Unread",
            "Flagged",
            "To me",
            "Has files",
            "Mentions me",
            "Has calendar invites",
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0, 0, 0, 0.1)",
              }}
              onPress={() => {
                hide(item);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}
