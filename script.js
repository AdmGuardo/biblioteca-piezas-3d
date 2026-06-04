document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const filterButtons = document.querySelectorAll(".btn-filter");
    const items = document.querySelectorAll(".item");
    const noResults = document.getElementById("no-results");
    
    // Elementos del menú hamburguesa y tema
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navLinks = document.querySelectorAll(".nav-link");

    let activeFilter = "all";
    let searchText = "";

    // --- MENÚ HAMBURGUESA ---
    function toggleMenu() {
        navMenu.classList.toggle("open");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Cerrar el menú al hacer clic en un enlace de navegación (útil en móviles)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("open")) {
                toggleMenu();
            }
            // Cambiar clase activa visual
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // --- SISTEMA MODO CLARO / OSCURO ---
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
        document.documentElement.setAttribute("data-theme", "light");
    }

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

    // --- FILTRADO Y BÚSQUEDA ---
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
