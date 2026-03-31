import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import Store from './app/Store.js'
//import Checkout from './pages/Checkout.jsx';

//import PlaceOrder from './Components/PlaceOrder.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App/>
  </Provider>,
)
