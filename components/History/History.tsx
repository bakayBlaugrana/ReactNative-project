import { Text, View, Button, ImageBackground } from "react-native";
import { uuid } from "expo-modules-core";

import { type Dispatch, type SetStateAction } from "react";

import { styles } from "./styles";
const data = [
  {
    id: uuid.v4(),
    location: "Озеро Иссык-Куль",
    data: "13 августа 2024 года",
    members: ["Бакай", "Марсель", "Нурислам", "Бексултан"],
    totalSpentMoney: 5400,
    cover:
      "https://img.pac.ru/resorts/213181/468908/big/84A353E17F000101469E3DAFA3522CB8.jpg",
  },
  {
    id: uuid.v4(),
    location: "Панорама",
    data: "01 июня 2024 года",
    members: ["Бакай", "Марсель", "Нурислам", "Бексултан"],
    totalSpentMoney: 5400,
    cover:
      "https://img.pac.ru/resorts/213181/468906/big/848CA5687F0001014144EC732BB5167D.jpg",
  },
  {
    id: uuid.v4(),
    location: "Парк Ынтымак-2",
    data: "10 марта 2024 года",
    members: ["Бакай", "Марсель", "Нурислам"],
    totalSpentMoney: 5400,
    cover: "https://24.kg/files/media/225/225434.jpg",
  },
];

const History = ({
  setHistoryIsOpen,
}: {
  setHistoryIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Button title="Назад" onPress={() => setHistoryIsOpen(false)} />
      <View style={styles.cardList}>
        {data.map((historyCard) => (
          <View key={historyCard.id} style={styles.card}>
            <ImageBackground
              source={{
                uri: historyCard.cover,
              }}
              resizeMode="cover"
              style={styles.background}
            >
              <View style={styles.overlay}>
                <Text style={styles.data}>{historyCard.data}</Text>
                <Text style={styles.location}>{historyCard.location}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </>
  );
};

export default History;
