const valores = [
    { icono: "fas fa-handshake", titulo: "Compromiso", descripcion: "Cumplimos con los más altos estándares de calidad y puntualidad." },
    { icono: "fas fa-shield-alt", titulo: "Integridad", descripcion: "Actuamos con honestidad y transparencia en cada operación." },
    { icono: "fas fa-users", titulo: "Trabajo en Equipo", descripcion: "Colaboración constante para lograr los mejores resultados." },
    { icono: "fas fa-chart-line", titulo: "Mejora Continua", descripcion: "Innovamos día a día para superar las expectativas." },
    { icono: "fas fa-globe", titulo: "Responsabilidad", descripcion: "Comprometidos con el medio ambiente y la seguridad industrial." },
    { icono: "fas fa-medal", titulo: "Excelencia", descripcion: "Buscamos la perfección en cada suministro." }
];



function renderValores() {
    const container = document.getElementById('valuesContainer');
    if (container) {
        container.innerHTML = valores.map(v => `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="value-card">
                    <div class="value-icon">
                        <i class="${v.icono}"></i>
                    </div>
                    <h4>${v.titulo}</h4>
                    <p>${v.descripcion}</p>
                </div>
            </div>
        `).join('');
    }
}

function renderEquipo() {
    const container = document.getElementById('teamContainer');
    if (container) {
        container.innerHTML = equipo.map(m => `
            <div class="col-lg-3 col-md-6" data-aos="zoom-in">
                <div class="team-card">
                    <div class="team-img">
                        <img src="${m.img}" alt="${m.nombre}">
                    </div>
                    <div class="team-info">
                        <h4>${m.nombre}</h4>
                        <p>${m.puesto}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderValores();
    renderEquipo();
    AOS.refresh();
});