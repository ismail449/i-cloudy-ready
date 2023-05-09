import { Route, Routes } from "react-router-dom";
import Header from "./routes/header/header";
import Home from "./routes/home/home";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
