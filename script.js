/* ==========================================================================
   DER FINALE BARBERSHOP - CORE JAVASCRIPT LOGIC
   ========================================================================== */

// --- i18n Translations Dictionary ---
const translations = {
    de: {
        docTitle: "Der Finale Barbershop | Mörfelden-Walldorf",
        navHome: "Startseite",
        navAbout: "Über Uns",
        navServices: "Preise & Pakete",
        navGallery: "Galerie",
        navContact: "Kontakt & Anfahrt",
        navBookBtn: "Termin Buchen",
        walkInBadge: "Ohne Termin möglich",
        heroTitle: 'Perfekter Cut & <span class="gold-gradient">Präzise Bartpflege</span>',
        heroSubtitle: "Willkommen bei Der Finale Barbershop in Mörfelden-Walldorf. Wir bieten Ihnen professionelle Herrenhaarschnitte, moderne Fades und erstklassiges Styling.",
        heroBookBtn: "Online Termin Buchen",
        stat1Title: "Professionelle Fades",
        stat1Sub: "Exakte Übergänge & Styles",
        stat2Title: "Ohne Termin",
        stat2Sub: "Einfach vorbeikommen",
        statusChecking: "Status wird geprüft...",
        statusOpen: "Jetzt Geöffnet",
        statusClosed: "Derzeit Geschlossen",
        hoursMonFri: "Mo - Fr:",
        hoursSat: "Samstag:",
        hoursSun: "Sonntag:",
        hoursClosed: "Geschlossen",
        aboutTag: "ÜBER UNSEREN SALON",
        aboutTitle: "Der Finale Barbershop – Tradition trifft auf modernen Style",
        aboutDesc1: "In der Westendstraße 3 in Mörfelden-Walldorf bieten wir mehr als nur Haarschnitte – wir bieten ein erstklassiges Pflegeritual für den modernen Mann.",
        aboutDesc2: "Egal ob präziser Fade Cut, klassischer Schnitt oder konturenscharfe Bartpflege mit Hot-Towel Behandlung: Bei uns stehen höchste Präzision und Ihre Kundenzufriedenheit an erster Stelle.",
        feat1Title: "Präzise Fades & Schnitte",
        feat1Desc: "Saubere Übergänge maßgeschneidert auf Ihre Kopfform.",
        feat2Title: "Traditionelle Bartpflege",
        feat2Desc: "Rasur, Konturen und wohltuende Pflegeprodukte.",
        feat3Title: "Spontan oder mit Termin",
        feat3Desc: "Online buchen, anrufen oder einfach vorbeikommen.",
        satisfactionText: "Kundenzufriedenheit",
        servicesTag: "ANGEBOT & LEISTUNGEN",
        servicesTitle: "Unsere Preise & Spezial-Pakete",
        servicesSub: "Erstklassige Qualität zu fairen Preisen. Wählen Sie Ihre gewünschte Leistung oder eines unserer Spar-Pakete.",
        packagesTitle: "Spezial Spar-Pakete",
        pkg1Badge: "SPAR PAKET",
        pkg1Title: "Paket 1",
        pkg1Desc: "Waschen, Schneiden, Rasieren, Föhnen & Stylen",
        pkg2Badge: "BELIEBT",
        pkg2Title: "Paket 2",
        pkg2Desc: "Waschen, Schneiden, Rasieren, Föhnen, Stylen & Augenbrauen zupfen",
        pkg3Badge: "FULL CARE",
        pkg3Title: "Paket 3",
        pkg3Desc: "Waschen, Schneiden, Rasieren, Föhnen, Stylen, Augenbrauen zupfen, Färben (Bart / Haare)",
        selectServiceBtn: "Wählen & Buchen",
        fullPriceTitle: "Einzelne Leistungen & Preise",
        p1Name: "Trocken Haarschnitt",
        p1Sub: "Klassischer oder moderner Trockenschnitt",
        p2Name: "Waschen, Schneiden, Föhnen",
        p2Sub: "Inklusive Haarwäsche, Schnitt und Föhnen",
        p3Name: "Bartrasur",
        p3Sub: "Präzisionsrasur und Konturenformung",
        p4Name: "Augenbrauen zupfen",
        p4Sub: "Präzises Zupfen & Formgebung",
        p5Name: "Kinder Haarschnitt (bis 10 Jahre)",
        p5Sub: "Geduldiger & moderner Schnitt für Kinder",
        p6Name: "Waschen, Föhnen, Stylen",
        p6Sub: "Haarwäsche, Föhnen und Finish-Styling",
        p7Name: "Bart / Haare Färben",
        p7Sub: "Professionelle Tönung & Färbung",
        galleryTag: "GALERIE",
        galleryTitle: "Impressionen & Unsere Arbeiten",
        gallerySub: "Präzise Arbeit, moderne Schnitte und erstklassige Bartpflege.",
        galCap1: "Fade Cut & Transition",
        galCap2: "Präzise Bartkonturen",
        galCap3: "Classic Gentleman Cut",
        galCap4: "Atmosphäre & Pflege",
        bookingTag: "ONLINE RESERVIERUNG",
        bookingTitle: "Wunschtermin Vereinbaren",
        bookingSub: "Wählen Sie Datum und Uhrzeit aus. Sie erhalten sofort eine Bestätigung.",
        lblService: "Gewünschte Leistung",
        phSelectService: "Bitte Leistung wählen...",
        lblDate: "Datum Wählen",
        dateHelp: "Sonntags ist der Salon geschlossen.",
        lblTime: "Freie Uhrzeit Auswählen",
        timeSlotPlaceholder: "Bitte wählen Sie zuerst oben ein Datum aus, um die verfügbaren Zeiten zu sehen.",
        lblName: "Ihr Vor- & Nachname",
        phName: "z.B. Max Mustermann",
        lblPhone: "Telefonnummer",
        phPhone: "z.B. 0152 5164 9190",
        lblNotes: "Anmerkungen (Optional)",
        phNotes: "z.B. Besondere Wünsche zum Fade Cut...",
        btnConfirmBooking: "Termin Jetzt Verbindlich Buchen",
        contactTag: "KONTAKT & STANDORT",
        contactTitle: "Besuchen Sie Uns in Mörfelden-Walldorf",
        addrLabel: "Adresse",
        phoneLabel: "Telefon & Terminvereinbarung",
        walkInSub: "Besuche auch ohne Termin möglich",
        instaLabel: "Instagram",
        instaSub: "Termine & Styles auf Instagram",
        hoursLabel: "Öffnungszeiten",
        footerTagline: "Ihr erstklassiger Herrenfriseur & Barbershop in Mörfelden-Walldorf.",
        adminBtn: "Yönetici Paneli",
        allRights: "Alle Rechte vorbehalten.",
        modalSuccessTitle: "Termin Erfolgreich Gebucht!",
        modalCloseBtn: "Verstanden",
        slotAvailableText: "Frei",
        slotBookedText: "Belegt",
        sundayClosedText: "Sonntags ist der Salon geschlossen. Bitte wählen Sie Montag bis Samstag.",
        selectTimeAlert: "Bitte wählen Sie eine freie Uhrzeit aus."
    },
    tr: {
        docTitle: "Der Finale Barbershop | Mörfelden-Walldorf",
        navHome: "Ana Sayfa",
        navAbout: "Hakkımızda",
        navServices: "Fiyatlar & Paketler",
        navGallery: "Galeri",
        navContact: "İletişim & Konum",
        navBookBtn: "Randevu Al",
        walkInBadge: "Terminsiz de gelebilirsiniz",
        heroTitle: 'Mükemmel Kesim & <span class="gold-gradient">Hassas Sakal Bakımı</span>',
        heroSubtitle: "Mörfelden-Walldorf'taki Der Finale Barbershop'a hoş geldiniz. Profesyonel erkek saç kesimleri, modern fade stilleri ve kaliteli bakım sunuyoruz.",
        heroBookBtn: "Online Randevu Al",
        stat1Title: "Profesyonel Fades",
        stat1Sub: "Kusursuz geçişler & stiller",
        stat2Title: "Terminsiz Giriş",
        stat2Sub: "Doğrudan gelebilirsiniz",
        statusChecking: "Durum kontrol ediliyor...",
        statusOpen: "Şu An Açık",
        statusClosed: "Şu An Kapalı",
        hoursMonFri: "Pzt - Cuma:",
        hoursSat: "Cumartesi:",
        hoursSun: "Pazar:",
        hoursClosed: "Kapalı",
        aboutTag: "SALONUMUZ HAKKINDA",
        aboutTitle: "Der Finale Barbershop – Gelenek ve Modern Stil Bir Arada",
        aboutDesc1: "Mörfelden-Walldorf Westendstraße 3 adresinde sadece saç kesimi değil, modern erkekler için premium bir bakım deneyimi sunuyoruz.",
        aboutDesc2: "Pratik Skin Fade, klasik kesimler veya sıcak havlu destekli sakal bakımı: Bizim için en önemli şey hassasiyet ve müşteri memnuniyetidir.",
        feat1Title: "Hassas Fade & Kesimler",
        feat1Desc: "Kafa yapınıza özel pürüzsüz geçişli kesimler.",
        feat2Title: "Geleneksel Sakal Bakımı",
        feat2Desc: "Ustura ile kontur şekillendirme ve bakım yağları.",
        feat3Title: "Randevulu veya Randevusuz",
        feat3Desc: "İster online randevu alın, ister direkt uğrayın.",
        satisfactionText: "Müşteri Memnuniyeti",
        servicesTag: "HİZMETLER & FİYATLAR",
        servicesTitle: "Fiyat Listemiz & Özel Paketler",
        servicesSub: "Uygun fiyatlarla birinci sınıf kuaförlük hizmeti. Dilediğiniz hizmeti veya avantajlı paketlerimizi seçin.",
        packagesTitle: "Avantajlı Özel Paketler",
        pkg1Badge: "AVANTAJ PAKETİ",
        pkg1Title: "Paket 1",
        pkg1Desc: "Yıkama, Kesim, Sakal Tıraşı, Fön & Şekillendirme",
        pkg2Badge: "POPÜLER",
        pkg2Title: "Paket 2",
        pkg2Desc: "Yıkama, Kesim, Sakal Tıraşı, Fön, Şekillendirme & Kaş Alma",
        pkg3Badge: "FULL BAKIM",
        pkg3Title: "Paket 3",
        pkg3Desc: "Yıkama, Kesim, Sakal Tıraşı, Fön, Şekillendirme, Kaş Alma, Boyama (Sakal / Saç)",
        selectServiceBtn: "Seç & Randevu Al",
        fullPriceTitle: "Tekil Hizmetler & Fiyat Listesi",
        p1Name: "Kuru Saç Kesimi (Trocken Haarschnitt)",
        p1Sub: "Klasik veya modern kuru kesim",
        p2Name: "Yıkama, Kesim, Fön",
        p2Sub: "Saç yıkama, kesim ve profesyonel fön",
        p3Name: "Sakal Tıraşı (Bartrasur)",
        p3Sub: "Ustura ile hassas sakal tıraşı ve kontur",
        p4Name: "Kaş Alma (Augenbrauen zupfen)",
        p4Sub: "İp / cımbız ile hassas kaş şekillendirme",
        p5Name: "Çocuk Saç Kesimi (10 Yaşa Kadar)",
        p5Sub: "Çocuklar için sabırlı ve modern saç kesimi",
        p6Name: "Yıkama, Fön, Şekillendirme",
        p6Sub: "Saç yıkama, fön ve wax/jöle stil",
        p7Name: "Sakal / Saç Boyama",
        p7Sub: "Profesyonel sakal veya saç renklendirme",
        galleryTag: "GALERİ",
        galleryTitle: "Tıraşlarımız & Çalışmalarımız",
        gallerySub: "Özenli işçilik, modern kesimler ve hassas sakal tasarımı.",
        galCap1: "Fade Kesimi & Geçiş",
        galCap2: "Hassas Sakal Çizgileri",
        galCap3: "Klasik Centilmen Kesimi",
        galCap4: "Salon Atmosferi",
        bookingTag: "ONLINE RANDEVU",
        bookingTitle: "Randevunuzu Oluşturun",
        bookingSub: "Tarih ve saatinizi seçin. Anında onay alın.",
        lblService: "Hizmet Seçimi",
        phSelectService: "Lütfen bir hizmet seçin...",
        lblDate: "Tarih Seçin",
        dateHelp: "Pazar günleri salonumuz kapalıdır.",
        lblTime: "Uygun Saati Seçin",
        timeSlotPlaceholder: "Uygun saatleri görmek için lütfen yukarıdan bir tarih seçin.",
        lblName: "Adınız ve Soyadınız",
        phName: "Örn: Ahmet Yılmaz",
        lblPhone: "Telefon Numaranız",
        phPhone: "Örn: 0152 5164 9190",
        lblNotes: "Notlar (İsteğe Bağlı)",
        phNotes: "Örn: Fade kesim tercihi...",
        btnConfirmBooking: "Randevuyu Onayla",
        contactTag: "İLETİŞİM & KONUM",
        contactTitle: "Bizi Mörfelden-Walldorf'ta Ziyaret Edin",
        addrLabel: "Adres",
        phoneLabel: "Telefon & Randevu",
        walkInSub: "Randevusuz ziyaretler de mümkündür",
        instaLabel: "Instagram",
        instaSub: "Instagram üzerinden iletişim ve örnekler",
        hoursLabel: "Calışma Saatleri",
        footerTagline: "Mörfelden-Walldorf'taki birinci sınıf erkek kuaförünüz.",
        adminBtn: "Yönetici Paneli",
        allRights: "Tüm hakları saklıdır.",
        modalSuccessTitle: "Randevunuz Oluşturuldu!",
        modalCloseBtn: "Tamam",
        slotAvailableText: "Boş",
        slotBookedText: "Dolu",
        sundayClosedText: "Pazar günleri salonumuz kapalıdır. Lütfen Pazartesi - Cumartesi arası bir gün seçin.",
        selectTimeAlert: "Lütfen uygun bir randevu saati seçin."
    },
    en: {
        docTitle: "Der Finale Barbershop | Mörfelden-Walldorf",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Prices & Packages",
        navGallery: "Gallery",
        navContact: "Contact & Location",
        navBookBtn: "Book Now",
        walkInBadge: "Walk-ins Welcome",
        heroTitle: 'Sharp Cuts & <span class="gold-gradient">Precision Beard Care</span>',
        heroSubtitle: "Welcome to Der Finale Barbershop in Mörfelden-Walldorf. We offer professional men's haircuts, modern fades, and premium grooming.",
        heroBookBtn: "Book Online Appointment",
        stat1Title: "Professional Fades",
        stat1Sub: "Flawless transitions & styles",
        stat2Title: "Walk-ins Welcome",
        stat2Sub: "Just drop by anytime",
        statusChecking: "Checking status...",
        statusOpen: "Open Now",
        statusClosed: "Currently Closed",
        hoursMonFri: "Mon - Fri:",
        hoursSat: "Saturday:",
        hoursSun: "Sunday:",
        hoursClosed: "Closed",
        aboutTag: "ABOUT OUR SHOP",
        aboutTitle: "Der Finale Barbershop – Tradition Meets Modern Style",
        aboutDesc1: "Located at Westendstraße 3 in Mörfelden-Walldorf, we provide more than just haircuts – we deliver a premium grooming experience.",
        aboutDesc2: "Whether it's a precision skin fade, classic haircut, or hot-towel beard treatment: customer satisfaction is our top priority.",
        feat1Title: "Precision Fades & Cuts",
        feat1Desc: "Smooth transitions tailored to your style.",
        feat2Title: "Traditional Beard Grooming",
        feat2Desc: "Razor contours and soothing beard oils.",
        feat3Title: "Walk-in or Appointment",
        feat3Desc: "Book online, call us, or just walk in.",
        satisfactionText: "Customer Satisfaction",
        servicesTag: "SERVICES & PRICING",
        servicesTitle: "Our Prices & Special Packages",
        servicesSub: "Premium quality grooming at fair prices. Choose your desired service or one of our value packages.",
        packagesTitle: "Special Value Packages",
        pkg1Badge: "VALUE DEAL",
        pkg1Title: "Package 1",
        pkg1Desc: "Wash, Cut, Shave, Blow-dry & Styling",
        pkg2Badge: "POPULAR",
        pkg2Title: "Package 2",
        pkg2Desc: "Wash, Cut, Shave, Blow-dry, Styling & Eyebrow Plucking",
        pkg3Badge: "FULL CARE",
        pkg3Title: "Package 3",
        pkg3Desc: "Wash, Cut, Shave, Blow-dry, Styling, Eyebrow Plucking, Coloring (Beard / Hair)",
        selectServiceBtn: "Select & Book",
        fullPriceTitle: "Individual Services & Prices",
        p1Name: "Dry Haircut",
        p1Sub: "Classic or modern dry scissor/clipper cut",
        p2Name: "Wash, Cut, Blow-dry",
        p2Sub: "Includes hair wash, haircut and blow-dry styling",
        p3Name: "Beard Shave",
        p3Sub: "Precision razor shave and outline shaping",
        p4Name: "Eyebrow Plucking",
        p4Sub: "Precise plucking and shaping",
        p5Name: "Kids Haircut (up to 10 years)",
        p5Sub: "Patient and modern cut for kids",
        p6Name: "Wash, Blow-dry, Styling",
        p6Sub: "Hair wash, blow-dry and finish styling",
        p7Name: "Beard / Hair Coloring",
        p7Sub: "Professional beard or hair tint & dye",
        galleryTag: "GALLERY",
        galleryTitle: "Impressions & Our Work",
        gallerySub: "Precision craftsmanship, modern cuts, and sharp beard designs.",
        galCap1: "Fade Cut & Transition",
        galCap2: "Precision Beard Contours",
        galCap3: "Classic Gentleman Cut",
        galCap4: "Shop Atmosphere",
        bookingTag: "ONLINE BOOKING",
        bookingTitle: "Book Your Appointment",
        bookingSub: "Choose your preferred date and time. Get instant confirmation.",
        lblService: "Select Service",
        phSelectService: "Please choose a service...",
        lblDate: "Select Date",
        dateHelp: "The salon is closed on Sundays.",
        lblTime: "Select Available Time",
        timeSlotPlaceholder: "Please select a date above to see available time slots.",
        lblName: "Full Name",
        phName: "e.g. John Doe",
        lblPhone: "Phone Number",
        phPhone: "e.g. 0152 5164 9190",
        lblNotes: "Notes (Optional)",
        phNotes: "e.g. Preferences for fade height...",
        btnConfirmBooking: "Confirm Booking Now",
        contactTag: "CONTACT & LOCATION",
        contactTitle: "Visit Us in Mörfelden-Walldorf",
        addrLabel: "Address",
        phoneLabel: "Phone & Appointments",
        walkInSub: "Walk-in visits welcome without appointment",
        instaLabel: "Instagram",
        instaSub: "Book & explore styles on Instagram",
        hoursLabel: "Working Hours",
        footerTagline: "Your premier barbershop in Mörfelden-Walldorf.",
        adminBtn: "Admin Panel",
        allRights: "All rights reserved.",
        modalSuccessTitle: "Appointment Booked Successfully!",
        modalCloseBtn: "Got it",
        slotAvailableText: "Available",
        slotBookedText: "Booked",
        sundayClosedText: "The salon is closed on Sundays. Please select Monday to Saturday.",
        selectTimeAlert: "Please select an available time slot."
    }
};

