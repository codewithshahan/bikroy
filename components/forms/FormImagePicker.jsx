import { useFormikContext } from "formik";
import React, { useState } from "react";
import { ErrorMessage } from "../forms";
import ImageInputList from "../ImageInputList";

const FormImagePicker = ({ name }) => {
  const { values, setFieldValue, touched, errors } = useFormikContext();

  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((newUri) => newUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
