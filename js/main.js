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
    placeholder_hero: { en: "Real project photo goes here", es: "Foto real del proyecto va aquí" },
    work_eyebrow: { en: "REAL PROJECTS", es: "PROYECTOS REALES" },
    work_heading: { en: "Our Work Speaks for Itself", es: "Nuestro Trabajo Habla Por Sí Solo" },
    work_sub: { en: "A look at real jobs, from start to finish.", es: "Un vistazo a trabajos reales, de principio a fin." },
    placeholder_generic: { en: "Real project photo", es: "Foto real del proyecto" },
    work_see_more: { en: "See more of our work &rarr;", es: "Ver más de nuestro trabajo &rarr;" },
    services_eyebrow: { en: "WHAT WE DO", es: "LO QUE HACEMOS" },
    services_heading: { en: "Our Services", es: "Nuestros Servicios" },
    service_1_title: { en: "Stucco", es: "Estuco" },
    service_1_desc: { en: "Stucco repair, patching, and full installation for homes and additions.", es: "Reparación de estuco, parcheo e instalación completa para casas y adiciones." },
    service_2_title: { en: "Concrete", es: "Concreto" },
    service_2_desc: { en: "Driveways, walkways, slabs, and patios, poured and finished right.", es: "Entradas de auto, caminos, losas y patios, vaciados y terminados correctamente." },
    service_3_title: { en: "Painting &amp; Plaster", es: "Pintura y Yeso" },
    service_3_desc: { en: "Interior and exterior painting, plus plaster repair and finishing.", es: "Pintura interior y exterior, además de reparación y acabado de yeso." },
    service_4_title: { en: "Repairs &amp; New Construction", es: "Reparaciones y Construcción Nueva" },
    service_4_desc: { en: "From small home repairs to full new construction projects.", es: "Desde pequeñas reparaciones hasta proyectos completos de construcción nueva." },
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
    footer_copy: { en: "&copy; 2026 Chanelo Construction Company LLC", es: "&copy; 2026 Chanelo Construction Company LLC" }
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
  });
})();
