* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --pink: #e7aab8;
    --pink-dark: #ad6577;
    --pink-light: #f9dfe4;
    --cream: #fff9f6;
    --white: #fffdfc;
    --brown: #4b3032;
    --brown-light: #77595b;
    --line: rgba(75,48,50,.14);
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream);
    color: var(--brown);
    font-family: "DM Sans", sans-serif;
    overflow-x: hidden;
}

body::before {
    content: "";

    position: fixed;
    inset: 0;

    background:
        linear-gradient(
            rgba(255,249,246,.76),
            rgba(255,249,246,.76)
        ),
        repeating-linear-gradient(
            90deg,
            rgba(225,165,177,.13) 0,
            rgba(225,165,177,.13) 48px,
            transparent 48px,
            transparent 96px
        ),
        repeating-linear-gradient(
            0deg,
            rgba(225,165,177,.13) 0,
            rgba(225,165,177,.13) 48px,
            transparent 48px,
            transparent 96px
        );

    z-index: -10;
    pointer-events: none;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

button {
    font-family: inherit;
}

.grain {
    position: fixed;
    inset: 0;

    pointer-events: none;

    opacity: .035;

    z-index: 9999;

    background-image:
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}


/* ==========================
NAV
========================== */

.navbar {
    position: fixed;

    top: 18px;
    left: 50%;

    transform: translateX(-50%);

    width: min(1180px, calc(100% - 40px));

    height: 68px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;

    background: rgba(255,253,252,.78);

    border: 1px solid rgba(75,48,50,.1);

    border-radius: 22px;

    backdrop-filter: blur(22px);

    box-shadow:
        0 20px 70px rgba(75,48,50,.09);

    z-index: 1000;
}

.logo {
    display: flex;
    flex-direction: column;

    line-height: .75;
}

.logo strong {
    font-family: "Playfair Display", serif;

    font-size: 21px;

    font-weight: 500;
}

.logo span {
    font-size: 7px;

    letter-spacing: 4px;

    margin-top: 7px;

    text-align: center;
}

.desktop-nav {
    display: flex;

    gap: 34px;
}

.desktop-nav a {
    font-size: 11px;

    transition: .3s;
}

.desktop-nav a:hover {
    color: var(--pink-dark);
}

.nav-social {
    font-size: 9px;

    opacity: .65;
}

.mobile-menu {
    display: none;

    border: 0;
    background: none;

    font-size: 20px;

    color: var(--brown);
}


/* ==========================
HERO
========================== */

.hero {
    min-height: 100vh;

    position: relative;

    display: flex;
    align-items: center;

    overflow: hidden;

    perspective: 1400px;
}

.hero-check {
    position: absolute;

    inset: -20%;

    background:
        linear-gradient(
            rgba(255,255,255,.1),
            rgba(255,255,255,.1)
        ),
        repeating-linear-gradient(
            90deg,
            #f2c5ce 0 80px,
            #fff4f1 80px 160px
        ),
        repeating-linear-gradient(
            0deg,
            #f2c5ce 0 80px,
            #fff4f1 80px 160px
        );

    opacity: .5;

    transform:
        translateZ(-500px)
        scale(1.5)
        rotate(-2deg);

    z-index: -3;
}

.hero-copy {
    width: 52%;

    margin-left: 9%;

    position: relative;

    z-index: 5;
}

.tiny-label,
.section-label {
    font-size: 9px;

    letter-spacing: 3px;

    font-weight: 700;

    color: var(--pink-dark);

    margin-bottom: 22px;
}

.hero h1 {
    font-family: "Playfair Display", serif;

    font-size: clamp(68px, 8.4vw, 125px);

    line-height: .84;

    letter-spacing: -5px;

    font-weight: 500;
}

.hero h1 em {
    display: block;

    color: var(--pink-dark);

    font-style: italic;

    padding-left: 35px;
}

.hero-copy > p {
    width: 390px;

    max-width: 90%;

    margin-top: 38px;

    font-size: 14px;

    line-height: 1.9;

    color: var(--brown-light);
}

.hero-button {
    width: 180px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 17px 0 22px;

    margin-top: 34px;

    background: var(--brown);

    color: white;

    border-radius: 100px;

    font-size: 10px;

    box-shadow:
        0 20px 35px rgba(75,48,50,.16);

    transition:
        transform .4s,
        box-shadow .4s;
}

.hero-button b {
    width: 31px;
    height: 31px;

    border-radius: 50%;

    background: var(--pink);

    color: var(--brown);

    display: grid;
    place-items: center;
}

.hero-button:hover {
    transform: translateY(-5px);

    box-shadow:
        0 28px 50px rgba(75,48,50,.22);
}


/* HERO OBJECT */

.hero-object {
    position: absolute;

    width: min(450px, 38vw);

    right: 11%;

    top: 18%;

    transform-style: preserve-3d;

    transform:
        rotate(7deg)
        translateZ(100px);

    z-index: 5;
}

.hero-photo {
    position: relative;

    width: 100%;

    aspect-ratio: .78;

    overflow: hidden;

    border-radius:
        48% 48% 22px 22px;

    border: 10px solid rgba(255,255,255,.9);

    box-shadow:
        30px 45px 100px rgba(75,48,50,.23);
}

.hero-photo img {
    transition: transform 1.2s;
}

.hero-object:hover .hero-photo img {
    transform: scale(1.08);
}

.hero-tag {
    position: absolute;

    left: -35px;
    bottom: -20px;

    background: white;

    padding: 15px 22px;

    border-radius: 100px;

    font-family: "Playfair Display", serif;

    box-shadow:
        0 20px 45px rgba(75,48,50,.13);
}

.hero-tag span {
    color: var(--pink-dark);

    font-family: "DM Sans", sans-serif;

    font-size: 8px;

    margin-right: 8px;
}

.hero-ring {
    position: absolute;

    border: 1px solid rgba(173,101,119,.3);

    border-radius: 50%;

    z-index: -1;
}

.ring-one {
    width: 570px;
    height: 570px;

    right: -80px;
    top: -60px;
}

.ring-two {
    width: 700px;
    height: 700px;

    right: -145px;
    top: -125px;

    border-color: rgba(173,101,119,.15);
}

.hero-side-note {
    position: absolute;

    right: 4%;

    bottom: 9%;

    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 9px;

    font-size: 8px;

    letter-spacing: 3px;

    text-transform: uppercase;

    opacity: .5;
}

.hero-side-note i {
    font-size: 18px;
}

.floating-bow {
    position: absolute;

    color: var(--pink);

    font-size: 75px;

    pointer-events: none;

    animation:
        floating 5s ease-in-out infinite;
}

.bow-1 {
    top: 18%;
    left: 46%;
}

.bow-2 {
    right: 42%;
    bottom: 12%;

    font-size: 45px;

    animation-delay: -2s;
}

.floating-heart {
    position: absolute;

    left: 4%;
    top: 38%;

    color: var(--pink-dark);

    font-family: "Playfair Display", serif;

    font-size: 55px;

    opacity: .55;
}

@keyframes floating {

    0%,100% {
        transform: translateY(0) rotate(-5deg);
    }

    50% {
        transform: translateY(-20px) rotate(6deg);
    }
}


/* ==========================
INTRO
========================== */

.intro-section {
    min-height: 90vh;

    padding: 150px 10%;

    display: grid;

    grid-template-columns: 100px 1fr 100px;

    align-items: center;

    position: relative;
}

.intro-number {
    font-size: 9px;

    letter-spacing: 2px;

    color: var(--pink-dark);
}

.intro-center {
    max-width: 850px;

    text-align: center;

    margin: auto;
}

.intro-center h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(50px, 7vw, 100px);

    line-height: .91;

    font-weight: 500;
}

