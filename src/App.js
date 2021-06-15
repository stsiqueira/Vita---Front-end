import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemDescription from './components/ItemDescription';
import NutrientBreakdown from './components/NutrientBreakdown';
import OtherItems from './components/OtherItems';

function App() {


  return (
    <Router>
      <div className="App">
        <h1>VITA</h1>

        <Switch>
          <Route path="/Food">
            <ItemDescription itemName="Apple"
              itemImageUrl="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100"
              itemText="Cras bibendum facilisis leo ultricies feugiat. Mauris finibus fringilla nunc eu venenatis. Donec efficitur nisl quis condimentum elementum. Vivamus eu sem id eros hendrerit rhoncus a et ipsum. Suspendisse vitae iaculis purus, sit amet lobortis est. Vivamus sollicitudin pretium ligula at tempor. Maecenas finibus efficitur posuere. Cras non urna risus. Fusce nibh eros, fermentum convallis facilisis in, interdum eget dolor." />

            <div className="nutrientsContainer">
              <NutrientBreakdown nutrientType="Vitamin" nutrientContent="API RESULT" />
              <NutrientBreakdown nutrientType="Minerals" nutrientContent="API RESULT" />
            </div>

            <div className="otherItemsContainer">
              <OtherItems itemName="Apple"/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );


}

export default App;
