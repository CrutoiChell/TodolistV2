import styles from './Input.module.css'
export function Input({ list, setList, handleAdd }) {
    return (
        <div className={styles.container}>
            <input
                placeholder='Create a new note...'
                className={styles.input}
                value={list} 
                onChange={event => setList(event.target.value)}
            />
            <button className={styles.btn} onClick={handleAdd}> Create </button>
        </div>

    )
}