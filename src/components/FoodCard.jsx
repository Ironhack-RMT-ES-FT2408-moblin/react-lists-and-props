
function FoodCard(props) {
  console.log(props) // siempre hagan console.log de props

  const cardStyles = {
    backgroundColor: "black",
    margin: "15px",
    padding: "10px"
  }

  return (
    <div className="food-card" style={cardStyles}>
      <p>{props.foodName}</p>
      <span className="emoji">{props.emoji}</span>
    </div>
  )
}

export default FoodCard