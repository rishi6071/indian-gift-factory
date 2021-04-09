// Redirect Category to Specific Page with Query Param
const categoryToProduct = (redirect) => {
    // console.log(redirect);
    location.href = `./shop.html?category=${redirect}`;
}

// Products Data
var products = {
    mug: [
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Vinyl",
            price: 540,
            src: "./assets/img/categories/vinyl.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Ink-Paper",
            price: 540,
            src: "./assets/img/categories/inkpaper.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }
    ],
    pillow: [
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Vinyl",
            price: 540,
            src: "./assets/img/categories/vinyl.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Ink-Paper",
            price: 540,
            src: "./assets/img/categories/inkpaper.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }
    ],
    vinyl: [
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Vinyl",
            price: 540,
            src: "./assets/img/categories/vinyl.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Ink-Paper",
            price: 540,
            src: "./assets/img/categories/inkpaper.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }
    ],
    inkpaper: [
        {
            id: 1,
            title: "Vinyl",
            price: 540,
            src: "./assets/img/categories/vinyl.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Ink-Paper",
            price: 540,
            src: "./assets/img/categories/inkpaper.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Pillows",
            price: 540,
            src: "./assets/img/categories/pillows.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 1,
            title: "Mugs",
            price: 540,
            src: "./assets/img/categories/mugs.jpg",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }
    ]
}

// Get the Query Param for Shop.html
const getShopCategory = () => {

    const dropdown_box = document.querySelectorAll('#category_box a.dropdown-item');
    const mobile_view_box = document.querySelectorAll('#mobile_view_categories a.dropdown-item');
    const category_heading = document.querySelector('#category_heading');
    const index = location.href.indexOf("category");
    let url = location.href.substring(index + 9);

    if (url === 'mug') {
        dropdown_box[0].classList.add('active');
        mobile_view_box[0].classList.add('active');
        category_heading.innerText = "Mug's";
        renderProducts('mug');
    }
    else if (url === 'pillow') {
        dropdown_box[1].classList.add('active');
        mobile_view_box[1].classList.add('active');
        category_heading.innerText = "Pillow's";
        renderProducts('pillow');
    }
    else if (url === 'vinyl') {
        dropdown_box[2].classList.add('active');
        mobile_view_box[2].classList.add('active');
        category_heading.innerText = "Vinyl's";
        renderProducts('vinyl');
    }
    else {
        dropdown_box[3].classList.add('active');
        mobile_view_box[3].classList.add('active');
        category_heading.innerText = "Ink-Paper's";
        renderProducts('inkpaper');
    }
}

// Rendering the Product according to the Category
const renderProducts = (category) => {
    const products_box = document.querySelector('.products_box');
    const category_products = products[category];

    category_products.forEach((product, id) => {
        const productCol = document.createElement('div');
        productCol.className = "col-lg-4 col-sm-6 col-6 mt-4 padding-0";
        productCol.setAttribute('data-aos', 'zoom-in');

        const productCard = document.createElement('div');
        productCard.className = "card ripple";
        productCard.id = `product-${product.id}`;

        const productImg = document.createElement('img');
        productImg.src = product.src;
        productImg.alt = `${product.title} Product`;
        productImg.className = "card-img-top";

        const productBody = document.createElement('div');
        productBody.className = "card-body";

        const productTitle = document.createElement('h5');
        productTitle.className = "card-title";
        productTitle.innerText = product.title;

        const productPrice = document.createElement('p');
        productPrice.className = "product-price";
        productPrice.innerText = "Rs. 200 Per Piece";

        const productDescription = document.createElement('p');
        productDescription.className = "card-text";
        productDescription.innerText = product.description;

        productBody.append(productTitle, productPrice, productDescription);
        productCard.append(productImg, productBody);
        productCol.appendChild(productCard);
        products_box.appendChild(productCol);
    });

    /**
        <div class="col-lg-4 col-sm-6 col-12 mt-4">
            <div class="card" id="${product.id}">
                <img src="${product.src}" class="card-img-top"
                    alt="${product.title} Product" />
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="product-price">Rs. 200 Per Piece</p>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>
        </div>
     */
}

// Footer Copyright Year
const getCopyrightYear = () => {
    const copyright_year_box = document.querySelector('#copyright_year');
    copyright_year_box.innerText = new Date().getFullYear();
}