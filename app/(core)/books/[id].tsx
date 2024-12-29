import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SIZES } from "@/constants";
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

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
      >
        <BookDetailsHeader book={book as Book} />
      </View>
    </SafeAreaView>
  );
};

export default BookDetails;
