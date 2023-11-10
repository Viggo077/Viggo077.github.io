let isSwipeYoutube = false;

function youtubeSwipe() {
    const main = document.querySelector("#main-page");
    const youtube = document.querySelector("#youtube-page");

    if (main.style.transform === "translateX(100%)") {
        main.style.transform = "translateX(0%)";
        youtube.style.transform = "translateX(-400%)";
        isSwipeYoutube = false;
    }   else{
        main.style.transform = "translateX(100%)";
        youtube.style.transform = "translateX(-300%)";
        isSwipeYoutube = true;
    }


}