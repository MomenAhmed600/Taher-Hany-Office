// const translations = {
//   ar: {
//     logo: "طاهر و هاني",
//     "logo-2": "المكتب القانوني",
//     "m-home": "الرئيسية",
//     "m-about": "من نحن",
//     "m-services": "خدماتنا",
//     "m-team": "فريق العمل",
//     "m-contact": "اتصل بنا",
//     "m-Areas": "مجالات الممارسة",
//     "h1-t": "شريككم القانوني الاستراتيجي في مصر",
//     "h1-d":
//       "نقدم الاستشارات القانونية للشركات والمستثمرين ورواد الأعمال والشركات متعددة الجنسيات فيما يتعلق بأهم شؤونهم القانونية والتجارية.",
//     "h2-d":
//       "بدءًا من تأسيس الشركات والحوكمة المؤسسية وصولاً إلى المنازعات المعقدة والقضايا البحرية، يقدم فريقنا حلولاً قانونية عملية تهدف إلى حماية الأعمال ودعم النمو المستدام.",
//     "h3-d": "استكشف خدماتنا",

//     //   "h2-t": "حماية قانونية متكاملة للشركات",
//     // "h2-d":
//     //   "نرافق نمو أعمالكم بخطوات قانونية ثابتة، موفرين بيئة آمنة لاستثماراتكم.",
//     "btn-consult": "احجز استشارة فورية",
//     "h4-home-title": "تأسس 2016",
//     "a-title": "تاريخ من التميز والنزاهة",
//     "st-1": "سنة من الخبرات القانونية المتراكمة",
//     "st-2": "ملف وقضية ومعاملة قانونية ناجحة",
//     "st-3": " عميل من الشركات والمؤسسات والاشخاص الطبيعية",
//     "st-4": "دعم قانوني واستجابة مستمرة لاحتياجات عملائنا",
//     "home-p1":
//       "تأسس مكتب النخبة للمحاماة ليكون منارة للعدالة في المنطقة، حيث نجمع بين الأصالة القانونية والحلول العصرية المبتكرة.",
//     "a-p1":
//       "نحن مكتب محاماة رائد متخصص في تقديم الحلول القانونية المبتكرة. نجمع بين الخبرة التقليدية والأساليب الحديثة.",
//     "a-p2":
//       "رؤيتنا تتجاوز مجرد كسب القضايا، نحن نسعى لبناء بيئة قانونية آمنة تساهم في تحقيق الاستقرار.",
//     "s-title": "خدماتنا القانونية",
//     "s1-t": "القانون البحري والشحن",
//     "s1-d":
//       "يقدم مكتبنا خدمات متكاملة في مجال القانون البحري، بما في ذلك نزاعات الشحن، التأمين البحري، وعقود الاستئجار.",
//     "s2-t": "قانون الشركات والتجارة الدولية",
//     "s2-d":
//       "خدمات متكاملة تشمل الاندماج والاستحواذ، إدارة الشركات، والنزاعات التجارية الدولية العابرة للحدود.",
//     "s3-t": "الجمارك والخدمات الضريبية",
//     "s3-d":
//       "تمثيل الموكلين أمام كافة السلطات الجمركية والضريبية، وحل النزاعات المعقدة المتعلقة بالتعريفات الجمركية.",
//     "view-all": "عرض جميع الخدمات",
//     "tm-1": "د. محمد المنصوري",
//     "tm-1-pos": "الشريك المؤسس",
//     "tm-2": "أ. سارة كامل",
//     "tm-2-pos": "رئيس قسم التقاضي",
//     "tm-3": "أ. خالد يسري",
//     "tm-3-pos": "مستشار قانوني أول",
//     "c-d": "نحن هنا للإجابة على تساؤلاتكم وتوفير الدعم القانوني اللازم.",
//     "c-addr": "برج النخبة، حي المال والأعمال، القاهرة",
//     "f-name": "الاسم الكامل",
//     "f-email": "البريد الإلكتروني",
//     "f-msg": "تفاصيل الاستشارة",
//     "footer-copy": "جميع الحقوق محفوظة © 2026 - مؤمن أحمد.",
//     "area-criminal-t": "الشركات والتجارة",
//     "area-click-more":
//       "تقديم الاستشارات القانونية المتعلقة بتأسيس الشركات، والحوكمة، وإعادة الهيكلة، والعمليات والمعاملات التجارية",
//     "area-maritime-t": "الاستثمار الأجنبي ودخول الأسواق",
//     "area-maritime-d":
//       "دعم المستثمرين المحليين والأجانب في تأسيس أعمالهم والتوسع داخل السوق المصري",
//     "area-corporate-t": "القانون البحري والشحن",
//     "area-corporate-d":
//       "تقديم الخدمات القانونية المتعلقة بمنازعات الشحن، والتأمين البحري، ومطالبات البضائع، والدعاوى البحرية",
//     "Dispute-Resolution-t": "تسوية المنازعات",
//     "Dispute-Resolution-d":
//       "تمثيل العملاء في المنازعات التجارية المعقدة، والتحكيم، وإجراءات تنفيذ الأحكام",
//     "Employment-and-Labour-t": "عالقات العمل والعمال",
//     "Employment-and-Labour-d":
//       "تقديم حلول قانونية عملية فيما يتعلق بعقود العمل، والسياسات الداخلية، والمنازعات العمالية",
//     "General-Counsel-Services-t": "خدمات اإلدارة القانونية للشركات",
//     "General-Counsel-Services-d":
//       "العمل كإدارة قانونية خارجية للشركات وتقديم الدعم القانوني المستمر لأعمالها",
//     "Our-Clients-Success-Partners-t": "عملائنا وشركاء النجاح",
//     "Our-Clients-Success-Partners-more":
//       "صور للعلامات التجارية و شعار شركائنا وعملائنا",
//     "read-more": "اقرأ المزيد",
//     "det-about-t": "عن التخصص",
//     "det-about-d":
//       "نقدم خدمات دفاع جنائي متميزة لعملائنا، حيث نركز على تقديم استراتيجيات دفاعية مبتكرة وفعالة في قضايا الجنايات والجنح. فريقنا من المحامين ذوي الخبرة العالية يعمل بلا كلل لضمان حقوق موكلينا وتحقيق أفضل النتائج الممكنة في كل قضية.",
//     "det-services-t": "تشمل خدماتنا",
//     "det-s1": "تمثيل الموكلين في قضايا الجنايات والجنح بمختلف أنواعها.",
//     "det-s2": "تقديم الاستشارات القانونية الوقائية لتجنب المساءلة.",
//     "det-side-t": "هل تحتاج لاستشارة؟",
//     "det-back": "لعودة لمجالات الممارسه",
//     "f-brand-desc":
//       "نقدم أفضل الاستشارات القانونية بخبرة تزيد عن 25 عاماً في قلب الإسكندرية.",
//     "f-links-title": "روابط سريعة",
//     "f-follow-title": "تابعنا",
//     "f-location-title": "مواقعنا",
//     "f-location-city": "الإسكندرية",
//     "f-location-area": "192 شارع بورسعيد، سبورتنج، باب شرق، الإسكندرية، مصر",
//     "f-follow-title-fb": "فيسبوك",
//     "f-follow-title-in": "إنستجرام",
//     "f-follow-title-linkedin": "لينكدإن",
//     "f-follow-title-whatsapp": "واتساب",
//     "f-follow-title-email": "البريد الإلكتروني",
//     team_title: "فريق العمل",
//     p1_name: "أحمد طاهر",
//     p1_role: "شريك",
//     p2_name: "محمد هاني",
//     p2_role: "شريك",
//     a1_name: "سارة حسن",
//     a2_name: "خالد محمود",
//     a3_name: "ليلى يوسف",
//     a4_name: "ياسين إبراهيم",
//     a5_name: "منى فاروق",
//     a6_name: "عمر كمال",
//     a_role: "محامٍ ",
//     "a_role-senior": "محام رئيسي",
//     val_main_title: "قيمنا وخدماتنا",
//     val1_title: "حماية قانونية",
//     val1_desc:
//       "نوفر درعاً قانونياً قوياً لمصالحك التجارية والشخصية ضد كافة المخاطر.",
//     val2_title: "استجابة سريعة",
//     val2_desc:
//       "ندرك أهمية الوقت في القانون، لذلك نضمن الرد والتحرك الفوري لقضاياكم.",
//     val3_title: "فريق متخصص",
//     val3_desc:
//       "نخبة من المحامين المتخصصين في مختلف فروع القانون لضمان أفضل النتائج.",
//     val4_title: "نزاهة مطلقة",
//     val4_desc:
//       "نعمل بشفافية تامة مع موكلينا ونلتزم بأعلى معايير أخلاقيات المهنة.",
//     val5_title: "دعم لغوي",
//     val5_desc:
//       "نقدم خدماتنا باللغتين العربية والإنجليزية لخدمة الأفراد والشركات الدولية.",
//     val6_title: "حلول مخصصة",
//     val6_desc:
//       "كل قضية لها طبيعتها الخاصة، لذا نصمم استراتيجيتنا لتناسب احتياجاتك بدقة.",
//     about_title: "عن المكتب",
//     about_intro_quote: "التميز. النزاهة. الفهم العميق لألعمال",
//     about_p1:
//       "مكتب طاهر وهاني للمحاماة والاستشارات القانونية هو مكتب قانوني مصري تأسس سنة 2016 متخصص في تقديم الخدمات القانونية للشركات والمستثمرين والمنشآت التجارية العاملة داخل مصر وخارجها",
//     about_p2:
//       "يجمع فريقنا بين الخبرة القانونية والفهم العميق لبيئة الأعمال، مما يمكننا من تقديم استشارات قانونية استراتيجية تساعد عملاءنا على التعامل مع البيئات القانونية والتنظيمية المعقدة بثقة وكفاءة",
//     about_p3:
//       "ونلتزم ببناء علاقات مهنية طويلة الأمد مع عملائنا تقوم على الثقة وسرعة الاستجابة وتقديم خدمات قانونية استثنائية.",
//     contact_info: "بيانات التواصل",
//     postal_code: "الرمز البريدي",
//     phone_number: "رقم الهاتف",
//     landline: "الهاتف الأرضي",
//     "sponsors-title": "أحد عملائنا شركاء النجاح",
//   },
//   en: {
//     logo: "TAHER & HANY",
//     "logo-2": "LEGAL FIRM",
//     "m-home": "Home",
//     "m-about": "About Us",
//     "m-services": "Our Services",
//     "m-team": "Our Team",
//     "m-contact": "Contact Us",
//     "m-Areas": "Areas of Practice",
//     "h1-t": "Your Strategic Legal Partner in Egypt",
//     "h1-d":
//       "We advise businesses, investors, entrepreneurs and multinational companies on their most important legal and commercial matters. ",
//     "h2-d":
//       "From company formation and corporate governance to complex disputes and maritime matters, our team delivers practical legal solutions designed to protect businesses and support sustainable growth.",
//     "h3-d": "Explore Our Services",
//     "h2-t": "Full Legal Protection for Corporations",
//     "h2-d":
//       "We accompany your business growth with firm legal steps, ensuring a safe environment for your investments.",
//     "btn-consult": "Book Consultation",
//     "h4-home-title": "Established 2016",
//     "a-title": "History of Excellence & Integrity",
//     "st-1": "Years of Combined Experience",
//     "st-2": "Matters Handled Successfully",
//     "st-3": " Clients",
//     "st-4": "Client Support",
//     "home-p1":
//       "Elite Law Firm was founded to be a legal lighthouse in the region, combining legal tradition with modern innovative solutions.",
//     "a-p1":
//       "We are a leading law firm specializing in providing innovative legal solutions. We combine tradition with modern methods.",
//     "a-p2":
//       "Our vision goes beyond winning cases; we aim to build a secure legal environment contributing to social stability.",
//     "s-title": "Our Legal Services",
//     "s1-t": "Maritime & Shipping Law",
//     "s1-d":
//       "Our firm provides comprehensive services in maritime law, including shipping disputes, insurance, and charter parties.",
//     "s2-t": "Corporate Law & International Trade",
//     "s2-d":
//       "Our firm provides services worldwide in respect of commercial arrangements, mergers, acquisitions, and regulatory issues.",
//     "s3-t": "Customs & Tax Services",
//     "s3-d":
//       "Representing clients before customs and tax authorities and resolving complex tariff disputes.",
//     "view-all": "View All Services",
//     "tm-1": "Dr. Mohamed Mansouri",
//     "tm-1-pos": "Founding Partner",
//     "tm-2": "Ms. Sarah Kamel",
//     "tm-2-pos": "Head of Litigation",
//     "tm-3": "Mr. Khalid Yousry",
//     "tm-3-pos": "Senior Associate",
//     "c-d":
//       "We are here to answer your questions and provide the necessary legal support.",
//     "c-addr": "Elite Tower, Business District, Cairo",
//     "f-name": "Full Name",
//     "f-email": "Email Address",
//     "f-msg": "Consultation Details",
//     "footer-copy": "Copy Right © 2026 - All Reserved By Mo'men Ahmed.",
//     "area-criminal-t": "Corporate & Commercial",
//     "area-click-more":
//       "Advising businesses on company formation, governance, restructuring, and commercial transactions",
//     "area-maritime-t": "Foreign Investment & Market Entry",
//     "area-maritime-d":
//       "Supporting local and international investors in establishing and expanding their businesses in Egypt",
//     "area-corporate-t": "Maritime & Shipping",
//     "area-corporate-d":
//       "Handling shipping disputes, marine insurance matters, cargo claims, and maritime litigation",
//     "Dispute-Resolution-t": "Dispute Resolution",
//     "Dispute-Resolution-d":
//       "Representing clients in complex commercial litigation, arbitration, and enforcement proceedings",
//     "Employment-and-Labour-t": "Employment & Labour",
//     "Employment-and-Labour-d":
//       "Providing practical solutions for employment contracts, workplace policies, and labour disputes",
//     "General-Counsel-Services-t": "General Counsel Services",
//     "General-Counsel-Services-d":
//       "Acting as an outsourced legal department for companies requiring ongoing legal support",
//     "Our-Clients-Success-Partners-t": "Our Clients & Success Partners",
//     "Our-Clients-Success-Partners-more":
//       "Images of our clients' and partners' brands and logos",
//     "read-more": "Read More",
//     "det-about-t": "ABOUT PRACTICE",
//     "det-about-d":
//       "We provide outstanding criminal defense services to our clients, focusing on delivering innovative and effective defense strategies in felony and misdemeanor cases. Our team of highly experienced lawyers works tirelessly to ensure our clients' rights are protected and to achieve the best possible outcome in every case.",
//     "det-services-t": "OUR SERVICES INCLUDE",
//     "det-s1": "Representing clients in criminal and misdemeanor cases.",
//     "det-s2": "Providing preventive legal advice.",
//     "det-side-t": "Do you need a consultation",
//     "det-back": "Returning to the Areas of practice",
//     "f-brand-desc":
//       "Providing top-tier legal consultations with over 25 years of experience in Alexandria.",
//     "f-links-title": "Quick Links",
//     "f-follow-title": "Follow Us",
//     "f-location-title": "Locations",
//     "f-location-city": "ALEXANDRIA",
//     "f-location-area":
//       "192 Port Said Street, Sporting, Bab Sharq, Alexandria, Egypt",
//     "f-follow-title-fb": "Facebook",
//     "f-follow-title-in": "Instagram",
//     "f-follow-title-linkedin": "LinkedIn",
//     "f-follow-title-whatsapp": "WhatsApp",
//     "f-follow-title-email": "Email",
//     team_title: "Our Team",
//     p1_name: "Ahmed Taher",
//     p1_role: "Partner",
//     p2_name: "Mohamed Hany",
//     p2_role: "Partner",
//     a1_name: "Sara Hassan",
//     a2_name: "Khaled Mahmoud",
//     a3_name: "Layla Youssef",
//     a4_name: "Yassin Ibrahim",
//     a5_name: "Mona Farouk",
//     a6_name: "Omar Kamal",
//     a_role: "Associate",
//     "a_role-senior": "Senior Associate",
//     val_main_title: "Our Values & Services",
//     val1_title: "Legal Protection",
//     val1_desc:
//       "We provide a strong legal shield for your commercial and personal interests.",
//     val2_title: "Fast Response",
//     val2_desc:
//       "We understand the value of time, guaranteeing immediate legal action.",
//     val3_title: "Specialized Team",
//     val3_desc:
//       "Expert lawyers specialized in various legal branches for best results.",
//     val4_title: "Absolute Integrity",
//     val4_desc:
//       "We operate with total transparency and commit to the highest ethical standards.",
//     val5_title: "Bilingual Support",
//     val5_desc:
//       "We provide services in Arabic and English for local and international clients.",
//     val6_title: "Tailored Solutions",
//     val6_desc:
//       "Each case is unique; we design strategies that fit your specific needs.",
//     about_title: "ABOUT THE FIRM",
//     about_intro_quote: "Excellence. Integrity. Commercial Insight",
//     about_p1:
//       "TAHER & HANY Law Firm is an Egyptian business law firm established in 2016 providing legal services to corporations, investors, and commercial enterprises operating in Egypt and across the region",

