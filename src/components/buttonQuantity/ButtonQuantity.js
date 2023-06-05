import React from 'react'
import * as S from './ButtonQuantity.styled'
import IconAdd from './../../assets/icon-addition.png'
import IconSub from './../../assets/icon-subtraction.png'

export const ButtonQuantity = (props) => {
  return (
    <>
      <S.BoxButton width={props.width} height={props.height}>
        <S.Button>
        <img src={IconSub} alt="" />
        </S.Button>
        <S.Quantity>
          2
        </S.Quantity>
        <S.Button>
        <img src={IconAdd} alt="" />
        </S.Button>
     </S.BoxButton>
    </>
  )
}