.intro-center h2 i {
    color: var(--pink-dark);
}

.intro-center > p:last-child {
    max-width: 480px;

    margin: 35px auto 0;

    font-size: 13px;

    line-height: 1.9;

    color: var(--brown-light);
}

.intro-decoration {
    font-family: "Playfair Display", serif;

    font-size: 70px;

    color: var(--pink);

    transform: rotate(12deg);
}


/* ==========================
CATEGORY
========================== */

.category-strip {
    overflow: hidden;

    padding: 30px 0;

    border-top: 1px solid var(--line);

    border-bottom: 1px solid var(--line);

    background: rgba(255,255,255,.35);
}

.category-track {
    width: max-content;

    display: flex;
    align-items: center;

    gap: 40px;

    animation: marquee 25s linear infinite;
}

.category-track span {
    font-family: "Playfair Display", serif;

    font-size: 30px;

    font-style: italic;
}

.category-track i {
    color: var(--pink-dark);

    font-style: normal;
}

@keyframes marquee {

    to {
        transform: translateX(-50%);
    }

}


/* ==========================
COLLECTION
========================== */

.collection {
    width: min(1200px, calc(100% - 50px));

    margin: auto;

    padding: 170px 0;
}

.collection-heading {
    display: flex;

    justify-content: space-between;

    align-items: end;

    margin-bottom: 70px;
}

