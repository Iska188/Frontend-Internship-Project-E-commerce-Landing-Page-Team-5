import { SaleNotification } from './components/molecules';
import { Header, Hero, BottomBanner, Footer, FeaturedCategories, PromoBanners, PopularProducts, DailyBestSells, DealsSection } from './components/organisms';

function App(){

  return (
    <div>
      <Header />

      <main>
        <Hero/> 

        <DealsSection />

        <FeaturedCategories />

        <PromoBanners />

        <PopularProducts />

        <DailyBestSells />

        <BottomBanner />

        <SaleNotification />

        <Footer />

      </main>
    </div>
  );
}

export default App;