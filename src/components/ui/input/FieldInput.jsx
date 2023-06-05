// Input component

import { ErrorMessage, Field } from "formik";
import React from "react";

const FieldInput = ({ label, id, name, htmlFor, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 md:w-80 w-full">
      <label htmlFor={htmlFor} className="font-semibold text-gray-500">
        {label}*
      </label>
      <div className="flex flex-col gap-2 md:w-80 w-full relative">
        <Field
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className="p-2 text-lg border-2 rounded-md"
          required
          autoComplete="false"
        />
        <ErrorMessage
          name={name}
          component="span"
          data-testid="error-msg"
          className="absolute top-12 left-0 text-red-600"
        />
      </div>
    </div>
  );
};

export default FieldInput;
