import { type Dispatch, type SetStateAction } from "react";
import { Button, FlatList, ImageBackground, Text, View } from "react-native";
import { type ISelectedCardData } from "../History/History";

import { styles } from "./styles";

export const HistoryCardInfo = ({
  selectedCardData,
  setCurrentPage,
}: {
  selectedCardData: ISelectedCardData | null;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <Button title="Назад" onPress={() => setCurrentPage("history")} />
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: selectedCardData?.cover,
          }}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.overlay}>
            <Text style={styles.data}>{selectedCardData?.data}</Text>
            <Text style={styles.location}>{selectedCardData?.location}</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.title}>Присутствовавшие</Text>
        <FlatList
          data={selectedCardData?.members}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>☑ {item.name}</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.totalSpent}>
        Всего потрачено:{"  "}
        <Text style={styles.money}>{selectedCardData?.totalSpentMoney}с</Text>
      </Text>
    </>
  );
};
