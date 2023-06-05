import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #F4F4F4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export const Figure = styled.figure`
  img {
    padding-left: 40px;
  }
`

export const Nav = styled.nav`
`

export const Ul = styled.ul`
  display: flex;
  gap: 24px;
`

export const Li = styled.li`

  :first-child{
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 230px;
    height: 48px;
    display: flex;
    position: relative;
  }

  :nth-child(2) {
    width: 354px;
    height: 48px;
    border-radius: 4px;
    background-color: #fff;

    input{
      width: 354px;
      height: 48px;
      border: 1px solid var(--red-primary);
      border-radius: 4px;
      padding: 0px 16px;

      input::placeholder{
      color: var(--grey-text-2);
       }

     }
  }

  :nth-child(3){
    display: flex;
    align-items: center;
   
  
  }
  :last-child{
    display: flex;
    align-items: center;
    padding-right: 40px;
  }
`

export const Div = styled.div`
  padding: 8px;
`

export const PDelivery = styled.p`
  font-size: 12px;
  color: var(--grey-text-2);
  
  :last-child{
    font-weight: 700;
  }
  :first-child{
    color: var(--red-button);
    font-weight: 400;
  }
`

export const BoxArrow = styled.span`
  position: absolute;
  right: 14px;
  top: 12px;

  img{
    width: 12px;
    height: 7.41px;
  }
`
export const PSearch = styled.p`

`
export const P = styled.p`
  color: var(--red-primary);
  font-size: 16px;
  padding-left: 10px;
  font-weight: 400;

`
export const BoxAccount = styled.span`
  img{
    padding-top: 4px;
  }
`