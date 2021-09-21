import styled from "styled-components/native";
import { fontScale, heightPercentageToDP } from "../../utils";
import TextH2 from "../TextH2";

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: ${heightPercentageToDP("2%")}px 0;
`;

const Label = styled(TextH2)`
  font-size: ${fontScale(16)}px;
`;

export const PageHeaderStyled = { Container, Label };
