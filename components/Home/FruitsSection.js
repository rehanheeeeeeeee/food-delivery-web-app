import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";

const styles = {
  container: "w-full scrollbar-hide flex-col justify-center my-4",
  wrapper: "w-full flex items-center justify-between px-6 md:px-16",
  header:
    "text-lg font-semibold uppercase relative text-gray-900 before:content before:h-1 before:rounded-lg before:w-24 before:absolute before:bg-black before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transiton-all ease-in-out duration-100",
  icon: "w-8 h-8 rounded-lg bg-orange-300 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg hover:bg-orange-500 flex items-center justify-center",
};

export default function FruitsSection({ fruits }) {
  const [scroll, setScroll] = useState(0);

  console.log(scroll);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.header}>Our fresh & Healthy Fruits</p>
        <div className="hidden md:flex gap-3 items-center">
          <motion.div
            onClick={() => {
              const scrollValue = -220;
              setScroll(scrollValue);
            }}
            whileTap={{ scale: 0.75 }}
            className={styles.icon}
          >
            <MdChevronLeft />
          </motion.div>
          <motion.div
            onClick={() => {
              const scrollValue = 220;
              setScroll(scrollValue);
            }}
            whileTap={{ scale: 0.75 }}
            className={styles.icon}
          >
            <MdChevronRight />
          </motion.div>
        </div>
      </div>
      <RowContainer items={fruits} scrollValue={scroll} scrollbar />
    </section>
  );
}
