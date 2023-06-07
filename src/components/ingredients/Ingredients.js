import React, { useState } from 'react'
import * as S from './Ingredients.styled'
import { ButtonQuantity } from '../buttonQuantity/ButtonQuantity'

export const Ingredients = () => {

  const [queijoCheddar,setQueijoCheddar] = useState(0)
  const [cebolaCrispy,setCebolaCrispy] = useState(0)
  const [molhoCheddar,setMolhoCheddar] = useState(0)
  const [molhoPicanha,setMolhoPicanha] = useState(0)
  const [quantity,setQuantity] = useState(1)
  const [totalIngredients, setTotalIngredients] = useState(0)
 
  const getValue = (data) => {
    setTotalIngredients(data.ingredients)

    switch(data.id) {
      case 1:
        setQueijoCheddar(data.value)
        break
      case 2:
        setCebolaCrispy(data.value)
        break
      case 3:
        setMolhoCheddar(data.value)
        break
      case 4:
        setMolhoPicanha(data.value)
        break
      case 5:
        setQuantity(data.value)
        break
      default :
        break
    }
  }

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
           <ButtonQuantity height={'32px'} quantity={queijoCheddar} getValue={getValue} id={1} totalIngredients={totalIngredients} />
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
            <ButtonQuantity height={'32px'} quantity={cebolaCrispy} getValue={getValue} id={2} totalIngredients={totalIngredients}/>
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
            <ButtonQuantity height={'32px'} quantity={molhoCheddar} getValue={getValue} id={3} totalIngredients={totalIngredients}/>
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
            <ButtonQuantity height={'32px'} quantity={molhoPicanha} getValue={getValue} id={4} totalIngredients={totalIngredients}/>
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
            <ButtonQuantity width={'140px'} height={'40px'} quantity={quantity} getValue={getValue} id={5} totalIngredients={totalIngredients}/> 
            <S.ButtonAdd>
              Adicionar
            </S.ButtonAdd>
          </S.ContainerAdd>
        </S.Article>
    </>
  )
}
