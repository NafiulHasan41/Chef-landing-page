import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ( {handleCooks}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('RecipeFake.json')
        .then( res => res.json())
        .then( data => setRecipes(data) );
    } ,[])

   
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            
            {
                 recipes.map( recipe  => <Card key={recipe.recipe_id} recipe={recipe} handleCooks={handleCooks} ></Card> )
            }
            
           
        </div>
    );
};

Cards.propTypes = {
    
    handleCooks: PropTypes.func
}

export default Cards;