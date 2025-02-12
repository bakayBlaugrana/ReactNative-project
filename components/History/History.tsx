import {
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { uuid } from "expo-modules-core";

import { useState, type Dispatch, type SetStateAction } from "react";

import { styles } from "./styles";
import { HistoryCardInfo } from "../HistoryCardInfo";

const data = [
  {
    id: uuid.v4(),
    location: "Озеро Иссык-Куль",
    data: "13 августа 2024 года",
    members: [
      { name: "Бакай", id: uuid.v4() },
      { name: "Марсель", id: uuid.v4() },
      { name: "Бексултан", id: uuid.v4() },
    ],
    totalSpentMoney: 5400,
    cover:
      "https://img.pac.ru/resorts/213181/468908/big/84A353E17F000101469E3DAFA3522CB8.jpg",
  },
  {
    id: uuid.v4(),
    location: "Панорама",
    data: "01 июня 2024 года",
    members: [
      { name: "Бакай", id: uuid.v4() },
      { name: "Марсель", id: uuid.v4() },
      { name: "Нурислам", id: uuid.v4() },
      { name: "Бексултан", id: uuid.v4() },
    ],
    totalSpentMoney: 1200,
    cover:
      "https://img.pac.ru/resorts/213181/468906/big/848CA5687F0001014144EC732BB5167D.jpg",
  },
  {
    id: uuid.v4(),
    location: "Парк Ынтымак-2",
    data: "10 марта 2024 года",
    members: [
      { name: "Бакай", id: uuid.v4() },
      { name: "Марсель", id: uuid.v4() },
      { name: "Нурислам", id: uuid.v4() },
    ],
    totalSpentMoney: 940,
    cover: "https://24.kg/files/media/225/225434.jpg",
  },
];

interface IMember {
  name: string;
  id: string;
}

export interface ISelectedCardData {
  id: string;
  location: string;
  data: string;
  members: IMember[];
  totalSpentMoney: number;
  cover: string;
}

const History = ({
  setHistoryIsOpen,
}: {
  setHistoryIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [currentPage, setCurrentPage] = useState("history");
  const [selectedCardData, setSelectedCardData] =
    useState<ISelectedCardData | null>(null);

  const handlePress = (data: ISelectedCardData) => {
    setSelectedCardData(data);
    setCurrentPage("historyCardInfo");
  };

  return currentPage === "historyCardInfo" ? (
    <HistoryCardInfo
      selectedCardData={selectedCardData}
      setCurrentPage={setCurrentPage}
    />
  ) : (
    <>
      <Button title="Назад" onPress={() => setHistoryIsOpen(false)} />
      <View style={styles.cardList}>
        {data.map((historyCard) => (
          <TouchableOpacity
            onPress={() => handlePress(historyCard)}
            key={historyCard.id}
          >
            <View style={styles.card}>
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
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default History;
