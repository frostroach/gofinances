import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Category } from "../../../models/category";

type CategoryProps = {
  color: string;
  name: "Casa" | "Fatura" | "Alimentação" | "Mercado" | "Outros" | "Vendas";
  valueFormatted: string;
};

const Container = styled.View`
  align-self: center;
  flex: 1;
  width: 90%;
`;

const ChartContainer = styled.View`
  align-items: center;
  width: 100%;
`;

const CategoriesList = styled(FlatList as new () => FlatList<CategoryProps>)``;

export const BriefingStyled = { Container, CategoriesList, ChartContainer };
