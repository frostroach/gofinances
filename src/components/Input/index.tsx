import React from "react";

import { InputStyled as Styled } from "./styles";
import { TextInputProps, TextInput } from "react-native";
import { theme } from "../../theme";

type InputProps = TextInputProps & {
  placeholder: string;
  inputRef?: React.RefObject<TextInput> | undefined;
};

const Input: React.FC<InputProps> = ({ inputRef, placeholder, ...props }) => {
  return (
    <Styled.Input
      placeholder={placeholder}
      {...props}
      placeholderTextColor={theme.colors.gray100}
      ref={inputRef}
    />
  );
};

export default Input;
