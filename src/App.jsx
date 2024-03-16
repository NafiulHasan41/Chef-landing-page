import "./App.css";
import Banner from "./Components/Banner/Banner";
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
    </>
  );
}

export default App;


