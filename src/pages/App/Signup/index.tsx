import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

import { SignupStyled as Styled } from "./styles";
import PageHeader from "../../../components/PageHeader";
import WrapperKAV from "../../../components/WrapperKAV";

import TypeButton from "./components/TypeButton";
import { Category as CategoryModel } from "../../../models/category";
import { categories } from "../../../config/categories";
import InputForm from "./components/InputForm";
import { Transaction } from "../../../models/transaction";
import { saveTransactionData } from "../../../utils/store/asyncStorage";
import { useAuth } from "../../../hooks/auth";

type FormData = {
  name: string;
  value: number;
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Preencha o nome da transação"),
  value: yup
    .number()
    .typeError("Informe um valor numérico")
    .positive("Valores negativos não são permitidos")
    .required("Preencha o campo com um valor"),
});

const Signup: React.FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();
  const [focusedOption, setFocusedOption] = useState<string>("");
  const [isShowingList, setIsShowingList] = useState(false);
  const [categorySelected, setCategorySelected] = useState<CategoryModel>(
    {} as CategoryModel
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOptionFocus = (type: "income" | "outcome"): void => {
    if (type === focusedOption) {
      setFocusedOption("");
      return;
    }
    setFocusedOption(type);
    Keyboard.dismiss();
  };

  const handleShowList = (): void => {
    setIsShowingList(!isShowingList);
  };

  const handleSelectedCategory = (data: CategoryModel): void => {
    const categoryData = {
      name: data.name,
      key: data.key,
      icon: data.icon,
    };
    handleShowList();
    setCategorySelected(categoryData);
  };

  const handleRegisterInfo = async (form: FormData): Promise<void> => {
    Keyboard.dismiss();
    if (!focusedOption) {
      Alert.alert("Selecione o tipo da transação");
      return;
    }
    if (Object.values(categorySelected).length < 1) {
      Alert.alert("Selecione a categoria");
      return;
    }
    const data: Transaction = {
      id: String(new Date().getTime()),
      userId: user.id,
      title: form.name,
      value: form.value,
      category: categorySelected,
      date: new Date(),
      type: focusedOption,
    };

    await saveTransactionData(data);
    setCategorySelected({} as CategoryModel);
    setFocusedOption("");
    reset();
    navigate("Dashboard");
  };

  const renderCategoryList = ({
    item,
  }: {
    item: CategoryModel;
  }): JSX.Element => {
    return (
      <Styled.CategoryOption onPress={() => handleSelectedCategory(item)}>
        <Styled.Icon name={item.icon} />
        <Styled.Category>{item.name}</Styled.Category>
      </Styled.CategoryOption>
    );
  };

  return (
    <WrapperKAV>
      <PageHeader label="Cadastro" />

      <Styled.Container>
        <InputForm
          placeholder="Nome"
          control={control}
          name="name"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <InputForm
          placeholder="Preço"
          control={control}
          name="value"
          keyboardType="numeric"
          error={errors.value && errors.value.message}
        />

        <Styled.InlineContainer>
          <TypeButton
            type="income"
            onPress={() => handleOptionFocus("income")}
            isFocused={focusedOption === "income"}
          />
          <TypeButton
            type="outcome"
            onPress={() => handleOptionFocus("outcome")}
            isFocused={focusedOption === "outcome"}
          />
        </Styled.InlineContainer>
        <Styled.CategorySelector
          activeOpacity={0.8}
          onPress={handleShowList}
          isOpen={isShowingList}
        >
          <Styled.Category>
            {Object.values(categorySelected).length >= 1
              ? categorySelected?.name
              : "Categoria"}
          </Styled.Category>
          <Styled.Icon name={isShowingList ? "chevron-up" : "chevron-down"} />
        </Styled.CategorySelector>
        {isShowingList && (
          <Styled.CategoryList
            data={categories}
            renderItem={renderCategoryList}
            keyExtractor={(item) => item.key}
          />
        )}
        <Styled.SendButton
          filled
          label="Enviar"
          onPress={handleSubmit(handleRegisterInfo)}
        />
      </Styled.Container>
    </WrapperKAV>
  );
};

export default Signup;
