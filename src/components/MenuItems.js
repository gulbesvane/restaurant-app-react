import React from 'react'
import { Provider, LikeButton } from "@lyket/react";

const MenuItems = ({ items }) => {
  return (
    <div className="container">
        <div className="row">
            {items.map((menuItem) => {
                const { id, title, img, price, desc } = menuItem
                return (
                    <div key={id} className="col-lg-4 col-md-6 item-box">
                        <div className="menu-img" style={{backgroundImage: `url(${img})`}}>
                            <div className="hovtxt">
                                <div className="menu-item-txt">
                                    <h3>{title}</h3>
                                    <h4 className="price">${price}</h4>
                                    <p className="item-text">{desc}</p>
                                    <Provider
  apiKey="acc0dbccce8e557db5ebbe6d605aaa"
  theme={{
    colors: {
      background: "#b8fff3",
      text: "violet",
      primary: "rgba(255, 224, 138, 0.4)"
    }
  }}
>
  <LikeButton
    namespace="my-blog-post"
    id="how-to-beat-me-at-chess"
  />
</Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MenuItems