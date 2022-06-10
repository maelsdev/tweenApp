import "../../css/style.min.css";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DataBase from "../dataBase/dataBase";

function Header() {
  const { buttonsData,menuInfo } = DataBase();
  const [active, setActive] = useState("");

  const onActive = (e) => {
    setActive(e.target.name);
  };

  const buttons = buttonsData.map(({ id, link, label }) => {
    const activeItem = active === label ? "menu_item menu_active" : "menu_item";
    return (
      <li className={activeItem} key={id}>
        <AnchorLink href={link} name={label}>
          {label}
        </AnchorLink>
      </li>
    );
  });

  const adress = menuInfo.map(({ adress, hours }) => { 
    
    return (
     
      <div className="subheader_adress">
        <img src="img/header/location.webp" alt="adress" /> {adress}
        <div className="subheader_hours">Щодня з {hours}</div>
      </div>
    )
  })

  const telInfo = menuInfo.map(({ telNumber, telegram }) => { 
    return (
      <>
      <div className="subheader_call">
                  <img src="img/header/call.webp" alt="tel" />
                  Телефон:
                  <a
                    href={`https://telegram.me/${telegram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="social"
                      src="img/header/telegram.svg"
                      alt="telegram"
                    />
                  </a>
                  <a
                    href={`viber://chat?number=%2B${telNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="social"
                      src="img/header/viber-svgrepo-com.svg"
                      alt="viber"
                    />
                  </a>
                </div>
                <div className="subheader_tel">
                  <a href={`tel:+${telNumber}`}>+380(98)12-12-011</a>
                </div>
      </>
    )
  })

  return (
    <>
      <header id="home">
        <nav>
          <div className="container">
            <ul className="menu" onClick={onActive}>
              {buttons}
            </ul>
          </div>
          <div className="mobile_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mobile_tel">
            <a href="tel:+380981212011">+380(98)12-12-011</a>
            <div className="mobile_tel_social">
              <a
                href="https://telegram.me/pro_s_tar"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social"
                  src="img/header/telegram.svg"
                  alt="telegram"
                />
              </a>
            </div>
            <div className="mobile_tel_social">
              <a
                href="viber://chat?number=%2B380981212011"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social"
                  src="img/header/viber-svgrepo-com.svg"
                  alt="viber"
                />
              </a>
            </div>
          </div>
        </nav>
        <div className="subheader">
          <div className="container">
            <div className="row">
              <div className=".col-6 col-md-5">
                <a href="#home">
                  <img
                    src="img/header/logo.svg"
                    alt="logo"
                    className="subheader_logo"
                  />
                </a>
                <div className="subheader_text">Ремонтуємо як для себе</div>
              </div>
              <div className=".col-3 col-md-3">{adress}</div>
              <div className=".col-3 col-md-3 offset-md-1">
                { telInfo}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
