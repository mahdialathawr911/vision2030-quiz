(function(){
  'use strict';

  var LANG = 'ar';
  try{ LANG = localStorage.getItem('v2030_lang') || 'ar'; }catch(e){}

  var I18N = {
    ar:{
      title:'اكتشف مسارك · رؤية 2030',
      heroTitle:'اكتشف مسارك المستقبلي',
      heroSub:'6 قطاعات تقود رؤية 2030. أجب بصدق، حدّد منطقتك، واحصل على دليل مخصص بالفرص والبرامج.',
      b1:'10 أسئلة',b2:'+ سؤال منطقتك',b3:'دليل مسار كامل',
      s1:'قطاعات',s2:'أسئلة',s3:'ثانية',
      startBtn:'ابدأ الرحلة',meta:'بدون تسجيل · بدون بيانات شخصية',
      backBtn:'↩ رجوع',
      progress:'السؤال {n} من {t}',
      regionStep:'الخطوة الأخيرة',regionCheer:'وين تشوف نفسك؟ 🗺️',
      regionTitle:'اختر المنطقة اللي تحب تشتغل وتعيش فيها:',
      eyebrow:'القطاع الأنسب لك',
      careersTitle:'أمثلة على الوظائف',
      runnerUp:'<b>قريب منك أيضًا:</b> {name}',
      discover:'اكتشف مسارك الكامل',
      retake:'جولة أخرى',share:'تحميل نتيجتي',
      copied:'تم التحميل ✓',
      downloading:'جاري تجهيز التقرير…',
      pdfError:'تعذّر إنشاء التقرير · حاول مرة أخرى',
      lastResult:'آخر مرة كنت <b>{name}</b> — أعد التجربة وشوف!',
      footer:'مستوحى من رؤية السعودية 2030 · تجربة استكشافية',
      gWhy:'ليش أنت مناسب لهذا المجال؟',
      gStats:'القطاع بالأرقام',
      gOpp:'الفرص في {region}',
      gAction:'خطتك العملية — ابدأ الآن',
      gTip:'نصيحة إضافية',
      gTipText:'ابدأ بخطوة واحدة فقط اليوم. سجّل في برنامج واحد من القائمة أعلاه، وأكمل التسجيل. الخطوة الصغيرة اليوم تصنع فرقاً كبيراً بعد سنة. تذكّر: رؤية 2030 تحتاجك.',
      gSub:'دليلك المخصص لتبدأ رحلتك في {sector} — في {region}',
      stickyGo:'ابدأ الآن',
      shareText:'اكتشفت في اختبار رؤية 2030 أنني {sector} — جرّب أنت أيضًا!'
    },
    en:{
      title:'Discover Your Path · Vision 2030',
      heroTitle:'Discover Your Future Path',
      heroSub:'6 sectors driving Vision 2030. Answer honestly, pick your region, and get a personalized guide.',
      b1:'10 questions',b2:'+ region',b3:'full career guide',
      s1:'sectors',s2:'questions',s3:'seconds',
      startBtn:'Start the journey',meta:'No sign-up · No personal data',
      backBtn:'← Back',
      progress:'Question {n} of {t}',
      regionStep:'Last step',regionCheer:'Where do you see yourself? 🗺️',
      regionTitle:'Choose the region where you\'d like to live and work:',
      eyebrow:'Your best-fit sector',
      careersTitle:'Example careers',
      runnerUp:'<b>Close second:</b> {name}',
      discover:'Explore your full path',
      retake:'Play again',share:'Download result',
      copied:'Downloaded ✓',
      downloading:'Preparing report…',
      pdfError:'Could not generate report · try again',
      lastResult:'Last time you were <b>{name}</b> — take it again!',
      footer:'Inspired by Saudi Vision 2030 · Exploratory experience',
      gWhy:'Why you fit this field?',
      gStats:'The sector in numbers',
      gOpp:'Opportunities in {region}',
      gAction:'Your action plan — start now',
      gTip:'Extra tip',
      gTipText:'Start with one step today. Register in one program above and complete the signup. Small steps today create big results a year from now. Remember: Vision 2030 needs you.',
      gSub:'Your personalized guide to start your journey in {sector} — in {region}',
      stickyGo:'Start now',
      shareText:'My Vision 2030 quiz result: {sector} — try it yourself!'
    }
  };

  function T(k){ return I18N[LANG][k]; }
  function Tf(k,v){
    var s=I18N[LANG][k];
    if(typeof s!=='string') return s;
    return s.replace(/\{(\w+)\}/g, function(_,n){ return v[n]!=null?v[n]:''; });
  }

  var VIDEOS = {
    tourism:['https://videos.pexels.com/video-files/2169880/2169880-sd_640_360_30fps.mp4'],
    tech:['https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4'],
    health:['https://videos.pexels.com/video-files/4098993/4098993-sd_640_360_25fps.mp4'],
    entertainment:['https://videos.pexels.com/video-files/2022395/2022395-sd_640_360_30fps.mp4'],
    education:['https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4'],
    finance:['https://videos.pexels.com/video-files/3121459/3121459-sd_640_360_24fps.mp4']
  };

  var PHOTO = {
    tourism:'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=75&auto=format&fit=crop',
    tech:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75&auto=format&fit=crop',
    health:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=75&auto=format&fit=crop',
    entertainment:'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&q=75&auto=format&fit=crop',
    education:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=75&auto=format&fit=crop',
    finance:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=75&auto=format&fit=crop'
  };
  var BIG_PHOTO = {
    tourism:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=75&auto=format&fit=crop',
    tech:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=75&auto=format&fit=crop',
    health:'https://images.unsplash.com/photo-1631815588090-d1bcbe9a8b2b?w=1000&q=75&auto=format&fit=crop',
    entertainment:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1000&q=75&auto=format&fit=crop',
    education:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1000&q=75&auto=format&fit=crop',
    finance:'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1000&q=75&auto=format&fit=crop'
  };

  var KEYS=['tourism','tech','health','entertainment','education','finance'];
  var COLOR={tourism:'#FF7A45',tech:'#4C8DFF',health:'#2DD4BF',
    entertainment:'#C084FC',education:'#818CF8',finance:'#FBBF24'};
  var MOOD={tourism:'rgba(255,122,69,.32)',tech:'rgba(76,141,255,.32)',
    health:'rgba(45,212,191,.32)',entertainment:'rgba(192,132,252,.30)',
    education:'rgba(129,140,248,.30)',finance:'rgba(251,191,36,.28)'};

  var SECTORS = {
    ar:{
      tourism:{name:'السياحة والضيافة',tagline:'رفيق الثقافات 🌍',desc:'تنبهر بالأماكن الجديدة والناس والقصص. مشاريع نيوم والبحر الأحمر تحتاج أشخاصًا يحوّلون الأماكن إلى تجارب لا تُنسى.',careers:['مرشد سياحي','مدير فندق','أمين تراث','منظم فعاليات']},
      tech:{name:'التقنية والابتكار',tagline:'باني المستقبل الرقمي 💡',desc:'تستمتع ببناء ما لم يكن موجودًا. من الذكاء الاصطناعي إلى الروبوتات، التقنية قلب التحول الرقمي السعودي.',careers:['مهندس برمجيات','عالم بيانات','محلل أمن سيبراني','باحث AI']},
      health:{name:'الصحة والعافية',tagline:'صانع حياة أفضل ❤️',desc:'تهتم براحة الناس وتسعى لتأثير مباشر. القطاع الصحي يتوسع بسرعة مع مستشفيات ومبادرات تقنية صحية.',careers:['طبيب','ممرض','أخصائي علاج طبيعي','أخصائي صحة عامة']},
      entertainment:{name:'الترفيه والرياضة',tagline:'صانع التجارب 🎬',desc:'تحب خلق لحظات يتذكرها الناس. القدية ومشهد الفعاليات المتنامي يُبنى بأشخاص بطاقتك وإبداعك.',careers:['مصمم ألعاب','مدرب رياضي','منتج أفلام','منتج فعاليات']},
      education:{name:'التعليم ورأس المال البشري',tagline:'باني المعرفة 📚',desc:'تستمتع بمساعدة الآخرين على النمو. رؤية 2030 تستثمر بكثافة في التعليم والمهارات لإعداد الجيل القادم.',careers:['معلم','مصمم مناهج','مدرب شركات','مطور EdTech']},
      finance:{name:'المال وريادة الأعمال',tagline:'استراتيجي النمو 📊',desc:'تفكر بالنمو والفرص والمخاطر. صعود الرياض كمركز مالي عالمي يحتاج عقولًا حادة مثلك.',careers:['محلل مالي','مصرفي استثماري','مؤسس Fintech','رائد أعمال']}
    },
    en:{
      tourism:{name:'Tourism & Hospitality',tagline:'Culture Connector 🌍',desc:'You light up around new places, people and stories. NEOM and the Red Sea projects need people who turn places into unforgettable experiences.',careers:['Tour guide','Hotel manager','Heritage curator','Event planner']},
      tech:{name:'Technology & Innovation',tagline:'Digital Builder 💡',desc:'You love building what didn\'t exist. From AI to robotics, tech is at the heart of Saudi\'s digital transformation.',careers:['Software engineer','Data scientist','Cybersecurity analyst','AI researcher']},
      health:{name:'Healthcare & Wellbeing',tagline:'Life Enhancer ❤️',desc:'You care about people\'s wellbeing. The health sector is expanding fast with new hospitals and health-tech initiatives.',careers:['Doctor','Nurse','Physiotherapist','Public health specialist']},
      entertainment:{name:'Entertainment & Sports',tagline:'Experience Creator 🎬',desc:'You love creating moments people remember. Qiddiya and the growing events scene are built by people with your energy.',careers:['Game designer','Sports coach','Film producer','Event producer']},
      education:{name:'Education & Human Capital',tagline:'Knowledge Builder 📚',desc:'You enjoy helping others grow. Vision 2030 invests heavily in education and skills for the next generation.',careers:['Teacher','Curriculum designer','Corporate trainer','EdTech developer']},
      finance:{name:'Finance & Entrepreneurship',tagline:'Growth Strategist 📊',desc:'You think in growth, risk and opportunity. Riyadh\'s rise as a global financial hub needs sharp minds like yours.',careers:['Financial analyst','Investment banker','Fintech founder','Entrepreneur']}
    }
  };

  var REGIONS=[
    {key:'riyadh',name:{ar:'الرياض',en:'Riyadh'},emoji:'🏙️',hint:{ar:'عاصمة المال والتقنية والترفيه',en:'Capital of finance & tech'}},
    {key:'jeddah',name:{ar:'جدة والغربية',en:'Jeddah & West'},emoji:'🌊',hint:{ar:'سياحة فاخرة وتجارة',en:'Luxury tourism & trade'}},
    {key:'neom',name:{ar:'نيوم وتبوك',en:'NEOM & Tabuk'},emoji:'⛰️',hint:{ar:'مستقبل السياحة العالمية',en:'Future of global tourism'}},
    {key:'eastern',name:{ar:'المنطقة الشرقية',en:'Eastern Province'},emoji:'⚙️',hint:{ar:'صناعة وطاقة ومدن صناعية',en:'Industry & energy'}},
    {key:'asir',name:{ar:'أبها وعسير',en:'Abha & Asir'},emoji:'🌄',hint:{ar:'سياحة جبلية وساحلية',en:'Mountain & coastal tourism'}},
    {key:'madinah',name:{ar:'المدينة المنورة',en:'Madinah'},emoji:'🕌',hint:{ar:'سياحة دينية وتراث',en:'Religious & heritage tourism'}}
  ];

  var REGION_DATA={
    riyadh:{tourism:{ar:'الرياض وجهة ترفيه وسياحة متنامية: القدية، الدرعية، وبوليفارد.',en:'Riyadh is a growing tourism hub: Qiddiya, Diriyah, Boulevard.'},tech:{ar:'نيوم الصناعية، شركة آلات، ومراكز البيانات العملاقة.',en:'NEOM Industrial, Alat, and giant data centers.'},health:{ar:'مجمع الملك عبدالله الطبي، المدن الطبية، والتحول الرقمي الصحي.',en:'King Abdullah Medical Complex and digital health transformation.'},entertainment:{ar:'القدية (9.8 مليار دولار)، موسم الرياض، والدرعية.',en:'Qiddiya ($9.8B), Riyadh Season, and Diriyah.'},education:{ar:'جامعات كبرى، مدارس دولية، وشركات EdTech.',en:'Major universities, int\'l schools, and EdTech.'},finance:{ar:'مركز الملك عبدالله المالي (KAFD) والبنوك العالمية.',en:'KAFD and global banks.'}},
    jeddah:{tourism:{ar:'وجهة سياحة فاخرة: أتلانتس جدة، ون آند أونلي، البحر الأحمر.',en:'Luxury destination: Atlantis Jeddah, One&Only, Red Sea.'},tech:{ar:'شركات التجارة الإلكترونية واللوجستيات تبحث عن مطورين.',en:'E-commerce and logistics companies need developers.'},health:{ar:'مستشفيات كبرى ومراكز تخصصية.',en:'Major hospitals and specialty centers.'},entertainment:{ar:'موسم جدة، الكورنيش الجديد، وفعاليات على مدار العام.',en:'Jeddah Season, new corniche, year-round events.'},education:{ar:'جامعات ومدارس دولية.',en:'Universities and international schools.'},finance:{ar:'المركز المالي في الغربية.',en:'Western region financial hub.'}},
    neom:{tourism:{ar:'ذا لاين، تروجينا، سندالة (3,500 وظيفة)، والبحر الأحمر.',en:'The Line, Trojena, Sindalah (3,500 jobs), Red Sea.'},tech:{ar:'أوكساغون الصناعية، والذكاء الاصطناعي، والمدن الذكية.',en:'Oxagon, AI, and smart cities.'},health:{ar:'مستشفيات نيوم الذكية والرعاية الرقمية.',en:'NEOM smart hospitals and digital care.'},entertainment:{ar:'تروجينا (مشروع الترفيه الجبلي)، وفعاليات عالمية.',en:'Trojena mountain entertainment, global events.'},education:{ar:'جامعات نيوم والمراكز البحثية.',en:'NEOM universities and research centers.'},finance:{ar:'نيوم كمركز استثماري عالمي.',en:'NEOM as a global investment hub.'}},
    eastern:{tourism:{ar:'سياحة ساحلية وتراثية في الأحساء والقطيف.',en:'Coastal and heritage tourism in Al-Ahsa & Qatif.'},tech:{ar:'مدينة الملك سلمان للطاقة، والصناعات التقنية.',en:'King Salman Energy City and tech industries.'},health:{ar:'مستشفيات كبرى ومراكز تخصصية.',en:'Major hospitals and specialty centers.'},entertainment:{ar:'فعاليات في الدمام والخبر.',en:'Events in Dammam and Khobar.'},education:{ar:'جامعات ومراكز تدريب.',en:'Universities and training centers.'},finance:{ar:'مراكز مالية وبنوك في الدمام.',en:'Financial centers and banks in Dammam.'}},
    asir:{tourism:{ar:'واجهة عسير البحرية، نجمة ونهر، وادي أبها (2.5 مليون م²).',en:'Asir Sea Front, Najma & Nahr, Wadi Abha (2.5M m²).'},tech:{ar:'مراكز تقنية ناشئة في أبها.',en:'Emerging tech hubs in Abha.'},health:{ar:'مستشفيات أبها ومراكز الرعاية.',en:'Abha hospitals and care centers.'},entertainment:{ar:'مهرجان صيف عسير (ملايين الزوار).',en:'Asir Summer Festival (millions of visitors).'},education:{ar:'جامعة الملك خالد.',en:'King Khalid University.'},finance:{ar:'فروع بنكية ومراكز أعمال.',en:'Bank branches and business centers.'}},
    madinah:{tourism:{ar:'سياحة دينية وتراثية مع طلب على المرشدين والضيافة.',en:'Religious and heritage tourism with guide demand.'},tech:{ar:'مراكز تقنية ناشئة ومدينة المعرفة الاقتصادية.',en:'Tech hubs and Knowledge Economic City.'},health:{ar:'مستشفيات كبرى ومراكز طبية.',en:'Major hospitals and medical centers.'},entertainment:{ar:'فعاليات ثقافية وتراثية.',en:'Cultural and heritage events.'},education:{ar:'جامعة طيبة والجامعة الإسلامية.',en:'Taibah and Islamic University.'},finance:{ar:'مراكز مالية وبنوك.',en:'Financial centers and banks.'}}
  };

  var GUIDE_DATA={
    tourism:{emoji:'🧭',title:{ar:'مسار السياحة والضيافة',en:'Tourism & Hospitality Path'},
      why:{ar:['تستمتع بتصميم التجارب والرحلات — هذا جوهر قطاع السياحة','تفضل التعامل مع الناس من ثقافات مختلفة','تبحث عن عمل يجمع بين الحركة والإبداع'],en:['You enjoy designing experiences — the heart of tourism','You love interacting with people from all cultures','You want work mixing motion and creativity']},
      stats:[{n:'150M',l:{ar:'زيارة سنوية بحلول 2030',en:'annual visits by 2030'}},{n:'500K',l:{ar:'غرفة فندقية',en:'hotel rooms'}},{n:'851M',l:{ar:'ريال دعم للكوادر',en:'SAR talent support'}},{n:'147K',l:{ar:'يعملون حالياً',en:'currently working'}}],
      actions:[
        {t:{ar:'سجّل في منصة دروب',en:'Register on Doroob'},d:{ar:'22 شهادة مهنية + 12 دورة إلكترونية مجانية.',en:'22 professional certificates + 12 free courses.'},u:'https://doroob.sa',l:'doroob.sa'},
        {t:{ar:'انضم لبرنامج تمهير',en:'Join Tamheer program'},d:{ar:'تدريب على رأس العمل في الفنادق مع مكافأة.',en:'On-the-job training with stipend.'},u:'https://hrdf.org.sa',l:'hrdf.org.sa'},
        {t:{ar:'تقدّم لمنصة سبل',en:'Apply on Subol'},d:{ar:'جلسات إرشاد مهني مجانية.',en:'Free career counseling sessions.'},u:'https://subol.sa',l:'subol.sa'}
      ]},
    tech:{emoji:'💻',title:{ar:'مسار التقنية والابتكار',en:'Technology & Innovation Path'},
      why:{ar:['تستمتع ببناء أشياء جديدة — هذا ما يفعله المبرمجون','تفكر بطريقة منطقية ومنهجية','تحب التحديات التقنية المعقدة'],en:['You love building new things','You think logically and methodically','You enjoy complex technical challenges']},
      stats:[{n:'200+',l:{ar:'معسكر في أكاديمية طويق',en:'Tuwaiq bootcamps'}},{n:'80%',l:{ar:'توظيف خريجي طويق',en:'Tuwaiq grads hired'}},{n:'375K',l:{ar:'ريال دعم أطلق',en:'SAR from ATC'}},{n:'35K+',l:{ar:'خريج من طويق',en:'Tuwaiq graduates'}}],
      actions:[
        {t:{ar:'سجّل في أكاديمية طويق',en:'Register at Tuwaiq'},d:{ar:'200+ معسكر مجاني في البرمجة و AI.',en:'200+ free bootcamps in coding & AI.'},u:'https://tuwaiq.edu.sa',l:'tuwaiq.edu.sa'},
        {t:{ar:'تقدّم لمسرعة أطلق',en:'Apply to ATC'},d:{ar:'دعم 375 ألف ريال + استشارات.',en:'SAR 375K + consulting.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'},
        {t:{ar:'تصفّح وظائف جدارات',en:'Browse Jadarat'},d:{ar:'أكثر من 34 ألف وظيفة شاغرة.',en:'34K+ open jobs.'},u:'https://jadarat.sa',l:'jadarat.sa'}
      ]},
    health:{emoji:'🩺',title:{ar:'مسار الصحة والعافية',en:'Healthcare Path'},
      why:{ar:['تهتم بمساعدة الناس وراحتهم','تتحمل المسؤولية وتعمل تحت الضغط','تبحث عن تأثير مباشر'],en:['You care about people','You handle responsibility','You seek direct impact']},
      stats:[{n:'+70K',l:{ar:'مبتعث في الصحة',en:'health scholars'}},{n:'3K',l:{ar:'مكافأة تمهير',en:'Tamheer stipend'}},{n:'10K',l:{ar:'متدرب تمريض',en:'nursing trainees'}},{n:'50%',l:{ar:'دعم الرواتب',en:'salary support'}}],
      actions:[
        {t:{ar:'انضم لبرنامج تمهير',en:'Join Tamheer'},d:{ar:'تدريب في المستشفيات مع 3000 ريال.',en:'Hospital training with 3000 SAR.'},u:'https://hrdf.org.sa',l:'hrdf.org.sa'},
        {t:{ar:'جلسة إرشاد من سبل',en:'Subol counseling'},d:{ar:'اختبار + جلسة مع مرشد.',en:'Test + counselor session.'},u:'https://subol.sa',l:'subol.sa'},
        {t:{ar:'استكشف الابتعاث',en:'Explore scholarships'},d:{ar:'70 ألف مبتعث في الصحة.',en:'70K health scholarships.'},u:'https://sachs.edu.sa',l:'sachs.edu.sa'}
      ]},
    entertainment:{emoji:'🎬',title:{ar:'مسار الترفيه والرياضة',en:'Entertainment & Sports Path'},
      why:{ar:['تحب خلق لحظات سعيدة','تفكر بطريقة إبداعية','تزدهر في البيئات الحيوية'],en:['You love creating joy','You think creatively','You thrive in vibrant spaces']},
      stats:[{n:'9.8B$',l:{ar:'استثمار في القدية',en:'invested in Qiddiya'}},{n:'200+',l:{ar:'وظيفة حالياً',en:'current jobs'}},{n:'100K',l:{ar:'زائر يومي متوقع',en:'expected daily visitors'}},{n:'40',l:{ar:'دقيقة من الرياض',en:'min from Riyadh'}}],
      actions:[
        {t:{ar:'قدّم لوظائف القدية',en:'Apply to Qiddiya'},d:{ar:'200+ فرصة في الترفيه والأمن.',en:'200+ opportunities.'},u:'https://qiddiya.com',l:'qiddiya.com'},
        {t:{ar:'سجّل في مسرعة أطلق',en:'Apply to ATC'},d:{ar:'375 ألف ريال للشركات الناشئة.',en:'SAR 375K for startups.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'},
        {t:{ar:'أكاديمية منشآت',en:'Monshaat Academy'},d:{ar:'دورات مجانية في الريادة.',en:'Free entrepreneurship courses.'},u:'https://monshaat.gov.sa',l:'monshaat.gov.sa'}
      ]},
    education:{emoji:'📚',title:{ar:'مسار التعليم',en:'Education Path'},
      why:{ar:['تستمتع بمساعدة الآخرين على الفهم','تصبر وتشرح بوضوح','تبحث عن أثر طويل المدى'],en:['You love helping others learn','You\'re patient and clear','You seek long-term impact']},
      stats:[{n:'70K',l:{ar:'مبتعث بحلول 2030',en:'scholars by 2030'}},{n:'500K+',l:{ar:'مستفيد من مسك',en:'Misk beneficiaries'}},{n:'95%',l:{ar:'استعدوا مهنياً',en:'job-ready'}},{n:'12K+',l:{ar:'ساعة تدريبية',en:'training hours'}}],
      actions:[
        {t:{ar:'سجّل في مسك المهارات',en:'Register at Misk Skills'},d:{ar:'برامج إعداد مهني مع خبراء.',en:'Career prep with experts.'},u:'https://hub.misk.org.sa',l:'misk.org.sa'},
        {t:{ar:'قدّم على الابتعاث',en:'Apply for scholarship'},d:{ar:'برنامج خادم الحرمين.',en:'Custodian of Two Mosques program.'},u:'https://sachs.edu.sa',l:'sachs.edu.sa'},
        {t:{ar:'جرّب جدارات',en:'Try Jadarat'},d:{ar:'وظائف تعليمية وطنية.',en:'National education jobs.'},u:'https://jadarat.sa',l:'jadarat.sa'}
      ]},
    finance:{emoji:'📊',title:{ar:'مسار المال والأعمال',en:'Finance & Business Path'},
      why:{ar:['تفكر بالنمو والفرص والمخاطر','تحب الأرقام والتحليل','تبحث عن نتائج ملموسة'],en:['You think in growth & risk','You love numbers','You seek measurable results']},
      stats:[{n:'600K',l:{ar:'وظيفة جديدة في الرياض',en:'new jobs in Riyadh'}},{n:'3T$',l:{ar:'سوق الأسهم المستهدف',en:'target stock market'}},{n:'375K',l:{ar:'ريال دعم أطلق',en:'SAR from ATC'}},{n:'158+',l:{ar:'دورة في منشآت',en:'Monshaat courses'}}],
      actions:[
        {t:{ar:'أكاديمية منشآت',en:'Monshaat Academy'},d:{ar:'158+ دورة مجانية في الريادة.',en:'158+ free entrepreneurship courses.'},u:'https://monshaat.gov.sa',l:'monshaat.gov.sa'},
        {t:{ar:'تقدّم لمسرعة أطلق',en:'Apply to ATC'},d:{ar:'دعم الشركات الناشئة بـ 375K.',en:'SAR 375K startup support.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'},
        {t:{ar:'وظائف جدارات',en:'Jadarat jobs'},d:{ar:'وظائف بنكية واستثمارية.',en:'Banking & investment jobs.'},u:'https://jadarat.sa',l:'jadarat.sa'}
      ]}
  };

  var QUESTIONS={
    ar:[
      {q:'ما نوع المشكلة التي تستمتع بحلها أكثر؟',o:[['تصميم رحلة سياحية لا تُنسى','tourism'],['حل خلل برمجي معقّد','tech'],['معرفة سبب شعور شخص بالتعب','health'],['جعل فعالية أكثر إثارة','entertainment'],['تبسيط فكرة صعبة للجميع','education'],['إيجاد أذكى طريقة لتنمية الميزانية','finance']]},
      {q:'عطلة نهاية أسبوعك المثالية:',o:[['استكشاف مدينة أو موقع تاريخي','tourism'],['بناء مشروع تقني شخصي','tech'],['التطوع في عيادة أو مساعدة مريض','health'],['حضور حفلة أو مباراة','entertainment'],['القراءة أو تدريس صديق','education'],['متابعة الاستثمارات والتخطيط المالي','finance']]},
      {q:'أي مشروع من رؤية 2030 يحمسك أكثر؟',o:[['منتجعات البحر الأحمر','tourism'],['نيوم والمدن الذكية','tech'],['المستشفيات والتقنية الصحية','health'],['مدينة القدية الترفيهية','entertainment'],['برامج التعليم والمهارات','education'],['الرياض مركز مالي عالمي','finance']]},
      {q:'أصدقاؤك يصفونك بأنك...',o:[['المضيف المغامر','tourism'],['من يصلح مشاكل التقنية','tech'],['الحنون عند المرض','health'],['روح الحفلة','entertainment'],['الصبور الشارح','education'],['المخطط للميزانية','finance']]},
      {q:'اختر عنوان خبر تحب أن تقرأه عنك:',o:[['«مرشد يحوّل وجهة مجهولة إلى مقصد»','tourism'],['«مهندس يبني تطبيقًا للملايين»','tech'],['«ممرضة تُشاد برعايتها الإنسانية»','health'],['«منتج وراء أكبر مهرجان»','entertainment'],['«معلم يغيّر طريقة التعلم»','education'],['«محلل يكتشف فرصة استثمارية»','finance']]},
      {q:'ما أهم شيء في وظيفتك؟',o:[['التعرف على أشخاص من العالم','tourism'],['بناء أشياء جديدة','tech'],['إحداث فرق في حياة إنسان','health'],['خلق لحظات لا تُنسى','entertainment'],['مساعدة الآخرين على النمو','education'],['رؤية نمو ونتائج ملموسة','finance']]},
      {q:'أداة تحب أن تتقنها:',o:[['كاميرا وخريطة','tourism'],['حاسوب وبيئة برمجة','tech'],['سماعة طبية وملفات','health'],['ميكروفون ومسرح','entertainment'],['سبورة وخطة درس','education'],['جدول بيانات ومؤشر أسهم','finance']]},
      {q:'في العمل الجماعي، أنت من...',o:[['ينظم ويجعل الأمر ممتعًا','tourism'],['يبني المنتج فعليًا','tech'],['يهتم براحة الجميع','health'],['يطرح الفكرة الإبداعية','entertainment'],['يبقي الفريق على المسار','education'],['يدير الميزانية والوقت','finance']]},
      {q:'المادة المفضلة في المدرسة:',o:[['الجغرافيا والاجتماعيات','tourism'],['الحاسب والرياضيات','tech'],['الأحياء والكيمياء','health'],['الفن أو المسرح أو الرياضة','entertainment'],['اللغات والتواصل','education'],['الاقتصاد والأعمال','finance']]},
      {q:'بتمويل غير محدود، ستطلق:',o:[['سلسلة فنادق بوتيك','tourism'],['شركة AI أو روبوتات','tech'],['عيادة للمناطق النائية','health'],['منشأة رياضية أو ترفيهية','entertainment'],['منصة تعليمية مجانية','education'],['صندوق للشركات الناشئة','finance']]}
    ],
    en:[
      {q:'What kind of problem do you enjoy solving most?',o:[['Designing an unforgettable travel experience','tourism'],['Debugging a tricky piece of code','tech'],['Figuring out what\'s making someone unwell','health'],['Making an event more exciting','entertainment'],['Explaining a hard concept so it clicks','education'],['Finding the smartest way to grow a budget','finance']]},
      {q:'Pick your ideal weekend:',o:[['Exploring a new city or historic site','tourism'],['Building a side project','tech'],['Volunteering at a clinic or helping someone recover','health'],['At a concert, game or film set','entertainment'],['Reading, researching or tutoring','education'],['Tracking investments or planning a budget','finance']]},
      {q:'Which Vision 2030 project excites you most?',o:[['Red Sea resorts & new tourism destinations','tourism'],['NEOM\'s smart cities & AI','tech'],['New hospitals & health-tech','health'],['Qiddiya\'s entertainment city','entertainment'],['National education & skills programs','education'],['Riyadh as a global financial hub','finance']]},
      {q:'Your friends would describe you as...',o:[['The adventurous host who plans the trip','tourism'],['The one who fixes everyone\'s tech','tech'],['The caring one everyone calls when unwell','health'],['The life of the party','entertainment'],['The patient one who explains things well','education'],['The planner with a budget spreadsheet','finance']]},
      {q:'Pick a headline you\'d love to read about yourself:',o:[['"Local guide turns hidden gem into must-visit spot"','tourism'],['"Young engineer builds app used by millions"','tech'],['"Nurse praised for compassionate care"','health'],['"Producer behind the region\'s biggest festival"','entertainment'],['"Teacher transforms how students learn"','education'],['"Analyst spots the next big investment trend"','finance']]},
      {q:'What\'s most important to you in a job?',o:[['Meeting people from around the world','tourism'],['Building things that didn\'t exist before','tech'],['Making a direct difference in someone\'s life','health'],['Creating moments people will remember','entertainment'],['Helping others grow and succeed','education'],['Seeing measurable growth and results','finance']]},
      {q:'Pick a tool you\'d want to master:',o:[['A camera and a city map','tourism'],['A laptop and a coding IDE','tech'],['A stethoscope and patient charts','health'],['A microphone and a stage','entertainment'],['A whiteboard and a lesson plan','education'],['A spreadsheet and a stock ticker','finance']]},
      {q:'In a group project, you\'re usually the one who...',o:[['Plans logistics and makes it fun','tourism'],['Builds the actual product','tech'],['Looks out for everyone\'s wellbeing','health'],['Pitches the big creative idea','entertainment'],['Keeps everyone on track','education'],['Manages budget and timeline','finance']]},
      {q:'Favorite subject in school:',o:[['Geography & social studies','tourism'],['Computer science & math','tech'],['Biology & chemistry','health'],['Art, drama or PE','entertainment'],['Languages & communication','education'],['Economics & business','finance']]},
      {q:'With unlimited funding, you\'d launch:',o:[['A boutique hotel chain','tourism'],['An AI or robotics startup','tech'],['A clinic for remote areas','health'],['A sports or entertainment venue','entertainment'],['A free online learning platform','education'],['An investment fund for startups','finance']]}
    ]
  };

  var CHEERS={
    ar:['هيا بنا! 🚀','ممتاز! 🔥','اختيار رائع ✨','استمر! 💪','تبني شيئًا 👏','رائع جدًا 🌟','اقتربت! 🎯','فكرة ممتازة 💡','قوي! ⚡','اللمسة الأخيرة 🎬'],
    en:['Let\'s go! 🚀','Great! 🔥','Nice pick ✨','Keep going! 💪','You\'re building 👏','Excellent! 🌟','Almost there! 🎯','Brilliant! 💡','Strong! ⚡','Final touch 🎬']
  };

  var TOTAL=QUESTIONS.ar.length;
  var cur=0;
  var answers=new Array(TOTAL).fill(null);
  var selectedRegion=null;
  var scores={};
  var $=function(id){return document.getElementById(id)};

  function loadVideo(el,urls,cb){
    if(!el)return;var i=0;
    function next(){
      if(i>=urls.length){el.style.display='none';if(cb)cb(false);return;}
      el.src=urls[i++];el.load();
    }
    el.onloadeddata=function(){
      var p=el.play();if(p&&p.catch)p.catch(function(){});
      if(cb)cb(true);
    };
    el.onerror=next;
    next();
  }

  function playMainVideo(sector){
    var v=$('bgVideoMain');
    loadVideo(v,VIDEOS[sector]||VIDEOS.tech,function(ok){if(ok)v.classList.add('active');});
  }

  function setMood(sector){
    var t=$('bgTint');if(!t)return;
    if(!sector){t.style.background='';return;}
    t.style.background='radial-gradient(900px 700px at 20% 20%, '+MOOD[sector]+', transparent 65%),'
      +'radial-gradient(800px 600px at 85% 80%, rgba(212,160,23,.12), transparent 60%),'
      +'linear-gradient(to bottom, rgba(7,16,12,.45), rgba(7,16,12,.88))';
  }

  (function(){
    var l=$('particles');if(!l)return;
    for(var i=0;i<26;i++){
      var p=document.createElement('span');p.className='particle';
      var s=2+Math.random()*4.5;p.style.width=s+'px';p.style.height=s+'px';
      p.style.left=Math.random()*100+'vw';
      p.style.animationDuration=(9+Math.random()*14)+'s';
      p.style.animationDelay=(-Math.random()*20)+'s';
      p.style.opacity=.25+Math.random()*.5;l.appendChild(p);
    }
  })();

  function applyLang(){
    document.documentElement.lang=LANG;
    document.documentElement.dir=LANG==='ar'?'rtl':'ltr';
    document.title=T('title');

    var els=document.querySelectorAll('[data-i18n]');
    for(var i=0;i<els.length;i++){
      var k=els[i].getAttribute('data-i18n');
      if(I18N[LANG][k]) els[i].textContent=I18N[LANG][k];
    }

    $('langAr').setAttribute('aria-pressed',String(LANG==='ar'));
    $('langEn').setAttribute('aria-pressed',String(LANG==='en'));

    renderMosaic();
    checkLast();

    var active=document.querySelector('.screen.active');
    if(active){
      if(active.id==='screen-quiz') renderQuestion(false);
      else if(active.id==='screen-region') renderRegions();
      else if(active.id==='screen-result' && Object.keys(scores).length) renderResult();
    }
  }

  function setLang(lang){
    if(lang===LANG) return;
    LANG=lang;
    try{localStorage.setItem('v2030_lang',LANG);}catch(e){}
    applyLang();
  }

  function renderMosaic(){
    var m=$('mosaic');if(!m)return;m.innerHTML='';
    var rots=[-5,4,-3,5,-4,3];
    KEYS.forEach(function(k,i){
      var f=document.createElement('figure');f.className='tile';
      f.style.setProperty('--rot',rots[i]+'deg');
      f.style.setProperty('--delay',(i*.32)+'s');
      f.style.setProperty('--halo',COLOR[k]);

      var img=document.createElement('img');
      img.src=PHOTO[k];img.alt='';img.style.zIndex='0';

      var v=document.createElement('video');
      v.muted=true;v.loop=true;v.playsInline=true;v.preload='metadata';
      v.setAttribute('muted','');v.setAttribute('playsinline','');
      v.poster=PHOTO[k];
      v.style.opacity='0';v.style.transition='opacity .6s';

      f.appendChild(img);f.appendChild(v);
      var c=document.createElement('figcaption');
      c.textContent=SECTORS[LANG][k].name;
      f.appendChild(c);
      m.appendChild(f);

      setTimeout(function(){
        loadVideo(v,VIDEOS[k],function(ok){
          if(ok) v.style.opacity='1';
        });
      }, i*200 + 300);
    });
  }

  function showScreen(id){
    var s=document.querySelectorAll('.screen');
    for(var i=0;i<s.length;i++)s[i].classList.remove('active');
    var el=document.getElementById(id);if(el)el.classList.add('active');
  }

  function countTo(el,target,dur){
    if(!el)return;var t0=performance.now();
    function step(t){var p=Math.min((t-t0)/dur,1);var e=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*e);if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  }

  function startQuiz(){
    cur=0;answers=new Array(TOTAL).fill(null);selectedRegion=null;
    $('guidePage').classList.remove('active');
    document.body.style.overflow='';
    showScreen('screen-quiz');renderQuestion(true);
  }

  function renderQuestion(animate){
    var qs=QUESTIONS[LANG];
    var q=qs[cur];
    $('qText').textContent=q.q;
    $('ringNum').textContent=cur+1;
    $('stepLabel').textContent=Tf('progress',{n:cur+1,t:TOTAL});
    $('cheer').textContent=CHEERS[LANG][Math.min(cur,9)];
    $('backBtn').hidden=(cur===0);
    var off=176-(cur/TOTAL)*176;
    $('ringProgress').style.strokeDashoffset=off;
    var list=$('options');list.innerHTML='';
    q.o.forEach(function(p,i){
      var b=document.createElement('button');b.type='button';b.className='opt';
      b.style.setProperty('--i',i);b.style.setProperty('--halo',COLOR[p[1]]);b.dataset.sector=p[1];
      var mk=document.createElement('span');mk.className='opt-mark';
      var tx=document.createElement('span');tx.className='opt-text';tx.textContent=p[0];
      b.appendChild(mk);b.appendChild(tx);
      b.addEventListener('click',function(){pick(p[1]);});
      list.appendChild(b);
    });
    if(animate){var c=$('qCard');c.classList.remove('enter','exit');void c.offsetWidth;c.classList.add('enter');}
  }

  function pick(sector){
    answers[cur]=sector;
    if(navigator.vibrate){try{navigator.vibrate(18);}catch(e){}}
    var btns=$('options').querySelectorAll('.opt');
    for(var i=0;i<btns.length;i++)btns[i].disabled=true;
    var ch=$('options').querySelector('[data-sector="'+sector+'"]');
    if(ch)ch.classList.add('picked');
    playMainVideo(sector);setMood(sector);
    setTimeout(function(){
      var c=$('qCard');c.classList.remove('enter');void c.offsetWidth;c.classList.add('exit');
      setTimeout(function(){
        if(cur<TOTAL-1){cur++;renderQuestion(true);}
        else showRegionScreen();
      },360);
    },440);
  }

  function showRegionScreen(){showScreen('screen-region');renderRegions();}

  function renderRegions(){
    var g=$('regionGrid');g.innerHTML='';
    REGIONS.forEach(function(r,i){
      var b=document.createElement('button');b.type='button';b.className='region-card';
      b.style.setProperty('--i',i);
      b.innerHTML='<span class="emoji">'+r.emoji+'</span>'
        +'<div class="name">'+r.name[LANG]+'</div>'
        +'<div class="hint">'+r.hint[LANG]+'</div>';
      b.addEventListener('click',function(){selectRegion(r.key);});
      g.appendChild(b);
    });
  }

  function selectRegion(key){
    selectedRegion=key;
    if(navigator.vibrate){try{navigator.vibrate(18);}catch(e){}}
    var cards=$('regionGrid').querySelectorAll('.region-card');
    for(var i=0;i<cards.length;i++)cards[i].disabled=true;
    REGIONS.forEach(function(r,idx){if(r.key===key) cards[idx].classList.add('picked');});
    setTimeout(showResult,600);
  }

  function computeScores(){
    scores={};KEYS.forEach(function(k){scores[k]=0;});
    answers.forEach(function(s){if(s)scores[s]++;});
  }
  function getRanked(){
    return KEYS.slice().sort(function(a,b){return scores[b]-scores[a];});
  }

  function renderResult(){
    var ranked=getRanked();
    var winner=ranked[0];
    var runner=(scores[ranked[1]]>=scores[winner]-1&&scores[ranked[1]]>0)?ranked[1]:null;
    var s=SECTORS[LANG][winner];

    setMood(winner);playMainVideo(winner);

    var rv=$('rVideo'),ri=$('rImg');
    ri.src=BIG_PHOTO[winner];ri.alt=s.name;ri.style.display='block';rv.style.display='none';
    loadVideo(rv,VIDEOS[winner],function(ok){
      if(ok){rv.style.display='block';setTimeout(function(){ri.style.display='none';},400);}
    });

    $('rTitle').textContent=s.name;
    $('rTagline').textContent=s.tagline;
    $('rDesc').textContent=s.desc;

    var ch=$('rChips');ch.innerHTML='';
    s.careers.forEach(function(c){var e=document.createElement('span');e.className='chip';
      e.style.setProperty('--halo',COLOR[winner]);e.textContent=c;ch.appendChild(e);});

    var rE=$('rRunner');
    if(runner){rE.innerHTML=Tf('runnerUp',{name:SECTORS[LANG][runner].name});rE.hidden=false;}
    else rE.hidden=true;
  }

  function showResult(){
    computeScores();renderResult();
    var winner=getRanked()[0];
    var rr=$('revealRing');rr.style.setProperty('--winner',COLOR[winner]);rr.hidden=false;
    rr.style.animation='none';void rr.offsetWidth;rr.style.animation='';
    setTimeout(function(){rr.hidden=true;},1700);
    showScreen('screen-result');
    try{localStorage.setItem('v2030_last',winner);localStorage.setItem('v2030_region',selectedRegion);}catch(e){}
    setTimeout(function(){launchConfetti(COLOR[winner]);},500);
  }

  function openGuide(){
    var winner=getRanked()[0];
    var g=GUIDE_DATA[winner];
    var rd=REGION_DATA[selectedRegion]||{};
    var regionName='';
    REGIONS.forEach(function(r){if(r.key===selectedRegion)regionName=r.name[LANG];});

    var html='';
    html+='<div class="guide-hero">';
    html+='<span class="big-emoji">'+g.emoji+'</span>';
    html+='<h2>'+g.title[LANG]+'</h2>';
    html+='<p class="sub">'+Tf('gSub',{sector:SECTORS[LANG][winner].name,region:regionName})+'</p>';
    html+='</div>';

    html+='<div class="section"><h3><span class="ico">🎯</span> '+T('gWhy')+'</h3><ul class="reason-list">';
    g.why[LANG].forEach(function(w,i){
      html+='<li><span class="num">'+(i+1)+'</span><span>'+w+'</span></li>';
    });
    html+='</ul></div>';

    html+='<div class="section"><h3><span class="ico">📈</span> '+T('gStats')+'</h3><div class="stat-grid">';
    g.stats.forEach(function(s){
      html+='<div class="stat-box"><span class="num">'+s.n+'</span><span class="lbl">'+s.l[LANG]+'</span></div>';
    });
    html+='</div></div>';

    if(rd[winner]){
      html+='<div class="section"><h3><span class="ico">📍</span> '+Tf('gOpp',{region:regionName})+'</h3>';
      html+='<div class="opp-card"><div class="title"><span class="dot"></span> '+SECTORS[LANG][winner].name+' · '+regionName+'</div>';
      html+='<div class="detail">'+rd[winner][LANG]+'</div>';
      html+='<div class="tags">';
      SECTORS[LANG][winner].careers.forEach(function(c){html+='<span class="tag">'+c+'</span>';});
      html+='</div></div></div>';
    }

    html+='<div class="section"><h3><span class="ico">🚀</span> '+T('gAction')+'</h3><div class="action-list">';
    g.actions.forEach(function(a,i){
      html+='<div class="action-step"><div class="step-num">'+(i+1)+'</div><div class="content">';
      html+='<div class="title">'+a.t[LANG]+'</div>';
      html+='<div class="detail">'+a.d[LANG]+'</div>';
      html+='<a class="link" href="'+a.u+'" target="_blank" rel="noopener">'+a.l+' ←</a>';
      html+='</div></div>';
    });
    html+='</div></div>';

    html+='<div class="section"><h3><span class="ico">💡</span> '+T('gTip')+'</h3>';
    html+='<p style="color:var(--muted);font-size:.95rem;line-height:1.7">'+T('gTipText')+'</p></div>';

    $('guideInner').innerHTML=html;

    var firstAction=g.actions[0];
    var stickyTxt=$('stickyTxt');
    if(stickyTxt) stickyTxt.textContent=firstAction.t[LANG];
    $('stickyGo').textContent=T('stickyGo');
    $('stickyBar').onclick=function(){window.open(firstAction.u,'_blank');};

    $('guidePage').classList.add('active');
    document.body.style.overflow='hidden';
    $('guidePage').scrollTop=0;
  }

  function closeGuide(){
    $('guidePage').classList.remove('active');
    document.body.style.overflow='';
  }

  function launchConfetti(accent){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var colors=[accent,'#D4A017','#00664A','#fff','#FFE08A'];
    var l=$('confetti');
    for(var i=0;i<70;i++){
      var p=document.createElement('i');
      p.style.left=Math.random()*100+'vw';p.style.background=colors[i%colors.length];
      p.style.animationDuration=(2.4+Math.random()*1.8)+'s';
      p.style.animationDelay=(Math.random()*.6)+'s';
      p.style.borderRadius=Math.random()>.5?'50%':'2px';
      l.appendChild(p);
      (function(el){setTimeout(function(){try{el.remove();}catch(e){}},4800);})(p);
    }
  }

  function checkLast(){
    try{
      var last=localStorage.getItem('v2030_last');
      if(last&&SECTORS[LANG][last]){
        $('lastText').innerHTML=Tf('lastResult',{name:SECTORS[LANG][last].name});
        $('lastBanner').hidden=false;
      } else $('lastBanner').hidden=true;
    }catch(e){}
  }

  /* ==================== PDF REPORT ==================== */
  function buildPdfHtml(){
    var winner=getRanked()[0];
    var s=SECTORS[LANG][winner];
    var g=GUIDE_DATA[winner];
    var rd=REGION_DATA[selectedRegion]||{};
    var regionName='';
    REGIONS.forEach(function(r){if(r.key===selectedRegion)regionName=r.name[LANG];});

    var dateStr = new Date().toLocaleDateString(
      LANG==='ar'?'ar-SA':'en-GB',
      {year:'numeric',month:'long',day:'numeric'}
    );

    var chipsHtml='';
    s.careers.forEach(function(c){
      chipsHtml+='<span style="display:inline-block;background:#EDEFEB;color:#14241E;'
        +'padding:6px 14px;border-radius:999px;font-size:13px;font-weight:600;margin:4px">'+c+'</span>';
    });

    var reasonsHtml='';
    g.why[LANG].forEach(function(w,i){
      reasonsHtml+='<div style="display:flex;gap:12px;padding:12px 14px;background:#F7F8F6;'
        +'border-radius:10px;margin-bottom:8px">'
        +'<div style="flex-shrink:0;width:26px;height:26px;border-radius:50%;'
        +'background:linear-gradient(135deg,#D4A017,#B8860B);color:#1A1300;'
        +'display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px">'
        +(i+1)+'</div>'
        +'<div style="flex:1;font-size:13.5px;line-height:1.6;color:#14241E">'+w+'</div>'
        +'</div>';
    });

    var statsHtml='';
    g.stats.forEach(function(st){
      statsHtml+='<div style="text-align:center;padding:14px 8px;background:#F7F8F6;'
        +'border-radius:10px;border:1px solid #EDEFEB">'
        +'<div style="font-size:22px;font-weight:900;color:#00664A;font-family:Cairo">'+st.n+'</div>'
        +'<div style="font-size:11.5px;color:#4B5A54;margin-top:4px;line-height:1.3">'
        +st.l[LANG]+'</div>'
        +'</div>';
    });

    var actionsHtml='';
    g.actions.forEach(function(a,i){
      actionsHtml+='<div style="display:flex;gap:12px;padding:14px;background:#F7F8F6;'
        +'border-radius:10px;margin-bottom:8px;border:1px solid #EDEFEB">'
        +'<div style="flex-shrink:0;width:32px;height:32px;border-radius:10px;'
        +'background:linear-gradient(135deg,#00664A,#008F68);color:#fff;'
        +'display:flex;align-items:center;justify-content:center;font-weight:900;'
        +'font-size:14px;font-family:Cairo">'+(i+1)+'</div>'
        +'<div style="flex:1">'
        +'<div style="font-size:14px;font-weight:700;color:#003D2C;margin-bottom:4px;'
        +'font-family:Cairo">'+a.t[LANG]+'</div>'
        +'<div style="font-size:12.5px;color:#4B5A54;line-height:1.5;margin-bottom:6px">'
        +a.d[LANG]+'</div>'
        +'<div style="display:inline-block;padding:4px 10px;background:rgba(212,160,23,.15);'
        +'border:1px solid rgba(212,160,23,.4);color:#8B6914;border-radius:8px;'
        +'font-size:11.5px;font-weight:700">'+a.l+'</div>'
        +'</div>'
        +'</div>';
    });

    var sectionTitle = function(emoji,text){
      return '<div style="font-size:15px;font-weight:900;color:#003D2C;margin:22px 0 12px;'
        +'padding-bottom:8px;border-bottom:2px solid #EDEFEB;font-family:Cairo">'
        +emoji+' '+text+'</div>';
    };

    return '<div dir="rtl" style="'
      +'font-family:Tajawal,system-ui,sans-serif;'
      +'direction:rtl;text-align:right;color:#14241E;background:#fff;'
      +'padding:44px 40px;width:794px;min-height:1123px;box-sizing:border-box;'
      +'">'

      +'<div style="display:flex;justify-content:space-between;align-items:center;'
      +'border-bottom:3px solid #00664A;padding-bottom:18px;margin-bottom:28px">'
      +'<div>'
      +'<div style="font-size:24px;font-weight:900;color:#00664A;font-family:Cairo">رؤية 2030</div>'
      +'<div style="font-size:13px;color:#4B5A54;margin-top:2px">تقرير المسار المهني المخصص</div>'
      +'</div>'
      +'<div style="background:linear-gradient(135deg,#00664A,#D4A017);color:#fff;'
      +'width:56px;height:56px;border-radius:14px;display:flex;align-items:center;'
      +'justify-content:center;font-size:28px;font-weight:900;font-family:Cairo">ر</div>'
      +'</div>'

      +'<div style="text-align:center;margin-bottom:28px">'
      +'<div style="font-size:60px;margin-bottom:10px;line-height:1">'+g.emoji+'</div>'
      +'<div style="font-size:12px;color:#D4A017;font-weight:700;letter-spacing:2px;'
      +'margin-bottom:8px">'+T('eyebrow')+'</div>'
      +'<div style="font-size:32px;font-weight:900;color:#003D2C;margin-bottom:6px;'
      +'font-family:Cairo">'+s.name+'</div>'
      +'<div style="font-size:16px;color:#D4A017;font-weight:700">'+s.tagline+'</div>'
      +'</div>'

      +'<div style="background:#F7F8F6;border-right:4px solid #00664A;padding:18px 20px;'
      +'border-radius:10px;margin-bottom:8px">'
      +'<div style="font-size:13.5px;line-height:1.75;color:#14241E">'+s.desc+'</div>'
      +'</div>'

      +sectionTitle('💼',T('careersTitle'))
      +'<div style="margin-bottom:8px">'+chipsHtml+'</div>'

      +sectionTitle('🎯',T('gWhy'))
      +reasonsHtml

      +sectionTitle('📈',T('gStats'))
      +'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;'
      +'margin-bottom:8px">'+statsHtml+'</div>'

      +(rd[winner]
        ? sectionTitle('📍',Tf('gOpp',{region:regionName}))
          +'<div style="background:linear-gradient(135deg,rgba(0,102,74,.08),'
          +'rgba(212,160,23,.05));padding:16px 18px;border-radius:10px;'
          +'border:1px solid #EDEFEB">'
          +'<div style="font-size:13.5px;line-height:1.7;color:#14241E">'
          +rd[winner][LANG]+'</div>'
          +'</div>'
        : '')

      +sectionTitle('🚀',T('gAction'))
      +actionsHtml

      +'<div style="margin-top:20px;background:rgba(212,160,23,.1);border:1px dashed #D4A017;'
      +'padding:16px 18px;border-radius:10px">'
      +'<div style="font-size:13.5px;font-weight:700;color:#8B6914;margin-bottom:6px;'
      +'font-family:Cairo">💡 '+T('gTip')+'</div>'
      +'<div style="font-size:12.5px;line-height:1.7;color:#14241E">'+T('gTipText')+'</div>'
      +'</div>'

      +'<div style="text-align:center;padding-top:22px;margin-top:28px;'
      +'border-top:2px solid #EDEFEB;color:#4B5A54;font-size:11px">'
      +'<div>'+T('footer')+'</div>'
      +'<div style="margin-top:4px">'+dateStr+'</div>'
      +'</div>'

      +'</div>';
  }

  function downloadReport(){
    if(typeof html2pdf === 'undefined'){
      alert(LANG==='ar'
        ? 'مكتبة PDF لم تُحمّل بعد. تأكد من اتصالك بالإنترنت ثم أعد المحاولة.'
        : 'PDF library not loaded. Check your connection and try again.');
      return;
    }

    var btn=$('copyBtn');
    var original=T('share');
    btn.textContent=T('downloading');
    btn.disabled=true;

    var container=document.createElement('div');
    container.style.position='fixed';
    container.style.left='-9999px';
    container.style.top='0';
    container.style.width='794px';
    container.style.background='#fff';
    container.style.zIndex='-1';
    container.innerHTML=buildPdfHtml();
    document.body.appendChild(container);

    var winner=getRanked()[0];
    var opt={
      margin:0,
      filename:'vision2030-'+winner+'-report.pdf',
      image:{type:'jpeg',quality:0.98},
      html2canvas:{scale:2,useCORS:true,backgroundColor:'#ffffff',logging:false},
      jsPDF:{unit:'mm',format:'a4',orientation:'portrait'},
      pagebreak:{mode:['css','legacy'],avoid:'.action-step,.reason-list > div'}
    };

    html2pdf().set(opt).from(container).save()
      .then(function(){
        try{container.remove();}catch(e){}
        btn.textContent=T('copied');
        setTimeout(function(){btn.textContent=original;btn.disabled=false;},1800);
      })
      .catch(function(err){
        console.error(err);
        try{container.remove();}catch(e){}
        btn.textContent=T('pdfError');
        setTimeout(function(){btn.textContent=original;btn.disabled=false;},2200);
      });
  }

  function on(id,ev,fn){var el=document.getElementById(id);if(!el)return;el.addEventListener(ev,function(e){
    try{fn(e);}catch(err){console.error(err);}});}

  on('langAr','click',function(){setLang('ar');});
  on('langEn','click',function(){setLang('en');});
  on('startBtn','click',startQuiz);
  on('retakeBtn','click',startQuiz);
  on('backBtn','click',function(){if(cur>0){cur--;renderQuestion(true);}});
  on('discoverBtn','click',openGuide);
  on('guideClose','click',closeGuide);
  on('copyBtn','click',downloadReport);

  try{
    applyLang();
    playMainVideo('tech');
    setTimeout(function(){countTo($('s1'),6,1300);countTo($('s2'),10,1300);countTo($('s3'),60,1300);},1100);
    console.log('✓ Ready · Lang:',LANG);
  }catch(e){console.error(e);}
})();