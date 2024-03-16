import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('RecipeFake.json')
        .then( res => res.json())
        .then( data => setRecipes(data) );
    } ,[])

   
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            
            {
                 recipes.map( recipe  => <Card key={recipe.id} recipe={recipe} ></Card> )
            }
            
           
        </div>
    );
};

export default Cards;