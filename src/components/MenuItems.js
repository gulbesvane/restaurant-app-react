import React from 'react'
import { Provider, LikeButton } from "@lyket/react";

const MenuItems = ({ items }) => {
  return (
    <div className="container">
        <div className="row">
            {items.map((menuItem) => {
                const { id, title, img, price, desc } = menuItem
                return (
                    <div key={id} className="col-lg-4 col-md-6 item-container">
                        <img src={img} className="item-img"/>
                        <div className="overlay">
                            <div className="overlay-content">
                                <h3>{title}</h3>
                                <h4 className="price">${price}</h4>
                                <p className="item-text">{desc}</p>
                                <Provider
                                    apiKey="pt_75600e9379c50f115465ee7010d3ba"
                                    theme={{
                                        colors: {
                                        background: "#856B39",
                                        text: "#cccccc",
                                        primary: "#856B39",
                                        highlight: "#e3a737",
                                        icon: "#cccccc"
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
                )
            })}
        </div>
    </div>
  )
}

export default MenuItems