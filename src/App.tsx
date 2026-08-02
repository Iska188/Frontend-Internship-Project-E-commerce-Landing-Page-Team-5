import { SaleNotification } from './components/molecules';
import { Header, Hero, BottomBanner, Footer, FeaturedCategories, PromoBanners, PopularProducts, DailyBestSells, DealsSection } from './components/organisms';

function App(){

  return (
    <div>
      <Header />

      <main>
        <Hero/> 

        <FeaturedCategories />

        <PromoBanners />

        <PopularProducts />

        <DailyBestSells />

        <DealsSection />

        <BottomBanner />

        <SaleNotification />

        <Footer />

      </main>
    </div>
  );
}

export default App;