//     about_p2:
//       "Our lawyers combine legal expertise with a deep understanding of business realities, enabling us to provide strategic advice that helps clients navigate complex legal and regulatory environments",
//     about_p3:
//       "We are committed to building long-term relationships based on trust, responsiveness, and exceptional service",
//     contact_info: "Contact Information",
//     postal_code: "Postal Code",
//     phone_number: "Phone Number",
//     landline: "Landline",
//     "sponsors-title": "One Of Our Clients A Partner In Success",
//   },
// };

// // 1.by default arabic language is selected, but if the user has a previous choice, we use it
// let currentLang = localStorage.getItem("userLang") || "ar";

// // --- Function to apply translations ---
// function applyTranslations() {
//   // ضبط اتجاه الصفحة واللغة في الـ HTML
//   document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
//   document.documentElement.lang = currentLang;

//   document.querySelectorAll("[data-i18n]").forEach((el) => {
//     const key = el.getAttribute("data-i18n");
//     if (translations[currentLang] && translations[currentLang][key]) {
//       el.textContent = translations[currentLang][key];
//     }
//   });

//   // choice the language button text based on the current language
//   const langBtn = document.getElementById("lang-btn");
//   if (langBtn) {
//     langBtn.textContent = currentLang === "ar" ? "English" : "العربية";
//   }
// }

