import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const data = await fetch('https://www.10bis.co.il/NextApi/searchRestaurants_V2?shoppingCartGuid=015f7144-9f63-49b2-95c6-9058ddf17b75&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1766367563216&deliveryMethod=delivery&cityId=24&houseNumber=5&latitude=32.0799659&longitude=34.77974760000001&streetId=56585')
    const json = await data.json()
  }
   
  return (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="serch-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
        <button onClick={() => {}}>Search</button>
      </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.reviewsRankDecimal > 4)
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.restaurantId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
