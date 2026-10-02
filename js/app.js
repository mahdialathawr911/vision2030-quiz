(function(){
  'use strict';

  var LANG = 'ar';
  try{ LANG = localStorage.getItem('v2030_lang') || 'ar'; }catch(e){}

  var I18N = {
    ar:{
      title:'اكتشف مسارك · رؤية 2030',
      wvEyebrow:'رؤية السعودية 2030',
      wvTitleA:'اكتشف مسارك',wvTitleB:'المستقبلي',
      wvTag:'أجب عن 10 أسئلة بسيطة لتكتشف المجال الذي يناسبك.',
      wvS1:'قطاعات',wvS2:'أسئلة',wvS3:'ثانية',
      wvJourneyLabel:'كيف تعمل الرحلة',
      j1T:'أجب عن الأسئلة',j1D:'نفهم ميولك واهتماماتك',
      j2T:'اختر منطقتك',j2D:'لتظهر لك فرص أقرب إليك',
      j3T:'احصل على دليلك',j3D:'مسار مهني وفرص عملية قابلة للطباعة',
      j4T:'',j4D:'',
      j5T:'',j5D:'',
      jCtaT:'ابدأ الرحلة الآن',jCtaD:'دقيقة واحدة وتكتشف مسارك',
      journeyFoot:'بدون تسجيل · بدون بيانات شخصية · أقل من دقيقة',
      heroTitle:'اكتشف مسارك المستقبلي',
      heroSub:'7 قطاعات تقود رؤية 2030. أجب بصدق، حدّد منطقتك، واحصل على دليل مخصص.',
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
      copied:'تم التحميل ✓',downloading:'جاري تجهيز التقرير…',
      pdfError:'تعذّر إنشاء التقرير',
      lastResult:'آخر مرة كنت <b>{name}</b> — أعد التجربة!',
      footer:'مستوحى من رؤية السعودية 2030 · تجربة استكشافية',
      gWhy:'ليش أنت مناسب لهذا المجال؟',gStats:'القطاع بالأرقام',
      gOpp:'الفرص في {region}',gAction:'خطتك العملية — ابدأ الآن',
      gTip:'نصيحة إضافية',
      gTipText:'ابدأ بخطوة واحدة فقط اليوم. سجّل في برنامج واحد من القائمة أعلاه، وأكمل التسجيل. الخطوة الصغيرة اليوم تصنع فرقاً كبيراً بعد سنة.',
      gSub:'دليلك المخصص لتبدأ رحلتك في {sector} — في {region}',
      stickyGo:'ابدأ الآن',shareText:'اكتشفت أنني {sector}!'
    },
    en:{
      title:'Discover Your Path · Vision 2030',
      wvEyebrow:'Saudi Vision 2030',
      wvTitleA:'Discover your',wvTitleB:'future path',
      wvTag:'Answer 10 simple questions to find the sector that fits you.',
      wvS1:'sectors',wvS2:'questions',wvS3:'seconds',
      wvJourneyLabel:'How it works',
      j1T:'Answer the questions',j1D:'We learn your interests',
      j2T:'Choose your region',j2D:'See opportunities closer to you',
      j3T:'Receive your guide',j3D:'A printable career path and practical opportunities',
      j4T:'',j4D:'',
      j5T:'',j5D:'',
      jCtaT:'Start the journey now',jCtaD:'One minute to discover your path',
      journeyFoot:'No sign-up · No personal data · Under a minute',
      heroTitle:'Discover Your Future Path',
      heroSub:'7 sectors driving Vision 2030.',
      b1:'10 questions',b2:'+ region',b3:'full career guide',
      s1:'sectors',s2:'questions',s3:'seconds',
      startBtn:'Start the journey',meta:'No sign-up · No personal data',
      backBtn:'← Back',
      progress:'Question {n} of {t}',
      regionStep:'Last step',regionCheer:'Where do you see yourself? 🗺️',
      regionTitle:'Choose the region:',
      eyebrow:'Your best-fit sector',
      careersTitle:'Example careers',
      runnerUp:'<b>Close second:</b> {name}',
      discover:'Explore your full path',
      retake:'Play again',share:'Download result',
      copied:'Downloaded ✓',downloading:'Preparing report…',
      pdfError:'Could not generate report',
      lastResult:'Last time you were <b>{name}</b>',
      footer:'Inspired by Saudi Vision 2030',
      gWhy:'Why you fit this field?',gStats:'The sector in numbers',
      gOpp:'Opportunities in {region}',gAction:'Your action plan',
      gTip:'Extra tip',gTipText:'Start with one step today.',
      gSub:'Your guide for {sector} in {region}',
      stickyGo:'Start now',shareText:'I got {sector}!'
    }
  };

  function T(k){ return I18N[LANG][k]; }
  function Tf(k,v){var s=I18N[LANG][k];if(typeof s!=='string')return s;
    return s.replace(/\{(\w+)\}/g,function(_,n){return v[n]!=null?v[n]:'';});}

  var ASSETS = {
    tourism:{image:'assets/images/sectors/tourism.jpg',video:'assets/media/sectors/tourism.mp4'},
    tech:{image:'assets/images/sectors/tech.jpg',video:'assets/media/sectors/tech.mp4'},
    health:{image:'assets/images/sectors/health.jpg',video:'assets/media/sectors/health.mp4'},
    entertainment:{image:'assets/images/sectors/entertainment.jpg',video:'assets/media/sectors/entertainment.mp4'},
    education:{image:'assets/images/sectors/education.jpg',video:'assets/media/sectors/education.mp4'},
    finance:{image:'assets/images/sectors/finance.jpg',video:'assets/media/sectors/finance.mp4'},
    engineering:{image:'assets/images/sectors/engineering.svg',video:'assets/media/sectors/engineering.mp4'}
  };

  var KEYS=['tourism','tech','health','entertainment','education','finance','engineering'];
  var COLOR={tourism:'#FF7A45',tech:'#4C8DFF',health:'#2DD4BF',
    entertainment:'#C084FC',education:'#818CF8',finance:'#FBBF24',engineering:'#EF4444'};
  var MOOD={tourism:'rgba(255,122,69,.32)',tech:'rgba(76,141,255,.32)',
    health:'rgba(45,212,191,.32)',entertainment:'rgba(192,132,252,.30)',
    education:'rgba(129,140,248,.30)',finance:'rgba(251,191,36,.28)',
    engineering:'rgba(239,68,68,.32)'};

  var SECTORS = {
    ar:{
      tourism:{name:'السياحة والضيافة',tagline:'رفيق الثقافات 🌍',desc:'تنبهر بالأماكن الجديدة والناس والقصص.',careers:['مرشد سياحي','مدير فندق','أمين تراث','منظم فعاليات']},
      tech:{name:'التقنية والابتكار',tagline:'باني المستقبل الرقمي 💡',desc:'تستمتع ببناء ما لم يكن موجودًا.',careers:['مهندس برمجيات','عالم بيانات','محلل أمن سيبراني','باحث AI']},
      health:{name:'الصحة والطب',tagline:'صانع حياة أفضل ❤️',desc:'تهتم براحة الناس وتسعى لتأثير مباشر. القطاع الصحي يتوسع بسرعة مع مستشفيات ومبادرات تقنية صحية.',careers:['طبيب','ممرض','أخصائي علاج طبيعي','أخصائي صحة عامة']},
      entertainment:{name:'الترفيه والرياضة',tagline:'صانع التجارب 🎬',desc:'تحب خلق لحظات يتذكرها الناس.',careers:['مصمم ألعاب','مدرب رياضي','منتج أفلام','منتج فعاليات']},
      education:{name:'التعليم ورأس المال البشري',tagline:'باني المعرفة 📚',desc:'تستمتع بمساعدة الآخرين على النمو.',careers:['معلم','مصمم مناهج','مدرب شركات','مطور EdTech']},
      finance:{name:'المال وريادة الأعمال',tagline:'استراتيجي النمو 📊',desc:'تفكر بالنمو والفرص والمخاطر.',careers:['محلل مالي','مصرفي استثماري','مؤسس Fintech','رائد أعمال']},
      engineering:{name:'الهندسة والتصنيع',tagline:'باني النهضة الصناعية 🏗️',desc:'تفكر بالأنظمة والأرقام والحلول العملية.',careers:['مهندس ميكانيكي','مهندس صناعي','مهندس كهرباء','مهندس روبوتات']}
    },
    en:{
      tourism:{name:'Tourism',tagline:'Culture Connector 🌍',desc:'You light up around new places.',careers:['Guide','Hotel manager','Curator','Event planner']},
      tech:{name:'Technology',tagline:'Digital Builder 💡',desc:'You love building new things.',careers:['Software engineer','Data scientist','Security analyst','AI researcher']},
      health:{name:'Health & Medicine',tagline:'Life Enhancer ❤️',desc:'You care about people.',careers:['Doctor','Nurse','Physiotherapist','Public health']},
      entertainment:{name:'Entertainment',tagline:'Experience Creator 🎬',desc:'You love creating moments.',careers:['Game designer','Sports coach','Film producer','Event producer']},
      education:{name:'Education',tagline:'Knowledge Builder 📚',desc:'You enjoy helping others grow.',careers:['Teacher','Curriculum designer','Trainer','EdTech developer']},
      finance:{name:'Finance',tagline:'Growth Strategist 📊',desc:'You think in growth & risk.',careers:['Analyst','Investment banker','Fintech founder','Entrepreneur']},
      engineering:{name:'Engineering',tagline:'Industrial Builder 🏗️',desc:'You think in systems.',careers:['Mechanical','Industrial','Electrical','Robotics']}
    }
  };

  var REGIONS=[
    {key:'riyadh',name:{ar:'الرياض',en:'Riyadh'},emoji:'🏙️',hint:{ar:'عاصمة المال والتقنية',en:'Capital of finance & tech'}},
    {key:'jeddah',name:{ar:'جدة والغربية',en:'Jeddah'},emoji:'🌊',hint:{ar:'سياحة فاخرة وتجارة',en:'Luxury tourism'}},
    {key:'neom',name:{ar:'نيوم وتبوك',en:'NEOM'},emoji:'⛰️',hint:{ar:'مستقبل السياحة والصناعة',en:'Future of industry'}},
    {key:'eastern',name:{ar:'المنطقة الشرقية',en:'Eastern'},emoji:'⚙️',hint:{ar:'صناعة وطاقة',en:'Industry & energy'}},
    {key:'asir',name:{ar:'عسير',en:'Asir'},emoji:'🌄',hint:{ar:'سياحة جبلية',en:'Mountain tourism'}},
    {key:'madinah',name:{ar:'المدينة المنورة',en:'Madinah'},emoji:'🕌',hint:{ar:'سياحة دينية',en:'Religious tourism'}},
    {key:'najran',name:{ar:'نجران',en:'Najran'},emoji:'🏔️',hint:{ar:'تراث وثقافة',en:'Heritage'}},
    {key:'jazan',name:{ar:'جيزان',en:'Jazan'},emoji:'🌴',hint:{ar:'سياحة ساحلية',en:'Coastal tourism'}}
  ];

  var REGION_DATA={
    riyadh:{tourism:{ar:'القدية والدرعية.',en:'Qiddiya & Diriyah.'},tech:{ar:'نيوم الصناعية ومراكز البيانات.',en:'NEOM Industrial.'},health:{ar:'المدن الطبية ومجمع الملك عبدالله.',en:'Medical cities.'},entertainment:{ar:'القدية وموسم الرياض.',en:'Qiddiya & Riyadh Season.'},education:{ar:'جامعات ومدارس.',en:'Universities.'},finance:{ar:'مركز الملك عبدالله المالي.',en:'KAFD.'},engineering:{ar:'المدينة الصناعية الثانية.',en:'Second Industrial City.'}},
    jeddah:{tourism:{ar:'أتلانتس ون آند أونلي.',en:'Atlantis, One&Only.'},tech:{ar:'التجارة الإلكترونية.',en:'E-commerce.'},health:{ar:'مستشفيات كبرى.',en:'Major hospitals.'},entertainment:{ar:'موسم جدة.',en:'Jeddah Season.'},education:{ar:'جامعات دولية.',en:'Universities.'},finance:{ar:'المركز المالي الغربي.',en:'Financial hub.'},engineering:{ar:'مدينة جدة الصناعية.',en:'Industrial city.'}},
    neom:{tourism:{ar:'ذا لاين وتروجينا.',en:'The Line, Trojena.'},tech:{ar:'أوكساغون.',en:'Oxagon.'},health:{ar:'مستشفيات ذكية.',en:'Smart hospitals.'},entertainment:{ar:'تروجينا الجبلية.',en:'Trojena.'},education:{ar:'جامعات نيوم.',en:'NEOM universities.'},finance:{ar:'مركز استثماري.',en:'Investment hub.'},engineering:{ar:'أوكساغون الصناعية.',en:'Oxagon industrial.'}},
    eastern:{tourism:{ar:'الأحساء والقطيف.',en:'Al-Ahsa & Qatif.'},tech:{ar:'مدينة الملك سلمان للطاقة.',en:'King Salman Energy City.'},health:{ar:'مستشفيات كبرى.',en:'Major hospitals.'},entertainment:{ar:'الدمام والخبر.',en:'Dammam & Khobar.'},education:{ar:'جامعات.',en:'Universities.'},finance:{ar:'مراكز مالية.',en:'Financial centers.'},engineering:{ar:'أرامكو وسابك والجبيل.',en:'Aramco, SABIC, Jubail.'}},
    asir:{tourism:{ar:'واجهة عسير البحرية.',en:'Asir Sea Front.'},tech:{ar:'مراكز تقنية ناشئة.',en:'Tech hubs.'},health:{ar:'مستشفيات عسير.',en:'Asir hospitals.'},entertainment:{ar:'مهرجان صيف عسير.',en:'Asir Summer Festival.'},education:{ar:'جامعة الملك خالد.',en:'KKU.'},finance:{ar:'فروع بنكية.',en:'Bank branches.'},engineering:{ar:'مصانع أسمنت.',en:'Cement factories.'}},
    madinah:{tourism:{ar:'سياحة دينية وتراثية.',en:'Religious tourism.'},tech:{ar:'مدينة المعرفة.',en:'KEC.'},health:{ar:'مستشفيات كبرى.',en:'Major hospitals.'},entertainment:{ar:'فعاليات ثقافية.',en:'Cultural events.'},education:{ar:'جامعة طيبة.',en:'Taibah University.'},finance:{ar:'مراكز مالية.',en:'Financial centers.'},engineering:{ar:'مصانع التمور.',en:'Dates factories.'}},
    najran:{tourism:{ar:'الأخدود وقصر سعدان.',en:'Al-Ukhdud.'},tech:{ar:'مراكز تقنية.',en:'Tech hubs.'},health:{ar:'مستشفى نجران.',en:'Najran Hospital.'},entertainment:{ar:'مهرجانات تراثية.',en:'Heritage festivals.'},education:{ar:'جامعة نجران.',en:'Najran University.'},finance:{ar:'فروع بنكية.',en:'Bank branches.'},engineering:{ar:'مصانع الأسمنت.',en:'Cement factories.'}},
    jazan:{tourism:{ar:'جزر فرسان.',en:'Farasan Islands.'},tech:{ar:'مراكز تقنية.',en:'Tech hubs.'},health:{ar:'مستشفيات كبرى.',en:'Major hospitals.'},entertainment:{ar:'مهرجان جازان الشتوي.',en:'Jazan Winter Festival.'},education:{ar:'جامعة جازان.',en:'Jazan University.'},finance:{ar:'مراكز تجارية.',en:'Commercial centers.'},engineering:{ar:'مدينة جازان الصناعية.',en:'Jazan Industrial City.'}}
  };

  var GUIDE_DATA={
    tourism:{emoji:'🧭',title:{ar:'مسار السياحة والضيافة',en:'Tourism & Hospitality'},why:{ar:['تستمتع بتصميم التجارب والرحلات','تفضل التعامل مع الناس من ثقافات مختلفة','تبحث عن عمل يجمع بين الحركة والإبداع'],en:['You enjoy designing experiences','You love interacting with people','You want work mixing motion & creativity']},stats:[{n:'150M',l:{ar:'زيارة سنوية 2030',en:'annual visits 2030'}},{n:'500K',l:{ar:'غرفة فندقية',en:'hotel rooms'}},{n:'851M',l:{ar:'ريال دعم للكوادر',en:'SAR support'}},{n:'147K',l:{ar:'يعملون حالياً',en:'working now'}}],actions:[{t:{ar:'سجّل في دروب',en:'Join Doroob'},d:{ar:'22 شهادة + 12 دورة.',en:'22 certificates + 12 courses.'},u:'https://doroob.sa',l:'doroob.sa'},{t:{ar:'انضم لتمهير',en:'Join Tamheer'},d:{ar:'تدريب مع مكافأة.',en:'Training with stipend.'},u:'https://hrdf.org.sa',l:'hrdf.org.sa'},{t:{ar:'تقدّم لمنصة سبل',en:'Apply on Subol'},d:{ar:'إرشاد مهني مجاني.',en:'Free counseling.'},u:'https://subol.sa',l:'subol.sa'}]},
    tech:{emoji:'💻',title:{ar:'مسار التقنية والابتكار',en:'Technology & Innovation'},why:{ar:['تستمتع ببناء أشياء جديدة','تفكر بطريقة منطقية','تحب التحديات التقنية'],en:['You love building new things','You think logically','You enjoy challenges']},stats:[{n:'200+',l:{ar:'معسكر في طويق',en:'Tuwaiq bootcamps'}},{n:'80%',l:{ar:'توظيف خريجي طويق',en:'grads hired'}},{n:'375K',l:{ar:'ريال دعم أطلق',en:'SAR from ATC'}},{n:'35K+',l:{ar:'خريج من طويق',en:'graduates'}}],actions:[{t:{ar:'سجّل في طويق',en:'Register at Tuwaiq'},d:{ar:'200+ معسكر مجاني.',en:'200+ free bootcamps.'},u:'https://tuwaiq.edu.sa',l:'tuwaiq.edu.sa'},{t:{ar:'تقدّم لمسرعة أطلق',en:'Apply to ATC'},d:{ar:'دعم 375 ألف ريال.',en:'SAR 375K support.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'},{t:{ar:'تصفّح جدارات',en:'Browse Jadarat'},d:{ar:'34 ألف وظيفة.',en:'34K jobs.'},u:'https://jadarat.sa',l:'jadarat.sa'}]},
    health:{emoji:'🩺',title:{ar:'مسار الصحة والطب',en:'Health & Medicine'},why:{ar:['تهتم بمساعدة الناس وراحتهم','تتحمل المسؤولية تحت الضغط','تبحث عن تأثير مباشر'],en:['You care about people','You handle responsibility','You seek direct impact']},stats:[{n:'+70K',l:{ar:'مبتعث في الصحة',en:'health scholars'}},{n:'3K',l:{ar:'مكافأة تمهير',en:'stipend'}},{n:'10K',l:{ar:'متدرب تمريض',en:'nursing trainees'}},{n:'50%',l:{ar:'دعم الرواتب',en:'salary support'}}],actions:[{t:{ar:'انضم لتمهير',en:'Join Tamheer'},d:{ar:'تدريب في المستشفيات.',en:'Hospital training.'},u:'https://hrdf.org.sa',l:'hrdf.org.sa'},{t:{ar:'جلسة إرشاد من سبل',en:'Subol counseling'},d:{ar:'اختبار + مرشد.',en:'Test + counselor.'},u:'https://subol.sa',l:'subol.sa'},{t:{ar:'استكشف الابتعاث',en:'Explore scholarships'},d:{ar:'70 ألف مبتعث.',en:'70K scholars.'},u:'https://sachs.edu.sa',l:'sachs.edu.sa'}]},
    entertainment:{emoji:'🎬',title:{ar:'مسار الترفيه والرياضة',en:'Entertainment & Sports'},why:{ar:['تحب خلق لحظات سعيدة','تفكر بطريقة إبداعية','تزدهر في البيئات الحيوية'],en:['You love creating joy','You think creatively','You thrive in vibrant spaces']},stats:[{n:'9.8B$',l:{ar:'استثمار في القدية',en:'Qiddiya investment'}},{n:'200+',l:{ar:'وظيفة حالياً',en:'current jobs'}},{n:'100K',l:{ar:'زائر يومي متوقع',en:'daily visitors'}},{n:'40',l:{ar:'دقيقة من الرياض',en:'min from Riyadh'}}],actions:[{t:{ar:'قدّم للقدية',en:'Apply to Qiddiya'},d:{ar:'200+ فرصة.',en:'200+ jobs.'},u:'https://qiddiya.com',l:'qiddiya.com'},{t:{ar:'مسرعة أطلق',en:'Apply to ATC'},d:{ar:'375 ألف ريال.',en:'SAR 375K.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'},{t:{ar:'أكاديمية منشآت',en:'Monshaat Academy'},d:{ar:'دورات مجانية.',en:'Free courses.'},u:'https://monshaat.gov.sa',l:'monshaat.gov.sa'}]},
    education:{emoji:'📚',title:{ar:'مسار التعليم',en:'Education'},why:{ar:['تستمتع بمساعدة الآخرين','تصبر وتشرح بوضوح','تبحث عن أثر طويل المدى'],en:['You love helping others learn','You\'re patient and clear','You seek long-term impact']},stats:[{n:'70K',l:{ar:'مبتعث بحلول 2030',en:'scholars by 2030'}},{n:'500K+',l:{ar:'مستفيد من مسك',en:'Misk users'}},{n:'95%',l:{ar:'استعدوا مهنياً',en:'job-ready'}},{n:'12K+',l:{ar:'ساعة تدريبية',en:'training hours'}}],actions:[{t:{ar:'سجّل في مسك',en:'Register at Misk'},d:{ar:'برامج إعداد مهني.',en:'Career prep.'},u:'https://hub.misk.org.sa',l:'misk.org.sa'},{t:{ar:'قدّم للابتعاث',en:'Apply for scholarship'},d:{ar:'برنامج خادم الحرمين.',en:'Custodian program.'},u:'https://sachs.edu.sa',l:'sachs.edu.sa'},{t:{ar:'جرّب جدارات',en:'Try Jadarat'},d:{ar:'وظائف تعليمية.',en:'Education jobs.'},u:'https://jadarat.sa',l:'jadarat.sa'}]},
    finance:{emoji:'📊',title:{ar:'مسار المال والأعمال',en:'Finance & Business'},why:{ar:['تفكر بالنمو والمخاطر','تحب الأرقام والتحليل','تبحث عن نتائج ملموسة'],en:['You think in growth & risk','You love numbers','You seek measurable results']},stats:[{n:'600K',l:{ar:'وظيفة جديدة في الرياض',en:'new jobs'}},{n:'3T$',l:{ar:'سوق الأسهم المستهدف',en:'target market'}},{n:'375K',l:{ar:'ريال دعم أطلق',en:'SAR from ATC'}},{n:'158+',l:{ar:'دورة في منشآت',en:'Monshaat courses'}}],actions:[{t:{ar:'أكاديمية منشآت',en:'Monshaat Academy'},d:{ar:'158+ دورة مجانية.',en:'158+ free courses.'},u:'https://monshaat.gov.sa',l:'monshaat.gov.sa'},{t:{ar:'مسرعة أطلق',en:'Apply to ATC'},d:{ar:'دعم 375 ألف.',en:'SAR 375K.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'},{t:{ar:'وظائف جدارات',en:'Jadarat jobs'},d:{ar:'وظائف بنكية.',en:'Banking jobs.'},u:'https://jadarat.sa',l:'jadarat.sa'}]},
    engineering:{emoji:'🏗️',title:{ar:'مسار الهندسة والتصنيع',en:'Engineering & Manufacturing'},why:{ar:['تفكر بالأنظمة والعمليات','تحب الأرقام الدقيقة','تبحث عن بناء أشياء تدوم'],en:['You think in systems','You love precision','You seek lasting things']},stats:[{n:'+1000',l:{ar:'مصنع جديد بحلول 2030',en:'new factories by 2030'}},{n:'36B$',l:{ar:'استثمار صناعي',en:'industrial investment'}},{n:'200K',l:{ar:'وظيفة مستهدفة',en:'target jobs'}},{n:'13%',l:{ar:'مساهمة في الناتج',en:'GDP contribution'}}],actions:[{t:{ar:'سجّل في هيئة المهندسين',en:'Register at Saudi Council'},d:{ar:'اعتماد مهني.',en:'Accreditation.'},u:'https://saudieng.sa',l:'saudieng.sa'},{t:{ar:'تمهير الهندسي',en:'Join Tamheer'},d:{ar:'تدريب في المصانع.',en:'Factory training.'},u:'https://hrdf.org.sa',l:'hrdf.org.sa'},{t:{ar:'مسرعة أطلق',en:'Apply to ATC'},d:{ar:'دعم 375 ألف.',en:'SAR 375K.'},u:'https://ntdp.gov.sa',l:'ntdp.gov.sa'}]}
  };

  var QUESTIONS={
    ar:[
      {q:'ما نوع المشكلة التي تستمتع بحلها أكثر؟',o:[['تصميم رحلة سياحية لا تُنسى','tourism'],['حل خلل برمجي معقّد','tech'],['معرفة سبب شعور شخص بالتعب','health'],['جعل فعالية أكثر إثارة','entertainment'],['تبسيط فكرة صعبة للجميع','education'],['إيجاد أذكى طريقة لتنمية الميزانية','finance'],['تصميم نظام أو آلة تنتج بكفاءة','engineering']]},
      {q:'عطلة نهاية أسبوعك المثالية:',o:[['استكشاف مدينة أو موقع تاريخي','tourism'],['بناء مشروع تقني شخصي','tech'],['التطوع في عيادة','health'],['حضور حفلة أو مباراة','entertainment'],['القراءة أو تدريس صديق','education'],['متابعة الاستثمارات','finance'],['تفكيك جهاز وإعادة تركيبه','engineering']]},
      {q:'أي مشروع من رؤية 2030 يحمسك أكثر؟',o:[['منتجعات البحر الأحمر','tourism'],['نيوم والمدن الذكية','tech'],['المستشفيات والتقنية الصحية','health'],['مدينة القدية','entertainment'],['برامج التعليم والمهارات','education'],['الرياض مركز مالي عالمي','finance'],['أوكساغون الصناعية','engineering']]},
      {q:'أصدقاؤك يصفونك بأنك...',o:[['المضيف المغامر','tourism'],['من يصلح مشاكل التقنية','tech'],['الحنون عند المرض','health'],['روح الحفلة','entertainment'],['الصبور الشارح','education'],['المخطط للميزانية','finance'],['من يفكك ويُصلح','engineering']]},
      {q:'اختر عنوان خبر تحب أن تقرأه عنك:',o:[['«مرشد يحوّل وجهة مجهولة إلى مقصد»','tourism'],['«مهندس يبني تطبيقًا للملايين»','tech'],['«طبيب يُنقذ حياة إنسان»','health'],['«منتج وراء أكبر مهرجان»','entertainment'],['«معلم يغيّر طريقة التعلم»','education'],['«محلل يكتشف فرصة استثمارية»','finance'],['«مهندس يبتكر مصنعًا ذكيًا»','engineering']]},
      {q:'ما أهم شيء في وظيفتك؟',o:[['التعرف على أشخاص من العالم','tourism'],['بناء أشياء جديدة','tech'],['إحداث فرق في حياة إنسان','health'],['خلق لحظات لا تُنسى','entertainment'],['مساعدة الآخرين على النمو','education'],['رؤية نمو ونتائج','finance'],['رؤية منتج صنعته بيدك','engineering']]},
      {q:'أداة تحب أن تتقنها:',o:[['كاميرا وخريطة','tourism'],['حاسوب وبيئة برمجة','tech'],['سماعة طبية وملفات','health'],['ميكروفون ومسرح','entertainment'],['سبورة وخطة درس','education'],['جدول بيانات ومؤشر أسهم','finance'],['رسم هندسي وأدوات قياس','engineering']]},
      {q:'في العمل الجماعي، أنت من...',o:[['ينظم ويجعل الأمر ممتعًا','tourism'],['يبني المنتج فعليًا','tech'],['يهتم براحة الجميع','health'],['يطرح الفكرة الإبداعية','entertainment'],['يبقي الفريق على المسار','education'],['يدير الميزانية','finance'],['يحل المشاكل التقنية','engineering']]},
      {q:'المادة المفضلة في المدرسة:',o:[['الجغرافيا والاجتماعيات','tourism'],['الحاسب والرياضيات','tech'],['الأحياء والكيمياء','health'],['الفن أو المسرح','entertainment'],['اللغات والتواصل','education'],['الاقتصاد والأعمال','finance'],['الفيزياء والرياضيات','engineering']]},
      {q:'بتمويل غير محدود، ستطلق:',o:[['سلسلة فنادق بوتيك','tourism'],['شركة AI أو روبوتات','tech'],['مستشفى أو عيادة متطورة','health'],['منشأة رياضية','entertainment'],['منصة تعليمية','education'],['صندوق للشركات الناشئة','finance'],['مصنعًا ذكيًا','engineering']]}
    ],
    en:[
      {q:'What kind of problem do you enjoy solving most?',o:[['Designing a travel experience','tourism'],['Debugging code','tech'],['Diagnosing illness','health'],['Making events exciting','entertainment'],['Explaining hard concepts','education'],['Growing a budget','finance'],['Designing efficient machines','engineering']]},
      {q:'Pick your ideal weekend:',o:[['Exploring a new city','tourism'],['Building a side project','tech'],['Volunteering at a clinic','health'],['At a concert','entertainment'],['Reading or tutoring','education'],['Tracking investments','finance'],['Taking apart a device','engineering']]},
      {q:'Which Vision 2030 project excites you most?',o:[['Red Sea resorts','tourism'],['NEOM smart cities','tech'],['New hospitals','health'],['Qiddiya entertainment','entertainment'],['Education programs','education'],['Riyadh financial hub','finance'],['Oxagon industrial','engineering']]},
      {q:'Your friends would describe you as...',o:[['The adventurous host','tourism'],['The tech fixer','tech'],['The caring one','health'],['The life of the party','entertainment'],['The patient explainer','education'],['The budget planner','finance'],['The fixer of everything','engineering']]},
      {q:'Pick a headline you\'d love:',o:[['"Local guide turns hidden gem into must-visit"','tourism'],['"Engineer builds app used by millions"','tech'],['"Doctor saves a life"','health'],['"Producer behind biggest festival"','entertainment'],['"Teacher transforms how students learn"','education'],['"Analyst spots the next trend"','finance'],['"Engineer designs zero-worker factory"','engineering']]},
      {q:'What\'s most important to you in a job?',o:[['Meeting people worldwide','tourism'],['Building new things','tech'],['Making a difference','health'],['Creating moments','entertainment'],['Helping others grow','education'],['Measurable results','finance'],['Seeing a real product','engineering']]},
      {q:'Pick a tool you\'d master:',o:[['A camera and a map','tourism'],['A laptop and an IDE','tech'],['A stethoscope','health'],['A microphone','entertainment'],['A whiteboard','education'],['A spreadsheet','finance'],['Engineering drawings','engineering']]},
      {q:'In a group project, you\'re the one who...',o:[['Plans logistics','tourism'],['Builds the product','tech'],['Looks out for everyone','health'],['Pitches the big idea','entertainment'],['Keeps everyone on track','education'],['Manages budget','finance'],['Solves the hard problems','engineering']]},
      {q:'Favorite subject:',o:[['Geography','tourism'],['Computer science & math','tech'],['Biology & chemistry','health'],['Art or PE','entertainment'],['Languages','education'],['Economics','finance'],['Physics','engineering']]},
      {q:'With unlimited funding, you\'d launch:',o:[['A boutique hotel chain','tourism'],['An AI startup','tech'],['A modern hospital','health'],['A sports venue','entertainment'],['A learning platform','education'],['An investment fund','finance'],['A smart factory','engineering']]}
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
  var currentScreenId='screen-welcome';
  var $=function(id){return document.getElementById(id)};

  function canUseMotion(){
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function loadVideo(el,src,cb){
    if(!el||!src){if(cb)cb(false);return;}

    var settled=false;
    function finish(ok){
      if(settled)return;
      settled=true;
      clearTimeout(timer);
      if(cb)cb(ok);
    }

    el.onloadeddata=function(){
      if(canUseMotion()){
        var p=el.play();
        if(p&&p.catch)p.catch(function(){});
      }else el.pause();
      finish(true);
    };
    el.onerror=function(){finish(false);};
    var timer=setTimeout(function(){finish(false);},12000);
    el.src=src;
    el.load();
  }

  function playMainVideo(sector){
    var v=$('bgVideoMain'),asset=ASSETS[sector]||ASSETS.tech;
    if(!canUseMotion()||!v)return;
    if(v.dataset.sector===sector&&v.readyState>=2){
      v.play().catch(function(){});
      v.classList.add('active');
      return;
    }
    v.dataset.sector=sector;
    loadVideo(v,asset.video,function(ok){
      if(ok)v.classList.add('active');
      else v.classList.remove('active');
    });
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

  (function(){
    var aura=$('bgAura');if(!aura)return;
    if(window.matchMedia('(hover: none)').matches)return;
    document.addEventListener('mousemove',function(e){
      var mx=(e.clientX/window.innerWidth-.5);
      var my=(e.clientY/window.innerHeight-.5);
      aura.style.transform='translate('+(mx*-22)+'px,'+(my*-22)+'px) scale(1.06)';
    });
  })();

  (function(){
    var dust=$('heroDust');
    if(dust){
      for(var i=0;i<18;i++){
        var s=document.createElement('span');
        s.style.left=(Math.random()*100)+'%';s.style.bottom='-10px';
        s.style.animationDuration=(6+Math.random()*8)+'s';
        s.style.animationDelay=(-Math.random()*8)+'s';
        var size=2+Math.random()*3;s.style.width=size+'px';s.style.height=size+'px';
        dust.appendChild(s);
      }
    }
  })();

  function showScreen(id){
    var screens=document.querySelectorAll('.screen');
    var target=document.getElementById(id);
    if(!target)return;
    for(var i=0;i<screens.length;i++){
      var el=screens[i];
      if(el.classList.contains('active')&&el!==target){
        el.classList.remove('active');el.classList.add('leaving');
        (function(node){setTimeout(function(){node.classList.remove('leaving');},800);})(el);
      }
    }
    target.classList.remove('leaving');
    void target.offsetWidth;
    target.classList.add('active');
    currentScreenId=id;
    updateHomeBtn();
    setTimeout(function(){
      var focusTarget=target.querySelector('.q-text, .result-title, #welcomeTitle');
      if(focusTarget){
        if(!focusTarget.hasAttribute('tabindex'))focusTarget.setAttribute('tabindex','-1');
        focusTarget.focus({preventScroll:true});
      }
    },40);
  }

  function updateHomeBtn(){
    var btn=$('homeBtn');if(!btn)return;
    if(currentScreenId==='screen-welcome'){btn.classList.remove('visible');}
    else{btn.classList.add('visible');}
  }

  function goHome(){
    $('guidePage').classList.remove('active');
    document.body.style.overflow='';
    setMood(null);
    cur=0;answers=new Array(TOTAL).fill(null);selectedRegion=null;scores={};
    showScreen('screen-welcome');
  }

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
    if(currentScreenId==='screen-quiz') renderQuestion(false);
    else if(currentScreenId==='screen-region') renderRegions();
    else if(currentScreenId==='screen-result' && Object.keys(scores).length) renderResult();
  }

  function setLang(lang){
    if(lang===LANG)return;
    LANG=lang;
    try{localStorage.setItem('v2030_lang',LANG);}catch(e){}
    applyLang();
  }

  function renderMosaic(){
    var m=$('mosaic');if(!m)return;m.innerHTML='';
    var rots=[-5,4,-3,5,-4,3,-4];
    KEYS.forEach(function(k,i){
      var f=document.createElement('figure');f.className='tile';
      f.style.setProperty('--rot',rots[i]+'deg');
      f.style.setProperty('--delay',(i*.14)+'s');
      f.style.setProperty('--halo',COLOR[k]);
      var img=document.createElement('img');
      img.src=ASSETS[k].image;
      img.alt='';
      img.loading=i>2?'lazy':'eager';
      img.decoding='async';
      f.appendChild(img);
      var c=document.createElement('figcaption');c.textContent=SECTORS[LANG][k].name;f.appendChild(c);
      m.appendChild(f);
    });
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
    var qs=QUESTIONS[LANG];var q=qs[cur];
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
    if(navigator.vibrate){try{navigator.vibrate(22);}catch(e){}}
    var btns=$('options').querySelectorAll('.opt');
    var chosen=null;
    for(var i=0;i<btns.length;i++){
      btns[i].disabled=true;
      if(btns[i].dataset.sector===sector && !chosen)chosen=btns[i];
    }
    if(chosen)chosen.classList.add('picked');
    for(var j=0;j<btns.length;j++){
      if(btns[j]!==chosen){
        btns[j].style.animationDelay=(j*0.045)+'s';
        btns[j].classList.add('opt-fall');
      }
    }
    playMainVideo(sector);setMood(sector);
    setTimeout(function(){
      var c=$('qCard');c.classList.remove('enter');void c.offsetWidth;c.classList.add('exit');
      setTimeout(function(){
        if(cur<TOTAL-1){cur++;renderQuestion(true);}
        else showRegionScreen();
      },420);
    },750);
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
    REGIONS.forEach(function(r,idx){if(r.key===key)cards[idx].classList.add('picked');});
    setTimeout(showResult,600);
  }

  function computeScores(){scores={};KEYS.forEach(function(k){scores[k]=0;});answers.forEach(function(s){if(s)scores[s]++;});}
  function getRanked(){return KEYS.slice().sort(function(a,b){return scores[b]-scores[a];});}

  function renderResult(){
    var ranked=getRanked();
    var winner=ranked[0];
    var runner=(scores[ranked[1]]>=scores[winner]-1&&scores[ranked[1]]>0)?ranked[1]:null;
    var s=SECTORS[LANG][winner];
    setMood(winner);playMainVideo(winner);
    var rv=$('rVideo'),ri=$('rImg');
    ri.src=ASSETS[winner].image;ri.alt=s.name;ri.style.display='block';rv.style.display='none';
    loadVideo(rv,ASSETS[winner].video,function(ok){
      if(ok&&canUseMotion()){
        rv.style.display='block';
        setTimeout(function(){ri.style.display='none';},400);
      }
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
    html+='<div class="guide-hero"><span class="big-emoji">'+g.emoji+'</span>';
    html+='<h2>'+g.title[LANG]+'</h2>';
    html+='<p class="sub">'+Tf('gSub',{sector:SECTORS[LANG][winner].name,region:regionName})+'</p></div>';
    html+='<div class="section"><h3><span class="ico">🎯</span> '+T('gWhy')+'</h3><ul class="reason-list">';
    g.why[LANG].forEach(function(w,i){html+='<li><span class="num">'+(i+1)+'</span><span>'+w+'</span></li>';});
    html+='</ul></div>';
    html+='<div class="section"><h3><span class="ico">📈</span> '+T('gStats')+'</h3><div class="stat-grid">';
    g.stats.forEach(function(s){html+='<div class="stat-box"><span class="num">'+s.n+'</span><span class="lbl">'+s.l[LANG]+'</span></div>';});
    html+='</div></div>';
    if(rd[winner]){
      html+='<div class="section"><h3><span class="ico">📍</span> '+Tf('gOpp',{region:regionName})+'</h3>';
      html+='<div class="opp-card"><div class="title"><span class="dot"></span> '+SECTORS[LANG][winner].name+' · '+regionName+'</div>';
      html+='<div class="detail">'+rd[winner][LANG]+'</div><div class="tags">';
      SECTORS[LANG][winner].careers.forEach(function(c){html+='<span class="tag">'+c+'</span>';});
      html+='</div></div></div>';
    }
    html+='<div class="section"><h3><span class="ico">🚀</span> '+T('gAction')+'</h3><div class="action-list">';
    g.actions.forEach(function(a,i){
      html+='<div class="action-step"><div class="step-num">'+(i+1)+'</div><div class="content">';
      html+='<div class="title">'+a.t[LANG]+'</div><div class="detail">'+a.d[LANG]+'</div>';
      html+='<a class="link" href="'+a.u+'" target="_blank" rel="noopener">'+a.l+' ←</a></div></div>';
    });
    html+='</div></div>';
    html+='<div class="section"><h3><span class="ico">💡</span> '+T('gTip')+'</h3>';
    html+='<p style="color:var(--muted);font-size:.94rem;line-height:1.7">'+T('gTipText')+'</p></div>';
    $('guideInner').innerHTML=html;
    var firstAction=g.actions[0];
    var stickyTxt=$('stickyTxt');
    if(stickyTxt)stickyTxt.textContent=firstAction.t[LANG];
    $('stickyGo').textContent=T('stickyGo');
    $('stickyBar').onclick=function(){window.open(firstAction.u,'_blank');};
    $('guidePage').classList.add('active');
    document.body.style.overflow='hidden';
    $('guidePage').scrollTop=0;
  }

  function closeGuide(){$('guidePage').classList.remove('active');document.body.style.overflow='';}

  function launchConfetti(accent,count){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    count=count||70;
    var colors=[accent,'#D4A017','#00E6A6','#fff','#FFE08A'];
    var l=$('confetti');
    for(var i=0;i<count;i++){
      var p=document.createElement('i');
      p.style.left=Math.random()*100+'vw';p.style.background=colors[i%colors.length];
      p.style.animationDuration=(2.4+Math.random()*1.8)+'s';
      p.style.animationDelay=(Math.random()*.6)+'s';
      p.style.borderRadius=Math.random()>.5?'50%':'2px';
      l.appendChild(p);
      (function(el){setTimeout(function(){try{el.remove();}catch(e){}},5000);})(p);
    }
  }

  function checkLast(){
    try{
      var last=localStorage.getItem('v2030_last');
      if(last&&SECTORS[LANG][last]){
        $('lastText').innerHTML=Tf('lastResult',{name:SECTORS[LANG][last].name});
        $('lastBanner').hidden=false;
      }else $('lastBanner').hidden=true;
    }catch(e){}
  }

  function buildPdfHtml(){
    var winner=getRanked()[0];
    var sector=SECTORS[LANG][winner];
    var guide=GUIDE_DATA[winner];
    var regionData=REGION_DATA[selectedRegion]||{};
    var regionName='';
    REGIONS.forEach(function(r){if(r.key===selectedRegion)regionName=r.name[LANG];});
    var dateStr=new Date().toLocaleDateString(LANG==='ar'?'ar-SA':'en-GB',
      {year:'numeric',month:'long',day:'numeric'});
    var isAr=LANG==='ar';
    var title=isAr?'تقرير المسار المهني':'Career Path Report';
    var section=function(icon,label){
      return '<div style="font-family:Cairo,Tajawal,sans-serif;font-size:19px;font-weight:900;'
        +'color:#075C45;margin:28px 0 13px;padding:0 0 9px;border-bottom:2px solid #D9E7DF">'
        +icon+' '+label+'</div>';
    };
    var careers=sector.careers.map(function(c){
      return '<span style="display:inline-block;margin:4px;padding:8px 13px;border-radius:20px;'
        +'background:#EAF2ED;color:#164C3C;font-size:13px;font-weight:700">'+c+'</span>';
    }).join('');
    var reasons=guide.why[LANG].map(function(w,i){
      return '<div style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;'
        +'margin:0 0 9px;background:#F5F8F6;border:1px solid #E4ECE7;border-radius:11px;'
        +'page-break-inside:avoid;break-inside:avoid">'
        +'<span style="display:inline-block;min-width:27px;height:27px;line-height:27px;text-align:center;'
        +'border-radius:50%;background:#D9B34B;color:#24352D;font-weight:900;font-size:12px">'+(i+1)+'</span>'
        +'<span style="font-size:14px;line-height:1.75;color:#263B32">'+w+'</span></div>';
    }).join('');
    var stats=guide.stats.map(function(st){
      return '<div style="display:inline-block;vertical-align:top;width:22%;min-height:78px;'
        +'box-sizing:border-box;text-align:center;padding:13px 5px;margin:0 1%;'
        +'background:#F5F8F6;border:1px solid #E0E9E3;border-radius:12px">'
        +'<div style="font-family:Cairo,Tajawal,sans-serif;font-size:23px;font-weight:900;color:#087052">'+st.n+'</div>'
        +'<div style="font-size:11px;line-height:1.5;color:#52635A;margin-top:4px">'+st.l[LANG]+'</div></div>';
    }).join('');
    var actions=guide.actions.map(function(a,i){
      return '<div style="display:flex;gap:13px;padding:15px;margin-bottom:10px;'
        +'border:1px solid #E1E9E4;border-radius:12px;background:#F8FAF8;'
        +'page-break-inside:avoid;break-inside:avoid">'
        +'<span style="display:inline-block;min-width:31px;height:31px;line-height:31px;text-align:center;'
        +'border-radius:9px;background:#087052;color:#fff;font-family:Cairo;font-weight:900">'+(i+1)+'</span>'
        +'<div style="flex:1"><div style="font-family:Cairo,Tajawal,sans-serif;font-weight:900;'
        +'font-size:15px;color:#174C3B;margin-bottom:5px">'+a.t[LANG]+'</div>'
        +'<div style="font-size:13px;line-height:1.7;color:#46584F;margin-bottom:7px">'+a.d[LANG]+'</div>'
        +'<span style="display:inline-block;padding:4px 10px;border-radius:7px;background:#F8EFCF;'
        +'color:#755A12;font-size:11px;font-weight:700">'+a.l+'</span></div></div>';
    }).join('');
    var region=regionData[winner]
      ? '<div style="padding:16px 18px;border-radius:12px;background:#F1F6F2;border-right:4px solid #087052;'
        +'font-size:14px;line-height:1.8;color:#30443A">'+regionData[winner][LANG]+'</div>'
      : '<div style="font-size:13px;color:#68766F">'+(isAr?'لم يتم تحديد تفاصيل إضافية للمنطقة.':'No additional regional details available.')+'</div>';
    return '<div dir="'+(isAr?'rtl':'ltr')+'" style="width:794px;box-sizing:border-box;padding:42px 48px;'
      +'background:#fff;color:#20342B;font-family:Tajawal,Arial,sans-serif;text-align:'+(isAr?'right':'left')+';'
      +'direction:'+(isAr?'rtl':'ltr')+';font-size:14px;line-height:1.65">'
      +'<div style="padding:23px 26px;border-radius:17px;background:#075C45;color:#fff;margin-bottom:24px">'
      +'<div style="font-family:Cairo,Tajawal,sans-serif;font-size:15px;font-weight:700;color:#EBD58B">رؤية 2030</div>'
      +'<div style="font-family:Cairo,Tajawal,sans-serif;font-size:27px;font-weight:900;margin-top:13px">'+title+'</div>'
      +'<div style="font-size:12px;color:#E4EEE8;margin-top:5px">'+dateStr+'</div></div>'
      +'<div style="text-align:center;padding:17px 10px 22px;border-bottom:1px solid #E1E9E4">'
      +'<div style="font-size:54px;line-height:1.2">'+guide.emoji+'</div>'
      +'<div style="font-size:12px;font-weight:700;color:#A77D16;margin-top:10px">'+T('eyebrow')+'</div>'
      +'<div style="font-family:Cairo,Tajawal,sans-serif;font-size:30px;font-weight:900;color:#075C45;margin:5px 0">'+sector.name+'</div>'
      +'<div style="font-size:15px;font-weight:700;color:#A77D16">'+sector.tagline+'</div></div>'
      +section('✦',isAr?'ملخص المسار':'Path overview')
      +'<div style="padding:17px 19px;background:#F5F8F6;border-radius:12px;border-right:4px solid #087052;'
      +'font-size:14px;line-height:1.9;color:#30443A">'+sector.desc+'</div>'
      +section('▦',T('careersTitle'))+'<div>'+careers+'</div>'
      +'<div style="page-break-before:always;break-before:page"></div>'
      +section('◎',T('gWhy'))+reasons
      +section('↗',T('gStats'))+'<div style="text-align:center">'+stats+'</div>'
      +section('⌖',isAr?'الفرص في المنطقة المختارة':'Opportunities in your selected region')
      +'<div style="font-weight:900;color:#075C45;margin-bottom:8px">'+(regionName||'—')+'</div>'+region
      +'<div style="page-break-before:always;break-before:page"></div>'
      +section('✓',T('gAction'))+actions
      +'<div style="margin-top:23px;padding:17px 19px;border-radius:12px;background:#FBF5E3;'
      +'border:1px solid #E8D69B"><div style="font-family:Cairo,Tajawal,sans-serif;font-weight:900;'
      +'font-size:15px;color:#765B15;margin-bottom:5px">💡 '+T('gTip')+'</div>'
      +'<div style="font-size:13px;line-height:1.8;color:#3D493F">'+T('gTipText')+'</div></div>'
      +'<div style="margin-top:28px;padding-top:14px;border-top:1px solid #E1E9E4;text-align:center;'
      +'font-size:11px;color:#758179">'+T('footer')+' · '+dateStr+'</div></div>';
  }

  function downloadReport(){
    var btn=$('copyBtn');
    var original=T('share');
    // Open synchronously from the click so browsers do not block the report window.
    var reportWindow=window.open('','_blank');
    if(!reportWindow){
      alert(LANG==='ar'
        ? 'يرجى السماح بالنوافذ المنبثقة لهذا الموقع، ثم أعد تحميل التقرير.'
        : 'Allow pop-ups for this site, then try downloading the report again.');
      return;
    }

    btn.textContent=T('downloading');
    btn.disabled=true;
    var isAr=LANG==='ar';
    var html='<!doctype html><html lang="'+(isAr?'ar':'en')+'" dir="'+(isAr?'rtl':'ltr')+'"><head>'
      +'<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
      +'<title>'+(isAr?'تقرير المسار المهني':'Career Path Report')+'</title>'
      +'<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">'
      +'<style>html,body{margin:0;padding:0;background:#fff;color:#20342B}body{font-family:Tajawal,Arial,sans-serif}'
      +'@page{size:A4;margin:0}*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}'
      +'@media screen{body{background:#eef2ef;padding:24px}.report{margin:0 auto;box-shadow:0 4px 24px #0002}}'
      +'@media print{body{padding:0}.report{box-shadow:none!important}}'
      +'</style></head><body><main class="report">'+buildPdfHtml()+'</main>'
      +'<script>window.onload=function(){setTimeout(function(){window.focus();window.print();},700)};<\/script>'
      +'</body></html>';
    try{
      reportWindow.document.open();
      reportWindow.document.write(html);
      reportWindow.document.close();
      btn.textContent=isAr?'تم فتح التقرير للطباعة':'Report opened for printing';
      setTimeout(function(){btn.textContent=original;btn.disabled=false;},2500);
    }catch(err){
      console.error(err);
      reportWindow.close();
      btn.textContent=T('pdfError');
      setTimeout(function(){btn.textContent=original;btn.disabled=false;},2200);
    }  }

  function on(id,ev,fn){var el=document.getElementById(id);if(!el)return;el.addEventListener(ev,function(e){
    try{fn(e);}catch(err){console.error(err);}});}

  /* Welcome CTA starts the quiz directly. */
  on('welcomeEnter','click',startQuiz);
  on('homeBtn','click',goHome);
  on('langAr','click',function(){setLang('ar');});
  on('langEn','click',function(){setLang('en');});
  on('retakeBtn','click',startQuiz);
  on('backBtn','click',function(){if(cur>0){cur--;renderQuestion(true);}});
  on('discoverBtn','click',openGuide);
  on('guideClose','click',closeGuide);
  on('copyBtn','click',downloadReport);

  try{
    applyLang();
    setTimeout(function(){
      var els=document.querySelectorAll('.wv-stat b[data-count]');
      for(var i=0;i<els.length;i++){
        (function(el,idx){
          setTimeout(function(){countTo(el,parseInt(el.getAttribute('data-count'),10),1400);},idx*200);
        })(els[i],i);
      }
    },700);
    console.log('✓ Ready · Lang:',LANG);
  }catch(e){console.error(e);}
})();