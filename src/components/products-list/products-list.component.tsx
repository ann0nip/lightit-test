import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import LeftArrow from '../../assets/icons/Activo.png';
import { AppContext, AppContextType } from '../../context/app.context';
import { ItemsType } from '../../utils/types';

const ProductsList = () => {
  const { categoryName = '', productsName = '' } = useParams();
  const { products } = useContext(AppContext) as AppContextType;

  const [items, setItems] = useState<ItemsType[]>([]);

  useEffect(() => {
    const productSelected = products.find(
      (products) =>
        products.name.toLocaleLowerCase() === productsName!.toLocaleLowerCase(),
    );
    productSelected && setItems(productSelected.items);
  }, [products, productsName]);

  return (
    <div className="w-full p-6">
      <Link
        to={`/${categoryName}`}
        className="my-4 flex cursor-pointer items-center text-sm font-semibold capitalize text-gray-500"
      >
        <img src={LeftArrow} alt="Back" className="inline h-[12px] w-[12px]" />
        {categoryName}
      </Link>
      <h2
        data-testid="product-list-title"
        className="my-2 font-bold capitalize text-gray-800"
      >
        {productsName}
      </h2>
      <div className="flex w-full">
        {items.map((item) => (
          <div
            key={item.name}
            data-testid="product-list-item"
            className="mr-2 flex w-2/6 cursor-pointer flex-col items-center rounded border"
          >
            <img src={item.img} alt="Flecha" className="h-[124px] w-[124px]" />
            <span className="mt-1 text-center text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
