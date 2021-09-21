import styled from "styled-components/native";
import { fontScale } from "../../utils";
import TextH2 from "../TextH2";

const ErrorMsg = styled(TextH2)`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${fontScale(14)}px;
`;

export const ErrorMsgStyled = { ErrorMsg };
