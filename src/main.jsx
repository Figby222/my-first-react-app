import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HelloWorld from './Hello-World.jsx';
import Greeting from './components/Greeting.jsx';
import { GetCookies } from './components/GetCookies.jsx';
import NoContainer from './components/NoContainer.jsx';
import SelfClosingTags from './components/SelfClosingTags.jsx';
import HTMLDefinitionChanges from './components/HTMLDefinitionChanges.jsx';
import FixHTML from './components/FixHTML.jsx';
import JavaScriptIntegration from './components/JavaScriptIntegration.jsx';
import RenderedExpressions from './components/RenderedExpressions.jsx';
import Props from './components/Props.jsx';
import ConditionalProps from './components/ConditionalProps.jsx';
import EmptyList from './components/EmptyList.jsx';
import EmptyListTernaries from './components/EmptyListTernaries.jsx';
import State from './components/State.jsx';
import MoreState from './components/MoreState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
    <Greeting />
    <GetCookies />
    <NoContainer />
    <SelfClosingTags />
    <HTMLDefinitionChanges />
    <FixHTML/>
    <JavaScriptIntegration />
    <RenderedExpressions />
    <Props />
    <ConditionalProps />
    <EmptyList />
    <EmptyListTernaries />
    <State />
    <MoreState />
  </React.StrictMode>,
)
