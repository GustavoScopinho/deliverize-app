import styled from "styled-components";

export const Figure = styled.figure``

export const Figcaption = styled.figcaption`
  color: var(--grey-text);
  font-size: 28px;
  font-weight: 500;
  padding: 30px 0px ;
`

export const Description = styled.p`
   width: 650px;
   font-weight: 400;
   font-size: 20px;
   color: var(--grey-text);
`

export const ContainerPrice = styled.div`
  display: flex;
  padding-top: 28px;
`

export const NewPrice = styled.p`
  color: var(--orange-price);
  font-size: 32px;
  padding-right: 17px;
`

export const OldPrice = styled(NewPrice)`
  color: var(--grey-text);
  text-decoration-line: line-through;
`
