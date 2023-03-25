import { Page } from './page.js'

export class ContactPage extends Page {
  constructor(app){
    super(app);
  }
  getHtml(){
    let html = `
    <div id="contact-page">
      <div id="contact-page-content">
        <h1>Contact Us</h1>
        <div id="contact-page-info">
          <p><i class="fa-solid fa-shop"></i></i></i> 123 Main Street Suite 456 Anytown, USA 12345</p>
          <p><i class="fa-solid fa-phone"></i></i> +1 (123) 555-1234</p>
          <p><i class="fa-solid fa-envelope"></i> example@email.com</p>
        </div>
      </div>
    </div>`
    return html;
  }
}
