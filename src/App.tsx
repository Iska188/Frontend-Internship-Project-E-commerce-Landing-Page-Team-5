import { Header, Hero, BottomBanner, Footer } from './components/organisms';

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