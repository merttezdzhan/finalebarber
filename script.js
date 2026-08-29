// ==========================================================================
// FINALE BARBERSHOP - MAIN CLIENT APPLICATION JAVASCRIPT
// ==========================================================================

const BARBER_EMAIL = "Habapli7@gmail.com";
const CLOUD_DB_ID = "ff808181a04ccf2d01a04e6c4e940c70";
const CLOUD_DB_URL = `https://api.restful-api.dev/objects/${CLOUD_DB_ID}`;

// Global App State
let currentLang = 'de';
let salonSettings = {
    isOpen: true,
    openHour: "09:00",
    closeHour: "19:00"
};

// Multilingual Translation Dictionaries
const translations = {
    de: {
        docTitle: "Finale Barbershop | MÃ¶rfelden-Walldorf",
        navHome: "Startseite",
        navAbout: "Ãœber Uns",
        navServices: "Preise & Pakete",
        navContact: "Kontakt & Anfahrt",
        navBookBtn: "Termin Buchen",
        walkInBadge: "Ohne Termin mÃ¶glich",
        heroTitle: "Perfekter Cut & <span class=\"gold-gradient\">PrÃ¤zise Bartpflege</span>",
        heroSubtitle: "Willkommen bei Finale Barbershop in MÃ¶rfelden-Walldorf. Wir bieten Ihnen professionelle Herrenhaarschnitte, moderne Fades und erstklassiges Styling in entspannter AtmosphÃ¤re.",
        heroBookBtn: "Online Termin Buchen",
        stat1Title: "Professionelle Fades",
        stat1Sub: "Exakte ÃœbergÃ¤nge & Styles",
        stat2Title: "Ohne Termin",
        stat2Sub: "Einfach vorbeikommen",
        statusChecking: "Status wird geprÃ¼ft...",
        statusOpen: "Jetzt GeÃ¶ffnet â€“ Herzlich Willkommen!",
        statusClosed: "Derzeit Geschlossen",
        hoursMonFri: "Mo - Fr:",
        hoursSat: "Samstag:",
        hoursSun: "Sonntag:",
        hoursClosed: "Geschlossen",
        aboutTag: "ÃœBER UNSEREN SALON",
        aboutTitle: "Finale Barbershop â€“ Tradition trifft auf modernen Style",
        aboutDesc1: "In der WestendstraÃŸe 3 in MÃ¶rfelden-Walldorf bieten wir mehr als nur Haarschnitte â€“ wir bieten ein erstklassiges Pflegeritual fÃ¼r den modernen Mann.",
        aboutDesc2: "Egal ob prÃ¤ziser Skin Fade, klassischer Faconschnitt oder konturenscharfe Bartpflege mit Hot-Towel Behandlung: Bei uns stehen hÃ¶chste PrÃ¤zision und Ihre Kundenzufriedenheit an erster Stelle.",
        feat1Title: "PrÃ¤zise Fades & Schnitte",
        feat1Desc: "Saubere ÃœbergÃ¤nge maÃŸgeschneidert auf Ihre Kopfform.",
        feat2Title: "Traditionelle Bartpflege",
        feat2Desc: "Rasur, Konturen und wohltuende Pflegeprodukte.",
        feat3Title: "Spontan oder mit Termin",
        feat3Desc: "Online buchen, anrufen oder einfach vorbeikommen.",
        servicesTag: "ANGEBOT & LEISTUNGEN",
        servicesTitle: "Unsere Preise & Spezial-Pakete",
        servicesSub: "Erstklassige QualitÃ¤t zu fairen Preisen. WÃ¤hlen Sie Ihre gewÃ¼nschte Leistung oder eines unserer Spar-Pakete.",
        packagesTitle: "Spezial Spar-Pakete",
        pkg1Badge: "SPAR PAKET",
        pkg1Title: "Paket 1",
        pkg1Desc: "Waschen, Schneiden, Rasieren, FÃ¶hnen & Stylen",
        pkg2Badge: "BELIEBT",
        pkg2Title: "Paket 2",
        pkg2Desc: "Waschen, Schneiden, Rasieren, FÃ¶hnen, Stylen & Augenbrauen zupfen",
        pkg3Badge: "FULL CARE",
        pkg3Title: "Paket 3",
        pkg3Desc: "Waschen, Schneiden, Rasieren, FÃ¶hnen, Stylen, Augenbrauen zupfen, FÃ¤rben (Bart / Haare)",
        selectServiceBtn: "WÃ¤hlen & Buchen",
        fullPriceTitle: "Einzelne Leistungen & Preise",
        p1Name: "Trocken Haarschnitt",
        p1Sub: "Klassischer oder moderner Trockenschnitt",
        p2Name: "Waschen, Schneiden, FÃ¶hnen",
        p2Sub: "Inklusive HaarwÃ¤sche, Schnitt und FÃ¶hnen",
        p3Name: "Bartrasur",
        p3Sub: "PrÃ¤zisionsrasur und Konturenformung",
        p4Name: "Augenbrauen zupfen",
        p4Sub: "PrÃ¤zises Zupfen & Formgebung",
        p5Name: "Kinder Haarschnitt (bis 10 Jahre)",
        p5Sub: "Geduldiger & moderner Schnitt fÃ¼r Kinder",
        p6Name: "Waschen, FÃ¶hnen, Stylen",
        p6Sub: "HaarwÃ¤sche, FÃ¶hnen und Finish-Styling",
        p7Name: "Bart / Haare FÃ¤rben",
        p7Sub: "Professionelle TÃ¶nung & FÃ¤rbung",
        bookingTag: "ONLINE RESERVIERUNG",
        bookingTitle: "Wunschtermin Vereinbaren",
        bookingSub: "WÃ¤hlen Sie Ihren Barber, Datum und Uhrzeit aus. Sie erhalten sofort einen Sicherheitscode.",
        lblBarber: "WÃ¤hlen Sie Ihren Barber",
        barber1Role: "Usta Berber / Master Stylist",
        barber2Role: "NÃ¤chster freier Barber",
        lblService: "GewÃ¼nschte Leistung",
        phSelectService: "Bitte Leistung wÃ¤hlen...",
        lblDate: "Datum WÃ¤hlen",
        dateHelp: "Sonntags ist der Salon geschlossen.",
        lblTime: "Freie Uhrzeit AuswÃ¤hlen",
        timeSlotPlaceholder: "Bitte wÃ¤hlen Sie zuerst oben ein Datum aus, um die verfÃ¼gbaren Zeiten zu sehen.",
        lblName: "Ihr Vor- & Nachname",
        phName: "z.B. Max Mustermann",
        lblPhone: "Telefonnummer",
        phPhone: "z.B. 0152 5164 9190",
        lblEmail: "E-Mail Adresse (FÃ¼r BestÃ¤tigungscode)",
        phEmail: "z.B. max.mustermann@gmail.com",
        emailHelp: "TerminbestÃ¤tigung und Ihr 6-stelliger Code werden an diese E-Mail gesendet.",
        lblNotes: "Anmerkungen (Optional)",
        phNotes: "z.B. Besondere WÃ¼nsche...",
        btnConfirmBooking: "Termin Jetzt Verbindlich Buchen",
        salonClosedTitle: "Salon ist derzeit geschlossen",
        salonClosedDesc: "Derzeit kÃ¶nnen online keine Termine vereinbart werden. Bitte rufen Sie uns an oder versuchen Sie es spÃ¤ter erneut.",
        reviewTitle: "Waren Sie mit unserem Service zufrieden?",
        reviewDesc: "Ihre Zufriedenheit ist unser grÃ¶ÃŸter Antrieb! UnterstÃ¼tzen Sie Finale Barbershop mit einer 5-Sterne Bewertung auf Google. Wir freuen uns Ã¼ber Ihr Feedback!",
        reviewBtn: "Auf Google 5 Sterne Bewerten",
        contactTag: "KONTAKT & STANDORT",
        contactTitle: "Besuchen Sie Uns in MÃ¶rfelden-Walldorf",
        addrLabel: "Adresse",
        phoneLabel: "Telefon & Terminvereinbarung",
        walkInSub: "Besuche auch ohne Termin mÃ¶glich",
        instaLabel: "Instagram",
        instaSub: "Termine & Styles auf Instagram",
        hoursLabel: "Ã–ffnungszeiten",
        footerTagline: "Ihr erstklassiger Herrenfriseur & Barbershop in MÃ¶rfelden-Walldorf.",
        adminBtn: "YÃ¶netici Paneli",
        allRights: "Alle Rechte vorbehalten.",
        modalSuccessTitle: "Termin Erfolgreich Reserviert!",
        authCodeTag: "IHR PERSÃ–NLICHER SICHERHEITSCODE",
        authCodeHelp: "Bitte nennen Sie diesen Code bei Ihrem Besuch im Salon.",
        modalCloseBtn: "Verstanden"
    },
    tr: {
        docTitle: "Finale Barbershop | MÃ¶rfelden-Walldorf",
        navHome: "Ana Sayfa",
        navAbout: "HakkÄ±mÄ±zda",
        navServices: "Fiyatlar & Paketler",
        navContact: "Ä°letiÅŸim & Konum",
        navBookBtn: "Randevu Al",
        walkInBadge: "Randevusuz Gelinebilir",
        heroTitle: "Kusursuz Kesim & <span class=\"gold-gradient\">Profesyonel Sakal BakÄ±mÄ±</span>",
        heroSubtitle: "Finale Barbershop MÃ¶rfelden-Walldorf'a hoÅŸ geldiniz. Profesyonel saÃ§ kesimi, modern fade geÃ§iÅŸleri ve birinci sÄ±nÄ±f sakal tasarÄ±mÄ±nÄ± rahat bir atmosferde sunuyoruz.",
        heroBookBtn: "Hemen Online Randevu Al",
        stat1Title: "Profesyonel Fade",
        stat1Sub: "Kusursuz saÃ§ geÃ§iÅŸleri",
        stat2Title: "Randevusuz",
        stat2Sub: "DoÄŸrudan gelebilirsiniz",
        statusChecking: "Durum kontrol ediliyor...",
        statusOpen: "Åu An AÃ§Ä±ÄŸÄ±z â€“ HoÅŸ Geldiniz!",
        statusClosed: "Åu An KapalÄ±yÄ±z",
        hoursMonFri: "Pzt - Cuma:",
        hoursSat: "Cumartesi:",
        hoursSun: "Pazar:",
        hoursClosed: "KapalÄ±",
        aboutTag: "SALONUMUZ HAKKINDA",
        aboutTitle: "Finale Barbershop â€“ Geleneksel UstalÄ±k ve Modern Stil",
        aboutDesc1: "MÃ¶rfelden-Walldorf WestendstraÃŸe 3 adresinde sadece saÃ§ kesimi deÄŸil, erkeÄŸe Ã¶zel birinci sÄ±nÄ±f bir bakÄ±m deneyimi sunuyoruz.",
        aboutDesc2: "Skin Fade, klasik kesim veya sÄ±cak havlu eÅŸliÄŸinde sakal tÄ±raÅŸÄ±: Bizim iÃ§in en yÃ¼ksek hassasiyet ve mÃ¼ÅŸteri memnuniyeti daima birinci sÄ±radadÄ±r.",
        feat1Title: "Hassas Fade & Kesim",
        feat1Desc: "Kafa yapÄ±nÄ±za Ã¶zel temiz ve modern saÃ§ geÃ§iÅŸleri.",
        feat2Title: "Geleneksel Sakal BakÄ±mÄ±",
        feat2Desc: "Ustura tÄ±raÅŸÄ±, keskin konturlar ve kaliteli bakÄ±m yaÄŸlarÄ±.",
        feat3Title: "Randevulu veya Randevusuz",
        feat3Desc: "Online randevu alÄ±n, arayÄ±n ya da doÄŸrudan gelin.",
        servicesTag: "HÄ°ZMETLER & FÄ°YATLAR",
        servicesTitle: "Fiyat Listemiz & Ã–zel Paketler",
        servicesSub: "Uygun fiyata birinci sÄ±nÄ±f kalite. DilediÄŸiniz tekil hizmeti veya avantajlÄ± paketlerimizi seÃ§in.",
        packagesTitle: "Ã–zel Avantaj Paketleri",
        pkg1Badge: "AVANTAJ PAKETÄ°",
        pkg1Title: "Paket 1",
        pkg1Desc: "YÄ±kama, Kesim, Sakal TÄ±raÅŸÄ±, FÃ¶n & Åekillendirme",
        pkg2Badge: "POPÃœLER",
        pkg2Title: "Paket 2",
        pkg2Desc: "YÄ±kama, Kesim, Sakal TÄ±raÅŸÄ±, FÃ¶n, Åekillendirme & KaÅŸ Alma",
        pkg3Badge: "FULL BAKIM",
        pkg3Title: "Paket 3",
        pkg3Desc: "YÄ±kama, Kesim, Sakal, FÃ¶n, Åekillendirme, KaÅŸ Alma, Boyama (Sakal / SaÃ§)",
        selectServiceBtn: "SeÃ§ & Randevu Al",
        fullPriceTitle: "Tekil Hizmetler & Fiyatlar",
        p1Name: "Kuru SaÃ§ Kesimi",
        p1Sub: "Klasik veya modern kuru kesim",
        p2Name: "YÄ±kama, Kesim, FÃ¶n",
        p2Sub: "SaÃ§ yÄ±kama, kesim ve fÃ¶n dahil",
        p3Name: "Sakal TÄ±raÅŸÄ±",
        p3Sub: "Hassas ustura tÄ±raÅŸÄ± ve kontur ÅŸekillendirme",
        p4Name: "KaÅŸ Alma",
        p4Sub: "Ä°p ve cÄ±mbÄ±zla kaÅŸ ÅŸekillendirme",
        p5Name: "Ã‡ocuk SaÃ§ Kesimi (10 YaÅŸa Kadar)",
        p5Sub: "Ã‡ocuklara Ã¶zel Ã¶zenli ve modern saÃ§ kesimi",
        p6Name: "YÄ±kama, FÃ¶n, Åekillendirme",
        p6Sub: "SaÃ§ yÄ±kama, kurutma ve kaliteli fÃ¶n wax",
        p7Name: "Sakal / SaÃ§ Boyama",
        p7Sub: "Profesyonel sakal ve saÃ§ renklendirme",
        bookingTag: "ONLÄ°NE RANDEVU",
        bookingTitle: "Hemen Randevunuzu OluÅŸturun",
        bookingSub: "Berberinizi, tarihi ve saati seÃ§in. Randevu oluÅŸturulduÄŸunda gÃ¼venlik kodunuzu anÄ±nda alacaksÄ±nÄ±z.",
        lblBarber: "Berberinizi SeÃ§in",
        barber1Role: "Usta Berber / Master Stylist",
        barber2Role: "Ä°lk MÃ¼sait Usta / Ekip",
        lblService: "Almak Ä°stediÄŸiniz Hizmet",
        phSelectService: "LÃ¼tfen bir hizmet seÃ§iniz...",
        lblDate: "Tarih SeÃ§iniz",
        dateHelp: "Pazar gÃ¼nleri salonumuz kapalÄ±dÄ±r.",
        lblTime: "MÃ¼sait Saat SeÃ§iniz",
        timeSlotPlaceholder: "MÃ¼sait saatleri gÃ¶rmek iÃ§in lÃ¼tfen Ã¶nce yukarÄ±dan bir tarih seÃ§iniz.",
        lblName: "AdÄ±nÄ±z & SoyadÄ±nÄ±z",
        phName: "Ã–rn: Ahmet YÄ±lmaz",
        lblPhone: "Telefon NumaranÄ±z",
        phPhone: "Ã–rn: 0152 5164 9190",
        lblEmail: "E-Posta Adresiniz (Onay Kodu Ä°Ã§in)",
        phEmail: "Ã–rn: musteri@gmail.com",
        emailHelp: "Randevu detaylarÄ± ve 6 haneli kodunuz bu e-postaya iletilecektir.",
        lblNotes: "Notunuz (Ä°steÄŸe BaÄŸlÄ±)",
        phNotes: "Ã–rn: Ã–zel saÃ§ modeli veya fade tercihi...",
        btnConfirmBooking: "Randevuyu Onayla ve Tamamla",
        salonClosedTitle: "Salonumuz Åu Anda Randevuya KapalÄ±dÄ±r",
        salonClosedDesc: "Åu anda online randevu alÄ±mÄ± kapalÄ± durumdadÄ±r. LÃ¼tfen bizi telefonla arayÄ±nÄ±z veya daha sonra tekrar deneyiniz.",
        reviewTitle: "Hizmetimizden Memnun KaldÄ±nÄ±z mÄ±?",
        reviewDesc: "Sizin memnuniyetiniz bizim en bÃ¼yÃ¼k motivasyonumuz! Finale Barbershop'u Google'da 5 yÄ±ldÄ±z vererek destekleyebilirsiniz. GÃ¶rÃ¼ÅŸleriniz bizim iÃ§in Ã§ok deÄŸerli!",
        reviewBtn: "Google'da 5 YÄ±ldÄ±z Ver",
        contactTag: "Ä°LETÄ°ÅÄ°M & KONUM",
        contactTitle: "Bizi MÃ¶rfelden-Walldorf'ta Ziyaret Edin",
        addrLabel: "Adres",
        phoneLabel: "Telefon & Randevu",
        walkInSub: "Randevusuz da gelebilirsiniz",
        instaLabel: "Instagram",
        instaSub: "TÄ±raÅŸ modellerimiz Instagram'da",
        hoursLabel: "Ã‡alÄ±ÅŸma Saatleri",
        footerTagline: "MÃ¶rfelden-Walldorf'ta birinci sÄ±nÄ±f erkek kuafÃ¶rÃ¼ & barbershop.",
        adminBtn: "YÃ¶netici Paneli",
        allRights: "TÃ¼m haklarÄ± saklÄ±dÄ±r.",
        modalSuccessTitle: "Randevunuz BaÅŸarÄ±yla AlÄ±ndÄ±!",
        authCodeTag: "GÃœVENLÄ°K VE RANDEVU KODUNUZ",
        authCodeHelp: "LÃ¼tfen salona geldiÄŸinizde bu kodu berberinize iletiniz.",
        modalCloseBtn: "Tamam, AnladÄ±m"
    },
    en: {
        docTitle: "Finale Barbershop | MÃ¶rfelden-Walldorf",
        navHome: "Home",
        navAbout: "About",
        navServices: "Prices & Packages",
        navContact: "Contact",
        navBookBtn: "Book Appointment",
        walkInBadge: "Walk-ins Welcome",
        heroTitle: "Flawless Cuts & <span class=\"gold-gradient\">Precision Beard Care</span>",
        heroSubtitle: "Welcome to Finale Barbershop in MÃ¶rfelden-Walldorf. We offer premium men's haircuts, sharp skin fades, and expert styling in a relaxed atmosphere.",
        heroBookBtn: "Book Online Now",
        stat1Title: "Precision Fades",
        stat1Sub: "Clean blends & styles",
        stat2Title: "Walk-ins Welcome",
        stat2Sub: "Visit us anytime",
        statusChecking: "Checking status...",
        statusOpen: "We are Open â€“ Welcome!",
        statusClosed: "Currently Closed",
        hoursMonFri: "Mon - Fri:",
        hoursSat: "Saturday:",
        hoursSun: "Sunday:",
        hoursClosed: "Closed",
        aboutTag: "ABOUT OUR SHOP",
        aboutTitle: "Finale Barbershop â€“ Tradition Meets Modern Style",
        aboutDesc1: "Located at WestendstraÃŸe 3 in MÃ¶rfelden-Walldorf, we provide more than just haircuts â€“ we deliver a premium grooming experience tailored for the modern gentleman.",
        aboutDesc2: "From crisp skin fades and classic tapers to hot-towel beard grooming: precision and customer satisfaction are always our highest priorities.",
        feat1Title: "Sharp Fades & Haircuts",
        feat1Desc: "Tailored transitions to complement your individual face shape.",
        feat2Title: "Traditional Beard Care",
        feat2Desc: "Hot towel shaves, sharp contouring, and nourishing oils.",
        feat3Title: "Appointments & Walk-ins",
        feat3Desc: "Book online, call us, or just drop by anytime.",
        servicesTag: "SERVICES & PRICING",
        servicesTitle: "Our Prices & Special Packages",
        servicesSub: "Premium craftsmanship at fair prices. Select any individual service or choose one of our value packages.",
        packagesTitle: "Special Value Packages",
        pkg1Badge: "VALUE PACKAGE",
        pkg1Title: "Package 1",
        pkg1Desc: "Wash, Cut, Beard Shave, Blow-dry & Styling",
        pkg2Badge: "POPULAR",
        pkg2Title: "Package 2",
        pkg2Desc: "Wash, Cut, Beard Shave, Blow-dry, Styling & Eyebrow Threading",
        pkg3Badge: "FULL CARE",
        pkg3Title: "Package 3",
        pkg3Desc: "Wash, Cut, Beard Shave, Blow-dry, Styling, Eyebrows, Beard/Hair Color",
        selectServiceBtn: "Select & Book",
        fullPriceTitle: "Individual Services & Prices",
        p1Name: "Dry Haircut",
        p1Sub: "Classic or modern dry haircut",
        p2Name: "Wash, Cut, Blow-dry",
        p2Sub: "Includes hair wash, precision cut and styling",
        p3Name: "Beard Shave",
        p3Sub: "Straight razor shave and contour line-up",
        p4Name: "Eyebrow Threading",
        p4Sub: "Precise shaping and threading",
        p5Name: "Kids Haircut (up to 10 yrs)",
        p5Sub: "Patient and modern haircut for kids",
        p6Name: "Wash, Blow-dry, Styling",
        p6Sub: "Hair wash, blow-dry and premium finish",
        p7Name: "Beard / Hair Color",
        p7Sub: "Professional color treatment and coverage",
        bookingTag: "ONLINE BOOKING",
        bookingTitle: "Schedule Your Appointment",
        bookingSub: "Choose your preferred barber, date, and time. You will receive an instant 6-digit security code.",
        lblBarber: "Choose Your Barber",
        barber1Role: "Master Stylist",
        barber2Role: "Next Available Barber",
        lblService: "Selected Service",
        phSelectService: "Please select a service...",
        lblDate: "Select Date",
        dateHelp: "The salon is closed on Sundays.",
        lblTime: "Choose Available Time",
        timeSlotPlaceholder: "Please choose a date above to see available time slots.",
        lblName: "Your Full Name",
        phName: "e.g. John Doe",
        lblPhone: "Phone Number",
        phPhone: "e.g. 0152 5164 9190",
        lblEmail: "E-Mail Address (For Confirmation Code)",
        phEmail: "e.g. john.doe@gmail.com",
        emailHelp: "Appointment confirmation and your 6-digit code will be sent to this email.",
        lblNotes: "Notes (Optional)",
        phNotes: "e.g. Fade height or special requests...",
        btnConfirmBooking: "Confirm & Book Appointment",
        salonClosedTitle: "Salon is Currently Closed for Bookings",
        salonClosedDesc: "Online booking is temporarily disabled. Please call us directly or check back later.",
        reviewTitle: "Were you satisfied with our service?",
        reviewDesc: "Your satisfaction means the world to us! Please support Finale Barbershop with a 5-star Google review. We truly appreciate your feedback!",
        reviewBtn: "Leave a 5-Star Review on Google",
        contactTag: "CONTACT & LOCATION",
        contactTitle: "Visit Us in MÃ¶rfelden-Walldorf",
        addrLabel: "Address",
        phoneLabel: "Phone & Appointments",
        walkInSub: "Walk-ins welcome anytime",
        instaLabel: "Instagram",
        instaSub: "Follow our work on Instagram",
        hoursLabel: "Opening Hours",
        footerTagline: "Your premier barbershop and men's stylist in MÃ¶rfelden-Walldorf.",
        adminBtn: "Admin Panel",
        allRights: "All rights reserved.",
        modalSuccessTitle: "Appointment Confirmed!",
        authCodeTag: "YOUR SECURITY & CONFIRMATION CODE",
        authCodeHelp: "Please present this code upon your visit to the salon.",
        modalCloseBtn: "Got It"
    }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileNav();
    initDatePicker();
    initBookingForm();
    loadSalonSettings();
});

