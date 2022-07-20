import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import ShopLanding from "./pages/ShopLanding";
import axios from "axios";
import { useEffect } from "react";
import { setProcducts } from "./redux/actions/productAction";

function App() {
  const  {products}  = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log(error));
    dispatch(setProcducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ShopLanding products={products} />} />
          <Route path="/products/:id" element={<CardDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
{
}
