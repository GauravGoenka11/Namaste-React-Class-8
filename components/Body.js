import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
    //Javascript variable dec
    // let searchText="KFC";

    const [searchText,setSearchText]=useState("");

    // const [searchClicked,setSearchClicked]=useState("false");

    const[allRestaurants,setAllRestaurants]=useState([]);
    const [filteredrestaurants,filteredsetRestaurants]=useState([]);

    function filterData(searchText,restaurants){
    return restaurants.filter((restaurant)=>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
    }

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.7002159&lng=77.0081678&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        filteredsetRestaurants(json?.data?.cards[2]?.data?.data?.cards)

    }

    if(!allRestaurants) return null;

    if(filteredrestaurants?.length===0) return <h1>No restaurant match your Filter !!</h1>
   
    return(allRestaurants.length === 0) ? <Shimmer/>:(
        <>
        <div className="search-container">
            <input type="text" className="search-input"
             placeholder="Search" value={searchText}
                onChange={
                    (e)=>{setSearchText(e.target.value)}
                }
             />

             
             {/* Toggle Button */}
            
            {/* <h1>{searchClicked}</h1> */}

            {/* <button className="search-btn" onClick={()=>{
                if(searchClicked==="true"){
                setSearchClicked("false")
                }
                else{
                    setSearchClicked("true");
                }
            }}>Search</button>{searchText} */}

            {/* On click we need to filter the data so we have created filterData  */}

            <button className="search-btn" onClick={
                ()=>{
                    //need to filter the data
                    const data=filterData(searchText,allRestaurants);
                    //update the state -restaurant
                    filteredsetRestaurants(data);
                }
            }>Search</button>

        </div>

      <div className="restaurant-list">
      {
        filteredrestaurants.map(restaurant =>{
           return <RestaurantCard {...restaurant.data}/>
        })
      }
    
      </div>
      </>
      )
  }

 
 export default Body; 