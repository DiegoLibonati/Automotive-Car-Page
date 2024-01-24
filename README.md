# Automotive-Car-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about car repair, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Typescript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/95`](https://www.diegolibonati.com.ar/#/project/95)

## Video

https://github.com/DiegoLibonati/Automotive-Car-Page/assets/99032604/db88c40e-5a3e-43d0-b02b-cd5444726548

## Documentation

With `btnOpenNav` we get the button that will open the ship, with the `btnCloseNav` button we will close the ship and finally with the `navContainer` it will be that we will assign the class to open the ship or close:

```
const btnOpenNav = document.getElementById("btnOpen");
const btnCloseNav = document.getElementById("btnClose");
const navContainer = document.querySelector(".header_container-nav");
```

At this time we assign the click event. Depending on the button, a class will be added or removed from `navContainer`, whether or not the `btnOpenNav` button will be shown and not the `btnCloseNav` will be shown or not:

```
btnOpenNav.addEventListener("click", ()=>{

    navContainer.classList.add("show-nav");
    btnOpenNav.classList.add("noshow-btn");
    btnCloseNav.style.display = "block";

});

btnCloseNav.addEventListener("click", ()=>{

    navContainer.classList.remove("show-nav");
    btnOpenNav.classList.remove("noshow-btn");
    btnCloseNav.style.display = "none";

});
```
