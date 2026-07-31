import { SaleNotification } from './components/molecules';
import { Header, Hero, BottomBanner, Footer, FeaturedCategories, PromoBanners } from './components/organisms';

function App(){

  return (
    <div>
      <Header />

      <main>
        <Hero/> 

        <FeaturedCategories />

        <PromoBanners />

        <BottomBanner />

        <SaleNotification />

        <Footer />

      </main>
    </div>
  );
}

export default App;