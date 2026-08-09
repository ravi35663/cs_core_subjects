import { useEffect, useState,useContext } from "react";
import List from "./List";



const Post = ({post,setOpenPostComments,openPostComments})=>{
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        postComments();
    },[]);

    const handleOpenComment = (postId)=>{
        setOpenPostComments(postId === openPostComments?'':postId);
    }

    const postComments = async ()=>{
        const resComments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)).json();
        setComments(resComments);
    }
    return  <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50  shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={()=>handleOpenComment(post.id)}>
                <span className="font-bold text-lg"> {post.title} ({comments.length})</span>
                <span> ⬇️</span>
            </div>
            {post.id === openPostComments?<List items={comments} />:null}
        </div>
    </div>
}


export default Post;