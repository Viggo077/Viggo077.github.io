
let isSwipeTwenty = false;

function twentySwipe() {
    const main = document.querySelector("#main-page");
    const twenty = document.querySelector("#twenty-page");

    if (main.style.transform === "translateY(-100vh)") {
        main.style.transform = "translatey(0vh)";
        twenty.style.transform = "translateX(-200%) translatey(100vh)";
        isSwipeTwenty = false;
    }   else{
        main.style.transform = "translateY(-100vh)";
        twenty.style.transform = "translateX(-200%) translatey(0vh)";
        isSwipeTwenty = true;
    }


}