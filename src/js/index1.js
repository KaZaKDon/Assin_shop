let products = []; // Локальный массив для хранения товаров
const catalog = document.querySelector(".catalog0");

// Запрос на получение товаров из API при загрузке страницы
/*fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    products = data; // Сохраняем данные в массиве
    renderProducts(products); // Функция отображения товаров на странице
  })
  .catch(error => console.error('Ошибка при загрузке товаров:', error));*/

function renderProducts() {
  document.querySelectorAll(".catalog_item").forEach(e => e.remove());
  for (let value of products) {
    let obj = value
    console.log(obj)
      const newElem = document.createElement("div");
        newElem.innerHTML = `
          <div class="catalog_item-title">${obj["title"]}</div>
          <img class="catalog_item-img" src="${obj["image"]}" alt="card" width="250px", height="300px">
          <div class="catalog_item-category">${obj["category"]}</div>
          <div class="catalog_item-price">${obj["price"]}$</div>
          <button class="catalog_item-btn">Удалить товар</button>
        `;
    newElem.classList.add("catalog_item");
    catalog.after(newElem);
  };
}

// Функция для добавления класса 'active'
function showElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
      element.classList.add("active");
  }
}

// Функция для удаления класса 'active'
function hideElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
      element.classList.remove("active");
  }
}

document.querySelector("#addBtn").addEventListener("click", () => showElement("modal"));
document.querySelector(".close").addEventListener("click", () => hideElement("modal"));
document.querySelector("#addBtn1").addEventListener("click", () => showElement("addModal"));
document.querySelector("#close").addEventListener("click", () => hideElement("addModal"));

//Добавление товара
//const objProduct = new Object;


const nameAdd = document.querySelector(".add_title");
const authorAdd = document.querySelector(".add_img");
const yearAdd = document.querySelector(".add_category");
const genreAdd = document.querySelector(".add_price");
const descrAdd = document.querySelector(".add_descr");
const btnAdd = document.querySelector(".addBtn");
const addBtn = document.querySelector(".baza_add-btn");


btnAdd.addEventListener("click", () => {
    
        const title = nameAdd.value; // Получаем значение из input
        const image = authorAdd.value;
        const category = yearAdd.value;
        const price = genreAdd.value;
        const descr = descrAdd.value;
        let elementClose3 = document.getElementById("modal");
        elementClose3.classList.remove("active");

        const newElem = document.createElement("div");
        newElem.innerHTML = `
          <div class="catalog_item-title">${title}</div>
          <img class="catalog_item-img" src="${image}" alt="card" width="250px", height="300px">
          <div class="catalog_item-category">${category}</div>
          <div class="catalog_item-price">${price}$</div>
          <button class="catalog_item-btn">Удалить товар</button>
        `;
        console.log(catalog)
        newElem.classList.add("catalog_item")
        catalog.after(newElem)

    
    let a = title, b = image, c = category, d = price, e = descr;
    const objProduct = makeUser(a, b, c, d, e)  
    products.push(objProduct);
    fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
          {
              title: '${title}',
              price: '${price}',
              description: '${descr}',
              image: '${image}',
              category: '${category}'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
    
    console.log(products)
    console.log(objProduct)
    document.querySelector(".add_title").value = "";
    document.querySelector(".add_img").value = "";
    document.querySelector(".add_category").value = "";
    document.querySelector(".add_price").value = "";
    document.querySelector(".add_descr").value = "";
    
});

function makeUser(title, image, category, price, description) {
  return {
    title: title,
    image: image,
    category: category,
    price: price,
    description: description
  };
}

let currentLimit = 5
function getSomeElements() {
  fetch(`https://fakestoreapi.com/products?limit=${currentLimit}`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('.catalog_item').forEach(e => e.remove()) 

      products = data;
      renderProducts(products);
      currentLimit += 5;
    })
    .catch(error => console.error('Ошибка при загрузке товаров:', error));
}

//getSomeElements();

//addBtn.addEventListener('click', getSomeElements)

document.querySelector(".catalog_item-btn").addEventListener('click', () => {
  fetch('https://fakestoreapi.com/products/1',{
    method:"DELETE"
})
    .then(response=>response.json())
    .then(json=>console.log(json))
})
.catch(error => console.error('Ошибка при удалении товара:', error));

getSomeElements()

