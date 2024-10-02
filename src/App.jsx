import { useState } from 'react'
import styles from './App.module.css'
import { randomId } from '../random';
import { Task } from './Components/Task/Task';
import { Input } from './Components/Input/Input';


// localStorage.clear()

let arr2

if (localStorage.getItem('arr')) {
  arr2 = JSON.parse(localStorage.getItem('arr'))
} else {
  arr2 = []
}

export default function App() {
  const [list, setList] = useState('');
  const [arr, setArr] = useState(arr2)

  function handleAdd() {
    if (list.trim()) {
      const copy = [...arr, { id: randomId(), text: list, isEdit: false, isChecked: false }]
      setArr(copy)
      const str = JSON.stringify(copy)
      localStorage.setItem('arr', str)
      setList('')
    }
  }

  function handleDelite(id) {
    let copy = arr.filter(elem => elem.id !== id)
    setArr(copy)
  }

  function handleTogle(id) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item.isEdit = !item.isEdit;
      }
      let str = JSON.stringify(copy)
      localStorage.setItem('arr', str)
      return item;
    }));
  }

  function handleTogleCheck(id) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      let str = JSON.stringify(copy)
      localStorage.setItem('arr', str)
      return item;
    }));
  }

  function handleEdit(id, field, event) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item[field] = event.target.value
        setList('')
      }
      return item;
    }));
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  return (
    <>
      <main className={styles.container}>
        <h1>TODO LIST</h1>
        <div className={styles.Tasks}>
          <Input
            list={list}
            setList={setList}
            handleAdd={handleAdd}
          />
          <div className={styles.tasks}>
            {arr.map((item) => (
              <Task
                key={item.id}
                id={item.id}
                text={item.text}
                isEdit={item.isEdit}
                isChecked={item.isChecked}
                handleDelite={handleDelite}
                handleTogle={handleTogle}
                handleEdit={handleEdit}
                handleTogleCheck={handleTogleCheck}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

