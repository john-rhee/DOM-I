const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation

// Assigning menu texts to a variable
const menuredo = siteContent.nav;
// Making array of menu texts
const menutext = Object.values(menuredo);
menutext.pop();
console.log(menutext);

// Running forEach to make object
menutext.forEach(item => {
  let menuitem = document.createElement('a');
  menuitem.textContent = item;
  //Changing font color to green
  menuitem.style.color = 'green';
  let oldnav = document.querySelector(".container header nav");
  oldnav.appendChild(menuitem);
})

//  const menu = document.querySelectorAll("a");
//  console.log(menu);
//  menu[0].textContent = siteContent["nav"]["nav-item-1"];
//  menu[1].textContent = siteContent["nav"]["nav-item-2"];
//  menu[2].textContent = siteContent["nav"]["nav-item-3"];
//  menu[3].textContent = siteContent["nav"]["nav-item-4"];
//  menu[4].textContent = siteContent["nav"]["nav-item-5"];
//  menu[5].textContent = siteContent["nav"]["nav-item-6"];

//  //Changing font color to green
//  menu.forEach( element => {
//    element.style.color = 'green';
//  });

//Prepend & appendChild

let newa = document.querySelector(".container header nav");
console.log(newa);
const prepender = document.createElement('a');
prepender.textContent = 'Prepender';
newa.prepend(prepender);
prepender.style.color = 'green';
const appenderChild = document.createElement('a');
appenderChild.textContent = 'Appender';
newa.appendChild(appenderChild);
appenderChild.style.color = 'green';

//Circle image
let circleimg = document.getElementById("cta-img");
circleimg.setAttribute("src",siteContent["cta"]["img-src"] )

//H1 text
let h1text = document.querySelector("h1");
console.log(h1text);
h1text.textContent = siteContent["cta"]["h1"];

//Button
let gsbutton = document.querySelector("button");
gsbutton.textContent = siteContent["cta"]["button"];

//H4 text
let h4text = document.querySelectorAll("h4");
h4text[0].textContent = siteContent["main-content"]["features-h4"];
h4text[1].textContent = siteContent["main-content"]["about-h4"];
h4text[2].textContent = siteContent["main-content"]["services-h4"];
h4text[3].textContent = siteContent["main-content"]["product-h4"];
h4text[4].textContent = siteContent["main-content"]["vision-h4"];
h4text[5].textContent = siteContent["contact"]["contact-h4"];

//P text
let allp = document.querySelectorAll("p");
allp[0].textContent = siteContent["main-content"]["features-content"];
allp[1].textContent = siteContent["main-content"]["about-content"];
allp[2].textContent = siteContent["main-content"]["services-content"];
allp[3].textContent = siteContent["main-content"]["product-content"];
allp[4].textContent = siteContent["main-content"]["vision-content"];
allp[5].textContent = siteContent["contact"]["address"];
allp[6].textContent = siteContent["contact"]["phone"];
allp[7].textContent = siteContent["contact"]["email"];
allp[8].textContent = siteContent["footer"]["copyright"];


//Middle image
let midimg = document.getElementById("middle-img");
midimg.setAttribute("src",siteContent["main-content"]["middle-img-src"]);


