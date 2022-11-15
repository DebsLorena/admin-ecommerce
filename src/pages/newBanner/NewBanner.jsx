import { useState } from "react";
import "./newBanner.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addBanner } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewBanner() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const banner = { ...inputs, img: downloadURL, categories: cat };
          addBanner(banner, dispatch);
        });
      }
    );
  };

  return (
    <div className="newBanner">
      <h1 className="addBannerTitle">Novo Banner</h1>
      <form className="addBannerForm">
        <div className="addBannerItem">
          <label>Imagem</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addBannerItem">
          <label>Título</label>
          <input
            name="title"
            type="text"
            placeholder="50% off"
            onChange={handleChange}
          />
        </div>
        <div className="addBannerItem">
          <label>Categorias</label>
          <input type="text" placeholder="papelaria" onChange={handleCat} />
        </div>
        <button onClick={handleClick} className="addBannerButton">
          Criar
        </button>
      </form>
    </div>
  );
}