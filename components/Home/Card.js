import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CartSlice";

const styles = {
  container:
    "flex flex-col justify-center items-center min-w-300 p-4 h-200 md:w-320 shadow-md backdrop-blur-lg bg-card my-6 rounded-lg  hover:drop-shadow-lg transtion-all ease-in-out duration-100",
  wrapper: "flex-1 w-full flex items-center justify-between",
  cardImage: "w-40 max-h-40 object-contain -mt-8 drop-shadow-2xl",
  icon: "text-white",
  cartBtn:
    "w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-red-600 hover:shadow-md transtion-all duration-100 ease-in-out",
  cardName: "text-textColor font-semibold text-base md:text-lg",
  calories: "mt-1 text-sm text-gray-500",
  price: "text-lg text-headingColor font-semibold",
};

export default function Card({ item }) {
  const { title, imageUrl, category, price, calories } = item;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={imageUrl}
          className={styles.cardImage}
        />
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(addItem(item))}
          className={styles.cartBtn}
        >
          <MdShoppingBasket className={styles.icon} />
        </motion.div>
      </div>
      <div className="flex-1 w-full flex justify-end items-end flex-col -mt-6">
        <p className={styles.cardName}>{title}</p>
        <p className={styles.calories}>{calories} Calories</p>
        <p className={styles.price}>
          <span className="text-sm text-red-500">$</span>
          {price}
        </p>
      </div>
    </div>
  );
}
