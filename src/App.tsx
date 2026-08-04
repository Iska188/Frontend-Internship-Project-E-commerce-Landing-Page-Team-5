import { SaleNotification } from './components/molecules';
import { Header, Hero, BottomBanner, Footer, FeaturedCategories, PromoBanners, PopularProducts, DailyBestSells, DealsSection, FeatureSection, TopProducts, ShopByCategories } from './components/organisms';

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

        <TopProducts />

        <ShopByCategories />

        <BottomBanner />

        <SaleNotification />

        <FeatureSection />

        <Footer />

      </main>
    </div>
  );
}

export default App;