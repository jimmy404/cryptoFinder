import { useState, useEffect } from "react";

import styled from "@emotion/styled";
import image from "./assets/crypto.png";

import axios from "axios";

import Form from "./components/Form";
import Quote from "./components/Quote";

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;

  @media (min-width: 992px) {
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image = styled.img`
  margin-top: 5rem;
  max-width: 100%;
`;

const Heading = styled.h1`
  color: #fff;
  font-family: "Fira Code", monospace;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 80px;
  text-align: left;

  &::after {
    background-color: #66a2fe;
    content: "";
    display: block;
    height: 6px;
    margin: 5px;
    width: 100px;
  }
`;

function App() {
  const [currency, setCurrency] = useState("");
  const [crypto, setCrypto] = useState("");
  const [result, setResult] = useState({});

  useEffect(() => {
    const quoteCrypto = async () => {
      if (currency === "") {
        return;
      }
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const result = await axios.get(url);
      setResult(result.data.DISPLAY[crypto][currency]);
    };
    quoteCrypto();
  }, [currency, crypto]);

  return (
    <Container>
      <div>
        <Image src={image} alt="Crypto image background" />
      </div>
      <div>
        <Heading>Crypto finder</Heading>
        <Form setCrypto={setCrypto} setCurrency={setCurrency} />
        <Quote result={result} />
      </div>
    </Container>
  );
}

export default App;
