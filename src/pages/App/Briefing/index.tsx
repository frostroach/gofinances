import React from "react";

import { BriefingStyled as Styled } from "./styles";
import PageHeader from "../../../components/PageHeader";
import WrapperKAV from "../../../components/WrapperKAV";
import TextH1 from "../../../components/TextH1";

const Briefing: React.FC = () => {
  return (
    <WrapperKAV>
      <PageHeader label="Resumo" />
      <Styled.Container>
        <TextH1>Resumo</TextH1>
      </Styled.Container>
    </WrapperKAV>
  );
};

export default Briefing;
