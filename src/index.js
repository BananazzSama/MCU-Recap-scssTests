const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const page1 = document.getElementsByClassName('item');
const page2 = document.getElementsByClassName('item__hidden-on-desktop');

var currPage = 1;

if (currPage === 1) {
    backBtn.classList.add("hide-btn");
}

backBtn.addEventListener("click", function(e) {
    if (currPage === 2) {
        hideDisplay("4", "5", "6");
        showDisplay("1", "2", "3");
        currPage -= 1;
    }
    else if (currPage === 3) {
        hideDisplay("7", "8", "9");
        showDisplay("4", "5", "6");
        currPage -= 1;
    }

    if (currPage === 1) {
        backBtn.classList.add("hide-btn");
    }
});

nextBtn.addEventListener("click", function(e) {
    if (currPage === 1) {
        hideDisplay("1", "2", "3");
        showDisplay("4", "5", "6");
        currPage += 1;
    }
    else if (currPage === 2) {
        hideDisplay("4", "5", "6");
        showDisplay("7", "8", "9");
        currPage += 1;
    }

    if (currPage != 1) {
        backBtn.classList.remove("hide-btn");
    }
});

function hideDisplay(el1, el2, el3) {
    document.getElementById(el1).classList.remove("item");
    document.getElementById(el2).classList.remove("item");
    document.getElementById(el3).classList.remove("item");
    document.getElementById(el1).classList.add("item__hidden-on-desktop");
    document.getElementById(el2).classList.add("item__hidden-on-desktop");
    document.getElementById(el3).classList.add("item__hidden-on-desktop");
}

function showDisplay(el1, el2, el3) {
    document.getElementById(el1).classList.add("item", "slide-in");
    document.getElementById(el2).classList.add("item", "slide-in");
    document.getElementById(el3).classList.add("item", "slide-in");
    document.getElementById(el1).classList.remove("item__hidden-on-desktop");
    document.getElementById(el2).classList.remove("item__hidden-on-desktop");
    document.getElementById(el3).classList.remove("item__hidden-on-desktop");
}