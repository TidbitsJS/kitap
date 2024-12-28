import { View, Text, StyleSheet, TextInput } from "react-native";

import { COLORS, FONTS, SHADOW, SIZES } from "@/constants";

export type InputType =
  | "email"
  | "text"
  | "username"
  | "password"
  | "confirmPassword";

interface Props {
  placeholderText: string;
  type: InputType;
  value: string;
  onHandleInputText: (type: InputType, value: string) => void;
}

const CustomTextInput = ({
  placeholderText,
  type,
  value,
  onHandleInputText,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholderText}
        secureTextEntry={type === "password"}
        placeholderTextColor={COLORS.lightGray4}
        onChangeText={(text) => onHandleInputText(type, text)}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: SIZES.base + 2,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.padding2,
    padding: SIZES.font,
    paddingHorizontal: SIZES.padding,
    ...SHADOW.darkShadow,
  },
  input: {
    color: COLORS.lightGray2,
    ...FONTS.body4,
    lineHeight: 17,
  },
});
