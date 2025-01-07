const gamb =document.querySelector('.gamb');
const close = document.querySelector('.close');
const gambUp =document.querySelector('.nav_gamb');
const katalogActiv = document.querySelector('.product');
const kategoriy = document.querySelector('.kategoriy');
const dataAtr = document.querySelectorAll('.catalog-item_prod');
const glav = document.querySelector('.glav');
const addBtn = document.querySelector('.catalog_tovara-btn');

let products = [];
let cata;



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
        a.addEventListener('click', function() {
            let cata = a.dataset.category
            katalogActiv.style.display = 'block';
            kategoriy.style.display = 'none';
            if (cata == 0) getSomeElements();
            else if( cata == 1 ) getSomeCategory("electronics");
            else if( cata == 2 ) getSomeCategory("jewelery");
            else if( cata == 3 ) getSomeCategory("men's clothing");
            else if( cata == 4 ) getSomeCategory("women's clothing");
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
