/**
 * DHL Backup Solution - Shared JavaScript
 * โค้ดส่วนกลางสำหรับจัดการ Theme, Language, และ Mobile Menu
 * ไฟล์นี้จะถูกเรียกใช้โดยทุกหน้า HTML
 */

// --- Translations Object ---
const translations = {
    'th': {
        'homepage': 'หน้าแรก', 'trackYourPackageTitle': 'ติดตามพัสดุของคุณ',
        'enterTrackingNumber': 'ป้อนหมายเลขติดตามพัสดุเพื่อตรวจสอบสถานะ', 'trackButton': 'Track',
        'gettingStartedTitle': 'เริ่มต้นใช้งาน', 'calculateQuote': 'คำนวณค่าขนส่ง', 'createShipment': 'สร้างใบนำส่ง',
        'emergencyOnlyTitle': 'เฉพาะกรณีฉุกเฉิน', 'emergencySystemMessage': 'ระบบนี้จะถูกเปิดใช้งานเมื่อระบบ MyDHL+ ไม่สามารถใช้งานได้เท่านั้น',
        'contactAddressPhoneEmail': 'ที่อยู่: DHL Express Thailand, กรุงเทพฯ<br />โทรศัพท์: +66 2 345 6789<br />อีเมล: info@dhl.co.th',
        'allRightsReserved': 'สงวนลิขสิทธิ์.', 'backToMain': 'กลับสู่หน้าหลัก',
        // Tracking
        'trackingDetailsTitle': 'รายละเอียดการจัดส่ง', 'trackingNumberDisplay': 'หมายเลขติดตาม:',
        'status': 'สถานะ:', 'currentLocation': 'ตำแหน่งปัจจุบัน:', 'eventHistory': 'ประวัติเหตุการณ์',
        'eventAt': 'ที่', 'eventOn': 'เมื่อ', 'noEventsFound': 'ไม่พบประวัติเหตุการณ์',
        'enterTrackingNumberPlaceholder': 'กรอกหมายเลขติดตามพัสดุ', 'trackingSimulated': 'กำลังติดตาม: {trackingNumber}...',
        'trackingError': 'เกิดข้อผิดพลาดในการติดตามพัสดุ:', 'serverError': 'เซิร์ฟเวอร์มีปัญหา',
        // Quote & Ship
        'originInfo': 'ข้อมูลต้นทาง:', 'destinationInfo': 'ข้อมูลปลายทาง:', 'packageDetails': 'รายละเอียดพัสดุ:',
        'originCountry': 'ประเทศต้นทาง:', 'originCity': 'เมืองต้นทาง:', 'destinationCountry': 'ประเทศปลายทาง:',
        'destinationCity': 'เมืองปลายทาง:', 'originPostalCodeRequired': 'รหัสไปรษณีย์ต้นทาง:',
        'destinationPostalCodeRequired': 'รหัสไปรษณีย์ปลายทาง:', 'shipmentDate': 'วันที่จัดส่ง:',
        'isParcel': 'พัสดุ', 'declaredValue': 'มูลค่าสินค้า:', 'selectCountry': 'เลือกประเทศ',
        'enterCity': 'กรอกชื่อเมือง', 'enterPostalCode': 'กรอกรหัสไปรษณีย์',
        'lengthCm': 'ยาว(ซม.):', 'widthCm': 'กว้าง(ซม.):', 'heightCm': 'สูง(ซม.):', 'weightKg': 'นน.(กก.):',
        'lengthPlaceholder': 'ยาว', 'widthPlaceholder': 'กว้าง', 'heightPlaceholder': 'สูง', 'weightPlaceholder': 'น้ำหนัก',
        'getQuote': 'รับใบเสนอราคา', 'clearData': 'ล้างข้อมูล', 'fillAllFields': 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน',
        'quoteRequestSimulated': 'ราคาจำลองสำหรับ {weight} กก. จาก {originCity} ไป {destinationCity}',
        // Ship
        'originStep': 'ต้นทาง', 'destinationStep': 'ปลายทาง', 'packageStep': 'พัสดุ', 'reviewConfirm': 'สรุป',
        'addPiece': 'เพิ่มชิ้นพัสดุ', 'confirmShipment': 'ยืนยันการจัดส่ง', 'previous': 'ย้อนกลับ', 'next': 'ถัดไป',
        'fillAllPackageFields': 'กรุณากรอกข้อมูลพัสดุให้ครบทุกชิ้น', 'shipmentInProgress': 'ดำเนินการจัดส่งสำเร็จ! (จำลอง)',
        'pieceNumber': 'ชิ้นที่'
    },
    'en': {
        'homepage': 'Home', 'trackYourPackageTitle': 'Track Your Shipment',
        'enterTrackingNumber': 'Enter tracking number to check status', 'trackButton': 'Track',
        'gettingStartedTitle': 'Get Started', 'calculateQuote': 'Calculate Quote', 'createShipment': 'Create Shipment',
        'emergencyOnlyTitle': 'For Emergency Only', 'emergencySystemMessage': 'This system is activated only when the MyDHL+ system is unavailable.',
        'contactAddressPhoneEmail': 'Address: DHL Express Thailand, Bangkok<br />Phone: +66 2 345 6789<br />Email: info@dhl.co.th',
        'allRightsReserved': 'All rights reserved.', 'backToMain': 'Back to Main',
        // Tracking
        'trackingDetailsTitle': 'Shipment Details', 'trackingNumberDisplay': 'Tracking Number:',
        'status': 'Status:', 'currentLocation': 'Current Location:', 'eventHistory': 'Event History',
        'eventAt': 'at', 'eventOn': 'on', 'noEventsFound': 'No event history found.',
        'enterTrackingNumberPlaceholder': 'Enter tracking number', 'trackingSimulated': 'Tracking: {trackingNumber}...',
        'trackingError': 'Error tracking shipment:', 'serverError': 'Server error',
        // Quote & Ship
        'originInfo': 'Origin:', 'destinationInfo': 'Destination:', 'packageDetails': 'Package Details:',
        'originCountry': 'Origin Country:', 'originCity': 'Origin City:', 'destinationCountry': 'Destination Country:',
        'destinationCity': 'Destination City:', 'originPostalCodeRequired': 'Origin Postal Code:',
        'destinationPostalCodeRequired': 'Destination Postal Code:', 'shipmentDate': 'Shipment Date:',
        'isParcel': 'Parcel', 'declaredValue': 'Declared Value:', 'selectCountry': 'Select Country',
        'enterCity': 'Enter city name', 'enterPostalCode': 'Enter postal code',
        'lengthCm': 'Length(cm):', 'widthCm': 'Width(cm):', 'heightCm': 'Height(cm):', 'weightKg': 'Weight(kg):',
        'lengthPlaceholder': 'Length', 'widthPlaceholder': 'Width', 'heightPlaceholder': 'Height', 'weightPlaceholder': 'Weight',
        'getQuote': 'Get Quote', 'clearData': 'Clear Data', 'fillAllFields': 'Please fill in all required fields.',
        'quoteRequestSimulated': 'Simulated quote for {weight} kg from {originCity} to {destinationCity}',
        // Ship
        'originStep': 'Origin', 'destinationStep': 'Destination', 'packageStep': 'Package', 'reviewConfirm': 'Summary',
        'addPiece': 'Add Piece', 'confirmShipment': 'Confirm Shipment', 'previous': 'Previous', 'next': 'Next',
        'fillAllPackageFields': 'Please fill all package details.', 'shipmentInProgress': 'Shipment processed successfully! (Simulated)',
        'pieceNumber': 'Piece'
    }
};

