import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "@/constants";

interface Props {
  name: string;
  point: number;
}

function HomeHeader({ name, point }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.profileName} numberOfLines={1}>
            {name}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.pointContainer}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View style={styles.pointBox}>
            <View style={styles.plusIconContainer}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={styles.plusIcon}
              />
            </View>
            <Text style={styles.pointText}>{point} point</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.font,
  },
  headerContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingContainer: {
    flexDirection: "column",
    paddingRight: SIZES.base,
  },
  greetingText: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  profileName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  pointContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  pointBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: SIZES.base,
    borderRadius: 20,
  },
  plusIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  plusIcon: {
    width: 10,
    height: 10,
  },
  pointText: {
    marginHorizontal: SIZES.base,
    color: COLORS.white,
    textAlign: "center",
    ...FONTS.body5,
  },
});
