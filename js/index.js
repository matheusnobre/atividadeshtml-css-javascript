var body = document.querySelector("body");
var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const ativ = btn.getAttribute("class");

    if(ativ == "active") {
        body.style.background = "#333";
        body.style.color = "#add8e6";
    } else {
        body.style.background = "#add8e6";
        body.style.color = "#333";
    }
})