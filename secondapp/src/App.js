import React from "react"
import Header from "./components/HeaderComponents"
import Footer from "./components/FooterComponent"
import Main from "./components/MainComponent"






import "../src/styles/navBarrStyle.css"
import "../src/styles/footerStyle.css"
import "../src/styles/cardStyle.css"
import "../src/styles/MainStyle.css"
import "../src/styles/TableStyle.css"
import "../src/styles/CarroStyle.css"
import "../src/styles/ProductoStyles.css"
import "../src/styles/Botones.css"
import "../src/styles/DetallesStyles.css"
import "../src/styles/Logger.css"

import {BrowserRouter} from "react-router-dom";

function App() {
  return ( 
   
        


 <React.Fragment>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
     
      <BrowserRouter>
      <Main></Main>
      </BrowserRouter>
      
      
      <Footer/>
    </React.Fragment>

   


  )
}

export default App;
