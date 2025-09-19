import { makeupApi } from "@/api/makeupApi"
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
}

export const getProductsAction = async(options: Options): Promise<ProductsResponse> => {
    
    const { limit, offset, sizes, gender } = options;
    
    const { data } = await makeupApi.get<ProductsResponse>('/products', {
        params: {
            limit,
            offset,
            sizes,
            gender
        }
    });
    
    const productsWithImageUrls = data.products.map(product => ({
        ...product,
        images: product.images.map(
            (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        )
    }))

    return {
        ...data,
        products: productsWithImageUrls
    };
}