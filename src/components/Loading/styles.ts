import styled from "styled-components/native";
import { theme } from "../../theme";

const Loading = styled.ActivityIndicator.attrs({
  size: 30,
  color: theme.colors.orange,
})`
  flex: 1;
  justify-content: center;
`;

export const LoadingStyled = { Loading };
