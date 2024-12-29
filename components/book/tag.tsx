import { View, Text, StyleSheet } from "react-native";

interface Props {
  tagName: string;
  tagColor: string;
  tagBgColor: string;
}

const BookTag = ({ tagName, tagColor, tagBgColor }: Props) => {
  return (
    <View style={[styles.tagContainer, { backgroundColor: tagBgColor }]}>
      <Text style={[styles.tagText, { color: tagColor }]}>{tagName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  tagText: {
    fontSize: 10,
    fontFamily: "Roboto-Bold",
    letterSpacing: 0.5,
  },
});

export default BookTag;
