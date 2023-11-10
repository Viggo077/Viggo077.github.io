


function discordSwipe() {
    const main = document.querySelector("#main-page");
    const discord = document.querySelector("#discord-page");

    if (main.style.transform === "translateX(-100%)") {
        main.style.transform = "translateX(0%)";
        discord.style.transform = "translateX(100%)";
    }   else{
        main.style.transform = "translateX(-100%)";
        discord.style.transform = "translateX(-100%)";
    }


}