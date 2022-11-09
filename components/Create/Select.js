import { Field } from "formik";
import React from "react";
import categories from "../../public/data/options";

const styles = {
  option:
    "text-base p-2 border-0 outline-none capitalize bg-white text-headingColor",
  select:
    "p-2 rounded-md outline-none my-2 flex flex-col divide divide-gray-400 bg-white",
};

const Select = () => (
  <Field as="select" name="category" className={styles.select}>
    <option className={styles.option} value="Select Category">
      Select Category
    </option>
    {categories.map((category) => (
      <option
        className={styles.option}
        key={category.id}
        value={category.urlParamName}
      >
        {category.name}
      </option>
    ))}
  </Field>
);
export default Select;
