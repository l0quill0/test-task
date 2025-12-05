import styles from "./TextInput.module.scss";

export default function TextInput({
  label,
  type = "text",
  isRequired = false,
  placeholder,
  styleContainer,
  styleInput,
  styleLabel,
}: {
  label?: string;
  type?: "text" | "email" | "password";
  isRequired?: boolean;
  placeholder?: string;
  styleContainer?: React.CSSProperties;
  styleInput?: React.CSSProperties;
  styleLabel?: React.CSSProperties;
}) {
  return (
    <div className={styles.inputContainer} style={styleContainer}>
      <label className={styles.inputLabel} style={styleLabel}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        style={styleInput}
      />
    </div>
  );
}
