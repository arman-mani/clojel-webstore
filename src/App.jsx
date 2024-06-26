import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFound";
import Products from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetailPage";
import { CartProvider } from "./context/CartContext";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route
              path="/*"
              element={
                <NotFound
                  title="Page Not Found"
                  description="The page you are trying to access is not available"
                  type="generic"
                  path="/"
                  buttonText="Go Home"
                />
              }
            />
          </Routes>
          <Footer />
          <ChatBot />
        </CartProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
