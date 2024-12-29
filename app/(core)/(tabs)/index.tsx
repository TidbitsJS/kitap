import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { myBooks } from "@/data/dummy";
import { COLORS, FONTS, SIZES } from "@/constants";

import HomeHeader from "@/components/home/header";
import BookCard from "@/components/book/book-card";
import HomeShortCuts from "@/components/home/shortcuts";
import BorrowedBookCard from "@/components/book/borrowed-card";
import FocusedStatusBar from "@/components/focused-statusbar";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.black}
        barStyle="light-content"
      />

      <FlatList
        data={myBooks}
        renderItem={({ item }) => <BookCard item={item} />}
        keyExtractor={(item) => `category-${item.id}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.body2,
          gap: SIZES.h2,
          paddingBottom: SIZES.h1 * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <HomeHeader name="Enola Holmes" point={221} />
            <HomeShortCuts />

            <View style={styles.sectionContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.title}>My Books</Text>
                <TouchableOpacity onPress={() => console.log("See More")}>
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.booksContainer}>
                <FlatList
                  horizontal
                  data={myBooks}
                  renderItem={({ item }) => <BorrowedBookCard item={item} />}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: SIZES.h2,
                  }}
                />
              </View>
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: SIZES.body1,
    marginBottom: SIZES.body2,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  seeMoreText: {
    ...FONTS.body3,
    color: COLORS.lightGray,
    alignSelf: "flex-start",
  },
  booksContainer: {
    marginTop: SIZES.body3,
  },
});
