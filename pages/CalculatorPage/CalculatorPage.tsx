import { View } from "react-native";
import { NavigationButtons, styles } from "@/components/NavigationButtons";
import { buttons, buttonTypes } from "./constants/NavigationButtons";

const CalculatorPage = () => {
  const onButtonPress = (buttonType) => {
    switch (buttonType) {
      case buttonTypes.create:
        alert('Нажата кнопка: Cоздать');
        break;
      case buttonTypes.history:
        alert('Нажата кнопка: Список');
        break;
      case buttonTypes.leave:
        alert('Нажата кнопка: Выйти');
        break;
      default:
    }
  }

  return (
    <View style={styles.view}>
      <NavigationButtons buttonsData={buttons} onPress={onButtonPress} />
    </View>
  )
}

export default CalculatorPage;
