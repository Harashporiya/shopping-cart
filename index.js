let shopItems1 = [
    {
        id: "img_1",
        name: "Casual Shirt",
        price: 450,
        desc: "Ragular Fit Half Sleev Solid Casual Shirt for Men.",
        img: "img-1.jpg",
    },
    {
        id: "ioytrhndcv",
        name: "Office Shirt",
        price: 500,
        desc: "Men Cotton LT RED Solid Full Sleeve Shirt.",
        img: "img-2.jpg",
    },
    {
        id: "wuefbncxbsn",
        name: "T Shirt",
        price: 250,
        desc: "Men T-Shirt.",
        img: "img-14.webp",
    },
    {
        id: "thyfhcbcv",
        name: "Mens Suit",
        price: 2000,
        desc: "Men Black Solid Slim Fit Single-Breasted Three-Piece Formal.",
        img: "img-4.jpg",
    },
    {
        id: "thiecbawdjksadjk",
        name: "Mens Tie",
        price: 250,
        desc: "Navy Striped Tie For Men – Formal Ties Set With Pocket.",
        img: "img-5.png",
    },
    {
        id: "iuertrywebncdjksadjk",
        name: "Casual shoes",
        price: 700,
        desc: "Commuter Basics Sneakers for Men | Casual Shoes for Men.",
        img: "img-6.png",
    },
    {
        id: "trfoiwfcnbcawdjksadjk",
        name: "polo shirt",
        price: 500,
        desc: "Men's Intelligent Collor Neck Polo T-Shirt, Anti Stain and.",
        img: "img-8.png",
    },
    {
        id: "cbvxbcvsceldk",
        name: "Threads 53",
        price: 850,
        desc: "Dark Blue Denim Casual Shirt.",
        img: "img-9.png",
    },
    {
        id: "oiopijmjkhuihb",
        name: "D MAKER",
        price: 1200,
        desc: "Men’s Slim Fit Denim Jeans Pant Stylish & Stretchable.",
        img: "img-10.png",
    },
    {
        id: "oiopijewyiohbjhib",
        name: "basic cap",
        price: 350,
        desc: "Cotton Unisex Sports Cap.",
        img: "img-11.png",
    },
    {
        id: "rtytytuyuytyytbvncv",
        name: "leather boots",
        price: 3050,
        desc: "Men's Height Increasing Faux Leather Formal & Strap Buckle.",
        img: "img-12.png",
    },
    {
        id: "jsjodojd",
        name: "DHRUVI TRENDZ",
        price: 299,
        desc: "Men Regular Fit Rayon Shirt",
        img: "img-13.webp"
    },
    {
        id: "jfhgbvnscs",
        name: "Casual Shirt",
        price: 450,
        desc: "Ragular Fit Half Sleev Solid Casual Shirt for Men.",
        img: "img-16.webp",
    },
    {
        id: "trfoiwfcnbcawdjksadjk",
        name: "polo shirt",
        price: 1500,
        desc: "Men's Intelligent Collor Neck Polo T-Shirt, Anti Stain and.",
        img: "img-15.webp",
    },
    {
        id: "thyfhcbcv",
        name: "Mens Suit",
        price: 1000,
        desc: "Men Black Solid Slim Fit Single-Breasted Three-Piece Formal.",
        img: "img-7.png",
    },
    {
        id: "trfoiwfcnbcawdjksadjk",
        name: "polo shirt",
        price: 1500,
        desc: "Men's Intelligent Collor Neck Polo T-Shirt, Anti Stain and.",
        img: "img-17.jpg",
    },
];

const shopContainer = document.getElementById('shop')

const itemsHTML = shopItems1.map(item => `
    <div class="item">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <p>Price: &#8377; ${item.price}</p>
        <button class="remove">-</button>
        <span class="quantity">0</span>
        <button class="add">+</button>
  
    </div>
`).join('');

shopContainer.innerHTML = itemsHTML;

const items = document.querySelector('.item')
const addButtons = document.querySelectorAll('.add');
const removeButtons = document.querySelectorAll('.remove');
const quantityElements = document.querySelectorAll('.quantity');
const cartAmountElements = document.getElementById('cartAmount');

