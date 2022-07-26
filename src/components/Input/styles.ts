import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../utils";

type InputProps = {
  active?: boolean;
};

const Input = styled.TextInput<InputProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.blue100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${fontScale(14)}px;
  margin-top: ${heightPercentageToDP("1%")}px;
  padding: ${heightPercentageToDP("2%")}px ${widthPercentageToDP("2%")}px;
  ${({ active, theme }) =>
    active &&
    css`
      border: 3px solid ${theme.colors.red};
    `}
`;

export const InputStyled = { Input };
