
function Contenedor(props) {
  console.log(props)
  return (
    <div style={{backgroundColor: props.color}}>
      {props.children}
    </div>
  )
}

export default Contenedor