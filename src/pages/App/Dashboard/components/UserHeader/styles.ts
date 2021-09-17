import styled from "styled-components/native";
import TextH1 from "../../../../../components/TextH1";
import { Feather } from "@expo/vector-icons/";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

const Container = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDP("3%")}px;
  width: 90%;
`;

const UserImage = styled.Image`
  border-radius: 10px;
  height: ${widthPercentageToDP("16%")}px;
  margin-right: ${widthPercentageToDP("3%")}px;
  width: ${widthPercentageToDP("16%")}px;
`;

const InlineContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Username = styled(TextH1)``;

const PowerSvg = styled(Feather).attrs({
  name: "power",
})`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${fontScale(30)}px;
`;

export const UserHeaderStyled = {
  Container,
  InlineContainer,
  PowerSvg,
  Username,
  UserImage,
};
