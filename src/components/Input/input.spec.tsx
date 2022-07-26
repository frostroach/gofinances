import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { theme } from "../../theme";

import Input from "./index";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input Global Component", () => {
  it("must have a specific border color when input is active", () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers,
      }
    );

    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual(theme.colors.red);
  });
});
