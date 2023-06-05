import React from 'react'
import BannerHamburguer from './../../assets/hamburguer-banner.png'
import * as S from './Product.styled'

export const Product = () => {
  return (
    <>
      <S.Figure>
        <img src={BannerHamburguer} alt="" />
        <S.Figcaption>
        Oferta Picanha Cheddar Bacon
        </S.Figcaption>
        <S.Description>
        Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim
        </S.Description>
        <S.ContainerPrice>
          <S.NewPrice>
          R$31,99
          </S.NewPrice>
          <S.OldPrice>
          R$34,95
          </S.OldPrice>
        </S.ContainerPrice>
      </S.Figure>
    </>
  )
}
