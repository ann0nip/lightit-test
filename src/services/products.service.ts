import axios from 'axios';

const URI = 'https://us-central1-prueba-front-280718.cloudfunctions.net/';

export type ItemsType = {
    name: string;
    img: string
}

export type ProductsType = {
    name: string;
    cateitemsgories: ItemsType[];
};


export const getProducts = async (category: string) => {
    const { data } = await axios.get<ProductsType[]>(URI + category);
    return data;
};