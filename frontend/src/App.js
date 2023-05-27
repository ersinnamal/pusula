import { Route, Routes } from "react-router-dom";
import AdayEkle from "./components/AdayEkle/AdayEkle";
import Header from "./components/Header/Header";
import Pusula from "./components/Pusula/Pusula";
import Share from "./components/Share/Share";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Pusula />} />
        <Route path="/aday-ekle" element={<AdayEkle />} />
      </Routes>
      <Share />
    </div>
  );
}

export default App;
