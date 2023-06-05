import React from 'react'
import * as S from './Header.styled'
import Logo from './../../assets/deliverize-logo.png'
import ArrowDown from './../../assets/arrow-down.png'
import AccountCircle from './../../assets/account-circle.png'
import ShopCart from './../../assets/shopping-cart.png'

export const Header = () => {
  return (
    <>
      <S.Header>
      <S.Figure>
        <img src={Logo} alt="Logo Deliverize" />
      </S.Figure>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <S.Div>
              <S.PDelivery>Entrega:</S.PDelivery>
              <S.PDelivery>R. Antonio Braune, 222</S.PDelivery>
            </S.Div>
            <S.BoxArrow>
              <img src={ArrowDown} alt="Icon Flecha" />
            </S.BoxArrow>
          </S.Li>
          <S.Li>
            <input type="text" name="" id="" placeholder='Busque por estabelecimento ou produtos' />
          </S.Li>
          <S.Li>
            <S.BoxAccount>
              <img src={AccountCircle} alt="" />
            </S.BoxAccount>
            <S.P>
              Entrar
            </S.P>
          </S.Li>
          <S.Li>
           <S.BoxAccount>
            <img src={ShopCart} alt="" />
            </S.BoxAccount>
            <S.P>
                Carrinho
            </S.P>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Header>
    </>
  )
}
