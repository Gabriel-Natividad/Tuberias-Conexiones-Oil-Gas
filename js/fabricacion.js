
const procesoPasos = [
    { numero: "01", titulo: "Ingeniería y Diseño", descripcion: "Desarrollamos planos y especificaciones técnicas según requerimientos del cliente." },
    { numero: "02", titulo: "Selección de Materiales", descripcion: "Materia prima certificada con trazabilidad y calidad asegurada." },
    { numero: "03", titulo: "Fabricación", descripcion: "Procesos de corte, soldadura, forja y mecanizado de precisión." },
    { numero: "04", titulo: "Control de Calidad", descripcion: "Inspección dimensional, pruebas hidrostáticas y certificación." },
    { numero: "05", titulo: "Embarque y Entrega", descripcion: "Logística especializada para entrega en tiempo y forma." },
    { numero: "06", titulo: "Equipos y Maquinaria", descripcion: "Contamos con maquinaria especializada y procesos de soldadura certificados. Haga clic para conocer más.", esInteractivo: true }
];

// GALERÍA - 3 PROYECTOS REALES (basados en el PDF)
const proyectosReales = [
    {
        img: "images/proyectos/manifold-6-vias.jpg",  
        titulo: "Manifold de 6 Vías",
        descripcion: "Fabricación y diseño de manifold de 6 vías con reducción bridada de 4\" a 3\"",
        categoria: "manifold",
        detalles: "Proyecto realizado para sector petrolero. Incluye pruebas hidrostáticas y certificación."
    },
    {
        img: "images/proyectos/frac-tank.jpg",      
        titulo: "Rehabilitación de Frac Tanks",
        descripcion: "Mantenimiento y rehabilitación de tanques de almacenamiento para operadoras energéticas",
        categoria: "tanques",
        detalles: "Trabajo a nivel nacional con estándares API y certificación de soldadura."
    },
    {
        img: "images/proyectos/soldadura-especializada.jpg", 
        titulo: "Soldadura Especializada",
        descripcion: "Procesos de soldadura TIG/MIG/SMAW para líneas de producción industrial",
        categoria: "soldadura",
        detalles: "Aplicado en sector alimenticio, petrolero y comercial con normativas internacionales."
    }
];

// Rutas de archivos
const pdfUrl = "pdf/docs/catalogo_fabricacion.pdf";


function renderProceso() {
    const container = document.getElementById('processContainer');
    if (container) {
        container.innerHTML = procesoPasos.map(p => `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="process-card ${p.esInteractivo ? 'process-card-interactive' : ''}" 
                     ${p.esInteractivo ? 'onclick="abrirModalEquipos()"' : ''}>
                    <div class="process-number">${p.numero}</div>
                    <h4>${p.titulo}</h4>
                    <p>${p.descripcion}</p>
                    ${p.esInteractivo ? '<i class="fas fa-hand-pointer fa-2x mt-3 text-primary"></i>' : ''}
                </div>
            </div>
        `).join('');
    }
}

function renderProyectos() {
    const container = document.getElementById('galleryFabricacion');
    if (!container) return;
    
    container.innerHTML = proyectosReales.map(proyecto => `
        <div class="col-md-4 col-sm-12 mb-4">
            <div class="proyecto-card">
                <div class="proyecto-img-container">
                    <img src="${proyecto.img}" alt="${proyecto.titulo}" class="proyecto-img" loading="lazy" 
                         onerror="this.src='images/placeholder-proyecto.jpg'">
                    <div class="proyecto-overlay" onclick="openModalProyecto('${proyecto.titulo}', '${proyecto.descripcion}', '${proyecto.detalles}', '${proyecto.img}')">
                        <i class="fas fa-search-plus"></i>
                        <span>Ver detalles</span>
                    </div>
                </div>
                <div class="proyecto-info">
                    <h4>${proyecto.titulo}</h4>
                    <p>${proyecto.descripcion}</p>
                    <span class="badge bg-primary">${proyecto.categoria}</span>
                </div>
            </div>
        </div>
    `).join('');
}

window.abrirModalEquipos = () => {
    const modal = new bootstrap.Modal(document.getElementById('equiposModal'));
    modal.show();
};

window.openModalProyecto = (titulo, descripcion, detalles, imgSrc) => {
    let modal = document.getElementById('proyectoModalDetail');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'proyectoModalDetail';
        modal.className = 'modal fade';
        modal.setAttribute('tabindex', '-1');
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img id="modalProyectoImg" src="" class="img-fluid rounded mb-3" style="max-height: 300px;">
                        <p id="modalProyectoDesc"></p>
                        <div class="alert alert-secondary mt-3">
                            <small id="modalProyectoDetalles"></small>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <a href="contacto.html" class="btn btn-primary-custom">Solicitar información</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const modalTitle = modal.querySelector('.modal-title');
    const modalImg = modal.querySelector('#modalProyectoImg');
    const modalDesc = modal.querySelector('#modalProyectoDesc');
    const modalDetalles = modal.querySelector('#modalProyectoDetalles');
    
    modalTitle.textContent = titulo;
    modalImg.src = imgSrc;
    modalDesc.textContent = descripcion;
    modalDetalles.textContent = detalles;
    
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
};

function openPdfViewer() {
    if (pdfUrl) {
        window.open(pdfUrl, '_blank');
    } else {
        alert('El PDF no está disponible temporalmente.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
    
    renderProceso();
    renderProyectos();  
    
    const openBtn = document.getElementById('openPdfBtn');
    const openBtn2 = document.getElementById('openPdfBtn2');
    
    if (openBtn) openBtn.addEventListener('click', openPdfViewer);
    if (openBtn2) openBtn2.addEventListener('click', openPdfViewer);
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});