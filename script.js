/* ==========================================================================
   PREMIUM BERBER V2 - CORE JAVASCRIPT LOGIC
   ========================================================================== */

// --- i18n Translations Dictionary ---
const translations = {
    de: {
        docTitle: "Premium Berber | Mörfelden-Walldorf",
        navHome: "Startseite",
        navAbout: "Über Uns",
        navServices: "Leistungen & Preise",
        navGallery: "Galerie",
        navContact: "Kontakt & Anfahrt",
        navBookBtn: "Termin Buchen",
        navBooking: "Termin Buchen",
        walkInBadge: "Ohne Termin möglich",
        heroTitle: 'Perfekter Cut & <span class="mono-gradient-text">Präzise Bartpflege</span>',
        heroSubtitle: "Willkommen bei Premium Berber in Mörfelden-Walldorf. Wir bieten Ihnen professionelle Herrenhaarschnitte, moderne Fades und erstklassiges Styling.",
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
        aboutTitle: "Premium Berber – Tradition trifft auf modernen Style",
        aboutDesc1: "In der Westendstraße 3 in Mörfelden-Walldorf bieten wir mehr als nur Haarschnitte – wir bieten ein erstklassiges Pflegeritual für den modernen Mann.",
        aboutDesc2: "Egal ob präziser Skin Fade, klassischer Faconschnitt oder konturenscharfe Bartpflege mit Hot-Towel Behandlung: Bei uns stehen höchste Präzision und Ihre Kundenzufriedenheit an erster Stelle.",
        feat1Title: "Präzise Fades & Schnitte",
        feat1Desc: "Saubere Übergänge maßgeschneidert auf Ihre Kopfform.",
        feat2Title: "Traditionelle Bartpflege",
        feat2Desc: "Rasur, Konturen und wohltuende Pflegeprodukte.",
        feat3Title: "Spontan oder mit Termin",
        feat3Desc: "Online buchen, anrufen oder einfach vorbeikommen.",
        satisfactionText: "Kundenzufriedenheit",
        servicesTag: "ANGEBOT & LEISTUNGEN",
        servicesTitle: "Unsere Leistungen & Preise",
        servicesSub: "Erstklassige Qualität zu fairen Preisen. Wählen Sie Ihre gewünschte Leistung aus.",
        popularBadge: "Beliebt",
        comboBadge: "BESTER DEAL",
        service1Title: "Herrenhaarschnitt",
        service1Desc: "Klassischer oder moderner Haarschnitt inklusive Beratung, Waschen & Styling.",
        service2Title: "Präzise Bartpflege",
        service2Desc: "Formen, Konturenschnitt mit Rasiermesser & pflegendes Bartöl.",
        service3Title: "Haar & Bart Komplett",
        service3Desc: "Das Rundum-Sorglos-Paket: Haarschnitt, Fade, Komplett-Bartpflege & Waschen.",
        service4Title: "Kinderhaarschnitt",
        service4Desc: "Geduldiger & moderner Haarschnitt für Kinder (bis 12 Jahre).",
        service5Title: "Gesichtspflege & Maske",
        service5Desc: "Tiefenreinigung mit Gesichtsmaske für frische Haut.",
        selectServiceBtn: "Wählen & Buchen",
        fullPriceTitle: "Vollständige Preisübersicht",
        p1Name: "Professioneller Herrenhaarschnitt",
        p1Sub: "Scheren- oder Maschinenschnitt mit Finisher",
        p2Name: "Bart Trimmen & Konturen",
        p2Sub: "Präzisionsrasur und Konturenformung",
        p3Name: "Haarschnitt + Bart + Kopfwaschen",
        p3Sub: "Vollständiges Styling- & Pflegepaket",
        p4Name: "Kinderhaarschnitt",
        p4Sub: "Für Jugendliche & Kinder",
        p5Name: "Gesichtsmaske & Porenreinigung",
        p5Sub: "Wohltuende Gesichtsbehandlung",
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
        timeSlotPlaceholder: "Bitte wählen Sie zuerst links ein Datum aus, um die verfügbaren Zeiten zu sehen.",
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
        docTitle: "Premium Berber | Mörfelden-Walldorf",
        navHome: "Ana Sayfa",
        navAbout: "Hakkımızda",
        navServices: "Hizmetler & Fiyatlar",
        navGallery: "Galeri",
        navContact: "İletişim & Konum",
        navBookBtn: "Randevu Al",
        navBooking: "Randevu Al",
        walkInBadge: "Terminsiz de gelebilirsiniz",
        heroTitle: 'Mükemmel Kesim & <span class="mono-gradient-text">Hassas Sakal Bakımı</span>',
        heroSubtitle: "Mörfelden-Walldorf'taki Premium Berber'e hoş geldiniz. Profesyonel erkek saç kesimleri, modern fade stilleri ve kaliteli bakım sunuyoruz.",
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
        aboutTitle: "Premium Berber – Gelenek ve Modern Stil Bir Arada",
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
        servicesTitle: "Hizmetlerimiz ve Fiyat Listesi",
        servicesSub: "Uygun fiyatlarla birinci sınıf kalite. Aradığınız hizmeti seçin.",
        popularBadge: "Popüler",
        comboBadge: "EN İYİ PAKET",
        service1Title: "Erkek Saç Kesimi",
        service1Desc: "Klasik veya modern saç kesimi, yıkama ve stil verme dahil.",
        service2Title: "Hassas Sakal Bakımı",
        service2Desc: "Sakal şekillendirme, ustura konturu ve bakım yağı.",
        service3Title: "Saç & Sakal Komple",
        service3Desc: "Tam bakım paketi: Saç kesimi, fade, sakal tasarımı ve yıkama.",
        service4Title: "Çocuk Saç Kesimi",
        service4Desc: "Çocuklar için özel ve sabırlı kesim (12 yaşa kadar).",
        service5Title: "Cilt Bakımı & Maske",
        service5Desc: "Ferah bir cilt için siyah nokta ve gözenek maskesi.",
        selectServiceBtn: "Seç & Randevu Al",
        fullPriceTitle: "Tüm Fiyat Listesi",
        p1Name: "Profesyonel Erkek Saç Kesimi",
        p1Sub: "Makas veya makine kesimi ve şekillendirme",
        p2Name: "Sakal Düzeltme & Kontur",
        p2Sub: "Hassas tıraş ve çizgi belirleme",
        p3Name: "Saç + Sakal + Yıkama Komple",
        p3Sub: "Eksiksiz stil ve bakım paketi",
        p4Name: "Çocuk Saç Kesimi",
        p4Sub: "Gençler ve çocuklar için",
        p5Name: "Yüz Maskesi & Derin Temizlik",
        p5Sub: "Rahatlatıcı cilt bakımı",
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
        timeSlotPlaceholder: "Uygun saatleri görmek için lütfen soldan bir tarih seçin.",
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
        hoursLabel: "Çalışma Saatleri",
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
        docTitle: "Premium Berber | Mörfelden-Walldorf",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services & Prices",
        navGallery: "Gallery",
        navContact: "Contact & Location",
        navBookBtn: "Book Now",
        navBooking: "Book Now",
        walkInBadge: "Walk-ins Welcome",
        heroTitle: 'Sharp Cuts & <span class="mono-gradient-text">Precision Beard Care</span>',
        heroSubtitle: "Welcome to Premium Berber in Mörfelden-Walldorf. We offer professional men's haircuts, modern fades, and premium grooming.",
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
        aboutTitle: "Premium Berber – Tradition Meets Modern Style",
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
        servicesTitle: "Our Services & Price List",
        servicesSub: "Premium quality at fair prices. Select your desired service.",
        popularBadge: "Popular",
        comboBadge: "BEST DEAL",
        service1Title: "Men's Haircut",
        service1Desc: "Classic or modern haircut including consultation, wash & styling.",
        service2Title: "Beard Grooming",
        service2Desc: "Beard shaping, razor line up & nourishing beard oil.",
        service3Title: "Hair & Beard Full Package",
        service3Desc: "The ultimate package: haircut, fade, full beard shaping & wash.",
        service4Title: "Kids Haircut",
        service4Desc: "Patient & stylish haircut for kids (up to 12 years).",
        service5Title: "Facial Care & Mask",
        service5Desc: "Deep pore cleansing face mask for skin refresh.",
        selectServiceBtn: "Select & Book",
        fullPriceTitle: "Complete Price Overview",
        p1Name: "Professional Men's Haircut",
        p1Sub: "Scissors or clipper cut with styling finish",
        p2Name: "Beard Trim & Contours",
        p2Sub: "Precision shave and line shaping",
        p3Name: "Haircut + Beard + Hair Wash",
        p3Sub: "Full styling & grooming package",
        p4Name: "Kids Haircut",
        p4Sub: "For youths & kids",
        p5Name: "Face Mask & Pore Care",
        p5Sub: "Refreshing skin treatment",
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
        timeSlotPlaceholder: "Please select a date on the left to see available time slots.",
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
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Set Min Date
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.addEventListener('change', handleDateChange);
    }

    // 3. Booking Form Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }

    // 4. Live Store Status Check
    updateLiveBusinessStatus();
    setInterval(updateLiveBusinessStatus, 60000);

    // 5. Initial language setup
    changeLanguage(currentLang);
}

