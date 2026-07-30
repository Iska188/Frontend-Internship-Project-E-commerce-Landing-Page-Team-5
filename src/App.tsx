import { Header, Hero, BottomBanner, Footer } from './components/organisms';

function App(){

  return (
    <div>
      <Header />

      <main>
        <Hero/> 
        <FeaturedCategories />
        <SaleNotification />
        <PromoBanners />
        <DealsSection / >
        <BottomBanner />
        <Footer />
      </main>
    </div>
  );
}

export default App;