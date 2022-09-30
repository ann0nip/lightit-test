import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RightArrow from '../../assets/icons/Activo.png'
import { getProducts } from '../../services/products.service';
export type ItemsType = {
    name: string;
    img: string
}

export type ProductsType = {
    name: string;
    cateitemsgories: ItemsType[];
};

const CategoryPanel = () => {
    const { category } = useParams();
    const [products, setProducts] = useState<ProductsType[]>([])

    useEffect(() => {
        const getData = async () => {
            const response = await getProducts(category!)
            setProducts(response)
        }

        category && getData()
    }, [category])

    return (
        <div className='p-6 w-full'>
            <h2 className='text-gray-800 font-bold my-2 capitalize'>{category}</h2>
            {products.map((product) => (
                <div key={product.name} className='flex bg-white rounded-md items-center px-4 py-2 mb-3 cursor-pointer'>
                    <div className='flex-1 text-gray-800'>{product.name}</div>
                    <div><img src={RightArrow} alt="Flecha" className='rotate-180 w-[15px]' /></div>
                </div>
            ))}

        </div>
    );
};

export default CategoryPanel