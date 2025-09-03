"use client";

import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, type = "text", placeholder }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default FormField;
