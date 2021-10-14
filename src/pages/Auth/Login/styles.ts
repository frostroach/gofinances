import styled from "styled-components/native";
import TextH2 from "../../../components/TextH2";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils";
import Logo from "../../../assets/icons/logo.svg";

const PurpleWrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  flex: 0.7;
`;

const OrangeWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.orange};
  flex: 0.3;
`;

const PresentationText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${fontScale(20)}px;
  margin-top: ${heightPercentageToDP("10%")}px;
  text-align: center;
`;

const LoginText = styled(TextH2)`
  font-size: ${fontScale(16)}px;
  text-align: center;
  margin-top: ${heightPercentageToDP("5%")}px;
`;

const LogoSvg = styled(Logo)`
  margin-top: ${heightPercentageToDP("5%")}px;
`;

const ButtonsContainer = styled.View`
  align-self: center;
  margin-top: ${heightPercentageToDP("-5%")}px;
  width: 90%;
`;

const Loading = styled.ActivityIndicator``;

export const LoginStyled = {
  ButtonsContainer,
  Loading,
  LoginText,
  LogoSvg,
  OrangeWrapper,
  PurpleWrapper,
  PresentationText,
};
