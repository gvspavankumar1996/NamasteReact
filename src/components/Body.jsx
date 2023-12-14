import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import resList from '../utils/mockData';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = (listOfRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            ));
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant in your City
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
