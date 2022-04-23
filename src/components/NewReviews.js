import React from 'react'; 
import axios from "axios"; 
import { useState, useEffect } from "react"; 

function Reviews2() {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState ("")

 useEffect(async function() {
    if(!reviews) {
      setError("Reviews not available")
    }
  })
  
  async function showReviews(e){
    e.preventDefault()
    var data = await axios
      .get(`${'http://crossorigin.me'}`,'https://api.yelp.com/v3/businesses/bunsen-dublin-2?osq=burgers/reviews', 
      {
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
     }, 
     params: {
       name: 'Bunsen', 
     },
    },
  )

  .then((res) => {
    console.log(res)
  })

  .catch((err) => {
    console.log(err)
  })

  setReviews(reviews.data)
  }

  return (
    <div>
      <button onClick={showReviews}>Show reviews</button>
    </div>
  )
}

export default Reviews2; 