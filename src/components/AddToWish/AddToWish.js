import React, { useState } from "react";
import styles from "./AddToWish.module.css";

function AddToWish({ wishes, setWish }) {
  const [selectedPriority, setPriority] = useState(null);
  function generateId() {
    return Math.round(Math.random() * 10000);
  }

  const [value, setValue] = useState("");

  function saveWish() {
    if (value) {
      setWish([
        ...wishes,
        {
          id: generateId(),
          title: value,
          priority: null
        },
      ]);
    } else {
      setWish([...wishes]);
    }

    setValue("");
  }

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
          <select className={styles.priority} onChange={(e, value) => setPriority(e.target.value)}>
            <option>Высокий</option>
            <option>Средний</option>
            <option>Низкий</option>
        </select>
      </label>
      <button className={styles.inputButton} onClick={() => saveWish()}>
        Сохранить
      </button>
    </div>
  );
}

export default AddToWish;
