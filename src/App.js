import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { Homepage } from "./pages/Homepage/Homepage";
import { MinhasPastasPage } from "./pages/Minhaspastas/MinhasPastasPage"


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <br></br>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="minhas-pastas" element={<MinhasPastasPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
