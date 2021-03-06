import './App.css';
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Main from './views/Main';
import AddForm from './views/AddForm';
import EditForm from './views/EditForm';

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

  console.log(datos)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
            {
              loaded?<Main list={datos} setList={setDatos}/>:''
            }
          </Route>
          <Route exact path={`/create`}>
            <AddForm datos={datos} setDatos={setDatos}/>
          </Route>
          <Route exact path={`/update/:id`}>
            <EditForm datos={datos} setDatos={setDatos}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