let currentLanguage = localStorage.getItem('language') || 'th';

function getTranslatedText(key, replacements = {}) {
    let text = translations[currentLanguage]?.[key] || key;
    for (const placeholder in replacements) {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return text;
}

function updateContentLanguage(pageSpecificSetup) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = getTranslatedText(key);
        } else {
            el.textContent = getTranslatedText(key);
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = getTranslatedText(el.getAttribute('data-i18n-placeholder'));
    });
    
    document.getElementById('current-language-display').textContent = currentLanguage.toUpperCase();
    const mobileLangDisplay = document.getElementById('mobile-current-language-display');
    if (mobileLangDisplay) mobileLangDisplay.textContent = currentLanguage.toUpperCase();

    // Allow each page to run its own setup after language change
    if (typeof pageSpecificSetup === 'function') {
        pageSpecificSetup();
    }
}

function setupTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    };
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
    });
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            document.body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
        });
    }

    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function setupLanguageSwitch(pageSpecificSetup) {
    const languageToggleButton = document.getElementById('language-toggle-button');
    const mobileLanguageToggleButton = document.getElementById('mobile-language-toggle-button');
    
    const switchLang = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateContentLanguage(pageSpecificSetup);
        document.getElementById('language-dropdown')?.classList.add('hidden');
        document.getElementById('mobile-language-dropdown')?.classList.add('hidden');
    };

    languageToggleButton.addEventListener('click', () => document.getElementById('language-dropdown').classList.toggle('hidden'));
    
    if (mobileLanguageToggleButton) {
        mobileLanguageToggleButton.addEventListener('click', () => document.getElementById('mobile-language-dropdown').classList.toggle('hidden'));
    }
    
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchLang(e.target.dataset.lang);
        });
    });
}

function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('mobile-menu-open');
            const iconPath = mobileMenuButton.querySelector('path');
            const isOpen = mobileMenu.classList.contains('mobile-menu-open');
            iconPath.setAttribute('d', isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16');
        });
    }
}

// Main initialization function to be called by each page
function initializeSharedComponents(pageSpecificSetup) {
    setupTheme();
    setupLanguageSwitch(pageSpecificSetup);
    setupMobileMenu();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    // Initial content update
    updateContentLanguage(pageSpecificSetup);
}
