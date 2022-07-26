import React from "react";

import { render } from "@testing-library/react-native";

import Profile from "../../pages/App/Profile";

describe("Profile", () => {
  it("Checks if username's input placeholder is shown correctly", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });

  it("Checks if user data is Loaded", () => {
    const { getByTestId } = render(<Profile />);

    const userName = getByTestId("input-name"); //testId of the text input name
    const userSurname = getByTestId("input-surname");

    expect(userName.props.value).toEqual("Vitor");
    expect(userSurname.props.value).toEqual("Cesar");
  });

  it("Checks if page title is correct", () => {
    const { getByTestId } = render(<Profile />);

    const pageTitle = getByTestId("page-title");

    expect(pageTitle.props.children).toContain("Perfil");
  });
});
