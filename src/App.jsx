import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App
