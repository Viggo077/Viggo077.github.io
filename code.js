

var text = "";
var list = ["", "077"];
var index = 0;
var del = false;

function remover() {
    var header = document.getElementById("name-type");
    var webTitle = document.getElementById("web-title")

    if (del) {
        text = list[index].substring(0, text.length - 1);
        header.innerHTML = "Viggo" + text + "|";
        webTitle.innerHTML ="Viggo" + text + "|";
        if (text === "") {
            del = false;
            index = (index + 1) % list.length;
            setTimeout(remover, 400);
        }   else{
            setTimeout(remover, 70);
        }
        
    } else {
    if (text === list[index]) {
        del = true;
        setTimeout(remover, 1000);
    }   else {
        text = list[index].substring(0, text.length + 1);
        header.innerHTML = "Viggo" + text + "|"
        webTitle.innerHTML ="Viggo" + text + "|";
        setTimeout(remover, 300)
    }
    }

}

remover()



