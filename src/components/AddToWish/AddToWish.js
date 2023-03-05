import React, {useState} from "react";
import styles from "./AddToWish.module.css"

function AddToWish({wishes, setWish}) {

  function generateId() {
    return Math.round(Math.random() * 10000);
  }

  const [value, setValue] = useState('');

  function saveWish() {
    if(value) {
      setWish(
        [...wishes, {
          id: generateId(),
          title: value,
          priority: 'gold'
        }]
      );
    }
    else {
      setWish([...wishes]);
    }
    

    setValue('');
  }

  return (
    <div className={styles.root}>
      <input className={styles.inputWish} placeholder="Запишите ваше желание" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className={styles.inputButton} onClick={() => saveWish()}>Сохранить</button> 
    </div>
  )
} 

export default AddToWish;