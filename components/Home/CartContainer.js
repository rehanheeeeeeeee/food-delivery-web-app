import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems, setShowCart } from "../../redux/CartSlice";
import Image from "next/image";

const styles = {
  wrapper:
    "fixed top-0 right-0 w-full md:w-375 bottom-0 bg-white drop-shadow-md flex flex-col items-center justify z-[101]",
  cartHeader:
    "w-full flex flex-row items-center justify-between p-4 cursor-pointer",
  clear:
    "flex items-center rounded-md bg-gray-200 hover:shadow-md cursor-pointer text-textColor text-base gap-2 p-1 px-2 my-2",
  cart: "flex-1 w-full rounded-t-[2rem] bg-cartBg flex flex-col",
  cartItems:
    "h-[350px] my-2 px-5 pt-2  space-y-2 overflow-y-scroll scrollbar-hide",
  emptyCart: "h-full w-full flex flex-col items-center justify-center gap-6",
};

function CartContainer() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const CardHeader = () => (
    <div className={styles.cartHeader}>
      <motion.div
        whileTap={{ scale: 0.75 }}
        onClick={() => dispatch(setShowCart())}
      >
        <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
      </motion.div>
      <motion.p
        whileTap={{ scale: 0.75 }}
        className="text-textColor text-lg font-semibold"
      >
        Cart
      </motion.p>
      <motion.p
        onClick={() => dispatch(clearCart())}
        className={styles.clear}
        whileTap={{ scale: 0.75 }}
      >
        Clear
        <RiRefreshFill />
      </motion.p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={styles.wrapper}
    >
      <CardHeader />
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <Image
            src={"/assets/emptyCart.svg"}
            width={1920}
            height={1080}
            className="w-300"
            alt=""
          />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          className={styles.cart}
        >
          <div className={styles.cartItems}>
            {cartItems.map((cartItem, index) => (
              <CartItem key={index} cartItem={cartItem} />
            ))}
          </div>
          <CartTotal />
        </motion.div>
      )}
    </motion.div>
  );
}

export default CartContainer;
