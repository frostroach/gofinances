import styled from "styled-components/native";
import ErrorMsg from "../../../../../components/ErrorMsg";
import { heightPercentageToDP } from "../../../../../utils";

const Container = styled.View`
  width: 100%;
`;

const ErrorMessage = styled(ErrorMsg)`
  align-self: center;
  margin: ${heightPercentageToDP("1%")}px 0;
`;

export const InputFormStyled = { Container, ErrorMessage };
