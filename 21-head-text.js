var twentyText = "21";
var twentyType = "";
var twentyCheck = true;

function twentyDelay(){
    setTimeout(twentyHead, 320)
}

function twentyHead() {
    const twentyRead = document.getElementById("twenty-head-text");
    const twentySpan = document.querySelector("#twenty-span");
    const twenty = document.querySelector("#twenty-page");

   

    if (isSwipeTwenty) {
        if (twentyType.length < twentyText.length) {
            twentyType = twentyText.substring(0, twentyType.length + 1);
            twentyRead.innerHTML = twentyType + '<span id="twenty-span">|</span>';
            setTimeout(twentyHead, 130);
        } else {
            if (twentyCheck) {
                twentySpan.style.opacity = "0%";
                twentyCheck = false;
            } else {
                twentySpan.style.opacity = "100%";
                twentyCheck = true;
            }
            setTimeout(twentyHead, 500);
        }
    } else {
        twentyRead.innerHTML = "&nbsp;";
        twentyText = "21";
        twentyType = "";
        twentyCheck = true;
    }


}
