import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { randomId } from './helpers/random';
import { Tasks } from './Components/Tasks/Tasks';
import { Input } from './Components/Input/Input';

// localStorage.clear()

let arr2

let nowtheme;

if (localStorage.getItem('arr')) {
  arr2 = JSON.parse(localStorage.getItem('arr'))
} else {
  arr2 = []
}

if (localStorage.getItem('theme')) {
  nowtheme = JSON.parse(localStorage.getItem('theme'))
} else{
  nowtheme = false
}

export default function App() {
  const [list, setList] = useState('');
  const [arr, setArr] = useState(arr2)
  const [theme, setTheme] = useState(nowtheme)

  if (theme == false) {
    document.body.style.backgroundColor = 'rgb(226, 226, 226)';
    let copy = theme
    let str = JSON.stringify(copy)
    localStorage.setItem('theme', str)
  } else {
    document.body.style.backgroundColor = '#252525';
    let copy = theme
    let str = JSON.stringify(copy)
    localStorage.setItem('theme', str)
  }

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
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleTogle(id) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item.isEdit = !item.isEdit;
      }
      return item;
    }));
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleTogleCheck(id) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    }));
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
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
        <h1 className={theme ? styles.dark : styles.white}>TODO LIST</h1>
        <Input
          list={list}
          setList={setList}
          handleAdd={handleAdd}
          setTheme={setTheme}
          theme={theme}
        />
        <Tasks
          arr={arr}
          handleDelite={handleDelite}
          handleTogle={handleTogle}
          handleEdit={handleEdit}
          handleTogleCheck={handleTogleCheck}
          theme={theme}
        />
      </main>
    </>
  )
}

