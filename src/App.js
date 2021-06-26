import styled from "@emotion/styled";
import image from "./assets/crypto.png";

import Form from "./components/Form";

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
  return (
    <Container>
      <div>
        <Image src={image} alt="Crypto image background" />
      </div>
      <div>
        <Heading>Crypto finder</Heading>
        <Form />
      </div>
    </Container>
  );
}

export default App;