.collection-heading h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 7vw, 100px);

    line-height: .86;

    font-weight: 500;
}

.collection-heading h2 em {
    color: var(--pink-dark);

    display: block;
}

.collection-heading > p {
    width: 280px;

    font-size: 11px;

    line-height: 1.8;

    color: var(--brown-light);
}


/* PRODUCT GRID */

.products {
    display: grid;

    grid-template-columns:
        repeat(12, 1fr);

    gap: 22px;

    align-items: start;
}

.product {
    background:
        rgba(255,253,252,.86);

    border:
        1px solid rgba(75,48,50,.09);

    padding: 9px;

    border-radius: 28px;

    box-shadow:
        0 25px 70px rgba(75,48,50,.1);

    transform-style: preserve-3d;

    transition:
        transform .6s cubic-bezier(.2,.8,.2,1),
        box-shadow .6s;

    overflow: hidden;
}

.product:hover {
    transform:
        translateY(-14px)
        rotateX(2deg)
        rotateY(-3deg);

    box-shadow:
        0 45px 100px rgba(75,48,50,.18);
}

.product-large {
    grid-column: span 7;
}

.product-tall {
    grid-column: span 5;
}

.product-small {
    grid-column: span 4;
}

.product-wide {
    grid-column: span 8;
}

.product-medium {
    grid-column: span 4;
}

.product-image {
    position: relative;

    overflow: hidden;

    border-radius: 21px;

    height: 460px;

    background: var(--pink-light);
}

.product-large .product-image {
    height: 580px;
}

.product-tall .product-image {
    height: 650px;
}

.product-wide .product-image {
    height: 430px;
}

.product-small .product-image,
.product-medium .product-image {
    height: 400px;
}

.product-image img {
    transition:
        transform 1s cubic-bezier(.2,.8,.2,1);
}

.product:hover .product-image img {
    transform: scale(1.07);
}

.product-number {
    position: absolute;

    left: 15px;
    top: 15px;

    width: 37px;
    height: 37px;

    border-radius: 50%;

    display: grid;
    place-items: center;

    background: rgba(255,255,255,.85);

    backdrop-filter: blur(10px);

    font-size: 9px;
}

.quick-view {
    position: absolute;

    right: 15px;
    bottom: 15px;

    border: 0;

    background: white;

    width: 55px;
    height: 55px;

    border-radius: 50%;

    font-size: 9px;

    cursor: pointer;

    opacity: 0;

    transform: translateY(10px);

    transition: .4s;
}

.product:hover .quick-view {
    opacity: 1;

    transform: translateY(0);
}

.product-info {
    padding: 18px 7px 8px;

    display: flex;

    align-items: center;
    justify-content: space-between;
}

.product-info small {
    font-size: 7px;

    letter-spacing: 2px;

    color: var(--pink-dark);
}

.product-info h3 {
    font-family: "Playfair Display", serif;

    font-size: 21px;

    font-weight: 500;

    margin-top: 5px;
}

.product-info strong {
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border: 1px solid var(--line);

    border-radius: 50%;

    font-size: 8px;
}


/* ==========================
FAKE BUNNY PRODUCT
========================== */

