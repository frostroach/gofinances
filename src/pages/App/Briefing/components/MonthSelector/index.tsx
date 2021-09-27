import React from "react";
import { TouchableOpacity } from "react-native";
import { MonthSelectorStyled as Styled } from "./styles";

type MonthProps = {
  onPressPrevious: () => void;
  onPressNext: () => void;
  date: string;
};

const MonthSelector: React.FC<MonthProps> = ({
  date,
  onPressNext,
  onPressPrevious,
}) => {
  return (
    <Styled.Container>
      <TouchableOpacity onPress={onPressPrevious}>
        <Styled.Icon name="chevron-left" />
      </TouchableOpacity>

      <Styled.Date>{date}</Styled.Date>
      <TouchableOpacity onPress={onPressNext}>
        <Styled.Icon name="chevron-right" />
      </TouchableOpacity>
    </Styled.Container>
  );
};

export default MonthSelector;
