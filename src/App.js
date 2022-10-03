import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Login from "./pages/authentication/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </>
  ); 
}

export default App;
 