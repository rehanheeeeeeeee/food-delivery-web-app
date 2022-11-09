import React from "react";
import Main from "../components/Home/Main";
import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import FruitsSection from "../components/Home/FruitsSection";
import MenuContainer from "../components/Home/MenuContainer";
import CartContainer from "../components/Home/CartContainer";
import { useSelector } from "react-redux";
import { selectShowCart } from "../redux/CartSlice";

export async function getServerSideProps(context) {
  const category = context.query.category || "chicken";
  const snapshot = await getDocs(
    query(
      collection(db, "foodItems"),
      where("category", "==", category),
      orderBy("createdAt", "desc")
    )
  );
  let items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  const q = query(
    collection(db, "foodItems"),
    where("category", "==", "fruits", orderBy("createdAt", "desc"))
  );
  let fruits = [];
  const fruitsSnapshot = await getDocs(q);
  fruitsSnapshot.forEach((fruit) =>
    fruits.push({ id: fruit.id, ...fruit.data() })
  );
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
      fruits: JSON.parse(JSON.stringify(fruits)),
    },
  };
}

export default function Home({ items, fruits }) {
  const showCart = useSelector(selectShowCart);
  return (
    <div className="flex h-[100%] flex-col items-center justify-center mt-20">
      <Main />
      <FruitsSection fruits={fruits} />
      <MenuContainer items={items} />
      {showCart && <CartContainer />}
    </div>
  );
}
