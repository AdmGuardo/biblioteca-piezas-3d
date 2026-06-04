document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const filterButtons = document.querySelectorAll(".btn-filter");
    const items = document.querySelectorAll(".item");
    const noResults = document.getElementById("no-results");
    const themeToggle = document.getElementById("theme-toggle");

    let activeFilter = "all";
    let searchText = "";

    // --- SISTEMA MODO CLARO / OSCURO ---
    // Comprobar preferencia previa o sistema operativo
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
        document.documentElement.setAttribute("data-theme", "light");
    }

    // Evento de clic para alternar el tema
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "light") {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    });

    // --- MOTOR DE FILTRADO Y BÚSQUEDA ---
    function applyFilters() {
        let visibleCount = 0;

        items.forEach(item => {
            const matchesFilter = (activeFilter === "all" || item.classList.contains(activeFilter));
            const matchesSearch = item.innerText.toLowerCase().includes(searchText);

            if (matchesFilter && matchesSearch) {
                item.style.display = "flex";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noResults.classList.remove("hidden");
        } else {
            noResults.classList.add("hidden");
        }
    }

    searchInput.addEventListener("input", () => {
        searchText = searchInput.value.toLowerCase();
        applyFilters();
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            activeFilter = button.getAttribute("data-filter");
            applyFilters();
        });
    });
});
