// Set dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Source of Truth
const translations = {
    es: {
        nav: {
            brand: "Frank Rodriguez Lee",
            about: "Sobre mí",
            experience: "Trayectoria",
            contact: "Contacto",
            btn_download: "Descargar CV"
        },
        hero: {
            name: "Frank Rodriguez Lee",
            role: "Programme Manager | Delivery Manager",
            headline: "Impulsando la Agilidad Empresarial y la Transformación Global a través de la Excelencia en el Delivery",
            description: "Líder tecnológico con dos décadas de experiencia dirigiendo programas globales. Experto en entregar proyectos complejos en Retail, Utilities y Finanzas, gestionando equipos distribuidos y aprovechando metodologías Ágiles (SAFe) y Data Analytics.",
            cta_primary: "Ver Experiencia",
            cta_secondary: "Contactar"
        },
        jobs: {
            ntt: {
                period: "Junio 2022 – Actualidad",
                role: "Consultor Principal Senior",
                company: "NTT Data UK&I",
                desc: "• Lideré el Área de Valor para Delivery y Optimización (7 personas).\n• Entrenador oficial para cursos SAFe (PM/PO, Scrum Master).\n• Gestioné múltiples programas de Tecnología de Marketing y equipos de plataformas Salesforce/MuleSoft (20 personas), mejorando el rendimiento en un 25%."
            },
            hispam: {
                period: "Ene 2022 – Jun 2022",
                role: "Solution Train Engineer",
                company: "Telefónica HISPAM",
                desc: "• Gestioné el descubrimiento y entrega para Canales Digitales en LATAM (150 personas).\n• Apoyé el roadmap de transformación ágil para 7 países (Perú, Colombia, Ecuador, Chile, Argentina, Uruguay, México).\n• Definí el Modelo Operativo Ágil y la implementación de OKRs."
            },
            peru: {
                period: "May 2018 – Dic 2021",
                role: "Solution Train Engineer / PM",
                company: "Telefónica Perú",
                desc: "• Lideré la implementación de Cultura Ágil y el proceso de PI Planning para más de 500 personas.\n• Gestioné el portafolio de desarrollo de software.\n• Case study para Atlassian y Scaled Agile."
            },
            teradata: {
                period: "Jul 2016 – May 2018",
                role: "Delivery Manager / PM",
                company: "Teradata",
                desc: "• Lideré el primer proyecto ágil en LATAM para Teradata.\n• Generé 2.5MM USD en ingresos (2016-2017).\n• Definí el proceso KANBAN y el roadmap del programa Agile de Data/Analytics (Presupuesto 8MM USD)."
            },
            axcess: {
                period: "Nov 2011 – Jun 2016",
                role: "Senior Project Manager",
                company: "Axcess Financial",
                desc: "• Lideré proyectos complejos como el Módulo de Underwriting y el lanzamiento del producto Choice Loan en 26 estados de EE.UU.\n• Gestioné equipos distribuidos (Perú, EE.UU., RU).\n• Implementé pipelines DevOps para el Canal Online."
            }
        },
        footer: {
            rights: "Todos los derechos reservados."
        },
        links: {
            pdf: "./cv-frank-rodriguez-es.pdf"
        },
        contact: {
            headline: "¿Listo para comenzar un proyecto?",
            subheadline: "Colaboremos para impulsar tu transformación digital.",
            email_label: "Envíame un correo",
            linkedin_label: "Conecta en"
        },
        form: {
            name: "Nombre Completo",
            name_ph: "Tu nombre",
            email: "Correo Electrónico",
            email_ph: "ejemplo@correo.com",
            phone: "Teléfono",
            phone_ph: "+51 123 456 789",
            message: "Mensaje",
            message_ph: "Escribe tu consulta aquí...",
            submit: "Enviar Mensaje"
        }
    },
    en: {
        nav: {
            brand: "Frank Rodriguez Lee",
            about: "About",
            experience: "Career",
            contact: "Contact",
            btn_download: "Download Resume"
        },
        hero: {
            name: "Frank Rodriguez Lee",
            role: "Programme Manager | Delivery Manager",
            headline: "Driving Enterprise Agility & Global Transformation through Delivery Excellence",
            description: "Proven technology leader with two decades of experience leading global programme management. Expert in delivering complex projects across Retail, Utilities, and Finance industries, adept at managing globally distributed teams and leveraging Agile methodologies (SAFe) and Data Analytics.",
            cta_primary: "View Experience",
            cta_secondary: "Get in Touch"
        },
        jobs: {
            ntt: {
                period: "June 2022 – Current",
                role: "Senior Principal Consultant",
                company: "NTT Data UK&I",
                desc: "• Led Value Area for Delivery and Optimise (circa 7 people).\n• Official trainer for SAFe courses (PM/PO, Scrum Master).\n• Managed delivery for Marketing Technology and Salesforce/MuleSoft teams (circa 20 people), improving performance by 25%."
            },
            hispam: {
                period: "Jan 2022 – Jun 2022",
                role: "Solution Train Engineer",
                company: "Telefónica HISPAM",
                desc: "• Managed discovery/delivery for Digital Channels across LATAM (circa 150 people).\n• Shaped Agile transformation roadmap for 7 countries.\n• Defined and implemented the Agile Operational Model and OKRs."
            },
            peru: {
                period: "May 2018 – Dec 2021",
                role: "Solution Train Engineer / PM",
                company: "Telefónica Perú",
                desc: "• Supported implementation of Agile Culture and Digital Transformation.\n• Led PI Planning Process for 500+ people, improving delivery cadence.\n• Recognised by VP Operational Excellence for PI Planning results."
            },
            teradata: {
                period: "Jul 2016 – May 2018",
                role: "Delivery Manager / PM",
                company: "Teradata",
                desc: "• Led the first agile project in LATAM for Teradata.\n• Generated $2.5M USD revenue (2016-2017).\n• Defined KANBAN process and roadmap for Data/Analytics Agile program ($8M budget)."
            },
            axcess: {
                period: "Nov 2011 – Jun 2016",
                role: "Senior Project Manager",
                company: "Axcess Financial",
                desc: "• Led complex projects inclusive of Underwriting Module and Choice Loan Product launch across 26 US states.\n• Managed cross-functional teams in Peru, USA, UK.\n• Implemented DevOps pipelines for Online Channel."
            }
        },
        footer: {
            rights: "All rights reserved."
        },
        links: {
            pdf: "./cv-frank-rodriguez-en.pdf"
        },
        contact: {
            headline: "Ready to start a project?",
            subheadline: "Let's collaborate to drive your digital transformation.",
            email_label: "Email Me",
            linkedin_label: "Connect on"
        },
        form: {
            name: "Full Name",
            name_ph: "Your Name",
            email: "Email Address",
            email_ph: "john@example.com",
            phone: "Phone",
            phone_ph: "+1 234 567 890",
            message: "Message",
            message_ph: "Write your message here...",
            submit: "Send Message"
        }
    }
};

