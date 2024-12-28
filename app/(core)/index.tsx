import { COLORS } from "@/constants";
import HomeHeader from "@/components/home/header";
import FocusedStatusBar from "@/components/focused-statusbar";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeShortCuts from "@/components/home/shortcuts";

function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.black}
        barStyle="light-content"
      />

      <HomeHeader name="Enola Holmes" point={221} />
      <HomeShortCuts />
    </SafeAreaView>
  );
}

export default Index;
