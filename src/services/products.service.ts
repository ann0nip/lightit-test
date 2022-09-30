import axios from 'axios';

const URI = 'https://us-central1-prueba-front-280718.cloudfunctions.net/';

type Items = {
    name: string;
    img: string
};
type Products = {
    name: string;
    items: Items[];
};

type GetProductsResponse = {
    data: Products[];
};

export const getProducts = async (category: string) => {
    try {
        const { data }: GetProductsResponse = await axios.get(
            URI + category,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
        } else {
            console.log('unexpected error: ', error);
        }
    }
};