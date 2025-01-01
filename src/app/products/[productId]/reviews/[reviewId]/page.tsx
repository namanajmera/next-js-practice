import { notFound } from "next/navigation";

const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
}
const ReviewsDetails = async ({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) => {
    const { reviewId, productId } = await params;
    const random = getRandomInt(10);
    if (random === 1) {
        // throw new Error('Server Error');
    }
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <div>Product Details of {productId} for Reviews Details of {reviewId}</div>
    )
}

export default ReviewsDetails;