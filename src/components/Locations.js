import React from 'react'
import { useState } from 'react'
import SingleLocation from './SingleLocation';

function Locations(props){

  const [locationChange, setLocation] = useState(); 
  
  const locationDetails = [
    {
        id: 'l1', 
        city: 'Dublin', 
        address: 'Address for Dublin'
    }, 
    {
        id: 'l2', 
        city: 'Galway', 
        address: 'Address for Galway'
    }, 
    {
        id: 'l3', 
        city: 'Cork', 
        address: 'Address for Cork'
    }, 
    {
        id: 'l4', 
        city: 'Sligo', 
        address: 'Address for Sligo'
    }
]

  function setDublin(e){
    e.preventDefault()
    setLocation(
      <div>
        <SingleLocation city={locationDetails[0].city} address={locationDetails[0].address}></SingleLocation>
      </div>
    )
  }

  function setGalway(e){
    e.preventDefault()
    setLocation(
      <div>
      <SingleLocation city={locationDetails[1].city} address={locationDetails[1].address}></SingleLocation>
      </div>
    )
  }

  function setCork(e){
    e.preventDefault()
    setLocation(
      <div>
      <SingleLocation city={locationDetails[2].city} address={locationDetails[2].address}></SingleLocation>
      </div>
    )
  }

  function setSligo(e){
    e.preventDefault()
    setLocation(
      <div>
      <SingleLocation city={locationDetails[3].city} address={locationDetails[3].address}></SingleLocation>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="btn-sml-container">
          <button className="btn-sml" onClick={setDublin}>Dublin</button>
          <button className="btn-sml" onClick={setGalway}>Galway</button>
          <button className="btn-sml" onClick={setCork}>Cork</button>
          <button className="btn-sml" onClick={setSligo}>Sligo</button>
        </div>
      </div>
      <div>
      {locationChange}
      </div>
    </div>
   )
  }

export default Locations; 