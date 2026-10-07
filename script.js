const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector("#navMenu");
if(menuBtn)menuBtn.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll("#navMenu a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

const languageBtn=document.getElementById("languageBtn"), languageMenu=document.getElementById("languageMenu");
languageBtn.onclick=()=>{const open=languageMenu.classList.toggle("open");languageBtn.setAttribute("aria-expanded",open)};
document.addEventListener("click",e=>{if(!e.target.closest(".language-wrap"))languageMenu.classList.remove("open")});

const translations={
en:{
home:"Home",servicesNav:"Services",aboutNav:"About",contactNav:"Contact",tagline:"Professional Electrician",
eyebrow:"⚡ SAFE • RELIABLE • PROFESSIONAL",expert:"Expert",electrical:"Electrical",servicesIn:"Services in Deer Park, NY",
heroText:"I’m Ismail, a professional electrician providing reliable, safe and affordable electrical solutions for homes and properties in Deer Park, NY 11729 and surrounding areas.",
callNow:"☎ Call Now",chatWhatsapp:"💬 Chat ",trust1:"Professional Service",trust2:"Fast Response",trust3:"Quality Work",
namePh:"Your full name",phonePh:"Your phone number",emailPh:"Your email address",addressPh:"Your address",messagePh:"Describe the electrical work you need...",emailLabel:"Email Address",addressLabel:"Address",chooseService:"Choose a service",
whatIDo:"WHAT I DO",serviceTitle:"Professional Electrical Services",serviceSub:"Reliable, safe and high-quality electrical solutions for your home or property.",
s1t:"Electrical Repair",s1:"I provide dependable electrical repair for common home and property problems, including faulty wiring, damaged connections, non-working fixtures, tripped breakers and other electrical issues. I focus on identifying the cause of the problem, correcting it carefully, and helping make sure your electrical system is operating safely and properly.",
s2t:"Lighting",s2:"Upgrade the look, comfort and functionality of your property with professional lighting service. I can help with light fixture installation, replacement, troubleshooting, indoor lighting, outdoor lighting, LED upgrades and other lighting improvements. Whether you need a single fixture replaced or several lights installed, I can help with your project.",
s3t:"Outlets & Switches",s3:"Outlets and switches are used every day, so they need to work safely and reliably. I can install or replace standard outlets, GFCI outlets, switches, dimmers and other electrical devices. If an outlet is loose, damaged, warm, sparking or not working correctly, contact me so the issue can be properly evaluated.",
s4t:"Panel & Breakers",s4:"Your electrical panel is an important part of your property’s electrical system. I provide panel and breaker service including inspection, troubleshooting, breaker replacement and electrical panel improvement projects. If breakers repeatedly trip, circuits are overloaded or you are planning an electrical upgrade, I can help identify the appropriate next step.",
s5t:"Home Wiring",s5:"I provide residential wiring services for new installations, remodeling projects, additions and electrical improvements. Proper wiring is essential for reliable operation and safety. Whether you are building, renovating or adding new electrical equipment, I can help with practical wiring solutions designed around your property and electrical needs.",
s6t:"Electrical Troubleshooting",s6:"Electrical problems are not always obvious. I use a systematic approach to help identify the source of electrical issues such as intermittent power, dead outlets, tripping breakers, flickering lights and other faults. The goal is to locate the root cause, explain the issue clearly and recommend a practical solution.",
why1:"Safe & Reliable Work",why1s:"Your safety is my priority",why2:"Fast Response",why2s:"Reliable communication",why3:"Quality Work",why3s:"Professional attention to detail",why4:"Customer Focused",why4s:"Clear and honest service",
aboutMe:"ABOUT ME",aboutTitle:"Hi, I’m Ismail",aboutP1:"I’m a dedicated professional electrician serving Deer Park, NY 11729 and surrounding areas. I take pride in providing careful, dependable and customer-focused electrical service for homes and properties.",aboutP2:"Whether you need a small electrical repair, lighting work, wiring, troubleshooting or a larger electrical improvement, I’m here to help with professional service, clear communication and practical solutions.",area:"Serving Deer Park and surrounding areas",requestService:"Request Service",
getTouch:"GET IN TOUCH",quoteTitle:"Get a Free Quote",quoteText:"Tell me what electrical work you need. Complete the form and click the WhatsApp button. Your information will be prepared in WhatsApp so you can review it before sending.",serviceArea:"SERVICE AREA",formTitle:"Tell Me What You Need",nameLabel:"Full Name",phoneLabel:"Phone Number",serviceLabel:"Service Needed",messageLabel:"Message",sendWhatsapp:"💬 Send Request via WhatsApp →",formNote:"WhatsApp will open with your details ready to review and send."
},
bn:{
home:"হোম",servicesNav:"সার্ভিস",aboutNav:"আমার সম্পর্কে",contactNav:"যোগাযোগ",tagline:"প্রফেশনাল ইলেকট্রিশিয়ান",
eyebrow:"⚡ নিরাপদ • নির্ভরযোগ্য • প্রফেশনাল",expert:"অভিজ্ঞ",electrical:"ইলেকট্রিক্যাল",servicesIn:"সার্ভিস — Deer Park, NY",
heroText:"আমি ইসমাইল, একজন প্রফেশনাল ইলেকট্রিশিয়ান। Deer Park, NY 11729 এবং আশেপাশের এলাকায় বাড়ি ও প্রপার্টির জন্য নির্ভরযোগ্য, নিরাপদ ও সাশ্রয়ী ইলেকট্রিক্যাল সার্ভিস প্রদান করি।",
callNow:"☎ এখনই কল করুন",chatWhatsapp:"💬 WhatsApp-এ যোগাযোগ করুন",trust1:"প্রফেশনাল সার্ভিস",trust2:"দ্রুত রেসপন্স",trust3:"মানসম্মত কাজ",
whatIDo:"আমি যা করি",serviceTitle:"প্রফেশনাল ইলেকট্রিক্যাল সার্ভিস",serviceSub:"আপনার বাড়ি বা প্রপার্টির জন্য নিরাপদ ও মানসম্মত ইলেকট্রিক্যাল সমাধান।",
s1t:"ইলেকট্রিক্যাল রিপেয়ার",s1:"বাড়ি বা প্রপার্টির বিভিন্ন ইলেকট্রিক্যাল সমস্যা যেমন ত্রুটিপূর্ণ wiring, damaged connection, কাজ না করা fixture, breaker trip এবং অন্যান্য electrical fault-এর জন্য নির্ভরযোগ্য repair service প্রদান করি। সমস্যার মূল কারণ চিহ্নিত করে সতর্কতার সাথে কাজ করার ওপর গুরুত্ব দিই।",
s2t:"লাইটিং",s2:"নতুন light fixture installation, replacement, troubleshooting, indoor ও outdoor lighting এবং LED upgrade-এর মতো কাজ করি। আপনার বাড়িতে একটি light পরিবর্তন করা থেকে শুরু করে একাধিক fixture installation পর্যন্ত প্রয়োজন অনুযায়ী professional lighting service দিতে পারি।",
s3t:"আউটলেট ও সুইচ",s3:"Standard outlet, GFCI outlet, switch, dimmer এবং অন্যান্য electrical device install বা replace করতে পারি। কোনো outlet loose, damaged, গরম, spark করা বা ঠিকমতো কাজ না করলে সমস্যাটি নিরাপদভাবে পরীক্ষা করে উপযুক্ত সমাধান দেওয়ার চেষ্টা করি।",
s4t:"প্যানেল ও ব্রেকার",s4:"Electrical panel ও breaker আপনার property-এর গুরুত্বপূর্ণ অংশ। Panel inspection, troubleshooting, breaker replacement এবং electrical improvement-এর কাজে সহায়তা করি। Breaker বারবার trip করলে, circuit overloaded হলে বা electrical upgrade দরকার হলে পরবর্তী উপযুক্ত পদক্ষেপ সম্পর্কে সাহায্য করতে পারি।",
s5t:"হোম wiring",s5:"নতুন installation, remodeling, home addition এবং electrical improvement-এর জন্য residential wiring service প্রদান করি। সঠিক wiring নিরাপত্তা ও নির্ভরযোগ্যতার জন্য অত্যন্ত গুরুত্বপূর্ণ। নতুন electrical equipment যোগ করা বা বাড়ির renovation-এর সময় practical wiring solution দিতে পারি।",
s6t:"ইলেকট্রিক্যাল ট্রাবলশুটিং",s6:"Electrical problem সবসময় চোখে দেখা যায় না। Intermittent power, dead outlet, tripping breaker, flickering light এবং অন্যান্য fault-এর source খুঁজে বের করতে systematic troubleshooting করি। সমস্যার root cause বোঝানো এবং practical solution সম্পর্কে পরিষ্কারভাবে জানানোই লক্ষ্য।",
why1:"নিরাপদ ও নির্ভরযোগ্য কাজ",why1s:"আপনার নিরাপত্তাই অগ্রাধিকার",why2:"দ্রুত রেসপন্স",why2s:"নির্ভরযোগ্য যোগাযোগ",why3:"মানসম্মত কাজ",why3s:"প্রফেশনাল যত্ন",why4:"গ্রাহককেন্দ্রিক",why4s:"পরিষ্কার ও সৎ সার্ভিস",
aboutMe:"আমার সম্পর্কে",aboutTitle:"হাই, আমি ইসমাইল",aboutP1:"আমি Deer Park, NY 11729 এবং আশেপাশের এলাকায় সেবা প্রদানকারী একজন প্রফেশনাল ইলেকট্রিশিয়ান। বাড়ি ও প্রপার্টির জন্য যত্নশীল, নির্ভরযোগ্য ও customer-focused electrical service দেওয়াকে গুরুত্ব দিই।",aboutP2:"ছোট electrical repair, lighting, wiring, troubleshooting অথবা বড় electrical improvement—যে ধরনের কাজই হোক, professional service ও practical solution দিয়ে সাহায্য করতে প্রস্তুত।",area:"Deer Park ও আশেপাশের এলাকায় সার্ভিস",requestService:"সার্ভিসের জন্য যোগাযোগ করুন",
namePh:"আপনার পূর্ণ নাম",phonePh:"আপনার ফোন নম্বর",emailPh:"আপনার ইমেইল",addressPh:"আপনার ঠিকানা",messagePh:"আপনার electrical কাজের বিস্তারিত লিখুন...",emailLabel:"ইমেইল",addressLabel:"ঠিকানা",chooseService:"সার্ভিস নির্বাচন করুন",
getTouch:"যোগাযোগ করুন",quoteTitle:"ফ্রি কোট নিন",quoteText:"আপনার কী ধরনের electrical কাজ দরকার তা জানান। Form পূরণ করে WhatsApp button-এ click করুন। আপনার তথ্য WhatsApp-এ তৈরি হয়ে যাবে এবং পাঠানোর আগে review করতে পারবেন।",serviceArea:"সার্ভিস এলাকা",formTitle:"আপনার কী প্রয়োজন জানান",nameLabel:"পূর্ণ নাম",phoneLabel:"ফোন নম্বর",serviceLabel:"কোন সার্ভিস দরকার",messageLabel:"মেসেজ",sendWhatsapp:"💬 WhatsApp-এ Request পাঠান →",formNote:"আপনার তথ্য review ও send করার জন্য WhatsApp খুলবে।"
},
es:{
home:"Inicio",servicesNav:"Servicios",aboutNav:"Sobre Mí",contactNav:"Contacto",tagline:"Electricista Profesional",
eyebrow:"⚡ SEGURO • CONFIABLE • PROFESIONAL",expert:"Servicios",electrical:"Eléctricos",servicesIn:"Profesionales en Deer Park, NY",
heroText:"Soy Ismail, electricista profesional que ofrece soluciones eléctricas seguras, confiables y accesibles para hogares y propiedades en Deer Park, NY 11729 y áreas cercanas.",
callNow:"☎ Llame Ahora",chatWhatsapp:"💬 WhatsApp",trust1:"Servicio Profesional",trust2:"Respuesta Rápida",trust3:"Trabajo de Calidad",
whatIDo:"LO QUE HAGO",serviceTitle:"Servicios Eléctricos Profesionales",serviceSub:"Soluciones eléctricas seguras y de alta calidad para su hogar o propiedad.",
s1t:"Reparación Eléctrica",s1:"Ofrezco reparación eléctrica confiable para problemas comunes del hogar y la propiedad, incluyendo cableado defectuoso, conexiones dañadas, accesorios que no funcionan, breakers disparados y otras fallas. Me enfoco en encontrar la causa del problema, corregirla cuidadosamente y ayudar a que el sistema eléctrico funcione de manera segura y adecuada.",
s2t:"Iluminación",s2:"Ayudo a mejorar la apariencia, comodidad y funcionalidad de su propiedad con servicios profesionales de iluminación. Puedo ayudar con instalación, reemplazo y diagnóstico de lámparas, iluminación interior y exterior, mejoras LED y otros proyectos de iluminación.",
s3t:"Tomacorrientes e Interruptores",s3:"Puedo instalar o reemplazar tomacorrientes estándar, GFCI, interruptores, reguladores de luz y otros dispositivos eléctricos. Si un tomacorriente está flojo, dañado, caliente, produce chispas o no funciona correctamente, contácteme para evaluar el problema.",
s4t:"Panel y Breakers",s4:"El panel eléctrico es una parte importante de su sistema eléctrico. Ofrezco servicio de paneles y breakers, incluyendo inspección, diagnóstico, reemplazo de breakers y mejoras eléctricas. Si los breakers se disparan repetidamente o necesita una actualización, puedo ayudarle a determinar el siguiente paso.",
s5t:"Cableado Residencial",s5:"Ofrezco servicios de cableado residencial para nuevas instalaciones, remodelaciones, ampliaciones y mejoras eléctricas. Un cableado correcto es esencial para la seguridad y el funcionamiento confiable. Puedo ayudar con soluciones prácticas para su propiedad y sus necesidades eléctricas.",
s6t:"Diagnóstico Eléctrico",s6:"Los problemas eléctricos no siempre son evidentes. Utilizo un enfoque sistemático para ayudar a identificar problemas como pérdida intermitente de energía, tomacorrientes sin corriente, breakers disparados, luces parpadeantes y otras fallas. El objetivo es encontrar la causa y recomendar una solución práctica.",
why1:"Trabajo Seguro y Confiable",why1s:"Su seguridad es mi prioridad",why2:"Respuesta Rápida",why2s:"Comunicación confiable",why3:"Trabajo de Calidad",why3s:"Atención profesional",why4:"Enfoque al Cliente",why4s:"Servicio claro y honesto",
aboutMe:"SOBRE MÍ",aboutTitle:"Hola, soy Ismail",aboutP1:"Soy un electricista profesional dedicado que presta servicio en Deer Park, NY 11729 y áreas cercanas. Me enorgullece ofrecer un servicio eléctrico cuidadoso, confiable y orientado al cliente.",aboutP2:"Ya sea una pequeña reparación, iluminación, cableado, diagnóstico o una mejora eléctrica más grande, estoy aquí para ayudar con servicio profesional y soluciones prácticas.",area:"Servicio en Deer Park y áreas cercanas",requestService:"Solicitar Servicio",
namePh:"Su nombre completo",phonePh:"Su número de teléfono",emailPh:"Su correo electrónico",addressPh:"Su dirección",messagePh:"Describa el trabajo eléctrico que necesita...",emailLabel:"Correo Electrónico",addressLabel:"Dirección",chooseService:"Seleccione un servicio",
getTouch:"CONTÁCTEME",quoteTitle:"Obtenga una Cotización Gratis",quoteText:"Dígame qué trabajo eléctrico necesita. Complete el formulario y haga clic en WhatsApp. Su información se preparará en WhatsApp para revisarla antes de enviarla.",serviceArea:"ÁREA DE SERVICIO",formTitle:"Dígame Qué Necesita",nameLabel:"Nombre Completo",phoneLabel:"Número de Teléfono",serviceLabel:"Servicio Necesario",messageLabel:"Mensaje",sendWhatsapp:"💬 Enviar Solicitud por WhatsApp →",formNote:"WhatsApp se abrirá con sus datos listos para revisar y enviar."
}
};

function setLanguage(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{
   const key=el.dataset.i18n;
   if(translations[lang][key]!==undefined) el.textContent=translations[lang][key];
 });
 const names={en:"🌐 English ▾",bn:"🌐 বাংলা ▾",es:"🌐 Español ▾"};
 languageBtn.textContent=names[lang];
 localStorage.setItem("ismailLanguage",lang);
 languageMenu.classList.remove("open");
 languageBtn.setAttribute("aria-expanded","false");
}
document.querySelectorAll("#languageMenu button").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
setLanguage(localStorage.getItem("ismailLanguage")||"en");