// --- Language Switcher ---
function initLanguage() {
    const savedLang = localStorage.getItem('siteLanguage') || 'de';
    changeLanguage(savedLang);
}

function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('siteLanguage', lang);
    
    const selector = document.getElementById('languageSelector');
    if (selector) selector.value = lang;

    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('[data-ph-i18n]').forEach(el => {
        const key = el.getAttribute('data-ph-i18n');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    updateStatusBar();
}

// --- Mobile Navigation ---
function initMobileNav() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }
}

// --- Barber Selection ---
function selectBarber(barberName) {
    const barberInput = document.getElementById('selectedBarber');
    if (barberInput) barberInput.value = barberName;

    const bBahattin = document.getElementById('barberBahattin');
    const bTeam = document.getElementById('barberTeam');

    if (barberName.includes('Bahattin')) {
        if (bBahattin) bBahattin.classList.add('active');
        if (bTeam) bTeam.classList.remove('active');
    } else {
        if (bBahattin) bBahattin.classList.remove('active');
        if (bTeam) bTeam.classList.add('active');
    }
}

// --- Quick Select from Service Cards ---
function quickSelectService(serviceIdentifier) {
    const serviceSelect = document.getElementById('serviceSelect');
    if (serviceSelect) {
        const query = serviceIdentifier.toLowerCase();
        for (let i = 0; i < serviceSelect.options.length; i++) {
            const opt = serviceSelect.options[i];
            if (opt.value && (opt.value.toLowerCase().includes(query) || opt.text.toLowerCase().includes(query))) {
                serviceSelect.selectedIndex = i;
                break;
            }
        }
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- Date Picker & Past Days/Hours Prevention ---
function initDatePicker() {
    const dateInput = document.getElementById('bookingDate');
    if (!dateInput) return;

    // Block past dates: min is today
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;

    dateInput.addEventListener('change', (e) => {
        const selectedDateStr = e.target.value;
        if (!selectedDateStr) return;

        const selectedDate = new Date(selectedDateStr + 'T00:00:00');
        const dayOfWeek = selectedDate.getDay();

        // Sunday is closed
        if (dayOfWeek === 0) {
            alert(currentLang === 'tr' ? 'Pazar gÃ¼nleri salonumuz kapalÄ±dÄ±r. LÃ¼tfen baÅŸka bir gÃ¼n seÃ§iniz.' : 'Sonntags ist der Salon geschlossen. Bitte wÃ¤hlen Sie ein anderes Datum.');
            e.target.value = '';
            clearTimeSlots();
            return;
        }

        renderTimeSlots(selectedDateStr, dayOfWeek);
    });
}

function clearTimeSlots() {
    const container = document.getElementById('timeSlotsContainer');
    const hiddenInput = document.getElementById('selectedTimeSlot');
    if (hiddenInput) hiddenInput.value = '';
    if (container) {
        const dict = translations[currentLang];
        container.innerHTML = `
            <div class="slots-placeholder">
                <i class="fa-solid fa-calendar-day"></i>
                <p>${dict.timeSlotPlaceholder}</p>
            </div>
        `;
    }
}

// --- Render Time Slots with Past Hour Block ---
function renderTimeSlots(dateStr, dayOfWeek) {
    const container = document.getElementById('timeSlotsContainer');
    const hiddenInput = document.getElementById('selectedTimeSlot');
    if (!container || !hiddenInput) return;

    hiddenInput.value = '';
    container.innerHTML = '';

    const startH = parseInt(salonSettings.openHour ? salonSettings.openHour.split(':')[0] : 9);
    // Saturday ends at 18:00, Weekdays default 19:00 or from settings
    const endH = dayOfWeek === 6 ? 18 : parseInt(salonSettings.closeHour ? salonSettings.closeHour.split(':')[0] : 19);

    const now = new Date();
    const isToday = now.toISOString().split('T')[0] === dateStr;
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    const slots = [];
    for (let h = startH; h < endH; h++) {
        const hourStr = String(h).padStart(2, '0');
        slots.push(`${hourStr}:00`);
        slots.push(`${hourStr}:30`);
    }

    slots.forEach(time => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'time-slot-btn';

        const [slotH, slotM] = time.split(':').map(Number);
        let isPast = false;

        if (isToday) {
            if (slotH < currentHour || (slotH === currentHour && slotM <= currentMin)) {
                isPast = true;
            }
        }

        if (isPast) {
            btn.classList.add('past');
            btn.disabled = true;
            btn.innerHTML = `<span>${time}</span><small>${currentLang === 'tr' ? 'GeÃ§ti' : 'Vorbei'}</small>`;
        } else {
            btn.innerHTML = `<span>${time}</span><small>${currentLang === 'tr' ? 'MÃ¼sait' : 'Frei'}</small>`;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                hiddenInput.value = time;
            });
        }

        container.appendChild(btn);
    });
}

