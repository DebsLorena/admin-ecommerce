import { useState } from "react";
import "./newUser.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import app from "../../firebase";
import { addUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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
          const user = { ...inputs, img: downloadURL };
          addUser(user, dispatch);
          console.log(user)
        });
      }
    );
    alert('Usuário criado com sucesso!');
    // history.replace("/users");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
        <label>Imagem</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label>Nome</label>
          <input 
          name="title"
          type="text" 
          placeholder="Maria"
          onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Sobrenome</label>
          <input 
          name="sobrenome"
          type="text" 
          placeholder="Maria Silva" 
          onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
          name="email" 
          type="email" 
          placeholder="mariasilva@gmail.com"
          onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input 
          name="password" 
          type="password" 
          placeholder="******" 
          onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input 
          nome="telefone"
          type="text" 
          placeholder="34 98852 1234"
          onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input 
          nome="adress"
          type="text" 
          placeholder="New York | USA" 
          onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" onChange={handleChange}>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button onClick={handleClick} className="newUserButton">Criar</button>
      </form>
    </div>
  );
}