import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { myBooks } from "@/data/dummy";
import { getLuminance } from "@/lib/utils";
import { COLORS, FONTS, icons, SIZES } from "@/constants";

import FocusedStatusBar from "@/components/focused-statusbar";
import BookDetailsHeader from "@/components/book/details/header";

const BookDetails = () => {
  const { id } = useLocalSearchParams();

  const book = myBooks.find((book) => book.id === id);
  const luminance = getLuminance(book?.backgroundColor as string);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={`${book?.backgroundColor}e6`}
        barStyle={luminance === "#FFFFFF" ? "light-content" : "dark-content"}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: COLORS.black,
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.black,
          }}
        >
          <BookDetailsHeader book={book as Book} />

          <View
            style={{
              padding: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white,
                marginBottom: SIZES.body2,
              }}
            >
              Description
            </Text>
            <View style={{ gap: SIZES.padding }}>
              {book?.description?.split("\n").map((line, index) => (
                <Text
                  key={index}
                  style={{ ...FONTS.body4, color: COLORS.lightGray }}
                >
                  {line}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.black,
          padding: SIZES.padding / 1.25,
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopWidth: 1,
          borderColor: COLORS.secondary,
          gap: SIZES.body1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            backgroundColor: COLORS.secondary,
            borderRadius: 25,
            padding: SIZES.font,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.log("Bookmark")}
        >
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{
              width: 18,
              height: 18,
              tintColor: COLORS.lightGray2,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.font,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.log("Start Reading")}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            Start Reading
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookDetails;
