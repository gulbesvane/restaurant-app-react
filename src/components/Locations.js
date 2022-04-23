import React from 'react'
import {useState} from 'react'
import SingleLocation from './SingleLocation'
import {locationDetails} from '../locationDetails';

function Locations(props){  
  //set default location on render
  const [locationChange, setLocation] = useState(<SingleLocation city={locationDetails[0].city} address={locationDetails[0].address}/>);

  //pass props to SingleLocation.js from locationDetails.js data
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

  //display buttons that will trigger functions with data for different locations
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
      {/*display new data after click*/}
      {locationChange}
      </div>
    </div>
   )
  }

export default Locations; 