import dayjs from "dayjs";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { COLORS, FONTS, icons, SIZES } from "@/constants";

interface Props {
  item: {
    id: string;
    bookCover: any;
    borrowDate: string;
    dueDate: string;
    borrows: string;
  };
}

function BorrowedBookCard({ item }: Props) {
  const daysLeft = dayjs(item.dueDate).diff(dayjs(item.borrowDate), "day");

  return (
    <TouchableOpacity onPress={() => router.push(`/books/${item.id}`)}>
      <Image
        source={item.bookCover}
        resizeMode="cover"
        style={styles.bookCover}
      />

      <View style={styles.bookInfoContainer}>
        <View style={styles.bookDetailRow}>
          <Image source={icons.clock_icon} style={styles.icon} />
          <Text style={styles.bookDetailText}>{daysLeft} days</Text>
        </View>

        <View style={styles.bookDetailRow}>
          <Image
            source={icons.page_icon}
            style={[styles.icon, styles.pageIcon]}
          />
          <Text style={styles.bookDetailText}>{item.borrows}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BorrowedBookCard;

const styles = StyleSheet.create({
  bookCover: {
    width: 180,
    height: 270,
    borderRadius: 10,
  },
  bookInfoContainer: {
    marginTop: SIZES.base,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.base,
  },
  bookDetailRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 10,
    height: 10,
    tintColor: COLORS.lightGray,
  },
  pageIcon: {
    marginLeft: SIZES.radius,
  },
  bookDetailText: {
    marginLeft: 5,
    ...FONTS.body4,
    color: COLORS.lightGray,
  },
});
