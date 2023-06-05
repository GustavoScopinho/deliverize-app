import React from 'react'
import * as S from './Main.styled'
import { Product } from '../product/Product'

export const Main = () => {
  return (
    <>
      <S.Main>
        <S.SectionLeft>
          <Product/>
        </S.SectionLeft>
        <S.SectionRight>Section 2</S.SectionRight>
      </S.Main>
    </>
  )
}
