import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./css/index.css"
import store from "./store"
 
import "antd/dist/antd.css"


  
        
  function ccc(){
    ReactDOM.render(<App store = {store}/>,document.getElementById("root"))

  }
 
  ccc()
  store.subscribe(ccc)