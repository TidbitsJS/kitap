import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { COLORS, FONTS, icons, SIZES } from "@/constants";

interface ShortCutProps {
  iconUrl: any;
  label: string;
}

function ShortCut({ iconUrl, label }: ShortCutProps) {
  return (
    <TouchableOpacity
      onPress={() => console.log(label)}
      style={styles.shortcutContainer}
    >
      <View style={styles.shortcutContent}>
        <Image source={iconUrl} resizeMode="contain" style={styles.icon} />
        <Text style={styles.shortcutLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeShortCuts() {
  return (
    <View style={styles.sectionContainer}>
      <ShortCut iconUrl={icons.claim_icon} label="Claim" />
      <View style={styles.line} />
      <ShortCut iconUrl={icons.point_icon} label="Get Point" />
      <View style={styles.line} />
      <ShortCut iconUrl={icons.card_icon} label="My Card" />
    </View>
  );
}

export default HomeShortCuts;

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius * 1.25,
    margin: SIZES.font,
    padding: SIZES.base,
    paddingHorizontal: SIZES.font,
  },
  shortcutContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  shortcutContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.base,
  },
  icon: {
    width: 20,
    height: 20,
  },
  shortcutLabel: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  line: {
    width: 1,
    paddingVertical: SIZES.font,
    backgroundColor: COLORS.lightGray,
  },
});
