import { ProjectItem, ServiceItem, TestimonialItem, FAQItem, WorkStepItem } from '../types';

export const COMPANY_INFO = {
  nameAr: 'مؤسسة تميز الإنجاز للمقاولات العامة',
  nameEn: 'Tamiz Al-Injaz General Contracting Establishment',
  shortNameAr: 'تميز الإنجاز للمقاولات',
  shortNameEn: 'Tamiz Al-Injaz Contracting',
  sloganAr: 'نبني المستقبل بأعلى معايير التميز والإنجاز',
  sloganEn: 'Building the Future with the Highest Standards of Excellence & Achievement',
  email: 'info@tazco.org',
  phone: '+966 595366444',
  whatsapp: '+966591230668',
  addressAr: 'المملكة العربية السعودية - الأحساء / الدمام',
  addressEn: 'Al-Ahsa / Al-dammam, Kingdom of Saudi Arabia',
  crNumber: '7021224642',
  experienceYears: 15,
  completedProjects: 280,
  activeProjects: 18,
  engineersCount: 1,
  satisfactionRate: '99.4%',
  generalManagerAr: 'عبدالعزيز بن محمد بن عبدالله الهبوب',
  generalManagerEn: 'Abdulaziz bin Mohammed Al-Haboob',
  leadEngineerAr: 'م. عبدالصمد كمال عبدالرؤف دخيل',
  leadEngineerEn: 'Eng. Abdulsamad Kamal Abdulraouf Dakheel',
  facebook: 'https://www.facebook.com/share/1BhXzvTFdw/',
  instagram: 'https://www.instagram.com/tmyaz_alanjaz_?igsh=MWY5OWpkazE5bDRzaw==',
  twitter: 'https://x.com/tmyzalanjaz',
  googleMaps: 'https://share.google/K1RvPw6opW60H9Jvt',
  workingHoursAr: 'السبت - الخميس: 9:٠٠ ص - 9:٠٠ م',
  workingHoursEn: 'Sat - Thu: 9:00 AM - 9:00 PM',
};

export const LEADERSHIP = [
  {
    roleAr: 'المدير العام للمؤسسة',
    roleEn: 'General Manager',
    nameAr: 'عبدالعزيز بن محمد بن عبدالله الهبوب',
    nameEn: 'Abdulaziz bin Mohammed Al-Haboob',
    descAr: 'القيادة الإدارية والاستراتيجية، تطوير الأعمال، ومتابعة تنفيذ أعلى معايير الالتزام التعاقدي ورضا العملاء.',
    descEn: 'Strategic institutional leadership, business expansion, and contractual excellence oversight.',
    iconName: 'Building2'
  },
  {
    roleAr: 'مدير المشاريع',
    roleEn: 'Projects Director & Lead Engineer',
    nameAr: 'م. عبدالصمد كمال عبدالرؤف دخيل',
    nameEn: 'Eng. Abdulsamad Kamal Abdulraouf Dakheel',
    descAr: 'المسؤول الهندسي الميداني القائم على إدارة وتنفيذ كافة المشاريع، الإشراف اليومي، ومطابقة كود البناء السعودي (SBC).',
    descEn: 'Lead project director and resident engineer supervising all site construction, technical quality control, and SBC compliance.',
    iconName: 'HardHat'
  }
];

