function Footer() { 
    return (
        <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-3 col-md-6">
            <a href="#home"><img src="img/header/logo.svg" alt="logo" /></a>
            <div class="logo_title">
              Станція
              <span
                >Технічного <br />
                Обслуговування</span
              >
              м. Київ (Лісова)
            </div>
          </div>

          <div class="col-md-3">
            <div class="contacts">КОНТАКТИ</div>
            <div class="contacts_desc">
              <div class="contacts_hours">
                Працюємо щоденно з <b>09:00</b> до <b>19:00</b>
              </div>
              <div class="contacts_adress">вул. Гродненська, 24</div>
              <div class="contacts_desc_tel">
                <a href="tel:+380632590444"
                  ><span><b>+38 (063) 259 04 44</b></span></a
                >
              </div>
              <div class="contacts_email">
                <a href="mailto:autoservice4kolesa@gmail.com"
                  >autoservice4kolesa@gmail.com</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <div class="footer_social">
                <a href="#" class="footer_social_item">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="footer_social_item">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="footer_social_item">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="footer_social_item">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer