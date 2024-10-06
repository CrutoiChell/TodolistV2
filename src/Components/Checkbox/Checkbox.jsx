import styles from './Checkbox.module.css'

export const Checkbox = ({ isChecked, handleTogleCheck, id }) => {
  return (<>
    <input
    id={id + '!'}
      type="checkbox"
      className={styles.checkboxElement}
      checked={isChecked}
      onChange={() => handleTogleCheck((id))}
    />
    <label htmlFor={id + '!'} className={styles.checkboxWrapper}></label>
  </>

  );
};