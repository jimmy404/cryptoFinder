import React from "react";
import styled from "@emotion/styled";

import useCurrency from "../hooks/useCurrency";
import useCrypto from "../hooks/useCrypto";

const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const CURRENCY = [
    { code: "USD", name: "US Dollar" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "ARG", name: "Peso Argentino" },
  ];
  const [currency, SelectCurrency] = useCurrency("Currency pick", "", CURRENCY);
  const [crypto, SelectCrypto] = useCrypto("Crypto pick", "");

  return (
    <form>
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit">Calculate</Button>
    </form>
  );
};

export default Form;
