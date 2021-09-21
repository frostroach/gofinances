import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TypeButtonStyled as Styled } from "./styles";

const icon = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

type ButtonProps = TouchableOpacityProps & {
  type: "income" | "outcome";
  isFocused: boolean;
};

const TypeButton: React.FC<ButtonProps> = ({ isFocused, type, ...props }) => {
  return (
    <Styled.Button {...props} isFocused={isFocused} type={type}>
      <Styled.IconSvg name={icon[type]} type={type} />
      <Styled.ButtonText>
        {type === "income" ? "Income" : "Outcome"}
      </Styled.ButtonText>
    </Styled.Button>
  );
};

export default TypeButton;
