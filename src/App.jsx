import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Tables from "./Components/Tables/Tables";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [cooks, setCooks] = useState([]);

  const [cooking , setCooking] = useState([]);

  const handleCooks = (item) => {
    const temp = cooks.find((t) => t.recipe_id === item.recipe_id);
    if (!temp) {
      setCooks([...cooks, item]);
    } else {

       toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-green-400 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item.recipe_image}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {item.recipe_name}
                </p>
                <p className="mt-1 text-sm text-white">
                  Already in Cook table when it start preparing, You can again add it to this table!.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
      
       
    }
  };
  const handleCooking = (item) => {
      const temp = cooks.filter( it => it.recipe_id !== item.recipe_id)

      setCooks(temp);

      setCooking([...cooking, item]);
     
  };

  return (
    <>
      <section className="header">
        <Header></Header>
      </section>

      <section className="banner  w-[95%] md:w-[82.5%] max-w-[1320px] mx-auto mt-7  md:mt-12">
        <Banner></Banner>
      </section>

      <section className="showing w-[95%] md:w-[82.5%] max-w-[1320px] mx-auto mt-7  md:mt-24">
        <div className="title-section text-center">
          <h1 className="text-black text-3xl md:text-5xl font-semibold">
            Our Recipes
          </h1>
          <p className=" max-w-[823px] mx-auto text-xs md:text-[16px] text-gray-500 my-5 md:my-10 p-1">
            A recipe is simply defined as a set of instructions with a list of
            ingredients used to prepare a particular food, dish or drink. People
            use recipes to replicate foods they enjoy that they otherwise do not
            know how to make. Chefs use recipes to make sure a dish tastes the
            same each time it is ordered.
          </p>
        </div>

        {/* this the section for two parts api and table */}

        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* this the api calla section */}

          <div className=" col-span-3">
            <Cards handleCooks={handleCooks}></Cards>
          </div>

          {/* This for table section */}

          <div className=" md:col-span-2  w-full">
            <Tables cooks={cooks} handleCooking={handleCooking}  cooking={cooking} ></Tables>
          </div>
        </div>
      </section>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}


export default App;
