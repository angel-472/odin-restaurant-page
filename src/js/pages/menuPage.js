import { Page } from './page.js'

const catCafeMenu = {
  food: [
    {
      name: "Tuna Sandwich",
      description: "Tuna, mayo, and lettuce on whole wheat bread",
      price: 7.99,
      image: "/img/food/tuna-sandwich.png"
    },
    {
      name: "Grilled Cheese",
      description: "Melted cheddar cheese on sourdough bread",
      price: 6.99,
      image: "/img/food/grilled-cheese.jpg"
    },
    {
      name: "Fish Plate",
      description: "Grilled salmon served with steamed veggies and a side of rice",
      price: 12.99,
      image: "/img/food/fish-plate.jpg"
    },
    {
      name: "Croissant",
      description: "Freshly baked buttery croissant",
      price: 3.99,
      image: "/img/food/croissant.jpg"
    },
    {
      name: "Bagel with Cream Cheese",
      description: "Toasted bagel with cream cheese",
      price: 5.99,
      image: "/img/food/bagel.jpg"
    }
  ],
  drinks: [
    {
      name: "Catpuccino",
      description: "Espresso with steamed milk, topped with foam art of a cat",
      price: 5.99,
      image: "/img/food/catpuccino.jpg"
    },
    {
      name: "Catnip Tea",
      description: "Herbal tea made with organic catnip",
      price: 3.99,
      image: "/img/food/catnip-tea.jpg"
    },
    {
      name: "Iced Mocha",
      description: "Iced coffee with chocolate syrup and whipped cream",
      price: 4.99,
      image: "/img/food/iced-mocha.jpg"
    },
    {
      name: "Matcha Latte",
      description: "Green tea latte made with organic matcha",
      price: 6.99,
      image: "/img/food/matcha-latte.jpg"
    }
  ],
  treats: [
    {
      name: "Cat Cookies",
      description: "Freshly baked cookies in the shape of cats",
      price: 2.99,
      image: "/img/food/cat-cookies.jpg"
    },
    {
      name: "Cat Treats",
      description: "Organic cat treats made with all-natural ingredients",
      price: 3.99,
      image: "/img/food/cat-treats.jpg"
    },
    {
      name: "Cat Cake",
      description: "Vanilla cake with cream cheese frosting and decorated with cat faces",
      price: 6.99,
      image: "/img/food/cat-cake.jpg"
    },
    {
      name: "Fruit Salad",
      description: "Fresh fruit salad with honey dressing",
      price: 5.99,
      image: "/img/food/fruit-salad.jpg"
    }
  ]
};

export class MenuPage extends Page {
  constructor(app){
    super(app);
  }
  getFoodCard(foodObject){
    let div = document.createElement('div');
    div.classList.add('food-card');
    let imgUrl = foodObject.image;
    div.innerHTML = `
    <img src="${imgUrl || ''}" class="food-image">
    <div class="food-card-info">
      <p class="food-name">${foodObject.name}</p>
      <p class="food-description">${foodObject.description}</p>
      <p class="food-price">$${foodObject.price}</p>
    </div>`;
    return div;
  }
  init(){

  }
  getHtml(){
    let container = document.createElement('div');
    container.id = "menu-page";
    let title = document.createElement('h1');
    title.innerText = "The Menu";
    container.appendChild(title);
    Object.keys(catCafeMenu).forEach((category) => {
      let heading = document.createElement('h2');
      heading.innerText = category;
      container.appendChild(heading);
      let foodsDiv = document.createElement('div');
      foodsDiv.classList.add("food-cards-container");
      catCafeMenu[category].forEach((food) => {
        let card = this.getFoodCard(food);
        foodsDiv.appendChild(card);
      });
      container.appendChild(foodsDiv);
    });
    let html = container.outerHTML;
    return html;
  }
}
