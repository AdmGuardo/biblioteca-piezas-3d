document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const filterButtons = document.querySelectorAll(".btn-filter");
    const items = document.querySelectorAll(".item");
    const noResults = document.getElementById("no-results");

    let activeFilter = "all";
    let searchText = "";

    // Función unificada para filtrar tarjetas
    function applyFilters() {
        let visibleCount = 0;

        items.forEach(item => {
            const matchesFilter = (activeFilter === "all" || item.classList.contains(activeFilter));
            const matchesSearch = item.innerText.toLowerCase().includes(searchText);

            if (matchesFilter && matchesSearch) {
                item.style.display = "flex"; // Se cambió a flex para respetar el diseño de la tarjeta
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        // Mostrar aviso si no hay resultados
        if (visibleCount === 0) {
            noResults.classList.remove("hidden");
        } else {
            noResults.classList.add("hidden");
        }
    }

    // Evento del buscador
    searchInput.addEventListener("input", () => {
        searchText = searchInput.value.toLowerCase();
        applyFilters();
    });

    // Eventos de botones de filtrado rápido
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Alternar clase active en los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            activeFilter = button.getAttribute("data-filter");
            applyFilters();
        });
    });
});
