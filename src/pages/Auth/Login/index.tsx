import React, { useState } from "react";
import { LoginStyled as Styled } from "./styles";
import { useTheme } from "styled-components/native";
import { Alert, Platform } from "react-native";

import WrapperKAV from "../../../components/WrapperKAV";
import LoginButton from "./components/LoginButton";
import AppleIcon from "../../../assets/icons/apple-icon.svg";
import GoogleIcon from "../../../assets/icons/google-icon.svg";
import { useAuth } from "../../../hooks/auth";

const Login: React.FC = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const handleGoogleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (err) {
      console.log("err handlegooglelogin", err);
      Alert.alert("Não foi possível conectar à conta google");
      setIsLoading(false);
    }
  };

  const handleAppleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await signInWithApple();
      setIsLoading(false);
    } catch (err) {
      console.log("err handlegooglelogin", err);
      Alert.alert("Não foi possível conectar à conta Apple");
      setIsLoading(false);
    }
  };

  return (
    <WrapperKAV>
      <Styled.PurpleWrapper>
        <Styled.LogoSvg />
        <Styled.PresentationText>
          Controle suas {`\n`}finanças de forma{`\n`} muito simples
        </Styled.PresentationText>
        <Styled.LoginText>
          Faça seu login com {`\n`} uma das contas abaixo
        </Styled.LoginText>
      </Styled.PurpleWrapper>
      <Styled.OrangeWrapper>
        <Styled.ButtonsContainer>
          <LoginButton
            svg={GoogleIcon}
            title="Entrar com Google"
            onPress={handleGoogleLogin}
          />

          {/* {Platform.OS === "ios" && ( */}
          <LoginButton
            svg={AppleIcon}
            title="Entrar com Apple"
            onPress={handleAppleLogin}
          />
          {/* )} */}
        </Styled.ButtonsContainer>
        {isLoading && <Styled.Loading size={25} color={theme.colors.white} />}
      </Styled.OrangeWrapper>
    </WrapperKAV>
  );
};

export default Login;
