import food_logo from "../../food.png"
const RestaurantCard = ({resData})=>{
    const {title,id,url} = resData
    return (    
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
            <img 
                src={url} 
                alt="logo"
                className='rounded-lg'
            />
            <h3>{id}</h3>
            <h4 className="font-bold py-4 text-lg">{title}</h4>
        </div>
    )
}

// Higher Order Component
// take input as RestaurantCard and then output of the RestaurantCardPromoted
// RestaurantCard ==> RestaurantCardPromoted
// this higher order function is called pure function
// this is called pure function because it does not modify code of previous component.
// and also does not change the behavior of component.
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{ // {resData}
        return (
            <div> 
                <label className="absolute bg-black m-2 p-2 text-white rounded-lg">Promoted</label>
                <RestaurantCard 
                    // resData={resData}
                    {...props}
                 />
            </div>
        )
    } // new component
}


export default RestaurantCard;