.pink-product {
    display: flex;

    align-items: center;
    justify-content: center;

    background:
        radial-gradient(
            circle at 40% 30%,
            white,
            #f4ccd5 45%,
            #dfa0ae
        );
}

.fake-bunny-product {
    width: 190px;
    height: 250px;

    position: relative;

    filter:
        drop-shadow(
            15px 25px 20px rgba(100,50,60,.15)
        );
}

.fb-ear {
    position: absolute;

    top: 0;

    width: 55px;
    height: 105px;

    border-radius: 60%;

    background: white;

    border: 2px solid #ead3d6;
}

.fb-ear::after {
    content: "";

    position: absolute;

    inset: 10px;

    border-radius: inherit;

    background: #f6c3cf;
}

.fb-ear.e1 {
    left: 32px;

    transform: rotate(-8deg);
}

.fb-ear.e2 {
    right: 32px;

    transform: rotate(8deg);
}

.fb-head {
    position: absolute;

    width: 155px;
    height: 135px;

    top: 55px;
    left: 17px;

    background: white;

    border-radius: 48%;

    border: 2px solid #ead3d6;
}

.fb-head span {
    position: absolute;

    top: 55px;

    width: 10px;
    height: 10px;

    background: var(--brown);

    border-radius: 50%;
}

.fb-head span:first-child {
    left: 42px;
}

.fb-head span:nth-child(2) {
    right: 42px;
}

.fb-head i {
    position: absolute;

    width: 9px;
    height: 7px;

    background: #e59cab;

    border-radius: 50%;

    left: 73px;
    top: 76px;
}

.fb-body {
    position: absolute;

    width: 130px;
    height: 90px;

    left: 30px;
    bottom: 0;

    background: white;

    border-radius: 50px;

    border: 2px solid #ead3d6;
}


/* ==========================
RIBBON
========================== */

.product-medium:nth-last-child(1) .product-image {
    background:
        radial-gradient(
            circle at center,
            #fff,
            #f7d6dd
        );
}

.ribbon-product {
    width: 230px;
    height: 180px;

    position: absolute;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%,-50%)
        rotate(-7deg);

    filter:
        drop-shadow(
            15px 20px 18px rgba(100,50,60,.13)
        );
}

.ribbon-loop {
    position: absolute;

    width: 115px;
    height: 95px;

    border-radius: 70% 35% 70% 35%;

    background:
        linear-gradient(
            145deg,
            #f6b5c1,
            #df8f9f
        );
}

.ribbon-loop.left {
    left: 0;

    transform: rotate(20deg);
}

.ribbon-loop.right {
    right: 0;

    transform:
        rotate(-20deg)
        scaleX(-1);
}

.ribbon-knot {
    position: absolute;

    width: 43px;
    height: 43px;

    left: 94px;
    top: 65px;

    background: #e89aaa;

    border-radius: 45%;

    z-index: 3;
}

.ribbon-tail {
    position: absolute;

    width: 75px;
    height: 90px;

    top: 90px;

    background: #e39aaa;

    clip-path:
        polygon(
            0 0,
            100% 0,
            72% 100%,
            45% 80%,
            20% 100%
        );
}

.tail-left {
    left: 62px;

    transform: rotate(10deg);
}

.tail-right {
    right: 62px;

    transform:
        rotate(-10deg)
        scaleX(-1);
}


/* ==========================
BOW WORLD
========================== */

.bow-world {
    height: 90vh;

    position: relative;

    overflow: hidden;

    display: grid;

    place-items: center;
}

.bow-background {
    position: absolute;

    inset: -15%;

    background:
        linear-gradient(
            rgba(255,255,255,.55),
            rgba(255,255,255,.55)
        ),
        repeating-linear-gradient(
            45deg,
            #f8dbe0 0 35px,
            white 35px 70px
        );

    transform: scale(1.15);

    z-index: -1;
}

.bow-message {
    text-align: center;

    background: rgba(255,253,252,.72);

    backdrop-filter: blur(18px);

    padding: 70px 90px;

    border-radius: 50%;

    box-shadow:
        0 40px 100px rgba(75,48,50,.12);
}

