import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Fira Code", monospace;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCrypto = (label, initialState, options) => {
  const [state, setState] = useState(initialState);

  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Select -</option>
        {/* {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))} */}
      </Select>
    </>
  );
  return [state, SelectCrypto, setState];
};

export default useCrypto;
