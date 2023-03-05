import React, { useState } from "react";
import styles from "./WishList.module.css";

function WishList({ wishes, setWish}) {

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  function deleteWish(id) {
    let newWishes = [...wishes].filter((item) => item.id !== id);
    setWish(newWishes);
  }

  function editWish(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveEdit(id) {
    let newWishes = [...wishes].map((item) => {
      if(item.id == id) {
        item.title = value;
      }
      return item;
    });
    setWish(newWishes);
    setEdit(null);
  }

  return (
    <div className={styles.root}>
      {
        wishes.map((item) => (
          <div key={item.id}>

            {
              edit == item.id? 
                <div className={styles.wish}>
                  <input className={styles.wishText} value={value} onChange={ (e) => setValue(e.target.value)} />
                  <button className={styles.save} onClick={ () => saveEdit(item.id)}>Сохранить</button>
                </div> : 
                <div className={styles.wish}>
                  <div className={styles.wishText}>{ item.title }</div>
                  <div className={styles.buttons}>
                    <button className={styles.delete} onClick={ () => deleteWish(item.id)}>Удалить</button>
                    <button className={styles.edit} onClick={ () => editWish(item.id, item.title)}>Редактировать</button>
                    <div className={styles.radioButtons}>
                      <input className={styles.firstRB} type='radio'></input>
                      <input className={styles.secondRB} type='radio'></input>
                      <input className={styles.thirdRB} type='radio'></input>
                    </div>
                  </div>
                  
                </div>
                  
            }
          </div>
        ))
      }
    </div>
  )
}

export default WishList