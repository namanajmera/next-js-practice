import React from 'react'

const ReviewsDetails = async ({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) => {
    const { reviewId, productId } = await params;
    return (
        <div>Product Details of {productId} for Reviews Details of {reviewId}</div>
    )
}

export default ReviewsDetails;