import styled from "styled-components/native";
import { fontScale } from "../../../utils";

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.white100};
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.purple};
  font-size: ${fontScale(24)}px;
  font-weight: bold;
`;

export const DashboardStyled = { Container, Title };
