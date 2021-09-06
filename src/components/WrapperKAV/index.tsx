import React from 'react';
import { SafeAreaView } from 'react-native';
import { WrapperKAVStyled as Styled } from './styles';

const WrapperKAV: React.FC = ({ children }) => {
  return (
    <>
      <Styled.SafeArea>
        <Styled.KAV>{children}</Styled.KAV>
      </Styled.SafeArea>
      <SafeAreaView />
    </>
  );
};

export default WrapperKAV;
