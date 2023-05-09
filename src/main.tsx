import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SidebarProvider } from "./context/sidebar-context.tsx";
import { CartProvider } from "./context/cart-context.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
