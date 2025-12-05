import Checked from "../../public/Checked.svg";
import Unchecked from "../../public/Unchecked.svg";
import styles from "./RadioInput.module.scss";

export default function RadioInput({
  name,
  id,
  label,
}: {
  name: string;
  id: string;
  label?: string;
}) {
  return (
    <>
      <input type="radio" name={name} id={id} className={styles.radioInput} />
      <label htmlFor={id} className={styles.radioLabel}>
        <Unchecked className={styles.radioIconUnchecked} />
        <Checked className={styles.radioIconChecked} />
        {label}
      </label>
    </>
  );
}
