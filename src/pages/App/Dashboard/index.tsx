import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import Loading from "../../../components/Loading";
import WrapperKAV from "../../../components/WrapperKAV";
import { useAuth } from "../../../hooks/auth";
import { ListItemData } from "../../../models/dashboard";
import { retrieveTransactionData } from "../../../utils/store/asyncStorage";
import HeaderCard from "./components/HeaderCard";
import ListItem from "./components/ListItem";
import UserHeader from "./components/UserHeader";
import { DashboardStyled as Styled } from "./styles";

type HighlightProps = {
  value: string;
  date: string;
};

type HighlightData = {
  incomes: HighlightProps;
  outcomes: HighlightProps;
  total: HighlightProps;
};

const Dashboard = () => {
  const { user, signOutUser } = useAuth();
  const [itemList, setItemList] = useState<ListItemData[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );
  const [loading, setLoading] = useState(true);

  const getLastTransactionData = (
    data: ListItemData[],
    type: "income" | "outcome"
  ): string => {
    const lastTransactions = new Date(
      Math.max.apply(
        Math,
        data
          .filter((item: ListItemData) => item.type === type)
          .map((item: ListItemData) => new Date(item.date).getTime())
      )
    );

    const lastTransactionsFormatted = Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(lastTransactions);

    return lastTransactionsFormatted;
  };

  const loadTransactions = useCallback(async () => {
    let incomesSum = 0;
    let outcomesSum = 0;
    let lastOutcomeDate;
    let lastIncomeDate;
    let lastTotalDate;
    let userTransactions;
    try {
      setLoading(true);
      const response = await retrieveTransactionData();

      const transactions = response ? response : [];
      userTransactions = transactions.filter((item) => item.userId === user.id);

      const formattedTransactions = userTransactions.map(
        (item: ListItemData) => {
          const amount = Number(item.value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          const date = Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).format(new Date(item.date));

          if (item.type === "income") {
            incomesSum = incomesSum + Number(item.value);
          } else {
            outcomesSum += Number(item.value);
          }

          return {
            id: item.id,
            title: item.title,
            userId: item.userId,
            value: amount,
            category: item.category,
            date: date,
            type: item.type,
          };
        }
      );
      const foundIncome = userTransactions.find(
        (item) => item.type === "income"
      );
      const foundOutcome = userTransactions.find(
        (item) => item.type === "outcome"
      );
      if (foundIncome) {
        lastIncomeDate = getLastTransactionData(userTransactions, "income");
      }
      if (foundOutcome) {
        lastOutcomeDate = getLastTransactionData(userTransactions, "outcome");
        lastTotalDate = `de 01 a ${lastOutcomeDate}`;
      }

      setItemList(formattedTransactions);
      setHighlightData({
        incomes: {
          value: incomesSum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          date: lastIncomeDate,
        },
        outcomes: {
          value: outcomesSum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          date: lastOutcomeDate,
        },
        total: {
          value: (incomesSum - outcomesSum).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          date: lastTotalDate,
        },
      });
      setLoading(false);
    } catch (error) {
      console.log("error loading", error);
      setLoading(false);
    }
  }, []);

  const handleLogout = async (): Promise<void> => {
    try {
      await signOutUser();
    } catch (err) {
      console.log("err");
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <WrapperKAV>
      {loading ? (
        <Loading />
      ) : (
        <Styled.Container>
          <Styled.UserHeaderContainer>
            <UserHeader user={user} onPressLogout={handleLogout} />
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
              value={highlightData?.incomes?.value ?? 0}
              date={
                highlightData?.incomes?.date
                  ? `Última entrada dia ${highlightData?.incomes?.date}`
                  : "Nenhuma entrada para ser exibida"
              }
            />
            <HeaderCard
              iconName="down"
              label="Saídas"
              value={highlightData?.outcomes?.value ?? 0}
              date={
                highlightData?.outcomes?.date
                  ? `Última saída dia ${highlightData?.outcomes?.date}`
                  : "Nenhuma saída para ser exibida"
              }
            />
            <HeaderCard
              total
              iconName="total"
              label="Total"
              value={highlightData.total?.value ?? 0}
              date={highlightData?.total?.date}
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
      )}
    </WrapperKAV>
  );
};

export default Dashboard;
