import styled from "styled-components/native";
import { fontScale, heightPercentageToDP } from "../../utils";
import TextH2 from "../TextH2";

type ButtonProps = {
  filled?: boolean;
};

const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  border: ${({ theme, filled }) =>
    filled ? 0 : `1px solid ${theme.colors.orange}`};
  background-color: ${({ theme, filled }) =>
    filled ? theme.colors.orange : theme.colors.white};
  border-radius: 5px;
  padding: ${heightPercentageToDP("2%")}px;
`;

const Label = styled(TextH2)<ButtonProps>`
  color: ${({ theme, filled }) =>
    filled ? theme.colors.white : theme.colors.orange};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${fontScale(15)}px;
`;

const Loading = styled.ActivityIndicator.attrs({
  size: 30,
})``;

export const ButtonStyled = { Button, Label, Loading };
