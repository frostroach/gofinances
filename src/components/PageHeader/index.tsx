import React from "react";

import { PageHeaderStyled as Styled } from "./styles";

type PageHeaderProps = {
  label: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ label }) => {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};

export default PageHeader;
