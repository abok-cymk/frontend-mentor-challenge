import Accordion from "./components/Accordion";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-screen-md my-0 mx-auto flex items-center justify-center flex-col relative bg-pink-100 h-screen
    min-[390px]:px-0 min-[390px]:h-screen">
      <div className="absolute top-0">
        <div>
          <BackgroundPattern /> 
        </div>
        <Accordion /> 
      </div>
      <Footer />
    </div>
  );
};

export default App;
