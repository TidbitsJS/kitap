import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Platform } from "react-native";

import { COLORS } from "@/constants";
import icons from "@/constants/icons";

interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
}

const TabIcon = ({ focused, icon }: TabIconProps) => {
  const tintColor = focused ? COLORS.white : COLORS.lightGray;

  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        tintColor: tintColor,
        width: 20,
        height: 20,
      }}
    />
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
          position: "absolute",
          borderTopColor: COLORS.secondary,
          borderTopWidth: 1,
          height: 70,
        },
        tabBarItemStyle: {
          paddingTop: Platform.OS === "ios" ? 10 : 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.dashboard_icon} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search_icon} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.cart} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.menu_icon} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
