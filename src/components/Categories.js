import React from 'react'

const Categories = ({ categories, filter }) => {
  return (
    <div className="btn-sml-container">
      {/* iterate through categories and for each category add a button */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn-sml"
            key={index}
            // call in-line function filter and pass in category button that is being clicked
            onClick={() => filter(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories