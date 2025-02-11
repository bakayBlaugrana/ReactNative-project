import { useState } from "react";
import { BackHandler, Alert } from "react-native";

import { NavigationButtons } from "@/components/NavigationButtons";
import { Calculate } from "@/components/Calculate";
import { History } from "@/components/History";

import { buttons, buttonTypes } from "./constants/NavigationButtons";

const CalculatorPage = () => {
  const [calculateIsOpen, setCalculateIsOpen] = useState<boolean>(false);
  const [historyIsOpen, setHistoryIsOpen] = useState<boolean>(false);

  const onButtonPress = (buttonType: string) => {
    switch (buttonType) {
      case buttonTypes.create:
        setCalculateIsOpen(true);
        break;
      case buttonTypes.history:
        setHistoryIsOpen(true);
        break;
      case buttonTypes.leave:
        Alert.alert(
          "Выход из приложения",
          "Вы уверены что хотите выйти из приложения?",
          [
            { text: "Отмена" },
            { text: "Выйти", onPress: () => BackHandler.exitApp() },
          ]
        );
        break;
      default:
    }
  };

  return (
    <>
      {!calculateIsOpen && !historyIsOpen && (
        <NavigationButtons buttonsData={buttons} onPress={onButtonPress} />
      )}
      {calculateIsOpen && <Calculate setCalculateIsOpen={setCalculateIsOpen} />}
      {historyIsOpen && <History setHistoryIsOpen={setHistoryIsOpen} />}
    </>
  );
};

export default CalculatorPage;
