const galeriaEntregas = [
    { id: 1, img: "images/entregas/1.jpeg", category: "suministro", titulo: "1", especificacion: "" },
    { id: 2, img: "images/entregas/2.jpeg", category: "suministro", titulo: "2", especificacion: "" },
    { id: 3, img: "images/entregas/3.jpeg", category: "suministro", titulo: "3", especificacion: "" },
    { id: 4, img: "images/entregas/4.jpeg", category: "suministro", titulo: "4", especificacion: "" },
    { id: 5, img: "images/entregas/5.jpeg", category: "suministro", titulo: "5", especificacion: "" },
    { id: 6, img: "images/entregas/6.jpeg", category: "suministro", titulo: "6", especificacion: "" },
    { id: 7, img: "images/entregas/7.jpeg", category: "suministro", titulo: "7", especificacion: ""},
    { id: 8, img: "images/entregas/8.jpeg", category: "suministro", titulo: "8", especificacion: "" },
    { id: 9, img: "images/entregas/9.jpeg", category: "suministro", titulo: "9", especificacion: "" },
    { id: 10, img: "images/entregas/10.jpeg", category: "suministro", titulo: "10", especificacion: ""},
    { id: 11, img: "images/entregas/11.jpeg", category: "suministro", titulo: "11", especificacion: ""},
    { id: 12, img: "images/entregas/12.jpeg", category: "suministro", titulo: "12", especificacion: ""},
    { id: 13, img: "images/entregas/13.jpeg", category: "suministro", titulo: "13", especificacion: ""},
    { id: 14, img: "images/entregas/14.jpeg", category: "suministro", titulo: "14", especificacion: ""},
    { id: 15, img: "images/entregas/15.jpeg", category: "suministro", titulo: "15", especificacion: ""},
];

let currentGallery = galeriaEntregas;
let currentFilter = 'all';
let itemsToShow = 12;
let currentItemsCount = itemsToShow;

function renderGaleria(filter = 'all', limit = itemsToShow) {
    const container = document.getElementById('galeriaEntregasContainer');
    if (!container) {
        console.error('No se encontró el contenedor "galeriaEntregasContainer"');
        return;
    }
    
    let filtered = galeriaEntregas;
    if (filter !== 'all') {
        filtered = galeriaEntregas.filter(item => item.category === filter);
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
            <img src="${item.img}" alt="${item.titulo}" loading="lazy" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible';">
            <div class="gallery-overlay" onclick="openModalImage('${item.img}', '${item.titulo} - ${item.especificacion}')">
                <i class="fas fa-search-plus"></i>
                <span>Ver más</span>
            </div>
            <div class="gallery-caption">
                <p><i class="fas fa-calendar-alt me-1"></i> ${item.titulo}</p>
            </div>
        </div>
    `).join('');
    
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        loadMoreContainer.style.display = filtered.length > currentItemsCount ? 'block' : 'none';
    }
}

function loadMoreImages() {
    currentItemsCount += itemsToShow;
    const container = document.getElementById('galeriaEntregasContainer');
    if (!container) return;
    
    const nuevosItems = currentGallery.slice(currentItemsCount - itemsToShow, currentItemsCount);
    
    nuevosItems.forEach((item) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 gallery-item';
        col.setAttribute('data-category', item.category);
        col.innerHTML = `
            <img src="${item.img}" alt="${item.titulo}" loading="lazy" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible';">
            <div class="gallery-overlay" onclick="openModalImage('${item.img}', '${item.titulo} - ${item.especificacion}')">
                <i class="fas fa-search-plus"></i>
                <span>Ver más</span>
            </div>
            <div class="gallery-caption">
                <p><i class="fas fa-calendar-alt me-1"></i> ${item.titulo}</p>
            </div>
        `;
        container.appendChild(col);
    });
    
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer && currentGallery.length <= currentItemsCount) {
        loadMoreContainer.style.display = 'none';
    }
}

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

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
    
    renderGaleria('all', itemsToShow);
    initFiltrosGaleria();
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreImages);
    }
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});