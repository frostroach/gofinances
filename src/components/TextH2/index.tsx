import React from "react";
import { TextProps } from "react-native";
import { TextH2Styled as Styled } from "./styled";

const TextH2: React.FC<TextProps> = ({ children, ...props }) => {
  return <Styled.H2 {...props}>{children}</Styled.H2>;
};

export default TextH2;