let cartAmounts = Array.from({ length: quantityElements.length }, () => 0);
addButtons.forEach((button, index) => {
    button.addEventListener('click', function () {

        let count = parseInt(quantityElements[index].textContent);
        count++;

        quantityElements[index].textContent = count;
        cartAmounts[index]++;

        updateCartAmount();


    });

});

removeButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        let count = parseInt(quantityElements[index].textContent);

        if (count > 0) {
            count--;
            cartAmounts[index]--;

            quantityElements[index].textContent = count;
            updateCartAmount();

        }


    });

});

function updateCartAmount() {
    let totalCartAmount = cartAmounts.reduce((acc, curr) => acc + curr, 0);
    cartAmountElements.textContent = totalCartAmount;
}




const item = document.getElementsByClassName('item')
const text = document.getElementById('text');
const cartElements = document.getElementById('cartIcon');

cartElements.addEventListener('click', function () {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = 'none';

    })
    let shopItem = [
        {
            id: "img_1",
            name: "Casual Shirt",
            price: 450,
            desc: "Ragular Fit Half Sleev Solid Casual Shirt for Men.",
            img: "img-1.jpg",
        },
        {
            id: "ioytrhndcv",
            name: "Office Shirt",
            price: 500,
            desc: "Men Cotton LT RED Solid Full Sleeve Shirt.",
            img: "img-2.jpg",
        },
        {
            id: "wuefbncxbsn",
            name: "T Shirt",
            price: 250,
            desc: "Men T-Shirt.",
            img: "img-14.webp",
        },
        {
            id: "thyfhcbcv",
            name: "Mens Suit",
            price: 2000,
            desc: "Men Black Solid Slim Fit Single-Breasted Three-Piece Formal.",
            img: "img-4.jpg",
        },
        {
            id: "thiecbawdjksadjk",
            name: "Mens Tie",
            price: 250,
            desc: "Navy Striped Tie For Men – Formal Ties Set With Pocket.",
            img: "img-5.png",
        },
        {
            id: "iuertrywebncdjksadjk",
            name: "Casual shoes",
            price: 700,
            desc: "Commuter Basics Sneakers for Men | Casual Shoes for Men.",
            img: "img-6.png",
        },
        {
            id: "trfoiwfcnbcawdjksadjk",
            name: "polo shirt",
            price: 500,
            desc: "Men's Intelligent Collor Neck Polo T-Shirt, Anti Stain and.",
            img: "img-8.png",
        },
        {
            id: "cbvxbcvsceldk",
            name: "Threads 53",
            price: 850,
            desc: "Dark Blue Denim Casual Shirt.",
            img: "img-9.png",
        },
        {
            id: "oiopijmjkhuihb",
            name: "D MAKER",
            price: 1200,
            desc: "Men’s Slim Fit Denim Jeans Pant Stylish & Stretchable.",
            img: "img-10.png",
        },
        {
            id: "oiopijewyiohbjhib",
            name: "basic cap",
            price: 350,
            desc: "Cotton Unisex Sports Cap.",
            img: "img-11.png",
        },
        {
            id: "rtytytuyuytyytbvncv",
            name: "leather boots",
            price: 3050,
            desc: "Men's Height Increasing Faux Leather Formal & Strap Buckle.",
            img: "img-12.png",
        },
        {
            id: "jsjodojd",
            name: "DHRUVI TRENDZ",
            price: 299,
            desc: "Men Regular Fit Rayon Shirt",
            img: "img-13.webp"
        },
        {
            id: "jfhgbvnscs",
            name: "Casual Shirt",
            price: 450,
            desc: "Ragular Fit Half Sleev Solid Casual Shirt for Men.",
            img: "img-16.webp",
        },
        {
            id: "trfoiwfcnbcawdjksadjk",
            name: "polo shirt",
            price: 1500,
            desc: "Men's Intelligent Collor Neck Polo T-Shirt, Anti Stain and.",
            img: "img-15.webp",
        },
        {
            id: "thyfhcbcv",
            name: "Mens Suit",
            price: 1000,
            desc: "Men Black Solid Slim Fit Single-Breasted Three-Piece Formal.",
            img: "img-7.png",
        },
        {
            id: "trfoiwfcnbcawdjksadjk",
            name: "polo shirt",
            price: 1500,
            desc: "Men's Intelligent Collor Neck Polo T-Shirt, Anti Stain and.",
            img: "img-17.jpg",
        },
    ];
    const textContainer = document.getElementById('text')

    const itemHTML = shopItem.map(item => `
    <div class="item-details">
        <img  src="${item.img}" alt="${item.name}">
        <div id="price"> <button class="cross">X</button>
        <h3>${item.name}</h3>
        <p>Price: &#8377; <span class="item-price">${item.price}</p><span>Total:</sapn>
         <button class="remove">-</button>
         <span class="quantity">0</span>
         <button class="add">+</button>
        </div></div>
`).join('');


    textContainer.innerHTML = itemHTML;

    const addButtons = document.querySelectorAll('.add');
    const priceElements = document.querySelectorAll('.item-price')
    const removeButtons = document.querySelectorAll('.remove');
    const quantityElements = document.querySelectorAll('.quantity');
    const cartAmountElements = document.getElementById('cartAmount');

    let cartAmounts = Array.from({ length: quantityElements.length }, () => 0);

    addButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            let count = parseInt(quantityElements[index].textContent);
            count++;
            quantityElements[index].textContent = count;
            cartAmounts[index]++;


            updateCartAmount()

            const item = shopItem[index];
            const text1 = document.getElementById('text');


            let totalBill = 0;


            text1.innerHTML = `<div class="item-details">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: &#8377; ${item.price}</p>
        <p>Quantity ${index + 1}: ${count}</p>
        <p>Total Price: &#8377; ${item.price * count}</p>
          </div>`;


            totalBill += item.price * count;


            const clearButtonHTML = `
           <div>
        <p class="bill">Total Bill: &#8377; ${totalBill}</p>
        <button class="check">Checkout</button>
        <button class="clear">Clear Cart</button>
       </div>
        `;


            text1.innerHTML += clearButtonHTML;


        });

    });

    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            let count = parseInt(quantityElements[index].textContent);

            if (count > 0) {
                count--;
                cartAmounts[index]--;

                quantityElements[index].textContent = count;
                updateCartAmount()
            }

        });

    });
    function updateCartAmount() {
        let totalCartAmount = cartAmounts.reduce((acc, curr) => acc + curr, 0);
        cartAmountElements.textContent = totalCartAmount;
    }


    const clearButtonHTML = `<div>
    <p class="bill">Total Bill:</p>
    <button class="check">Checkout</button>
    <button class="clear">Clear Cart</button>
    </div>`;

    document.getElementById('text1').innerHTML = clearButtonHTML;
    const totalBill = document.querySelectorAll('.bill')
    const checkButtons = document.querySelectorAll('.check');
    const clearButtons = document.querySelectorAll('.clear');

    clearButtons.forEach(clear => {
        clear.addEventListener('click', function () {
            const itemDetails = document.querySelectorAll('.item-details');
            itemDetails.forEach(item => {
                item.style.display = 'none';
            });

            const cartItemHTML = `<div class="btn">
            <p id="empty">Cart is Empty</p>
            <button id="back">Back to Home</button>
          </div>`;

            text.innerHTML = cartItemHTML;

            const items = document.querySelectorAll('.item');
            items.forEach(item => {
                item.style.display = 'none';
            });

            const back = document.getElementById('back');
            back.addEventListener('click', function () {
                const btns = document.querySelectorAll('.btn');
                btns.forEach(btn => {
                    btn.style.display = 'none';
                });

                items.forEach(item => {
                    item.style.display = 'block';
                });
            });


            clearButtons.forEach(btn => {
                btn.style.display = 'none';
            });
            checkButtons.forEach(btn => {
                btn.style.display = 'none';
            });
            totalBill.forEach(btn => {
                btn.style.display = 'none'
            })
        });
    });

    const crosses = document.querySelectorAll('.cross');
    const item = document.querySelectorAll('.item-details');

    crosses.forEach((cross, index) => {
        cross.addEventListener('click', function () {
            item[index].style.display = 'none';
        });
    });

});