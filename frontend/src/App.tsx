import Header from './components/Header';
import Carousel from './components/ProductCarousel';
import { useProducts } from './hooks/useProducts';

const App: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-8 bg-white">
      <Header />
      <Carousel products={products} />
    </div>
  );
};

export default App;
