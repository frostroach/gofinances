import { FlatList } from "react-native";
import styled from "styled-components/native";
import TextH2 from "../../../components/TextH2";
import { ListItemData } from "../../../models/dashboard";

import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white100};
`;

const UserHeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.purple};
  padding-top: ${heightPercentageToDP("5%")}px;
  height: ${heightPercentageToDP("39,71%")}px;
`;

const HeaderCardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  width: 100%;
  position: absolute;
  margin-top: ${heightPercentageToDP("20%")}px;
`;

const TransactionsContainer = styled.View`
  flex: 1;
  padding: 0 ${widthPercentageToDP("6%")}px;
  margin-top: ${heightPercentageToDP("13%")}px;
`;

const LabelListTitle = styled(TextH2)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${fontScale(18)}px;
`;

const DataList = styled(FlatList as new () => FlatList<ListItemData>).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const DashboardStyled = {
  Container,
  DataList,
  HeaderCardsContainer,
  LabelListTitle,
  TransactionsContainer,
  UserHeaderContainer,
};
