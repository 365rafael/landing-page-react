import logo from "./logo.svg";
import "./style.css";

function Contato() {
  return (
    <>
      <div className="App-contato">
        <div className="contato">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Contato</h1>
        </div>
        <div className="form-box">
          <form className="form">
            <input className="input" placeholder="Nome:"></input>
            <input className="input" placeholder="Email:"></input>
            <input className="input" placeholder="Telefone:"></input>
            <textarea className="mensagem"></textarea>
            <button className="button">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contato;
