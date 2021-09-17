import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import TextH2 from "../../../../../components/TextH2";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

type ListItemProps = {
  type: "income" | "outcome";
};

const Container = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-top: ${heightPercentageToDP("2%")}px;
  padding: ${heightPercentageToDP("3%")}px ${widthPercentageToDP("3%")}px;
  width: 100%;
`;

const Label = styled(TextH2)`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: ${fontScale(16)}px;
`;

const Value = styled(TextH2)<ListItemProps>`
  color: ${({ type, theme }) =>
    type === "income" ? theme.colors.green : theme.colors.red};
  font-size: ${fontScale(18)}px;
`;

const InlineContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDP("4%")}px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const CategoryIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${fontScale(18)}px;
`;

const CategoryName = styled(TextH2)`
  color: ${({ theme }) => theme.colors.gray100};
  margin-left: ${widthPercentageToDP("2%")}px;
`;

const Date = styled(TextH2)`
  color: ${({ theme }) => theme.colors.gray100};
  margin-left: ${widthPercentageToDP("5%")}px;
`;

export const ListItemStyled = {
  CategoryIcon,
  CategoryName,
  Container,
  Date,
  InlineContainer,
  Label,
  Row,
  Value,
};
