import React from 'react'; 
import Map from './Map'
import Form from './Form'

function SingleLocation(props) {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {/*Using imported Component*/}
          <Map/>
        </div>
        <div className="col-lg-4">
          {/*Using props from Locations and data file*/}
          <h3>{props.city}</h3>
          <p>{props.address}</p>
          {/*Using imported Component*/}
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default SingleLocation; 