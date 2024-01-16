import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:name" element={<CountryDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
