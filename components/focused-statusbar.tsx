import React from "react";
import { StatusBar, StatusBarProps } from "react-native";
import { useIsFocused } from "@react-navigation/core";

function FocusedStatusBar(props: StatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default FocusedStatusBar;
