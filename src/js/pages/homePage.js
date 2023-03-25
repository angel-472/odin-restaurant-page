import { Page } from './page.js'

export class HomePage extends Page {
  constructor(app){
    super(app);
  }
  getHtml(){
    let html = `
    <div id="home-page">
      <div id="home-page-content">
        <h1>Best Cat Cafe In Town</h1>
        <h2>We have the best food for your entire family!<h2>
        <button id="btn-home-menu">See Our Menu</button>
      </div>
    </div>`;
    return html;
  }
  init(){
    document.getElementById("btn-home-menu").addEventListener('click', () => {
      this.app.setPage('menu');
    })
  }
}
