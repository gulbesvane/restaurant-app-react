import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel'; 
import ourppl1 from '../Images/ourppl-4.jpg'
import ourppl2 from '../Images/ourppl-5.jpg'
import ourppl3 from '../Images/ourppl-7.jpg'
import ourppl4 from '../Images/ourppl-9.jpg'

function Ourppl() {
  
  return (
    <div>
		  <div className="row about">
        <div className="col-lg-9">
        {/*Using imported Boostrap component with pictures and captions*/}
            <Carousel>

              <Carousel.Item>
                <img
                  className="aboutimg"
                  src={ourppl1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h4>Eva</h4>
                  <p>This is our great employee!</p>
                </Carousel.Caption>

              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="aboutimg"
                  src={ourppl2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h4>Toni</h4>
                  <p>This is our great employee!</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="aboutimg"
                  src={ourppl3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h4>Karl</h4>
                  <p>This is our great employee!</p>
                </Carousel.Caption>
              </Carousel.Item>

                <Carousel.Item>
                <img
                  className="aboutimg"
                  src={ourppl4}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h4>Hana</h4>
                  <p>This is our great employee!</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Ourppl; 