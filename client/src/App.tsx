import BannerCategory from "./ui/BannerCategory";
import Categories from "./ui/Categories";
import Highlights from "./ui/Highlights";
import HomeBanner from "./ui/HomeBanner";
import ProductList from "./ui/ProductList";

function App() {
  return (
    <main>
      <BannerCategory />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList />
    </main>
  );
}

export default App;
