import React from "React";
import { renderHook, act } from "@testing-library/react-hooks";

import { AuthProvider, useAuth } from "./auth";
import { logInAsync } from "expo-google-app-auth";

jest.mock("expo-auth-session", () => {
  return {
    startAsync: () => {
      return {
        type: "success",
        params: {
          access_token: "google-token",
        },
      };
    },
  };
});

const Providers: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("Auth Hook", () => {
  it("should be able to login with exiting google account", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: `userInfo.id`,
            email: `userInfo.email`,
            name: `userInfo.given_name`,
            photo: `userInfo.picture`,
            locale: `userInfo.locale`,
            verified_email: `userInfo.verified_email`,
          }),
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useAuth(), {
      wrapper: Providers,
    });
    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).toBeTruthy();
  });

  it("should not connect if user cancels google authentication", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: Providers,
    });
    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).toHaveProperty("userInfo.id");
  });
});
