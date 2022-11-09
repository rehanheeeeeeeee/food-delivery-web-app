import Image from "next/image";
import React from "react";

const styles = {
  hero: "w-full py-2 space-y-6",
  delivery:
    " flex items-center w-44 rounded-3xl bg-orange-100 px-3 py-1 justify-around",
  deliveryLogo: "bg-white rounded-full w-9 h-9 shadow-lg flex items-center",
  heading: "text-4xl lg:text-5xl font-bold text-gray-800 line-height-4",
  heading2: "text-6xl text-orange-600 font-bold leading-snug",
  button:
    "bg-orange-500 border bg-gradient-to-br from-orange-400 transiton-all md:w-auto duration-100 ease-in-out to-orange-500 w-full rounded-md p-2 shadow-md hover:shadow-lg",
};

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.delivery}>
        <p className="text-sm font-semibold whitespace-nowrap text-orange-600">
          Bike Delivery
        </p>
        <div className={styles.deliveryLogo}>
          <Image src={"/assets/delivery.png"} width={30} height={30} />
        </div>
      </div>
      <div className="flex flex-col">
        <p className={styles.heading}>
          The Fastest Delivery in{" "}
          <span className={styles.heading2}>Your City</span>
        </p>
      </div>
      <p className="text-sm my-7 w-full text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta a
        dui nec pretium. Vivamus quis egestas lacus. In malesuada sed neque sed
        malesuada. Etiam a vestibulum ligula. Donec non mi non augue fermentum
        facilisis a vel nulla. Aliquam condimentum est ut neque tincidunt, ut
        iaculis est tempor. Nunc at ex mattis, dapibus dui ut, porttitor urna.
        Maecenas et ex mi.{" "}
      </p>
      <button className={styles.button}>Order Now</button>
    </div>
  );
}
