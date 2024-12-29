import { COLORS, FONTS, icons, SHADOW, SIZES } from "@/constants";
import { myBooks } from "@/data/dummy";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Explore() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FlatList
        data={myBooks}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => router.push(`/books/${item.id}`)}
          >
            <View
              style={{
                width: "100%",
                height: 190,
                backgroundColor: `${item.backgroundColor}5d`,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                ...SHADOW.lightShadow,
              }}
            >
              <Image
                source={item.bookCover}
                alt="book cover"
                style={{
                  width: "75%",
                  height: "85%",
                  borderRadius: 5,
                  borderWidth: 5,
                  borderColor: item.backgroundColor,
                }}
                resizeMode="stretch"
              />
            </View>

            <Text
              style={{
                marginTop: SIZES.base,
                ...FONTS.h3,
                color: COLORS.white,
              }}
              numberOfLines={1}
            >
              {item.bookName}
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.lightGray,
                marginTop: 1,
              }}
              numberOfLines={1}
            >
              {item.author}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          columnGap: 20,
          rowGap: 20,
          flex: 1,
          justifyContent: "center",
        }}
        contentContainerStyle={{
          rowGap: 20,
          padding: SIZES.body2,
        }}
        ListHeaderComponent={() => (
          <View>
            <View>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.white,
                }}
              >
                Explore
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray,
                }}
              >
                Browse and borrow books
              </Text>
            </View>

            <View
              style={{
                marginTop: SIZES.radius,
                marginBottom: SIZES.padding,
                height: 50,
                borderWidth: 1,
                backgroundColor: COLORS.secondary,
                borderColor: COLORS.black,
                borderRadius: SIZES.body1,
                paddingHorizontal: SIZES.radius * 2,
                flexDirection: "row",
                alignItems: "center",
                gap: SIZES.base,
              }}
            >
              <TextInput
                placeholder="Search"
                style={{
                  color: COLORS.white,
                  ...FONTS.body4,
                  lineHeight: 17,
                  flex: 1,
                }}
                placeholderTextColor={COLORS.lightGray}
              />

              <Image
                source={icons.search_icon}
                style={{
                  width: 17,
                  height: 17,
                  tintColor: COLORS.primary,
                }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray3,
              }}
            >
              All Results
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Explore;

const styles = StyleSheet.create({});
