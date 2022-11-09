import React, { useEffect, useRef } from "react";
import Card from "./Card";

const styles = {
  container: (scrollbar) =>
    `w-full flex items-center justify-start ${
      scrollbar
        ? "overflow-x-scroll scroll-smooth p-7 md:px-14"
        : "flex-wrap justify-center overflow-x-hidden "
    } p-4 gap-4 scrollbar-hide`,
};

export default function RowContainer({ items, scrollValue, scrollbar }) {
  const rowRef = useRef();
  useEffect(() => {
    rowRef.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div ref={rowRef} className={styles.container(scrollbar)}>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
