import React from "react";
import { View, Text, TextInput, Button } from "react-native";

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <View>
      <Text testID="page-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Vitor"
      />

      <TextInput testID="input-surname" placeholder="Sobrenome" value="Cesar" />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;
