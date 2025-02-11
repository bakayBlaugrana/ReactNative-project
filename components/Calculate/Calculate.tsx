import { FC, useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { mainButtons, mainButtonTypes } from "@/components/Calculate/constants";

import styles from "./styles";

export interface ListItemType {
  name: string;
  spent: string | number;
  uuid: string;
}

interface Props {
  setCalculateIsOpen: (state: boolean) => void;
}

const Calculate: FC<Props> = ({ setCalculateIsOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [list, setList] = useState<ListItemType[]>([]);

  const onMainButton = (type) => {
    switch (type) {
      case mainButtonTypes.back:
        setCalculateIsOpen(false);
        break;
      case mainButtonTypes.finish:
        break;
      case mainButtonTypes.add:
        setModalIsOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainButtons}>
        {mainButtons.map(({ text, type }) => (
          <Button
            key={type}
            style={[styles.mainButton, styles[`${type}Button`]]}
            title={text}
            onPress={() => onMainButton(type)}
          />
        ))}
      </View>
      <ScrollView>
        <View style={styles.list}>
          {list.map((item) => (
            <View key={item.name} style={styles.listItem}>
              <Text style={styles.header}>{item.name}</Text>
              <View style={styles.info}>
                <Text>Потрачено: {item.spent}</Text>
              </View>
              <View style={styles.buttons}>
                <Button
                  style={[styles.listItemButton, styles.deleteButton]}
                  title="Удалить"
                />
                <Button
                  style={[styles.listItemButton, styles.editButton]}
                  title="Редактировать"
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {modalIsOpen && (
        <Modal setModalIsOpen={setModalIsOpen} setList={setList} />
      )}
    </SafeAreaView>
  );
};

export default Calculate;