export const HERO_STATS = [
  { value: '+15', labelAr: 'عاماً من الخبرة والإنجاز', labelEn: 'Years of Experience' },
  { value: '+280', labelAr: 'مشروع منجز بنجاح', labelEn: 'Completed Projects' },
  { value: '100%', labelAr: 'التزام بالمواصفات والمواعيد', labelEn: 'On-time & Spec Delivery' },
  { value: 'SBC', labelAr: 'مطابقة لكود البناء السعودي', labelEn: 'Saudi Building Code (SBC)' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-contracting',
    title: {
      ar: 'المقاولات العامة والإنشاءات الكبرى',
      en: 'General Contracting & Turnkey Construction'
    },
    shortDesc: {
      ar: 'تنفيذ شامل للمباني السكنية، التجارية، والحكومية من الحفر وتأسيس الهيكل الإنشائي حتى التسليم على المفتاح.',
      en: 'Turnkey construction of residential, commercial, and government complexes from excavation to handover.'
    },
    fullDesc: {
      ar: 'نقدم حلولاً متكاملة لتنفيذ المنشآت الخرسانية والمعدنية بأعلى معايير كود البناء السعودي. يتولى فريقنا الهندسي المتخصص إدارة كافة المراحل الإنشائية بأحدث المعدات وأفضل ممارسات إدارة المشاريع الهندسية.',
      en: 'We provide integrated civil and structural engineering solutions strictly compliant with the Saudi Building Code, utilizing state-of-the-art construction equipment and rigorous PM standards.'
    },
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=8http',
    features: {
      ar: [
        'تنفيذ الهياكل الخرسانية المسلحة والمعدنية (Steel Structure)',
        'حفر وتدعيم التربة والأساسات العميقة واللبشة',
        'بناء المجمعات السكنية، الأبراج التجارية، والمستودعات الضخمة',
        'التزام صارم بالجدول الزمني المعتمد وبنود السلامة المهنية'
      ],
      en: [
        'Reinforced concrete & steel structure erection',
        'Excavation, shoring, soil stabilization & raft foundations',
        'Residential compounds, commercial towers & industrial warehouses',
        'Strict milestone delivery & occupational safety standards'
      ]
    },
    deliverables: {
      ar: ['مخططات As-Built متكاملة', 'تقارير فحص الجودة والخرسانة الدورية', 'شهادة إتمام البناء ومطابقة كود البناء السعودي'],
      en: ['Comprehensive As-Built Drawings', 'Regular Concrete & QA Lab Reports', 'Completion Certificate & SBC Compliance']
    }
  },
  {
    id: 'interior-exterior-finishing',
    title: {
      ar: 'التشطيبات الفاخرة والديكور المعماري',
      en: 'Luxury Fit-Out & Architectural Finishing'
    },
    shortDesc: {
      ar: 'تشطيبات داخلية وخارجية راقية بأرقى الخامات، أعمال الرخام، الواجهات الزجاجية، والأخشاب الديكورية.',
      en: 'High-end interior & exterior fit-out, natural marble, curtain walls, and custom bespoke woodwork.'
    },
    fullDesc: {
      ar: 'نحول التصاميم المعمارية إلى واقع ساحر يجمع بين الفخامة والعملية، من خلال تنفيذ واجهات الكلادينج والستركشر والجي ار سي، وأعمال الأرضيات الرخامية، والأسقف المعلقة، والإنارة الذكية.',
      en: 'Transforming architectural concepts into inspiring spaces with curtain walls, GRC facades, Italian marble, custom acoustic ceilings, and integrated architectural lighting.'
    },
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: {
      ar: [
        'توريد وتركيب الرخام الإيطالي والإسباني والحجر الطبيعي',
        'تنفيذ الواجهات الزجاجية Curtain Wall والـ GRC والكلادينج',
        'أعمال الجبس بورد الحديث والدهانات الديكورية المتميزة',
        'أعمال النجارة الفاخرة والأبواب التخصصية وعزل الصوت'
      ],
      en: [
        'Premium natural stone & Italian marble installation',
        'Structural curtain glass, GRC facade engineering & cladding',
        'Modern gypsum ceilings, acoustic solutions & luxury paint',
        'Bespoke architectural joinery & soundproof doors'
      ]
    },
    deliverables: {
      ar: ['نماذج واعتمادات العينات (Mock-ups)', 'ضمان شامل على العوازل والتشطيبات', 'فحص واختبار دقيق للمواد'],
      en: ['Material Sample Approvals & Mock-ups', 'Comprehensive Insulation & Finishing Warranty', 'Strict Quality Lab Verifications']
    }
  },
  {
    id: 'infrastructure-works',
    title: {
      ar: 'البنية التحتية والشبكات والمرافق',
      en: 'Infrastructure & Utility Networks'
    },
    shortDesc: {
      ar: 'تنفيذ شبكات المياه، الصرف الصحي، الكهرباء، تصريف السيول، وإنشاء الطرق والساحات الخارجية.',
      en: 'Execution of water, sewage, storm drainage, power networks, asphalt paving, and site development.'
    },
    fullDesc: {
      ar: 'خبرة عريضة في تمديد وتنفيذ شبكات البنية التحتية المتكاملة للمخططات والمشاريع الكبرى بأعلى المعايير الهندسية وأحدث تقنيات الفحص الهيدروليكي والاختبارات الجيوتقنية.',
      en: 'Proven capability in executing utility infrastructure for subdivisions and major developments with state-of-the-art hydraulic testing and geotechnical compliance.'
    },
    iconName: 'Network',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    features: {
      ar: [
        'شبكات مياه الشرب وشبكات الإطفاء المعتمدة من الدفاع المدني',
        'خطوط الصرف الصحي ومحطات الرفع وغرف التفتيش',
        'شبكات تصريف مياه الأمطار ودرء أخطار السيول',
        'أعمال السفلتة، الأرصفة، وإنارة الطرق الحديثة'
      ],
      en: [
        'Potable water & Civil Defense approved fire-fighting mains',
        'Sewer trunk lines, lift stations & inspection chambers',
        'Stormwater drainage networks & flood mitigation works',
        'Asphalt paving, curbing, and smart street lighting'
      ]
    },
    deliverables: {
      ar: ['اختبارات الضغط والتدفق المعتمدة', 'مخططات البنية التحتية الجغرافية GIS', 'تسليم الجهات الحكومية والمحلية'],
      en: ['Hydrostatic Pressure Test Certificates', 'GIS-ready Utility Infrastructure Maps', 'Municipal & Authority Handover Approvals']
    }
  },
  {
    id: 'renovation-restoration',
    title: {
      ar: 'الترميم والتطوير وإعادة التأهيل',
      en: 'Renovation, Retrofitting & Rehabilitation'
    },
    shortDesc: {
      ar: 'تحديث وترميم المباني القائمة، تدعيم الأعمدة والقواعد، وتحويل العقارات القديمة لمنشآت عصرية.',
      en: 'Modernizing existing structures, column & foundation carbon-fiber strengthening, and building retrofits.'
    },
    fullDesc: {
      ar: 'حلول هندسية متطورة لمعالجة الشروخ والعيوب الإنشائية وتدعيم المباني باستخدام ألياف الكربون (CFRP) والقمصان الخرسانية، وإعادة تصميم الواجهات والمساحات الداخلية بأحدث الطرز المعمارية.',
      en: 'Advanced structural rehabilitation using carbon fiber wraps (CFRP), concrete jacketing, structural underpinning, and comprehensive architectural modernization.'
    },
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    features: {
      ar: [
        'تدعيم العناصر الإنشائية الحاملة ومعالجة هبوط التربة',
        'علاج صدأ الحديد والشروخ الإنشائية بمواد إيبوكسية متخصصة',
        'تجديد الواجهات الخارجية بالكامل وعزل الأسطح والحمامات',
        'إعادة توزيع وتقسيم المساحات الداخلية لتلبية الاحتياجات الجديدة'
      ],
      en: [
        'Load-bearing member strengthening & foundation underpinning',
        'Structural epoxy crack injection & corrosion repair',
        'Complete facade recladding & thermal/waterproof retrofitting',
        'Interior spatial reconfiguration & modernization'
      ]
    },
    deliverables: {
      ar: ['تقرير الفحص الإنشائي الهندسي قبل وبعد', 'شهادة السلامة الإنشائية المعتمدة', 'ضمانات المواد الإيبوكسية والعوازل'],
      en: ['Pre & Post Structural Integrity Engineering Report', 'Certified Structural Safety Certificate', 'Insulation & Chemical Warranty']
    }
  },
  {
    id: 'mep-works',
    title: {
      ar: 'الأعمال الكهروميكانيكية وأنظمة التكييف MEP',
      en: 'MEP Systems, HVAC & Fire Protection'
    },
    shortDesc: {
      ar: 'تصميم وتنفيذ أنظمة التكييف المركزي VRF وChiller، أعمال الكهرباء، السباكة، والأنظمة الذكية.',
      en: 'Engineering and installation of HVAC VRF/Chillers, power distribution, plumbing, and Smart Building Automation.'
    },
    fullDesc: {
      ar: 'تنفيذ متكامل لكافة الأعمال الميكانيكية والكهربائية والصحية، وأنظمة الإنذار والإطفاء المتوافقة مع متطلبات كود البناء السعودي والدفاع المدني.',
      en: 'Turnkey execution of mechanical, electrical, and plumbing engineering, along with fire alarm and suppression systems fully compliant with Civil Defense standards.'
    },
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    features: {
      ar: [
        'أنظمة التكييف المركزي والـ VRF والدكت المعزول',
        'لوحات التوزيع الكهربائية وأنظمة المولدات والطاقة الاحتياطية',
        'أنظمة إطفاء الحريق بالرش الآلي وغاز FM200',
        'أنظمة التيار الخفيف، كاميرات المراقبة والتحكم في الدخول'
      ],
      en: [
        'Central HVAC, VRF systems & insulated ductwork',
        'Main distribution boards, generators & UPS systems',
        'Automatic fire sprinkler & FM200 gas suppression systems',
        'Low-voltage networks, CCTV & access control systems'
      ]
    },
    deliverables: {
      ar: ['مخططات الشوب دروينج المعتمدة', 'تقارير الموازنة الهوائية والمائية TAB', 'شهادات اعتماد الدفاع المدني'],
      en: ['Approved MEP Shop Drawings', 'Testing & Balancing (TAB) Verification Reports', 'Civil Defense Approval Certificates']
    }
  },
  {
    id: 'project-management',
    title: {
      ar: 'إدارة المشاريع والإشراف الهندسي',
      en: 'Project Management & Engineering Supervision'
    },
    shortDesc: {
      ar: 'متابعة مراحل التنفيذ، مراقبة الجودة، تدقيق الكميات، وضمان تسليم المشروع وفق الميزانية المحددة.',
      en: 'On-site engineering supervision, QA/QC audits, quantity surveying, and rigorous budget/time management.'
    },
    fullDesc: {
      ar: 'نوفر كادراً هندسياً استشارياً متخصصاً لمراقبة سير العمل الميداني يومياً، وإعداد التقارير الفنية المستمرة لضمان مطابقة التنفيذ لأعلى المواصفات واللوائح المعتمدة.',
      en: 'Dedicated senior resident engineers ensuring strict field compliance with blueprints, material specs, and milestone budgeting through daily digital progress reporting.'
    },
    iconName: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    features: {
      ar: [
        'إدارة الجداول الزمنية باستخدام Primavera و MS Project',
        'حصر الكميات وتدقيق المستخلصات المالية للمشروع',
        'مراقبة الجودة وفحص المواد الموردة للموقع',
        'تقارير دورية رقمية مصورة لمالك المشروع'
      ],
      en: [
        'Milestone scheduling via Primavera P6 & MS Project',
        'Quantity surveying & interim contractor payment audits',
        'Rigorous material receiving inspection (MIR/RFI)',
        'Comprehensive digital progress dashboards & photo logs'
      ]
    },
    deliverables: {
      ar: ['تقارير الإنجاز الأسبوعية والشهرية', 'سجل إدارة المخاطر والجودة', 'الإغلاق المالي والفني النهائي'],
      en: ['Weekly & Monthly Progress Milestone Reports', 'Risk Management & QA/QC Logs', 'Final Project Financial & Technical Closeout']
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'tamiz-tower-riyadh',
    title: {
      ar: 'برج الأعمال والضيافة - الرياض',
      en: 'Business & Hospitality Commercial Tower - Riyadh'
    },
    category: 'commercial',
    location: { ar: 'الرياض - حي العليا', en: 'Riyadh - Al Olaya District' },
    area: '18,500 م²',
    duration: { ar: '22 شهراً', en: '22 Months' },
    year: '2025',
    client: { ar: 'شركة الاستثمار العقاري الحديث', en: 'Modern Real Estate Investment Co.' },
    description: {
      ar: 'تنفيذ كامل للهيكل الإنشائي والواجهات الزجاجية المتطورة مع أنظمة تكييف مركزي وتشطيبات إدارية فائقة الفخامة.',
      en: 'Turnkey structural, glass curtain facade, central VRF HVAC, and premium corporate fit-out execution.'
    },
    image: '/src/assets/images/tamiz_anjaz_hero_1787128047869.jpg',
    scope: {
      ar: ['أعمال خرسانية 14 طابقاً', 'واجهات زجاجية مزدوجة معزولة', 'أنظمة MEP ذكية متكاملة', 'مواقف سيارات هيدروليكية'],
      en: ['14-Story Reinforced Concrete Core', 'Double-glazed Thermal Curtain Wall', 'Integrated Smart MEP Automation', 'Automated Hydraulic Parking']
    },
    featured: true
  },
  {
    id: 'luxury-villa-al-nakheel',
    title: {
      ar: 'قصر النخيل السكني الفاخر - الرياض',
      en: 'Al-Nakheel Luxury Residential Palace - Riyadh'
    },
    category: 'residential',
    location: { ar: 'الرياض - حي النخيل', en: 'Riyadh - Al-Nakheel District' },
    area: '3,200 م²',
    duration: { ar: '14 شهراً', en: '14 Months' },
    year: '2025',
    client: { ar: 'عميل خاص', en: 'Private Client' },
    description: {
      ar: 'بناء وتشطيب قصر مودرن متكامل يضم مساحات مفتوحة، حديقة معلقة، مسبح خارجي متدرج، وتشطيبات رخام ترافنتينو طبيعي.',
      en: 'Complete construction and fit-out of an ultra-modern luxury palace featuring travertine marble, infinity pool, and smart home automation.'
    },
    image: '/src/assets/images/luxury_villa_project_1787128061305.jpg',
    scope: {
      ar: ['إنشاء تسليم مفتاح سوبر ديلوكس', 'أرضيات رخام إيطالي وبيسين إنفينيتي', 'نظام سمارت هوم للتحكم الكامل', 'لاندسكيب مع إضاءة معمارية'],
      en: ['Super Deluxe Turnkey Construction', 'Italian Marble & Infinity Pool', 'Full Smart Home Integration', 'Bespoke Landscape Architecture']
    },
    featured: true
  },
  {
    id: 'jeddah-commercial-complex',
    title: {
      ar: 'مجمع واجهة البحر التجاري - جدة',
      en: 'Seafront Commercial Plaza - Jeddah'
    },
    category: 'commercial',
    location: { ar: 'جدة - طريق الكورنيش', en: 'Jeddah - Corniche Road' },
    area: '12,000 م²',
    duration: { ar: '16 شهراً', en: '16 Months' },
    year: '2024',
    client: { ar: 'مجموعة الضيافة والتجارة', en: 'Hospitality & Commercial Group' },
    description: {
      ar: 'مجمع تجاري ومطاعم مفتوحة مطلة على البحر، شملت الأعمال البنية التحتية، الإنشاءات الخرسانية المقاومة للأملاح، والواجهات المودرن.',
      en: 'Commercial & dining plaza with marine-grade structural concrete, corrosion-resistant framing, and open architectural terraces.'
    },
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    scope: {
      ar: ['خرسانة بحرية مقاومة للأملاح', 'أعمال اللاندسكيب والنافورات التفاعلية', 'شبكات التغذية والإطفاء', 'تجهيز المساحات التجارية'],
      en: ['Marine-Grade High Strength Concrete', 'Interactive Fountains & Plazas', 'Fire & Potable Water Infrastructure', 'Tenant Fit-out Preparations']
    },
    featured: true
  },
  {
    id: 'corporate-fitout-khobar',
    title: {
      ar: 'المقر الرئيسي لشركة طاقة واستشارات - الخبر',
      en: 'Energy & Consulting HQ Fit-Out - Khobar'
    },
    category: 'fitout',
    location: { ar: 'الخبر - برج الشاطئ', en: 'Khobar - Al Shati Tower' },
    area: '4,500 م²',
    duration: { ar: '6 أشهر', en: '6 Months' },
    year: '2024',
    client: { ar: 'شركة الشرق للطاقة', en: 'Eastern Energy Partners' },
    description: {
      ar: 'تنفيذ أعمال التشطيبات والديكور الداخلي لثلاثة طوابق إدارية كاملة مع قاعات اجتماعات صوتية ذكية وغرف خوادم مؤمنة.',
      en: 'Turnkey interior design and fit-out across three executive floors including acoustic conference suites and tier-3 server rooms.'
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    scope: {
      ar: ['قواطع زجاجية عازلة للصوت', 'أرضيات موكيت تخصصية ورخام', 'أنظمة تحكم بالدخول وكاميرات', 'شبكات تكييف وتوزيع هواء خفي'],
      en: ['Acoustic Glass Partitions', 'Executive Raised Flooring & Carpets', 'Biometric Access Control', 'Concealed Duct HVAC Distribution']
    }
  },
  {
    id: 'residential-compound-dammam',
    title: {
      ar: 'مجمع واحة السكن الراقي - الدمام',
      en: 'Oasis Luxury Residential Compound - Dammam'
    },
    category: 'residential',
    location: { ar: 'الدمام - حي الشاطئ الغربي', en: 'Dammam - West Beach' },
    area: '24,000 م²',
    duration: { ar: '20 شهراً', en: '20 Months' },
    year: '2023',
    client: { ar: 'شركة الإسكان والتطوير العقاري', en: 'Housing & Urban Development Co.' },
    description: {
      ar: 'إنشاء 28 فيلا سكنية مستقلة مع نادي صحي ومسابح ومساحات خضراء وشبكة طرق وبنية تحتية داخلية متكاملة.',
      en: 'Construction of 28 standalone luxury villas with clubhouse, communal sports courts, and underground utility network.'
    },
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    scope: {
      ar: ['إنشاء 28 فيلا تسليم مفتاح', 'تمديد شبكات البنية التحتية والكهرباء', 'إنشاء النادي الترفيهي والمسبح', 'أعمال الأسفلت والإنارة'],
      en: ['28 Turnkey Luxury Villas', 'Underground Utilities & Fiber Substation', 'Recreational Clubhouse & Sports Center', 'Asphalt Roads & Street Lighting']
    }
  },
  {
    id: 'heritage-restoration-riyadh',
    title: {
      ar: 'مشروع ترميم وتطوير مبنى تراثي وتجاري - الرياض',
      en: 'Heritage & Commercial Adaptive Restoration - Riyadh'
    },
    category: 'renovation',
    location: { ar: 'الرياض - وسط المدينة التاريخي', en: 'Riyadh - Historic Downtown' },
    area: '5,800 م²',
    duration: { ar: '10 أشهر', en: '10 Months' },
    year: '2024',
    client: { ar: 'هيئة تطوير المعالم التراثية', en: 'Heritage Landmark Authority' },
    description: {
      ar: 'تدعيم الأعمدة والقواعد وحقن الشروخ مع الحفاظ على الهوية المعمارية وتجهيز المبنى بأنظمة سلامة وإطفاء حديثة.',
      en: 'Carbon fiber column retrofitting, structural crack injection, and integration of invisible modern MEP while preserving heritage aesthetics.'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    scope: {
      ar: ['تدعيم خرساني بألياف الكربون CFRP', 'ترميم الواجهات الطينية والحجرية', 'تحديث شبكات الصرف والكهرباء', 'عزل مائي وحراري متطور'],
      en: ['CFRP Structural Reinforcement', 'Stone & Traditional Facade Restoration', 'Full Electrical & Sanitary Rewiring', 'Advanced Thermal & Water Proofing']
    }
  },
  {
    id: 'logistics-warehouse-sudair',
    title: {
      ar: 'مجمع المستودعات اللوجستية الحديثة - سدير',
      en: 'Modern Logistics & Distribution Hub - Sudair'
    },
    category: 'infrastructure',
    location: { ar: 'مدينة سدير الصناعية', en: 'Sudair Industrial City' },
    area: '35,000 م²',
    duration: { ar: '11 شهراً', en: '11 Months' },
    year: '2023',
    client: { ar: 'شركة سلاسل الإمداد العالمية', en: 'Global Logistics & Freight Co.' },
    description: {
      ar: 'تنفيذ مستودعات معدنية كبرى بنظام الـ Pre-Engineered Steel مع أرضيات خرسانية إيبوكسية فائقة التحمل وشبكات إطفاء متطورة.',
      en: 'Pre-engineered steel warehouse park with laser-screed heavy duty epoxy flooring and ESFR fire sprinkler systems.'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    scope: {
      ar: ['هياكل حديدية Steel Structures', 'أرضيات خرسانية Super Flat بتسوية الليزر', 'أنظمة إطفاء ESFR معتمدة', 'أرصفة تحميل هيدروليكية'],
      en: ['Heavy Pre-engineered Steel Framing', 'Laser-screed Super Flat Flooring', 'ESFR Certified Fire Sprinkler Network', 'Hydraulic Loading Docks']
    }
  }
];

export const WORK_STEPS: WorkStepItem[] = [
  {
    step: '01',
    title: {
      ar: 'الدراسة الأولية ورفع الموقع',
      en: 'Initial Survey & Engineering Study'
    },
    desc: {
      ar: 'معاينة الموقع ميدانياً، فحص التربة، مراجعة متطلبات العميل، وتحديد الإطار العام للمشروع والميزانية.',
      en: 'On-site geotechnical inspection, scope evaluation, client requirements mapping, and preliminary budget framework.'
    },
    duration: { ar: '٣ - ٧ أيام', en: '3 - 7 Days' }
  },
  {
    step: '02',
    title: {
      ar: 'المخططات وحساب الكميات (BOQ)',
      en: 'Design, Modeling & Detailed BOQ'
    },
    desc: {
      ar: 'إعداد المخططات التنفيذية، حصر الكميات بدقة، وإعداد جدول زمني مفصل وميزانية تعاقدية واضحة بلا مفاجآت.',
      en: 'Detailed architectural/structural shop drawings, precise bill of quantities (BOQ), and transparent milestone schedule.'
    },
    duration: { ar: '١ - ٢ أسبوع', en: '1 - 2 Weeks' }
  },
  {
    step: '03',
    title: {
      ar: 'التعاقد واستخراج التراخيص',
      en: 'Contracting & Municipal Permits'
    },
    desc: {
      ar: 'توقيع العقد الرسمي المعتمد وفق الأنظمة، إنهاء الموافقات والتراخيص الحكومية وتأمين الموقع وتجهيز الكوادر.',
      en: 'Official FIDIC/standard contract execution, municipal building permit processing, site safety mobilization, and crew deployment.'
    },
    duration: { ar: '١ - ٢ أسبوع', en: '1 - 2 Weeks' }
  },
  {
    step: '04',
    title: {
      ar: 'التنفيذ والإشراف الميداني',
      en: 'Execution & On-Site Engineering'
    },
    desc: {
      ar: 'بدء الأعمال الإنشائية مع إشراف هندسي يومي، ومراقبة صارمة لنسب الخلط والمواد، مع إرسال تقارير رقمية مصورة للعميل.',
      en: 'Active site construction under resident engineer supervision, strict laboratory testing, and weekly photo progress updates.'
    },
    duration: { ar: 'حسب حجم المشروع', en: 'Project Dependent' }
  },
  {
    step: '05',
    title: {
      ar: 'مراقبة الجودة وفحص الاعتمادات',
      en: 'QA/QC Inspections & Certification'
    },
    desc: {
      ar: 'اختبارات الخرسانة، فحص الضغط لشبكات السباكة والإطفاء، تدقيق الأعمال الكهروميكانيكية، وتجهيز شهادات المطابقة.',
      en: 'Comprehensive concrete lab crushing tests, hydrostatic pressure verification, MEP commissioning, and compliance certification.'
    },
    duration: { ar: 'مستمر خلال العمل', en: 'Continuous' }
  },
  {
    step: '06',
    title: {
      ar: 'التسليم النهائي واعتماد المطابقة',
      en: 'Final Handover & Quality Sign-Off'
    },
    desc: {
      ar: 'تسليم الموقع كاملاً مع شهادة إتمام البناء، تسليم المخططات الختامية المعتمدة (As-Built)، وتقارير الفحص المخبري وضمان جودة التنفيذ.',
      en: 'Formal site handover, municipal completion certificate, stamped As-Built drawing package, and accredited QA engineering reports.'
    },
    duration: { ar: 'التسليم المعتمد', en: 'Certified Handover' }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: { ar: 'م. خالد السبيعي', en: 'Eng. Khalid Al-Subaie' },
    role: { ar: 'رئيس مجلس إدارة شركة الاستثمار العقاري', en: 'Board Chairman, Real Estate Investment' },
    company: { ar: 'الرياض', en: 'Riyadh' },
    content: {
      ar: 'تميز وإنجاز للمقاولات من أفضل الشركات التي تعاملنا معها من حيث الالتزام بالجدول الزمني والدقة المتناهية في أعمال الخرسانات والتشطيبات. تم تسليم مشروعنا قبل الموعد التعاقدي بأسبوعين وبأعلى مستوى جودة.',
      en: 'Tamiz & Anjaz is one of the most reliable contracting partners we worked with. Strict timeline adherence and superior concrete/finishing quality. Our project was delivered 2 weeks ahead of schedule.'
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectType: { ar: 'برج مكتبي تجاري', en: 'Commercial Office Tower' }
  },
  {
    id: 'test-2',
    name: { ar: 'د. فيصل الشمري', en: 'Dr. Faisal Al-Shammari' },
    role: { ar: 'مالك قصر خاص', en: 'Private Villa Owner' },
    company: { ar: 'حي النخيل - الرياض', en: 'Al Nakheel, Riyadh' },
    content: {
      ar: 'تم تنفيذ فيلتي الخاصة بالكامل تسليم مفتاح مع شركة تميز وإنجاز. الشفافية في التكاليف والتعامل الهندسي الراقي جعل تجربة البناء مريحة وممتعة جداً. أنصح بالتعامل معهم بدون تردد.',
      en: 'They handled my luxury villa turnkey construction flawlessly. Total cost transparency, outstanding on-site supervision, and flawless marble work made the whole experience a pleasure.'
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectType: { ar: 'فيلا سكنية فاخرة', en: 'Luxury Residential Villa' }
  },
  {
    id: 'test-3',
    name: { ar: 'أ. سارة المنصور', en: 'Ms. Sarah Al-Mansoor' },
    role: { ar: 'مديرة العمليات والمشاريع', en: 'Operations & Facilities Director' },
    company: { ar: 'مجموعة المتاجر الحديثة - جدة', en: 'Modern Retail Group - Jeddah' },
    content: {
      ar: 'أنجزت الشركة أعمال التشطيبات والديكور الداخلي لفرعنا الرئيسي بجدة في وقت قياسي وبجودة فاخرة لفتت أنظار جميع زوارنا وشركائنا. فريق عمل محترف ومتعاون إلى أبعد الحدود.',
      en: 'They completed the interior fit-out for our flagship Jeddah commercial venue in record time with stunning finishing quality. A truly professional and responsive team.'
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    projectType: { ar: 'تشطيبات وتجهيز تجاري', en: 'Commercial Fit-Out' }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: {
      ar: 'ما هي معايير الجودة والضمانات التي تقدمها مؤسسة تميز الإنجاز للمقاولات؟',
      en: 'What quality standards and guarantees does Tamiz Al-Injaz provide?'
    },
    answer: {
      ar: 'نقدم إشرافاً هندسياً ميدانياً دقيقاً على كافة مراحل المشروع وضمانات جودة تنفيذ شاملة طبقاً لكود البناء السعودي (SBC)، مع شهادات فحص مخبري لكافة المواد الموردة واختبارات معتمدة.',
      en: 'We provide strict on-site resident engineering supervision and comprehensive quality assurance fully compliant with the Saudi Building Code (SBC), including certified laboratory material testing.'
    },
    category: { ar: 'الضمانات والجودة', en: 'Warranty & Quality' }
  },
  {
    question: {
      ar: 'كيف تتم عملية تقدير وحساب تكلفة المشاريع؟',
      en: 'How is project estimation and budgeting calculated?'
    },
    answer: {
      ar: 'نقوم بدراسة المخططات المعمارية والإنشائية بدقة، وإعداد جدول كميات مفصل (BOQ) يوضح كافة البنود من مواد ومعدات وعمالة بشكل شفاف تماماً، أو استخدام الحاسبة التقديرية الذكية لمشروعك للحصول على سعر أولي فوري.',
      en: 'We review your engineering blueprints to prepare a transparent, itemized Bill of Quantities (BOQ) with all materials and labor clearly detailed, or you can use our interactive cost estimator for instant preliminary figures.'
    },
    category: { ar: 'الأسعار والتعاقد', en: 'Pricing & Contracts' }
  },
  {
    question: {
      ar: 'هل تشمل خدماتكم استخراج التراخيص والتصاريح البلدية؟',
      en: 'Do your services cover municipal permits and civil defense approvals?'
    },
    answer: {
      ar: 'نعم، يتولى فريقنا الهندسي التنسيق مع المكاتب الهندسية المعتمدة والأمانات والبلديات لاستخراج وتجديد رخص البناء، وتصاريح الدفاع المدني، وشهادات إتمام البناء وإطلاق التيار الكهربائي.',
      en: 'Yes, our engineering liaison team coordinates directly with municipal authorities, Balady platform, and Civil Defense for all building permits, inspections, and utility connections.'
    },
    category: { ar: 'الإجراءات والتراخيص', en: 'Permits & Approvals' }
  },
  {
    question: {
      ar: 'هل تنفذون مشاريع خارج مدينة الرياض؟',
      en: 'Do you execute construction projects outside of Riyadh?'
    },
    answer: {
      ar: 'نعم، ننفذ مشاريع كبرى في كافة مناطق المملكة العربية السعودية بما يشمل الرياض، جدة ومكة المكرمة، المنطقة الشرقية (الدمام والخبر)، القصيم، والمشاريع التنموية الكبرى.',
      en: 'Yes, we execute major contracting projects across the Kingdom including Riyadh, Jeddah, Makkah, Eastern Province (Dammam & Khobar), Qassim, and key national development zones.'
    },
    category: { ar: 'نطاق العمل', en: 'Coverage & Scope' }
  },
  {
    question: {
      ar: 'ما هي أنظمة التعاقد المتاحة لدى الشركة؟',
      en: 'What contractual frameworks are available?'
    },
    answer: {
      ar: 'نوفر عدة خيارات تعاقدية مرنة تناسب احتياجات العميل: تسليم مفتاح كامل (Lump Sum Turnkey)، تنفيذ عظم بالمواد أو بدون مواد، أو عقود إدارة المشاريع والإشراف بالنسبة المئوية (Cost Plus / Management).',
      en: 'We offer flexible contractual terms: Lump Sum Turnkey, Skeleton structure with/without materials, and Project Management / Cost-Plus models.'
    },
    category: { ar: 'الأسعار والتعاقد', en: 'Pricing & Contracts' }
  }
];

export const VALUES_LIST = [
  {
    title: { ar: 'الالتزام التام بالمواعيد', en: 'Strict Punctuality' },
    desc: { ar: 'نلتزم بتسليم كافة مراحل المشروع وفق جدول زمني دقيق دون أي تأخير.', en: 'Committed to delivering every phase on or ahead of schedule.' },
    iconName: 'Clock'
  },
  {
    title: { ar: 'أعلى معايير الجودة والكود السعودي', en: 'SBC Quality Excellence' },
    desc: { ar: 'تطبيق أدق المواصفات الهندسية واختبارات المواد المعتمدة دولياً.', en: 'Full compliance with Saudi Building Code and international lab tests.' },
    iconName: 'ShieldCheck'
  },
  {
    title: { ar: 'الشفافية المطلقة في التكاليف', en: 'Complete Transparency' },
    desc: { ar: 'جداول كميات واضحة ومفصلة بدون أي تكاليف خفية أثناء التنفيذ.', en: 'Detailed itemized BOQs with zero hidden fees during execution.' },
    iconName: 'FileCheck'
  },
  {
    title: { ar: 'إشراف هندسي مباشر ومستمر', en: 'Direct On-Site Engineering' },
    desc: { ar: 'متابعة وإشراف هندسي مباشر ومتخصص قائم على كافة تفاصيل ومراحل تنفيذ المشاريع.', en: 'Dedicated project engineer directly supervising all on-site construction milestones.' },
    iconName: 'HardHat'
  }
];
