import { Route, Routes } from "react-router-dom";
import Header from "./routes/header/header";
import Home from "./routes/home/home";

import "./App.scss";
import Pillar from "./routes/pillar/pillar";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:pillarTitle" element={<Pillar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
