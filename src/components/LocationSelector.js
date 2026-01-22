import { useState } from "react";
import styles from "./LocationSelector.js";

function LocationSelector({ location, setLocation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(location);

  const handleConfirm = () => {
    setLocation(inputValue);
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <>
          <p>{location}</p>
          <button onClick={() => {
            setInputValue(location);
            setIsEditing(true);
          }}>
            Change Location
          </button>
        </>
      )}

      {isEditing && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleConfirm}>
            Confirm
          </button>
        </>
      )}
    </div>
  );
}

export default LocationSelector;
