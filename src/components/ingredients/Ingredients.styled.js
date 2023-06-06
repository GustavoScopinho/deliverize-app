import styled from "styled-components";

export const Article = styled.article`
  width: 439px;
  height: 662px;
  padding: 32px;
  border: 1px solid var(--grey-text-2);
  border-radius: 8px;

  @media (max-width: 600px) {
      border: none;
  }
`

export const BoxAddIngredients = styled.div`
  background-color: rgba(253, 215, 14, 0.2);
  width: 375px;
  height: 55px;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.p`
  color: var(--grey-text);
  font-weight: 500;
  font-size: 14px;
`

export const Text = styled.p`
  color: rgba(228, 151, 0, 1);
  font-size: 12px;
  
`

export const Ingredient = styled.div`
  padding: 12px 6px;
  
`

export const IngredientName = styled(Title)`
  padding: 0x 6px;
`

export const Price = styled.p`
  color: var(--orange-price-small);
  font-size: 14px;
  padding-bottom: 16px;
  border-bottom:1px solid rgba(232, 166, 52, 1);
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`

export const ContainerAdd = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0px 32px 0px;
  
`

export const ButtonAdd = styled.button`
  width: 219px;
  height: 40px;
  border-radius: 4px;
  background-color: var(--orange-price-small);
  color: #fff;
  font-weight: 500;
  border: none;
  cursor: pointer;
`