// window.toggleLanguage = function () {
//   currentLang = currentLang === "ar" ? "en" : "ar";

//   // 2. save the user's choice in localStorage so it persists across sessions
//   localStorage.setItem("userLang", currentLang);

//   applyTranslations();
// };

// // --- (Mobile Menu) ---
// window.toggleMobileMenu = function () {
//   const menu = document.getElementById("mobile-menu");
//   if (menu) {
//     menu.classList.toggle("hidden");
//   }
// };

// // --- (Hero Carousel) ---
// let currentSlide = 0;

// window.moveCarousel = function (direction) {
//   const slides = document.querySelectorAll(".carousel-item");
//   if (slides.length === 0) return;

//   slides[currentSlide].classList.remove("active");
//   currentSlide = (currentSlide + direction + slides.length) % slides.length;
//   slides[currentSlide].classList.add("active");
// };

// //  play the carousel automatically
// setInterval(() => {
//   if (document.querySelector(".carousel-item")) {
//     moveCarousel(1);
//   }
// }, 4000);

// // --- Initialize Translations ---
// document.addEventListener("DOMContentLoaded", () => {
//   applyTranslations();

//   // قفل قائمة الموبايل عند الضغط على الروابط
//   const mobileLinks = document.querySelectorAll("#mobile-menu a");
//   mobileLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       const menu = document.getElementById("mobile-menu");
//       if (menu) menu.classList.add("hidden");
//     });
//   });
// });

