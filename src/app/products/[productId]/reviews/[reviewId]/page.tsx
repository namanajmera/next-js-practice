import { notFound } from "next/navigation";

const ReviewsDetails = async ({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) => {
    const { reviewId, productId } = await params;
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <div>Product Details of {productId} for Reviews Details of {reviewId}</div>
    )
}

export default ReviewsDetails;