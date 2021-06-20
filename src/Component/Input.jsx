import styled from "styled-components";

export const Input = styled.input`
  border-radius: 15px;
  border: none;
  padding: 5px;
  &:active,
  &:focus {
    box-shadow: none;
    border: 1px solid #00b06e;
    border-color: #00b06e !important;
    transition: all 0.4s;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
