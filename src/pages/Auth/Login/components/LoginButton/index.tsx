import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { LoginButtonStyled as Styled } from "./styles";

type LoginButtonProps = TouchableOpacityProps & {
  title: string;
  svg: React.FC<SvgProps>;
};

const LoginButton: React.FC<LoginButtonProps> = ({
  title,
  svg: Svg,
  ...props
}) => {
  return (
    <Styled.ButtonTouchable activeOpacity={0.8} {...props}>
      <Styled.ImageContainer>
        <Svg />
      </Styled.ImageContainer>

      <Styled.LabelContainer>
        <Styled.Label>{title}</Styled.Label>
      </Styled.LabelContainer>
    </Styled.ButtonTouchable>
  );
};

export default LoginButton;