// window.toggleAccordion = function (header) {
//   const item = header.parentElement;
//   item.classList.toggle("active");
// };

// window.toggleReadMore = function (btn) {
//   const container = btn.closest(".flex-col");
//   const title = container.querySelector("h1");
//   const description = container.querySelector("#main-description");
//   const details = container.querySelector(".card-details");
//   const icon = btn.querySelector("i");
//   const btnText = btn.querySelector(".btn-text");

//   // toggle the expanded state
//   const isExpanded = container.classList.toggle("expanded-state");

//   if (isExpanded) {
//     // 1. title is up
//     title.style.transform = "translateY(-20px)";
//     title.style.color = "#b48c36";

//     description.style.transform = "translateY(-10px)";

//     details.style.maxHeight = details.scrollHeight + "px";
//     details.style.opacity = "1";
//     details.style.marginTop = "1rem";

//     // 4. icon rotates 90 degrees
//     icon.style.transform = "rotate(90deg)";
//     btnText.textContent = currentLang === "ar" ? "عرض أقل" : "Show Less";
//   } else {
//     // 1. title back to normal
//     title.style.transform = "translateY(0)";
//     title.style.color = "";
//     description.style.transform = "translateY(0)";
//     details.style.maxHeight = "0";
//     details.style.opacity = "0";
//     details.style.marginTop = "0";
//     icon.style.transform = "rotate(0deg)";
//     btnText.textContent = currentLang === "ar" ? "اقرأ المزيد" : "Read More";
//   }

