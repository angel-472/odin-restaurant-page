require('../style.css')

import { HomePage } from './pages/homePage.js';
import { MenuPage } from './pages/menuPage.js';
import { ContactPage } from './pages/contactPage.js';

class RestaurantPageApp {
  constructor(){
    this.pages = {
      home: new HomePage(this),
      menu: new MenuPage(this),
      contact: new ContactPage(this),
    };
    this.setPage('home');

    //button listeners
    document.getElementById("btn-home").addEventListener('click', () => {
      this.setPage('home');
    });
    document.getElementById("btn-menu").addEventListener('click', () => {
      this.setPage('menu');
    });
    document.getElementById("btn-contact").addEventListener('click', () => {
      this.setPage('contact');
    });
  }
  setPage(id){
    if(this.pages[id] == undefined){
      console.log("Tried to load a RestaurantPageApp page that does not exist!")
      return;
    }
    let page = this.pages[id];
    let html = page.getHtml();
    document.getElementById("content").innerHTML = html;
    page.init();

    this.currentPage = id;
  }
}

let app = new RestaurantPageApp();
window.appRef = app;

console.log(app)
