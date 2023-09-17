import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  // Check if currentDisplay is null or doesn't have symbols
  if (!currentDisplay || !currentDisplay.symbols) {
    return (
      <div className="symbols">
        <div className="stack">
          <p>No symbols available for this country.</p>
        </div>
      </div>
    );
  }

  const { symbols } = currentDisplay;

  return (
    <div className="symbols">
      <div className="stack">
        <img
          src={symbols.flag}
          alt={`Flag of ${currentDisplay.name.common}`}
          className="symbol-image"
        />
        <p>Flag</p>
      </div>
      <div className="stack">
        <img
          src={symbols.coatOfArms}
          alt={`Coat of Arms of ${currentDisplay.name.common}`}
          className="symbol-image"
        />
        <p>Coat of Arms</p>
      </div>
    </div>
  );
};

export default Symbols;
