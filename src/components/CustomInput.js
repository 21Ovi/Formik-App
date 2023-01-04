import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  console.log("helpers", helpers);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomInput;