// State
let currentLang = 'en'; // default

// Elements
const langSwitchBtn = document.getElementById('lang-switch');
const langSwitchBtnMobile = document.getElementById('lang-switch-mobile');
const langText = document.getElementById('lang-text');
const btnDownload = document.getElementById('btn-download');
const btnDownloadMobile = document.getElementById('btn-download-mobile');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Functions
function updateLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = data;
        keys.forEach(k => {
            value = value[k];
        });
        if (value) element.textContent = value;
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = data;
        keys.forEach(k => {
            value = value[k];
        });
        if (value) element.placeholder = value;
    });

    // Update PDF Links
    const pdfLink = data.links.pdf;
    if (btnDownload) btnDownload.href = pdfLink;
    if (btnDownloadMobile) btnDownloadMobile.href = pdfLink;

    // Update Toggle Button Text
    if (langText) langText.textContent = lang === 'es' ? 'EN' : 'ES';
}

function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Language Switch Events
langSwitchBtn.addEventListener('click', toggleLanguage);
langSwitchBtnMobile.addEventListener('click', toggleLanguage);

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Initialize (optional, HTML is already ES by default but this ensures sync)
updateLanguage('en');

// Contact Form Handlers
let enviado = false;

function confirmarEnvio() {
    enviado = true;
}

function respuestaCargada() {
    if (enviado) {
        const lang = currentLang;
        const msg = lang === 'es' ? "¡Gracias! Tu mensaje ha sido enviado correctamente." : "Thank you! Your message has been sent successfully.";
        alert(msg);
        document.getElementById("contactForm").reset();
        enviado = false;
    }
}
