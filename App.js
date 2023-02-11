import React from "react";
import ReactDOM from "react-dom/client";


// Create a Header Component from scratch using Functional Components with JSX

const AppLayout1=()=>{
  return(
    /**
     * Header
     *  -Logo
     *  -Nav Item
     *  -Cart
     * Body
     *  -Search Result
     *  -Restaurant List
     *    -RestaurantCard
     *    -Image
     *    -Name
     *    -Rating
     *    -Cusines
     * Footer
     *  -Links
     *   -Copyright 
     */
    <div className="navbar">
      <p className="logo"><img className="logo-img" width="100" height="100" src="https://st.depositphotos.com/1202217/2063/i/950/depositphotos_20638759-stock-photo-logo-text-with-shadow-word.jpg"/></p>
      <p className="search"><input type="search"/></p>
      <p className="icon">Icon</p>
    </div>
  )
}

const Title=()=>(
  <a href="/">
  <img
  className="logo"
  alt="logo"
   src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
   </a>
)

const HeaderComponent=()=>{
  return(
    <div className="header">
      <Title/>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const restaurantList=[
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "657142",
      "name": "Punjabi Angithi (Delhi Wale)",
      "uuid": "73e45c6d-7be0-4c3b-9a44-870bd36dab29",
      "city": "22",
      "area": "Hathibarkala",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Punjabi",
        "Kebabs",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 40,
      "slaString": "40 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "punjabi-angithi-hathibarkala-hathibarkala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "VEGORAMA PUNJABI ANGITHI PVT LTD PARSVNATH ELEGANZA MALL 103, RAJPUR  ROAD DEHRADUN, Dehradun,  Uttarakhand-248009",
      "locality": "Rajpur Road",
      "parentId": 4464,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5850866~p=1~eid=00000186-34af-3252-2193-656900bb0130",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "657142",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 500,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "407709",
      "name": "GANESH JI CHOLE BHATURE",
      "uuid": "70fa166a-e9c3-4e1b-84b5-5dc492a39d48",
      "city": "22",
      "area": "Chukkuwala",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "nbnl8bimo1jrl8amii9q",
      "cuisines": [
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "ganesh-ji-chole-bhature-chukkuwala-chukkuwala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "SHOP NO-10,KOCCHAR COMPLEX,RAJA ROAD, DEHRADUN NAGAR NIGAM, DEHRADUN, UTTARAKHAND 248001",
      "locality": "Raja Road",
      "parentId": 245987,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "407709",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "84229",
      "name": "Punjabi Dhaba",
      "uuid": "fdbb07e3-e071-46ed-8b5c-c2d2a3a00a15",
      "city": "22",
      "area": "Prince Chowk",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "yyrjmyajqhyjq6mp1gha",
      "cuisines": [
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "punjabi-dhaba-prince-chowk-race-course-dehradun",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "59, Gandhi Road, Prince Chowk, Dehradun",
      "locality": "Clock Tower",
      "parentId": 1476,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "84229",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "KFC",
      "uuid": "27ff4155-fe46-418e-9862-ab98953bf953",
      "city": "22",
      "area": "Anand Vihar Colony",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 2.799999952316284,
      "slugs": {
        "restaurant": "kfc-chukkuwala-chukkuwala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      "locality": "Clock Tower",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5918633~p=4~eid=00000186-34af-3252-2193-656a00bb0430",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "73011",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "586794",
      "name": "New Paradise Bakers",
      "uuid": "e6561953-ee07-4b0b-9c71-f299157396ea",
      "city": "22",
      "area": "Darshini Gate",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "473ad54c71b416ae36fd0f62a2519e51",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "new-paradise-bakers-chukkuwala-chukkuwala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "12 Darshani Gate Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand - 248001",
      "locality": "Darshini Gate",
      "parentId": 351098,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "586794",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
]

// USING PROPS

// const RestaurantCard=(props)=>{
//   return(
//     <div className="card">
//       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ props.restaurant.data.cloudinaryImageId }/>
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.data.lastMileTravelString} minutes</h4>
//     </div>
//   )
// }
 

//Without using props i.e object destructing
{/*
const RestaurantCard=({restaurant})=>{
  const {cloudinaryImageId,name,cuisines,lastMileTravelString}=restaurant.data;

  return(
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId }/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}


const Body =()=>{
  return(
    <div className="restaurant-list">
      <RestaurantCard restaurant={restaurantList[0]}/>
      <RestaurantCard restaurant={restaurantList[1]}/>
      <RestaurantCard restaurant={restaurantList[2]}/>
      <RestaurantCard restaurant={restaurantList[3]}/>
      <RestaurantCard restaurant={restaurantList[4]}/>
    </div>
    )
}
*/}

//With spread operator and doing more object destructing
{/*
const RestaurantCard=({cloudinaryImageId,name,cuisines,lastMileTravelString})=>{
  return(
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId }/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}


const Body =()=>{
  return(
    <div className="restaurant-list">
      <RestaurantCard {...restaurantList[0].data}/>
      <RestaurantCard {...restaurantList[1].data}/>
      <RestaurantCard {...restaurantList[2].data}/>
      <RestaurantCard {...restaurantList[3].data}/>
      <RestaurantCard {...restaurantList[4].data}/>
    </div>
    )
}

*/}

//if there are 50 restuarant then above method wil take time of we will use for loop 
//but in functional programing we use .map

const RestaurantCard=({cloudinaryImageId,name,cuisines,lastMileTravelString})=>{
  return(
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId }/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}


const Body =()=>{
  return(
    <div className="restaurant-list">
    {
      restaurantList.map(restaurant =>{
         return <RestaurantCard {...restaurant.data}/>
      })
    }
  
    </div>
    )
}

const Footer= ()=>{
  return(
    <h4>Footer</h4>
  )
}

const AppLayout=()=>{
  return(
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)