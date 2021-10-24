import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(async () => {
    await API.fetchRestaurants().then((res) => {
      setRestaurants(res.data.restaurants);
    });
  }, []);

  return (
    <>
      レストラン一覧
      <p>{JSON.stringify(restaurants)}</p>
    </>
  );
};

export default Restaurants;
