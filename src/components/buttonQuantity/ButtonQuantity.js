import React from 'react'
import * as S from './ButtonQuantity.styled'
import IconAdd from './../../assets/icon-addition.png'
import IconSub from './../../assets/icon-subtraction.png'

export const ButtonQuantity = (props) => {

  const add = () => {
      var ingredients = props.totalIngredients
      var value = props.quantity 
      var id = props.id
      value += 1
      ingredients += 1
      if(ingredients <= 8)
        props.getValue({id, value, ingredients})
  }

  const sub = () => {
    var ingredients = props.totalIngredients
    var value = props.quantity 
      var id = props.id
      value -= 1
      if(value >= 0){
        ingredients -= 1
        props.getValue({id, value, ingredients})
      }
       
  }

  return (
    <>
      <S.BoxButton width={props.width} height={props.height}>
        <S.Button onClick={sub}>
        <img src={IconSub} alt="" />
        </S.Button>
        <S.Quantity>
          {props.quantity}
        </S.Quantity>
        <S.Button onClick={add}>
        <img src={IconAdd} alt="" />
        </S.Button>
     </S.BoxButton>
    </>
  )
}
