import React from "react";
import { theme } from "../../../../../theme";
import { HeaderCardStyled as Styled } from "./styles";

type HeaderCardProps = {
  label: string;
  value: string;
  date: string;
  iconName: "up" | "down" | "total";
  total?: boolean;
};

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

const iconColors = {
  up: theme.colors.green,
  down: theme.colors.red,
  total: theme.colors.white,
};

const HeaderCard: React.FC<HeaderCardProps> = ({
  label,
  total,
  iconName,
  value,
  date,
}) => {
  return (
    <Styled.Container total={total}>
      <Styled.HeaderInfoContainer>
        <Styled.TypeText total={total}>{label}</Styled.TypeText>
        <Styled.TypeIcon
          name={icon[iconName]}
          iconColor={iconColors[iconName]}
        />
      </Styled.HeaderInfoContainer>
      <Styled.BottomContainer>
        <Styled.TotalAmount total={total}>{value}</Styled.TotalAmount>
        <Styled.LastTransactionText total={total}>
          {date}
        </Styled.LastTransactionText>
      </Styled.BottomContainer>
    </Styled.Container>
  );
};

export default HeaderCard;
