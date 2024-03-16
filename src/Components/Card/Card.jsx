import PropTypes from 'prop-types';

import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Card = ( {recipe}) => {
    
    
    const { recipe_image ,recipe_name,short_description , ingredients,preparing_time ,calories } = recipe;

    console.log(typeof ingredients , ingredients);
    return (
        <div className=' m-3'>
            <div className="card w-full bg-base-100 shadow-xl h-[700px] p-2 items-center">
                <figure className="px-10 pt-10 rounded-xl ">
                  <img 
                    src={recipe_image}
                    alt={recipe_name}
                    className="rounded-xl w-full bg-center"
                  />
                </figure>
                <div className="card-body">
                  <div className=" border-b border-gray-500 py-2 pb-5 mb-1">
                    <h2 className=" text-xl font-semibold text-black mb-1">
                      {recipe_name}
                    </h2>
                    <p className=" text-[16px] font-normal text-gray-400">
                     { short_description}
                    </p>
                  </div>
                  <div className=" border-b border-gray-500 py-2 pb-5 mb-1">
                    <h2 className=" text-xl font-semibold text-black mb-1">
                      Ingredients:{ ingredients.length }
                    </h2>
                    <ul className=" list-disc text-gray-300">

                        {
                            
                            ingredients.map( (ing , index) =>  <li key={index}>
                                <p className=" text-[16px] font-normal text-gray-400">
                                 {ing}
                                </p>
                              </li>  )
                        }
                    </ul>

                  </div>

                  <div className=" text-gray-500 flex gap-2 my-2">
                    <p className=" flex items-center  gap-1"> <span>{<CiClock2></CiClock2>} </span>{preparing_time} </p>
                    <p className=" flex items-center  gap-1"> <span>{<FaFire></FaFire>} </span>{calories} </p>
                  </div>

                  <div className="card-actions">
                  <button 
                     className="btn btn-primary mx-2 my-2 rounded-full bg-green-400 text-black border-none text-[18px] font-normal ">
                      Want to Cook</button>
                  </div>
                </div>
              </div> 
        </div>
    );
};

Card.propTypes = {
    recipe : PropTypes.object
}

export default Card;