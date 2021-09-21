import React, { useState } from "react";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { SignupStyled as Styled } from "./styles";
import PageHeader from "../../../components/PageHeader";
import WrapperKAV from "../../../components/WrapperKAV";

import TypeButton from "./components/TypeButton";
import { Category as CategoryModel } from "../../../models/category";
import { categories } from "../../../config/categories";
import InputForm from "./components/InputForm";

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
  const [focusedOption, setFocusedOption] = useState<string>("");
  const [isShowingList, setIsShowingList] = useState(false);
  const [categorySelected, setCategorySelected] = useState<CategoryModel>(
    {} as CategoryModel
  );

  const {
    control,
    handleSubmit,
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
  };

  const handleShowList = (): void => {
    setIsShowingList(!isShowingList);
  };

  const handleSelectedCategory = (data: CategoryModel): void => {
    handleShowList();
    setCategorySelected(data);
  };

  const handleRegisterInfo = (form: FormData): void => {
    if (!focusedOption) {
      Alert.alert("Selecione o tipo da transação");
      return;
    }
    if (Object.values(categorySelected).length < 1) {
      Alert.alert("Selecione a categoria");
      return;
    }
    const data = {
      id: String(new Date().getTime()),
      title: form.name,
      value: form.value,
      category: categorySelected,
      date: new Date(),
      type: focusedOption,
    };

    console.log("data", data);
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
