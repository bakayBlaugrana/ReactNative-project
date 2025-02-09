import {FC, useState} from "react";
import {View, Text, TextInput} from "react-native";
import {Button} from "@/components/Button";
import styles from "./styles";
import { ListItemType } from "@/components/Calculate";

interface Props {
  setModalIsOpen: (state: boolean) => void;
  setList: (
    value: ListItemType[] | ((list: ListItemType[]) => void)
  ) => void
}

const Modal: FC<Props> = ({ setModalIsOpen, setList }) => {
  const [name, setName] = useState('');
  const [spent, setSpent] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.modal}>
        <Text style={styles.title}>Добавление</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder='Введите имя'
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder='Введите число'
            keyboardType='numeric'
            onChangeText={setSpent}
          />
        </View>
        <View style={styles.buttons}>
          <Button style={styles.button} title='Назад' onPress={() => setModalIsOpen(false)} />
          <Button style={styles.button} title='Сохранить' />
        </View>
      </View>
    </View>
  )
}

export default Modal;
