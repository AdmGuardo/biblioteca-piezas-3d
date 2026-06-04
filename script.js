// =============================================
// TECH 3D — Temario Electromecánica
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme') || 'dark';
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
        localStorage.setItem('theme', isLight ? 'dark' : 'light');
    });

    // --- MENÚ HAMBURGUESA ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu   = document.getElementById('nav-menu');
    const menuIcon  = menuToggle.querySelector('.menu-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');

    menuToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        menuIcon.classList.toggle('hidden', open);
        closeIcon.classList.toggle('hidden', !open);
    });

    document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }));

    // --- DATOS DEL TEMARIO ---
    const temas = [
        {
            id: '01',
            nombre: 'Engranaje Helicoidal',
            descripcion: 'Aprende a modelar dientes helicoidales y calcular la relación de transmisión entre dos ejes paralelos.',
            unidad: 'Unidad 1',
            categoria: 'engranajes',
            icono: 'settings',
            nivel: 'Intermedio',
            nivelCls: 'nivel-medio',
            horas: '2h',
            material: 'Acero AISI 4140',
            objetivos: ['Dibujar perfil de diente', 'Calcular módulo', 'Exportar STL']
        },
        {
            id: '02',
            nombre: 'Soporte Motor NEMA',
            descripcion: 'Diseño de soportes para motores paso a paso: tolerancias, agujeros de montaje y rigidez estructural.',
            unidad: 'Unidad 2',
            categoria: 'soportes',
            icono: 'wrench',
            nivel: 'Básico',
            nivelCls: 'nivel-bajo',
            horas: '1.5h',
            material: 'Aluminio 6061',
            objetivos: ['Dimensionar agujeros', 'Aplicar tolerancias', 'Verificar rigidez']
        },
        {
            id: '03',
            nombre: 'Carcasa Reductora',
            descripcion: 'Modelado de carcasas modulares con sellado estanco para alojar transmisiones internas.',
            unidad: 'Unidad 3',
            categoria: 'carcasas',
            icono: 'box',
            nivel: 'Avanzado',
            nivelCls: 'nivel-alto',
            horas: '3h',
            material: 'PLA+ / ABS',
            objetivos: ['Diseñar tapa modular', 'Calcular paredes', 'Roscas y juntas']
        },
        {
            id: '04',
            nombre: 'Piñón Recto 32T',
            descripcion: 'Fundamentos del diseño de engranajes rectos: número de dientes, paso y presión de contacto.',
            unidad: 'Unidad 1',
            categoria: 'engranajes',
            icono: 'cog',
            nivel: 'Básico',
            nivelCls: 'nivel-bajo',
            horas: '1.5h',
            material: 'Nylon PA6',
            objetivos: ['Calcular módulo y paso', 'Modelar con parámetros', 'Simular engrane']
        },
        {
            id: '05',
            nombre: 'Soporte Rodamiento SKF',
            descripcion: 'Alojamientos de precisión para rodamientos: ajustes, interferencias y análisis de carga radial.',
            unidad: 'Unidad 2',
            categoria: 'soportes',
            icono: 'anchor',
            nivel: 'Intermedio',
            nivelCls: 'nivel-medio',
            horas: '2h',
            material: 'Acero St-37',
            objetivos: ['Calcular ajuste H7/p6', 'Modelar asiento', 'Verificar carga']
        },
        {
            id: '06',
            nombre: 'Carcasa Electrónica IP65',
            descripcion: 'Diseño de cajas de protección para electrónica: grado IP, guías de PCB y gestión térmica básica.',
            unidad: 'Unidad 3',
            categoria: 'carcasas',
            icono: 'shield',
            nivel: 'Intermedio',
            nivelCls: 'nivel-medio',
            horas: '2h',
            material: 'ABS Ignífugo',
            objetivos: ['Diseñar juntas IP65', 'Guías para PCB', 'Ventilación pasiva']
        }
    ];

    // --- RENDER CARDS ---
    const grid      = document.getElementById('catalog-grid');
    const noResults = document.getElementById('no-results');
    const contador  = document.getElementById('parte-contador');

    function renderCards(lista) {
        grid.innerHTML = '';
        noResults.classList.toggle('hidden', lista.length > 0);
        if (contador) contador.textContent = `${lista.length} tema${lista.length !== 1 ? 's' : ''}`;
        if (!lista.length) return;

        lista.forEach((t, i) => {
            const card = document.createElement('div');
            card.className = `card item ${t.categoria}`;
            card.style.animationDelay = `${i * 60}ms`;
            card.innerHTML = `
                <div class="card-top">
                    <div class="card-unidad">${t.unidad}</div>
                    <span class="nivel-tag ${t.nivelCls}">${t.nivel}</span>
                </div>
                <div class="card-icon-wrap">
                    <i data-lucide="${t.icono}" class="card-main-icon"></i>
                </div>
                <div class="card-num">#${t.id}</div>
                <h3>${t.nombre}</h3>
                <p>${t.descripcion}</p>
                <ul class="objetivos-list">
                    ${t.objetivos.map(o => `<li><i data-lucide="check" class="obj-check"></i>${o}</li>`).join('')}
                </ul>
                <div class="card-footer">
                    <span class="card-meta-item"><i data-lucide="clock" class="meta-icon"></i>${t.horas}</span>
                    <span class="card-meta-item"><i data-lucide="layers" class="meta-icon"></i>${t.material}</span>
                </div>
            `;
            grid.appendChild(card);
        });

        if (window.lucide) lucide.createIcons();
    }

    // --- FILTROS Y BÚSQUEDA ---
    const searchInput = document.getElementById('search');
    const filterBtns  = document.querySelectorAll('.btn-filter');
    let filtroActivo = 'all';
    let busqueda = '';

    function aplicar() {
        const res = temas.filter(t => {
            const cat = filtroActivo === 'all' || t.categoria === filtroActivo;
            const q   = busqueda === '' ||
                t.nombre.toLowerCase().includes(busqueda) ||
                t.descripcion.toLowerCase().includes(busqueda) ||
                t.unidad.toLowerCase().includes(busqueda) ||
                t.nivel.toLowerCase().includes(busqueda) ||
                t.material.toLowerCase().includes(busqueda);
            return cat && q;
        });
        renderCards(res);
    }

    searchInput.addEventListener('input', e => { busqueda = e.target.value.toLowerCase().trim(); aplicar(); });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtroActivo = btn.dataset.filter;
            aplicar();
        });
    });

    // --- TABLA ESTADO ---
    const tbody = document.querySelector('.tech-table tbody');
    if (tbody) {
        tbody.innerHTML = temas.map(t => `
            <tr>
                <td><code>${t.unidad}</code></td>
                <td class="font-medium">${t.nombre}</td>
                <td><span class="nivel-dot ${t.nivelCls}">${t.nivel}</span></td>
            </tr>
        `).join('');
    }

    // --- CONTADOR ANIMADO ---
    document.querySelectorAll('.stat-num').forEach(el => {
        const fin = parseInt(el.dataset.val);
        let n = 0;
        const t = setInterval(() => { el.textContent = ++n; if (n >= fin) clearInterval(t); }, 800 / fin);
    });

    // --- RENDER INICIAL ---
    aplicar();
});
