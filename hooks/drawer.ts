import { useNavigation } from "expo-router";

export default function useDrawerNavigation() {
  return useNavigation("/(drawer)");
}
