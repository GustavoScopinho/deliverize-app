import React from 'react'
import * as S from './Main.styled'
import { Product } from '../product/Product'
import { Ingredients } from '../ingredients/Ingredients'

export const Main = () => {
  return (
    <>
      <S.Container>
        <S.Main>
          <S.SectionLeft>
            <Product/>
          </S.SectionLeft>
          <S.SectionRight>
            <Ingredients/>
          </S.SectionRight>
        </S.Main>
      </S.Container>
    </>
  )
}
