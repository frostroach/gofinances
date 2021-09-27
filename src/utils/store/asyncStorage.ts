import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { ListItemData } from "../../models/dashboard";
import { Transaction } from "../../models/transaction";

const transactionKey = "@gofinances:transactions";

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
