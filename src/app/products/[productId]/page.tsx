import React from 'react'

const ProductDetails = ({ params }: {
    params: {
        productId: string
    }
}) => {
    return (
        <div>ProductDetails of {params.productId}</div>
    )
}

export default ProductDetails