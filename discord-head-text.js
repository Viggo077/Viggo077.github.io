var discordText = "Discord";
var discordType = "";
var discordCheck = true;

function discordDelay(){
    setTimeout(discordHead, 250)
}

function discordHead() {
    const discordRead = document.getElementById("discord-head-text");
    const discordSpan = document.querySelector("#discord-span");
    const discord = document.querySelector("#discord-page");

    

    if (discord.style.transform === "translateX(-100%)") {
        if (discordType.length < discordText.length) {
            discordType = discordText.substring(0, discordType.length + 1);
            discordRead.innerHTML = discordType + '<span id="discord-span">|</span>';
            setTimeout(discordHead, 50);
        } else {
            if (discordCheck) {
                discordSpan.style.opacity = "0%";
                discordCheck = false;
            } else {
                discordSpan.style.opacity = "100%";
                discordCheck = true;
            }
            setTimeout(discordHead, 500);
        }
    } else {
        discordRead.innerHTML = "&nbsp;";
        discordText = "Discord";
        discordType = "";
        discordCheck = true;
    }


}
