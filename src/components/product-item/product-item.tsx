import { FC, useContext, useState } from "react";
import { InputNumber } from "antd";
import { CartItem, CartContext } from "../../context/cart-context";
import { ReactComponent as CubeIcon } from "../../assets/svg/cube.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svg/delete.svg";
import "./product-item.scss";

type ProductItemProps = {
  cartItem: CartItem;
};

const ProductItem: FC<ProductItemProps> = ({ cartItem }) => {
  const [quantity, setQuantity] = useState<number>(cartItem.quantity);
  const { setItemQuantity, clearItemFromCart } = useContext(CartContext);
  const handleInputNumberChange = (value: number | null) => {
    if (value === null) {
      return;
    }
    setItemQuantity(cartItem, value);
    setQuantity(value);
  };
  const handleItemDelete = () => {
    clearItemFromCart(cartItem);
  };
  return (
    <div className="product-item">
      <div className="product-item-left">
        <CubeIcon />
        <div className="product-item-left-info">
          <h2>Smart Checklist</h2>
          <span>{cartItem.name}, </span>
          <span>{cartItem.price} DTSU</span>
        </div>
      </div>
      <div className="product-item-right">
        <InputNumber
          min={0}
          value={quantity}
          className="input-number"
          onChange={handleInputNumberChange}
        />
        <div className="delete-icon" onClick={handleItemDelete}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
