import ImageRectangle from "components/image/ImageRectangle"

const PostCard = ({ title, coverImage, slug }) => {
    return (
        <a href={`https://blog.frankalvarez.dev/${slug}`}>
            <h3 style={{ marginBottom: "0.5rem" }}>
                {title}
            </h3>
            <ImageRectangle src={coverImage} />
        </a>
    )
}

export default PostCard