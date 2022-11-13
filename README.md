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

## Description

I made a website about car repair, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Galery

![Automotive-Car](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/automotive-0.jpg)

![Automotive-Car](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/automotive-1.jpg)

![Automotive-Car](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/automotive-2.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Automotive%20Car%20Page`

## Video

https://user-images.githubusercontent.com/99032604/198900187-1d4dfa68-c6d4-48aa-9601-28e5f44f3edc.mp4

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