//   // dah Carousel bta3 sponsers
//   function adjustMarqueeDirection() {
//     const marquees = document.querySelectorAll(".animate-marquee");

//     marquees.forEach((marquee) => {
//       if (document.documentElement.dir === "rtl") {
//         marquee.style.animationDirection = "reverse";
//       } else {
//         marquee.style.animationDirection = "normal";
//       }
//     });
//   }

//   adjustMarqueeDirection();

//   const originalToggleLanguage = window.toggleLanguage;
//   if (typeof originalToggleLanguage === "function") {
//     window.toggleLanguage = function () {
//       originalToggleLanguage();
//       adjustMarqueeDirection();
//     };
//   }
// };

const translations = {
  ar: {
    logo: "طاهر و هاني",
    "logo-2": "المكتب القانوني",
    "m-home": "الرئيسية",
    "m-about": "من نحن",
    "m-services": "خدماتنا",
    "m-team": "فريق العمل",
    "m-contact": "اتصل بنا",
    "m-Areas": "مجالات الممارسة",
    "h1-t": "شريككم القانوني الاستراتيجي في مصر",
    "h1-d":
      "نقدم الاستشارات القانونية للشركات والمستثمرين ورواد الأعمال والشركات متعددة الجنسيات فيما يتعلق بأهم شؤونهم القانونية والتجارية.",
    "h2-d":
      "بدءًا من تأسيس الشركات والحوكمة المؤسسية وصولاً إلى المنازعات المعقدة والقضايا البحرية، يقدم فريقنا حلولاً قانونية عملية تهدف إلى حماية الأعمال ودعم النمو المستدام.",
    "h3-d": "استكشف خدماتنا",
    "btn-consult": "احجز استشارة فورية",
    "h4-home-title": "تأسس 2016",
    "a-title": "تاريخ من التميز والنزاهة",
    "st-1": "سنة من الخبرات القانونية المتراكمة",
    "st-2": "ملف وقضية ومعاملة قانونية ناجحة",
    "st-3": " عميل من الشركات والمؤسسات والاشخاص الطبيعية",
    "st-4": "دعم قانوني واستجابة مستمرة لاحتياجات عملائنا",
    "home-p1":
      "تأسس مكتب النخبة للمحاماة ليكون منارة للعدالة في المنطقة، حيث نجمع بين الأصالة القانونية والحلول العصرية المبتكرة.",
    "a-p1":
      "نحن مكتب محاماة رائد متخصص في تقديم الحلول القانونية المبتكرة. نجمع بين الخبرة التقليدية والأساليب الحديثة.",
    "a-p2":
      "رؤيتنا تتجاوز مجرد كسب القضايا، نحن نسعى لبناء بيئة قانونية آمنة تساهم في تحقيق الاستقرار.",
    "s-title": "خدماتنا القانونية",
    "s1-t": "القانون البحري والشحن",
    "s1-d":
      "يقدم مكتبنا خدمات متكاملة في مجال القانون البحري، بما في ذلك نزاعات الشحن، التأمين البحري، وعقود الاستئجار.",
    "s2-t": "قانون الشركات والتجارة الدولية",
    "s2-d":
      "خدمات متكاملة تشمل الاندماج والاستحواذ، إدارة الشركات، والنزاعات التجارية الدولية العابرة للحدود.",
    "s3-t": "الجمارك والخدمات الضريبية",
    "s3-d":
      "تمثيل الموكلين أمام كافة السلطات الجمركية والضريبية، وحل النزاعات المعقدة المتعلقة بالتعريفات الجمركية.",
    "view-all": "عرض جميع الخدمات",
    "tm-1": "د. محمد المنصوري",
    "tm-1-pos": "الشريك المؤسس",
    "tm-2": "أ. سارة كامل",
    "tm-2-pos": "رئيس قسم التقاضي",
    "tm-3": "أ. خالد يسري",
    "tm-3-pos": "مستشار قانوني أول",
    "c-d": "نحن هنا للإجابة على تساؤلاتكم وتوفير الدعم القانوني اللازم.",
    "c-addr": "برج النخبة، حي المال والأعمال، القاهرة",
    "f-name": "الاسم الكامل",
    "f-email": "البريد الإلكتروني",
    "f-msg": "تفاصيل الاستشارة",
    "footer-copy": "جميع الحقوق محفوظة © 2026 - مؤمن أحمد.",
    "area-criminal-t": "الشركات والتجارة",
    "area-click-more":
      "تقديم الاستشارات القانونية المتعلقة بتأسيس الشركات، والحوكمة، وإعادة الهيكلة، والعمليات والمعاملات التجارية",
    "area-maritime-t": "الاستثمار الأجنبي ودخول الأسواق",
    "area-maritime-d":
      "دعم المستثمرين المحليين والأجانب في تأسيس أعمالهم والتوسع داخل السوق المصري",
    "area-corporate-t": "القانون البحري والشحن",
    "area-corporate-d":
      "تقديم الخدمات القانونية المتعلقة بمنازعات الشحن، والتأمين البحري، ومطالبات البضائع، والدعاوى البحرية",
    "Dispute-Resolution-t": "تسوية المنازعات",
    "Dispute-Resolution-d":
      "تمثيل العملاء في المنازعات التجارية المعقدة، والتحكيم، وإجراءات تنفيذ الأحكام",
    "Employment-and-Labour-t": "عالقات العمل والعمال",
    "Employment-and-Labour-d":
      "تقديم حلول قانونية عملية فيما يتعلق بعقود العمل، والسياسات الداخلية، والمنازعات العمالية",
    "General-Counsel-Services-t": "خدمات اإلدارة القانونية للشركات",
    "General-Counsel-Services-d":
      "العمل كإدارة قانونية خارجية للشركات وتقديم الدعم القانوني المستمر لأعمالها",
    "Our-Clients-Success-Partners-t": "عملائنا وشركاء النجاح",
    "Our-Clients-Success-Partners-more":
      "صور للعلامات التجارية و شعار شركائنا وعملائنا",
    "read-more": "اقرأ المزيد",
    "det-about-t": "عن التخصص",
    "det-about-d":
      "نقدم خدمات دفاع جنائي متميزة لعملائنا، حيث نركز على تقديم استراتيجيات دفاعية مبتكرة وفعالة في قضايا الجنايات والجنح. فريقنا من المحامين ذوي الخبرة العالية يعمل بلا كلل لضمان حقوق موكلينا وتحقيق أفضل النتائج الممكنة في كل قضية.",
    "det-services-t": "تشمل خدماتنا",
    "det-s1": "تمثيل الموكلين في قضايا الجنايات والجنح بمختلف أنواعها.",
    "det-s2": "تقديم الاستشارات القانونية الوقائية لتجنب المساءلة.",
    "det-side-t": "هل تحتاج لاستشارة؟",
    "det-back": "لعودة لمجالات الممارسه",
    "f-brand-desc":
      "نقدم أفضل الاستشارات القانونية بخبرة تزيد عن 25 عاماً في قلب الإسكندرية.",
    "f-links-title": "روابط سريعة",
    "f-follow-title": "تابعنا",
    "f-location-title": "مواقعنا",
    "f-location-city": "الإسكندرية",
    "f-location-area": "192 شارع بورسعيد، سبورتنج، باب شرق، الإسكندرية، مصر",
    "f-follow-title-fb": "فيسبوك",
    "f-follow-title-in": "إنستجرام",
    "f-follow-title-linkedin": "لينكدإن",
    "f-follow-title-whatsapp": "واتساب",
    "f-follow-title-email": "البريد الإلكتروني",
    team_title: "فريق العمل",
    p1_name: "أحمد طاهر",
    p1_role: "شريك",
    p2_name: "محمد هاني",
    p2_role: "شريك",
    a1_name: "سارة حسن",
    a2_name: "خالد محمود",
    a3_name: "ليلى يوسف",
    a4_name: "ياسين إبراهيم",
    a5_name: "منى فاروق",
    a6_name: "عمر كمال",
    a_role: "محامٍ ",
    "a_role-senior": "محام رئيسي",
    val_main_title: "قيمنا وخدماتنا",
    val1_title: "حماية قانونية",
    val1_desc:
      "نوفر درعاً قانونياً قوياً لمصالحك التجارية والشخصية ضد كافة المخاطر.",
    val2_title: "استجابة سريعة",
    val2_desc:
      "ندرك أهمية الوقت في القانون، لذلك نضمن الرد والتحرك الفوري لقضاياكم.",
    val3_title: "فريق متخصص",
    val3_desc:
      "نخبة من المحامين المتخصصين في مختلف فروع القانون لضمان أفضل النتائج.",
    val4_title: "نزاهة مطلقة",
    val4_desc:
      "نعمل بشفافية تامة مع موكلينا ونلتزم بأعلى معايير أخلاقيات المهنة.",
    val5_title: "دعم لغوي",
    val5_desc:
      "نقدم خدماتنا باللغتين العربية والإنجليزية لخدمة الأفراد والشركات الدولية.",
    val6_title: "حلول مخصصة",
    val6_desc:
      "كل قضية لها طبيعتها الخاصة، لذا نصمم استراتيجيتنا لتناسب احتياجاتك بدقة.",
    about_title: "عن المكتب",
    about_intro_quote: "التميز. النزاهة. الفهم العميق لألعمال",
    about_p1:
      "مكتب طاهر وهاني للمحاماة والاستشارات القانونية هو مكتب قانوني مصري تأسس سنة 2016 متخصص في تقديم الخدمات القانونية للشركات والمستثمرين والمنشآت التجارية العاملة داخل مصر وخارجها",
    about_p2:
      "يجمع فريقنا بين الخبرة القانونية والفهم العميق لبيئة الأعمال، مما يمكننا من تقديم استشارات قانونية استراتيجية تساعد عملاءنا على التعامل مع البيئات القانونية والتنظيمية المعقدة بثقة وكفاءة",
    about_p3:
      "ونلتزم ببناء علاقات مهنية طويلة الأمد مع عملائنا تقوم على الثقة وسرعة الاستجابة وتقديم خدمات قانونية استثنائية.",
    contact_info: "بيانات التواصل",
    postal_code: "الرمز البريدي",
    phone_number: "رقم الهاتف",
    landline: "الهاتف الأرضي",
    "sponsors-title": "أحد عملائنا شركاء النجاح",
  },
  en: {
    logo: "TAHER & HANY",
    "logo-2": "LEGAL FIRM",
    "m-home": "Home",
    "m-about": "About Us",
    "m-services": "Our Services",
    "m-team": "Our Team",
    "m-contact": "Contact Us",
    "m-Areas": "Areas of Practice",
    "h1-t": "Your Strategic Legal Partner in Egypt",
    "h1-d":
      "We advise businesses, investors, entrepreneurs and multinational companies on their most important legal and commercial matters. ",
    "h2-d":
      "From company formation and corporate governance to complex disputes and maritime matters, our team delivers practical legal solutions designed to protect businesses and support sustainable growth.",
    "h3-d": "Explore Our Services",
    "h2-t": "Full Legal Protection for Corporations",
    "h2-d":
      "We accompany your business growth with firm legal steps, ensuring a safe environment for your investments.",
    "btn-consult": "Book Consultation",
    "h4-home-title": "Established 2016",
    "a-title": "History of Excellence & Integrity",
    "st-1": "Years of Combined Experience",
    "st-2": "Matters Handled Successfully",
    "st-3": " Clients",
    "st-4": "Client Support",
    "home-p1":
      "Elite Law Firm was founded to be a legal lighthouse in the region, combining legal tradition with modern innovative solutions.",
    "a-p1":
      "We are a leading law firm specializing in providing innovative legal solutions. We combine tradition with modern methods.",
    "a-p2":
      "Our vision goes beyond winning cases; we aim to build a secure legal environment contributing to social stability.",
    "s-title": "Our Legal Services",
    "s1-t": "Maritime & Shipping Law",
    "s1-d":
      "Our firm provides comprehensive services in maritime law, including shipping disputes, insurance, and charter parties.",
    "s2-t": "Corporate Law & International Trade",
    "s2-d":
      "Our firm provides services worldwide in respect of commercial arrangements, mergers, acquisitions, and regulatory issues.",
    "s3-t": "Customs & Tax Services",
    "s3-d":
      "Representing clients before customs and tax authorities and resolving complex tariff disputes.",
    "view-all": "View All Services",
    "tm-1": "Dr. Mohamed Mansouri",
    "tm-1-pos": "Founding Partner",
    "tm-2": "Ms. Sarah Kamel",
    "tm-2-pos": "Head of Litigation",
    "tm-3": "Mr. Khalid Yousry",
    "tm-3-pos": "Senior Associate",
    "c-d":
      "We are here to answer your questions and provide the necessary legal support.",
    "c-addr": "Elite Tower, Business District, Cairo",
    "f-name": "Full Name",
    "f-email": "Email Address",
    "f-msg": "Consultation Details",
    "footer-copy": "Copy Right © 2026 - All Reserved By Mo'men Ahmed.",
    "area-criminal-t": "Corporate & Commercial",
    "area-click-more":
      "Advising businesses on company formation, governance, restructuring, and commercial transactions",
    "area-maritime-t": "Foreign Investment & Market Entry",
    "area-maritime-d":
      "Supporting local and international investors in establishing and expanding their businesses in Egypt",
    "area-corporate-t": "Maritime & Shipping",
    "area-corporate-d":
      "Handling shipping disputes, marine insurance matters, cargo claims, and maritime litigation",
    "Dispute-Resolution-t": "Dispute Resolution",
    "Dispute-Resolution-d":
      "Representing clients in complex commercial litigation, arbitration, and enforcement proceedings",
    "Employment-and-Labour-t": "Employment & Labour",
    "Employment-and-Labour-d":
      "Providing practical solutions for employment contracts, workplace policies, and labour disputes",
    "General-Counsel-Services-t": "General Counsel Services",
    "General-Counsel-Services-d":
      "Acting as an outsourced legal department for companies requiring ongoing legal support",
    "Our-Clients-Success-Partners-t": "Our Clients & Success Partners",
    "Our-Clients-Success-Partners-more":
      "Images of our clients' and partners' brands and logos",
    "read-more": "Read More",
    "det-about-t": "ABOUT PRACTICE",
    "det-about-d":
      "We provide outstanding criminal defense services to our clients, focusing on delivering innovative and effective defense strategies in felony and misdemeanor cases. Our team of highly experienced lawyers works tirelessly to ensure our clients' rights are protected and to achieve the best possible outcome in every case.",
    "det-services-t": "OUR SERVICES INCLUDE",
    "det-s1": "Representing clients in criminal and misdemeanor cases.",
    "det-s2": "Providing preventive legal advice.",
    "det-side-t": "Do you need a consultation",
    "det-back": "Returning to the Areas of practice",
    "f-brand-desc":
      "Providing top-tier legal consultations with over 25 years of experience in Alexandria.",
    "f-links-title": "Quick Links",
    "f-follow-title": "Follow Us",
    "f-location-title": "Locations",
    "f-location-city": "ALEXANDRIA",
    "f-location-area":
      "192 Port Said Street, Sporting, Bab Sharq, Alexandria, Egypt",
    "f-follow-title-fb": "Facebook",
    "f-follow-title-in": "Instagram",
    "f-follow-title-linkedin": "LinkedIn",
    "f-follow-title-whatsapp": "WhatsApp",
    "f-follow-title-email": "Email",
    team_title: "Our Team",
    p1_name: "Ahmed Taher",
    p1_role: "Partner",
    p2_name: "Mohamed Hany",
    p2_role: "Partner",
    a1_name: "Sara Hassan",
    a2_name: "Khaled Mahmoud",
    a3_name: "Layla Youssef",
    a4_name: "Yassin Ibrahim",
    a5_name: "Mona Farouk",
    a6_name: "Omar Kamal",
    a_role: "Associate",
    "a_role-senior": "Senior Associate",
    val_main_title: "Our Values & Services",
    val1_title: "Legal Protection",
    val1_desc:
      "We provide a strong legal shield for your commercial and personal interests.",
    val2_title: "Fast Response",
    val2_desc:
      "We understand the value of time, guaranteeing immediate legal action.",
    val3_title: "Specialized Team",
    val3_desc:
      "Expert lawyers specialized in various legal branches for best results.",
    val4_title: "Absolute Integrity",
    val4_desc:
      "We operate with total transparency and commit to the highest ethical standards.",
    val5_title: "Bilingual Support",
    val5_desc:
      "We provide services in Arabic and English for local and international clients.",
    val6_title: "Tailored Solutions",
    val6_desc:
      "Each case is unique; we design strategies that fit your specific needs.",
    about_title: "ABOUT THE FIRM",
    about_intro_quote: "Excellence. Integrity. Commercial Insight",
    about_p1:
      "TAHER & HANY Law Firm is an Egyptian business law firm established in 2016 providing legal services to corporations, investors, and commercial enterprises operating in Egypt and across the region",
    about_p2:
      "Our lawyers combine legal expertise with a deep understanding of business realities, enabling us to provide strategic advice that helps clients navigate complex legal and regulatory environments",
    about_p3:
      "We are committed to building long-term relationships based on trust, responsiveness, and exceptional service",
    contact_info: "Contact Information",
    postal_code: "Postal Code",
    phone_number: "Phone Number",
    landline: "Landline",
    "sponsors-title": "One Of Our Clients A Partner In Success",
  },
};

