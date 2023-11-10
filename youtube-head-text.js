var youtubeText = "YouTube";
var youtubeType = "";
var youtubeCheck = true;

function youtubeDelay(){
    setTimeout(youtubeHead, 250)
}

function youtubeHead() {
    const youtubeRead = document.getElementById("youtube-head-text");
    const youtubeSpan = document.querySelector("#youtube-span");
    const youtube = document.querySelector("#youtube-page");

   

    if (isSwipeYoutube) {
        if (youtubeType.length < youtubeText.length) {
            youtubeType = youtubeText.substring(0, youtubeType.length + 1);
            youtubeRead.innerHTML = youtubeType + '<span id="youtube-span">|</span>';
            setTimeout(youtubeHead, 50);
        } else {
            if (youtubeCheck) {
                youtubeSpan.style.opacity = "0%";
                youtubeCheck = false;
            } else {
                youtubeSpan.style.opacity = "100%";
                youtubeCheck = true;
            }
            setTimeout(youtubeHead, 500);
        }
    } else {
        youtubeRead.innerHTML = "&nbsp;";
        youtubeText = "YouTube";
        youtubeType = "";
        youtubeCheck = true;
    }


}