// --- Sync Service Selection Helper ---
function syncServiceSelect(val) {
    const sel = document.getElementById('serviceSelect');
    if (sel) {
        sel.value = val;
    }
}

// --- Service Card Quick Selection ---
function quickSelectService(serviceName) {
    // Sync select
    syncServiceSelect(serviceName);

    // Sync radio button tile
    const radio = document.querySelector(`input[name="serviceRadio"][value="${serviceName}"]`);
    if (radio) {
        radio.checked = true;
    }

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- i18n Language Switcher Logic ---
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    if (dict.docTitle) {
        document.title = dict.docTitle;
    }

    document.querySelectorAll('[data-ph-i18n]').forEach(el => {
        const key = el.getAttribute('data-ph-i18n');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    updateLiveBusinessStatus();

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
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTimeVal = hour * 100 + minute;

    let isOpen = false;

    if (day >= 1 && day <= 5) {
        if (currentTimeVal >= 900 && currentTimeVal < 1900) {
            isOpen = true;
        }
    } else if (day === 6) {
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
    const dayOfWeek = dateObj.getDay();

    if (dayOfWeek === 0) {
        slotsContainer.innerHTML = `
            <div class="slots-placeholder">
                <i class="fa-solid fa-store-slash"></i>
                <p style="color: var(--status-closed); font-weight: 600;">${dict.sundayClosedText}</p>
            </div>
        `;
        return;
    }

    // Mo-Fr: last slot at 18:15 (9:00 + 12 slots of 45min = 18:00), Sa: last at 17:15
    const maxMinutes = (dayOfWeek === 6) ? (17 * 60 + 15) : (18 * 60 + 15);

    const timeSlots = [];
    let totalMin = 9 * 60; // start at 09:00
    while (totalMin <= maxMinutes) {
        const h = Math.floor(totalMin / 60);
        const m = totalMin % 60;
        const hourStr = h < 10 ? `0${h}` : `${h}`;
        const minStr = m < 10 ? `0${m}` : `${m}`;
        timeSlots.push(`${hourStr}:${minStr}`);
        totalMin += 45;
    }

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

    let service = document.getElementById('serviceSelect').value;
    const selectedRadio = document.querySelector('input[name="serviceRadio"]:checked');
    if (selectedRadio) {
        service = selectedRadio.value;
    }

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

    const newAppointment = {
        id: Date.now(),
        service,
        date,
        time,
        name,
        phone,
        notes,
        status: 'Bekliyor',
        createdAt: new Date().toISOString()
    };

    let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    appointments.push(newAppointment);
    localStorage.setItem('barberAppointments', JSON.stringify(appointments));

    const modalMsg = document.getElementById('modalMessage');
    if (modalMsg) {
        modalMsg.innerHTML = `
            <strong>Muster:</strong> ${name}<br>
            <strong>Datum:</strong> ${formatDisplayDate(date)} | <strong>Uhrzeit:</strong> ${time}<br>
            <strong>Leistung:</strong> ${service}<br>
            <strong>Telefon:</strong> ${phone}
        `;
    }

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('active');
    }

    document.getElementById('booking-form').reset();
    document.getElementById('selectedTimeSlot').value = '';
    renderTimeSlots(date);
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
