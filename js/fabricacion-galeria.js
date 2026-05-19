// ======================== GALERÍA DE FABRICACIONES ========================
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
    { img: "images/galeria/gal16.jpeg", category: "especiales", titulo: "Skid industrial para conducción de fluidos" }
];

// Variables de control
let currentGallery = galeriaFabricaciones;
let currentFilter = 'all';
let itemsToShow = 12;
let currentItemsCount = itemsToShow;

// ======================== FUNCIONES ========================

// Renderizar galería con filtro y límite
function renderGaleria(filter = 'all', limit = itemsToShow) {
    const container = document.getElementById('galeriaFabricacionesContainer');
    if (!container) {
        console.error('No se encontró el contenedor "galeriaFabricacionesContainer"');
        return;
    }
    
    // Filtrar por categoría
    let filtered = galeriaFabricaciones;
    if (filter !== 'all') {
        filtered = galeriaFabricaciones.filter(item => item.category === filter);
    }
    
    currentGallery = filtered;
    const itemsToRender = filtered.slice(0, limit);
    
    // Si no hay imágenes
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
    
    // Renderizar imágenes
    container.innerHTML = itemsToRender.map((item, index) => `
        <div class="col-md-4 col-sm-6 gallery-item" data-category="${item.category}" data-aos="fade-up" data-aos-delay="${(index % 6) * 50}">
            <img src="${item.img}" alt="${item.titulo}" loading="lazy" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible';">
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
        loadMoreContainer.style.display = filtered.length > currentItemsCount ? 'block' : 'none';
    }
}

// Cargar más imágenes
function loadMoreImages() {
    currentItemsCount += itemsToShow;
    const container = document.getElementById('galeriaFabricacionesContainer');
    if (!container) return;
    
    const nuevosItems = currentGallery.slice(currentItemsCount - itemsToShow, currentItemsCount);
    
    nuevosItems.forEach((item) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 gallery-item';
        col.setAttribute('data-category', item.category);
        col.innerHTML = `
            <img src="${item.img}" alt="${item.titulo}" loading="lazy" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible';">
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
    if (loadMoreContainer && currentGallery.length <= currentItemsCount) {
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
            currentItemsCount = itemsToShow; // Reiniciar contador
            renderGaleria(currentFilter, currentItemsCount);
        });
    });
}

// ======================== INICIALIZACIÓN ========================
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
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});