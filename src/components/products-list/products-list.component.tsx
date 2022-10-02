import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import LeftArrow from '../../assets/icons/Activo.png';
import { getProducts } from '../../services/products.service';
import { ItemsType } from '../../utils/types';

const ProductsList = () => {
  const { categoryName = '', productsName = '' } = useParams();
  const [items, setItems] = useState<ItemsType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProducts(categoryName!);
      if (response) {
        const products = response.find(
          (products) =>
            products.name.toLocaleLowerCase() ===
            productsName!.toLocaleLowerCase(),
        );
        products && setItems(products.items);
      }
    };
    categoryName && getData();
  }, [categoryName]);

  return (
    <div className="w-full p-6">
      <Link
        to={`/${categoryName}`}
        className="my-4 flex cursor-pointer items-center text-sm font-semibold capitalize text-gray-500"
      >
        <img src={LeftArrow} alt="Back" className="inline h-[12px] w-[12px]" />
        {categoryName}
      </Link>
      <h2 className="my-2 font-bold capitalize text-gray-800">
        {productsName}
      </h2>
      <div className="flex w-full">
        {items.map((item) => (
          <div
            key={item.name}
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
