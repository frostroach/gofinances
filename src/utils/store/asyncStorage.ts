import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { ListItemData } from "../../models/dashboard";
import { Transaction } from "../../models/transaction";
import { UserBase } from "../../models/user";

const transactionKey = "@gofinances:transactions";
const userKey = "@gofinances:user";

export const retrieveTransactionData = async (): Promise<
  ListItemData[] | undefined
> => {
  try {
    const dataRetrieved = await AsyncStorage.getItem(transactionKey);
    const dataFetch = dataRetrieved ? JSON.parse(dataRetrieved) : [];
    return dataFetch;
  } catch (error) {
    console.log("error retriveTransactionData");
    Alert.alert("Não foi possível carregar as transações");
  }
};

export const saveTransactionData = async (data: Transaction): Promise<void> => {
  try {
    const dataStored = await retrieveTransactionData();
    const dataFormatted = dataStored ? [...dataStored, data] : data;
    await AsyncStorage.setItem(transactionKey, JSON.stringify(dataFormatted));
  } catch (error) {
    console.log("error SaveTransaction");
    Alert.alert("Não foi possível salvar a transação");
  }
};

export const deleteAllTransactionData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(transactionKey);
  } catch (error) {
    console.log("error deleteTransaction");
    Alert.alert("Não foi possível apagar os dados");
  }
};

export const saveUserData = async (data: UserBase): Promise<void> => {
  try {
    await AsyncStorage.setItem(userKey, JSON.stringify(data));
  } catch (err) {
    Alert.alert("Não foi possível salvar os dados do usuário");
  }
};

export const retrieveUserData = async (): Promise<UserBase | undefined> => {
  try {
    const dataRetrieved = await AsyncStorage.getItem(userKey);
    const dataFetch = dataRetrieved ? JSON.parse(dataRetrieved) : [];
    return dataFetch;
  } catch (err) {
    Alert.alert("Não foi possível carregar os dados do usuário");
  }
};

export const deleteUserData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(userKey);
  } catch (err) {
    Alert.alert("Não foi possível apagar os dados do usuário");
  }
};