// --- 6-Digit Random Security Code Generator ---
function generateAuthCode() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `FN-${randomNum}`;
}

// --- Cloud DB Salon Settings & Live Status ---
async function loadSalonSettings() {
    try {
        const res = await fetch(CLOUD_DB_URL);
        if (res.ok) {
            const data = await res.json();
            if (data && data.data) {
                salonSettings.isOpen = (data.data.isOpen === true || data.data.isOpen === "true");
                salonSettings.openHour = data.data.openHour || "09:00";
                salonSettings.closeHour = data.data.closeHour || "19:00";
            }
        }
    } catch (e) {
        console.log("Using cached/default settings:", e);
    }
    applySalonSettings();
}

function applySalonSettings() {
    const closedBanner = document.getElementById('salonClosedNotice');
    const submitBtn = document.getElementById('submitBookingBtn');
    const monFri = document.getElementById('dispTimeMonFri');
    const contactMonFri = document.getElementById('contactMonFri');

    if (monFri) monFri.textContent = `${salonSettings.openHour} â€“ ${salonSettings.closeHour} Uhr`;
    if (contactMonFri) contactMonFri.textContent = `${salonSettings.openHour} â€“ ${salonSettings.closeHour} Uhr`;

    if (!salonSettings.isOpen) {
        if (closedBanner) closedBanner.style.display = 'flex';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';
        }
    } else {
        if (closedBanner) closedBanner.style.display = 'none';
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
        }
    }
    updateStatusBar();
}

