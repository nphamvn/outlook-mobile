import {
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

interface MailFilterMenuProps extends ModalProps {
  onDismiss: (type?: string) => void;
}

export default function MailFilterMenu({
  onDismiss,
  ...rest
}: MailFilterMenuProps) {
  const headerHeight = useHeaderHeight();

  return (
    <Modal transparent={true} animationType="none" {...rest}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onPress={() => {
          onDismiss();
        }}
      >
        <View
          style={{
            marginTop: headerHeight,
            backgroundColor: "white"
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
                onDismiss(item);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
