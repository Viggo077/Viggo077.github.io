
function getPass(){

    const pass = "Crispy21"
    var userInput = document.getElementById("twenty-textinput").value; 
    const ripCrispy = document.querySelector("#rip-crispy");
    if(userInput === pass){
        ripCrispy.style.opacity = "1"
    }
}