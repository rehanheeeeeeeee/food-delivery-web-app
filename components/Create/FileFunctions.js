import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const submitItem = (
  values,
  resetForm,
  setSubmitting,
  setMsg,
  setImageUrl,
  imageUrl
) => {
  console.log(values);
  const data = {
    ...values,
    imageUrl,
    quantity: 1,
    createdAt: serverTimestamp(),
  };
  const docRef = doc(db, "foodItems", uuid());
  setDoc(docRef, data, { merge: true }).then(() => {
    setImageUrl("");
    resetForm({
      title: "",
      carlories: "",
      price: "",
      category: "Select Category",
    });
    setMsg("Item Added Successfully");
    setTimeout(() => {
      setMsg("");
    }, 4000);
  });
};

export const handleFile = (event, setIsloading, setImageUrl, setMsg) => {
  const types = ["png", "jpg", "jpeg", "svg", "raw"];
  const [, extension] = event.target.files[0].name.split(".");
  if (types.includes(extension)) {
    setIsloading(true);
    const uid = uuid();
    const storageRef = ref(storage, `Images/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        alert(error.message);
        setIsloading(false);
      },
      () => {
        const getUrl = async () => {
          await getDownloadURL(storageRef).then((url) => {
            setImageUrl(url);
            setIsloading(false);
            setMsg("Image Uploaded 😊");
            setTimeout(() => {
              setMsg("");
            }, 4000);
          });
        };
        getUrl();
      }
    );
  } else {
    alert("Only Images Can be Uploaded");
  }
};

export const deleteImage = (setIsloading, imageUrl, setImageUrl, setMsg) => {
  setIsloading(true);
  const deleteRef = ref(storage, imageUrl);
  deleteObject(deleteRef).then(() => {
    setImageUrl("");
    setIsloading(false);
    setMsg("Image Deleted Successfully 😊");
    setTimeout(() => {
      setMsg("");
    }, 4000);
  });
};
