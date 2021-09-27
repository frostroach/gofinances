import React, { useCallback, useEffect, useState } from "react";
import { VictoryPie } from "victory-native";
import { useTheme } from "styled-components";
import { addMonths, format, subMonths } from "date-fns";

import { categories } from "../../../config/categories";
import { retrieveTransactionData } from "../../../utils/store/asyncStorage";

import { BriefingStyled as Styled } from "./styles";
import PageHeader from "../../../components/PageHeader";
import WrapperKAV from "../../../components/WrapperKAV";
import MonthSelector from "./components/MonthSelector";
import CategoryCard from "./components/CategoryCard";
import { fontScale } from "../../../utils";
import { ptBR } from "date-fns/locale";
import Loading from "../../../components/Loading";
import { useFocusEffect } from "@react-navigation/core";

type TotalCategoryData = {
  color: string;
  name: "Casa" | "Fatura" | "Alimentação" | "Mercado" | "Outros" | "Vendas";
  valueFormatted: string;
  value: number;
  percent: string;
};

const Briefing: React.FC = () => {
  const theme = useTheme();
  const [totalCategoriesData, setTotalCategoriesData] = useState<
    TotalCategoryData[]
  >([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const handleDateSelect = (action: "next" | "prev") => {
    if (action === "next") {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  };

  const loadTransactionsData = useCallback(async () => {
    setLoading(true);
    const response = await retrieveTransactionData();

    const outcomeList = response?.filter(
      (item) =>
        item.type === "outcome" &&
        new Date(item.date).getMonth() === selectedDate.getMonth() &&
        new Date(item.date).getFullYear() === selectedDate.getFullYear()
    );
    //const incomeList = response?.filter((item) => item.type === "income");

    const outcomeTotal = outcomeList?.reduce((accumulator: number, outcome) => {
      return accumulator + Number(outcome.value);
    }, 0);

    // const incomeTotal = incomeList?.reduce((accumulator: number, income) => {
    //   return accumulator + Number(income.value);
    // }, 0);

    let totalByCategory: TotalCategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      outcomeList?.forEach((expense) => {
        if (expense.category.key === category.key) {
          categorySum = +Number(expense.value);
        }
      });

      // incomeList?.forEach((income) => {
      //   if (income.category.key === category.key) {
      //     categorySum += Number(income.value);
      //   }
      // });

      if (categorySum > 0) {
        const percent = `${
          //(categorySum / (outcomeTotal! + incomeTotal!)) *
          ((categorySum / outcomeTotal!) * 100).toFixed(1)
        }%`;

        totalByCategory.push({
          name: category.name,
          valueFormatted: categorySum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "brl",
          }),
          color: category.color!,
          value: categorySum,
          percent,
        });
      }
    });
    setTotalCategoriesData(totalByCategory);
    setLoading(false);
  }, [selectedDate]);

  useFocusEffect(
    useCallback(() => {
      loadTransactionsData();
    }, [selectedDate])
  );

  return (
    <WrapperKAV>
      <PageHeader label="Resumo" />
      {loading ? (
        <Loading />
      ) : (
        <Styled.Container>
          <MonthSelector
            onPressNext={() => handleDateSelect("next")}
            onPressPrevious={() => handleDateSelect("prev")}
            date={format(selectedDate, "MMMM, yyyy", { locale: ptBR })}
          />
          <Styled.ChartContainer>
            <VictoryPie
              data={totalCategoriesData}
              x="percent"
              y="value"
              colorScale={totalCategoriesData.map((category) => category.color)}
              style={{
                labels: {
                  fontSize: fontScale(16),
                  fontWeight: "bold",
                  fill: theme.colors.white,
                },
              }}
              labelRadius={50}
            />
          </Styled.ChartContainer>

          <Styled.CategoriesList
            data={totalCategoriesData}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <CategoryCard data={item} />}
          />
        </Styled.Container>
      )}
    </WrapperKAV>
  );
};

export default Briefing;
