import styled from "styled-components";
import { media } from "../../../styles/shared";

const Typography = styled.h1`
  line-height: 2.5rem;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 700;
  padding: 0 12px;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  background: palevioletred;

  :hover {
    background: blueviolet;
  }
`;

export default Typography;
