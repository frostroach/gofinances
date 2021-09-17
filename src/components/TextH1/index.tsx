import React from "react";
import { TextProps } from "react-native";
import { TextH1Styled as Styled } from "./styled";

const TextH1: React.FC = ({ children, ...props }) => {
  return <Styled.H1 {...props}>{children}</Styled.H1>;
};

export default TextH1;
