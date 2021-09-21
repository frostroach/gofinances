import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Button from "../../../components/Button";
import TextH2 from "../../../components/TextH2";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils";
import { Category as CategoryModel } from "../../../models/category";
import { FlatList } from "react-native";
import { theme } from "../../../theme";

type ListProps = {
  isOpen: boolean;
};

const Container = styled.View`
  align-self: center;
  flex: 1;
  padding-top: ${heightPercentageToDP("2%")}px;
  width: 90%;
`;

const InlineContainer = styled.View`
  flex-direction: row;
  margin-top: ${heightPercentageToDP("2%")}px;
  width: 100%;
`;

const SendButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const CategorySelector = styled.TouchableOpacity<ListProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? 0 : `5px`)};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? 0 : `5px`)};
  flex-direction: row;
  justify-content: space-between;
  padding: ${heightPercentageToDP("2%")}px ${widthPercentageToDP("3%")}px;
  margin-top: ${heightPercentageToDP("2%")}px;
`;

const CategoryOption = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${heightPercentageToDP("1%")}px ${widthPercentageToDP("2%")}px;
`;

const CategoryList = styled(
  FlatList as new () => FlatList<CategoryModel>
).attrs({
  contentContainerStyle: {
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
})``;

const Category = styled(TextH2)`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${fontScale(14)}px;
  margin-left: ${widthPercentageToDP("4%")}px;
`;

const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${fontScale(18)}px;
`;

export const SignupStyled = {
  Category,
  CategoryList,
  CategoryOption,
  CategorySelector,
  Container,
  Icon,
  InlineContainer,
  SendButton,
};
