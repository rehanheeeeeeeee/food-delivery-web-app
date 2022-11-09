import React from "react";
import Categories from "./Categories";
import RowContainer from "./RowContainer";

const styles = {
  container: "w-full flex flex-col px-6 md:px-16",
  header:
    "text-lg font-semibold uppercase relative text-gray-900 before:content before:h-1 before:rounded-lg before:w-24 before:absolute before:bg-black before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transiton-all ease-in-out duration-100",
};

export default function MenuContainer({ items }) {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Our Hot Dishes</p>
      <Categories />
      <RowContainer items={items} scrollbar={false} />
    </div>
  );
}
