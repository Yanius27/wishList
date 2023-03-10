import React, { useState } from "react";
import styles from "./WishList.module.css";

function WishList({ wishes, setWish }) {
  const [selectedWishId, setSelectedWishId] = useState(null);
  const [selectedWishValue, setSelectedWishValue] = useState("");
  const [selectedPriority, setPriority] = useState("");

  //удаляем желание и обновляем state желаний
  function deleteWish(item) {
    let newWishes = [...wishes].filter((elem) => elem.id !== item.id);
    setWish(newWishes);
  }

  //редактируем желание используя хук useState
  function editWish(item) {
    setSelectedWishId(item.id);
    setSelectedWishValue(item.title);
    setPriority(item.priority);
  }

  //функция для обнуления state id желания и его текста
  function resetState() {
    setSelectedWishId(null);
    setSelectedWishValue("");
    setPriority("");
  }

  //вносим в свойства нашего объекта желания актуальные значения, обновляем state желаний, обнуляем state id желания и его текста
  function saveEdit(item) {
    if (selectedWishValue !== "") {
      let newWishes = [...wishes].map((elem) => {
        if (elem.id === item.id) {
          elem.title = selectedWishValue;
          elem.priority = selectedPriority;
        }
        return elem;
      });
      setWish(newWishes);
      resetState();
    } else {
      return;
    }
  }

  function getWishClassName(priority) {
    console.log(priority);
    const colors = {
      High: styles.high,
      Medium: styles.medium,
      Low: styles.low,
    };

    return `${styles.wish} ${colors[priority]}`;
  }

  //возвращаем вёрстку
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
                  {/* <span className={styles.selectText}>Приоритет</span> */}
                  <select
                    className={styles.priority}
                    onChange={(e) => setPriority(e.target.value)}
                    value={selectedPriority || undefined}
                  >
                    <option>Приоритет</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </label>
              </div>

              <button className={styles.save} onClick={() => saveEdit(item)}>
                Сохранить
              </button>
            </div>
          ) : (
            <div className={getWishClassName(item.priority)}>
              <div className={styles.wishText}>{item.title}</div>
              <div className={styles.buttons}>
                <button
                  className={styles.delete}
                  onClick={() => deleteWish(item)}
                >
                  Удалить
                </button>
                <button className={styles.edit} onClick={() => editWish(item)}>
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
