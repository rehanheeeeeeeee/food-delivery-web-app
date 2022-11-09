import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/CartSlice";

const styles = {
  container:
    "p-2 flex items-center w-full justify-between bg-cartItem rounded-lg",
  cartImage: "h-14 w-14 object-contain",
  quantity: "flex items-center gap-2 text-white text-md",
  operator: "cursor-pointer",
};

export default function CartItem({ cartItem }) {
  const { title, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className="flex items-center gap-2">
        <Image
          width={1920}
          height={1080}
          src={imageUrl}
          className={styles.cartImage}
        />
        <div className="text-white text-sm">
          <p>{title}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className={styles.quantity}>
        <div
          className={styles.operator}
          onClick={() => dispatch(removeItem(cartItem.id))}
        >
          -
        </div>
        <div className="p-1 w-5 h-5 flex items-center justify-center rounded-full bg-cartBg text-xs">
          {quantity}
        </div>
        <div
          className={styles.operator}
          onClick={() => dispatch(addItem(cartItem))}
        >
          +
        </div>
      </div>
    </div>
  );
}
