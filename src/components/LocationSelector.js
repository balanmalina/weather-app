import { useState } from "react";
import styles from "./LocationSelector.module.css";

function LocationSelector({ location, setLocation }) {
  const [inputValue, setInputValue] = useState(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setLocation(inputValue);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city"
        className={styles.input}
        autoFocus
      />

      <button type="submit" className={styles.confirmBtn}>
        Confirm
      </button>
    </form>
  );
}

export default LocationSelector;

