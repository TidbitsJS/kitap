import { Redirect, Slot } from "expo-router";

const isLoggedIn = true;
function CoreLayout() {
  if (isLoggedIn) return <Redirect href="/welcome" />;

  return <Slot />;
}

export default CoreLayout;