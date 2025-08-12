document.addEventListener("DOMContentLoaded", () => {
    const dog = document.getElementById("dog");
    const clicksEl = document.getElementById("clicksEl");
    let clicks = 0;

    dog.addEventListener("click", () => {
        clicks += 1;
        clicksEl.innerHTML = `<h1> clicks: ${clicks} </h1>`;
    });
});