import React from 'react'; 
import Map from './Map'
import Form from './Form'

function SingleLocation(props) {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <Map/>
        </div>
        <div className="col-lg-4">
          <h3>{props.city}</h3>
          <p>{props.address}</p>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default SingleLocation; 