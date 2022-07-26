import React from "react";

import { InputStyled as Styled } from "./styles";
import { TextInputProps, TextInput } from "react-native";
import { theme } from "../../theme";

type InputProps = TextInputProps & {
  active?: boolean;
  placeholder: string;
  inputRef?: React.RefObject<TextInput> | undefined;
};

const Input: React.FC<InputProps> = ({
  active = false,
  inputRef,
  placeholder,
  ...props
}) => {
  return (
    <Styled.Input
      active={active}
      placeholder={placeholder}
      {...props}
      placeholderTextColor={theme.colors.gray100}
      ref={inputRef}
    />
  );
};

export default Input;
