import styled from "@emotion/styled";
import React from "react";

const ErrorMessage = styled.p`
  background-color: #b7322c;
  color: #fff;
  font-family: "Fira Code", monospace;
  font-size: 30px;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const Error = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
