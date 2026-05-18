const NUMERO_WHATSAPP = "5219933959392";  // Formato: 52 (México) + 1 + 9933959392

function enviarWhatsApp(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const empresa = document.getElementById('empresa')?.value.trim() || 'No especificada';
    
    if (!nombre || !email || !telefono || !asunto) {
        mostrarMensaje('❌ Por favor complete todos los campos requeridos.', 'danger');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarMensaje('❌ Por favor ingrese un correo electrónico válido.', 'danger');
        return;
    }
    
    const submitBtn = document.getElementById('submitBtn');
    const textoOriginal = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Abriendo WhatsApp...';
    
    const mensajeWhatsApp = `*NUEVO CONTACTO DESDE LA WEB*
    
📋 *DATOS DEL CLIENTE*
├ *Nombre:* ${nombre}
├ *Empresa:* ${empresa}
├ *Email:* ${email}
├ *Teléfono:* ${telefono}
└ *Asunto:* ${asunto}`;
    
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
    
    mostrarMensaje('✅ WhatsApp se ha abierto. Envíanos tu mensaje y te responderemos pronto.', 'success');
    
    document.getElementById('contactForm').reset();
    
    submitBtn.disabled = false;
    submitBtn.innerHTML = textoOriginal;
}

function mostrarMensaje(mensaje, tipo) {
    const formMessage = document.getElementById('formMessage');
    formMessage.className = `alert alert-${tipo} d-block`;
    formMessage.innerHTML = mensaje;
    
    setTimeout(() => {
        formMessage.classList.add('d-none');
    }, 5000);
}

function initMap() {
    const ubicacion = [17.9869, -92.9304];
    const map = L.map('map').setView(ubicacion, 16);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & CartoDB',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    const markerIcon = L.divIcon({
        html: '<i class="fas fa-map-marker-alt" style="font-size: 40px; color: #ff5203; text-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>',
        iconSize: [40, 40],
        className: 'custom-marker'
    });
    
    const marker = L.marker(ubicacion, { icon: markerIcon }).addTo(map);
    marker.bindPopup(`
        <strong>Tuberías y Conexiones Oil & Gas</strong><br>
        Periférico Carlos Pellicer Cámara No. 619<br>
        Col. Miguel Hidalgo, Villahermosa, Tabasco
    `).openPopup();
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
    
    if (document.getElementById('map')) {
        initMap();
    }
    
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', enviarWhatsApp);
    }
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});