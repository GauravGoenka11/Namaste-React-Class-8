import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL_CDN } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const params=useParams();

       const {id}=params;

       const [restaurant,setRestaurant]=useState(null);


       useEffect(()=>{
        getRestaurantInfo();
       },[]);

       async function getRestaurantInfo(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=20.7002159&lng=77.0081678&menuId="+id);
        const json=await data.json();
        setRestaurant(json.data)
       }

       if(!restaurant){
        return <Shimmer/>
       }

    return (
        <div className="menu">
        <div>
            <h1>Restaurant id:{id}</h1>
            <h1>{restaurant.name}</h1>
            <img src={IMG_URL_CDN + restaurant.cloudinaryImageId}/>
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating} stars</h3>
            <h3>{restaurant.costForTwo}</h3>
        </div>
            <div>
            <h1>Menu</h1>
            <ul>
            {(Object.values(restaurant?.menu?.items).map((item)=>
            <li key={item.id}>{item.name}</li>))}
            </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;