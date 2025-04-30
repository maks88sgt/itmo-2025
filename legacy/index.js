class Component {
  render() {
    this.container.innerHTML = this.content;
  }
}

class ProductCard extends Component {
  isOpen = false;

  constructor(product, parentElement) {
    super();
    const { name, description, price } = product;
    this.name = name;
    this.description = description;
    this.price = price;
    this.parentElement = parentElement;

    this.container = document.createElement("div");
    this.container.classList.add("product-card");
    this.container.addEventListener("click", this.clickHandler.bind(this));

    this.content = this.getContent();

    this.render();

    this.parentElement.appendChild(this.container);
  }

  clickHandler() {
    console.log(this);
    this.isOpen = !this.isOpen;
    this.content = this.getContent();
    this.render();
  }

  getContent() {
    return `
    <div class="product-card__header ">${this.name}</div>
    ${
      this.isOpen
        ? `<div class="product-card_description">${this.description}</div>`
        : ""
    }
    <div class="product-card__price">${this.price}</div>
`;
  }
}

class Modal extends Component {
  constructor(content) {
    super();
    this.content = content;

    this.container = document.createElement("div");
    this.container.classList.add("modal-overlay");

    this.container.innerHTML = `
    <div class="modal">
      <button class="modal-close">&times;</button>
      <div>${this.content}</div>
      <button class="modal-ok">OK</button>
    </div>
    `;

    this.container.addEventListener("click", (ev) => {
      const classList = ev.target.classList;

      if (
        classList.contains("modal-close") ||
        classList.contains("modal-ok") ||
        classList.contains("modal-overlay")
      ) {
        this.close();
      }
    });
  }

  open() {
    document.body.appendChild(this.container);
  }

  close() {
    this.container.remove();
  }
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

cards.map((item) => new ProductCard(item, container));

const button = document.querySelector("#show-modal");

button.addEventListener("click", () => {
  const modal = new Modal(`<h1> H! It's our first Modal</h1>`);

  modal.open();
});

const button2 = document.querySelector("#show-modal2");

button2.addEventListener("click", () => {
  const modal =
    new Modal(`<div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ea quisquam, maxime similique quas fugit error molestiae vero, sequi nostrum voluptate aspernatur hic est reiciendis sint culpa aut corrupti eos.
</div>`);

  modal.open();
});
