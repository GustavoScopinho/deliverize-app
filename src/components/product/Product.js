import React from 'react'
import BannerHamburguer from './../../assets/hamburguer-banner.png'
import * as S from './Product.styled'
import { useGetProductQuery } from '../../shared/features/api/product/productSlice'


export const Product = () => {

  const {data, isLoading} = useGetProductQuery() 
 

  return (
    <>
      {isLoading ? (
        <h2>Carregando</h2>
      ): (
        data.map((i) => {
          return (
          <S.Figure key={i.id}>
            <S.ContainerImage>
              <img src={BannerHamburguer} alt="" />
            </S.ContainerImage>
            <S.Figcaption>
            {i?.nm_product}
            </S.Figcaption>
            <S.Description>
            {i.description}
            </S.Description>
            <S.ContainerPrice>
              <S.NewPrice>
              R${i.vl_discount}
              </S.NewPrice>
              <S.OldPrice>
              R${i.vl_price}
              </S.OldPrice>
            </S.ContainerPrice>
          </S.Figure>
          )
        })
      )}
      
      
    </>
  )
}
