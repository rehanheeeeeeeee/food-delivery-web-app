import React from "react";
import Form from "../components/Create/Form";

const styles = {
  container: "min-h-screen w-full flex items-start mt-20 justify-center",
  wrapper:
    "flex flex-col items-left gap-2 justify-center w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4",
};

export default function Create() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Form />
      </div>
    </div>
  );
}
