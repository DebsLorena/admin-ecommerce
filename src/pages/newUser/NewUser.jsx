import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome</label>
          <input type="text" placeholder="Maria" />
        </div>
        <div className="newUserItem">
          <label>Sobrenome</label>
          <input type="text" placeholder="Maria Silva" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="mariasilva@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="******" />
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="34 98852 1234" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Criar</button>
      </form>
    </div>
  );
}