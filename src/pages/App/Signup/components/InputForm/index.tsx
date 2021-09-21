import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import Input from "../../../../../components/Input";
import { InputFormStyled as Styled } from "./styles";

type InputFormProps = TextInputProps & {
  control: Control;
  name: string;
  placeholder: string;
  error?: string;
};

const InputForm: React.FC<InputFormProps> = ({
  control,
  error,
  name,
  placeholder,
  ...props
}) => {
  return (
    <Styled.Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder={placeholder}
            {...props}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
    </Styled.Container>
  );
};

export default InputForm;