.bow-message p {
    font-size: 9px;

    letter-spacing: 3px;

    color: var(--pink-dark);
}

.bow-message h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(60px, 8vw, 110px);

    line-height: .82;

    font-weight: 500;

    margin: 15px 0;
}

.bow-message h2 em {
    color: var(--pink-dark);
}

.bow-decoration {
    position: absolute;

    color: var(--pink);

    pointer-events: none;
}

.huge-bow {
    left: 8%;
    top: 18%;

    font-size: 130px;

    transform: rotate(-15deg);
}

.tiny-bow {
    right: 9%;
    bottom: 16%;

    font-size: 80px;

    transform: rotate(15deg);
}


/* ==========================
PROCESS
========================== */

.process {
    padding: 180px 8%;

    text-align: center;
}

.process-heading h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(60px, 8vw, 105px);

    line-height: .85;

    font-weight: 500;
}

.process-heading h2 em {
    color: var(--pink-dark);
}

.process-grid {
    margin: 100px auto 0;

    max-width: 1100px;

    display: grid;

    grid-template-columns: 1fr auto 1fr auto 1fr;

    align-items: center;
}

.process-card {
    position: relative;

    padding: 45px 30px;

    background: rgba(255,255,255,.55);

    border-radius: 30px;

    border: 1px solid var(--line);
}

.process-card > span {
    position: absolute;

    top: 15px;
    left: 18px;

    font-size: 8px;

    color: var(--pink-dark);
}

.process-icon {
    width: 75px;
    height: 75px;

    margin: auto;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: var(--pink-light);

    font-family: "Playfair Display", serif;

    font-size: 28px;
}

.process-card h3 {
    font-family: "Playfair Display", serif;

    font-size: 25px;

    margin-top: 20px;

    font-weight: 500;
}

.process-card p {
    font-size: 11px;

    line-height: 1.8;

    margin-top: 10px;

    color: var(--brown-light);
}

.process-line {
    width: 45px;

    height: 1px;

    background: var(--pink);

    opacity: .5;
}


/* ==========================
IMAGE MOMENT
========================== */

.image-moment {
    min-height: 100vh;

    width: min(1250px, calc(100% - 50px));

    margin: auto;

    position: relative;

    display: flex;

    align-items: center;
}

.moment-image {
    width: 67%;
    height: 75vh;

    border-radius: 35px;

    overflow: hidden;

    box-shadow:
        25px 40px 100px rgba(75,48,50,.18);
}

.moment-image img {
    transition: transform 1.5s;
}

.image-moment:hover .moment-image img {
    transform: scale(1.05);
}

.moment-card {
    position: absolute;

    right: 2%;

    width: 430px;

    padding: 65px 55px;

    background:
        rgba(255,253,252,.9);

    backdrop-filter: blur(20px);

    border-radius: 30px;

    box-shadow:
        0 35px 90px rgba(75,48,50,.15);

    transform:
        rotate(3deg);
}

.moment-card span {
    font-size: 8px;

    letter-spacing: 3px;

    color: var(--pink-dark);
}

.moment-card h2 {
    font-family: "Playfair Display", serif;

    font-size: 58px;

    line-height: .9;

    font-weight: 500;

    margin-top: 18px;
}

.moment-card h2 em {
    color: var(--pink-dark);
}

.moment-card p {
    font-size: 12px;

    line-height: 1.8;

    margin-top: 25px;

    color: var(--brown-light);
}


/* ==========================
ABOUT
========================== */

.about-section {
    min-height: 100vh;

    width: min(1100px, calc(100% - 50px));

    margin: 150px auto;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    align-items: center;
}

.about-photo {
    position: relative;

    transform:
        rotate(-4deg);
}

.about-frame {
    height: 650px;

    overflow: hidden;

    border-radius: 35px;

    padding: 9px;

    background: white;

    box-shadow:
        25px 35px 90px rgba(75,48,50,.15);
}

.about-frame img {
    border-radius: 27px;
}

