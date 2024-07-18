import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const Button = ({ title, onPress, customStyle, textStyle }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, customStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 200,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color:'#fff'
  },
});
