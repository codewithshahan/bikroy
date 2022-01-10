import { useFormikContext } from "formik";
import React from "react";
import { ErrorMessage } from ".";
import AppPicker from "../AppPicker";

const AppFormPicker = ({ items, placeholder, width = "100%", name }) => {
  const { touched, setFieldValue, values, errors } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numOfColumns={3}
        placeholder={placeholder}
        width={width}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