.about-sticker {
    position: absolute;

    right: -40px;
    bottom: 30px;

    width: 120px;
    height: 120px;

    display: grid;
    place-items: center;

    text-align: center;

    border-radius: 50%;

    background: var(--pink);

    color: white;

    font-family: "Playfair Display", serif;

    line-height: 1.1;

    transform: rotate(10deg);

    box-shadow:
        0 20px 45px rgba(75,48,50,.15);
}

.about-copy h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 6vw, 85px);

    line-height: .88;

    font-weight: 500;
}

.about-copy h2 em {
    color: var(--pink-dark);
}

.about-copy > p:not(.section-label) {
    max-width: 450px;

    font-size: 13px;

    line-height: 1.9;

    margin-top: 28px;

    color: var(--brown-light);
}

.signature {
    font-family: "Playfair Display", serif;

    font-style: italic;

    font-size: 20px;

    color: var(--pink-dark);

    margin-top: 35px;
}


/* ==========================
CUSTOM
========================== */

.custom {
    min-height: 80vh;

    position: relative;

    overflow: hidden;

    display: grid;

    place-items: center;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            #efb7c2,
            #f6d4da
        );
}

.custom-bg {
    position: absolute;

    inset: 0;

    opacity: .25;

    background:
        repeating-linear-gradient(
            90deg,
            white 0 70px,
            transparent 70px 140px
        );
}

.custom-content {
    position: relative;

    z-index: 2;

    max-width: 750px;

    padding: 80px 20px;
}

.custom-content .section-label {
    color: #9e5c6b;
}

.custom-content h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(60px, 8vw, 105px);

    line-height: .84;

    font-weight: 500;
}

.custom-content h2 em {
    display: block;

    color: white;
}

.custom-content > p:not(.section-label) {
    max-width: 470px;

    margin: 30px auto;

    font-size: 13px;

    line-height: 1.9;
}

.custom-button {
    display: inline-flex;

    padding: 18px 28px;

    background: var(--brown);

    color: white;

    border-radius: 100px;

    font-size: 10px;

    transition: .35s;
}

.custom-button:hover {
    transform: translateY(-5px);

    box-shadow:
        0 20px 40px rgba(75,48,50,.2);
}

.custom-bow {
    position: absolute;

    right: 8%;
    top: 13%;

    font-size: 110px;

    transform: rotate(15deg);

    opacity: .5;
}


/* ==========================
NOTES
========================== */

.love-notes {
    padding: 180px 8%;
}

.notes-heading {
    text-align: center;
}

.notes-heading h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 7vw, 90px);

    line-height: .88;

    font-weight: 500;
}

.notes-heading h2 em {
    color: var(--pink-dark);
}

.notes-grid {
    max-width: 1000px;

    margin: 90px auto 0;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.note {
    min-height: 280px;

    padding: 40px 30px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    background: white;

    border-radius: 25px;

    box-shadow:
        0 25px 70px rgba(75,48,50,.08);
}

.note:nth-child(1) {
    transform: rotate(-3deg);
}

.note:nth-child(2) {
    transform: rotate(2deg) translateY(25px);
}

.note:nth-child(3) {
    transform: rotate(-2deg);
}

.note > span {
    color: var(--pink-dark);

    font-size: 25px;
}

.note p {
    font-family: "Playfair Display", serif;

    font-size: 27px;

    line-height: 1.1;
}

.note small {
    font-size: 9px;

    opacity: .55;
}


/* ==========================
INSTAGRAM
========================== */

.instagram {
    padding: 100px 5% 170px;
}

.instagram-title {
    text-align: center;

    margin-bottom: 60px;
}

.instagram-title h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 7vw, 90px);

    line-height: .86;

    font-weight: 500;
}

.instagram-title h2 em {
    display: block;

    color: var(--pink-dark);
}

.instagram-title > a {
    display: inline-block;

    margin-top: 25px;

    font-size: 10px;

    border-bottom: 1px solid var(--brown);

    padding-bottom: 4px;
}

.instagram-grid {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        1.2fr 1fr 1fr 1fr;

    gap: 15px;
}

.instagram-grid > div {
    height: 330px;

    border-radius: 25px;

    overflow: hidden;

    background: var(--pink-light);
}

