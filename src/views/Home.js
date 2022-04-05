import React from "react";
import logo from "../Images/1.jpg";
import logo2 from "../Images/3.jpg";
import Map from "../components/Map";

function Home() {
  return (
    <div>
      <div className="imageWrap">
        <div>
          <img src={logo} />
        </div>
        <div className="textWrap">
          <h2>WHO WE ARE </h2>
          <p>
            When we opened 595 Craft and Kitchen in June 2017, our vision was to
            create an unassuming watering hole for the locals. In a town with
            endless options for bars and lounges, we found it challenging to
            find a friendly bar with a solid craft beer list, good food, and
            non-gaming/non-smoking. We wanted to provide friends and neighbors
            alike with the original form of social networking; a fun easy going
            bar, and a cold pint.{" "}
          </p>
          <p>
            Our staunch belief in providing exceptional quality products with
            friendly service in a clean and welcoming setting has helped us earn
            the reputation among the locals as one of the best hidden gems in
            Las Vegas.
          </p>
          <div>
            <img src={logo2} />
          </div>
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
}

export default Home;
