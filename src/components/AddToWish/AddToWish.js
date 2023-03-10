import React, { useState } from "react";
import styles from "./AddToWish.module.css";

function AddToWish({ wishes, setWish }) {
  const [selectedPriority, setPriority] = useState(null);
  const [value, setValue] = useState("");

  //функция для генерации уникального id
  function generateId() {
    return Math.round(Math.random() * 10000);
  }

  //сохраняем желание используя хук useState
  function saveWish() {
    if (value) {
      setWish([
        ...wishes,
        {
          id: generateId(),
          title: value,
          priority: selectedPriority,
        },
      ]);
    } else {
      setWish([...wishes]);
    }
    setValue("");
  }

  //возвращаем вёрстку
  return (
    <div className={styles.root}>
      <input
        className={styles.inputWish}
        placeholder="Запишите ваше желание"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
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
      <button className={styles.inputButton} onClick={() => saveWish()}>
        Сохранить
      </button>
    </div>
  );
}

export default AddToWish;
