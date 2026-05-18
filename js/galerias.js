const galeriaEntregas = [
    // Tubería
    { img: "images/galeria/entregas/entrega1.jpg", category: "tuberia", titulo: "Entrega de tubería de acero al carbón - Ciudad del Carmen" },
    { img: "images/galeria/entregas/entrega2.jpg", category: "tuberia", titulo: "Envío de tubería sin costura a refinería de Salina Cruz" },
    { img: "images/galeria/entregas/entrega3.jpg", category: "tuberia", titulo: "Carga de tubería API 5L para gasoducto" },
    { img: "images/galeria/entregas/entrega4.jpg", category: "tuberia", titulo: "Suministro de tubería inoxidable a planta química" },
    
    // Válvulas
    { img: "images/galeria/entregas/entrega5.jpg", category: "valvulas", titulo: "Entrega de válvulas de compuerta para plataforma marina" },
    { img: "images/galeria/entregas/entrega6.jpg", category: "valvulas", titulo: "Válvulas de bola de alta presión - Dos Bocas" },
    { img: "images/galeria/entregas/entrega7.jpg", category: "valvulas", titulo: "Suministro de válvulas de seguridad" },
    
    // Conexiones
    { img: "images/galeria/entregas/entrega8.jpg", category: "conexiones", titulo: "Conexiones forjadas para planta de proceso" },
    { img: "images/galeria/entregas/entrega9.jpg", category: "conexiones", titulo: "Bridas y accesorios para proyecto termoeléctrico" },
    { img: "images/galeria/entregas/entrega10.jpg", category: "conexiones", titulo: "Entrega de conexiones roscadas a taller industrial" },
    
    // Envíos especiales
    { img: "images/galeria/entregas/entrega11.jpg", category: "envios", titulo: "Envío especial a Villahermosa - Carga completa" },
    { img: "images/galeria/entregas/entrega12.jpg", category: "envios", titulo: "Logística de entrega a Ciudad de México" },
    { img: "images/galeria/entregas/entrega13.jpg", category: "envios", titulo: "Despacho a planta de fertilizantes" }
];


const galeriaFabricaciones = [
    // Tubería Fabricada
    { img: "images/galeria/gal1.jpeg", category: "tuberia", titulo: "Fabricación de tubería sin costura para alta presión" },
    { img: "images/galeria/gal2.jpeg", category: "tuberia", titulo: "Proceso de soldadura de tubería de acero al carbón" },
    { img: "images/galeria/gal3.jpeg", category: "tuberia", titulo: "Corte y biselado de tubería API 5L" },
    { img: "images/galeria/gal4.jpeg", category: "tuberia", titulo: "Tubería inoxidable fabricada bajo norma ASTM" },
    
    // Conexiones
    { img: "images/galeria/gal5.jpeg", category: "conexiones", titulo: "Fabricación de codos forjados a medida" },
    { img: "images/galeria/gal6.jpeg", category: "conexiones", titulo: "Producción de tes y reducciones industriales" },
    { img: "images/galeria/gal7.jpeg", category: "conexiones", titulo: "Conexiones de instrumentación de precisión" },
    { img: "images/galeria/gal8.jpeg", category: "conexiones", titulo: "Bridas personalizadas para proyectos especiales" },
    
    // Válvulas
    { img: "images/galeria/gal9.jpeg", category: "valvulas", titulo: "Ensamblaje de válvulas de compuerta" },
    { img: "images/galeria/gal10.jpeg", category: "valvulas", titulo: "Válvulas de globo para alta temperatura" },
    { img: "images/galeria/gal11.jpeg", category: "valvulas", titulo: "Pruebas hidrostáticas en válvulas de bola" },
    { img: "images/galeria/gal12.jpeg", category: "valvulas", titulo: "Reparacion interna de valvulas de control"},
    
    // Fabricaciones especiales
    { img: "images/galeria/gal13.jpeg", category: "especiales", titulo: "Fabricación especial de skids para instrumentación" },
    { img: "images/galeria/gal14.jpeg", category: "especiales", titulo: "Estructuras metálicas para montaje de tubería" },
    { img: "images/galeria/gal15.jpeg", category: "especiales", titulo: "Fabricación de manifold de alta presión" },
    { img: "images/galeria/gal16.jpeg", category: "especiales", titulo: "skid industrial para conduccion de fluidos" },
];

