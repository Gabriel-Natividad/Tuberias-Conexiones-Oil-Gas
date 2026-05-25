const heroSlides = [
    { image: "images/gas/alta.png", title: "Especialistas en Alta Presión", subtitle: "Fluidos, Gas y Vapor", description: "Soluciones innovadoras para la industria petrolera." },
    { image: "images/gas/4.jpeg", title: "Suministros para la Industria Petrolera", subtitle: "Calidad y Certificación", description: "Productos de acero de la más alta calidad." },
    { image: "images/fabri.jpeg", title: "Fabricación y Suministro", subtitle: "Entregas Verificadas", description: "Tuberías y válvulas con estándares internacionales." }
];

const services = [
    { img: "images/gas/oilgas.jpeg", title: "FLUIDOS, GAS Y VAPOR", text: "Especialistas en alta presión.", pdf: "pdf/docs/catalago.pdf" },
    { img: "images/fabri.jpeg", title: "FABRICACIONES", text: "Suministros según normas vigentes.", pdf: "pdf/docs/catalogo_fabricacion.pdf" },
    { img: "images/productos/9.jpeg", title: "PRODUCTOS", text: "Entregas extremadamente verificadas.", pdf: "pdf/docs/catalogo_producto.pdf" }
];

const clients = [
    "images/clientes/c1.jpg", "images/clientes/c2.jpg", "images/clientes/c3.jpg",
    "images/clientes/c4.jpg", "images/clientes/c7.jpg", "images/clientes/c8.jpg"
];


AOS.init({ duration: 800, once: true });

function renderHero() {
    const swiperWrapper = document.getElementById('dynamicSlides');
    if (!swiperWrapper) return;
    
    swiperWrapper.innerHTML = heroSlides.map(slide => `
        <div class="swiper-slide" style="background-image: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('${slide.image}');">
            <div class="container">
                <div class="hero-content">
                    <h1>${slide.title}</h1>
                    <p>${slide.description}</p>
                    <a href="contacto.html" class="btn btn-primary-custom me-3">Contactar</a>
                    <a href="pdf/docs/catalogo_fabricacion.pdf" class="btn btn-outline-custom">Catálogo</a>
                </div>
            </div>
        </div>
    `).join('');
    
    new Swiper('.mySwiper', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        effect: 'fade',
        fadeEffect: { crossFade: true }
    });
}

function renderServices() {
    const container = document.getElementById('servicesContainer');
    if(container) {
        container.innerHTML = services.map(s => `
            <div class="col-md-4" data-aos="zoom-in-up">
                <div class="service-card">
                    <div class="service-img"><img src="${s.img}" alt="${s.title}"></div>
                    <div class="service-body">
                        <h4>${s.title}</h4>
                        <p>${s.text}</p>
                        <a href="javascript:void(0);" onclick="verPDF('${s.pdf}', '${s.title}')" class="btn btn-primary-custom btn-sm">Ver más</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderGallery(filter = 'all') {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    let filtered = galleryImages;
    if (filter !== 'all') filtered = galleryImages.filter(img => img.category === filter);
    
    grid.innerHTML = filtered.map(item => `
        <div class="col-md-4 col-sm-6 gallery-item" data-category="${item.category}">
            <img src="${item.img}" alt="${item.title}">
            <div class="gallery-overlay" onclick="openImageModal('${item.img}')">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

function renderClients() {
    const row = document.getElementById('clientsRow');
    if(row) {
        row.innerHTML = clients.map(c => `
            <div class="col-md-2 col-4 client-item">
                <img src="${c}" alt="cliente" class="img-fluid">
            </div>
        `).join('');
    }
}

window.openImageModal = (src) => {
    const modalHtml = `
        <div class="modal fade" id="imageModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-transparent border-0">
                    <div class="modal-body text-center">
                        <img src="${src}" class="img-fluid rounded" style="max-height: 80vh;">
                        <button type="button" class="btn btn-light mt-3" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    if(document.getElementById('imageModal')) document.getElementById('imageModal').remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
    document.getElementById('imageModal').addEventListener('hidden.bs.modal', function(){ this.remove(); });
};

window.verPDF = (pdfUrl, productName) => {
    if (pdfUrl) {
        window.open(pdfUrl, '_blank');
    } else {
        console.error('PDF no encontrado');
    }
};

function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
}

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

document.addEventListener('DOMContentLoaded', function() {
    renderHero();
    renderServices();
    renderGallery('all');
    renderClients();
    initFilters();
    console.log("Sitio actualizado con sistema dinámico y animaciones modernas");
});