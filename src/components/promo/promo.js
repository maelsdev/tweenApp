import "../../css/style.min.css";

function Promo() {
  return (
    <div>
      <section class="promo">
        <div class="container">
          <div class="row promo_row">
            <div class="col-md-10 offset-md-1">
              <h1 class="promo_title">
                ЯКІСНИЙ
                <span>РЕМОНТ</span>
                <br />
                АВТОМОБІЛІВ У КИЄВІ
              </h1>
              <h2 class="promo_subtitle">
                ПОВНИЙ СПЕКТР РЕМОНТНИХ РОБІТ: <br />
                ВІД ДІАГНОСТИКИ ДО КАПІТАЛЬНОГО РЕМОНТУ
              </h2>
              <div class="promo_start">
                <a href="#first">
                  <div class="promo_start_text">
                    PUSH <br />
                    TO <br />
                    START
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Promo;
