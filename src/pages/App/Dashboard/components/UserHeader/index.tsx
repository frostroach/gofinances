import React from "react";
import { View } from "react-native";
import { UserHeaderStyled as Styled } from "./styles";
import TextH2 from "../../../../../components/TextH2";
import { UserBase } from "../../../../../models/user";

type UserHeaderProps = {
  user: UserBase;
  onPressLogout: () => void;
};

const UserHeader: React.FC<UserHeaderProps> = ({ user, onPressLogout }) => {
  return (
    <Styled.Container>
      {/* para conseguir a url da imagem : github.com/username.png */}
      <Styled.InlineContainer>
        <Styled.UserImage
          source={{
            uri: user.photo,
          }}
        />
        <View>
          <TextH2>Olá,</TextH2>
          <Styled.Username>{user.name}</Styled.Username>
        </View>
      </Styled.InlineContainer>
      <Styled.PowerSvg onPress={onPressLogout} />
    </Styled.Container>
  );
};

export default UserHeader;
