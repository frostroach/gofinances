import styled from "styled-components/native";
import TextH2 from "../../../../../components/TextH2";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";
import { Feather } from "@expo/vector-icons";

type HeaderCardStyled = {
  iconColor: string;
};

type HeaderContainerStyled = {
  total?: boolean;
};

const Container = styled.View<HeaderContainerStyled>`
  background-color: ${({ total, theme }) =>
    total ? theme.colors.orange : theme.colors.white};
  border-radius: 6px;
  height: ${heightPercentageToDP("28%")}px;
  padding: ${heightPercentageToDP("3%")}px ${widthPercentageToDP("6%")}px
    ${heightPercentageToDP("6%")}px;
  margin-right: ${widthPercentageToDP("3%")}px;
  width: ${widthPercentageToDP("80%")}px;
`;

const HeaderInfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const TypeText = styled(TextH2)<HeaderContainerStyled>`
  color: ${({ total, theme }) =>
    total ? theme.colors.white : theme.colors.blue100};
  font-size: ${fontScale(16)}px;
`;

const TypeIcon = styled(Feather)<HeaderCardStyled>`
  color: ${({ iconColor, theme }) =>
    iconColor ? iconColor : theme.colors.white};
  font-size: ${fontScale(32)}px;
`;

const BottomContainer = styled.View`
  margin-top: ${heightPercentageToDP("3%")}px;
`;

const TotalAmount = styled.Text<HeaderContainerStyled>`
  color: ${({ total, theme }) =>
    total ? theme.colors.white : theme.colors.blue100};
  font-size: ${fontScale(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const LastTransactionText = styled(TextH2)<HeaderContainerStyled>`
  color: ${({ total, theme }) =>
    total ? theme.colors.white : theme.colors.gray100};
  font-size: ${fontScale(12)}px;
`;

export const HeaderCardStyled = {
  BottomContainer,
  Container,
  HeaderInfoContainer,
  LastTransactionText,
  TotalAmount,
  TypeIcon,
  TypeText,
};
