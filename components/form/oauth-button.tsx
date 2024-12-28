import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import { SIZES, FONTS, COLORS, SHADOW, icons } from "@/constants";

interface Props {
  title: string;
  iconUrl: any;
}

const OAuthButton = ({ title, iconUrl }: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5}>
      <Image source={iconUrl} style={styles.icon} resizeMode="cover" />
      <Text style={styles.buttonText}>{title}</Text>
      <Image
        source={icons.arrowRight}
        style={styles.arrowIcon}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default OAuthButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: SIZES.base,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.font,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOW.darkShadow,
  },
  icon: {
    width: 25,
    height: 25,
  },
  buttonText: {
    flex: 1,
    marginLeft: SIZES.base,
    ...FONTS.h4,
    color: COLORS.black,
  },
  arrowIcon: {
    width: 15,
    height: 15,
  },
});
