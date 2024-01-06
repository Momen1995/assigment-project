import Header from "../Header/Header";
import Inputs from "../Inputs/Inputs";


const Home = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col">
      <Inputs></Inputs>
      <Header></Header>
    </div>
  );
};

export default Home;