function updateStatusBar() {
    const dot = document.getElementById('statusDot');
    const label = document.getElementById('statusLabel');
    if (!dot || !label) return;

    const dict = translations[currentLang];
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const min = now.getMinutes();
    const timeVal = hour + min / 60;

    let openH = parseInt(salonSettings.openHour.split(':')[0]);
    let closeH = parseInt(salonSettings.closeHour.split(':')[0]);

    let isOpenNow = salonSettings.isOpen && day !== 0 && timeVal >= openH && (day === 6 ? timeVal < 18 : timeVal < closeH);

    if (isOpenNow) {
        dot.className = 'status-dot';
        label.textContent = dict.statusOpen;
    } else {
        dot.className = 'status-dot closed';
        label.textContent = dict.statusClosed;
    }
}

// --- Booking Form Submission ---
function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!salonSettings.isOpen) {
            alert(currentLang === 'tr' ? 'Salonumuz ÅŸu anda randevuya kapalÄ±dÄ±r.' : 'Salon ist derzeit geschlossen.');
            return;
        }

        const barber = document.getElementById('selectedBarber').value || 'Bahattin';
        const service = document.getElementById('serviceSelect').value;
        const date = document.getElementById('bookingDate').value;
        const time = document.getElementById('selectedTimeSlot').value;
        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        const email = document.getElementById('customerEmail').value.trim();
        const notes = document.getElementById('customerNotes').value.trim();

        if (!time) {
            alert(currentLang === 'tr' ? 'LÃ¼tfen bir randevu saati seÃ§iniz.' : 'Bitte wÃ¤hlen Sie eine Uhrzeit aus.');
            return;
        }

        const submitBtn = document.getElementById('submitBookingBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (currentLang === 'tr' ? 'Kaydediliyor...' : 'Wird reserviert...');

        const authCode = generateAuthCode();

        const appointmentData = {
            id: Date.now().toString(),
            authCode: authCode,
            barber: barber,
            service: service,
            date: date,
            time: time,
            name: name,
            phone: phone,
            email: email,
            notes: notes || '-',
            status: 'Offen',
            createdAt: new Date().toISOString()
        };

        // 1. Save Locally
        saveLocalAppointment(appointmentData);

        // 2. Save to Cloud DB
        await saveCloudAppointment(appointmentData);

        // 3. Send Email Notification to Barber
        await sendEmailNotification(appointmentData);

        // 4. Show Modal with Security Code
        document.getElementById('modalAuthCode').textContent = authCode;
        const modal = document.getElementById('bookingModal');
        if (modal) modal.classList.add('active');

        form.reset();
        clearTimeSlots();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> ' + translations[currentLang].btnConfirmBooking;
    });
}

