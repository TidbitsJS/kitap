import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONTS, SIZES } from "@/constants";
import { myBooks } from "@/data/dummy";
import { getLuminance } from "@/lib/utils";
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

      <ScrollView showsVerticalScrollIndicator={false}>
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
    </SafeAreaView>
  );
};

export default BookDetails;
