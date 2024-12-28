import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "@/constants";

interface Props {
  item: {
    id: string;
    bookCover: any;
    bookName: string;
    author: string;
    pageNo: number;
    readed: string;
    genre: string[];
  };
}

function BookCard({ item }: Props) {
  return (
    <View>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => router.push(`/books/${item.id}`)}
      >
        <TouchableOpacity onPress={() => router.push(`/books/${item.id}`)}>
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginLeft: SIZES.radius,
          }}
        >
          <TouchableOpacity onPress={() => router.push(`/books/${item.id}`)}>
            <Text
              style={{
                paddingRight: SIZES.padding * 2,
                ...FONTS.h3,
                color: COLORS.white,
              }}
              numberOfLines={2}
            >
              {item.bookName}
            </Text>

            <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>
              {item.author}
            </Text>
          </TouchableOpacity>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.radius,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: SIZES.font,
                }}
              >
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGray,
                    marginRight: SIZES.base,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.lightGray,
                  }}
                >
                  {item.pageNo}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGray,
                    marginRight: SIZES.base,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.lightGray,
                  }}
                >
                  {item.readed}
                </Text>
              </View>
            </View>

            {/* <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.base,
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <HomeBookTag
                tagName={item.genre[0]}
                tagBgColor={COLORS.darkGreen}
                tagColor={COLORS.lightGreen}
              />
              {item.genre[1] && (
                <HomeBookTag
                  tagName={item.genre[1]}
                  tagBgColor={COLORS.darkRed}
                  tagColor={COLORS.lightRed}
                />
              )}
              {item.genre[2] && (
                <HomeBookTag
                  tagName={item.genre[2]}
                  tagBgColor={COLORS.darkBlue}
                  tagColor={COLORS.lightBlue}
                />
              )}
            </View> */}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ position: "absolute", top: 5, right: 5 }}
        onPress={() => console.log("Bookmark")}
      >
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.lightGray,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

// Helper functions to determine tag colors based on genre
const getGenreBgColor = (genre: string) => {
  switch (genre) {
    case "Fiction":
      return COLORS.darkGreen;
    case "Non-Fiction":
      return COLORS.darkRed;
    case "Science":
      return COLORS.darkBlue;
    default:
      return COLORS.gray;
  }
};

const getGenreTextColor = (genre: string) => {
  switch (genre) {
    case "Fiction":
      return COLORS.lightGreen;
    case "Non-Fiction":
      return COLORS.lightRed;
    case "Science":
      return COLORS.lightBlue;
    default:
      return COLORS.white;
  }
};

export default BookCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: SIZES.base,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
  },
  bookCover: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: SIZES.radius,
  },
  bookName: {
    paddingRight: SIZES.padding * 2,
    ...FONTS.h3,
    color: COLORS.white,
  },
  author: {
    ...FONTS.h4,
    color: COLORS.lightGray,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: SIZES.font,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: COLORS.lightGray,
    marginRight: SIZES.base,
  },
  pageNo: {
    ...FONTS.body5,
    color: COLORS.lightGray,
  },
  readed: {
    ...FONTS.body5,
    color: COLORS.lightGray,
  },
  genreContainer: {
    flexDirection: "row",
    marginTop: SIZES.base,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
  },
  bookmarkButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  bookmarkIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray,
  },
});
