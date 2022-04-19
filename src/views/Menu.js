import React, { useState } from 'react'
import MenuItem from '../components/MenuItem'
import Categories from '../components/Categories'
import data from '../data'

// first get all categories that are in the items data set, Set will make sure only unique values are passed in
// add in all category in front of the rest categories
const allCategories = ['all', ...new Set(data.map((item) => item.category))]

function Menu(){
      // set variable menuItems to the value coming from data set
      const [menuItems, setMenuItems] = useState(data)
      // set categories variable to allCategories
      const [categories] = useState(allCategories)
    
      // create function to filter items
      const filter = (category) => {
        // if category passed in matches all, then setMenuItems to default items
        if (category === 'all') {
          setMenuItems(data)
          return
        }
        // if category passed in is anything but all then setMenuItems to whatever is passed in
        const newItems = data.filter((item) => item.category === category)
        setMenuItems(newItems)
      }
      return (
        <main>
          <section className="menu section">
            <div className="title">
              <h2>menu</h2>
            </div>
            {/* pass categories and filterItems as props to the Categories */}
            <Categories categories={categories} filter={filter} />
            {/* pass menuItems as props allItems into MenuItem.js */}
            <MenuItem allItems={menuItems} />
          </section>
        </main>
      )
    }

export default Menu