import React from "react";
import { MdCloudUpload } from "react-icons/md";
import Loader from "./Loader";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { deleteImage, handleFile } from "./FileFunctions";

const styles = {
  fileUpload:
    "rounded-lg w-full h-full flex flex-col text-gray-500 cursor-pointer items-center justify-center",
  imageContianer:
    "flex relative justify-center items-center w-full h-225 border-2  border-dotted border-gray-300 rounded-lg",
};

export default function SelectImage({
  imageUrl,
  isLoading,
  setIsLoading,
  setMsg,
  setImageUrl,
}) {
  return (
    <div className={styles.imageContianer}>
      {imageUrl ? (
        <div className="w-fit h-fit relative">
          <Image
            src={imageUrl}
            height={70}
            width={70}
            className="w-44 h-44 object-contain"
            alt=""
          />
          <div
            onClick={() =>
              deleteImage(setIsLoading, imageUrl, setImageUrl, setMsg)
            }
            className="absolute right-5 -bottom-2 cursor-pointer bg-red-500 p-3 rounded-full"
          >
            <FaTrash className="text-white text-xs" />
          </div>
        </div>
      ) : (
        <>
          <label for="file-upload" className={styles.fileUpload}>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <MdCloudUpload size={28} />
                <p> Click Here to Upload</p>
              </>
            )}
          </label>
          <input
            id="file-upload"
            className="hidden"
            type="file"
            onChange={(event) =>
              handleFile(event, setIsLoading, setImageUrl, setMsg)
            }
          />
        </>
      )}
    </div>
  );
}
