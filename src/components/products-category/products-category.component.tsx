import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import RightArrow from '../../assets/icons/Activo.png'
import { getProducts } from '../../services/products.service';

type Items = {
    name: string;
    img: string
};
type Products = {
    name: string;
    items: Items[];
};


const ProductsCategory = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        const getData = async () => {
            const response = await getProducts(categoryName!)
            if (response) setProducts(response)
        }

        categoryName && getData()
    }, [categoryName])

    return (
        <div className='p-6 w-full'>
            <h2 className='text-gray-800 font-bold my-2 capitalize'>{categoryName}</h2>
            {products.map((product) => (
                <Link to={product.name.toLowerCase()} key={product.name} className='flex bg-white rounded-md items-center px-4 py-2 mb-3 cursor-pointer'>
                    <div className='flex-1 text-gray-800'>{product.name}</div>
                    <div><img src={RightArrow} alt="Flecha" className='rotate-180 w-[15px]' /></div>
                </Link>
            ))}
        </div>
    );
};

export default ProductsCategory