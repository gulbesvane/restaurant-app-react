import React from "react";
import logo from "../Images/1.jpg";
import logo2 from "../Images/3.jpg";
import logo3 from "../Images/small_logo.jpg";

// configurated page layout with pics and text

function Home() {
  return (
    <>
      <div>
        <div className="row">
          {/* added fist food pic */}
          <div className="col-5 col-xs-12">
            <img className="img-fluid" alt="Tasty burger" src={logo} />
          </div>
          <div className="col col-xs-12">
            {/* added website logo */}
            <div className="textLogo">
              <img src={logo3} />
            </div>
            {/* added welcome message */}
            <div className="textWrap">
              <h2>Welcome to Burger House... </h2>

              <p>
                Burger House is a neighbourhood diner, where you can get Real
                Gourmet Irish Burgers!{" "}
              </p>
              <p>
                All beef burgers are 7oz ( 200g ) patties made from top quality
                prime young Heifer meat under 24 months old supplied by a Master
                Butcher. 100% Irish and fully traceable. 100% Irish Bord Bia
                quality assured Chicken born & reared in the Glin Valley. We
                NEVER use frozen meat.
              </p>
              <div>
                <img
                  className="img-fluid"
                  alt="Tasty burger with fries and pint of beer"
                  src={logo2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          {" "}
          {/* added bottom text*/}
          <div className="bottomtextWrap">
            <h2>Burger House was established in 2022... </h2>
            <p>
              &emsp; Here at Burger House we're all about...well...The Burgers.
              We spend time to create Gourmet Irish Burgers that tantalise the
              tastebuds and pride ourselves on the quality of the produce we
              use. Everything on the menu is carefully selected to deliver the
              highest quality to your plate and palate..{" "}
            </p>
            <p>
              &emsp; Our staunch belief in providing exceptional quality
              products with friendly service in a clean and welcoming setting
              has helped us earn the reputation among the locals as one of the
              best hidden gems in Dublin, Galway, Cork & Sligo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
