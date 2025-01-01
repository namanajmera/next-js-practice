import { Metadata } from "next"

type Props = {
    params: {
        productId: string,
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params;
    return {
        title: `Product Details of ${productId}`,
        description: `Product Details of ${productId}`,
    }
}

const ProductDetails = async ({ params }: Props) => {
    const { productId } = await params;
    return (
        <div>ProductDetails of {productId}</div>
    )
}

export default ProductDetails;