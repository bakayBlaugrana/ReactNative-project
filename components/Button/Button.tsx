import { FC } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity
} from "react-native";

interface Props {
  key?: string | number;
  style?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: FC<Props> = (props) => {
  const {
    style,
    textStyle,
    title,
    onPress
  } = props;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;
