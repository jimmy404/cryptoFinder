import React, { useState } from "react";

const useCripto = () => {
  const [state, setState] = useState("");

  const Select = () => (
    <>
      <label>Currency</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </>
  );
  return [state, Select, setState];
};

export default useCripto;
