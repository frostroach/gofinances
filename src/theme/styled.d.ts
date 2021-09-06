import "styled-components";
import { colors } from "./index";

declare module "styled-components" {
  type ThemeType = typeof colors;

  export interface DefaultTheme extends ThemeType {}
}
