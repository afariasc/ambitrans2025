// JSON con las descripciones
const data = {
    "Evaluación de Impacto Vial": [
        "Informe de Mitigación de Impacto Vial (IMIV)",
        "Análisis Vial Básico (AVB)",
        "Estudios de Impacto Vial (EIV)"
    ],
    "Logística Vial": [
        "Estudios de Factibilidad Vial de Proyectos",
        "Estudios de Riesgos Viales",
        "Estudios para Transporte de Cargas Peligrosas y Especiales",
        "Diseño de Rutas de Transporte",
        "Plan de Desvíos de Tránsito"
    ],
    "Diseño Vial": [
        "Diseño Conceptual de Caminos, Accesos Vehiculares e Intersecciones",
        "Factibilidad y Regularización de Accesos Vehiculares",
        "Proyectos de Seguridad Vial"
    ],
    "Semaforización": [
        "Proyectos de Semaforización",
        "Estudios de Justificación de Semáforos",
        "Estudios de Sintonía Fina"
    ],
    "Líneas de Base Vial y Diagnóstico de Seguridad Vial": [
        "Líneas de Base Vial y Diagnóstico de Seguridad Vial",
        "Estudios de Diagnóstico Elementos de Seguridad Vial Existentes"
    ],
    "Otros Estudios y Asesorías": [
        "Estudios de Tránsito para Proyectos Viales",
        "Estudios de Atraviesos y Paralelismos",
        "Estudios de Demanda de Tránsito",
        "Análisis de Procesos Logísticos - Medición de Tiempos de Proceso para Cadenas Logísticas",
        "Inspección Técnica en la Materialización de las Medidas de Mitigación de los Proyectos",
        "Análisis de la Operación Vial de Proyectos"
    ],
    "Modelación de Tránsito": [
        "SIDRA",
        "TRANSYT",
        "SATURN",
        "AIMSUN",
        "VEHICLE TRACKING",
        "AUTOTURN"
    ],
    "Mediciones y Catastros": [
        "Medición de Flujos Vehiculares y Peatonales",
        "Encuestas Origen / Destino",
        "Encuestas de Preferencias Declaradas",
        "Medición de Tasas de Ocupación por Tipo de Vehículo",
        "Medición de Tiempo de Viaje",
        "Medición de Longitud de Colas",
        "Catastro y Frecuencias de Transporte Público",
        "Catastro de Seguridad Vial",
        "Catastro en Rutas de Camiones",
        "Medición de Actividad de Paraderos de Transporte Público",
        "Recolección de Información de Accidentes de Tránsito"
    ]
};

// Función para actualizar el modal
function updateModalContent(title) {
    const modalTitle = document.querySelector('#ModalInfo h5');
    const modalList = document.querySelector('#ModalInfo ul');

    // Actualiza el título
    modalTitle.innerHTML = title;

    // Limpia el contenido anterior
    modalList.innerHTML = '';

    // Añade los elementos de la lista desde el JSON
    if (data[title]) {
        data[title].forEach(item => {
            let li = document.createElement('li');
            li.className = 'fs-5';
            li.textContent = item;
            modalList.appendChild(li);
        });
    } else {
        modalList.innerHTML = '<li class="fs-5">No hay información disponible.</li>';
    }
}

// Evento para capturar clicks
document.querySelectorAll('.box-icon-modern').forEach(item => {
    item.addEventListener('click', function () {
        const title = this.querySelector('.box-icon-modern-title').innerText;
        updateModalContent(title);
    });
});