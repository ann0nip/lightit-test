import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import LeftArrow from '../../assets/icons/Activo.png'
import { getProducts } from '../../services/products.service';

type Items = {
    name: string;
    img: string;
};
type Products = {
    name: string;
    items: Items[];
};

const ProductsList = () => {
    const { categoryName = '', productsName = '' } = useParams();
    const [items, setItems] = useState<Items[]>([])

    useEffect(() => {
        const getData = async () => {
            const response = await getProducts(categoryName!)
            if (response) {
                const products = response.find((products) => products.name.toLocaleLowerCase() === productsName!.toLocaleLowerCase())
                products && setItems(products.items)
            }

        }
        categoryName && getData()
    }, [categoryName])

    return (
        <div className='p-6 w-full'>
            <Link to={`/${categoryName}`} className='cursor-pointer text-sm text-gray-500 font-semibold my-4 capitalize flex items-center'>
                <img src={LeftArrow} alt="Back" className='inline w-[12px] h-[12px]' />
                {categoryName}
            </Link >
            <h2 className='text-gray-800 font-bold my-2 capitalize'>
                {productsName}
            </h2 >
            <div className='flex w-full'>
                {items.map((item) => (
                    <div key={item.name} className='flex flex-col items-center border rounded mr-2 cursor-pointer w-2/6'>
                        <img src={item.img} alt="Flecha" className='w-[124px] h-[124px]' />
                        <span className='mt-1 text-center text-gray-500'>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList