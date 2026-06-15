const btnTheme = document.getElementById("btnTheme");
const icone = btnTheme.querySelector(".material-icons");

btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "escuro");
        icone.textContent = "light_mode";
    } else {
        localStorage.setItem("tema", "claro");
        icone.textContent = "dark_mode";
    }
});

if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-mode");
    icone.textContent = "light_mode";
}

const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");

let tamanho = Number(localStorage.getItem("fonte")) || 16;

document.documentElement.style.fontSize = tamanho + "px";

btnAumentar.addEventListener("click", () => {
    tamanho += 2;
    document.documentElement.style.fontSize = tamanho + "px";
    localStorage.setItem("fonte", tamanho);
});

btnDiminuir.addEventListener("click", () => {
    tamanho -= 2;
    document.documentElement.style.fontSize = tamanho + "px";
    localStorage.setItem("fonte", tamanho);
});