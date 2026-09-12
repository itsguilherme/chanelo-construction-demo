(function () {
  var translations = {
    phone_label: { en: "(813) 735-8293", es: "(813) 735-8293" },
    cta_short: { en: "Call or Text", es: "Llamar o Texto" },
    hero_eyebrow: { en: "GIBSONTON, FL — PASCO • HILLSBOROUGH • PINELLAS COUNTIES", es: "GIBSONTON, FL — CONDADOS DE PASCO, HILLSBOROUGH Y PINELLAS" },
    hero_headline: { en: "See Real Work Before You Call", es: "Mira Trabajo Real Antes de Llamar" },
    hero_sub: {
      en: "Chanelo Construction handles <strong>stucco, concrete, plaster, and painting</strong> for homes across Pasco, Hillsborough, and Pinellas counties. Call or text for a free quote.",
      es: "Chanelo Construction se encarga de <strong>estuco, concreto, yeso y pintura</strong> en casas de los condados de Pasco, Hillsborough y Pinellas. Llama o envía un mensaje de texto para una cotización gratis."
    },
    cta_call: { en: "Call or Text (813) 735-8293", es: "Llama o Envía Texto al (813) 735-8293" },
    cta_call_arrow: { en: "Call or Text (813) 735-8293 &rarr;", es: "Llama o Envía Texto al (813) 735-8293 &rarr;" },
    cta_get_quote_arrow: { en: "Get a Free Quote &rarr;", es: "Cotización Gratis &rarr;" },
    hero_chip_est: { en: "Est. 2022", es: "Fundada en 2022" },
    hero_chip_area: { en: "Pasco &bull; Hillsborough &bull; Pinellas", es: "Pasco &bull; Hillsborough &bull; Pinellas" },
    hero_chip_services: { en: "Stucco, Concrete &amp; Painting", es: "Estuco, Concreto y Pintura" },
    nav_about: { en: "About", es: "Sobre Nosotros" },
    nav_services: { en: "Services", es: "Servicios" },
    nav_projects: { en: "Our Projects", es: "Nuestros Proyectos" },
    nav_contact: { en: "Contact", es: "Contacto" },
    about_eyebrow: { en: "WHO WE ARE", es: "QUIÉNES SOMOS" },
    about_heading: { en: "A Local, Family-Run Crew", es: "Un Equipo Familiar y Local" },
    about_body: {
      en: "Chanelo Construction is a family-run crew based in Gibsonton, Florida, led by <strong>Alberto and Daniel Chanelo</strong>. The team handles stucco, concrete, plaster, and painting for homes across Pasco, Hillsborough, and Pinellas counties, from small repairs to full new construction. Every job starts with an in-person visit and a real conversation about what the space needs.",
      es: "Chanelo Construction es un equipo familiar con base en Gibsonton, Florida, dirigido por <strong>Alberto y Daniel Chanelo</strong>. El equipo se encarga de estuco, concreto, yeso y pintura en casas de los condados de Pasco, Hillsborough y Pinellas, desde pequeñas reparaciones hasta construcción nueva completa. Cada trabajo comienza con una visita en persona y una conversación real sobre lo que el espacio necesita."
    },
    placeholder_hero: { en: "Real project photo goes here", es: "Foto real del proyecto va aquí" },
    work_eyebrow: { en: "REAL PROJECTS", es: "PROYECTOS REALES" },
    work_heading: { en: "Our Work Speaks for Itself", es: "Nuestro Trabajo Habla Por Sí Solo" },
    work_sub: { en: "A look at real jobs, from start to finish.", es: "Un vistazo a trabajos reales, de principio a fin." },
    placeholder_generic: { en: "Real project photo", es: "Foto real del proyecto" },
    work_see_more: { en: "See more of our work &rarr;", es: "Ver más de nuestro trabajo &rarr;" },
    services_eyebrow: { en: "WHAT WE DO", es: "LO QUE HACEMOS" },
    services_heading: { en: "Our Services", es: "Nuestros Servicios" },
    service_1_title: { en: "Stucco", es: "Estuco" },
    service_1_desc: {
      en: "Stucco repair, patching, and <strong>full installation</strong> for homes and additions.",
      es: "Reparación de estuco, parcheo e <strong>instalación completa</strong> para casas y adiciones."
    },
    service_2_title: { en: "Concrete", es: "Concreto" },
    service_2_desc: {
      en: "Driveways, walkways, slabs, and patios, <strong>poured and finished right</strong>.",
      es: "Entradas de auto, caminos, losas y patios, <strong>vaciados y terminados correctamente</strong>."
    },
    service_3_title: { en: "Painting &amp; Plaster", es: "Pintura y Yeso" },
    service_3_desc: {
      en: "Interior and exterior painting, plus <strong>plaster repair and finishing</strong>.",
      es: "Pintura interior y exterior, además de <strong>reparación y acabado de yeso</strong>."
    },
    service_4_title: { en: "Repairs &amp; New Construction", es: "Reparaciones y Construcción Nueva" },
    service_4_desc: {
      en: "From <strong>small repairs</strong> to <strong>full new construction</strong> projects.",
      es: "Desde <strong>pequeñas reparaciones</strong> hasta <strong>construcción nueva</strong> completa."
    },
    process_eyebrow: { en: "NO SURPRISES", es: "SIN SORPRESAS" },
    process_heading: { en: "What Happens When You Call", es: "Qué Pasa Cuando Llamas" },
    process_1: { en: "You call or text us.", es: "Nos llamas o envías un mensaje de texto." },
    process_2: { en: "We come look at the job in person.", es: "Vamos a ver el trabajo en persona." },
    process_3: { en: "You get a real quote. No pressure.", es: "Te damos una cotización real. Sin presión." },
    process_4: { en: "We get to work and keep you updated.", es: "Empezamos el trabajo y te mantenemos informado." },
    area_eyebrow: { en: "WHERE WE WORK", es: "DÓNDE TRABAJAMOS" },
    area_heading: { en: "Proudly Serving Three Counties", es: "Sirviendo con Orgullo Tres Condados" },
    county_1: { en: "Pasco County", es: "Condado de Pasco" },
    county_2: { en: "Hillsborough County", es: "Condado de Hillsborough" },
    county_3: { en: "Pinellas County", es: "Condado de Pinellas" },
    faq_eyebrow: { en: "QUESTIONS", es: "PREGUNTAS" },
    faq_heading: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
    faq_q1: { en: "What areas do you serve?", es: "¿Qué áreas atienden?" },
    faq_a1: { en: "We serve <strong>Pasco, Hillsborough, and Pinellas counties</strong> in Florida.", es: "Atendemos los <strong>condados de Pasco, Hillsborough y Pinellas</strong> en Florida." },
    faq_q2: { en: "What kind of jobs do you take?", es: "¿Qué tipo de trabajos hacen?" },
    faq_a2: { en: "Everything from small repairs to full new construction, including <strong>stucco, concrete, plaster, and painting</strong>.", es: "Desde pequeñas reparaciones hasta construcción nueva completa, incluyendo <strong>estuco, concreto, yeso y pintura</strong>." },
    faq_q3: { en: "How do I get a quote?", es: "¿Cómo consigo una cotización?" },
    faq_a3: { en: "Call or text us. We will come look at the job and give you <strong>a real quote, no pressure</strong>.", es: "Llámanos o envíanos un mensaje de texto. Iremos a ver el trabajo y te daremos <strong>una cotización real, sin presión</strong>." },
    faq_q4: { en: "Are quotes free?", es: "¿Las cotizaciones son gratis?" },
    faq_a4: { en: "<strong>Yes, every quote is free.</strong>", es: "<strong>Sí, cada cotización es gratis.</strong>" },
    final_heading: { en: "Ready to Get Started?", es: "¿Listo Para Empezar?" },
    final_sub: { en: "Call or text today for a free quote.", es: "Llama o envía un mensaje de texto hoy para una cotización gratis." },
    footer_area: { en: "Serving Pasco, Hillsborough, and Pinellas counties, Florida", es: "Sirviendo los condados de Pasco, Hillsborough y Pinellas, Florida" },
    footer_copy: { en: "&copy; 2026 Chanelo Construction Company LLC", es: "&copy; 2026 Chanelo Construction Company LLC" },

    contact_eyebrow: { en: "GET IN TOUCH", es: "PONTE EN CONTACTO" },
    contact_heading: { en: "Get a Free Quote", es: "Consigue una Cotización Gratis" },
    contact_sub: { en: "Call, text, or send a message. We'll get back to you and set up a time to come look at the job.", es: "Llama, envía un mensaje de texto, o escríbenos. Te responderemos y programaremos una visita para ver el trabajo." },
    contact_call_label: { en: "Call or Text", es: "Llamar o Texto" },
    contact_area_label: { en: "Service Area", es: "Área de Servicio" },
    form_confirm_heading: { en: "Thanks for reaching out!", es: "¡Gracias por contactarnos!" },
    form_confirm_body: { en: "For the fastest response, call or text us directly.", es: "Para una respuesta más rápida, llámanos o envíanos un mensaje de texto directamente." },
    form_name: { en: "Name", es: "Nombre" },
    form_phone: { en: "Phone", es: "Teléfono" },
    form_email: { en: "Email", es: "Correo Electrónico" },
    form_project_type: { en: "Project Type", es: "Tipo de Proyecto" },
    form_select_placeholder: { en: "Select one", es: "Selecciona uno" },
    form_message: { en: "Message", es: "Mensaje" },
    form_submit: { en: "Send Message", es: "Enviar Mensaje" },

    workpage_eyebrow: { en: "REAL PROJECTS", es: "PROYECTOS REALES" },
    workpage_heading: { en: "Our Work", es: "Nuestro Trabajo" },
    workpage_sub: { en: "A closer look at real jobs across Pasco, Hillsborough, and Pinellas counties.", es: "Una mirada más de cerca a trabajos reales en los condados de Pasco, Hillsborough y Pinellas." },
    cat_stucco: { en: "Stucco", es: "Estuco" },
    cat_concrete: { en: "Concrete", es: "Concreto" },
    cat_painting: { en: "Painting &amp; Plaster", es: "Pintura y Yeso" },
    cat_renovations: { en: "Full Renovations", es: "Renovaciones Completas" },

    alt_hero_home: { en: "A finished home renovation by Chanelo Construction", es: "Una renovación de casa terminada por Chanelo Construction" },
    alt_driveway_during: { en: "Chanelo Construction crew finishing a fresh concrete driveway", es: "El equipo de Chanelo Construction terminando una entrada de concreto recién vaciada" },
    alt_stucco_patch: { en: "Fresh stucco patch repair on a home exterior", es: "Reparación reciente de estuco en el exterior de una casa" },
    alt_patio: { en: "Covered patio addition with tile flooring", es: "Adición de patio cubierto con piso de losa" },
    alt_entry: { en: "Renovated home entry with glass block and tile flooring", es: "Entrada de casa renovada con bloque de vidrio y piso de losa" },
    alt_flagship_1: { en: "Stucco home under construction", es: "Casa con estuco en construcción" },
    alt_flagship_2: { en: "Home construction site with framing in progress", es: "Sitio de construcción de casa con estructura en progreso" },
    alt_driveway_after: { en: "Finished concrete driveway", es: "Entrada de concreto terminada" },
    alt_window_install: { en: "New sliding glass door installation", es: "Instalación de nueva puerta corrediza de vidrio" },

    aria_whatsapp: { en: "Chat on WhatsApp", es: "Chatear por WhatsApp" },
    aria_back_to_top: { en: "Back to top", es: "Volver arriba" },
    aria_lightbox_close: { en: "Close", es: "Cerrar" },
    aria_lightbox_prev: { en: "Previous photo", es: "Foto anterior" },
    aria_lightbox_next: { en: "Next photo", es: "Foto siguiente" }
  };

  var STORAGE_KEY = "chanelo-lang";

  function applyLang(lang) {
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        node.innerHTML = entry[lang];
      }
    });
    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    altNodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n-alt");
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        node.setAttribute("alt", entry[lang]);
      }
    });
    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    ariaNodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n-aria");
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        node.setAttribute("aria-label", entry[lang]);
      }
    });
    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"
      );
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") return saved;
    } catch (e) {}
    return "en";
  }

  function initMobileNav() {
    var hamburger = document.getElementById("hamburger-btn");
    var nav = document.getElementById("main-nav");
    var overlay = document.getElementById("nav-overlay");
    var closeBtn = document.getElementById("nav-close");
    if (!hamburger || !nav || !overlay) return;

    function openNav() {
      nav.classList.add("is-open");
      overlay.classList.add("is-open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-locked");
    }
    function closeNav() {
      nav.classList.remove("is-open");
      overlay.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-locked");
    }
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) { closeNav(); } else { openNav(); }
    });
    overlay.addEventListener("click", closeNav);
    if (closeBtn) closeBtn.addEventListener("click", closeNav);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    var imgEl = document.getElementById("lightbox-img");
    var closeBtn = document.getElementById("lightbox-close");
    var prevBtn = document.getElementById("lightbox-prev");
    var nextBtn = document.getElementById("lightbox-next");
    var tiles = Array.prototype.slice.call(document.querySelectorAll(".photo-tile img"));
    if (tiles.length === 0) return;
    var currentIndex = 0;

    function show(index) {
      currentIndex = (index + tiles.length) % tiles.length;
      var img = tiles[currentIndex];
      imgEl.src = img.currentSrc || img.src;
      imgEl.alt = img.alt || "";
    }
    function open(index) {
      show(index);
      lightbox.hidden = false;
      requestAnimationFrame(function () { lightbox.classList.add("is-open"); });
      document.body.classList.add("nav-locked");
    }
    function close() {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("nav-locked");
      setTimeout(function () { lightbox.hidden = true; }, 250);
    }
    tiles.forEach(function (img, i) {
      img.closest(".photo-tile").addEventListener("click", function () { open(i); });
    });
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    prevBtn.addEventListener("click", function () { show(currentIndex - 1); });
    nextBtn.addEventListener("click", function () { show(currentIndex + 1); });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(currentIndex - 1);
      if (e.key === "ArrowRight") show(currentIndex + 1);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var currentLang = getInitialLang();
    applyLang(currentLang);

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "es" : "en";
        applyLang(currentLang);
      });
    }

    initMobileNav();
    initLightbox();

    var contactForm = document.getElementById("contact-form");
    var formConfirmation = document.getElementById("form-confirmation");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        contactForm.hidden = true;
        if (formConfirmation) formConfirmation.hidden = false;
      });
    }

    // Back to top
    var backToTop = document.getElementById("back-to-top");
    if (backToTop) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
          backToTop.classList.add("is-visible");
        } else {
          backToTop.classList.remove("is-visible");
        }
      });
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Scroll-reveal animations
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var revealEls = document.querySelectorAll(".reveal");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (el) { observer.observe(el); });
    }
  });
})();
