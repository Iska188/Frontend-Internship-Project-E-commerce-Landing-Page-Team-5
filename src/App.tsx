//nothing...
// @ts-ignore
import { Header } from './components/organisms/header/header';
// @ts-ignore
import { Hero } from './components/organisms/hero/hero'; 
import { BottomBanner } from './components/organisms/bottom-banner/bottom-banner';
import { Footer } from './components/organisms/footer/footer'; 


function App(){

  return (
    <div>
      <Header />

      <main>
        <Hero/> 
        <BottomBanner />
        <Footer />
      </main>
    </div>
  );
}

export default App;