.instagram-grid img {
    transition: transform .8s;
}

.instagram-grid > div:hover img {
    transform: scale(1.08);
}

.gingham-tile {
    display: grid;
    place-items: center;

    background:
        repeating-linear-gradient(
            90deg,
            #f0c2cb 0 35px,
            #fff6f3 35px 70px
        ),
        repeating-linear-gradient(
            0deg,
            #f0c2cb 0 35px,
            #fff6f3 35px 70px
        );
}

.gingham-tile span {
    width: 80px;
    height: 80px;

    border-radius: 50%;

    background: rgba(255,255,255,.8);

    display: grid;
    place-items: center;

    font-family: "Playfair Display", serif;

    font-size: 35px;

    color: var(--pink-dark);
}


/* ==========================
FINAL
========================== */

.final-cta {
    min-height: 75vh;

    display: grid;

    place-items: center;

    padding: 100px 20px;

    text-align: center;

    background: var(--brown);

    color: white;
}

.final-small {
    color: var(--pink);

    font-size: 9px;

    letter-spacing: 3px;
}

.final-inner h2 {
    font-family: "Playfair Display", serif;

    font-size: clamp(65px, 9vw, 125px);

    line-height: .82;

    font-weight: 500;

    margin-top: 25px;
}

.final-inner h2 em {
    color: var(--pink);
}

.final-button {
    display: inline-flex;

    align-items: center;
    gap: 25px;

    margin-top: 50px;

    padding: 19px 25px;

    background: var(--pink);

    color: var(--brown);

    border-radius: 100px;

    font-size: 10px;

    transition: .35s;
}

.final-button span {
    font-size: 17px;
}

.final-button:hover {
    transform: translateY(-6px) scale(1.03);
}


/* ==========================
FOOTER
========================== */

footer {
    padding: 70px 30px 30px;

    background: var(--brown);

    color: white;
}

.footer-main {
    text-align: center;

    padding-bottom: 60px;
}

.footer-logo {
    font-family: "Playfair Display", serif;

    font-size: 35px;
}

.footer-main p {
    margin-top: 8px;

    font-size: 10px;

    opacity: .6;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,.15);

    padding-top: 20px;

    display: flex;

    justify-content: space-between;

    font-size: 9px;

    opacity: .6;
}


/* ==========================
BUNNY CURSOR
========================== */

.bunny-cursor {
    position: fixed;

    left: 0;
    top: 0;

    width: 45px;
    height: 45px;

    pointer-events: none;

    z-index: 10000;

    transform:
        translate(-50%,-50%);

    transition:
        transform .15s;
}

.bunny-face {
    position: absolute;

    width: 28px;
    height: 25px;

    left: 9px;
    top: 16px;

    background: white;

    border:
        1px solid #d18b99;

    border-radius: 50%;
}

.ear {
    position: absolute;

    width: 10px;
    height: 21px;

    background: white;

    border:
        1px solid #d18b99;

    border-radius: 70%;

    top: 1px;
}

.ear-left {
    left: 10px;

    transform: rotate(-8deg);
}

.ear-right {
    right: 10px;

    transform: rotate(8deg);
}

.eye {
    position: absolute;

    top: 9px;

    width: 3px;
    height: 3px;

    background: var(--brown);

    border-radius: 50%;
}

.eye-left {
    left: 7px;
}

.eye-right {
    right: 7px;
}

.nose {
    position: absolute;

    left: 12px;
    top: 13px;

    width: 5px;
    height: 4px;

    background: var(--pink-dark);

    border-radius: 50%;
}

.cheek {
    position: absolute;

    top: 14px;

    width: 5px;
    height: 3px;

    background: #f1b6c1;

    border-radius: 50%;
}

.cheek-left {
    left: 2px;
}

.cheek-right {
    right: 2px;
}


/* ==========================
RESPONSIVE
========================== */

