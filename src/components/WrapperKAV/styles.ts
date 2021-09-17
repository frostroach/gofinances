import styled from "styled-components/native";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeArea = styled(SafeAreaView).attrs({
  edges: ["top", "left", "right"],
})`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

const KAV = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const WrapperKAVStyled = { KAV, SafeArea };
