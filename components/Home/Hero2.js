import Image from "next/image";
import React from "react";

const styles = {
  container:
    "w-full relative flex items-center justify-center max-lg:ml-3 max-md:ml-0 scrollbar-hide",
  bgImage:
    "h-full xl:w-[60%] xl:h-[90%] w-1/2 max-xl:h-5/6 max-xl:w-340 md:ml-auto",
  contentContianer:
    "h-full w-full gap-2 absolute flex flex-wrap items-center justify-center",
  content:
    "min-w-170 bg-cardOverlay backdrop-blur-md px-4 py-5 rounded-3xl flex flex-col justify-center items-center shadow-lg",
};

const carsData = [
  {
    name: "Ice Cream",
    desp: "Chocolate & Vanilla",
    image: "i1.png",
    price: 5.25,
  },
  {
    name: "Strawberry",
    desp: "Fresh Strawberries",
    image: "f1.png",
    price: 13.5,
  },
  {
    name: "Chicken Kebab",
    desp: "Mixed Kebab Plate",
    image: "c3.png",
    price: 8.25,
  },
  {
    name: "Fish Kebab",
    desp: "Mixed Fish Kebab",
    image: "fi1.png",
    price: 9.25,
  },
];

const Card = ({ card }) => (
  <div className={styles.content}>
    <Image
      src={`/assets/${card.image}`}
      width={1920}
      height={1080}
      className="-mt-24 w-32"
    />
    <p className="text-base  whitespace-nowrap font-semibold mt-2 text-textColor">
      {card.name}
    </p>
    <p className="text-center whitespace-nowrap my-1 text-sm font-semibold text-lighttextGray">
      {card.desp}
    </p>
    <p className="text-sm text-textColor font-semibold">
      <span className="text-xs text-red-600">$</span>
      {card.price}
    </p>
  </div>
);

export default function Hero2() {
  return (
    <div className={styles.container}>
      <Image
        src={"/assets/heroBg.png"}
        width={100}
        height={100}
        className={styles.bgImage}
      />
      <div className={styles.contentContianer}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-20 place-items-center">
          {carsData.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
