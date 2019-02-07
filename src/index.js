import SirTet from "./js/components/container/SirTet.jsx"
import { BrowserRouter } from 'react-router-dom'
import React from "react"

import ReactDOM from 'react-dom'

ReactDOM.render(
  <BrowserRouter>
    <SirTet/>
  </BrowserRouter>
, document.getElementById('sirtet-game-board'))
