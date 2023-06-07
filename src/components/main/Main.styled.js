import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  
  display: flex;
  

  @media (max-width: 1000px) {
      flex-direction: column;
  }
`
export const Container = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`

export const SectionLeft = styled.section`
  width: 60%;
  padding: 60px 0 0 66px;
  display: flex;

  
  @media (max-width: 1200px) {
    width: 50%;    
  }
  @media (max-width: 1100px) {
      width: 100%;
      padding: 16px 0;
  }
`

export const SectionRight = styled.section`
  width: 40%;
  padding-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 50%;    
  }
  @media (max-width: 1100px) {
      width: 100%;
  }
`