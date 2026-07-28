//nothing...
// @ts-ignore
import { Header } from './components/organisms/header/header';
// @ts-ignore
import { Hero } from './components/organisms/hero/hero'; 
import { Footer } from './components/organisms/footer/footer'; 

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <Hero /> 
        <Footer />
      </main>
    </div>
  );
}

export default App;