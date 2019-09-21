import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";

export const TopicDetail = () => (
    <div>
        <h1>HATS4U</h1>
    </div>
);

//link and button are equivalent
const TopicsList = (props) => (
    <div>
        <Link to ='/' > Home</Link>
        <button onClick={()=> props.history.push('/')}>Topics</button>
        <h1>HATS</h1>
    </div>
);


function App() {
  return (
    <div className="App">
        <Switch>
             <Route exact path='/' component={HomePage}/>
             <Route exact path='/topics' component={TopicsList}/>
             <Route path='/topics/:topicId' component={TopicDetail}/>
        </Switch>
    </div>
  );
}

export default App;
