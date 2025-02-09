import { FC } from "react";
import { SafeAreaView } from "react-native";
import styles from './styles';
import {Button} from "@/components/Button";

interface Props {
  buttonsData: { type: string, text: string }[];
  onPress: (type: string) => void;
}

const NavigationButtons: FC<Props> = ({ buttonsData, onPress }) => {
  return (
    <SafeAreaView style={styles.view}>
      {buttonsData.map((button) => (
        <Button
          key={button.type}
          title={button.text}
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => onPress(button.type)}
        />
      ))}
    </SafeAreaView>
  );
};

export default NavigationButtons;
