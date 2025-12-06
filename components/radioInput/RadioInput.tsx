import Checked from "@icons/Checked.svg";
import Unchecked from "@icons/Unchecked.svg";
import styles from "./RadioInput.module.scss";
import { FC } from "react";

type Props = {
  name: string;
  id: string;
  label?: string;
};

export const RadioInput: FC<Props> = ({ name, id, label }) => {
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
};
