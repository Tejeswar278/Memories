import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
    const [postData, setPostData] = useState({
        creator: "", title: "", message:"", tags:"",selectedFile: "",
    })
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    return (
        <div className="formcontainer">
            <form autoComplete="off" noValidate className="form1" onSubmit={handleSubmit}>
                <h1>Creating a Memory</h1>
                <input placeholder="creator" name="creator" varient="outlined" lable="creator" value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/><br></br>
                <input placeholder="title" name="title" varient="outlined" lable="title" value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/><br></br>
                <input placeholder="message" name="message" varient="outlined" lable="message" value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/><br></br>
                <input placeholder="tags" name="tags" varient="outlined" lable="tags" value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
                <div>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                </div>
                <button type="submit" className="formBtn1">Submit</button>
                <button onClick={clear} className="formBtn2">Clear</button>
            </form>
        </div>
    )
}

export default Form;