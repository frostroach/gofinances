import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  deleteUserData,
  retrieveUserData,
  saveUserData,
} from "../utils/store/asyncStorage";
import { UserBase } from "../models/user";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

type AuthProviderProps = {
  children: ReactNode;
};

type UserData = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

type AuthContextData = {
  user: UserData;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOutUser: () => Promise<void>;
  userStoragedLoading: boolean;
};

type SignInWithGoogleResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [userStoragedLoading, setUserStoragedLoading] = useState(true);

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as SignInWithGoogleResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();
        const userLogged = {
          id: String(userInfo.id),
          email: userInfo.email,
          name: userInfo.name,
          photo: userInfo.picture,
        };
        await saveUserData(userLogged);
        setUser(userLogged);
      }
    } catch (err) {
      console.log("err login", err);
      throw new Error(err);
    }
  };

  // const signInWithApple = async (): Promise<void> => {
  //   try {
  //     const credentials = await AppleAuthentication.signInAsync({
  //       requestedScopes: [
  //         AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
  //         AppleAuthentication.AppleAuthenticationScope.EMAIL,
  //       ],
  //     });
  //     if (credentials) {
  //       const userLogged = {
  //         id: String(credentials.user),
  //         email: credentials.email,
  //         name: credentials.fullName?.givenName!,
  //         photo: `https://ui-avatars.com/api/?name=${credentials.fullName
  //           ?.givenName!}&length=1`,
  //       };
  //       await saveUserData(userLogged);
  //       setUser(userLogged);
  //     }
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };

  const signOutUser = async (): Promise<void> => {
    try {
      setUser({} as UserBase);
      await deleteUserData();
    } catch (err) {
      throw new Error("Não foi possível deslogar");
    }
  };

  const loadUserData = async (): Promise<void> => {
    setUserStoragedLoading(true);
    const userStoraged = await retrieveUserData();
    if (userStoraged) {
      console.log(userStoraged);
      setUser(userStoraged);
    }
    setUserStoragedLoading(false);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        //signInWithApple,
        signOutUser,
        userStoragedLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
