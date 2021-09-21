import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../utils";

const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.blue100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${fontScale(14)}px;
  margin-top: ${heightPercentageToDP("1%")}px;
  padding: ${heightPercentageToDP("2%")}px ${widthPercentageToDP("2%")}px;
`;

export const InputStyled = { Input };
