import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";


function App() {

  const handleClick = () => {
         console.log('clicou');
  };

  return (
    <div className="App">
      <HeaderPartial />
      <br></br>
      <Routes>
        <Route parth="/" element={<HomePage />} />
      </Routes>


    </div>
  );
}

export default App;
