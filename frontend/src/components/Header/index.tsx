import logo from "../../assets/img/header-icon.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/alexx.bandeira?igshid=YmMyMTA2M2Y=">@devbandeira.ig</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
