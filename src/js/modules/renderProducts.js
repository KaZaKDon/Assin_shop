const catalog = document.querySelector('.catalog_list');

let products = []; // Локальный массив для хранения товаров

const addBtn = document.querySelector('.baza_add-btn');

const renderProducts = (products) => {
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

export const initProducts = () => {
  getSomeElements();
  addBtn.addEventListener('click', getSomeElements);
  deleteProductOnClick(products);
};

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




  

  //Добавление товара
//const objProduct = new Object;


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
 // document.querySelectorAll('.menu_link1').forEach(e => e = fil);
  /*const fil = document.querySelectorAll(".menu_link1");
  console.log(fil)
  //fil.addEventListener("click", () => filterProducts(fil))
  async function filterProducts() {
    console.log('filter')

    
    
    const a = fil.getAttribute('data-category')
    const b = document.getAttribute('data-category1')
    const c = document.getAttribute('data-category2')
    const d = document.getAttribute('data-category3')

    console.log(a, b, c, d)
    if (a) filter = a;
    else if (b) filter = b;
    else if (c) filter = c;
    else filter = d;
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${"filter"}`)
        objProd = await response.json()
        renderProducts(objProd);
    } catch (error) {
        console.log(`Ошибка загрузки товаров: ${error.message}`);
      }
  }
  filterProducts()*/