document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 const lang=document.documentElement.lang;
 const labels={
  en:["Hello Ismail, I would like to request electrical service.","Name","Phone","Email","Address","Service Needed","Message"],
  bn:["হ্যালো ইসমাইল, আমি electrical service নিতে চাই।","নাম","ফোন","ইমেইল","ঠিকানা","কোন সার্ভিস দরকার","মেসেজ"],
  es:["Hola Ismail, me gustaría solicitar servicio eléctrico.","Nombre","Teléfono","Correo","Dirección","Servicio Necesario","Mensaje"]
 };
 const l=labels[lang]||labels.en;
 const text=`${l[0]}

${l[1]}: ${document.getElementById("name").value.trim()}
${l[2]}: ${document.getElementById("phone").value.trim()}
${l[3]}: ${document.getElementById("email").value.trim() || "N/A"}
${l[4]}: ${document.getElementById("address").value.trim() || "N/A"}
${l[5]}: ${document.getElementById("service").value}
${l[6]}: ${document.getElementById("message").value.trim()}

Location: Deer Park, NY 11729`;
 const whatsappWindow=window.open("https://wa.me/19295995352?text="+encodeURIComponent(text),"_blank");
 const form=document.getElementById("contactForm");
 const status=document.getElementById("submitStatus");
 form.reset();
 status.textContent="Submitted";
 status.classList.add("show");
 setTimeout(()=>status.classList.remove("show"),5000);
});