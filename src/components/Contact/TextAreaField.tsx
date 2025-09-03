"use client";

import { Field, ErrorMessage } from "formik";

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ name, label, placeholder, rows = 4 }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <Field
        as="textarea"
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="textarea textarea-bordered w-full"
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default TextAreaField;
