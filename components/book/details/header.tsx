import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";

import { getLuminance } from "@/lib/utils";
import { COLORS, FONTS, icons, SIZES } from "@/constants";

const InfoBar = ({ value, name }: { value: number | string; name: string }) => {
  return (
    <View style={{ alignItems: "center", paddingHorizontal: SIZES.radius }}>
      <Text style={{ ...FONTS.h3, color: COLORS.white, textAlign: "center" }}>
        {value}
      </Text>
      <Text
        style={{
          ...FONTS.body5,
          marginTop: 5,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const BookDetailsHeader = ({ book }: { book: Book }) => {
  const luminance = getLuminance(book.backgroundColor);

  return (
    <View style={{ height: 500 }}>
      <ImageBackground
        source={book.bookCover}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: `${book.backgroundColor}e6`,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.body2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: SIZES.padding,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={icons.back_arrow_icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: luminance,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: luminance,
            }}
          >
            Book Detail
          </Text>
        </View>

        <TouchableOpacity onPress={() => console.log("Click More")}>
          <Image
            source={icons.more_icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              alignSelf: "flex-end",
              tintColor: luminance,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: SIZES.padding2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={book.bookCover}
          resizeMode="contain"
          style={{
            width: 150,
            height: 210,
          }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.font,
          paddingHorizontal: SIZES.font,
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            textAlign: "center",
            color: luminance,
          }}
        >
          {book.bookName}
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            textAlign: "center",
            color: luminance,
          }}
        >
          {book.author}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: SIZES.font,
          marginHorizontal: SIZES.body2,
          marginTop: SIZES.body1 * 1.5,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(0,0,0, 0.5)",
        }}
      >
        <InfoBar value={book.rating} name="Rating" />
        <View
          style={{
            width: 1,
            paddingVertical: SIZES.font,
            backgroundColor: COLORS.lightGray2,
          }}
        />
        <InfoBar value={book.pageNo} name="Number of Page" />
        <View
          style={{
            width: 1,
            paddingVertical: SIZES.font,
            backgroundColor: COLORS.lightGray2,
          }}
        />
        <InfoBar value={book.language} name="Language" />
      </View>
    </View>
  );
};

export default BookDetailsHeader;
