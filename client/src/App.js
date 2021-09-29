import './App.css';
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Main from './views/Main';

function App() {

  const [datos,setDatos] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(() =>{
    axios.get('/api/authors')
          .then(res=>{
            setDatos(res.data.data)
            setLoaded(true);
          })
  },[]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
            {
              loaded?<Main list={datos} setList={setDatos}/>:''
            }
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
