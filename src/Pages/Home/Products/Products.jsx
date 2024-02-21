import { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { authContext } from '../../../provider/AuthProvider';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { mode } = useContext(authContext);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div className={`px-3 md:px-20 ${mode && 'bg-mode-dark'}`}>
      <div className="pb-14 pt-16">
        <div className={`text-center space-y-3 ${mode && 'text-mode-text'}`}>
          <p className="text-xl font-semibold text-[#FF3811]">
            Popular Products
          </p>
          <h1 className="text-3xl font-bold">Browse Our Products</h1>
          <p className="max-w-[717px] mx-auto font-medium">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don ot look even slightly
            believable.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 justify-between mt-8 md:mt-16">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            className={`font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white
                ${
                  mode &&
                  'text-gray-400 hover:text-white hover:bg-mode-dark border-white'
                }
                `}
          >
            More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
