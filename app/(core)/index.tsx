import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { myBooks } from "@/data/dummy";
import { COLORS, FONTS, SIZES } from "@/constants";

import BookCard from "@/components/book/BookCard";
import HomeHeader from "@/components/home/header";
import HomeShortCuts from "@/components/home/shortcuts";
import FocusedStatusBar from "@/components/focused-statusbar";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.black}
        barStyle="light-content"
      />

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
            renderItem={({ item }) => <BookCard item={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: SIZES.h2,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: SIZES.font,
  },
  headerContainer: {
    paddingHorizontal: SIZES.font,
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
    paddingHorizontal: SIZES.font,
  },
});
