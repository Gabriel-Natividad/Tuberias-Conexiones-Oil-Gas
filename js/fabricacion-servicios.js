// ======================== SERVICIOS ESPECIALIZADOS ========================
const serviciosEspecializados = [
    { icono: "fas fa-industry", titulo: "FABRICACIONES Y MAQUINADO DE PIEZAS", descripcion: "Fabricación de piezas a la medida y maquinado de precisión según especificaciones del cliente." },
    { icono: "fas fa-exchange-alt", titulo: "FABRICACIONES DE CROSS OVER", descripcion: "Fabricación de Crossover FIG100, 200, 206, 602 y 1502 para conexiones especiales en sistemas de alta presión." },
    { icono: "fas fa-cut", titulo: "RANURADO DE TUBERIA", descripcion: "Ranurado de tubería C-10 y C-40 para sistemas de unión mecánica rápida." },
    { icono: "fas fa-anchor", titulo: "FABRICACION DE ANCLAS DE CIMENTACIÓN", descripcion: "Fabricación de anclas de cimentación para estructuras industriales y equipos pesados." },
    { icono: "fas fa-tools", titulo: "ROSCADO Y CORTE DE TUBERIA", descripcion: "Servicio de roscado y corte de tubería en diferentes diámetros y cédulas." },
    { icono: "fas fa-fire", titulo: "SOLDADURA EN GENERAL", descripcion: "Procesos de soldadura GTAW (TIG), SMAW (eléctrica) y otros procesos certificados." },
    { icono: "fas fa-vial", titulo: "PRUEBAS NO DESTRUCTIVAS", descripcion: "Realizamos pruebas no destructivas (líquidos penetrantes, ultrasonido, radiografía) para garantizar la calidad." },
    { icono: "fas fa-drafting-compass", titulo: "PAILERIA", descripcion: "Fabricación de ductos, tolvas, tanques y estructuras metálicas a la medida." },
    { icono: "fas fa-building", titulo: "ESTRUCTURAS Y MONTAJES INDUSTRIALES", descripcion: "Diseño, fabricación y montaje de estructuras metálicas para plantas industriales." },
    { icono: "fas fa-valve", titulo: "MANTENIMIENTOS A VÁLVULAS", descripcion: "Mantenimiento preventivo y correctivo de válvulas de alta y baja presión." },
    { icono: "fas fa-water", titulo: "MANTENIMIENTO BOMBAS ELECTRICAS", descripcion: "Reparación y mantenimiento de bombas eléctricas industriales." },
    { icono: "fas fa-car", titulo: "REPARACIÓN DE GATOS HIDRAULICOS", descripcion: "Reparación y mantenimiento de gatos hidráulicos de diferentes capacidades." }
];

function renderServicios() {
    const container = document.getElementById('serviciosGridContainer');
    if (container) {
        container.innerHTML = serviciosEspecializados.map(servicio => `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="servicio-card-full">
                    <div class="servicio-icon-full"><i class="${servicio.icono}"></i></div>
                    <h4>${servicio.titulo}</h4>
                    <p>${servicio.descripcion}</p>
                </div>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
    renderServicios();
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) { if (window.scrollY > 100) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
});