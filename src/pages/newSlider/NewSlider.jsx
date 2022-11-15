import { useState } from "react";
import "./newSlider.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import app from "../../firebase";
import { addSlider } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewSlider() {
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
          const slider = { ...inputs, img: downloadURL, categories: cat };
          addSlider(slider, dispatch);
        });
      }
    );
  };

  return (
    <div className="newSlider">
      <h1 className="addSliderTitle">Novo Slider</h1>
      <form className="addSliderForm">
        <div className="addSliderItem">
          <label>Imagem</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addSliderItem">
          <label>Título</label>
          <input
            name="title"
            type="text"
            placeholder="Canetas com 50% OFF"
            onChange={handleChange}
          />
        </div>
        <div className="addSliderItem">
          <label>Descrição</label>
          <input
            name="desc"
            type="text"
            placeholder="Aproveite as nossas ofertas"
            onChange={handleChange}
          />
        </div>
        <div className="addSliderItem">
          <label>Categorias</label>
          <input type="text" placeholder="Escrita" onChange={handleCat} />
        </div>
        <button onClick={handleClick} className="addSliderButton">
          Criar
        </button>
      </form>
    </div>
  );
}