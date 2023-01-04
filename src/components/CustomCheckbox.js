import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  console.log("helpers", helpers);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of the service</span>
      </div>
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomCheckbox;
