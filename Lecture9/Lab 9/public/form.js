document.addEventListener("submit", event => {
    const x = document.createElement("li");
    const t = document.createTextNode("tester2");
    x.appendChild(t);
    document.getElementById("attempts").appendChild(x);
    console.log("This is working");
})