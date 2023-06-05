import React from 'react'
import * as S from './Ingredients.styled'

import { ButtonQuantity } from '../buttonQuantity/ButtonQuantity'

export const Ingredients = () => {
  return (
    <>
        <S.Article>
          <S.BoxAddIngredients>
            <S.Title>
            Adicionar Ingredientes
            </S.Title>
            <S.Text>
            Até 8 ingredientes.
            </S.Text>
          </S.BoxAddIngredients>
          <S.Ingredient>
          <S.IngredientName>
          Queijo cheddar
          </S.IngredientName>
          <S.ContainerButton>
           <ButtonQuantity height={'32px'}/>
          </S.ContainerButton>
          <S.Price>
          + R$4,99
          </S.Price>
          </S.Ingredient>
          <S.Ingredient>
          <S.IngredientName>
          Cebola crispy
          </S.IngredientName>
          <S.ContainerButton>
            <ButtonQuantity height={'32px'}/>
          </S.ContainerButton>
          <S.Price>
          + R$1,50
          </S.Price>
          </S.Ingredient>
          <S.Ingredient>
          <S.IngredientName>
          Molho cheddar
          </S.IngredientName>
          <S.ContainerButton>
            <ButtonQuantity height={'32px'}/>
          </S.ContainerButton>
          <S.Price>
          + R$3,50
          </S.Price>
          </S.Ingredient>
          <S.Ingredient>
          <S.IngredientName>
          Molho de picanha
          </S.IngredientName>
          <S.ContainerButton>
            <ButtonQuantity height={'32px'}/>
          </S.ContainerButton>
          <S.Price>
          + R$3,50
          </S.Price>
          </S.Ingredient>
          <S.BoxAddIngredients>
            <S.Title>
            Precisa de Talher?
            </S.Title>
          </S.BoxAddIngredients>

          <S.ContainerAdd>
            <ButtonQuantity width={'140px'} height={'40px'}/> 
            <S.ButtonAdd>
              Adicionar
            </S.ButtonAdd>
          </S.ContainerAdd>
        </S.Article>
    </>
  )
}
