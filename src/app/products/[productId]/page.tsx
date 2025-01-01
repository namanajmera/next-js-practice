import React from 'react'

const ProductDetails = async ({ params }: {
    params: {
        productId: string
    }
}) => {
    const {productId} = await params;
    return (
        <div>ProductDetails of {productId}</div>
    )
}

export default ProductDetails;