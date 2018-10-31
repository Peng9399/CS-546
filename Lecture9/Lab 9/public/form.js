document.addEventListener("submit", event => {
    event.preventDefault();         //stops the page from refreshing
    const x = document.createElement("li");
    const t = document.createTextNode("tester2");
    x.appendChild(t);
    document.getElementById("attempts").appendChild(x);
})