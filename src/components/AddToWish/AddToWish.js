import React, { useState } from "react";
import styles from "./AddToWish.module.css";

function AddToWish({ wishes, setWish }) {
  const [selectedPriority, setPriority] = useState(null);
  const [value, setValue] = useState("");

  function generateId() {
    return Math.round(Math.random() * 10000);
  }//функция для генерации уникального id

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
  }//сохраняем желание используя хук useState

  return (
    <div className={styles.root}>
      <input
        className={styles.inputWish}
        placeholder="Запишите ваше желание"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label className={styles.selectGroup}>
        <span className={styles.selectText}>Приоритет</span>
        <select
          className={styles.priority}
          onChange={(e, value) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </label>
      <button className={styles.inputButton} onClick={() => saveWish()}>
        Сохранить
      </button>
    </div>
  );//возвращаем вёрстку
}

export default AddToWish;
