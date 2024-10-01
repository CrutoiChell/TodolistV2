import styles from "./Task.module.css";
import editIcon  from '../assets/Vector.svg'
import delite from '../assets/trash-svgrepo-com 1.svg'
export function Task({ id, text, isEdit,isChecked, handleDelite, handleEdit, handleTogle, handleTogleCheck }) {

  return (
    <div className={styles.container} key={id}>
      <div className={styles.right}>
        <input onChange={() => handleTogleCheck(id)} type="checkbox" checked={isChecked}/>
        {isEdit ? <input value={text} onChange={event => handleEdit(id, 'text', event)} /> : <p className={isChecked ? styles.cheked : ''}><b>{text}</b></p>}
      </div>
      <div className={styles.left}>
        <button className={styles.btn} onClick={() => handleTogle(id)}>{isEdit ? "Save" : <img src={editIcon}  />}</button>
        <button className={styles.btn} onClick={() => handleDelite(id)}><img src={delite}  /></button>
      </div>
    </div >
  )
}