///////////////////////   IMPORT OF TOOLS      ////////////////////////////////////////
import { Route, Redirect } from 'react-router-dom';

///////////////////////   IMPORT OF COMPONENTS ////////////////////////////////////////
import Header from './components/html_components/header'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Contact from './components/Contact'
import Team from './components/Team'
import Footer from './components/html_components/Footer'
import DescriptionPage from './components/DescriptionPage';
import NutrientCalculatorStart from './components/sub_components/NutrientCalculatorStart';
import NutrientResults from './components/sub_components/NutrientResults';
import NutrientForm from './components/Calculator'
import { useState } from 'react';
import NotFound from './components/sub_components/NotFound';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={showMenu ? "App blocked" : "App"}>
      <Header 
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />{/********************   HEADER COMPONENT  ***************************/}
      <div className="main">
{/*
======================================================================================
===================  Home Route - Aman, Glen & Thiago  ===============================
====================================================================================== 
*/}
        <Route path="/" exact render={(props)=>(
          <>
          <Home />{/**************   HOME PAGE COMPONENT  ***************************/}
          </>
        )}/> 

{/*
======================================================================================
===================  Quiz Route - Aman, Glen & Thiago  ===============================
====================================================================================== 
*/}
        <Route path="/Quiz" render={(props)=>(
          <>
            <Quiz />{/******************   QUIZ COMPONENT  ***************************/}
          </>
        )}/> 
{/*
======================================================================================
===================  Contact Route - Aman, Glen & Thiago  ============================
====================================================================================== 
*/}
        <Route path="/Contact" render={(props)=>(
          <>
            <Contact />{/*****************  CONTACT COMPONENT  ***************************/}
          </>
        )}/> 
{/*
======================================================================================
===================  DesriptionPage Route - Aman, Glen & Thiago  =====================
====================================================================================== 
*/}
        <Route path="/Description/:itemType/:itemName" render={(props)=>(
          <DescriptionPage />          
        )}/> 
{/*
======================================================================================
===================  Team Route - Aman, Glen & Thiago  ===============================
====================================================================================== 
*/}
        <Route path="/Team" render={(props)=>(
          <>
            <Team />{/******************   TEAM COMPONENT  ***************************/}
          </>
        )}/> 
{/*
======================================================================================
===================  Nutrient Calculator Route - Glen  ============================
====================================================================================== 
*/}
        <Route path="/NutrientCalculator" exact render={()=>(
                <>
                  <NutrientCalculatorStart />{/*****************  NUTRIENT CALCULATOR COMPONENT  ***************************/}
                </>
        )}/> 

        <Route path="/NutrientCalculator/Start" render={()=>(
          <>
			      <NutrientForm />{/*****************  NUTRIENT CALCULATOR FORM COMPONENT  ***************************/}
          </>
        )}/>

        <Route path="/NutrientCalculator/Results" render={()=>(
          <>
            <NutrientResults />{/*****************  NUTRIENT CALCULATOR RESULT COMPONENT  ***************************/}
          </>
        )}/> 

        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
 
      </div>

      <Footer /> {/*****************   FOOTER COMPONENT  ***************************/}
    </div>
  );
}

export default App;
