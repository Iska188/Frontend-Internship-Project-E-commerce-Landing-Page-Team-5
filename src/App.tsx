//nothing...
// @ts-ignore
import { Header } from './components/organisms/header/header';
// @ts-ignore
import { Hero } from './components/organisms/hero/hero'; 
import { Footer } from './components/organisms/footer/footer'; 


function App(){


  const carouselSlides = [
    {
      title: "Fresh Vegetables Big discount",
      subtitle: "Save up to 50% off on your first order",
      bgImage: "src/assets/header/hero1.png",
    },
    {
      title: "Don’t miss our daily fresh products",
      subtitle: "Sign up for the daily newsletter",
      bgImage: "src/assets/header/hero2.png",
    },
  ];

  const singleSlide = [
    {
      title: "Stay home & get your daily needs from our shop",
      subtitle: "Start Your Daily Shopping with Nest Mart",
      bgImage: "src/assets/header/hero-second.png",
    }
  ];

  return (
    <div>
      <Header />
      
      <main>
        <Hero slides={carouselSlides} /> 
        <Hero slides={singleSlide} /> 
        <Footer />
      </main>
    </div>
  );
}

export default App;