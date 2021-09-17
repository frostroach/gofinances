import React from "react";
import { ListItemProps } from "../../../../../models/dashboard";
import { ListItemStyled as Styled } from "./styles";

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  return (
    <Styled.Container>
      <Styled.Label>{data.title}</Styled.Label>
      <Styled.Value type={data.type}>
        {data.type === "outcome" && "- "}
        {data.value}
      </Styled.Value>
      <Styled.InlineContainer>
        <Styled.Row>
          <Styled.CategoryIcon name={data.category.icon} />
          <Styled.CategoryName>{data.category.name}</Styled.CategoryName>
        </Styled.Row>

        <Styled.Date>{data.date}</Styled.Date>
      </Styled.InlineContainer>
    </Styled.Container>
  );
};

export default ListItem;
