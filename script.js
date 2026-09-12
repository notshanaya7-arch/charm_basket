```javascript
/* =====================================================
   CHARM BASKET
   PREMIUM INTERACTIONS
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 2200);

});


/* =====================================================
   HAMSTER CURSOR
===================================================== */

const hamster = document.getElementById("hamsterCursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let hamsterX = mouseX;
let hamsterY = mouseY;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function moveHamster() {

    hamsterX += (mouseX - hamsterX) * 0.12;
    hamsterY += (mouseY - hamsterY) * 0.12;

    hamster.style.left = `${hamsterX}px`;
    hamster.style.top = `${hamsterY}px`;

    requestAnimationFrame(moveHamster);

}

moveHamster();


/* =====================================================
   HAMSTER INTERACTIVE HOVER
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .product, .collection, .insta"
    );

interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        hamster.style.transform =
            "translate(-50%, -50%) scale(1.25)";

    });

    element.addEventListener("mouseleave", () => {

        hamster.style.transform =
            "translate(-50%, -50%) scale(1)";

    });

});


/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticButtons =
    document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", (event) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * .12}px, ${y * .12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   HERO 3D MOUSE MOVEMENT
===================================================== */

const heroScene =
    document.getElementById("heroScene");

const gift =
    document.querySelector(".gift-3d");

const hero =
    document.querySelector(".hero");


if (
    heroScene &&
    gift &&
    window.matchMedia("(pointer:fine)").matches
) {

    hero.addEventListener("mousemove", event => {

        const rect =
            hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            .5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            .5;

        gift.style.transform =
            `
            translateY(${-y * 22}px)
            rotateX(${y * -7}deg)
            rotateY(${x * 12}deg)
            `;

    });

    hero.addEventListener("mouseleave", () => {

        gift.style.transform = "";

    });

}


/* =====================================================
   PRODUCT 3D TILT
===================================================== */

const products =
    document.querySelectorAll(".product");

if (window.matchMedia("(pointer:fine)").matches) {

    products.forEach(product => {

        product.addEventListener("mousemove", event => {

            const rect =
                product.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                .5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                .5;

            product.style.transform =
                `
                perspective(900px)
                rotateX(${y * -2.5}deg)
                rotateY(${x * 2.5}deg)
                `;

        });

        product.addEventListener("mouseleave", () => {

            product.style.transform = "";

        });

    });

}


/* =====================================================
   SHOP FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter");

const productCards =
    document.querySelectorAll(".product");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        productCards.forEach(product => {

            const category =
                product.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                product.classList.remove("hidden");

                requestAnimationFrame(() => {

                    product.style.opacity = "1";
                    product.style.transform = "";

                });

            } else {

                product.classList.add("hidden");

            }

        });

    });

});


/* =====================================================
   SHOPPING BAG
===================================================== */

let cart = [];

const bagTrigger =
    document.getElementById("bagTrigger");

const bagOverlay =
    document.getElementById("bagOverlay");

const bagClose =
    document.getElementById("bagClose");

const bagItems =
    document.getElementById("bagItems");

const bagEmpty =
    document.getElementById("bagEmpty");

const bagCount =
    document.getElementById("bagCount");

const bagTotal =
    document.getElementById("bagTotal");


/* OPEN */

bagTrigger.addEventListener("click", () => {

    bagOverlay.classList.add("open");

    document.body.classList.add("no-scroll");

});


/* CLOSE */

bagClose.addEventListener("click", closeBag);

bagOverlay.addEventListener("click", event => {

    if (event.target === bagOverlay) {

        closeBag();

    }

});


function closeBag() {

    bagOverlay.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


/* ADD PRODUCTS */

const addButtons =
    document.querySelectorAll(".add-product");


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {

            name: button.dataset.name,

            price:
                Number(button.dataset.price)

        };

        cart.push(product);

        updateCart();

        const originalText =
            button.innerHTML;

        button.innerHTML =
            `Added ✓`;

        setTimeout(() => {

            button.innerHTML =
                originalText;

        }, 1100);

    });

});


/* UPDATE CART */

function updateCart() {

    bagItems.innerHTML = "";

    bagCount.textContent =
        cart.length;


    if (cart.length === 0) {

        bagEmpty.style.display = "block";

        bagTotal.textContent = "0";

        return;

    }


    bagEmpty.style.display = "none";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const element =
            document.createElement("div");

        element.className = "bag-item";


        element.innerHTML = `

            <div>

                <div class="bag-item-name">
                    ${item.name}
                </div>

                <div class="bag-item-price">
                    ₹${item.price}
                </div>

            </div>

            <button
                class="remove-item"
                data-index="${index}"
            >
                Remove
            </button>

        `;


        bagItems.appendChild(element);

    });


    bagTotal.textContent =
        total.toLocaleString("en-IN");


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart.splice(index, 1);

                updateCart();

            });

        });

}


/* =====================================================
   PARALLAX DECORATIONS
===================================================== */

const stars =
    document.querySelectorAll(".floating-star");


if (window.matchMedia("(pointer:fine)").matches) {

    document.addEventListener("mousemove", event => {

        const x =
            event.clientX /
            window.innerWidth -
            .5;

        const y =
            event.clientY /
            window.innerHeight -
            .5;


        stars.forEach((star, index) => {

            const speed =
                (index + 1) * 7;

            star.style.marginLeft =
                `${x * speed}px`;

            star.style.marginTop =
                `${y * speed}px`;

        });

    });

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeBag();

    }

});


/* =====================================================
   MOBILE TOUCH FEEDBACK
===================================================== */

document.addEventListener(
    "touchstart",
    event => {

        if (!hamster) return;

        const touch =
            event.touches[0];

        hamsterX = touch.clientX;
        hamsterY = touch.clientY;

    },
    {
        passive: true
    }
);


/* =====================================================
   SMOOTH IMAGE-LIKE HOVER ON INSTAGRAM
===================================================== */

const instaCards =
    document.querySelectorAll(".insta");

instaCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.querySelector("span").style.transform =
            "scale(1.2) rotate(8deg)";

    });

    card.addEventListener("mouseleave", () => {

        card.querySelector("span").style.transform =
            "";

    });

});


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "Charm Basket — little things, big feelings."
);
```
