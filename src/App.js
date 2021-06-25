///////////////////////   IMPORT OF TOOLS      ////////////////////////////////////////
import { Route } from 'react-router-dom';

///////////////////////   IMPORT OF COMPONENTS ////////////////////////////////////////
import Header from './components/html_components/header'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Contact from './components/Contact'
import Team from './components/Team'
import Footer from './components/html_components/Footer'




function App() {
  return (
    <div className="App">
      <Header />{/********************   HEADER COMPONENT  ***************************/}
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
===================  Team Route - Aman, Glen & Thiago  ===============================
====================================================================================== 
*/}
        <Route path="/Team" render={(props)=>(
          <>
            <Team />{/******************   TEAM COMPONENT  ***************************/}
          </>
        )}/> 
      </div>

      <Footer /> {/*****************   FOOTER COMPONENT  ***************************/}
    </div>
  );
}

export default App;
