import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { Homepage } from "./pages/Homepage/Homepage";
import { MinhasPastasPage } from "./pages/Minhaspastas/MinhasPastasPage";
import { AppContext } from "./store/AppContext";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: [],
};

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <br></br>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="minhas-pastas" element={<MinhasPastasPage />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
