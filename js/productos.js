const productos = [
    // TUBERÍA (4 productos)
    {
        id: 1,
        nombre: "Tubería de Acero al Carbón Sin Costura",
        categoria: "tuberia",
        descripcion: "Tubería con diametros ½” a 24”, en todos los espesores...",
        imagen: "images/productos/tuberia-carbon.jpg",
        pdf: "pdf/docs/espezor.pdf"
    },
    {
        id: 2,
        nombre: "Tubería de Acero Inoxidable con y sin Costura",
        categoria: "tuberia",
        descripcion: "Tubería con diámetros ½” a 16” en todos los espesores...",
        imagen: "images/productos/tuberia-inox.jpg",
        pdf: "pdf/docs/ficha2.pdf"
    },
    {
        id: 3,
        nombre: "Tubería De Acero Forjado",
        categoria: "tuberia",
        descripcion: "Conexión forjada en acero al carbón, ASTM SA 105N...",
        imagen: "images/productos/tuberias-seambles.jpg",
        pdf: "pdf/docs/ficha3.pdf"
    },
    {
        id: 4,
        nombre: "Conexiones Soldables de Acero al Carbon",
        categoria: "conexiones",
        descripcion: "Conexion de acero al carbon para soldar fabricadas bajo normas espicificas...",
        imagen: "images/productos/tuberia-api.jpg",
        pdf: "pdf/docs/ficha3.pdf"
    },

    // CONEXIONES (5 productos)
    {
        id: 5,
        nombre: "Conexiones Soldables de Acero Inoxidables.",
        categoria: "conexiones",
        descripcion: "Conexiones soldables a tope bw astm a-403; t-316; y t-304 con y sin costura..",
        imagen: "images/productos/conexiones-forjadas.jpg",
        pdf: "pdf/docs/ficha6.pdf"
    },
    {
        id: 6,
        nombre: "Valvulas y Manifolds",
        categoria: "valvulas",
        descripcion: "Linea completa de de valvulas para sistemas de instrumentacion, tales como valvulas de bola, aguja, check y manifolds...",
        imagen: "images/productos/tubing.png",
        pdf: "pdf/docs/ficha11.pdf"
    },
    {
        id: 7,
        nombre: "Conexiones Tubing",
        categoria: "conexiones",
        descripcion: "Conectores para fubing con doble ferula, conexiones roscas y conectores...",
        imagen: "images/productos/bridas.jpg",
        pdf: "pdf/docs/tubing.pdf"
    },
    {
        id: 8,
        nombre:"Tubing",
        categoria: "tuberia",
        descripcion: "Tubing en acero inoxidable y aleaciones de diametro de 0.250 a 750, fabricado en materiales...",
        imagen: "images/productos/conexiones-instrumentacion.jpg",
        pdf: "pdf/docs/tubing.pdf"
    },
    {
        id: 9,
        nombre: "Conexiones Hammber",
        categoria: "conexiones",
        descripcion: "Las tuercas union de golpes estan diseñadas para ser conectores de linea de uso rudo y fljos..",
        imagen: "images/productos/conexion-hammber.png",
        pdf: "pdf/docs/ficha8.pdf"
    },

    // VÁLVULAS (3 productos)
    {
        id: 10,
        nombre: "Niples y Coples de Acero al Carbon",
        categoria: "valvulas",
        descripcion: "Cople con costura cédula 40 negro y galvanizado, diam. de ¼” a 6“ y 8 a 16” ...",
        imagen: "images/productos/valvula-compuerta.png",
       pdf: "pdf/docs/ficha9.pdf"
    },
    {
        id: 11,
        nombre: "Nipolet, Sockolet y Weidolet",
        categoria: "valvulas",
        descripcion: "Acero al carbón forjado, astm a-105 de 3000# a 6000# pregunte por otras opciones ...",
        imagen: "images/productos/valvula-globo.png",
        pdf: "pdf/docs/ficha9.pdf"
    },
    {
        id: 12,
        nombre: "Empaquetes Espirometalicos, y Anillos Metalicos",
        categoria: "valvulas",
        descripcion: "Empaques de anillos para bridas (rtj) de acero inoxidable tipo 316 en forma oval y octagonal...",
        imagen: "images/productos/valvula-bola.png",
        pdf: "pdf/docs/anillos.pdf"
    },

    // ACCESORIOS (3 productos)
    {
        id: 13,
        nombre: "Esparragos",
        categoria: "accesorios",
        descripcion: "Espárragos en acero astm a193 gr b7 en diámetros de 3/8” a 3” en distintas longitudes con tuercas,...",
        imagen: "images/productos/accesorio.png",
        pdf: "pdf/docs/esparrago.pdf"
    },
    {
        id: 14,
        nombre: "Bridas de Acero Forjada a-105",
        categoria: "accesorios",
        descripcion: "En clase 150#, 300#, 600# y 900# rf, cumplen con el ansi b 16.5 para diámetros de ½” – 24” y ansi b16.47 ...",
        imagen: "images/productos/accesorio-brida.png",
        pdf: "pdf/docs/ficha11.pdf"
    },
    {
        id: 15,
        nombre: "Valvulas de MAriposas y Check",
        categoria: "valvula",
        descripcion: "Con cuerpo de hierro fundido, hierro ductil, acero fundido a-216 wcb y acero inoxidable t-316 cf8m.",
        imagen: "images/productos/juntas.png",
        pdf: "pdf/docs/ficha11.pdf"
    }
];

function renderProductos(filtro = 'all') {
    const container = document.getElementById('productosContainer');
    if (!container) return;
    
    let productosFiltrados = productos;
    if (filtro !== 'all') {
        productosFiltrados = productos.filter(p => p.categoria === filtro);
    }
    
    if (productosFiltrados.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-box-open fa-4x text-muted mb-3"></i>
                <h4>No hay productos en esta categoría</h4>
                <p>Pronto agregaremos más productos.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productosFiltrados.map(prod => `
        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="${Math.floor(Math.random() * 200)}">
            <div class="product-card">
                <div class="product-img">
                    <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
                    <span class="product-badge">${getCategoriaLabel(prod.categoria)}</span>
                </div>
                <div class="product-body">
                    <span class="product-category">${getCategoriaLabel(prod.categoria)}</span>
                    <h3>${prod.nombre}</h3>
                    <p class="product-description">${prod.descripcion.substring(0, 100)}${prod.descripcion.length > 100 ? '...' : ''}</p>
                    <div class="product-footer">
                        <button class="btn-pdf" onclick="verPDF('${prod.pdf}', '${prod.nombre}')">
                            <i class="fas fa-file-pdf"></i> Ficha Técnica
                        </button>
                        <a href="contacto.html" class="btn-cotizar">
                            <i class="fas fa-dollar-sign"></i> Cotizar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoriaLabel(categoria) {
    const labels = {
        tuberia: 'Tubería',
        conexiones: 'Conexiones',
        valvulas: 'Válvulas',
        accesorios: 'Accesorios'
    };
    return labels[categoria] || categoria;
}

window.verPDF = (pdfUrl, productName) => {
    window.open(pdfUrl, '_blank');
};

function initFiltrosProductos() {
    const btns = document.querySelectorAll('.filter-prod-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filtro = this.getAttribute('data-filter');
            renderProductos(filtro);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
    renderProductos('all');
    initFiltrosProductos();
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});