import styled from "styled-components";

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-radius: 5px;
  width: ${(prop) => prop.width};
  height: ${(prop) => prop.height};
  border: 1px solid var(--orange-price-small);
`

export const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;

  img {
    padding: 9px;
  }

`

export const Quantity = styled.p`
  display: flex;
  align-items: center;
  
  font-weight: 400;
  font-size: 14px;
`