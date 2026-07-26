//nothing...
// @ts-ignore
import { Header } from './components/organisms/header/header';
// @ts-ignore
import { Hero } from './components/organisms/hero/hero'; 
import { FeaturedCategories } from './components/organisms/featured-categories/featured-categories';
import { SaleNotification } from './components/molecules/sale-notification/sale-notification';  
import { PromoBanners } from './components/organisms/promo-banners/promo-banners'; 
import { BottomBanner } from './components/organisms/bottom-banner/bottom-banner';
import { Footer } from './components/organisms/footer/footer'; 
import { DealsSection } from './components/organisms/deals-section/DealsSection';

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