addBtn.addEventListener('click', () => getSomeElements())
function renderProductsFiltr() {
  document.querySelectorAll(".catalog_item").forEach(e => e.remove());
  fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=> console.log(json))

  for (let value of products) {
    let obj = value
    console.log(obj)
      const newElem = document.createElement("div");
        newElem.innerHTML = `
          <div class="catalog_item-title">${obj["title"]}</div>
          <img class="catalog_item-img" src="${obj["image"]}" alt="card" width="250px", height="300px">
          <div class="catalog_item-category">${obj["category"]}</div>
          <div class="catalog_item-price">${obj["price"]}$</div>
          <button class="catalog_item-btn">Удалить товар</button>
        `;
    newElem.classList.add("catalog_item");
    catalog.after(newElem);
  };
}

renderProductsFiltr()

addBtn.addEventListener('click', addElements(), console.log(addBtn) )
getSomeElements()


glav.addEventListener('click', function() {
    katalogActiv.style.display = 'none';
            kategoriy.style.display = 'grid';
});

const renderProducts = (products) => {
    const catalog = document.querySelector('.catalog_list');
    document.querySelectorAll('.catalog_item').forEach(e => e.remove());
    for (let value of products) {
      let obj = value;
      console.log(obj);
      const newElem = document.createElement('div');
      newElem.innerHTML = `
              <div class="catalog_item-title">${obj['title']}</div>
              <img class="catalog_item-img" src="${obj['image']}" alt="card" width="250px", height="300px">
              <div class="catalog_item-category">${obj['category']}</div>
              <div class="catalog_item-price">${obj['price']}$</div>
            `;
  
      const btn = document.createElement('button');
      btn.classList.add('catalog_item-btn');
      btn.textContent = 'Удалить товар';
      newElem.append(btn);
      btn.addEventListener('click', () => deleteProductOnClick(obj.id));
  
      
      newElem.classList.add('catalog_item');
      catalog.append(newElem);
    }
  };

  const deleteProductOnClick = (id) => {
    products = products.filter((product) => product.id !== id);
        renderProducts(products);
  };
  
  let currentLimit = 5;
  
  async function getSomeElements() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${currentLimit}`)
      products = await response.json()
      renderProducts(products);
      currentLimit += 5;
    } catch (error) {
      console.log(`Ошибка загрузки товаров: ${error.message}`);
    }
  }

  function showElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.classList.add("active");
    }
  }
  
  // Функция для удаления класса 'active'
  function hideElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.classList.remove("active");
    }
  }

  function addElements() {
    let nameId = products.id + 1
  const nameAdd = document.querySelector(".add_title");
  const authorAdd = document.querySelector(".add_img");
  const yearAdd = document.querySelector(".add_category");
  const genreAdd = document.querySelector(".add_price");
  const descrAdd = document.querySelector(".add_descr");
  const btnAdd = document.querySelector(".addBtn");


  btnAdd.addEventListener("click", () => {
    document.querySelector("#addBtn").addEventListener("click", () => showElement("modal"));
    document.querySelector(".close").addEventListener("click", () => hideElement("modal"));
    document.querySelector("#addBtn1").addEventListener("click", () => showElement("addModal"));
    document.querySelector("#close").addEventListener("click", () => hideElement("addModal"));
        
          const title = nameAdd.value; // Получаем значение из input
          const image = authorAdd.value;
          const category = yearAdd.value;
          const price = genreAdd.value;
          const descr = descrAdd.value;
          let elementClose3 = document.getElementById("modal");
          elementClose3.classList.remove("active");

          const newElem = document.createElement("div");
          newElem.innerHTML = `
        <div class="catalog_item-title">${title}</div>
        <img class="catalog_item-img" src="${image}" alt="card" width="250px", height="300px">
        <div class="catalog_item-category">${category}</div>
        <div class="catalog_item-price">${price}$</div>
        `;

  const btn1 = document.createElement('button');
  btn1.classList.add('catalog_item-btn');
  btn1.textContent = 'Удалить товар';
  newElem.append(btn1);
  btn1.addEventListener('click', () => deleteProductOnClick(nameId));

  
  newElem.classList.add('catalog_item');
  catalog.append(newElem);

      
      let f = id, a = title, b = image, c = category, d = price, e = descr;
      const objProduct = makeUser(a, b, c, d, e, f)  
      products.push(objProduct);
      fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
          {
              title: '${title}',
              price: '${price}',
              description: '${descr}',
              image: '${image}',
              category: '${category}'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
      
      console.log(products)
      console.log(objProduct)
      document.querySelector(".add_title").value = "";
      document.querySelector(".add_img").value = "";
      document.querySelector(".add_category").value = "";
      document.querySelector(".add_price").value = "";
      document.querySelector(".add_descr").value = "";
      
  });

  function makeUser(title, image, category, price, description, id) {
  return {
      title: title,
      image: image,
      category: category,
      price: price,
      description: description,
      id: id
  };
  }
  }
  