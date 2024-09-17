
import allCharacters from "../data/characters.js"

function List() {

  const stringsArr = [ "tomate", "patatas", "aguacate", "lechuga" ]
  // const jsxArr = [ <li>tomate</li>, <li>patatas</li>, <li>aguacate</li>, <li>lechuga</li> ]

  const strings2Arr = [ 
    {name: "tomate", cal: 10}, 
    {name: "patatas", cal: 5},
    {name: "aguacate", cal: 30} ,
    {name: "tomate", cal: 30} ,
  ]

  const titles = ['TEENAGE', 'MUTANT', 'NINJA', 'TURTLES'];
  
  return (
    <div>
      
      <h2>Listas</h2>

      <ul>
       {/* {strings2Arr.map((eachElem, index) => {
          // la primera etiqueta o componente que esté siendo renderizado dentro del map siempre debe tener propiedad key con un valor unico
          return (
            <li key={index}>{eachElem.name} - cal: {eachElem.cal}</li>
          )
        })} */}
      </ul>

      {titles.map((eachTitle, index) => {
        return (
          <h1 key={index}>{eachTitle}</h1>
        )
      })}

      {allCharacters.map((eachCharacter, index) => {

        let cardStyle = {backgroundColor: eachCharacter.color, border: "2px solid black"}



        return (
          <div key={index} style={cardStyle}>
            <h3>{eachCharacter.name}</h3>
            <p>{eachCharacter.weapon}</p>
            {/* {eachCharacter.name === "splinter" ? <p className="emoji">🐀</p> : <p className="emoji">🐢</p> } */}
            <p className="emoji">{eachCharacter.name === "splinter" ? "🐀" : "🐢" }</p>


            <p className="emoji">{eachCharacter.name === "michelangelo" ? "🌟" : null }</p>

            { eachCharacter.name === "michelangelo" && <p className="emoji">🌟</p> }

            
            
          </div>
        )
      })}


    </div>
  )
}

export default List