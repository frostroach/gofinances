import styled from "styled-components/native";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: ${fontScale(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

const ButtonTouchable = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  flex-direction: row;
  height: ${heightPercentageToDP("9%")}px;
  margin-bottom: ${heightPercentageToDP("4%")}px;
  width: 100%;
`;

const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${widthPercentageToDP("5%")}px;
  height: 100%;
  border-right-width: 0.7px;
  border-right-color: ${({ theme }) => theme.colors.gray};
`;

const LabelContainer = styled.View`
  align-items: center;
  width: 80%;
`;

export const LoginButtonStyled = {
  ButtonTouchable,
  ImageContainer,
  Label,
  LabelContainer,
};
