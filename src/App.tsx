import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App
