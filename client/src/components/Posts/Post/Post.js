import moment from "moment"
import "./post.css"
const Post = ({post}) => {
    return (
        <div>
            <img className="imgsz" src={post.selectedFile}/>
            <h6>{post.creator}</h6>
            <p>{moment(post.createdAt).fromNow()}</p>
            <div>
                <button onClick={()=> {}}>edit</button>
            </div>
            <div>
                <div>{post.tags.map((tag) => `#${tag} `)}</div>
            </div>
            <div>{post.message}</div>
            <button onclick={()=> {}}>thumb up{post.likeCount}</button>
            <button onclick={()=> {}}>delete</button>
        </div>
    )
}

export default Post;