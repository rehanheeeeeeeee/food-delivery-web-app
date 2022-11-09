import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/CartSlice";
import { SelectUser } from "../../redux/UserSlice";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const styles = {
  container:
    "w-full rounded-t-[2rem] bg-cartTotal h-1/2 flex flex-col items-center justify-evenly px-8 py-2",
  amount: "w-full flex items-center justify-between",
  amountInfo: "text-gray-400 text-lg",
  totalAmount: "text-gray-200 text-xl font-semibold",
  button:
    "w-full rounded-3xl my-1 bg-gradient-to-tr from-orange-400 to-orange-600  text-gray-50 p-2 text-lg hover:shadow-lg",
};

const Total = ({ title, amount }) => (
  <div className={styles.amount}>
    <p className={styles.amountInfo}>{title}</p>
    <p className={styles.amountInfo}>${amount}</p>
  </div>
);

export default function CartTotal() {
  const user = useSelector(SelectUser);
  const cartItems = useSelector(selectCartItems);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (prev, curr) => prev + Number(curr.price) * curr.quantity,
        0
      )
    );
  }, [cartItems]);

  const logIn = () => {
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <Total title="Sub Total" amount={cartTotal.toFixed(2)} />
      <Total title="Delivery" amount={2.5} />
      <div className="border-b border-gray-600 w-full my-2"></div>
      <div className={styles.amount}>
        <p className={styles.totalAmount}>Total</p>
        <p className={styles.totalAmount}>${(cartTotal + 2.5).toFixed(2)}</p>
      </div>
      {user ? (
        <motion.button type="button" className={styles.button}>
          Checkout
        </motion.button>
      ) : (
        <motion.button onClick={logIn} type="button" className={styles.button}>
          Login to Checkout
        </motion.button>
      )}
    </div>
  );
}
