import { Image, ImageProps } from "react-native";

interface MailIconProps extends ImageProps {
  mail?: string;
}
export default function MailIcon({ mail, ...rest }: MailIconProps) {
  mail = mail || "@";
  const domain = mail.split("@")[1].toLocaleLowerCase();
  console.log("components/AccountIcon.tsx::domain", domain);
  switch (domain) {
    case "gmail.com":
      return <Image source={require("@assets/gmail.png")} {...rest} />;
    case "outlook.com":
    case "hotmail.com":
    case "live.com":
      return <Image source={require("@assets/outlook.png")} {...rest} />;
    default:
      return <Image source={require("@assets/home.png")} {...rest} />;
  }
}
