import "styled-components";
import theme from "./theme";

declare module "styled-components" {
    type ThemeType = typeof theme;
    //interface extends
}