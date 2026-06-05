// =============================================
// TECH 3D LIBRARY — script.js
// Lee piezas/index.json generado por GitHub Actions
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') document.documentElement.setAttribute('data-theme', 'light');

    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
        localStorage.setItem('theme', isLight ? 'dark' : 'light');
    });

    // --- MENÚ HAMBURGUESA ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu    = document.getElementById('nav-menu');
    const menuIcon   = menuToggle.querySelector('.menu-icon');
    const closeIcon  = menuToggle.querySelector('.close-icon');

    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        menuIcon.classList.toggle('hidden', isOpen);
        closeIcon.classList.toggle('hidden', !isOpen);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // --- ICONOS DE ESTADO ---
    const estadoConfig = {
        finalizado: { label: 'Finalizado',    cls: 'tag-ok',  indicator: 'ok'  },
        desarrollo: { label: 'En desarrollo', cls: 'tag-dev', indicator: 'dev' },
        revision:   { label: 'En revisión',   cls: 'tag-rev', indicator: 'rev' }
    };

    const iconoCategoria = {
        engranajes: 'settings',
        soportes:   'wrench',
        carcasas:   'box',
        otros:      'package'
    };

    // --- ELEMENTOS DEL DOM ---
    const grid      = document.getElementById('catalog-grid');
    const noResults = document.getElementById('no-results');
    const searchInput  = document.getElementById('search');
    const filterBtns   = document.querySelectorAll('.btn-filter');

    let todasLasPiezas = [];
    let filtroActivo   = 'all';
    let busqueda       = '';

    // --- RENDER CARDS ---
    function renderCards(lista) {
        grid.innerHTML = '';

        if (lista.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        noResults.classList.add('hidden');

        lista.forEach(p => {
            const cfg   = estadoConfig[p.estado] || estadoConfig.desarrollo;
            const icono = iconoCategoria[p.categoria] || 'package';
            const card  = document.createElement('div');
            card.className = `card item ${p.categoria}`;
            card.dataset.status = p.estado;

            const imgHtml = p.imagen
                ? `<img src="${p.imagen}" alt="${p.nombre}" class="card-img" onerror="this.style.display='none'">`
                : '';

            const stlHtml = p.archivos && p.archivos.stl
                ? `<a href="${p.archivos.stl}" class="card-link" download><i data-lucide="download"></i> STL</a>`
                : '';

            const planoHtml = p.archivos && p.archivos.plano
                ? `<a href="${p.archivos.plano}" class="card-link" target="_blank"><i data-lucide="file-text"></i> Plano</a>`
                : '';

            card.innerHTML = `
                ${imgHtml}
                <div class="card-header">
                    <i data-lucide="${icono}" class="card-icon"></i>
                    <span class="part-id">#${p.id}</span>
                </div>
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <div class="card-meta-row">
                    <span class="card-autor"><i data-lucide="user" class="meta-icon"></i>${p.autor || 'Desconocido'}</span>
                    <span class="card-curso">${p.curso || ''}</span>
                </div>
                <div class="card-actions">
                    ${stlHtml}${planoHtml}
                </div>
                <span class="tag ${cfg.cls}">${cfg.label}</span>
            `;
            grid.appendChild(card);
        });

        if (window.lucide) lucide.createIcons();
    }

    // --- FILTROS ---
    function aplicarFiltros() {
        const resultado = todasLasPiezas.filter(p => {
            const matchCat    = filtroActivo === 'all' || p.categoria === filtroActivo;
            const matchSearch = busqueda === '' ||
                [p.nombre, p.descripcion, p.categoria, p.estado, p.autor, p.material]
                .some(campo => campo && campo.toLowerCase().includes(busqueda));
            return matchCat && matchSearch;
        });
        renderCards(resultado);
        actualizarTabla(resultado);
    }

    searchInput.addEventListener('input', e => {
        busqueda = e.target.value.toLowerCase().trim();
        aplicarFiltros();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtroActivo = btn.dataset.filter;
            aplicarFiltros();
        });
    });

    // --- TABLA DE ESTADO ---
    function actualizarTabla(lista) {
        const tbody = document.querySelector('.tech-table tbody');
        if (!tbody) return;
        tbody.innerHTML = lista.map(p => {
            const cfg = estadoConfig[p.estado] || estadoConfig.desarrollo;
            return `<tr>
                <td><code>${p.id}</code></td>
                <td class="font-medium">${p.nombre}</td>
                <td><span class="status-indicator ${cfg.indicator}">${cfg.label}</span></td>
            </tr>`;
        }).join('');
    }

    // --- CARGAR JSON ---
    fetch('piezas/index.json')
        .then(res => {
            if (!res.ok) throw new Error('No se pudo cargar el catálogo');
            return res.json();
        })
        .then(datos => {
            todasLasPiezas = datos;
            aplicarFiltros();
        })
        .catch(err => {
            console.warn('Error cargando catálogo:', err);
            grid.innerHTML = `<p class="error-msg">No se pudo cargar el catálogo. Comprueba que existe piezas/index.json</p>`;
        });
});
