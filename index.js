class Component {
  render(){
    this.container.innerHTML = this.content
  }
}

class ProductCard extends Component{
  isOpen = false

  constructor(product, parentElement){
    super();
    const { name, description, price} = product;
    this.name = name
    this.description = description
    this.price = price
    this.parentElement = parentElement

    this.container = document.createElement("div")
    this.container.classList.add("product-card")
    this.container.addEventListener("click", this.clickHandler.bind(this))

    this.content = this.getContent()

    this.render()

    this.parentElement.appendChild(this.container)
  }

  clickHandler(){
    console.log(this);
    this.isOpen = !this.isOpen;
    this.content = this.getContent()
    this.render();
  }


  getContent(){
    return  `
    <div class="product-card__header ">${this.name}</div>
    ${
      this.isOpen
        ? `<div class="product-card_description">${this.description}</div>`
        : ""
    }
    <div class="product-card__price">${this.price}</div>
`
  }
}

function generateCard(product) {
  return `<div class="product-card" onclick="clickHandler()">
        <div class="product-card__header ">${product.name}</div>
        ${
          isOpen
            ? `<div class="product-card_description">${product.description}</div>`
            : ""
        }
        <div class="product-card__price">${product.price}</div>
    </div>`;
}

const cards = [
  {
    name: "Product 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 200,
  },
  {
    name: "Product 2",
    description:
      "Lorem ipsum dolor, sequi nostrum voluptate aspernatur hic est reiciendis sint culpa aut corrupti eos.",
    price: 300,
  },
];

const container = document.querySelector(".container");

cards.map(item=> new ProductCard(item, container));