let currentLang = 'de';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Setup Mobile Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close nav on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Set Minimum Date on Booking Picker to Today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.addEventListener('change', handleDateChange);
    }

    // 3. Setup Booking Form Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }

    // 4. Update Business Hours Open/Closed Live Indicator
    updateLiveBusinessStatus();
    setInterval(updateLiveBusinessStatus, 60000); // refresh every minute

    // 5. Initial language setup
    changeLanguage(currentLang);
}

// --- i18n Language Switcher Logic ---
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update document title
    if (dict.docTitle) {
        document.title = dict.docTitle;
    }

    // Update input placeholders
    document.querySelectorAll('[data-ph-i18n]').forEach(el => {
        const key = el.getAttribute('data-ph-i18n');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Refresh live status indicator
    updateLiveBusinessStatus();

    // Re-render time slots if date is selected
    const dateInput = document.getElementById('bookingDate');
    if (dateInput && dateInput.value) {
        renderTimeSlots(dateInput.value);
    }
}

// --- Live Business Hours Check ---
function updateLiveBusinessStatus() {
    const dot = document.getElementById('statusDot');
    const label = document.getElementById('statusLabel');
    if (!dot || !label) return;

    const dict = translations[currentLang];
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday ... 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTimeVal = hour * 100 + minute;

    let isOpen = false;

    if (day >= 1 && day <= 5) {
        // Monday to Friday: 09:00 - 19:00 (0900 to 1900)
        if (currentTimeVal >= 900 && currentTimeVal < 1900) {
            isOpen = true;
        }
    } else if (day === 6) {
        // Saturday: 09:00 - 18:00 (0900 to 1800)
        if (currentTimeVal >= 900 && currentTimeVal < 1800) {
            isOpen = true;
        }
    }

    if (isOpen) {
        dot.className = 'status-dot';
        label.textContent = dict.statusOpen;
    } else {
        dot.className = 'status-dot closed';
        label.textContent = dict.statusClosed;
    }
}

// --- Service Card Quick Selection ---
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

// --- Calendar & Time Slot Logic ---
function handleDateChange(e) {
    const selectedDateStr = e.target.value;
    renderTimeSlots(selectedDateStr);
}

function renderTimeSlots(dateStr) {
    const slotsContainer = document.getElementById('timeSlotsContainer');
    const selectedTimeInput = document.getElementById('selectedTimeSlot');
    if (!slotsContainer || !selectedTimeInput) return;

    selectedTimeInput.value = '';
    slotsContainer.innerHTML = '';

    const dict = translations[currentLang];
    const dateObj = new Date(dateStr);
    const dayOfWeek = dateObj.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat

    // Sunday Check
    if (dayOfWeek === 0) {
        slotsContainer.innerHTML = `
            <div class="slots-placeholder">
                <i class="fa-solid fa-store-slash"></i>
                <p style="color: var(--status-closed); font-weight: 600;">${dict.sundayClosedText}</p>
            </div>
        `;
        return;
    }

    // Determine working hours
    // Mon-Fri: 09:00 - 19:00 (last booking 18:30)
    // Sat: 09:00 - 18:00 (last booking 17:30)
    const endHour = (dayOfWeek === 6) ? 17 : 18;

    const timeSlots = [];
    for (let h = 9; h <= endHour; h++) {
        const hourStr = h < 10 ? `0${h}` : `${h}`;
        timeSlots.push(`${hourStr}:00`);
        timeSlots.push(`${hourStr}:30`);
    }

    // Get booked appointments from localStorage
    const appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    const bookedTimes = appointments
        .filter(app => app.date === dateStr && app.status !== 'Storniert')
        .map(app => app.time);

    timeSlots.forEach(time => {
        const isBooked = bookedTimes.includes(time);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `time-slot-btn ${isBooked ? 'booked' : ''}`;
        btn.innerHTML = `
            <span>${time}</span>
            <small>${isBooked ? dict.slotBookedText : dict.slotAvailableText}</small>
        `;

        if (!isBooked) {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTimeInput.value = time;
            });
        } else {
            btn.disabled = true;
        }

        slotsContainer.appendChild(btn);
    });
}

