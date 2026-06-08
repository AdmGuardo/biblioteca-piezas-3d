// =============================================
// IES Guardo LIBRARY — script.js
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
        din:        'ruler',
        otros:      'package'
    };

    // --- ELEMENTOS DEL DOM ---
    const grid        = document.getElementById('catalog-grid');
    const noResults   = document.getElementById('no-results');
    const searchInput = document.getElementById('search');
    const filterBtns  = document.querySelectorAll('.btn-filter');

    let todasLasPiezas  = [];
    let listaTabla      = [];  // lista actual mostrada en la tabla
    let filtroActivo    = 'all';
    let busqueda        = '';
    let sortAsc         = null; // null = sin ordenar, true = asc, false = desc

    // --- LIGHTBOX ---
    const lightbox      = document.getElementById('lightbox');
    const lightboxImg   = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    function abrirLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (window.lucide) lucide.createIcons();
    }

    function cerrarLightbox() {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }

    lightbox.addEventListener('click', cerrarLightbox);
    lightboxImg.addEventListener('click', e => e.stopPropagation());
    lightboxClose.addEventListener('click', cerrarLightbox);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarLightbox(); });

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

            const img = card.querySelector('.card-img');
            if (img) img.addEventListener('click', () => abrirLightbox(img.src, img.alt));
        });

        if (window.lucide) lucide.createIcons();
    }

    // --- TABLA DE ESTADO ---
    function actualizarTabla(lista) {
        listaTabla = [...lista];
        renderTabla(listaTabla);
    }

    function renderTabla(lista) {
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

    // --- ORDENAR POR ID ---
    const thId     = document.getElementById('th-id');
    const sortIcon = document.getElementById('sort-icon');

    function setSortIcon(state) {
        const icons = { null: 'chevrons-up-down', true: 'chevron-up', false: 'chevron-down' };
        sortIcon.innerHTML = `<i data-lucide="${icons[state]}" style="width:14px;height:14px;vertical-align:middle;"></i>`;
        if (window.lucide) lucide.createIcons();
    }

    thId.addEventListener('click', () => {
        if (sortAsc === null || sortAsc === false) {
            sortAsc = true;
        } else {
            sortAsc = false;
        }
        setSortIcon(sortAsc);
        const sorted = [...listaTabla].sort((a, b) =>
            sortAsc
                ? parseInt(a.id) - parseInt(b.id)
                : parseInt(b.id) - parseInt(a.id)
        );
        renderTabla(sorted);
    });

    // --- FILTROS ---
    function aplicarFiltros() {
        const resultado = todasLasPiezas.filter(p => {
            const matchCat    = filtroActivo === 'all' || p.categoria === filtroActivo;
            const matchSearch = busqueda === '' ||
                [p.nombre, p.descripcion, p.categoria, p.estado, p.autor]
                .some(campo => campo && campo.toLowerCase().includes(busqueda));
            return matchCat && matchSearch;
        });
        sortAsc = null;
        setSortIcon(null);
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

    // --- CARGAR JSON ---
    fetch('piezas/index.json')
        .then(res => {
            if (!res.ok) throw new Error('No se pudo cargar el catálogo');
            return res.json();
        })
        .then(datos => {
            todasLasPiezas = datos;
            aplicarFiltros();
            if (window.lucide) lucide.createIcons();
        })
        .catch(err => {
            console.warn('Error cargando catálogo:', err);
            grid.innerHTML = `<p class="error-msg">No se pudo cargar el catálogo. Comprueba que existe piezas/index.json</p>`;
            if (window.lucide) lucide.createIcons();
        });
});
