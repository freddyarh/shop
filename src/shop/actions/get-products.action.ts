import { makeupApi } from "@/api/makeupApi"
import type { ProductsResponse } from "@/interfaces/products.response";

export const getProductsAction = async(): Promise<ProductsResponse> => {
    const { data } = await makeupApi.get<ProductsResponse>('/products');
    console.log(data)
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