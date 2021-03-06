import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import axios from "axios";

import Form from "./components/Form";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCrypto = async () => {
      if (currency === "") {
        return;
      }
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const result = await axios.get(url);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResult(result.data.DISPLAY[crypto][currency]);
      }, 2000);
    };
    quoteCrypto();
  }, [currency, crypto]);

  const component = loading ? <Spinner /> : <Quote result={result} />;

  return (
    <Container>
      <div>
        <Image
          src="https://raw.githubusercontent.com/juanpablogdl/cripto_react/master/src/cryptomonedas.png"
          alt="Crypto image background"
        />
      </div>
      <div>
        <Heading>Crypto finder</Heading>
        <Form setCrypto={setCrypto} setCurrency={setCurrency} />
        {component}
      </div>
    </Container>
  );
}

export default App;
