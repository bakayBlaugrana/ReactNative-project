import { Text, View, Button } from "react-native";

const History = ({ setHistoryIsOpen }) => {
  return (
    <View>
      <Button title='Назад' onPress={() => setHistoryIsOpen(false)} />
      <Text>History</Text>
    </View>
  )
}

export default History;
