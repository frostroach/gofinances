import styled, { css } from "styled-components/native";
import { theme } from "../../../../../theme";
import { Feather } from "@expo/vector-icons";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";
import TextH2 from "../../../../../components/TextH2";

type IconProps = {
  type: "income" | "outcome";
  isFocused: boolean;
};

const Button = styled.TouchableOpacity<IconProps>`
  align-items: center;
  ${({ type, isFocused }) =>
    type === "income" &&
    isFocused &&
    css`
      background-color: ${({ theme }) => theme.colors.light_green};
    `};
  ${({ type, isFocused }) =>
    type === "outcome" &&
    isFocused &&
    css`
      background-color: ${({ theme }) => theme.colors.light_red};
    `}
  border: 0.5px solid ${theme.colors.gray100};
  border-radius: 5px;
  flex-direction: row;
  margin-right: ${widthPercentageToDP("4%")}px;
  padding: ${heightPercentageToDP("2%")}px ${widthPercentageToDP("8%")}px;
  width: 48%;
`;
const IconSvg = styled(Feather)<IconProps>`
  color: ${({ theme, type }) =>
    type === "income" ? theme.colors.green : theme.colors.red};
  font-size: ${fontScale(25)}px;
  margin-right: ${widthPercentageToDP("2%")}px;
`;

const ButtonText = styled(TextH2)`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: ${fontScale(15)}px;
`;

export const TypeButtonStyled = { Button, ButtonText, IconSvg };
