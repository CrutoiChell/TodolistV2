import styles from './input.module.css'
export function Input({ list, setList, handleAdd }) {
    return (
        <div className={styles.container}>
            <input
                placeholder='Создать новую заметку...'
                className={styles.input}
                value={list} 
                onChange={event => setList(event.target.value)}
            />
            <button className={styles.btn} onClick={handleAdd}> Create </button>
        </div>

    )
}