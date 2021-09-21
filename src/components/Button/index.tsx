import React from "react";
import { TouchableOpacityProps } from "react-native";
import { theme } from "../../theme";
import { ButtonStyled as Styled } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  loading?: boolean;
  filled?: boolean;
  label: string;
};

const Button: React.FC<ButtonProps> = ({
  filled,
  label,
  loading,
  ...props
}) => {
  return (
    <Styled.Button filled={filled} {...props}>
      {loading ? (
        <Styled.Loading
          color={filled ? theme.colors.white : theme.colors.orange}
        />
      ) : (
        <Styled.Label filled={filled}>{label}</Styled.Label>
      )}
    </Styled.Button>
  );
};

export default Button;
