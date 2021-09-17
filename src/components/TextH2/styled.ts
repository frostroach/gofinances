import styled from "styled-components/native";
import { fontScale } from "../../utils";

const H2 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${fontScale(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextH2Styled = { H2 };
