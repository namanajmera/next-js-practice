import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Blog",
        template: "Blog %s",
    },
}

const Blog = () => {
    return (
        <h1>Blog</h1>
    )
}
export default Blog;