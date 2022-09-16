import logo1 from "./logo1.jpg";
import logo2 from "./logo2.jpg";
import logo3 from "./logo3.jpg";
import "./style.css";

function Servicos() {
  return (
    <>
      <header className="App-servicos">
        <ul className="card">
          <li className="card-list">
            <img src={logo1} alt="logo" className="image" />
            <p>Configurações de servidores em nuvem</p>
          </li>
          <li className="card-list">
            <img src={logo2} alt="logo" className="image" />
            <p>Web design</p>
          </li>
          <li className="card-list">
            <img src={logo3} alt="logo" className="image" />
            <p>Criação de aplicativos</p>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Servicos;
