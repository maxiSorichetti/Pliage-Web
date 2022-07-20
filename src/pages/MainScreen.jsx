
import About from "../components/About";
import Body from "../components/Body";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Services from "../components/Services";



const MainScreen = () => {

  function goBottom(){

    document.documentElement.scrollTop = 2600

  }

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <NavBar />
        <Body />
        <Services />
        <About goBottom={goBottom}/>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default MainScreen;
