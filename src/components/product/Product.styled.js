import styled from "styled-components";

export const Figure = styled.figure`
  width: 100%;
  @media (max-width: 1200px) {
    img {
      width: 500px;
    }     
  }
  @media (max-width: 600px) {
      img {
        width: 343px;
      }
  }
`

export const ContainerImage = styled.div`
  
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center; 
  }
`

export const Figcaption = styled.figcaption`
  color: var(--grey-text);
  font-size: 28px;
  font-weight: 500;
  padding: 30px 0px ;

  @media (max-width: 1200px) {
    font-size: 22px;    
    padding-left: 16px ;
  }

  @media (max-width: 600px) {
      font-size: 18px;
      padding: 16px 16px;
  }
`

export const Description = styled.p`
   width: 650px;
   font-weight: 400;
   font-size: 20px;
   color: var(--grey-text);

   @media (max-width: 1200px) {
    font-size: 16px;
    width: 500px; 
    padding-left: 16px ;
    
  }

  @media (max-width: 600px) {
      width: 400px;
      font-size: 16px;
      padding: 0px 16px;
  }
`

export const ContainerPrice = styled.div`
  display: flex;
  
  padding-top: 28px;

  @media (max-width: 600px) {
    padding-top: 16px;
    margin-bottom: -32px;
    
  }
`

export const NewPrice = styled.p`
  color: var(--orange-price);
  font-size: 32px;
  padding-right: 17px;

  @media (max-width: 1200px) {
    font-size: 28px;   
    padding-left: 16px ;
  }

  @media (max-width: 600px) {
      font-size: 14px;
      padding: 0px 16px;
  }
`

export const OldPrice = styled(NewPrice)`
  color: var(--grey-text);
  text-decoration-line: line-through;

`