// SVG الأعلام
const egyptFlag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" class="w-full h-full object-cover scale-110"><rect width="900" height="200" fill="#CE1126"/><rect y="200" width="900" height="200" fill="#FFFFFF"/><rect y="400" width="900" height="200" fill="#000000"/><path d="M450,265 L460,290 L485,290 L465,305 L472,330 L450,315 L428,330 L435,305 L415,290 L440,290 Z" fill="#C09300"/></svg>`;

const ukFlag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="w-full h-full object-cover scale-110"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 L60,0 h-60 z M30,15 L0,30 h60 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#t)"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`;

let currentLang = localStorage.getItem("userLang") || "ar";

// تحديث العلم في كل الأزرار (Desktop + Mobile)
function updateLangButton(lang) {
  // لما تكون اللغة عربي بنعرض علم مصر، ولما تحول إنجليزي بنعرض علم بريطانيا
  const flagSvg = lang === "ar" ? ukFlag : egyptFlag;

  const btnDesktop = document.getElementById("lang-btn");
  if (btnDesktop) {
    btnDesktop.innerHTML = flagSvg;
  }

  const mobileBtnFlags = document.querySelectorAll(".lang-btn-mobile");
  mobileBtnFlags.forEach((btn) => {
    btn.innerHTML = flagSvg;
  });

  const mobileLangText = document.querySelector(".mobile-lang-text");
  if (mobileLangText) {
    mobileLangText.textContent = lang === "ar" ? "English" : "العربية";
  }
}

