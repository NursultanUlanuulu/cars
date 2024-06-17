import { useState } from "react";
import Select from "react-select";

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
];

const ColorSelect = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
  };

  return (
    <div>
      <h2>Select a Color</h2>
      <Select
        value={selectedColor}
        onChange={handleColorChange}
        options={colorOptions}
      />
      {selectedColor && (
        <div style={{ marginTop: "20px" }}>
          You selected:{" "}
          <span style={{ color: selectedColor.value }}>
            {selectedColor.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default ColorSelect;
