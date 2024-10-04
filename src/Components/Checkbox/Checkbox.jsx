import styles from './Checkbox.module.css'

export const Checkbox = ({ isChecked, handleTogleCheck, id }) => {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        className={styles.checkboxElement}
        checked={isChecked}
        onChange={() => handleTogleCheck((id))}
      />
    </label>
  );
};