import {FC, useState} from "react";
import {Text, TextInput, View} from "react-native";
import {Button} from "@/components/Button";
import {ListItemType} from "@/components/Calculate";
import styles from "./styles";
import { uuid } from "expo-modules-core";

interface Props {
  setModalIsOpen: (state: boolean) => void;
  setList: (
    value: ListItemType[] | ((list: ListItemType[]) => void)
  ) => void;
  values: Nullable<ListItemType>;
  setValues: (value: Nullable<ListItemType>) => void;
}

const Modal: FC<Props> = ({ setModalIsOpen, setList, values, setValues }) => {
  const [name, setName] = useState(values?.name || '');
  const [spent, setSpent] = useState(values?.spent || 0);

  const onCloseModal = () => {
    setValues(null);
    setModalIsOpen(false);
  }

  const onSave = () => {
    if (values?.uuid) {
      setList((prevList) => {
        return prevList.map((item) => {
          if (item.uuid === values.uuid) {
            return { ...values, name, spent };
          }

          return item;
        });
      });
    } else {
      const newUser = {
        name,
        spent,
        uuid: uuid.v4(),
      }

      setList((prevList) => {
        return [...prevList, newUser];
      });
    }

    onCloseModal();
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.modal}>
        <Text style={styles.title}>{values?.uuid ? 'Редактирование' : 'Добавление'}</Text>
        <View style={styles.inputs}>
          <Text aria-label='name' nativeID='nameInput'>Введите имя</Text>
          <TextInput
            style={styles.input}
            placeholder='Введите имя'
            onChangeText={setName}
            value={name}
            aria-label='input'
            aria-labelledby='nameInput'
          />
          <Text aria-label='name' nativeID='spentInput'>Введите сколько потрачено</Text>
          <TextInput
            style={styles.input}
            placeholder='Введите число'
            keyboardType='numeric'
            aria-label='input'
            value={spent ? spent.toString() : ''}
            aria-labelledby='spentInput'
            onChangeText={(value) => setSpent(+value)}
          />
        </View>
        <View style={styles.buttons}>
          <Button style={styles.button} title='Назад' onPress={onCloseModal} />
          <Button style={styles.button} title='Сохранить' onPress={onSave} />
        </View>
      </View>
    </View>
  )
}

export default Modal;
