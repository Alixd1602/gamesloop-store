// --- البيانات والترجمة الشاملة ---
const translations = {
  ar: {
    storeName: "Games Loop",
    navPs: "بلايستيشن",
    navXbox: "إكس بوكس",
    navPc: "ألعاب PC",
    navIptv: "IPTV",
    navSubs: "الاشتراكات",
    psTitle: "🎮 ألعاب بلايستيشن (PS4 / PS5)",
    xboxTitle: "💚 ألعاب إكس بوكس (Home, Sign, Sign Share & Full Account)",
    pcTitle: "💻 ألعاب البي سي (Steam / PC)",
    iptvTitle: "📺 سيرفرات IPTV",
    subsTitle: "⚡ الاشتراكات الرقمية والذكاء الاصطناعي",
    helpHeader: "مساعدة ودعم",
    helpTitle: "اختر الجروب المطلوب للانضمام:",
    helpButton: "محتاج مساعدة؟",
    searchPlaceholder: "دور على لعبه أو سيرفر...",
    chooseOption: "اختر نوع التفعيل:",
    addToCart: "إضافة للسلة 🛒",
    cartTitle: "🛒 سلة الشراء",
    totalPrice: "الإجمالي:",
    checkoutWhatsapp: "إتمام الطلب عبر واتساب 💬",
    emptyCart: "السلة فارغة حالياً",
    navTopup: "شحن ألعاب",
    topupTitle: "💎 شحن عملات الألعاب والبطاقات",
    
    // ترجمة الفوتر
    footerDesc: "متجر إلكتروني يوفر لك: ألعاب إكس بوكس وبلايستيشن واشتراكاتهم مثل الجيم باس والبلس، ومتوفر كل خدمات IPTV لمشاهدة الأفلام والمسلسلات والرياضة بضمان مضمون 100%.",
    footerPaymentTitle: "طرق الدفع المتاحة 💳",
    vodafone: "🟢 فودافون كاش",
    instapay: "🟣 إنستاباي & تيلدا",
    binance: "🟡 باينانس",
    footerContactTitle: "للتواصل والدعم 24/7",
    hotline: "📞 الخط الساخن",
    emailText: "✉️ الإيميل",
    warrantyText: "🛡️ ضمان كامل على كافة العمليات والتفعيلات",
    copyright: "جميع الحقوق محفوظة © 2026 Games Loop - Abo Fares"
  },
  en: {
    storeName: "Games Loop",
    navPs: "PlayStation",
    navXbox: "Xbox",
    navPc: "PC Games",
    navIptv: "IPTV",
    navSubs: "Subscriptions",
    psTitle: "🎮 PlayStation Games (PS4 / PS5)",
    xboxTitle: "💚 Xbox Games (Home, Sign, Sign Share & Full Account)",
    pcTitle: "💻 PC Games (Steam)",
    iptvTitle: "📺 IPTV Servers",
    subsTitle: "⚡ Subscriptions & AI",
    helpHeader: "Help & Support",
    helpTitle: "Choose a group to join:",
    helpButton: "Need Help?",
    searchPlaceholder: "Search for a game...",
    chooseOption: "Select Activation Type:",
    addToCart: "Add to Cart 🛒",
    cartTitle: "🛒 Shopping Cart",
    totalPrice: "Total:",
    checkoutWhatsapp: "Checkout via WhatsApp 💬",
    emptyCart: "Cart is currently empty",
    navTopup: "Game Top-Up",
    topupTitle: "💎 In-Game Currencies & Top-Up",
    
    // Footer Translation in English
    footerDesc: "An online store providing Xbox and PlayStation games, subscriptions like Game Pass and PS Plus, and IPTV services for movies, series, and sports with a 100% guarantee.",
    footerPaymentTitle: "Available Payment Methods 💳",
    vodafone: "🟢 Vodafone Cash",
    instapay: "🟣 InstaPay & Telda",
    binance: "🟡 Binance",
    footerContactTitle: "Contact & Support 24/7",
    hotline: "📞 Hotline",
    emailText: "✉️ Email",
    warrantyText: "🛡️ Full warranty on all operations and activations",
    copyright: "All Rights Reserved © 2026 Games Loop - Abo Fares"
  }
};

let currentLang = 'ar';
let cart = [];
let selectedProduct = null;
let selectedOption = null;

