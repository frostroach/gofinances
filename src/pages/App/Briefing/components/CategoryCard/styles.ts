import styled, { css } from "styled-components/native";
import TextH1 from "../../../../../components/TextH1";
import TextH2 from "../../../../../components/TextH2";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

type ContainerProps = {
  borderColor: string;
};

const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-left-width: 3px;
  border-radius: 5px;
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-left-color: ${borderColor};
    `}
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDP("1%")}px;
  padding: ${heightPercentageToDP("2%")}px ${widthPercentageToDP("3%")}px;
  width: 100%;
`;

const CategoryName = styled(TextH2)`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: ${fontScale(15)}px;
`;

const CategoryValue = styled(TextH1)`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: ${fontScale(15)}px;
`;

const CategorySymbol = styled.Text`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: ${fontScale(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

const InlineContainer = styled.View`
  flex-direction: row;
`;

export const CategoryCardStyled = {
  CategoryName,
  CategoryValue,
  CategorySymbol,
  Container,
  InlineContainer,
};