// --- Booking Form Submit Handler ---
function handleBookingSubmit(e) {
    e.preventDefault();

    const service = document.getElementById('serviceSelect').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('selectedTimeSlot').value;
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const notes = document.getElementById('customerNotes').value.trim();

    const dict = translations[currentLang];

    if (!time) {
        alert(dict.selectTimeAlert);
        return;
    }

    // Create appointment object
    const newAppointment = {
        id: Date.now(),
        service,
        date,
        time,
        name,
        phone,
        notes,
        status: 'Bekliyor', // Pending
        createdAt: new Date().toISOString()
    };

    // Save to localStorage
    let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    appointments.push(newAppointment);
    localStorage.setItem('barberAppointments', JSON.stringify(appointments));

    // Send Email Notification to Habapli7@gmail.com
    sendEmailNotification(newAppointment);

    // Show Confirmation Modal
    const modalMsg = document.getElementById('modalMessage');
    if (modalMsg) {
        modalMsg.innerHTML = `
            <strong>Muster:</strong> ${escapeHtml(name)}<br>
            <strong>Datum:</strong> ${formatDisplayDate(date)} | <strong>Uhrzeit:</strong> ${time}<br>
            <strong>Leistung:</strong> ${escapeHtml(service)}<br>
            <strong>Telefon:</strong> ${escapeHtml(phone)}<br>
            <div style="margin-top: 8px; font-size: 0.82rem; color: var(--primary-gold);">
                <i class="fa-solid fa-envelope"></i> E-Mail Benachrichtigung an Barber gesendet!
            </div>
        `;
    }

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('active');
    }

    // Reset Form
    document.getElementById('booking-form').reset();
    document.getElementById('selectedTimeSlot').value = '';
    renderTimeSlots(date);
}

// --- Email Notification Dispatcher ---
const NOTIFICATION_EMAIL = "Habapli7@gmail.com";

function sendEmailNotification(appointment) {
    const formattedDate = formatDisplayDate(appointment.date);
    
    // Prepare FormSubmit JSON payload
    const payload = {
        _subject: `💈 YENİ TERMİN: ${appointment.name} - ${formattedDate} (${appointment.time})`,
        _template: "table",
        _captcha: "false",
        "Müşteri Adı / Name": appointment.name,
        "Telefon / Phone": appointment.phone,
        "Tarih / Date": formattedDate,
        "Saat / Time": appointment.time,
        "Hizmet / Service": appointment.service,
        "Notlar / Notes": appointment.notes || "Yok / Keine",
        "Randevu Durumu": appointment.status || "Bekliyor",
        "Kayıt Zamanı": new Date().toLocaleString('de-DE')
    };

    fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Email notification sent successfully to " + NOTIFICATION_EMAIL, data);
    })
    .catch(error => {
        console.warn("Email notification delivery warning:", error);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function formatDisplayDate(dateStr) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
}
