import '../../css/style.min.css'

function Header() { 
    return (
        <>
        <header id="home">
      <nav>
        <div class="container">
          <ul class="menu">
            <li class="menu_item"><a href="#home">Головна</a></li>
            <li class="menu_item"><a href="#service">Послуги</a></li>
            <li class="menu_item"><a href="#prices">Ціни</a></li>
            <li class="menu_item"><a href="#home">Запчастини</a></li>
            <li class="menu_item"><a href="#footer">Контакти</a></li>
          </ul>
        </div>
        <div class="mobile_menu"><span></span><span></span><span></span></div>
        <div class="mobile_tel">
          <a href="tel:+380981212011">+380(98)12-12-011</a>
          <div class="mobile_tel_social">
            <a href="https://telegram.me/pro_s_tar" target="_blank"
              ><img class="social" src="img/header/telegram.svg" alt="telegram"
            /></a>
          </div>
          <div class="mobile_tel_social">
            <a href="viber://chat?number=%2B380981212011" target="_blank"
              ><img
                class="social"
                src="img/header/viber-svgrepo-com.svg"
                alt="viber"
            /></a>
          </div>
        </div>
      </nav>
      <div class="subheader">
        <div class="container">
          <div class="row">
            <div class=".col-6 col-md-5">
              <a href="#"
                ><img
                  src="img/header/logo.svg"
                  alt="logo"
                  class="subheader_logo"
              /></a>
              <div class="subheader_text">Ремонтуємо як для себе</div>
            </div>
            <div class=".col-3 col-md-3">
              <div class="subheader_adress">
                <img src="img/header/location.webp" alt="adress" /> м. Київ,
                вул. Гродненська, 24
                <div class="subheader_hours">Щодня з 09:00 до 19:00</div>
              </div>
            </div>
            <div class=".col-3 col-md-3 offset-md-1">
              <div class="subheader_call">
                <img src="img/header/call.webp" alt="tel" />
                Телефон:
                <a href="https://telegram.me/pro_s_tar" target="_blank"
                  ><img
                    class="social"
                    src="img/header/telegram.svg"
                    alt="telegram"
                /></a>
                <a href="viber://chat?number=%2B380981212011" target="_blank"
                  ><img
                    class="social"
                    src="img/header/viber-svgrepo-com.svg"
                    alt="viber"
                /></a>
              </div>
              <div class="subheader_tel">
                <a href="tel:+380981212011">+380(98)12-12-011</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header></>
    )
}
export default Header;