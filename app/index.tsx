import { View } from "react-native";
import {
  NavigationButtons,
  styles,
} from "@/components/NavigationButtons/NavigationButtons";

export default function Index() {
  return (
    <View style={styles.view}>
      <NavigationButtons />
    </View>
  );
}
