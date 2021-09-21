import React from "react";
import { TextProps } from "react-native";
import { ErrorMsgStyled as Styled } from "./styles";

const ErrorMsg: React.FC<TextProps> = ({ children, ...props }) => {
  return <Styled.ErrorMsg {...props}>{children}</Styled.ErrorMsg>;
};

export default ErrorMsg;