// 1. ألعاب بلايستيشن (Primary, Secondary, Full Account)
const psGamesData = [
  {
    id: 101,
    name: "EA SPORTS FC 27",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash",
    image: "games photos/fc 27.jpg",
    options: [
      { name: "Standard - Primary 5", price: 1900 },
      { name: "Standard - Primary 4", price: 800 },
      { name: "Standard - Secondary", price: 1000 },
      { name: "Standard - Full Account", price: 3000 }
    ]
  },
  {
    id: 102,
    name: "Grand Theft Auto VI",
    category: "PlayStation 5",
    badgeText: { ar: "طلب مسبق ⏳", en: "Pre-order ⏳" },
    badgeType: "yellow",
    image: "games photos/gta 6.jpg",
    options: [
      { name: "Standard Primary", price: 2000 },
      { name: "Standard Secondary", price: 1600 },
      { name: "Ultimate Primary", price: 2700 },
      { name: "Ultimate Secondary", price: 2400 },
      { name: "Full Account", price: 5500 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
  {
    id: 105, // رقم مميز غير مكرر
    name: "اسم لعبة بلايستيشن",
    category: "PlayStation 5 / PS4",
    badgeText: { ar: "متوفر الآن ⚡", en: "Available ⚡" },
    badgeType: "flash", // الخيارات: flash / yellow / green
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Primary 5", price: 0 },
      { name: "Standard - Primary 4", price: 0 },
      { name: "Standard - Secondary", price: 0 }
    ]
  },
];

// 2. ألعاب إكس بوكس (Home, Sign, Sign Share, Full Account)
const xboxGamesData = [
  {
    id: 201,
    name: "EA SPORTS FC 27 Xbox",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "flash",
    image: "games photos/fc 27.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 3000 },
      { name: "Standard - Home (هوم)", price: 1900 },
      { name: "Standard - Sign (ساين)", price: 1000 },
      { name: "Standard - Sign Share (ساين شير)", price: 500 }
    ]
  },
  {
    id: 202,
    name: "Cyberpunk 2077 Xbox",
    category: "Xbox Series X|S",
    badgeText: { ar: "عرض مميز", en: "Special Offer" },
    badgeType: "green",
    image: "games photos/Cyberpunk 2077.jpg",
    options: [
      { name: "Full Account (حساب كامل)", price: 2500 },
      { name: "Home (هوم)", price: 1500 },
      { name: "Sign (ساين)", price: 800 },
      { name: "Sign Share (ساين شير)", price: 400 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
  {
    id: 205, // رقم مميز غير مكرر
    name: "اسم لعبة إكس بوكس",
    category: "Xbox One & Series X|S",
    badgeText: { ar: "تسليم فوري", en: "Instant" },
    badgeType: "green",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Standard - Full Account (حساب كامل)", price: 0 },
      { name: "Standard - Home (هوم)", price: 0 },
      { name: "Standard - Sign (ساين)", price: 0 },
      { name: "Standard - Sign Share (ساين شير)", price: 0 }
    ]
  },
];

// 3. ألعاب PC
const pcGamesData = [
  {
    id: 301,
    name: "Call of Duty Modern Warfare 4",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/Call of Duty Modern Warfare 4.jpg",
    options: [
      { name: "Steam Code", price: 2200 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  },
  {
    id: 305, // رقم مميز غير مكرر
    name: "اسم لعبة البي سي",
    category: "Steam PC",
    badgeText: { ar: "طلب مسبق", en: "Pre-order" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "Steam Code", price: 0 }
    ]
  }
];

// 4. سيرفرات الـ IPTV
const iptvData = [
  {
    id: 401,
    name: "سيرفر نوفا (Nova IPTV)",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/iptv.jpg",
    options: [
      { name: "3 أشهر", price: 150 },
      { name: "6 أشهر", price: 250 },
      { name: "12 شهر", price: 400 },
      { name: "24 شهر", price: 700 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  },
  {
    id: 405, // رقم مميز غير مكرر
    name: "اسم سيرفر IPTV",
    category: "أعلى ثبات واستقرار",
    badgeText: { ar: "الأكثر طلباً 🔥", en: "Most Popular 🔥" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "3 أشهر", price: 0 },
      { name: "6 أشهر", price: 0 },
      { name: "12 شهر", price: 0 }
    ]
  }
];

// 5. الاشتراكات والذكاء الاصطناعي
const subsData = [
  {
    id: 501,
    name: "Xbox Game Pass Ultimate",
    category: "Xbox / PC Pass",
    badgeText: { ar: "متفعل حالاً ⚡", en: "Active Now ⚡" },
    badgeType: "flash",
    image: "games photos/game pass.jpg",
    options: [
      { name: "شهرين هوم التميت", price: 350 },
      { name: "3 أشهر التميت", price: 600 }
    ]
  },
  {
    id: 502,
    name: "PlayStation Plus Essential / Extra",
    category: "اشتراكات رسمية بخصم 30%",
    badgeText: { ar: "خصم خاص 30% 🎁", en: "30% OFF 🎁" },
    badgeType: "yellow",
    image: "games photos/ps plus.jpg",
    options: [
      { name: "اشتراك شهر", price: 400 },
      { name: "اشتراك 3 أشهر", price: 950 }
    ]
  },
  {
    id: 503,
    name: "Gemini Pro AI Subscription",
    category: "حسابك الشخصي",
    badgeText: { ar: "تفعيل رسمي", en: "Official AI" },
    badgeType: "yellow",
    image: "games photos/gemini pro.jpg",
    options: [
      { name: "اشتراك 6 أشهر", price: 450 },
      { name: "اشتراك 18 شهر", price: 950 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  },
  {
    id: 505, // رقم مميز غير مكرر
    name: "اسم الاشتراك الرقمي",
    category: "نوع الاشتراك",
    badgeText: { ar: "خصم خاص 🎁", en: "Special Offer 🎁" },
    badgeType: "yellow",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "اشتراك شهر", price: 0 },
      { name: "اشتراك 3 أشهر", price: 0 }
    ]
  }
];
// 6. شحن عملات الألعاب (Fortnite, Rocket League, Overwatch, etc.)
const topupData = [
  {
    id: 601,
    name: "Fortnite V-Bucks & Crew",
    category: "شحن فورتنايت (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/vbucks.jpg",
    options: [
      { name: "Fortnite Crew (اشتراك الكرو)", price: 250 },
      { name: "1,000 V-Bucks", price: 300 },
      { name: "2,800 V-Bucks", price: 700 },
      { name: "5,000 V-Bucks", price: 1200 },
      { name: "13,500 V-Bucks", price: 2800 }
    ]
  },
  {
    id: 602,
    name: "Rocket League Credits",
    category: "كريدتس روكت ليج",
    badgeText: { ar: "تسليم سريع 🏎️", en: "Fast Delivery 🏎️" },
    badgeType: "green",
    image: "games photos/rlcredits.jpg",
    options: [
      { name: "500 Credits", price: 180 },
      { name: "1,100 Credits", price: 350 },
      { name: "3,000 Credits", price: 900 },
      { name: "6,500 Credits", price: 1800 }
    ]
  },
  {
    id: 603,
    name: "Overwatch Coins",
    category: "عملات أوفرواوتش 2",
    badgeText: { ar: "شحن آمن 🎯", en: "Safe Top-Up 🎯" },
    badgeType: "yellow",
    image: "games photos/owcoins.jpg",
    options: [
      { name: "500 Coins", price: 200 },
      { name: "1,000 Coins (+100 Bonus)", price: 380 },
      { name: "2,200 Coins (+200 Bonus)", price: 750 },
      { name: "5,700 Coins (+700 Bonus)", price: 1800 },
      { name: "11,600 Coins (+1600 Bonus)", price: 3500 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
  {
    id: 605, // رقم مميز غير مكرر
    name: "اسم اللعبة أو العملة",
    category: "شحن مباشر (جميع المنصات)",
    badgeText: { ar: "شحن مباشر ⚡", en: "Instant Top-Up ⚡" },
    badgeType: "flash",
    image: "games photos/اسم_الصورة.jpg",
    options: [
      { name: "الفئة الأولى", price: 0 },
      { name: "الفئة الثانية", price: 0 },
      { name: "الفئة الكبرى", price: 0 }
    ]
  },
];

function renderSection(data, containerId, filterText = "") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = data.filter(item => 
    item.name.toLowerCase().includes(filterText.toLowerCase()) || 
    item.category.toLowerCase().includes(filterText.toLowerCase())
  );

  container.innerHTML = filtered.map(item => {
    const minPrice = Math.min(...item.options.map(o => o.price));
    return `
      <div class="game-card" onclick="openProductModal(${item.id})">
        <div class="card-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'">
          <span class="badge ${item.badgeType}">${item.badgeText[currentLang]}</span>
        </div>
        <div class="card-details">
          <h3>${item.name}</h3>
          <p class="platform">${item.category}</p>
          <p class="price">تبدأ من: ${minPrice} EGP</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderAll(filterText = "") {
  renderSection(psGamesData, 'ps-grid', filterText);
  renderSection(xboxGamesData, 'xbox-grid', filterText);
  renderSection(pcGamesData, 'pc-grid', filterText);
  renderSection(iptvData, 'iptv-grid', filterText);
  renderSection(subsData, 'subs-grid', filterText);
  renderSection(topupData, 'topup-grid', filterText);
}

document.getElementById('search-input').addEventListener('input', (e) => renderAll(e.target.value));

window.openProductModal = function(productId) {
  const allProducts = [...psGamesData, ...xboxGamesData, ...pcGamesData, ...iptvData, ...subsData, ...topupData];
  selectedProduct = allProducts.find(p => p.id === productId);
  if (!selectedProduct) return;

  document.getElementById('modal-product-title').textContent = selectedProduct.name;
  document.getElementById('modal-product-cat').textContent = selectedProduct.category;
  document.getElementById('modal-product-img').src = selectedProduct.image;

  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = selectedProduct.options.map((opt, index) => `
    <button class="option-btn ${index === 0 ? 'selected' : ''}" onclick="selectOption(${index})">
      <span>${opt.name}</span>
      <span>${opt.price} EGP</span>
    </button>
  `).join('');

  selectOption(0);
  document.getElementById('product-modal').style.display = 'flex';
};

window.selectOption = function(index) {
  selectedOption = selectedProduct.options[index];
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });
  document.getElementById('modal-selected-price').textContent = `${selectedOption.price} EGP`;
};

document.getElementById('close-product-btn').addEventListener('click', () => {
  document.getElementById('product-modal').style.display = 'none';
});

document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  if (!selectedProduct || !selectedOption) return;
  cart.push({
    id: Date.now(),
    productName: selectedProduct.name,
    optionName: selectedOption.name,
    price: selectedOption.price
  });
  updateCartUI();
  document.getElementById('product-modal').style.display = 'none';
});

function updateCartUI() {
  document.getElementById('cart-count').textContent = cart.length;
  const cartList = document.getElementById('cart-items-list');
  if (cart.length === 0) {
    cartList.innerHTML = `<p style="text-align:center; color:#aaa;">${translations[currentLang].emptyCart}</p>`;
    document.getElementById('cart-total-price').textContent = `0 EGP`;
    return;
  }

  let total = 0;
  cartList.innerHTML = cart.map(item => {
    total += item.price;
    return `
      <div class="cart-item">
        <div>
          <strong style="color:#fff; font-size:13px;">${item.productName}</strong>
          <p style="color:#aaa; font-size:12px;">${item.optionName}</p>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="color:#00d4ff; font-weight:bold; font-size:13px;">${item.price} EGP</span>
          <button class="remove-item-btn" onclick="removeFromCart(${item.id})">&times;</button>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('cart-total-price').textContent = `${total} EGP`;
}

window.removeFromCart = function(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartUI();
};

const cartModal = document.getElementById('cart-modal');
document.getElementById('open-cart-btn').addEventListener('click', () => cartModal.style.display = 'flex');
document.getElementById('close-cart-btn').addEventListener('click', () => cartModal.style.display = 'none');

document.getElementById('checkout-whatsapp-btn').addEventListener('click', () => {
  if (cart.length === 0) return;
  let text = `مرحباً Games Loop 🎮، أريد إتمام الطلب التالي:\n\n`;
  let total = 0;
  cart.forEach((item, index) => {
    text += `${index + 1}. ${item.productName} (${item.optionName}) - ${item.price} EGP\n`;
    total += item.price;
  });
  text += `\nالإجمالي: ${total} EGP`;
  window.open(`https://wa.me/201027689995?text=${encodeURIComponent(text)}`, '_blank');
});

// تبديل اللغة الشامل
document.getElementById('lang-switch-btn').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const root = document.getElementById('html-root');
  root.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  root.setAttribute('lang', currentLang);
  document.getElementById('lang-switch-btn').textContent = currentLang === 'ar' ? 'EN' : 'AR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
  });

  renderAll();
  updateCartUI();
});

const helpPopup = document.getElementById('help-popup');
document.getElementById('help-toggle-btn').addEventListener('click', () => helpPopup.style.display = helpPopup.style.display === 'block' ? 'none' : 'block');
document.getElementById('close-help-btn').addEventListener('click', () => helpPopup.style.display = 'none');

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  updateCartUI();
});