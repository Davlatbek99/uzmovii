import { Route, Router, Routes } from "react-router";
import Bosh_sahifa from "./pages/bosh-sahifa/Bosh_sahifa";
import Seriallar from "./pages/seriallar/Seriallar";
import Header from "./layouts/header/Header";
import "./assets/styles/main.scss";
import Kinolar from "./pages/kinolar/Kinolar";
import Janr from "./pages/janr/Janr";
import Yil from "./pages/yil/Yil";
import Mamlakat from "./pages/mamlakat/Mamlakat";
import Kino_yangiliklari from "./pages/kino-yangiliklari/Kino_yangiliklari";
import Footer from "./layouts/footer/Footer";
import MovieInner from "./components/movieInner/MovieInner";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/bosh_sahifa" element={<Bosh_sahifa />} />
        <Route path="/bosh_sahifa" element={<Bosh_sahifa />} />
        <Route path="/kinolar" element={<Kinolar />} />
        <Route path="/seriallar" element={<Seriallar />} />
        <Route path="/janr" element={<Janr />} />
        <Route path="/yil" element={<Yil />} />
        <Route path="/mamlakat" element={<Mamlakat />} />
        <Route path="/kino_yangiliklar" element={<Kino_yangiliklari />} />

        <Route path="/movie/:id" element={<MovieInner/>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
