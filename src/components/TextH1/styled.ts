import styled from "styled-components/native";
import { fontScale } from "../../utils";

const H1 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${fontScale(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextH1Styled = { H1 };
