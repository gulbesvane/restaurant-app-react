import React from "react";
import { Provider, LikeButton } from "@lyket/react";

// take in items = menuItems list from Menu and iterate through it
const MenuItem = ({ allItems }) => {
  return (
    <div className="container">
      <div className="row">
        {/* for each list item create item display*/}
        {allItems.map((singleItem) => {
          return (
            <div
              key={singleItem.id}
              className="col-lg-4 col-md-6 item-container"
            >
              <img
                className={singleItem.category + " " + "item-img"}
                src={singleItem.img}
                alt={singleItem.category}
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{singleItem.title}</h3>
                  <h4 className="price">£{singleItem.price}</h4>
                  <p className="item-text">{singleItem.desc}</p>
                  {/* add like button to each item using Lyket library and API */}
                  <Provider
                    apiKey="pt_75600e9379c50f115465ee7010d3ba"
                    theme={{
                      colors: {
                        background: "#856B39",
                        text: "#cccccc",
                        primary: "#856B39",
                        highlight: "#e3a737",
                        icon: "#cccccc",
                      },
                    }}
                  >
                    <LikeButton
                      // each button has name and id added
                      namespace={singleItem.id}
                      id={singleItem.id}
                    />
                  </Provider>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;
