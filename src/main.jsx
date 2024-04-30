import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HelloWorld from './Hello-World.jsx';
import Greeting from './components/Greeting.jsx';
import { GetCookies } from './components/GetCookies.jsx';
import NoContainer from './components/NoContainer.jsx';
import SelfClosingTags from './components/SelfClosingTags.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
    <Greeting />
    <GetCookies />
    <NoContainer />
    <SelfClosingTags />
  </React.StrictMode>,
)
