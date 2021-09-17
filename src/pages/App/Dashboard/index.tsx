import React, { useState, useEffect } from "react";
import WrapperKAV from "../../../components/WrapperKAV";
import { ListItemData } from "../../../models/dashboard";
import HeaderCard from "./components/HeaderCard";
import ListItem from "./components/ListItem";
import UserHeader from "./components/UserHeader";
import { DashboardStyled as Styled } from "./styles";

const Dashboard = () => {
  const [itemList, setItemList] = useState<ListItemData[]>([]);

  useEffect(() => {
    const items = [
      {
        id: "1",
        title: "Desenvolvimento de App",
        value: "R$ 500,00",
        category: { name: "Vendas", key: "sales", icon: "dollar-sign" },
        date: "13/04/2021",
        type: "income",
      },
      {
        id: "2",
        title: "Hamburgueria Pizzy",
        value: "R$ 59,00",
        category: { name: "Alimentação", key: "delivery", icon: "coffee" },
        date: "10/04/2021",
        type: "outcome",
      },
      {
        id: "3",
        title: "Aluguel do apartamento",
        value: "R$ 1200,00",
        category: { name: "Casa", key: "house", icon: "home" },
        date: "08/04/2021",
        type: "outcome",
      },
    ];
    setItemList(items);
  }, []);

  return (
    <WrapperKAV>
      <Styled.Container>
        <Styled.UserHeaderContainer>
          <UserHeader />
        </Styled.UserHeaderContainer>
        <Styled.HeaderCardsContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
        >
          <HeaderCard
            iconName="up"
            label="Entradas"
            value="R$ 17.400,00"
            date="Última entrada dia 13 de abril"
          />
          <HeaderCard
            iconName="down"
            label="Saídas"
            value="R$ 1.259,00"
            date="Última saída dia 03 de abril"
          />
          <HeaderCard
            total
            iconName="total"
            label="Total"
            value="R$ 16.141,00"
            date="01 à 16 de abril"
          />
        </Styled.HeaderCardsContainer>

        <Styled.TransactionsContainer>
          <Styled.LabelListTitle>Listagem</Styled.LabelListTitle>
          <Styled.DataList
            keyExtractor={(item) => item.id}
            data={itemList}
            renderItem={({ item }) => <ListItem data={item} />}
          />
        </Styled.TransactionsContainer>
      </Styled.Container>
    </WrapperKAV>
  );
};

export default Dashboard;
