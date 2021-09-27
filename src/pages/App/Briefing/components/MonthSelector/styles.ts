import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import TextH2 from "../../../../../components/TextH2";
import { fontScale, heightPercentageToDP } from "../../../../../utils";

const Container = styled.View`
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDP("2%")}px;
  width: 90%;
`;

const Date = styled(TextH2)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${fontScale(15)}px;
`;

const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${fontScale(23)}px;
`;

export const MonthSelectorStyled = { Container, Date, Icon };
