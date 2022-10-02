import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import RightArrow from '../../assets/icons/Activo.png';
import { AppContext, AppContextType } from '../../context/app.context';

const ProductsCategory = () => {
  const { categoryName } = useParams();
  const { products } = useContext(AppContext) as AppContextType;

  return (
    <div className="w-full p-6">
      <h2
        data-testid="product-category-title"
        className="my-2 font-bold capitalize text-gray-800"
      >
        {categoryName}
      </h2>
      {!products.length && (
        <h3 className="flex justify-center text-gray-500">Loading...</h3>
      )}
      {products.map((product) => (
        <Link
          to={product.name.toLowerCase()}
          key={product.name}
          className="mb-3 flex cursor-pointer items-center rounded-md bg-white px-4 py-2"
        >
          <div data-testid="product-name" className="flex-1 text-gray-800">
            {product.name}
          </div>
          <div>
            <img
              src={RightArrow}
              alt="Flecha"
              className="w-[15px] rotate-180"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsCategory;
