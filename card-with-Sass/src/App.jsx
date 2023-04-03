import "./style/style_card.scss"

function App() {

  return (
    <div className="card-background">
      <div className="imgBck">
        <div className="background">

          <img className="planet" src="src\Img\planet.png"/>
          <img className="lama" src="src\Img\lama.png"/>
          <div className="planet"></div>
        </div>
      </div>
      <div className="texte">
        <h1>Tour of the moon with a lama</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>
    
      </div>
    </div>
  )
}

export default App