const isEntregasPage = window.location.pathname.includes('galeria_entregas');
const isFabricacionesPage = window.location.pathname.includes('galeria_fabricaciones');

let currentGallery = [];
let currentFilter = 'all';
let itemsToShow = 12;
let currentItemsCount = itemsToShow;


// Obtener la galería correcta
function getGallery() {
    if (isEntregasPage) return galeriaEntregas;
    if (isFabricacionesPage) return galeriaFabricaciones;
    return [];
}

// Renderizar galería con filtro y límite
function renderGaleria(filter = 'all', limit = itemsToShow) {
    const container = document.getElementById(isEntregasPage ? 'galeriaEntregasContainer' : 'galeriaFabricacionesContainer');
    if (!container) return;
    
    let galleryData = getGallery();
    let filtered = galleryData;
    if (filter !== 'all') {
        filtered = galleryData.filter(item => item.category === filter);
    }
    
    currentGallery = filtered;
    const itemsToRender = filtered.slice(0, limit);
    
    if (itemsToRender.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-images fa-4x text-muted mb-3"></i>
                <h4>No hay imágenes en esta categoría</h4>
                <p>Pronto agregaremos más contenido.</p>
            </div>
        `;
        const loadMoreContainer = document.getElementById('loadMoreContainer');
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        return;
    }
    
    container.innerHTML = itemsToRender.map((item, index) => `
        <div class="col-md-4 col-sm-6 gallery-item" data-category="${item.category}" data-aos="fade-up" data-aos-delay="${(index % 6) * 50}">
            <img src="${item.img}" alt="${item.titulo}" loading="lazy" onerror="this.src='images/galeria/placeholder.jpg'">
            <div class="gallery-overlay" onclick="openModalImage('${item.img}', '${item.titulo}')">
                <i class="fas fa-search-plus"></i>
                <span>Ver más</span>
            </div>
            <div class="gallery-caption">
                <p><i class="fas fa-calendar-alt me-1"></i> ${item.titulo}</p>
            </div>
        </div>
    `).join('');
    
    // Mostrar/ocultar botón "Cargar más"
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        if (filtered.length > currentItemsCount) {
            loadMoreContainer.style.display = 'block';
        } else {
            loadMoreContainer.style.display = 'none';
        }
    }
}

// Cargar más imágenes
function loadMoreImages() {
    currentItemsCount += itemsToShow;
    const filtered = currentGallery;
    const container = document.getElementById(isEntregasPage ? 'galeriaEntregasContainer' : 'galeriaFabricacionesContainer');
    
    const nuevosItems = filtered.slice(currentItemsCount - itemsToShow, currentItemsCount);
    
    nuevosItems.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 gallery-item';
        col.setAttribute('data-category', item.category);
        col.setAttribute('data-aos', 'fade-up');
        col.innerHTML = `
            <img src="${item.img}" alt="${item.titulo}" loading="lazy" onerror="this.src='images/galeria/placeholder.jpg'">
            <div class="gallery-overlay" onclick="openModalImage('${item.img}', '${item.titulo}')">
                <i class="fas fa-search-plus"></i>
                <span>Ver más</span>
            </div>
            <div class="gallery-caption">
                <p><i class="fas fa-calendar-alt me-1"></i> ${item.titulo}</p>
            </div>
        `;
        container.appendChild(col);
    });
    
    // Ocultar botón si ya no hay más
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer && filtered.length <= currentItemsCount) {
        loadMoreContainer.style.display = 'none';
    }
}

// Abrir modal con imagen ampliada
window.openModalImage = (src, title) => {
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    if (modalImg) {
        modalImg.src = src;
        if (modalCaption) modalCaption.textContent = title;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    }
};

// Inicializar filtros
function initFiltrosGaleria() {
    const btns = document.querySelectorAll('.filter-galeria-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            currentItemsCount = itemsToShow;
            renderGaleria(currentFilter, currentItemsCount);
        });
    });
}

// Contador animado (para las estadísticas)
function animateCounters() {
    const counters = document.querySelectorAll('.count-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
    
    // Renderizar galería inicial
    renderGaleria('all', itemsToShow);
    initFiltrosGaleria();
    
    // Configurar botón "Cargar más"
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreImages);
    }
    
    // Animar contadores si existen (solo en página de entregas)
    if (isEntregasPage) {
        setTimeout(animateCounters, 500);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});