const gamb =document.querySelector('.gamb');
const close = document.querySelector('.close');
const gambUp =document.querySelector('.nav_gamb');
const katalogActiv = document.querySelector('.product');
const kategoriy = document.querySelector('.kategoriy');
const dataAtr = document.querySelectorAll('.catalog-item_prod');
const glav = document.querySelector('.glav');
const addBtn = document.querySelector('.catalog_tovara-btn');
const catalog = document.querySelector('.catalog_list');
const upload = document.querySelector('.baza_add-btn');


let products = [];
let cata;


upload.addEventListener('click', getSomeElements);


gambUp.addEventListener('click', function() {
    gamb.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    gamb.style.display = 'none';
    document.body.style.overflow = '';
});

glav.addEventListener('click', function() {
  katalogActiv.style.display = 'none';
  kategoriy.style.display = 'grid';
});

    dataAtr.forEach((a) => {
      let d 
        a.addEventListener('click', function() {
            let cata = a.dataset.category
            katalogActiv.style.display = 'block';
            kategoriy.style.display = 'none';
            if (cata == 0) getSomeElements();
            else if( cata == 1 ) d = "electronics", getSomeCategory(d), console.log(d)
            else if( cata == 2 ) d = "jewelery", getSomeCategory(d), console.log(d)
            else if( cata == 3 ) d = "men's clothing", getSomeCategory(d), console.log(d)
            else if( cata == 4 ) d = "women's clothing",  getSomeCategory(d), console.log(d)
          })
    });
    
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

    async function getSomeCategory(category) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        products = await response.json()
        renderProducts(products);
      } catch (error) {
        console.log(`Ошибка загрузки товаров: ${error.message}`);
      }
    }

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

    let nameId = products.id + 1
  const nameAdd = document.querySelector(".add_title");
  const authorAdd = document.querySelector(".add_img");
  const yearAdd = document.querySelector(".add_category");
  const genreAdd = document.querySelector(".add_price");
  const descrAdd = document.querySelector(".add_descr");
  const btnAdd = document.querySelector(".addBtn");
  const closeModal = document.querySelector(".close1")

  
  addBtn.addEventListener("click", () => {
    console.log(addBtn)
    let prod = products.length + 1
    console.log(prod)
    showElement("modal")
    closeModal.addEventListener("click", () => hideElement("modal"));
    btnAdd.addEventListener("click", () => addProduct(prod))
    upload.addEventListener("click", () => getSomeElements())
  })

  
 function addProduct(nameId) {
  let id = nameId
    const title = nameAdd.value; // Получаем значение из input
    const image = authorAdd.value;
    const category = yearAdd.value;
    const price = genreAdd.value;
    const descr = descrAdd.value;
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

  let objProduct = {
    id: id,
    title: title,
    price: price,
    description: descr,   
    image: image,
    category: category
  }
        products.push(objProduct);
        hideElement("modal")
        showElement("addModal")
        document.querySelector("#close").addEventListener("click", () => hideElement("addModal"));
        clearForm()
        
        console.log(products)
        console.log(objProduct)
 };

function showElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
      element.classList.add("active");
  }
}

function hideElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
      element.classList.remove("active");
  }
}

function clearForm() {
  document.querySelector(".add_title").value = "";
      document.querySelector(".add_img").value = "";
      document.querySelector(".add_category").value = "";
      document.querySelector(".add_price").value = "";
      document.querySelector(".add_descr").value = "";
}

async function saveProduct() {
  try {
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
  } catch (error) {
    console.log(`Ошибка сохранения товаров: ${error.message}`);
  }
}