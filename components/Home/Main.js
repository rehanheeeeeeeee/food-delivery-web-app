import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";

const styles = {
  container:
    "grid grid-cols-1 md:grid-cols-2 py-4 w-full gap-2 md:px-16 px-4 max-md:space-y-1",
  hero: "w-full py-2 ",
};

export default function Main() {
  return (
    <div className={styles.container}>
      <Hero />
      <Hero2 />
    </div>
  );
}
