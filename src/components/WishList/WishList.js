import React, { useState } from "react";
import styles from "./WishList.module.css";

function WishList({ wishes, setWish }) {
  const [selectedWishId, setSelectedWishId] = useState(null);
  const [selectedWishValue, setSelectedWishValue] = useState("");
  const [selectedPriority, setPriority] = useState(null);

  function deleteWish(item) {
    let newWishes = [...wishes].filter((elem) => elem.id !== item.id);
    setWish(newWishes);
  }

  function editWish(item) {
    setSelectedWishId(item.id);
    setSelectedWishValue(item.title);
  }

  function saveEdit(item, property, state) {
    let newWishes = [...wishes].map((elem) => {
      if (elem.id === item.id) {
        elem[property] = state;
      }
      return elem;
    });
    setWish(newWishes);
    console.log(wishes);
    setSelectedWishId(null);
  }

  return (
    <div className={styles.root}>
      {wishes.map((item) => (
        <div key={item.id}>
          {selectedWishId === item.id ? (
            <div className={styles.wish}>
              <input
                className={styles.wishText}
                value={selectedWishValue}
                onChange={(e) => setSelectedWishValue(e.target.value)}
              />
              <button className={styles.save} onClick={() => saveEdit(item, 'title', selectedWishValue)}>
                Сохранить
              </button>
            </div>
          ) : (
            <div className={styles.wish}>
              <div className={styles.wishText}>{item.title}</div>
              <div className={styles.buttons}>
                <button
                  className={styles.delete}
                  onClick={() => deleteWish(item)}
                >
                  Удалить
                </button>
                <button
                  className={styles.edit}
                  onClick={() => editWish(item)}
                >
                  Редактировать
                </button>
                  <select className={styles.priority} onChange={(e, value) => {setPriority(e.target.value); saveEdit(item, 'priority', selectedPriority);}}>
                    <option>Приоритет</option>
                    <option>Высокий</option>
                    <option>Средний</option>
                    <option>Низкий</option>
                  </select>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default WishList;