// تطبيق الترجمة
function applyTranslations() {
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  updateLangButton(currentLang);
  adjustMarqueeDirection();
}

window.toggleLanguage = function () {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("userLang", currentLang);
  applyTranslations();
};

function adjustMarqueeDirection() {
  const marquees = document.querySelectorAll(".animate-marquee");
  marquees.forEach((marquee) => {
    if (document.documentElement.dir === "rtl") {
      marquee.style.animationDirection = "reverse";
    } else {
      marquee.style.animationDirection = "normal";
    }
  });
}

// --- (Mobile Menu) ---
window.toggleMobileMenu = function () {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
};

// --- (Hero Carousel) ---
let currentSlide = 0;

window.moveCarousel = function (direction) {
  const slides = document.querySelectorAll(".carousel-item");
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
};

setInterval(() => {
  if (document.querySelector(".carousel-item")) {
    moveCarousel(1);
  }
}, 4000);

// --- Initialize ---
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();

  const mobileLinks = document.querySelectorAll("#mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.classList.add("hidden");
    });
  });
});

window.toggleAccordion = function (header) {
  const item = header.parentElement;
  item.classList.toggle("active");
};

window.toggleReadMore = function (btn) {
  const container = btn.closest(".flex-col");
  const title = container.querySelector("h1");
  const description = container.querySelector("#main-description");
  const details = container.querySelector(".card-details");
  const icon = btn.querySelector("i");
  const btnText = btn.querySelector(".btn-text");

  const isExpanded = container.classList.toggle("expanded-state");

  if (isExpanded) {
    title.style.transform = "translateY(-20px)";
    title.style.color = "#b48c36";
    description.style.transform = "translateY(-10px)";
    details.style.maxHeight = details.scrollHeight + "px";
    details.style.opacity = "1";
    details.style.marginTop = "1rem";
    icon.style.transform = "rotate(90deg)";
    btnText.textContent = currentLang === "ar" ? "عرض أقل" : "Show Less";
  } else {
    title.style.transform = "translateY(0)";
    title.style.color = "";
    description.style.transform = "translateY(0)";
    details.style.maxHeight = "0";
    details.style.opacity = "0";
    details.style.marginTop = "0";
    icon.style.transform = "rotate(0deg)";
    btnText.textContent = currentLang === "ar" ? "اقرأ المزيد" : "Read More";
  }
};
