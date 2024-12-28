import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import CustomButton from "@/components/custom-button";
import OAuthButton from "@/components/form/oauth-button";
import { COLORS, FONTS, icons, SIZES } from "@/constants";
import CustomTextInput, { InputType } from "@/components/form/custom-textinput";
import FocusedStatusBar from "@/components/focused-statusbar";
import { router } from "expo-router";

interface Credential {
  email: string;
  password: string;
}

interface Error {
  status: boolean;
  errorMessage: string;
}

function SignIn() {
  const [credential, setCredential] = useState<Credential>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<Error>({
    status: false,
    errorMessage: "Something went wrong. Please try again.",
  });

  const handleInputText = (type: InputType, value: string) => {
    setCredential({
      ...credential,
      [type]: value,
    });
  };

  const handleSubmit = () => {};

  const handleErrorClose = () => {
    setError({ status: false, errorMessage: "" });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.primary} />

      <ScrollView>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={icons.back_arrow_icon}
                  resizeMode="cover"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <View style={styles.formContent}>
              <CustomTextInput
                placeholderText="Email"
                type="email"
                value={credential.email}
                onHandleInputText={handleInputText}
              />
              <CustomTextInput
                placeholderText="Password"
                type="password"
                value={credential.password}
                onHandleInputText={handleInputText}
              />
              <TouchableOpacity
                style={styles.forgotPassword}
                activeOpacity={0.5}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              <View style={styles.signInButtonContainer}>
                <CustomButton
                  label="Sign In"
                  backgroundColor={COLORS.white}
                  textColor={COLORS.black}
                  onPressHandler={handleSubmit}
                />
              </View>
            </View>

            <View style={styles.divider} />

            {/* OAuth Buttons */}
            <View style={styles.oauthButtons}>
              <Text style={styles.orText}>OR</Text>
              <View style={styles.oauthButtonList}>
                <OAuthButton
                  title="Continue With Google"
                  iconUrl={icons.google}
                />
                <OAuthButton
                  title="Continue With Github"
                  iconUrl={icons.github}
                />
                <OAuthButton
                  title="Continue With Twitter"
                  iconUrl={icons.twitter}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    flex: 1,
  },
  header: {
    minHeight: 170,
    padding: SIZES.padding,
  },
  headerContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.font,
  },
  icon: {
    width: 20,
    height: 20,
  },
  registerText: {
    ...FONTS.body5,
    color: COLORS.black,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.white,
    marginTop: SIZES.padding,
  },
  subtitle: {
    ...FONTS.body4,
    color: COLORS.white,
    marginVertical: SIZES.font,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    borderTopRightRadius: SIZES.padding,
    borderTopLeftRadius: SIZES.padding,
  },
  formContent: {
    padding: SIZES.padding,
  },
  forgotPassword: {
    marginTop: SIZES.base,
  },
  forgotPasswordText: {
    ...FONTS.body4,
    color: COLORS.primary,
    textAlign: "right",
  },
  signInButtonContainer: {
    marginTop: SIZES.padding,
  },
  divider: {
    marginVertical: SIZES.base,
    height: 7,
    backgroundColor: COLORS.gray,
  },
  oauthButtons: {
    padding: SIZES.padding,
  },
  orText: {
    ...FONTS.h3,
    color: COLORS.primary,
    textAlign: "center",
  },
  oauthButtonList: {
    marginVertical: SIZES.font,
  },
});
