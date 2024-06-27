import MyButton from "./MyButton";


function App() {

  const clickHandler = () => {
    console.log('Click!');
  }

  return (
        <div>
            <h1>Hola Mundo</h1>
            <MyButton onClick= {onClickHandler} name="Aceptar"/>
            <MyButton onClick= {onClickHandler} name="Cancelar"/>
            <MyButton onClick= {onClickHandler} name="Agregar"/>
            <MyButton onClick= {onClickHandler} name="Editar"/>
            
        </div>
  );
}

export default App;

