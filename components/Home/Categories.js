import React from "react";
import Category from "./Category";
import options from "../../public/data/options";

const styles = {
  wrapper:
    "flex w-full my-8 items-center justify-start lg:justify-center scrollbar-hide gap-8 overflow-x-scroll",
};

function Categories() {
  return (
    <div className={styles.wrapper}>
      {options.map((option, index) => (
        <Category key={index} option={option} />
      ))}
    </div>
  );
}

export default Categories;
