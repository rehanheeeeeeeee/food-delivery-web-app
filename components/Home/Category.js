import Link from "next/link";
import React from "react";
import { IoFastFood } from "react-icons/io5";

const styles = {
  container:
    "group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl hover:bg-red-600 transition-all duration-200 ease-in-out flex flex-col justify-center items-center gap-3",
  iconContainer:
    "w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-card ",
  icon: "text-card group-hover:text-textColor text-lg",
  title: "text-sm text-textColor group-hover:text-card",
};

export default function Category({ option }) {
  const { name, urlParamName } = option;
  return (
    <Link href={`/?category=${urlParamName}`} scroll={false}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <IoFastFood className={styles.icon} />
        </div>
        <p className={styles.title}>{name}</p>
      </div>
    </Link>
  );
}
