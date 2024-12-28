import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

import CustomButton from "@/components/custom-button";
import { COLORS, FONTS, images, SIZES } from "@/constants";
import FocusedStatusBar from "@/components/focused-statusbar";

function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.black}
        barStyle="light-content"
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContent}>
          <View style={styles.header}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.body}>
            <View style={styles.textContainer}>
              <Text style={styles.heading}>Welcome</Text>
              <Text style={styles.description}>
                Kitap lets you browse and borrow books from your university
                library anytime, making it easy to access the academic resources
                you need.
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                label="Sign In"
                backgroundColor={COLORS.black}
                textColor={COLORS.white}
                onPressHandler={() => router.push("/sign-in")}
                style={styles.buttonMargin}
              />
              <CustomButton
                label="Sign Up"
                backgroundColor={COLORS.white}
                textColor={COLORS.black}
                onPressHandler={() => router.push("/sign-up")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
  },
  header: {
    flex: 3,
    minHeight: 250,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 150,
  },
  body: {
    flex: 1,
    minHeight: 300,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
    padding: SIZES.padding,
    justifyContent: "space-between",
  },
  textContainer: {
    marginVertical: SIZES.font,
  },
  heading: {
    ...FONTS.h1,
    color: COLORS.white,
    marginTop: SIZES.font,
  },
  description: {
    ...FONTS.body4,
    color: COLORS.white,
    marginTop: SIZES.font,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.padding,
  },
  buttonMargin: {
    marginRight: SIZES.font,
  },
});
