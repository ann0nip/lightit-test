import axios from 'axios';
import { GetProductsResponseType } from '../utils/types';

const URI = 'https://us-central1-prueba-front-280718.cloudfunctions.net/';


export const getProducts = async (category: string) => {
    try {
        const { data }: GetProductsResponseType = await axios.get(
            URI + category.toLowerCase(),
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