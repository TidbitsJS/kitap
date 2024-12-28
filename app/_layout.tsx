import { Stack } from "expo-router";
import { useFonts } from "expo-font";

function RootLayout() {
  const [loaded] = useFonts({
    "Roboto-Black": require("@/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default RootLayout;
