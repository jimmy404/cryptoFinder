import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import axios from "axios";

import useCurrency from "../hooks/useCurrency";
import useCrypto from "../hooks/useCrypto";
import Error from "./Error";

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

const Form = ({ setCurrency, setCrypto }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  const CURRENCY = [
    { code: "USD", name: "US Dollar" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "ARG", name: "Peso Argentino" },
  ];
  const [currency, SelectCurrency] = useCurrency("Currency pick", "", CURRENCY);
  const [crypto, SelectCrypto] = useCrypto("Crypto pick", "", cryptoList);

  useEffect(() => {
    const fetchAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setCryptoList(result.data.Data);
    };
    fetchAPI();
  }, []);

  const quoteCurrency = (e) => {
    e.preventDefault();
    if (currency === "" || crypto === "") {
      setError(true);
      return;
    }
    setError(false);
    setCurrency(currency);
    setCrypto(crypto);
  };

  return (
    <form onSubmit={quoteCurrency}>
      {error ? <Error message="All fields are required" /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit">Calculate</Button>
    </form>
  );
};

export default Form;
