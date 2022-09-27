const catalogue = [
  {
    image: "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
    name: "Ніжна свіжість",
    flovers: "троянди та лілії",
    price: 445,
  },
  {
    image: "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
    name: "Сорбет",
    flovers: "хризантеми та троянди",
    price: 450,
  },
  {
    image: "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
    name: "Yellow song",
    flovers: "соняшники та солідаго",
    price: 455,
  },
  {
    image: "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
    name: "Персиковий нектар",
    flovers: "лілії та троянди",
    price: 455,
  },
  {
    image: "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
    name: "Аврора",
    flovers: "лілії та троянди",
    price: 460,
  },
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: "Класика кохання",
    flovers: "червоні троянди",
    price: 465,
  },
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: 1,
    flovers: 1,
    price: 465,
  },
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: 2,
    flovers: 2,
    price: 465,
  },
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: 3,
    flovers: 3,
    price: 465,
  },
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: 4,
    flovers: 4,
    price: 465,
  },
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: 5,
    flovers: 5,
    price: 465,
  },
  {
    image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    name: 6,
    flovers: 6,
    price: 465,
  },
];

const flowers = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const accessories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const cases = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const reviews = [
  {
    image: "./images/reviews-photo2.png",
    text: "Сам не фахівець з квітів, але дружині дуже сподобався оригінальний весняний букет, зібраний із позитивним настроєм. Залишаю свій позитивний відгук магазину на вул. Добровольчих батальонів.",
    name: "Володимир",
    date: "19.06.22",
  },
  {
    image: "./images/reviews-photo1.png",
    text: "Замовляла квіти у неробочий час (увечері), але зі мною дуже оперативно зв`язався співробітник та пообіцяв доставити букет вранці у призначений час. Так і сталося, квіти були доставлені з точністю секунда в секунду, свіжі та красиві. Рекомендую.",
    name: "Людмила",
    date: "03.04.22",
  },
  {
    image: "./images/reviews-photo1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem possimus, magni animi aliquid nostrum perferendis quod sint laboriosam aspernatur vero eveniet molestiae praesentium a cumque fuga soluta, quae voluptas.",
    name: "1",
    date: "03.04.22",
  },
  {
    image: "./images/reviews-photo1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem possimus, magni animi aliquid nostrum perferendis quod sint laboriosam aspernatur vero eveniet molestiae praesentium a cumque fuga soluta, quae voluptas.",
    name: "2",
    date: "03.04.22",
  },
  {
    image: "./images/reviews-photo1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem possimus, magni animi aliquid nostrum perferendis quod sint laboriosam aspernatur vero eveniet molestiae praesentium a cumque fuga soluta, quae voluptas.",
    name: "3",
    date: "03.04.22",
  },
  {
    image: "./images/reviews-photo1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem possimus, magni animi aliquid nostrum perferendis quod sint laboriosam aspernatur vero eveniet molestiae praesentium a cumque fuga soluta, quae voluptas.",
    name: "4",
    date: "03.04.22",
  },
];

// ! TEMPLATES

function createReviewContentTemplate(review) {
  const reviewDiv = `
  <div class="review">
    <img src="${review.image}" />
    <div class="reviewText">
      <p>
        “${review.text}”
     </p>
    <p class="author">${review.name} ${review.date}</p>
    </div>
  </div>
`;

  return createFragmentTemplate(reviewDiv);
}

function createCatalogueContentTemplate(catalogueItem) {
  const catalogueDiv = `
  <div class="catalogueItem">
    <img src="${catalogueItem.image}" />
    <div class="flowersName">
      <h1>${catalogueItem.name}:</h1>
      <h1>${catalogueItem.flovers}</h1>
    </div>
    <h1 id="price">${catalogueItem.price}</h1>
    <button id="catalogueBtn">В кошик</button>
  </div>`;

  return createFragmentTemplate(catalogueDiv);
}

function createFooterContentTemplate() {
  const footerDiv = `
  <img src="./images/logo.png" />
      <div class="footerComponents">
        <div class="contacts">
          <h1>Контакти</h1>
          <p>(095) 000 00 00</p>
          <p>(097) 000 00 00</p>
          <p>Ми працюємо цілодобово</p>
        </div>
        <div class="information">
          <h1>Інформація</h1>
          <p>Про нас Відгуки</p>
          <p>Хіт продажу</p>
          <p>Доставка і оплата</p>
        </div>
        <div class="footerCatalogue">
          <h1>Каталог</h1>
          <p>Збери свій букет</p>
          <p>Живі квіти</p>
          <p>Кімнатні рослини</p>
        </div>
        <form>
          <input type="text" placeholder="Введіть свій e-mail" />
          <input type="submit" id="emailInput" value="Підписатися" />
          <div class="mediaImages">
            <img src="./images/inst.png" />
            <img src="./images/fb.png" />
            <img id="viber" src="./images/viber.png" />
          </div>
        </form>
      </div>
      <p>Copyright Ⓒ 2022</p>`;

  return createFragmentTemplate(footerDiv);
}

// ! INITIALIZATION LOGIC

function createFragmentTemplate(str) {
  const template = document.createElement("template");

  template.innerHTML = str;

  return template.content;
}

function appendContent(content, className) {
  const el = document.querySelector(`.${className}`);

  el.appendChild(content);
}

function init(items, className, contentFunction) {
  const fragment = document.createDocumentFragment();
  if (typeof items === "object") {
    items.forEach((item) => {
      fragment.appendChild(contentFunction(item));
    });
  }
  appendContent(fragment, className);
}

function initReusableComponent(className, contentFunction) {
  const fragment = document.createDocumentFragment();
  const component = document.querySelector(`.${className}`);
  fragment.appendChild(contentFunction(component));
  appendContent(fragment, className);
}

// ! FUNCTIONS INTIALIZATIONS

if (document.querySelector("title").textContent === "Головна") {
  init(catalogue, "catalogueItems", createCatalogueContentTemplate);
  init(reviews, "reviewsTemplate", createReviewContentTemplate);
}

if (document.querySelector("title").textContent === "Зібрати букет") {
  // init();
  // init();
  // init();
}

initReusableComponent("footer-component", createFooterContentTemplate);
