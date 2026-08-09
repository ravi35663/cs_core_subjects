import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
// import { listData } from "../utils/mocksData";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=>{

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [title,setTitle] = useState('')
    const [fetching,setFetching] = useState(true);
    const [listData,setListData] = useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const  {setUserName,loggedInUser} = useContext(UserContext)

    useEffect(()=>{
        fetchData();
        return ()=>{// this is unmounting phase
            console.log("This is called when this component is unmounted")
        }
    },[])

    const fetchData = async ()=>{
        // Added timeout to see shimmer UI
        const data  = await (await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')).json();
        setListOfRestaurant(data);
        setListData(data);
        setFetching(false);
        // setTimeout(()=>{

        // },1000)
    }

    const topRestaurants = ()=>{
        const data = listData.filter(item=>item.rating >= 4);
        setListOfRestaurant(data);
        setTitle('');
    }
    // Conditional rendering
    // if(!listOfRestaurant.length){
    //     return <Shimmer />
    // }
    const handleChange = (e)=>{
        setTitle(e.target.value);
    }
    const handleButtonClick = ()=>{
        const filteredData = listData.filter(item => item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
        setListOfRestaurant(filteredData);
        // setTitle('');
    }
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <h1>You are offline, please check your internet connection.</h1>
    }
    const handleNameChange = (e)=>{
        setUserName(e.target.value);
    }
    return (
        !fetching?
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type='text' className="border border-solid border-black rounded-lg" placeholder="Search" value={title} onChange={handleChange}/>
                    <button  className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={handleButtonClick}>Search</button>
                </div>
                {/* <button className="flex" onClick={topRestaurants}>Top Albums</button> */}
                <div className="search m-4 p-4">
                    <label>UserName: </label>
                    <input type='text' className="border border-solid border-black rounded-lg p-2" placeholder="User Name" value={loggedInUser} onChange={handleNameChange}/>
                    {/* <button  className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={handleButtonClick}>User Name</button> */}
                </div>
            </div>
            {listOfRestaurant.length? <div className="flex flex-wrap">
                {/* Res-card */}
                {listOfRestaurant?.map(item => (
                    <Link key={item.id} to={`/restaurant/${item.id}`}>
                        {/* if id is divisible by 6 then that card is promoted */}
                        {item.id %6 ===0?< RestaurantCardPromoted resData={item}/>: <RestaurantCard resData={item}/>}
                    </Link>
                ))}
            </div>:<h1>No result found</h1>}
        </div>: <Shimmer></Shimmer>
    )
}

export default Body;