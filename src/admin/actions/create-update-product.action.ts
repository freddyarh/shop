import { makeupApi } from "@/api/makeupApi";
import type { Product } from "@/interfaces/product.interface";
import { sleep } from "@/lib/sleep";



export const createUpdateProductAction = async(
    productlike: Partial<Product>
): Promise<Product> => {

    await sleep(1500);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, user, images= [], ...rest } = productlike;

    const isCreating = id === 'new';

    rest.stock = Number(rest.stock || 0);
    rest.price = Number(rest.price || 0);

    const { data } = await makeupApi<Product>({
        url: isCreating ? '/products' : `/products/${id}`,
        method: isCreating ? 'POST' : 'PATCH',
        data: rest
    });

    return {
        ...data,
        images: data.images.map((image) => {
            if (image.includes('http')) return image;
            return `${import.meta.env.VITE_API_URL}/files/product/${image}`
        })
    }
}