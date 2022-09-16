import logo from "./logo.svg";
import "./style.css";

function Header() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <ul className="menu">
          <li>
            <a href="servicos">Serviços</a>
          </li>
          <li>
            <a href="contato">Contato</a>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
