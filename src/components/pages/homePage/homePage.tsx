import { SaleNotification } from '../../molecules';
import { Header, Hero, BottomBanner, Footer, FeaturedCategories, PromoBanners, PopularProducts, DailyBestSells, DealsSection, FeatureSection, TopProducts, ShopByCategories} from '../../organisms';

export function HomePage(){

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
