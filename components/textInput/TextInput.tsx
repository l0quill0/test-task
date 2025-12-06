import { FC } from "react";
import styles from "./TextInput.module.scss";
import clsx from "clsx";

interface Props {
  label?: string;
  type?: "text" | "email" | "password";
  isRequired?: boolean;
  placeholder?: string;
  className?: string;
}

export const TextInput: FC<Props> = ({
  label,
  type = "text",
  isRequired = false,
  placeholder,
  className,
}) => {
  return (
    <div className={clsx(styles.inputContainer, className)}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.input}
        type={type}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
};
