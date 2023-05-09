import { useContext } from "react";
import { Divider } from "antd";
import Sidebar from "../sidebar/sidebar";
import { SidebarContext } from "../../context/sidebar-context";
import { CartContext } from "../../context/cart-context";
import { ReactComponent as EmptyCartIcon } from "../../assets/svg/empty-cart.svg";
import ProductItem from "../product-item/product-item";
import "./cart-sidebar.scss";

const CartSidebar = () => {
  const { isCartSidebarOpen, setIsCartSidebarOpen } =
    useContext(SidebarContext);
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="cart-sidebar">
      <Sidebar
        isSidebarOpen={isCartSidebarOpen}
        setIsSidebarOpen={setIsCartSidebarOpen}
        name="Cart"
        itemNumber={cartItems.length}
      >
        {cartItems.length !== 0 ? (
          <>
            <div className="cart-header">
              <div className="header-block">
                <span>Product</span>
              </div>

              <div className="header-block">
                <span className="Qty">Qty.</span>
                <span>Remove</span>
              </div>
            </div>
            {cartItems.map((cartItem) => (
              <>
                <ProductItem key={cartItem.id} cartItem={cartItem} />
                <Divider />
              </>
            ))}
            <div className="total">
              <span>Subtotal</span>
              <span>{cartTotal}</span>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <EmptyCartIcon />
            <h2 className="empty-cart-title">Your run cart is empty!</h2>
            <span>start add your requests here</span>
          </div>
        )}
      </Sidebar>
    </div>
  );
};

export default CartSidebar;
