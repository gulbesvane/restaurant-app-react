import React, { useState } from 'react'
import MenuItems from '../components/MenuItems'
import Categories from '../components/Categories'
import items from '../data'

function Menu(){
    const allCategories = ['all', ...new Set(items.map((item) => item.category))]

      const [menuItems, setMenuItems] = useState(items)
      const [categories, setCategories] = useState(allCategories)
    
      const filterItems = (category) => {
        if (category === 'all') {
          setMenuItems(items)
          return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
      }
      return (
        <main>
          <section className="menu section">
            <div className="title">
              <h2>menu</h2>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <MenuItems items={menuItems} />
          </section>
        </main>
      )
    }

export default Menu