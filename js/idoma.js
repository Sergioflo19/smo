const langDropdown = document.getElementById("langDropdown");
const selectedText = document.getElementById("selectedText");
const selectedFlag = document.getElementById("selectedFlag");
const languageOptions = document.getElementById("languageOptions");

const languages = {
  ES: {
    text: "ESPAÑOL",
    flag: "/assets/icons/ESPAÑOL.png"
  },
  EN: {
    text: "ENGLISH",
    flag: "/assets/icons/INGLES.png"
  }
};

// Estado actual
let currentLang = "ES";

// Abrir / cerrar dropdown
langDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle("active");
});

// Cambiar idioma (funciona en ambos sentidos)
languageOptions.addEventListener("click", () => {
  // Cambiar idioma
  currentLang = currentLang === "ES" ? "EN" : "ES";

  // Aplicar nuevo idioma al seleccionado
  selectedText.textContent = languages[currentLang].text;
  selectedFlag.src = languages[currentLang].flag;

  // Actualizar la opción visible debajo
  const otherLang = currentLang === "ES" ? "EN" : "ES";

  languageOptions.innerHTML = `
    <div class="lang-option">
      <img src="${languages[otherLang].flag}">
      <span>${languages[otherLang].text}</span>
    </div>
  `;

  langDropdown.classList.remove("active");
});

// Cerrar si haces click afuera
document.addEventListener("click", () => {
  langDropdown.classList.remove("active");
});
