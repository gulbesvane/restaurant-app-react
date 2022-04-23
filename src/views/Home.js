import React from "react";
import logo from "../Images/1.jpg";
import logo2 from "../Images/3.jpg";
import logo3 from "../Images/small_logo.jpg";

function Home() {
  return (
    <div>
      <div className="imageWrap">
        <div>
          <img src={logo} />
        </div>
        <div className="textWrap">
          <div>
            <img src={logo3} />
          </div>
          <div>
            <h2>Welcome to Burger House... </h2>

            <p>
              Burger House is a neighbourhood diner, where you can get Real
              Gourmet Irish Burgers!{" "}
            </p>
            <p>
              All beef burgers are 7oz ( 200g ) patties made from top quality
              prime young Heifer meat under 24 months old supplied by a Master
              Butcher. 100% Irish and fully traceable. 100% Irish Bord Bia
              quality assured Chicken born & reared in the Glin Valley. We NEVER
              use frozen meat.
            </p>
          </div>
          <div>
            <img src={logo2} />
          </div>
        </div>
      </div>
      <div className="bottomtextWrap">
        <h2>Burger House was established in 2022... </h2>
        <p>
          &emsp; Here at Burger House we're all about...well...The Burgers. We
          spend time to create Gourmet Irish Burgers that tantalise the
          tastebuds and pride ourselves on the quality of the produce we use.
          Everything on the menu is carefully selected to deliver the highest
          quality to your plate and palate..{" "}
        </p>
        <p>
          &emsp; Our staunch belief in providing exceptional quality products
          with friendly service in a clean and welcoming setting has helped us
          earn the reputation among the locals as one of the best hidden gems in
          Dublin, Galway, Cork & Sligo.
        </p>
      </div>
    </div>
  );
}

export default Home;
