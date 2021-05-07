import React from 'react';
import MainPage from './Components/MainPage';
import {FooterComp} from './Components/Footer';
import {Navigation} from "./Components/Navigation";
import Sandhya from "./Images/MainPage.JPG";

function App() {
  return (
    <div className="App"
         style={{
        // The background image to be responsive
        backgroundImage: `url(${Sandhya})`,
        backgroundSize:"cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition:"center",
        minHeight:"100%",
        minWidth:"100%",
        position:"fixed"
    }}>
        <Navigation backgroundImage={Sandhya}/>
        <MainPage/>
        <FooterComp backgroundImage={Sandhya}/>
    </div>
  );
}
export default App;
