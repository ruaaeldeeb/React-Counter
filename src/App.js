import "./App.css";
import Counter from "./components/counter/counter";
import Navbarcontainer from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products";
import Cart from "./components/cart";
import About from "./components/about";
import Contact from "./components/contact";
import Details from "./components/products/datails";

function App() {
  return (
    <BrowserRouter>
      <Navbarcontainer />

      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/products/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
