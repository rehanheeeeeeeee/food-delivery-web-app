import Image from "next/image";
import React, { useState } from "react";
import { IoMdBasket } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import { auth, provider } from "../firebase";
import { SelectUser } from "../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { MdAdd } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { selectCartItems, setShowCart } from "../redux/CartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const headerOptions = ["Home", "Menu", "About Us", "Service"];
  const user = useSelector(SelectUser);
  const styles = {
    wrapper:
      "fixed bg-primary top-0 w-full z-10 pb-3 pt-4 px-16 max-md:px-4 max-md:p-3 flex justify-center",
    bigScreenContainer:
      "flex w-full flex-row h-full items-center max-md:hidden",
    bigScreenContentContainer:
      "justify-between flex flex-row items-center w-full gap-2",
    options: "flex gap-8 items-center",
    option:
      "text-base text-textColor hover:text-headingColor transiton-all ease-in-out duration-100 cursor-pointer",
    basketIcon: "text-textColor text-3xl ml-6 cursor-pointer max-md:ml-0",
    headerLeft: "flex items-center gap-2",
    headerRight: "flex items-center gap-2",
    dropDown: `flex flex-col absolute -bottom-24 max-md:-bottom-64 right-6 w-40 bg-gray-50 items-center shadow-xl rounded-lg `,
    dropDownOption: (hide) =>
      `flex flex-row items-center w-full h-full ${
        hide && "md:hidden"
      } space-x-3 text-md hover:bg-slate-200 px-4 py-2  transition-all duration-100 ease-in rounded-lg`,
  };
  const [dropDown, setDropDown] = useState(false);
  const cartItems = useSelector(selectCartItems);

  const HeaderOption = ({ name }) => <li className={styles.option}>{name}</li>;
  const HeaderRight = () => (
    <Link href="/">
      <div className={styles.headerRight}>
        <Image
          src={"/assets/logo.png"}
          width={20}
          height={20}
          className="w-8 object-cover"
          alt="logo"
        />

        <p className="text-headingColor text-xl font-bold">City</p>
      </div>
    </Link>
  );

  const BasketIcon = () => (
    <div
      className="relative bottom-1 max-md:bottom-0"
      onClick={() => dispatch(setShowCart())}
    >
      <IoMdBasket className={styles.basketIcon} />
      {cartItems.length !== 0 && (
        <div className="absolute rounded-full -top-2 -right-1 bg-cartNumBg w-5 h-5 flex justify-center items-center">
          <p className="text-white text-xs font-semibold text-center">
            {cartItems.length}
          </p>
        </div>
      )}
    </div>
  );

  const logIn = () => {
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  const User = () => {
    return (
      <div
        onClick={!user ? logIn : () => setDropDown((prevValue) => !prevValue)}
        className="flex gap-3 relative bottom-1 ml-4 cursor-pointer"
      >
        <motion.img
          whileTap={{ scale: 0.8 }}
          src={user?.photoURL || "/assets/avatar.png"}
          width={40}
          height={40}
          className="h-[45px] w-[45px]  drop-shadow-xl rounded-full"
        />
        {user && dropDown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            className={styles.dropDown}
          >
            {user?.email === "rehantosif4@gmail.com" && (
              <Link href="/create" className={styles.dropDownOption(false)}>
                <p>Add Item</p>
                <MdAdd size={18} />
              </Link>
            )}
            {headerOptions?.map((headerOption, index) => (
              <div key={index} className={styles.dropDownOption(true)}>
                <p>{headerOption}</p>
              </div>
            ))}
            <div
              onClick={logOut}
              className="flex flex-row justify-center w-11/12 rounded-lg shadow-md items-center space-x-3 m-2 text-md bg-slate-200 hover:bg-slate-300 px-4 py-2  transition-all duration-100 ease-in"
            >
              <p>Logout</p>
              <FiLogOut />
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <header className={styles.wrapper}>
      {/* Desktop And Tablet*/}
      <div className={styles.bigScreenContainer}>
        <div className={styles.bigScreenContentContainer}>
          <HeaderRight />

          <div className={styles.headerLeft}>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className={styles.options}
            >
              {headerOptions.map((option, index) => (
                <HeaderOption name={option} key={index} />
              ))}
            </motion.ul>
            <BasketIcon />
            <User />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-row w-full h-full justify-between items-center md:hidden mr-2">
        <BasketIcon />
        <HeaderRight />
        <User />
      </div>
    </header>
  );
}
