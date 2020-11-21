import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Searcher from './components/Searcher/Searcher'
import ResultsPage from './components/ResultsPage/ResultsPage'

export default function App() {
  const [SearchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/'>
                <Searcher 
                SearchValue={SearchValue} 
                setSearchValue={setSearchValue} />
              </Route>
        
            <Route path='/search'>
                {SearchValue ?
                <ResultsPage 
                SearchValue={SearchValue} 
                setSearchValue={setSearchValue}/>
                :
                <Redirect to="/" />
                }
             </Route>
             <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}