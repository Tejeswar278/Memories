
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <Post post={post}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Posts;