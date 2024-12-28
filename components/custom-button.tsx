import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { FONTS, SHADOW, SIZES } from "@/constants";

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  backgroundColor: string;
  textColor: string;
  onPressHandler: () => void;
}

const CustomButton = ({
  label,
  backgroundColor,
  textColor,
  onPressHandler,
  style,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressHandler}
      style={[styles.button, { backgroundColor }, style]}
      {...props}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: SIZES.font,
    borderRadius: SIZES.padding,
    ...SHADOW.lightShadow,
  },
  label: {
    ...FONTS.h3,
    textAlign: "center",
  },
});

export default CustomButton;
