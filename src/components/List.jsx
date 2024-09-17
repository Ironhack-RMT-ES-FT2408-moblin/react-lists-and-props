
function List() {

  const stringsArr = [ "tomate", "patatas", "aguacate", "lechuga" ]
  const strings2Arr = [ 
    {name: "tomate", cal: 10}, 
    {name: "patatas", cal: 5},
    {name: "aguacate", cal: 30} ,
    {name: "tomate", cal: 30} ,
  ]

  // const jsxArr = [ <li>tomate</li>, <li>patatas</li>, <li>aguacate</li>, <li>lechuga</li> ]

  return (
    <div>
      
      <h2>Listas</h2>

      <ul>
       {strings2Arr.map((eachElem, index) => {
          // la primera etiqueta o componente que esté siendo renderizado dentro del map siempre debe tener propiedad key con un valor unico
          return (
            <li key={index}>{eachElem.name} - cal: {eachElem.cal}</li>
          )
        })}
      </ul>

    </div>
  )
}

export default List