@media(max-width:900px) {

    .navbar {
        width: calc(100% - 20px);
        top: 10px;
    }

    .desktop-nav,
    .nav-social {
        display: none;
    }

    .mobile-menu {
        display: block;
    }

    .hero {
        min-height: auto;

        padding:
            150px
            20px
            100px;

        display: block;
    }

    .hero-copy {
        width: 100%;

        margin: 0;

        text-align: center;
    }

    .hero h1 {
        font-size: 64px;

        letter-spacing: -3px;
    }

    .hero h1 em {
        padding-left: 0;
    }

    .hero-copy > p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-button {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-object {
        position: relative;

        width: min(360px, 82vw);

        top: auto;
        right: auto;

        margin: 70px auto 0;

        transform: rotate(4deg);
    }

    .hero-side-note {
        display: none;
    }

    .intro-section {
        grid-template-columns: 1fr;

        padding: 120px 20px;

        text-align: center;
    }

    .intro-number,
    .intro-decoration {
        display: none;
    }

    .collection {
        padding: 120px 0;
    }

    .collection-heading {
        display: block;

        text-align: center;
    }

    .collection-heading > p {
        margin: 25px auto 0;
    }

    .products {
        display: flex;

        flex-direction: column;
    }

    .product {
        width: 100%;
    }

    .product-image,
    .product-large .product-image,
    .product-tall .product-image,
    .product-wide .product-image,
    .product-small .product-image,
    .product-medium .product-image {
        height: 430px;
    }

    .quick-view {
        display: none;
    }

    .bow-world {
        height: 70vh;
    }

    .bow-message {
        padding: 55px 45px;
    }

    .huge-bow {
        font-size: 70px;
        left: 2%;
    }

    .tiny-bow {
        font-size: 50px;
    }

    .process {
        padding: 120px 20px;
    }

    .process-grid {
        display: flex;

        flex-direction: column;

        gap: 20px;
    }

    .process-line {
        width: 1px;
        height: 40px;
    }

    .process-card {
        width: min(400px, 100%);
    }

    .image-moment {
        display: block;

        min-height: auto;

        padding: 80px 0;
    }

    .moment-image {
        width: 100%;
        height: 550px;
    }

    .moment-card {
        position: relative;

        width: 90%;

        right: auto;

        margin:
            -100px auto
            0;

        transform: rotate(2deg);
    }

    .about-section {
        grid-template-columns: 1fr;

        gap: 70px;

        margin: 100px auto;
    }

    .about-photo {
        width: 90%;

        margin: auto;
    }

    .about-frame {
        height: 550px;
    }

    .about-copy {
        text-align: center;
    }

    .about-copy > p:not(.section-label) {
        margin-left: auto;
        margin-right: auto;
    }

    .notes-grid {
        grid-template-columns: 1fr;

        max-width: 400px;
    }

    .note {
        transform: none !important;
    }

    .instagram-grid {
        grid-template-columns: 1fr 1fr;
    }

    .instagram-grid > div {
        height: 280px;
    }

    .instagram-grid > div:first-child {
        grid-column: span 2;
    }

    .custom-bow {
        font-size: 65px;
    }

    .bunny-cursor {
        display: none;
    }
}


@media(max-width:550px) {

    .navbar {
        height: 60px;
        padding: 0 18px;
    }

    .logo strong {
        font-size: 18px;
    }

    .hero h1 {
        font-size: 58px;
    }

    .hero-copy > p {
        font-size: 12px;
    }

    .floating-bow {
        font-size: 40px;
    }

    .collection-heading h2,
    .process-heading h2 {
        font-size: 55px;
    }

    .moment-card {
        padding: 45px 30px;
    }

    .moment-card h2 {
        font-size: 45px;
    }

    .custom-content h2 {
        font-size: 60px;
    }

    .instagram-grid {
        gap: 8px;
    }

    .instagram-grid > div {
        height: 210px;
        border-radius: 15px;
    }

    .final-inner h2 {
        font-size: 65px;
    }

    .footer-bottom {
        flex-direction: column;

        gap: 12px;

        text-align: center;
    }
}


@media(prefers-reduced-motion:reduce) {

    *,
    *::before,
    *::after {
        animation: none !important;

        transition: none !important;

        scroll-behavior: auto !important;
    }

}