function saveLocalAppointment(apt) {
    try {
        const list = JSON.parse(localStorage.getItem('barber_appointments') || '[]');
        list.unshift(apt);
        localStorage.setItem('barber_appointments', JSON.stringify(list));
    } catch (e) {
        console.error("Local save error:", e);
    }
}

async function saveCloudAppointment(apt) {
    try {
        // Fetch current cloud data
        const getRes = await fetch(CLOUD_DB_URL);
        let appointments = [];
        if (getRes.ok) {
            const currentData = await getRes.json();
            if (currentData && currentData.data && currentData.data.appointments) {
                try {
                    appointments = JSON.parse(currentData.data.appointments);
                } catch(err) {
                    appointments = [];
                }
            }
        }

        appointments.unshift(apt);

        const updateBody = {
            name: "FinaleBarber_Production_DB",
            data: {
                isOpen: String(salonSettings.isOpen),
                openHour: salonSettings.openHour,
                closeHour: salonSettings.closeHour,
                appointments: JSON.stringify(appointments)
            }
        };

        await fetch(CLOUD_DB_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateBody)
        });
    } catch (e) {
        console.error("Cloud DB save error:", e);
    }
}

async function sendEmailNotification(apt) {
    try {
        const payload = {
            "_subject": `ğŸ’ˆ FINALE BARBER [${apt.authCode}] - ${apt.barber} Randevusu`,
            "_template": "table",
            "_captcha": "false",
            "GÃ¼venlik Kodu": apt.authCode,
            "SeÃ§ilen Berber": apt.barber,
            "MÃ¼ÅŸteri AdÄ±": apt.name,
            "Telefon": apt.phone,
            "E-Mail": apt.email,
            "Tarih": apt.date,
            "Saat": apt.time,
            "Hizmet": apt.service,
            "Notlar": apt.notes,
            "KayÄ±t Tarihi": new Date().toLocaleString('de-DE')
        };

        await fetch(`https://formsubmit.co/ajax/${BARBER_EMAIL}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        console.log("Email dispatch:", err);
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
}