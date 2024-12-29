import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import BookTag from "./tag";
import { COLORS, FONTS, SIZES, icons } from "@/constants";

function BookCard({ item }: { item: Book }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => router.push(`/books/${item.id}`)}
      >
        <TouchableOpacity onPress={() => router.push(`/books/${item.id}`)}>
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={styles.bookImage}
          />
        </TouchableOpacity>

        <View style={styles.cardContent}>
          <TouchableOpacity onPress={() => router.push(`/books/${item.id}`)}>
            <Text style={styles.bookName} numberOfLines={2}>
              {item.bookName}
            </Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>

          <View>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={styles.infoIcon}
                />
                <Text style={styles.infoText}>{item.availableCopies}</Text>
              </View>
              <View style={styles.infoItem}>
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={styles.infoIcon}
                />
                <Text style={styles.infoText}>{item.borrows}</Text>
              </View>
            </View>

            <View style={styles.genreRow}>
              {item.genre[0] && (
                <BookTag
                  tagName={item.genre[0]}
                  tagColor={COLORS.lightGreen}
                  tagBgColor={COLORS.darkGreen}
                />
              )}
              {item.genre[1] && (
                <BookTag
                  tagName={item.genre[1]}
                  tagColor={COLORS.lightBlue}
                  tagBgColor={COLORS.darkBlue}
                />
              )}
              {item.genre[2] && (
                <BookTag
                  tagName={item.genre[2]}
                  tagColor={COLORS.lightRed}
                  tagBgColor={COLORS.darkRed}
                />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={() => console.log("Bookmark")}
      >
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={styles.bookmarkIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: SIZES.radius,
  },
  bookName: {
    paddingRight: SIZES.padding * 2,
    ...FONTS.h3,
    color: COLORS.white,
  },
  bookAuthor: {
    ...FONTS.h4,
    color: COLORS.lightGray,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: SIZES.font,
  },
  infoIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.lightGray,
    marginRight: SIZES.base,
  },
  infoText: {
    ...FONTS.body5,
    color: COLORS.lightGray,
  },
  genreRow: {
    flexDirection: "row",
    marginTop: SIZES.base,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
    gap: SIZES.base,
  },
  bookmarkButton: {
    position: "absolute",
    top: 7,
    right: 0,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
});

export default BookCard;
