import React from "react"
import Header from "./components/HeaderComponents"
import Footer from "./components/FooterComponent"
import Main from "./components/MainComponent"


import { BrowserRouter, Route } from "react-router-dom"



import "../src/styles/navBarrStyle.css"
import "../src/styles/footerStyle.css"
import "../src/styles/cardStyle.css"
import "../src/styles/MainStyle.css"
import "../src/styles/TableStyle.css"
import "../src/styles/CarroStyle.css"
import "../src/styles/productosClientes.css"
import "../src/styles/Botones.css"


function App() {
  return ( 
   
        


 <React.Fragment>
      <Header/>
      <Main>               
      </Main>  
      <Footer/>
    </React.Fragment>

   


  )
}

export default App;
