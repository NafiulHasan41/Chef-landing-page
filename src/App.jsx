import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";



function App() {
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
             <Cards></Cards>
          </div>


          {/* This for table section */}


          <div className=" col-span-2 border-gray-500 p-1 rounded-xl shadow-xl border">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
