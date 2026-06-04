// =============================================
// TECH 3D LIBRARY — script.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- TEMA OSCURO / CLARO ---
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
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = menuToggle.querySelector('.menu-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');

    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        menuIcon.classList.toggle('hidden', isOpen);
        closeIcon.classList.toggle('hidden', !isOpen);
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // --- ACTIVE NAV LINK EN SCROLL ---
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));

    // --- DATOS DE PIEZAS ---
    const piezas = [
        {
            id: '001',
            nombre: 'Engranaje Helicoidal',
            descripcion: 'Pieza mecánica de transmisión de potencia de alta resistencia.',
            categoria: 'engranajes',
            estado: 'desarrollo',
            icono: 'settings',
            material: 'Acero AISI 4140',
            peso: '1.24 kg',
            revision: 'Rev. A'
        },
        {
            id: '002',
            nombre: 'Soporte Motor NEMA',
            descripcion: 'Soporte estructural reforzado para motores paso a paso.',
            categoria: 'soportes',
            estado: 'finalizado',
            icono: 'wrench',
            material: 'Aluminio 6061',
            peso: '0.87 kg',
            revision: 'Rev. C'
        },
        {
            id: '003',
            nombre: 'Carcasa Reductora',
            descripcion: 'Protección modular estanca para alojamiento de mecanismos internos.',
            categoria: 'carcasas',
            estado: 'desarrollo',
            icono: 'box',
            material: 'PLA+ / ABS',
            peso: '0.45 kg',
            revision: 'Rev. B'
        },
        {
            id: '004',
            nombre: 'Piñón Recto 32T',
            descripcion: 'Engranaje recto de 32 dientes para transmisiones de baja velocidad.',
            categoria: 'engranajes',
            estado: 'finalizado',
            icono: 'cog',
            material: 'Nylon PA6',
            peso: '0.31 kg',
            revision: 'Rev. D'
        },
        {
            id: '005',
            nombre: 'Soporte Rodamiento SKF',
            descripcion: 'Alojamiento de precisión para rodamientos SKF serie 6000.',
            categoria: 'soportes',
            estado: 'revision',
            icono: 'anchor',
            material: 'Acero St-37',
            peso: '0.62 kg',
            revision: 'Rev. A'
        },
        {
            id: '006',
            nombre: 'Carcasa Electrónica IP65',
            descripcion: 'Caja de protección IP65 para electrónica de control industrial.',
            categoria: 'carcasas',
            estado: 'finalizado',
            icono: 'shield',
            material: 'ABS Ignífugo',
            peso: '0.19 kg',
            revision: 'Rev. E'
        }
    ];

    const estadoConfig = {
        finalizado: { label: 'Finalizado',   cls: 'tag-ok',  indicator: 'ok'  },
        desarrollo: { label: 'En desarrollo', cls: 'tag-dev', indicator: 'dev' },
        revision:   { label: 'En revisión',   cls: 'tag-rev', indicator: 'rev' }
    };

    // --- RENDER DE CARDS ---
    const grid = document.getElementById('catalog-grid');
    const noResults = document.getElementById('no-results');
    const contador = document.getElementById('parte-contador');

    function renderCards(lista) {
        grid.innerHTML = '';

        if (lista.length === 0) {
            noResults.classList.remove('hidden');
            if (contador) contador.textContent = '0 piezas';
            return;
        }

        noResults.classList.add('hidden');
        if (contador) contador.textContent = `${lista.length} pieza${lista.length !== 1 ? 's' : ''}`;

        lista.forEach((p, i) => {
            const cfg = estadoConfig[p.estado] || estadoConfig.desarrollo;
            const card = document.createElement('div');
            card.className = `card item ${p.categoria}`;
            card.dataset.status = p.estado;
            card.style.animationDelay = `${i * 60}ms`;
            card.innerHTML = `
                <div class="card-header">
                    <i data-lucide="${p.icono}" class="card-icon"></i>
                    <div class="card-meta">
                        <span class="part-id">#${p.id}</span>
                        <span class="revision-tag">${p.revision}</span>
                    </div>
                </div>
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <div class="card-specs">
                    <span class="spec-item"><i data-lucide="layers" class="spec-icon"></i>${p.material}</span>
                    <span class="spec-item"><i data-lucide="scale" class="spec-icon"></i>${p.peso}</span>
                </div>
                <span class="tag ${cfg.cls}">${cfg.label}</span>
            `;
            grid.appendChild(card);
        });

        // Re-inicializar iconos de Lucide en las nuevas cards
        if (window.lucide) lucide.createIcons();
    }

    // --- BÚSQUEDA Y FILTRO ---
    const searchInput = document.getElementById('search');
    const filterBtns = document.querySelectorAll('.btn-filter');
    let filtroActivo = 'all';
    let busqueda = '';

    function aplicarFiltros() {
        let resultado = piezas.filter(p => {
            const matchCategoria = filtroActivo === 'all' || p.categoria === filtroActivo;
            const matchBusqueda = busqueda === '' ||
                p.nombre.toLowerCase().includes(busqueda) ||
                p.descripcion.toLowerCase().includes(busqueda) ||
                p.categoria.toLowerCase().includes(busqueda) ||
                p.estado.toLowerCase().includes(busqueda) ||
                p.material.toLowerCase().includes(busqueda);
            return matchCategoria && matchBusqueda;
        });
        renderCards(resultado);
    }

    searchInput.addEventListener('input', (e) => {
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

    // --- RENDER INICIAL ---
    renderCards(piezas);

    // --- ACTUALIZAR TABLA DE ESTADO DINÁMICAMENTE ---
    const tbody = document.querySelector('.tech-table tbody');
    if (tbody) {
        tbody.innerHTML = piezas.map(p => {
            const cfg = estadoConfig[p.estado] || estadoConfig.desarrollo;
            return `
                <tr>
                    <td><code>${p.id}</code></td>
                    <td class="font-medium">${p.nombre}</td>
                    <td><span class="status-indicator ${cfg.indicator}">${cfg.label}</span></td>
                </tr>
            `;
        }).join('');
    }

    // --- CONTADOR HERO ---
    function animarContador(elemento, fin, duracion) {
        let inicio = 0;
        const paso = duracion / fin;
        const timer = setInterval(() => {
            inicio++;
            elemento.textContent = inicio;
            if (inicio >= fin) clearInterval(timer);
        }, paso);
    }

    const statNums = document.querySelectorAll('.stat-num');
    statNums.forEach(el => {
        const val = parseInt(el.dataset.val);
        animarContador(el, val, 800);
    });

    // --- TOOLTIP EN CARDS ---
    document.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.card');
        if (card) card.classList.add('card-hovered');
    });
    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.card');
        if (card) card.classList.remove('card-hovered');
    });

});
