const galeriaFabricaciones = [
    {
        img: "images/galeria/1.png",
        category: "tuberia",
        titulo: "Sistema de tubería aérea industrial",
        especificacion: "Instalación de líneas de tubería suspendidas para conducción de fluidos en planta industrial."
    },

    {
        img: "images/galeria/2.png",
        category: "especiales",
        titulo: "Skid industrial para conducción de fluidos",
        especificacion: "Módulo skid fabricado con tubería, válvulas e instrumentación para procesos industriales."
    },

    {
        img: "images/galeria/3.png",
        category: "turbinas",
        titulo: "Instalación y soldadura de tubería industrial",
        especificacion: "Proceso de unión y montaje de tubería para sistemas de conducción hidráulica e industrial."
    },

    {
        img: "images/galeria/4.png",
        category: "valvulas",
        titulo: "Manifold de válvulas industriales",
        especificacion: "Sistema de válvulas ensambladas para control y distribución de fluidos a presión."
    },

    {
        img: "images/galeria/5.png",
        category: "conexiones",
        titulo: "Conexiones reductoras de acero inoxidable",
        especificacion: "Fabricación de conexiones tipo reducción para líneas de proceso industrial."
    },

    {
        img: "images/galeria/6.png",
        category: "especiales",
        titulo: "Estructura metálica para montaje",
        especificacion: "Fabricación y alineación de estructuras metálicas para soporte de tuberías."
    },

    {
        img: "images/galeria/7.png",
        category: "conexiones",
        titulo: "Bridas y conexiones mecanizadas",
        especificacion: "Conjunto de bridas industriales y accesorios fabricados para alta presión."
    },

    {
        img: "images/galeria/9.png",
        category: "conexiones",
        titulo: "Soldadura de conexión bridada",
        especificacion: "Proceso de soldadura industrial en conexión tipo brida para sistemas de tubería."
    },
    {
        img: "images/galeria/10.png",
        category: "turbinas",
        titulo: "Rotor industrial de turbina",
    especificacion: "Rotor multietapa de turbina industrial utilizado en sistemas de generación de energía y compresión."
    },

    {
        img: "images/galeria/11.png",
        category: "tuberia",
        titulo: "Tubería soldada en proceso",
        especificacion: "Fabricación y unión de tubería industrial mediante soldadura especializada."
    },

    {
        img: "images/galeria/12.png",
        category: "especiales",
        titulo: "Sistema modular industrial",
        especificacion: "Ensamblaje de componentes industriales para aplicaciones de proceso."
    },

    {
        img: "images/galeria/13.png",
        category: "conexiones",
        titulo: "Accesorios y conexiones metálicas",
        especificacion: "Fabricación de conexiones industriales de acero para líneas de conducción."
    },

    {
        img: "images/galeria/14.png",
        category: "valvulas",
        titulo: "Válvula de control industrial",
        especificacion: "Equipo de regulación y control para sistemas hidráulicos e industriales."
    },

    {
        img: "images/galeria/15.png",
        category: "especiales",
        titulo: "Fabricación estructural especializada",
        especificacion: "Construcción de estructuras metálicas para aplicaciones industriales."
    },

    {
        img: "images/galeria/16.png",
        category: "tuberia",
        titulo: "Red de tuberías industriales",
        especificacion: "Sistema de conducción de fluidos diseñado para procesos industriales."
    },

    {
        img: "images/galeria/17.png",
        category: "",
        titulo: "",
        especificacion: "", 
    },

    {
        img: "images/galeria/18.png",
        category: "",
        titulo: "",
        especificacion: "",   
    },

    {
        img: "images/galeria/19.png",
        category: "",
        titulo: "",
        especificacion: "",   
    },
    {
        img: "",
        category: "",
        titulo: "",
        especificacion: "",   
    },
    {
        img: "",
        category: "",
        titulo: "",
        especificacion: "",   
    },
    {
        img: "",
        category: "",
        titulo: "",
        especificacion: "",   
    },
    {
        img: "",
        category: "",
        titulo: "",
        especificacion: "",   
    },
    {
        img: "",
        category: "",
        titulo: "",
        especificacion: "",   
    },
    {
        img: "",
        category: "",
        titulo: "",
        especificacion: "",     
    }
];

let currentGallery = galeriaFabricaciones;
let currentFilter = 'all';
let itemsToShow = 12;
let currentItemsCount = itemsToShow;

function renderGaleria(filter = 'all', limit = itemsToShow) {
    const container = document.getElementById('galeriaFabricacionesContainer');
    if (!container) {
        console.error('No se encontró el contenedor "galeriaFabricacionesContainer"');
        return;
    }
    
    let filtered = galeriaFabricaciones;
    if (filter !== 'all') {
        filtered = galeriaFabricaciones.filter(item => item.category === filter);
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
            <div class="gallery-overlay" onclick="openModalImage('${item.img}', '${item.titulo}')">
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