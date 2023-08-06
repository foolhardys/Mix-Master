import React from 'react'
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';

const CocktailList = ({ drinks }) => {

    if (!drinks) {
        return <h4 style={{ textAlign: 'center' }}>
            No matching Cocktails Found...
        </h4>
    }

    const formattedDrinks = drinks.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        }
    })

    return <Wrapper>
        {formattedDrinks.map((formattedDrink) => {
            return <CocktailCard key={formattedDrink.id} {...formattedDrink} />
        })}
    </Wrapper>

}

export default CocktailList