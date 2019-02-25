import SirTet from "./js/components/container/SirTet.jsx"
import { BrowserRouter } from 'react-router-dom'
import React from "react"
import {Provider} from 'react-redux';
import * as StoreFactory from "./js/store-factory"

import ReactDOM from 'react-dom'

const store = StoreFactory.createStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <SirTet/>
    </BrowserRouter>
  </Provider>
, document.getElementById('sirtet-game-board'))
