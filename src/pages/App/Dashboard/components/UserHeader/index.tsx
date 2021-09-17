import React from "react";
import { View } from "react-native";
import { UserHeaderStyled as Styled } from "./styles";
import TextH2 from "../../../../../components/TextH2";

const UserHeader: React.FC = () => {
  return (
    <Styled.Container>
      {/* para conseguir a url da imagem : github.com/username.png */}
      <Styled.InlineContainer>
        <Styled.UserImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/29100983?v=4",
          }}
        />
        <View>
          <TextH2>Olá,</TextH2>
          <Styled.Username>Vitor</Styled.Username>
        </View>
      </Styled.InlineContainer>
      <Styled.PowerSvg />
    </Styled.Container>
  );
};

export default UserHeader;
