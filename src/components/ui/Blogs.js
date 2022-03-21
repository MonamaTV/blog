import BlogContent from "../controls/BlogContent";

export default function BlogsUI({posts = []}) {

    return (
        posts.length !== 0 && posts.map((post) => {
            return <BlogContent post={post} />
        })
    );
}