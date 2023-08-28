const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart_conteneur');
const panierContainer = document.getElementById('container_panier');
const prixht = document.getElementById('prixht');
const taxe = document.getElementById('taxe');
//const prixttc = document.getElementById('prixttc');
const totalItem = document.getElementById('total-item');

function openCart() {
    panierContainer.classList.remove('hide')

}
// openCart()

function closeCart() {
    panierContainer.classList.add('hide')

}
function renderProds() {
    //  productsContainer.innerHTML = ''
    prods.forEach((ele) => {
        productsContainer.innerHTML +=
            `
      <div class="item">
      <img src=${ele.image} alt="fake">
      <h5>${ele.name}</h5>
      <p class="description">${ele.description}</p>
      <div class="price-add">
          <div class="price">${ele.price} €</div>
          <i class="fas fa-plus-circle" class='add-product' onclick='addtocart(${ele.id})'></i>
      </div>
  </div>
      `
    })
}
renderProds()
function totalCart() {
    let totalHT = 0;
    let totalItems = 0;
    // let tva = 19.6 / 100;
    let totalTTC = 0
    cart.forEach((item) => {
        totalHT += item.price * item.nbrItem;
        totalItems += item.nbrItem;
        // tva = totalHT * tva
        // totalTTC = totalHT + tva
    })
    prixht.innerHTML = totalHT.toFixed(2)
    // taxe.innerHTML = tva.toFixed(2)
    //prixttc.innerHTML = totalTTC.toFixed(2)
    totalHT += totalPriceItem
    totalItem.innerHTML = totalItems

}
let cart = []
function addtocart(id) {
    if (cart.some((item) => item.id === id)) {
        changeQty('plus', id);
    } else {
        const item = prods.find((prod) => prod.id === id)

        cart.push({
            ...item,
            nbrItem: 1,
        });
        console.log(cart);
    }
    updateCart();
}

function updateCart() {
    renderCart()
    totalCart()
}
function renderCart() {
    cartContainer.innerHTML = "";
    cart.forEach((item) => {
        totalPriceItem = `${item.price}` * `${item.nbrItem}`
        cartContainer.innerHTML +=
            `
        <div class="article_panier">
        <img src=${item.image} class="img_panier"
            alt="img">
        <div class="nom_panier">
            <h5>${item.name}</h5>
        </div>
        <div class="prix_panier">
        <h6>${item.price}</h6>
    </div>
    |&nbsp;&nbsp;
        <div class="quantite_panier">
            <h6>${item.nbrItem}</h6>
        </div>
        <div class="prix_panier">
        <h6>${totalPriceItem.toFixed(2)}</h6>

        </div>
        <div>
            <div class="options_panier">
                <button class="moins" onclick="changeQty('moins',${item.id})">Supprimer un produit</button>
                <button onclick="removeItem(${item.id})">Supprimer</button>
                <button class="plus" onclick="changeQty('plus',${item.id})"><i class="fas fa-shopping-cart"></i>&nbsp;Ajouter un produit</button>
            </div>
        </div>
    </div>
        `;


    });
}

function changeQty(action, id) {
    cart = cart.map((item) => {
        let nbrItem = item.nbrItem
        if (item.id === id) {
            if (action === 'moins' && nbrItem > 1) {
                nbrItem--
            } else if (action === 'plus') {
                nbrItem++

            }
        }
        return {
            ...item,
            nbrItem,
        }
    });

    updateCart()

}
function removeItem(id) {
    cart = cart.filter((item) => item.id !== id)
    updateCart()
}
