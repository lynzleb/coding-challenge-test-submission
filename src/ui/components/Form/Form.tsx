import React from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import styles from "./Form.module.css";

interface FormEntry {
  name: string;
  placeholder: string;
  extraProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

interface FormProps {
  label: string;
  loading: boolean;
  formEntries: FormEntry[];
  onFormSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  submitText: string;
}

const Form: React.FC<FormProps> = ({
  label,
  loading,
  formEntries,
  onFormSubmit,
  submitText,
}) => (
  <form className={styles.formContainer} onSubmit={onFormSubmit}>
    <fieldset>
      <legend>{label}</legend>
      {formEntries.map(({ name, placeholder, extraProps }, index) => (
        <div key={`${name}-${index}`} className={styles.formRow}>
          <InputText
            name={name}
            placeholder={placeholder}
            {...extraProps}
          />
        </div>
      ))}
      <Button loading={loading} type="submit">
        {submitText}
      </Button>
    </fieldset>
  </form>
);

export default Form;