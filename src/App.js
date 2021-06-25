import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NutrientForm from './components/calculator_form'
import Subscribe from './components/subscribe'
import HomeDummy from './components/HomeDummy'
import DescriptionPage from './components/DescriptionPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <h1>Vita</h1>
          <HomeDummy />
        </Route>

        <Route path="/Description/:itemType/:itemName" render={(props)=>(
          <DescriptionPage />          
        )}/> 
      </div>
    </Router>
  );
}

export default App;
