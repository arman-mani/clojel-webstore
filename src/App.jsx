import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetailPage";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()


const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Header />
      <Routes>
        <Route path="/" element={<Products  />} />
        <Route path="/products" element={<LandingPage  />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
