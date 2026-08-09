import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Post from "./Post";
// 
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";


const RestaurantMenu = ()=>{
    const {resId} = useParams();// useParams used to get parameters of url
    const album = useRestaurantMenu(resId);
    const [posts,setPosts] = useState([]);
    // we used this one to lift state up
    const [openPostComments,setOpenPostComments] = useState('')
    useEffect(()=>{
        fetchPosts().then();
    },[])
    // console.log("Params ",params);
    // const [album,setAlbum] = useState(null);
    // useEffect(()=>{
    //     fetchAlbum();
    // },[]);

    // const fetchAlbum = async ()=>{
    //     const data = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${resId}`)).json()
    //     setAlbum(data);
    // }

    const fetchPosts = async ()=>{
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        // console.log("Posts are ",posts);
        // add only 20 posts
        setPosts(posts.slice(0,10));
    }




    return (
        album ? (        
        <div className="text-center">
            <h3 className="font-bold my-10 text-xl">Title: {album.title}</h3>
            {/* Posts */}
            {posts && posts.map(post=>{
                {/*  Post is now controlled component because openPostComments controlling it (controlled by parent component) */}
                return <Post key={post.id} post={post} setOpenPostComments={setOpenPostComments} openPostComments={openPostComments}/>
            })}
    </div>) : <Shimmer />
    );
}

export default RestaurantMenu;