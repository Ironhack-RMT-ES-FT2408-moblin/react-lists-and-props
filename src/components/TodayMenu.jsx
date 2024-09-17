import React from 'react'
import FoodCard from './FoodCard'

function TodayMenu() {

  const hoy = new Date()
  console.log(hoy)

  return (
    <>
      <h3>Este es el menú de hoy: {hoy.toLocaleDateString()}</h3>

      {/* <div className="food-card" style={cardStyles}>
        <p>Arepas con queso</p>
        <span className="emoji">🫓</span>
      </div>

      <div className="food-card" style={cardStyles}>
        <p>Pabellón Criollo</p>
        <span className="emoji">🍲</span>
      </div>

      <div className="food-card" style={cardStyles}>
        <p>Torta tres leches</p>
        <span className="emoji">🥧</span>
      </div> */}

      <FoodCard foodName={"Arepas con queso"} emoji={"🫓"} isVegan={false}/>
      <FoodCard foodName={"Pabellón criollo"} emoji={"🍲"}/>
      <FoodCard foodName={"Torta tres leches"} emoji={"🥧"}/>

      {/* <FoodCard foodInfo={{foodName: "Arepas con queso", emoji: "🫓"}}/> */}

    </>
  )
}

export default TodayMenu