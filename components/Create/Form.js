import React, { useState } from "react";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";
import { SiJusteat } from "react-icons/si";
import { BiDollar } from "react-icons/bi";
import SelectImage from "./SelectImage";
import Select from "./Select";
import { submitItem } from "./FileFunctions";

const validationSchema = yup.object({
  title: yup.string().required(),
  calories: yup.string().required(),
  price: yup.string().required(),
  category: yup.string().required(),
});

const styles = {
  validate: (uploaded) =>
    `w-full rounded-lg p-2 text-center mb-3 text-medium font-semibold ${
      uploaded ? "bg-emerald-400 text-emerald-800" : "bg-red-400 text-red-800"
    }`,
  inputContainer: "flex border-b border-gray-300 py-1 items-center gap-2",
  input: "bg-primary outline-none flex-1",
  icon: "w-5 h-5 text-gray-600",
};

export default function Form() {
  const [isLoading, setIsloading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [msg, setMsg] = useState("");

  const Input = ({ name, placeholder }) => (
    <Field className={styles.input} placeholder={placeholder} name={name} />
  );

  const Button = ({ isValid, isSubmitting, handleSubmit, values }) => (
    <div className="w-full p-2 flex justify-end">
      <button
        disabled={
          isSubmitting ||
          !imageUrl ||
          values.category === "Select Category" ||
          !isValid
        }
        onClick={handleSubmit}
        className={`${
          isSubmitting ||
          !imageUrl ||
          values.category === "Select Category" ||
          !isValid
            ? "bg-gray-300"
            : "bg-green-400"
        } w-full md:w-24 rounded-md p-3 text-white text-semibold`}
      >
        Save
      </button>
    </div>
  );

  return (
    <Formik
      initialValues={{ title: "", category: "", calories: "", price: "" }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        submitItem(
          values,
          resetForm,
          setSubmitting,
          setMsg,
          setImageUrl,
          imageUrl
        );
      }}
      validationSchema={validationSchema}
      validateOnMount={true}
    >
      {({ values, errors, handleSubmit, touched, isSubmitting, isValid }) => (
        <>
          {((touched.title && errors.title) ||
            (touched.price && errors.price) ||
            (touched.calories && errors.calories) ||
            (touched.category && values.category === "Select Category") ||
            msg) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.validate(msg)}
            >
              {msg ||
                (touched.title && errors.title && "Title is Required") ||
                (touched.calories &&
                  errors.calories &&
                  "Calories is Required") ||
                (touched.price && errors.price && "Price is Required") ||
                (touched.category &&
                  values.category === "Select Category" &&
                  "Category is Required")}
            </motion.p>
          )}
          <div className={styles.inputContainer}>
            <MdFastfood className={styles.icon} />
            <Input placeholder="Give me a title..." name="title" />
          </div>
          <Select />
          <SelectImage
            isLoading={isLoading}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setIsLoading={setIsloading}
            setMsg={setMsg}
          />
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 my-2">
            <div className={styles.inputContainer}>
              <SiJusteat className={styles.icon} />
              <Input placeholder="Calories" name="calories" />
            </div>
            <div className={styles.inputContainer}>
              <BiDollar className={styles.icon} />
              <Input placeholder="Price" name="price" />
            </div>
          </div>
          <Button
            isValid={isValid}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            values={values}
          />
        </>
      )}
    </Formik>
  );
}
