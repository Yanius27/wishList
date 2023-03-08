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

  function saveEdit(item) {
    let newWishes = [...wishes].map((elem) => {
      if (elem.id === item.id) {
        elem.title = selectedWishValue;
        elem.priority = selectedPriority;
      }
      return elem;
    });
    setWish(newWishes);
    setSelectedWishId(null);
    console.log(wishes);
  }

  return (
    <div className={styles.root}>
      {wishes.map((item) => (
        <div key={item.id}>
          {selectedWishId === item.id ? (
            <div className={styles.wish}>
              <div className={styles.editGroup}>
                <input
                  className={styles.wishText}
                  value={selectedWishValue}
                  onChange={(e) => setSelectedWishValue(e.target.value)}
                />
                <label className={styles.selectGroup}>
                  <span className={styles.selectText}>Приоритет</span>
                  <select className={styles.priority} onChange={(e, value) => setPriority(e.target.value)}>
                    <option>Высокий</option>
                    <option>Средний</option>
                    <option>Низкий</option>
                  </select>
                </label>
              </div>
              
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
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default WishList;
