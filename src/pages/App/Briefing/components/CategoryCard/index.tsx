import React from "react";
import { Category } from "../../../../../models/category";
import { CategoryCardStyled as Styled } from "./styles";

type CategoryProps = {
  color: string;
  name: "Casa" | "Fatura" | "Alimentação" | "Mercado" | "Outros" | "Vendas";
  valueFormatted: string;
};

type CategoryCardProps = {
  data: CategoryProps;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Styled.Container borderColor={data.color!}>
      <Styled.CategoryName>{data.name}</Styled.CategoryName>
      <Styled.InlineContainer>
        <Styled.CategorySymbol>
          {data.valueFormatted.substring(0, 2)}
        </Styled.CategorySymbol>
        <Styled.CategoryValue>
          {data.valueFormatted.substring(2)}
        </Styled.CategoryValue>
      </Styled.InlineContainer>
    </Styled.Container>
  );
};

export default CategoryCard;
