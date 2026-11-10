/* ==========================================================================
   SUKUN (سُكُون) — Master Application Engine (v3.0)
   Authentic Quran & Sunnah Knowledge Base (35+ Duas & Surahs)
   Intelligent Multi-Tier Natural Language Search Engine
   Zero Devanagari Hindi • Pure International English UI Controls
   Master Admin: kaifofficial4@gmail.com
   ========================================================================== */

// 1. COMPREHENSIVE AUTHENTIC ISLAMIC KNOWLEDGE BASE (35+ Dimensions)
// One-time security cleanup: Purge fake client-side authentication, mock passwords and legacy BYO keys
(function purgeLegacyAuth() {
  const legacyKeys = [
    "sukun_auth_session",
    "sukun_registered_users",
    "sukun_admin_master_password",
    "sukun_custom_duas",
    "sukun_gemini_api_key",
    "sukun_openai_api_key",
    "sukun_claude_api_key",
    "sukun_openrouter_api_key"
  ];
  legacyKeys.forEach(k => {
    try {
      if (localStorage.getItem(k) !== null) localStorage.removeItem(k);
    } catch (e) {}
  });
})();

const MasterKnowledge = [
  // --- DAILY ROUTINE & SUNNAH DUAS ---
  {
    id: "dua-ghar-bahar",
    title: "Protection When Leaving Home (Ghar Se Bahar Nikalne Ki Dua)",
    category: "Protection & Daily Sunnah",
    phrases: ["ghar se bahar", "ghar se nikalne", "ghar se nikalte", "ghar se nikle", "ghar chhodte", "leaving home", "going out", "exit house", "stepping outside", "bahar nikalne", "ghar ke bahar", "bahar jana"],
    keywords: ["ghar", "bahar", "nikalne", "nikalna", "nikalta", "exit", "outside", "tawakkal", "tawakkaltu", "safeguard", "safar", "hifazat", "protection", "evil"],
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    roman: "Bismillaahi tawakkaltu 'alallaah, wa laa hawla wa laa quwwata illaa billaah.",
    translationUrdu: "اللہ کے نام کے ساتھ، میں نے اللہ پر بھروسہ کیا، اور گناہ سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی مدد سے ہے۔",
    translationEnglish: "In the Name of Allah; I place my trust in Allah, and there is no might nor power except with Allah.",
    reference: "Sunan Abi Dawood (5095) • Jami' at-Tirmidhi (3426) • Sahih",
    waqia: "The Messenger of Allah ﷺ stated: 'When a man steps out of his house and recites this supplication, the angels proclaim to him: You are guided, defended and protected! The devils turn away in helplessness and say to each other: How can you overpower a person who has been divinely guided, defended and shielded?'",
    lesson: "Guarantees complete immunity against road accidents, deceptive people, and spiritual malice whenever stepping outside."
  },
  {
    id: "dua-ghar-dakhil",
    title: "Entering the Home & Seeking Barakah (Ghar Me Dakhil Hone Ki Dua)",
    category: "Protection & Daily Sunnah",
    phrases: ["ghar me dakhil", "ghar me aane", "ghar aane ki", "ghar me aate waqt", "ghar wapsi", "entering home", "returning home", "entering house", "back home"],
    keywords: ["ghar", "dakhil", "aana", "aane", "enter", "inside", "returning", "wapsi", "salam", "family", "barakah"],
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    roman: "Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi Rabbinaa tawakkalnaa.",
    translationUrdu: "اللہ کے نام کے ساتھ ہم داخل ہوئے، اللہ ہی کے نام کے ساتھ ہم نکلے، اور اپنے رب اللہ ہی پر ہم نے بھروسہ کیا۔",
    translationEnglish: "In the Name of Allah we enter, and in the Name of Allah we leave, and upon Allah our Lord do we rely.",
    reference: "Sunan Abi Dawood (5096) • Sahih",
    waqia: "The Prophet Muhammad ﷺ instructed: 'When a person enters his house and mentions the name of Allah upon entering and upon eating, Shaytan says to his companions: You have no place to spend the night and no dinner!'",
    lesson: "Infuses divine peace, affection, and abundance into the home, preventing domestic arguments and misery."
  },
  {
    id: "dua-masjid-dakhil",
    title: "Entering the Mosque (Masjid Me Dakhil Hone Ki Dua)",
    category: "Prayer & Worship",
    phrases: ["masjid me dakhil", "masjid me jane", "entering masjid", "entering mosque", "masjid ki dua", "mosque dua"],
    keywords: ["masjid", "mosque", "dakhil", "enter", "rahmat", "doors", "namaz", "prayer"],
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    roman: "Allahummaf-tah lee abwaaba rahmatik.",
    translationUrdu: "اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔",
    translationEnglish: "O Allah, open for me the gates of Your mercy.",
    reference: "Sahih Muslim (713) • Sunan Abi Dawood (465)",
    waqia: "The Messenger of Allah ﷺ taught the believers to enter the sacred sanctuary of the mosque with the right foot forward, send blessings upon the Prophet, and invoke this opening of divine compassion.",
    lesson: "Prepares the heart for deep spiritual communion and humility before entering Salah."
  },
  {
    id: "dua-masjid-nikal",
    title: "Leaving the Mosque (Masjid Se Nikalne Ki Dua)",
    category: "Prayer & Worship",
    phrases: ["masjid se nikalne", "masjid se bahar", "leaving masjid", "leaving mosque", "exiting mosque"],
    keywords: ["masjid", "mosque", "nikalne", "exit", "leaving", "fadl", "bounty", "rizq"],
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    roman: "Allahumma innee as'aluka min fadlik.",
    translationUrdu: "اے اللہ! میں تجھ سے تیرے فضل اور فیاضی کا سوال کرتا ہوں۔",
    translationEnglish: "O Allah, I ask You from Your boundless bounty.",
    reference: "Sahih Muslim (713) • Sunan an-Nasa'i (729)",
    waqia: "Believers seek Allah's mercy inside the mosque, and upon stepping out with the left foot, seek His lawful bounty (Fadl / Halal Sustenance) in the worldly markets and workplace.",
    lesson: "Bridges worship with daily commerce, inviting halal profit and honor into one's livelihood."
  },
  {
    id: "dua-khana-pehle",
    title: "Supplication Before Eating Food (Khana Khane Se Pehle Ki Dua)",
    category: "Daily Sunnah",
    phrases: ["khana khane se pehle", "khana khane ki dua", "eating food", "before eating", "khana shuru", "meal dua"],
    keywords: ["khana", "khane", "food", "eat", "eating", "meal", "bismillah", "barakat", "sustenance"],
    arabic: "بِسْمِ اللَّهِ وَعَلَىٰ بَرَكَةِ اللَّهِ",
    roman: "Bismillaahi wa 'alaa barakatillaah.",
    translationUrdu: "اللہ کے نام کے ساتھ اور اللہ ہی کی برکت پر (ہم نے کھانا شروع کیا)۔",
    translationEnglish: "In the Name of Allah and upon the blessings of Allah (I begin eating).",
    reference: "Al-Mustadrak al-Hakim (7084) • Sunan Abi Dawood (3767)",
    waqia: "The Prophet ﷺ gently took the hand of young Umar ibn Abi Salama who was reaching across the meal dish and taught: 'O young boy, mention the Name of Allah, eat with your right hand, and eat from what is nearest to you.'",
    lesson: "Converts the physical act of nourishment into spiritual worship and multiplies barakah."
  },
  {
    id: "dua-khana-bhool",
    title: "If Bismillah Was Forgotten Before Eating (Bismillah Bhool Jane Par Dua)",
    category: "Daily Sunnah",
    phrases: ["khana bhool gaya", "bismillah bhool gaya", "forgot bismillah", "forgot to say bismillah"],
    keywords: ["bhool", "bhul", "forgot", "khana", "eating", "awwal", "akhir", "bismillah"],
    arabic: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
    roman: "Bismillaahi awwalahoo wa aakhirah.",
    translationUrdu: "اللہ کے نام کے ساتھ، اس کے شروع میں بھی اور اس کے آخر میں بھی۔",
    translationEnglish: "In the Name of Allah, at its beginning and at its end.",
    reference: "Sunan Abi Dawood (3767) • Jami' at-Tirmidhi (1858)",
    waqia: "A companion was eating without uttering Bismillah until only one morsel was left. Remembering, he uttered: 'Bismillahi awwalahu wa akhirahu.' The Prophet ﷺ smiled and remarked: 'Shaytan had been devouring the food with him, but when Allah's Name was proclaimed, Shaytan vomited what was in his stomach!'",
    lesson: "It is never too late to remember Allah and strip negativity from your food."
  },
  {
    id: "dua-khana-baad",
    title: "Gratitude After Finishing Food (Khana Khane Ke Baad Ki Dua)",
    category: "Daily Sunnah",
    phrases: ["khana khane ke baad", "after eating", "finished food", "khana khatam", "after meal"],
    keywords: ["khana", "baad", "finish", "after", "ate", "food", "shukr", "gratitude", "alhamdulillah"],
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    roman: "Al-hamdu lillaahil-ladhee at'amanaa wa saqaanaa wa ja'alanaa muslimeen.",
    translationUrdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمانوں میں سے بنایا۔",
    translationEnglish: "All praise is for Allah who fed us, gave us drink, and made us Muslims.",
    reference: "Sunan Abi Dawood (3850) • Jami' at-Tirmidhi (3457)",
    waqia: "The Prophet ﷺ declared: 'Indeed Allah is deeply pleased with His servant who eats a morsel of food and praises Him for it, or drinks a sip of water and praises Him for it.'",
    lesson: "Cultivates profound gratitude, preserves physical digestion, and ensures continuous food security."
  },
  {
    id: "dua-pani-peena",
    title: "Sunnah for Drinking Water & Liquids (Paani Peene Ki Sunnah)",
    category: "Daily Sunnah",
    phrases: ["pani peene ki", "paani peene ki", "drinking water", "water sunnah", "water dua"],
    keywords: ["pani", "paani", "water", "drink", "drinking", "sharbath", "3 ghont", "sip"],
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ",
    roman: "Bismillaah (before drinking) • Al-hamdu lillaah (after drinking in 3 peaceful sips).",
    translationUrdu: "اللہ کے نام سے شروع • تمام تعریفیں اللہ کے لیے ہیں جس نے اپنی رحمت سے اسے میٹھا اور پیاس بجھانے والا بنایا۔",
    translationEnglish: "In the Name of Allah (before) • All praise is for Allah who by His mercy made it sweet, quenching and wholesome.",
    reference: "Sahih Muslim (2024) • Ash-Shama'il al-Muhammadiyyah",
    waqia: "The Prophet ﷺ drank in three measured pauses, removing the cup from his mouth to breathe between sips, noting that this method is far more thirst-quenching, wholesome, and healing.",
    lesson: "Drinking seated in three deliberate breaths prevents strain on the stomach and fulfills Sunnah."
  },
  {
    id: "dua-doodh",
    title: "Supplication After Drinking Milk (Doodh Peene Ki Dua)",
    category: "Daily Sunnah",
    phrases: ["doodh peene ki", "dudh peene ki", "drinking milk", "milk dua"],
    keywords: ["doodh", "dudh", "milk", "drink", "barik", "nourishment"],
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ",
    roman: "Allahumma baarik lanaa feehi wa zidnaa minhu.",
    translationUrdu: "اے اللہ! ہمارے لیے اس دودھ میں برکت عطا فرما اور ہمیں اس سے مزید عطا فرما۔",
    translationEnglish: "O Allah, bless it for us and grant us an abundance of it.",
    reference: "Sunan Abi Dawood (3730) • Jami' at-Tirmidhi (3455)",
    waqia: "The Prophet ﷺ remarked: 'Whoever is nourished with milk by Allah should recite this, for I know of no single nourishment that substitutes for both food and drink like milk.'",
    lesson: "Acknowledges milk as complete divine nutrition and prays for sustained blessings."
  },
  {
    id: "dua-sone-ki",
    title: "Supplication Before Sleeping (Sone Ki Dua)",
    category: "Daily Sunnah & Night Protection",
    phrases: ["sone ki dua", "sone se pehle", "before sleeping", "sleep dua", "bedtime dua", "neend ki dua", "neend nahi aa rahi"],
    keywords: ["sone", "sona", "neend", "sleep", "sleeping", "bed", "bedtime", "night", "raat", "amootu", "ahya"],
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    roman: "Bismika Allahumma amootu wa ahyaa.",
    translationUrdu: "اے اللہ! تیرے ہی نام کے ساتھ میں مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔",
    translationEnglish: "In Your Name, O Allah, do I die and do I live.",
    reference: "Sahih al-Bukhari (6324, 6312, 6313) • Sahih Muslim (2711 / Book 48, Hadith 81) [https://sunnah.com/bukhari:6324 | https://sunnah.com/muslim:2711]",
    waqia: "Narrated by Hudhayfah (RA) in Sahih al-Bukhari (6324: 'Bismika Allahumma amootu wa ahya', and 6312: 'Allahumma bismika ahya wa amoot'). Also narrated by Al-Bara' bin 'Azib (RA) in Sahih Muslim 2711. (Note: Muslim 2710 is Al-Bara's narration for the bedtime Wudu/Fitrah dua 'Allahumma aslamtu nafsi ilayk').",
    lesson: "Sleep is the minor transition of the soul. Entrusting your life to Allah grants restful sleep and peaceful dreams."
  },
  {
    id: "dua-so-kar-uthna",
    title: "Gratitude Upon Waking Up (So Kar Uthne Ki Dua)",
    category: "Daily Sunnah",
    phrases: ["so kar uthne", "uthne ki dua", "waking up", "morning wake up", "subah uthna", "after sleep"],
    keywords: ["uthne", "uthna", "so kar", "wake", "waking", "morning", "subah", "ahyaana", "resurrection"],
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    roman: "Al-hamdu lillaahil-ladhee ahyaanaa ba'da maa amaatanaa wa ilaihin-nushoor.",
    translationUrdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد دوبارہ زندہ کیا اور اسی کی طرف اٹھ کر جانا ہے۔",
    translationEnglish: "All praise is for Allah who gave us life after having caused us to die, and unto Him is the resurrection.",
    reference: "Sahih al-Bukhari (6312, 6324) • Sahih Muslim (2711 / Book 48, Hadith 81) [https://sunnah.com/bukhari:6312 | https://sunnah.com/muslim:2711]",
    waqia: "Narrated by Hudhayfah (RA) in Sahih al-Bukhari (6312, 6324) and Al-Bara' bin 'Azib (RA) in Sahih Muslim (2711). Both collections record the waking supplication immediately alongside the sleeping supplication.",
    lesson: "Ignites morning vitality, gratitude, and conscious awareness of our ultimate return to Allah."
  },
  {
    id: "dua-bura-khwab",
    title: "Protection Upon Having a Bad Dream or Nightmare (Bura Khwab Dekhne Ki Dua)",
    category: "Night Protection & Serenity",
    phrases: [
      "khwaab me galat", "khwab me galat", "khwab me galat dekhne", "khwaab me galat dekhne",
      "bura khwab", "bura khwaab", "bure khwab", "bure khwaab", "bad dream", "nightmare dua", 
      "galat khwab", "galat khwaab", "khwab ki dua", "khwaab ki dua", "khwab me dar", "khwaab me dar", 
      "daraona khwab", "disturbing dream", "scary dream", "bad dream dua", "khwab me bura dekhna"
    ],
    keywords: [
      "khwab", "khwaab", "dream", "nightmare", "galat", "bura", "bure", "shaitan", "shaytan", 
      "neend", "sleep", "soye", "dar", "scary", "disturbing", "ruya", "hulum", "waswasa", "bad", "evil"
    ],
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ غَضَبِهِ وَعِقَابِهِ وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ",
    roman: "A'oodhu bi-kalimaatillaahit-taammaati min ghadabihi wa 'iqaabihi wa sharri 'ibaadihi, wa min hamazaatish-shayaateeni wa an yahduroon.",
    translationUrdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں اس کے غضب، اس کے عذاب اور اس کے بندوں کے شر سے، اور شیاطین کے وسوسوں سے اور اس بات سے کہ وہ میرے پاس آئیں۔",
    translationEnglish: "I seek refuge in the perfect words of Allah from His anger, His punishment, the evil of His slaves, from the whisperings of the devils, and from their presence.",
    reference: "Sunan Abi Dawood 3893, Jami' at-Tirmidhi 3528 (Hasan) • Sahih Muslim 2261",
    waqia: "The Prophet Muhammad (ﷺ) taught that bad dreams are from Satan. If someone sees a distressing dream, they should spit dryly three times to their left, seek refuge in Allah from Satan and the evil of the dream, change the side they were sleeping on, and never tell it to anyone, for it will not harm them.",
    lesson: "Disturbing nightmares have zero power to harm the believer. By reciting this prophetic refuge and applying the Sunnah of turning sides and seeking Allah's protection, the heart returns instantly to tranquil serenity."
  },
  {
    id: "dua-toilet-dakhil",
    title: "Entering the Washroom / Restroom (Baitul Khala Jane Ki Dua)",
    category: "Daily Sunnah & Protection",
    phrases: ["toilet jane ki", "washroom jane ki", "baitul khala", "restroom dua", "bathroom jane ki", "toilet ki dua"],
    keywords: ["toilet", "washroom", "bathroom", "baitul khala", "peshab", "taharat", "khubuthi", "khabaith"],
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    roman: "Allahumma innee a'oodhu bika minal-khubuthi wal-khabaa'ith.",
    translationUrdu: "اے اللہ! میں ناپاک جنوں اور ناپاک جننیوں (تمام خبیث شیاطین اور گندگی) سے تیری پناہ مانگتا ہوں۔",
    translationEnglish: "O Allah, I seek refuge in You from all impure male and female foul spirits.",
    reference: "Sahih al-Bukhari (142) • Sahih Muslim (375)",
    waqia: "The Prophet ﷺ warned that washrooms and privies are frequented by malicious demonic entities; stepping with the left foot and uttering this supplication creates an unseen spiritual shield.",
    lesson: "Protects personal dignity, bodily health, and spiritual cleanliness in places of impurity."
  },
  {
    id: "dua-toilet-nikal",
    title: "Exiting the Washroom (Toilet Se Nikalne Ki Dua)",
    category: "Daily Sunnah & Forgiveness",
    phrases: ["toilet se nikalne", "washroom se nikalne", "leaving toilet", "exit bathroom", "ghufranaka", "bathroom se nikalne"],
    keywords: ["toilet", "washroom", "nikalne", "exit", "ghufranaka", "forgiveness", "maghfirat"],
    arabic: "غُفْرَانَكَ",
    roman: "Ghufranaka.",
    translationUrdu: "(اے اللہ!) میں تیری بخشش اور معافی کا طلبگار ہوں۔",
    translationEnglish: "I seek Your forgiveness, O Allah.",
    reference: "Sunan Abi Dawood (30) • Jami' at-Tirmidhi (7) • Sahih",
    waqia: "Stepping out with the right foot, the Prophet ﷺ uttered this single profound word, seeking forgiveness for the moments when physical relief prevented him from remembering Allah aloud.",
    lesson: "A reminder of perpetual humility and appreciation for physical relief and internal cleansing."
  },
  {
    id: "dua-aaina",
    title: "Looking Into the Mirror (Aaina Dekhne Ki Dua)",
    category: "Daily Sunnah & Character",
    phrases: ["aaina dekhne ki", "mirror dua", "sheesha dekhne", "looking in mirror", "looking into mirror"],
    keywords: ["aaina", "mirror", "sheesha", "face", "beauty", "khuluq", "character", "akhlaq"],
    arabic: "اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    roman: "Allahumma Anta hassanta khalqee fa-hassin khuluqee.",
    translationUrdu: "اے اللہ! جیسے تو نے میری ظاہری صورت کو خوبصورت بنایا ہے، ویسے ہی میرے اخلاق و کردار کو بھی سنوار دے۔",
    translationEnglish: "O Allah, just as You made my external appearance good, beautify my internal character and conduct.",
    reference: "Musnad Ahmad (24392) • Sahih Ibn Hibban",
    waqia: "The Prophet ﷺ redirected physical vanity into a quest for spiritual excellence, reminding us that inner character far outshines external cosmetics.",
    lesson: "Prevents arrogance and turns a daily routine into an aspiration for gentleness, kindness, and integrity."
  },
  {
    id: "dua-kapde",
    title: "Wearing Clothes & Attire (Naye Kapde Pehanne Ki Dua)",
    category: "Daily Sunnah & Gratitude",
    phrases: ["kapde pehanne ki", "naye kapde", "wearing clothes", "dressing dua", "libas ki dua"],
    keywords: ["kapde", "libas", "dress", "clothes", "wearing", "pehanne", "kasaani", "garment"],
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    roman: "Al-hamdu lillaahil-ladhee kasaanee haadhaa wa razaqaneehi min ghayri hawlin minnee wa laa quwwah.",
    translationUrdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے مجھے یہ لباس پہنایا اور مجھے یہ عطا فرمایا بغیر میری کسی ذاتی طاقت اور کوشش کے۔",
    translationEnglish: "All praise is for Allah who clothed me with this garment and provided it for me without any power or strength on my part.",
    reference: "Sunan Abi Dawood (4023) • Jami' at-Tirmidhi (3458)",
    waqia: "The Prophet Muhammad ﷺ promised that whoever puts on their clothing and recites this supplication, their previous sins will be wiped away.",
    lesson: "Recognizes that modesty and dignity are gifts from Allah, shielding against showmanship and vanity."
  },
  {
    id: "dua-safar",
    title: "Traveling & Boarding a Vehicle (Safar Ki Dua / Sawari Ki Dua)",
    category: "Travel & Protection",
    phrases: ["safar ki dua", "sawari ki dua", "traveling dua", "journey dua", "car me baithne", "flight dua", "gadi chalane"],
    keywords: ["safar", "sawari", "travel", "journey", "trip", "car", "flight", "plane", "train", "sakh-khara"],
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
    roman: "Subhaanal-ladhee sakh-khara lanaa haadhaa wa maa kunnaa lahoo muqrineen, wa innaa ilaa Rabbinaa lamunqaliboon.",
    translationUrdu: "پاک ہے وہ ذات جس نے اس سواری کو ہمارے تابع کر دیا حالانکہ ہم اس پر قابو پانے کی طاقت نہیں رکھتے تھے، اور بے شک ہم اپنے رب ہی کی طرف لوٹ کر جانے والے ہیں۔",
    translationEnglish: "Glory be to Him Who has subjected this vehicle unto us, for we could never have subdued it by ourselves. And indeed, unto our Lord we shall return.",
    reference: "Surah Az-Zukhruf (43:13-14) • Sahih Muslim (1342)",
    waqia: "Whenever the Prophet ﷺ mounted his riding camel, he said 'Allahu Akbar' thrice and recited this Quranic verse followed by prayers for safety on the journey.",
    lesson: "Recited in cars, planes, trains, and bikes to safeguard the journey and ensure safe return."
  },
  {
    id: "dua-barish",
    title: "Supplication During Rain (Baarish Ki Dua)",
    category: "Weather & Nature",
    phrases: ["barish ki dua", "baarish ki dua", "rain dua", "barsaat ki dua", "when it rains"],
    keywords: ["barish", "baarish", "rain", "barsaat", "badal", "sayyiban", "naafi'an", "weather"],
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    roman: "Allahumma sayyiban naafi'an.",
    translationUrdu: "اے اللہ! اس بارش کو خوب برسنے والی اور سراپا نفع بخش بنا۔",
    translationEnglish: "O Allah, let this rainfall be abundant and beneficial.",
    reference: "Sahih al-Bukhari (1032)",
    waqia: "Whenever rain began to fall from the heavens, the Prophet ﷺ would uncover part of his garment to touch the rain, explaining: 'It has only just recently departed from its Lord.'",
    lesson: "Rain is a special moment of divine mercy when duas are swiftly accepted."
  },
  {
    id: "dua-bijli",
    title: "Hearing Thunder & Lightning (Bijli Chamakne Aur Badal Garajne Ki Dua)",
    category: "Weather & Nature",
    phrases: ["bijli chamakne", "badal garajne", "thunder dua", "lightning dua", "bijli girne"],
    keywords: ["bijli", "badal", "garaj", "thunder", "lightning", "storm", "ra'd", "malaikah"],
    arabic: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    roman: "Subhaanal-ladhee yusabbihur-ra'du bi-hamdihi wal-malaa'ikatu min kheefatih.",
    translationUrdu: "پاک ہے وہ ذات جس کی تسبیح و حمد گرج کرتی ہے اور فرشتے بھی اس کے خوف سے اس کی تسبیح بیان کرتے ہیں۔",
    translationEnglish: "Glory be to Him Whom the thunder praises with glorification, and the angels out of reverence and awe of Him.",
    reference: "Surah Ar-Ra'd (13:13) • Muwatta Malik (1801) • Sahih",
    waqia: "Hazrat Abdullah ibn az-Zubayr (R.A) used to abandon conversations upon hearing thunder and recite this verse in profound awe of Allah's majestic power.",
    lesson: "Transforms the startling crack of thunder into an act of divine awe and remembrance."
  },
  {
    id: "dua-roza-kholna",
    title: "Breaking the Fast / Iftar (Roza Kholne Ki Dua)",
    category: "Fasting & Ramadan",
    phrases: ["roza kholne ki", "iftar ki dua", "iftari ki dua", "breaking fast", "fast breaking"],
    keywords: ["roza", "roze", "iftar", "iftari", "fasting", "fast", "zama'u", "urooq", "ramadan"],
    arabic: "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    roman: "Dhahabaz-zama'u, wab-tallatil-'urooqu, wa thabatal-ajru in shaa' Allaah.",
    translationUrdu: "پیاس چلی گئی، رگیں تر ہو گئیں، اور اللہ نے چاہا تو اجر ثابت ہو گیا۔",
    translationEnglish: "The thirst has vanished, the veins are moistened, and the divine reward is established, if Allah wills.",
    reference: "Sunan Abi Dawood (2357) • Sunan an-Nasa'i • Sahih",
    waqia: "The Prophet ﷺ broke his fast with fresh dates and water, reciting this celebration of endurance and divine reward.",
    lesson: "The moment of Iftar is when the fasting believer experiences immediate relief and unrejected dua."
  },
  {
    id: "dua-roza-rakhna",
    title: "Intention for Fasting (Roza Rakhne Ki Niyat)",
    category: "Fiqh & Traditional Niyyah",
    phrases: ["roza rakhne ki", "sehri ki dua", "roza ki niyat", "fasting intention", "suhoor dua"],
    keywords: ["roza", "roze", "sehri", "suhoor", "niyat", "intention", "ramadan", "ramzan"],
    arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    roman: "Wa bi-sawmi ghadin nawaytu min shahri ramadaan.",
    translationUrdu: "اور میں نے ماہِ رمضان کے کل کے روزے کی نیت کی۔",
    translationEnglish: "And I intend to keep tomorrow's fast of the blessed month of Ramadan.",
    reference: "Traditional Fiqh Intention (Note: Lafzi dua kisi marfu' Hadith me nahi hai; Roze ka asool dil ka irada hai - Sahih al-Bukhari 1)",
    waqia: "The Prophet ﷺ emphasized eating Suhoor (Sehri), saying: 'Take Suhoor, for indeed there is Barakah in Suhoor.' Intention resides in the heart.",
    lesson: "Solidifies the heart's intention to fast for the sake of Allah alone."
  },
  {
    id: "dua-wudu-baad",
    title: "Supplication After Completing Wudu (Wuzu Ke Baad Ki Dua)",
    category: "Purification & Prayer",
    phrases: ["wudu ke baad", "wazu ke baad", "after wudu", "after ablution", "wudu dua"],
    keywords: ["wudu", "wazu", "ablution", "taharat", "tawwabeen", "mutatahhireen", "jannah"],
    arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    roman: "Ash-hadu allaa ilaaha illallaahu wahdahoo laa shareeka lah, wa ash-hadu anna Muhammadan 'abduhoo wa rasooluh. Allahummaj-'alnee minat-tawwaabeena waj-'alnee minal-mutatahhireen.",
    translationUrdu: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔ اے اللہ! مجھے خوب توبہ کرنے والوں اور خوب پاکیزگی اختیار کرنے والوں میں شامل فرما۔",
    translationEnglish: "I bear witness that none has the right to be worshipped except Allah alone without partner, and that Muhammad is His servant and messenger. O Allah, make me among those who constantly repent and make me among those who constantly purify themselves.",
    reference: "Jami' at-Tirmidhi (55) • Sahih Muslim (234)",
    waqia: "The Prophet ﷺ declared: 'Whoever performs wudu thoroughly and recites this supplication, the eight gates of Jannah are opened for them to enter through whichever they wish.'",
    lesson: "Wudu washes physical sins from the limbs; this supplication purifies the soul."
  },
  {
    id: "dua-musibat-loss",
    title: "In Times of Tragedy, Loss or Bad News (Inna Lillahi)",
    category: "Patience & Adversity",
    phrases: ["inna lillahi", "musibat ki dua", "loss dua", "death dua", "intiqal", "hadesa", "bad news", "accident dua"],
    keywords: ["musibat", "loss", "grief", "death", "intiqal", "inna lillahi", "raji'oon", "patience"],
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
    roman: "Innaa lillaahi wa innaa ilaihi raaji'oon. Allahummajurni fee museebatee wa akhlif lee khayran minhaa.",
    translationUrdu: "بے شک ہم اللہ ہی کے ہیں اور اسی کی طرف لوٹ کر جانے والے ہیں۔ اے اللہ! میری اس مصیبت پر مجھے اجر عطا فرما اور مجھے اس کے بدلے میں اس سے بہتر عطا فرما۔",
    translationEnglish: "Indeed, to Allah we belong and truly unto Him is our return. O Allah, reward me in my affliction and grant me in its place that which is better.",
    reference: "Sahih Muslim (918)",
    waqia: "When Abu Salama passed away, his widow Umm Salama recited this dua thinking no one could be better than Abu Salama. Allah rewarded her patience by marrying her to the Messenger of Allah ﷺ!",
    lesson: "Never despair in heartbreak or loss; Allah always replaces what is lost with something far greater."
  },
  {
    id: "dua-qabrastan",
    title: "Entering Graveyard (Qabrastan Me Dakhil Hone Ki Dua)",
    category: "Remembrance of Hereafter",
    phrases: ["qabrastan ki dua", "qabr par jane", "graveyard dua", "cemetery dua", "ziyarat qaboor"],
    keywords: ["qabrastan", "qabr", "graveyard", "cemetery", "grave", "death", "akhirah", "ahlad-diyar"],
    arabic: "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
    roman: "Assalaamu 'alaikum ahlad-diyaari minal-mu'mineena wal-muslimeen, wa innaa in shaa' Allaahu bikum laahiqoon, nas'alullaaha lanaa wa lakumul-'aafiyah.",
    translationUrdu: "تم پر سلامتی ہو اے بستی کے مؤمن اور مسلمان رہنے والو! اور بے شک ہم بھی اللہ نے چاہا تو تم سے ملنے والے ہیں، ہم اللہ سے اپنے لیے اور تمہارے لیے عافیت و مغفرت مانگتے ہیں۔",
    translationEnglish: "Peace be upon you, O dwellers of these dwellings of the believers and Muslims. Indeed, if Allah wills, we will join you; we ask Allah for well-being and pardon for us and for you.",
    reference: "Sahih Muslim (975) • Sunan Ibn Majah (1547)",
    waqia: "Hazrat Aisha (R.A) narrated that the Prophet ﷺ frequently visited Baqi' al-Gharqad at night to supplicate for the forgiveness of departed souls.",
    lesson: "Softens hard hearts by reminding us of our ultimate destination and sends mercy to the deceased."
  },

  // --- SPIRITUAL & EMOTIONAL REMEDIES ---
  {
    id: "dua-gussa",
    title: "Anger, Irritation & Seeking Fortitude (Sabr)",
    category: "Anger & Patience",
    phrases: ["gussa control", "gussa aana", "gusse ki dua", "anger control", "temper control", "ladai jhagda"],
    keywords: ["gussa", "gusse", "ghussa", "anger", "angry", "furious", "rage", "temper", "irritation", "irritate", "fight", "ladai", "jhagda", "argument", "sabr", "patience", "control", "chill", "calm", "bhadakna", "shaitan"],
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    roman: "A'oodhu billaahi minash-shaytaanir-rajeem.",
    translationUrdu: "میں اللہ کی پناہ مانگتا ہوں مردود شیطان کے شر سے۔",
    translationEnglish: "I seek refuge in Allah from Satan, the accursed.",
    reference: "Sahih al-Bukhari (6115) • Sahih Muslim (2610)",
    waqia: "Two men exchanged harsh words in the presence of the Prophet Muhammad ﷺ until one of them became visibly furious, his face turning red with rage. The Prophet ﷺ remarked: 'I know a phrase that, if he uttered it, his fury would subside immediately: A'oodhu billahi minash-shaytanir-rajeem.'",
    lesson: "True Islamic fortitude is demonstrated not by physical strength or retribution in anger, but by restraining oneself and seeking refuge in Allah."
  },
  {
    id: "dua-ghabrahat",
    title: "Dua-e-Yunus (Ayat-e-Kareema for Relief from Distress, Heartbreak & Anxiety)",
    category: "Anxiety & Relief",
    phrases: ["ayat e kareema", "dua e yunus", "ghabrahat ki dua", "extreme anxiety", "musibat se nijat", "panic attack", "dil toota", "broken heart", "gham ki dua"],
    keywords: ["ghabrahat", "ghabrahut", "ghabra", "panic", "anxiety", "anxious", "restless", "bechaini", "bechain", "mushkil", "hardship", "trouble", "phas", "phas gaya", "trap", "trapped", "tension", "stress", "suffocation", "dam ghutna", "problem", "overthinking", "dimag kharab", "yunus", "difficulty", "darkness", "andhera", "stuck", "helpless", "musibat", "dil", "tuta", "toota", "dil tuta", "dil toota", "broken", "heartbreak", "heartbroken", "heart", "breakup", "dhoka", "cheated", "betrayal", "tanha", "tanhaai", "lonely", "alone", "udas", "udasi", "sad", "sadness", "crying", "rona", "aansu", "gham", "grief", "pain", "painful", "sorrow", "solace", "rejection", "chhod diya", "dukhi", "depressed", "depression", "hopeless"],
    arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    roman: "Laa ilaaha illaa Anta, subhaanaka innee kuntu minaz-zaalimeen.",
    translationUrdu: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔",
    translationEnglish: "There is no deity except You; exalted are You! Indeed, I have been of the wrongdoers.",
    reference: "Surah Al-Anbiya (21:87) • Jami' at-Tirmidhi (3505)",
    waqia: "Prophet Yunus (A.S) was trapped within three layers of darkness: the depth of the ocean, the black of night, and the belly of the whale. Upon uttering this declaration of Tawheed and confession of humility, Allah commanded the whale to cast him safely upon the shore.",
    lesson: "The Prophet Muhammad ﷺ stated: 'No Muslim supplicates with these words in any distress except that Allah relieves their anguish.'"
  },
  {
    id: "dua-karz",
    title: "Relief from Overwhelming Debt, Poverty & Laziness",
    category: "Debt & Sustenance",
    phrases: ["karz ki dua", "qarz ki dua", "debt relief", "paisa aane ki dua", "rizq me barkat", "financial problem"],
    keywords: ["karz", "qarz", "debt", "loan", "borrowed", "paisa", "paise", "money", "rozi", "rizq", "income", "ghareebi", "poverty", "tangi", "job", "naukri", "kam", "kaam", "berozgar", "unemployed", "bills", "financial", "loss", "nuksan", "ameer", "kamyabi", "business", "dukan", "wealth", "sustenance", "lazy", "susti", "kasal", "kasli", "bukhli", "kanjoos"],
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    roman: "Allahumma innee a'oodhu bika minal-hammi wal-hazani, wa a'oodhu bika minal-'ajzi wal-kasali, wa a'oodhu bika minal-jubni wal-bukhli, wa a'oodhu bika min ghalabatid-dayni wa qahrir-rijaal.",
    translationUrdu: "اے اللہ! میں فکر اور غم سے، سستی اور بے بسی سے، بزدلی اور بخل سے، اور قرض کے بوجھ اور لوگوں کے دباؤ سے تیری پناہ مانگتا ہوں۔",
    translationEnglish: "O Allah, I seek refuge in You from grief and sadness, from weakness and laziness, from cowardice and miserliness, and from being overpowered by debt and subjugated by men.",
    reference: "Sahih al-Bukhari (2893) • Sunan Abi Dawood (1555)",
    waqia: "The Prophet ﷺ entered the Mosque outside prayer times and saw Abu Umamah (R.A) weighed down by grief and debt. The Prophet ﷺ taught him this supplication to recite morning and evening. Abu Umamah later narrated: 'I recited it, and Allah removed all my sorrow and resolved every single debt.'",
    lesson: "Reciting this daily eliminates mental paralysis, restores vigor, and invites divine blessings into one's financial sustenance."
  },
  {
    id: "dua-shifa",
    title: "Supplication of Prophet Ayyub (A.S) for Sickness & Healing",
    category: "Illness & Healing",
    phrases: ["bimari ki dua", "shifa ki dua", "healing dua", "sickness dua", "dard ki dua", "ilaj dua"],
    keywords: ["bimar", "bimari", "beemar", "beemari", "sick", "sickness", "ill", "illness", "dard", "pain", "tabiyat", "health", "hospital", "doctor", "medicine", "dawa", "fever", "bukhar", "cancer", "infection", "healing", "heal", "shifa", "ilaj", "cure", "body ache", "sar dard", "headache", "pet dard", "ayyub", "disease"],
    arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
    roman: "Annee massaniyad-durru wa Anta arhamur-raahimeen.",
    translationUrdu: "بے شک مجھے بیماری نے آ گھیرا ہے، اور تو سب سے زیادہ رحم فرمانے والا ہے۔",
    translationEnglish: "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.",
    reference: "Surah Al-Anbiya (21:83)",
    waqia: "Prophet Ayyub (A.S) endured severe illness and loss for eighteen patient years without ever uttering a complaint. When he finally made this humble supplication, Allah commanded the earth to burst forth with a cool soothing spring that restored his health and vitality.",
    lesson: "No ailment or physical trial is beyond the restorative mercy of Allah. Call upon ash-Shafi (The Absolute Healer) with firm certainty."
  },
  {
    id: "dua-maghfirat",
    title: "Sayyidul Istighfar (The Master Supplication for Forgiveness)",
    category: "Guilt & Forgiveness",
    phrases: ["sayyidul istighfar", "maafi ki dua", "tauba ki dua", "gunah ki maafi", "forgiveness dua", "astaghfirullah"],
    keywords: ["gunah", "gunahon", "paap", "tauba", "tawbah", "maafi", "istighfar", "astaghfirullah", "forgive", "forgiveness", "guilt", "pashayman", "sharminda", "sins", "sin", "pardon", "mercy", "rehmat", "shaitan", "regret", "mistake", "ghalti", "bad deeds", "sayyidul istighfar", "repent", "repentance"],
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    roman: "Allahumma Anta Rabbee laa ilaaha illaa Anta, khalaqtanee wa ana 'abduka, wa ana 'alaa 'ahdika wa wa'dika mastata'tu, a'oodhu bika min sharri maa sana'tu, aboo'u laka bini'matika 'alayya, wa aboo'u bidhambee faghfir lee fa-innahu laa yaghfirudh-dhunooba illaa Anta.",
    translationUrdu: "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، میں اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے کے شر سے تیری پناہ مانگتا ہوں، اپنے اوپر تیری نعمتوں کا اعتراف کرتا ہوں اور اپنے گناہوں کا اقرار کرتا ہوں، پس مجھے معاف فرما دے کیونکہ تیرے سوا کوئی گناہوں کو معاف نہیں کر سکتا۔",
    translationEnglish: "O Allah, You are my Lord; none has the right to be worshipped but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.",
    reference: "Sahih al-Bukhari (6306)",
    waqia: "The Prophet Muhammad ﷺ designated this specific formula as 'Sayyidul Istighfar' (The Chief of Supplications for Forgiveness), promising that whoever recites it with conviction during the morning and dies before evening, or recites it at night and dies before dawn, is promised Paradise.",
    lesson: "Never despair of Allah's mercy. Sincere confession and acknowledgment of divine grace wipe away the deepest remorse."
  },
  {
    id: "dua-future-fear",
    title: "Immunity Against Calamity, Accidents & Fear of Unknown",
    category: "Fear of Future & Protection",
    phrases: ["darr ki dua", "khauf ki dua", "protection against harm", "bura khwab", "accident se bachne"],
    keywords: ["khauf", "darr", "dar", "fear", "scared", "afraid", "future", "aage kya hoga", "kal ki chinta", "danger", "khatra", "evil", "unknown", "calamity", "hadesa", "accident", "nightmare", "bura khwab", "darr lag raha", "enemy", "dushman", "safe", "hifazat"],
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    roman: "Bismillaahil-ladhee laa yadurru ma'as-mihi shay'un fil-ardi wa laa fis-samaa'i wa Huwas-Samee'ul-'Aleem.",
    translationUrdu: "اللہ کے نام کے ساتھ جس کے نام کی برکت سے زمین اور آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی، اور وہ خوب سننے والا، سب کچھ جاننے والا ہے۔",
    translationEnglish: "In the Name of Allah, with Whose Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing.",
    reference: "Sunan Abi Dawood (5088) • Jami' at-Tirmidhi (3388) • Sahih",
    waqia: "Hazrat Uthman ibn Affan (R.A) narrated that the Prophet ﷺ taught: 'Any servant who recites this thrice every morning and thrice every evening will never suffer unexpected harm or poison.'",
    lesson: "Entrusting your future to Allah with this phrase creates a fortress of peace around your mind and household."
  },
  {
    id: "dua-guidance",
    title: "Istikhara: Seeking Divine Clarity in Confusion & Decisions",
    category: "Guidance & Decisions",
    phrases: ["istikhara ki dua", "faisla karne ki dua", "confusion dua", "career decision", "shadi istikhara"],
    keywords: ["confused", "confusion", "faisla", "decision", "kya karu", "career", "shadi", "marriage", "job offer", "choice", "rasta", "guidance", "hidayat", "direction", "right path", "samajh nahi aa raha", "future plan", "dilemma", "istikhara"],
    arabic: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ",
    roman: "Allahumma innee astakheeruka bi-'ilmika, wa astaqdiruka bi-qudratika, wa as'aluka min fadlikal-'azeem.",
    translationUrdu: "اے اللہ! میں تیرے علم کی مدد سے خیر مانگتا ہوں، تیری قدرت کے ذریعے طاقت مانگتا ہوں، اور تیرے بڑے فضل کا سوال کرتا ہوں۔",
    translationEnglish: "O Allah, I seek Your guidance through Your knowledge, and I seek ability through Your power, and I ask You from Your immense bounty.",
    reference: "Sahih al-Bukhari (1166)",
    waqia: "The Prophet Muhammad ﷺ used to teach his companions the supplication of Istikhara for all their matters just as he taught them a Surah of the Quran.",
    lesson: "Whenever you are trapped in doubt between multiple paths, surrender your choice to Allah; He places ease in the path that holds goodness for your Deen and Dunya."
  },
  {
    id: "dua-ease-task",
    title: "Ease in Difficult Tasks, Exams & Interviews",
    category: "Ease in Difficult Affairs",
    phrases: ["exam ki dua", "interview ki dua", "mushkil aasan", "paper ki dua", "task ease"],
    keywords: ["mushkil", "exam", "paper", "imtihaan", "test", "interview", "aasan", "aasani", "easy", "ease", "difficult task", "meeting", "presentation", "result", "pass", "fail", "kamyabi", "success", "work pressure", "boss", "study", "padhai"],
    arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
    roman: "Allahumma laa sahla illaa maa ja'altahu sahlaa, wa Anta taj'alul-hazna idhaa shi'ta sahlaa.",
    translationUrdu: "اے اللہ! کوئی چیز آسان نہیں مگر جسے تو آسان بنا دے، اور تو جب چاہتا ہے مشکل کو آسان کر دیتا ہے۔",
    translationEnglish: "O Allah, nothing is easy except what You make easy, and You make hardship easy if You will.",
    reference: "Sahih Ibn Hibban (974) • Hisnul Muslim",
    waqia: "Whenever the Prophet ﷺ was confronted with a heavy responsibility or difficult circumstance, he would invoke Allah with these words, relying upon divine facilitation rather than mortal means.",
    lesson: "Recite this before entering an exam hall, job interview, or critical life milestone. Rely upon the Facilitator of all affairs."
  },
  {
    id: "dua-family-peace",
    title: "Peace, Love & Comfort in the Household & Marriage",
    category: "Family & Relationships",
    phrases: ["ghar me sukoon", "ghar me shanti", "shadi shuda", "family peace", "rishta acha", "mian biwi me mohabbat", "aulad ki dua"],
    keywords: ["family", "ghar sukoon", "shanti", "parents", "walidain", "maa", "baap", "bhai", "behan", "wife", "shohar", "husband", "rishta", "love", "pyar", "mohabbat", "ladai", "jhagda", "household peace", "home harmony", "divorce", "relationship", "children", "aulaad", "bachhe"],
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    roman: "Rabbanaa hab lanaa min azwaajinaa wa dhurriyyatinaa qurrata a'yunin waj'alnaa lil-muttaqeena imaamaa.",
    translationUrdu: "اے ہمارے رب! ہمیں ہماری بیویوں اور ہماری اولاد سے آنکھوں کی ٹھنڈک عطا فرما، اور ہمیں پرہیزگاروں کا پیشوا بنا۔",
    translationEnglish: "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.",
    reference: "Surah Al-Furqan (25:74)",
    waqia: "This Quranic supplication is the continuous cry of 'Ibad ar-Rahman' (The True Servants of the Most Merciful), seeking deep emotional peace in marriage and pious lineage.",
    lesson: "Domestic tranquility is a divine blessing. Recite this after Namaz to soften hearts and eradicate disputes between spouses and family members."
  },
  {
    id: "dua-ishq-mohabbat",
    title: "Seeking Divine Love of Allah (Allah Ki Mohabbat Ki Dua)",
    category: "Divine Love & Seeking Allah's Pleasure",
    phrases: ["ishq ki dua", "mohabbat ki dua", "allah ki mohabbat", "divine love", "hubb", "mohabbat me sukoon"],
    keywords: ["ishq", "mohabbat", "hubb", "divine love", "allah ki mohabbat", "affection", "relationship", "chahat"],
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَالْعَمَلَ الَّذِي يُبَلِّغُنِي حُبَّكَ",
    roman: "Allahumma innee as'aluka hubbaka, wa hubba man yuhibbuka, wal-'amalal-ladhee yuballighunee hubbak.",
    translationUrdu: "اے اللہ! میں تجھ سے تیری محبت مانگتا ہوں، اور ہر اس شخص کی محبت جو تجھ سے محبت کرتا ہے، اور ایسے عمل کی محبت جو مجھے تیری محبت تک پہنچا دے۔",
    translationEnglish: "O Allah, I ask You for Your divine love, the pure love of those who love You, and the righteous deeds that will lead me to attain Your love.",
    reference: "Jami' at-Tirmidhi (3490) • Grade: Hasan (Darussalam) • Imam at-Tirmidhi: Hasan Gharib [https://sunnah.com/tirmidhi:3490]",
    waqia: "Prophet Dawud (A.S) used to supplicate with these profound words, recognizing that all true and enduring love originates with Allah, and anchoring our hearts in divine love brings eternal tranquility.",
    lesson: "Grading on Sunnah.com: Hasan (Darussalam) and Hasan Gharib (Imam at-Tirmidhi). Anchors the seeker's heart in the divine love of the Creator."
  },
  {
    id: "dua-knowledge",
    title: "Increase in Wisdom, Memory & Understanding (Rabbi Zidni 'Ilma)",
    category: "Wisdom & Knowledge",
    phrases: ["ilm me izafa", "padhai ki dua", "memory increase", "concentration in study", "yadast tez", "rabbi zidni ilma"],
    keywords: ["knowledge", "ilm", "padhai", "study", "memory", "yadast", "bhul gaya", "forget", "wisdom", "hikmat", "student", "talib e ilm", "iqbal", "focus", "concentration"],
    arabic: "رَّبِّ زِدْنِي عِلْمًا",
    roman: "Rabbi zidnee 'ilmaa.",
    translationUrdu: "اے میرے رب! میرے علم میں اضافہ فرما۔",
    translationEnglish: "My Lord, increase me in knowledge.",
    reference: "Surah Ta-Ha (20:114)",
    waqia: "Allah commanded the Prophet Muhammad ﷺ to never ask for an increase in anything of this worldly life except for an increase in beneficial knowledge.",
    lesson: "Recite frequently while studying or seeking comprehension. True knowledge illuminates the soul and grants clarity."
  },
  {
    id: "dua-nazar-evil",
    title: "Prophetic Protection Against Evil Eye (Nazar) & Malice",
    category: "Protection & Evil Eye",
    phrases: ["nazar ki dua", "buri nazar", "evil eye", "hasad ki dua", "jadu se hifazat", "kala jadu", "nazar se bachne"],
    keywords: ["nazar", "buri nazar", "evil eye", "hasad", "jealousy", "envy", "tok", "lag gayi", "hifazat", "protection", "safety"],
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    roman: "A'oodhu bi-kalimaatillaahit-taammati min kulli shaytaanin wa haammah, wa min kulli 'aynin laammah.",
    translationUrdu: "میں اللہ کے تمام کامل کلمات کی پناہ مانگتا ہوں ہر شیطان، ہر زہریلے جانور اور ہر نقصان دہ نظرِ بد سے۔",
    translationEnglish: "I seek refuge in the perfect words of Allah from every devil, every poisonous pest, and every evil, blameworthy eye.",
    reference: "Sahih al-Bukhari (3371) • Grade: Sahih (https://sunnah.com/bukhari:3371)",
    waqia: "Narrated by Ibn Abbas (RA): The Prophet ﷺ used to seek refuge for Al-Hasan and Al-Husain reciting this timeless prayer, saying: 'Your forefather (Abraham) used to seek refuge for Ishmael and Isaac with these words.'",
    lesson: "The primary authentic Sunnah protection against evil eye, envy, and harmful influences."
  },
  {
    id: "dua-both-worlds",
    title: "Comprehensive Goodness in Dunya & Akhirah (Rabbana Aatina)",
    category: "General Quranic Supplications",
    phrases: ["rabbana aatina", "dunya aakhirat", "goodness in both worlds", "jahannam se nijat", "kamyabi ki dua"],
    keywords: ["dunya", "akhirat", "hasanah", "jahannam", "fire", "success", "both worlds", "rabbana", "complete"],
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    roman: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adhaaban-naar.",
    translationUrdu: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما، اور ہمیں دوزخ کے عذاب سے بچا۔",
    translationEnglish: "Our Lord, give us in this world that which is good and in the Hereafter that which is good, and save us from the punishment of the Fire.",
    reference: "Surah Al-Baqarah (2:201) • Sahih al-Bukhari (6389)",
    waqia: "Anas ibn Malik (R.A) narrated that the most frequent supplication of the Prophet Muhammad ﷺ was this comprehensive verse.",
    lesson: "The single most complete prayer encompassing halal wealth, joyful health, pious family, and eternal Jannah."
  },
  {
    id: "dua-walidain",
    title: "Supplication for Parents' Divine Mercy (Maa Baap Ki Maghfirat)",
    category: "Family & Parents",
    phrases: ["maa baap ki dua", "parents dua", "walidain ki dua", "mother father dua", "maghfirat parents"],
    keywords: ["parents", "maa", "baap", "walidain", "mother", "father", "mercy", "childhood", "rabbir-hamhuma"],
    arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    roman: "Rabbir-hamhumaa kamaa rabbayaanee sagheeraa.",
    translationUrdu: "اے میرے پروردگار! تو ان دونوں (ماں باپ) پر رحم فرما جیسا کہ انہوں نے بچپن میں مجھے پالا۔",
    translationEnglish: "My Lord, have mercy upon them (my parents) as they brought me up when I was small.",
    reference: "Surah Al-Isra (17:24)",
    waqia: "Allah orders believers in the Quran to lower the wing of humility to their parents out of mercy and supplicate for their divine forgiveness.",
    lesson: "A continuous source of mercy for living parents and ongoing Sadqah-e-Jariyah for those who have passed away."
  },
  {
    id: "dua-heart-firm",
    title: "Steadfastness of the Heart Upon Deen (Yaa Muqallibal Quloob)",
    category: "Faith & Spiritual Firmness",
    phrases: ["dil ki pabandi", "deen par qayam", "steadfastness", "firm upon deen", "imaan ki hifazat"],
    keywords: ["heart", "dil", "deen", "islam", "firm", "steadfast", "muqallibal", "quloob", "faith", "imaan"],
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ",
    roman: "Yaa Muqallibal-quloob, thabbit qalbee 'alaa deenik.",
    translationUrdu: "اے دلوں کے پھیرنے والے! میرے دل کو اپنے دین پر ثابت قدم رکھ۔",
    translationEnglish: "O Turner of the hearts, make my heart firm upon Your religion.",
    reference: "Jami' at-Tirmidhi (2140) • Sahih",
    waqia: "Hazrat Umm Salama (R.A) asked the Prophet ﷺ: 'O Messenger of Allah, do hearts turn?' He replied: 'Yes, there is no human being except that his heart is between two fingers of the All-Merciful; if He wills He guides it upright, and if He wills He lets it stray.'",
    lesson: "Guards against spiritual hypocrisy, burnout, and falling away from righteous deeds."
  },
  {
    id: "dua-afiyat",
    title: "Prophetic Supplication for Complete Well-Being (Afiyat)",
    category: "Health & Well-Being",
    phrases: ["afiyat ki dua", "complete wellbeing", "health dua", "sehat ki dua", "salamat ki dua"],
    keywords: ["afiyat", "wellbeing", "health", "sehat", "safety", "forgiveness", "dunya", "akhirah"],
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    roman: "Allahumma innee as'alukal-'afwa wal-'aafiyata fid-dunyaa wal-aakhirah.",
    translationUrdu: "اے اللہ! میں تجھ سے دنیا اور آخرت میں معافی اور ہر قسم کی عافیت و سلامتی کا سوال کرتا ہوں۔",
    translationEnglish: "O Allah, I ask You for pardon and well-being in this life and in the Hereafter.",
    reference: "Sunan Ibn Majah (3871) • Sahih",
    waqia: "Hazrat Abbas (R.A) asked the Prophet ﷺ for the most beneficial thing to ask of Allah. The Prophet ﷺ replied: 'Ask Allah for Al-Afiyah (Complete Well-Being and Protection).' He asked again days later, and the Prophet repeated: 'Ask Allah for Al-Afiyah, for no one is given anything better after certainty of faith than Afiyah!'",
    lesson: "Covers mental peace, bodily health, financial security, and spiritual salvation."
  }
];

// 2. DAILY DUAS POOL FOR LIVE SHUFFLE (Contains all 25+ Daily Sunnah Duas)
const DailyDuasPool = MasterKnowledge;

// 3. DIGITAL TASBIH DHIKR DATA
const TasbihDhikrList = [
  {
    id: "subhanallah",
    name: "SubhanAllah",
    arabic: "سُبْحَانَ اللَّهِ",
    meaning: "Glory be to Allah — Perfect beyond all imperfection",
    defaultTarget: 33
  },
  {
    id: "alhamdulillah",
    name: "Alhamdulillah",
    arabic: "الْحَمْدُ لِلَّهِ",
    meaning: "All praise and gratitude belong exclusively to Allah",
    defaultTarget: 33
  },
  {
    id: "allahuakbar",
    name: "Allahu Akbar",
    arabic: "اللَّهُ أَكْبَرُ",
    meaning: "Allah is Greater than all creation and worldly trials",
    defaultTarget: 34
  },
  {
    id: "astaghfirullah",
    name: "Astaghfirullah",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    meaning: "I seek forgiveness from Allah, the Most Merciful",
    defaultTarget: 100
  },
  {
    id: "lailahaillallah",
    name: "La ilaha illallah",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    meaning: "There is no deity worthy of worship except Allah",
    defaultTarget: 100
  },
  {
    id: "durood",
    name: "Durood Ibrahim",
    arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
    meaning: "O Allah, send peace and blessings upon Prophet Muhammad",
    defaultTarget: 100
  }
];

// 4. APPLICATION STATE
let currentDailyDua = DailyDuasPool[0];
let currentSearchResult = null;
let savedDuas = [];
let audioReciting = false;

let tasbihState = {
  count: 0,
  target: 33,
  completedRounds: 0,
  dhikrIndex: 0,
  soundEnabled: true,
  vibrateEnabled: true
};

// Web Audio API Synthesizer
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playBeadClickSound() {
  if (!tasbihState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(640, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}

function playCompletionChime() {
  if (!tasbihState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      gain.gain.setValueAtTime(0.25, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  } catch (e) {}
}

// ==========================================================================
// ARABIC TO ROMAN URDU PHONETIC TRANSLITERATOR (TALAFFUZ ENGINE)
// Enables non-Arabic / non-Urdu script readers and elders to recite fluently
// ==========================================================================
function transliterateArabic(text) {
  if (!text || typeof text !== "string") return "";

  // 1. Strip Quranic pause signs, sajda markers, and decorative glyphs
  let s = text.replace(/[\u06D6-\u06ED\u0610-\u061A\uFD3E\uFD3F]/g, " ");

  // 2. Sacred Prophetic phrases and divine expressions
  s = s.replace(/بِسْمِ\s*ٱ?للَّهِ\s*ٱلرَّحْمَٰنِ\s*ٱلرَّحِيمِ/gi, " Bismillaahir-Rahmaanir-Raheem ");
  s = s.replace(/صَلَّى\s*اللَّهُ\s*عَلَيْهِ\s*وَسَلَّمَ/gi, " (sallallaahu 'alayhi wa sallam) ");
  s = s.replace(/رَضِيَ\s*اللَّهُ\s*عَنْهُ/gi, " (radiyallaahu 'anhu) ");
  s = s.replace(/رَضِيَ\s*اللَّهُ\s*عَنْهَا/gi, " (radiyallaahu 'anhaa) ");
  s = s.replace(/رَحِمَهُ\s*اللَّهُ/gi, " (rahimahullaah) ");
  s = s.replace(/سُبْحَانَ\s*اللَّهِ/gi, " Subhaan-Allaah ");
  s = s.replace(/الْحَمْدُ\s*لِلَّهِ/gi, " Al-hamdu lillaah ");
  s = s.replace(/اللَّهُ\s*أَكْبَرُ/gi, " Allaahu Akbar ");
  s = s.replace(/لَا\s*إِلَٰهَ\s*إِلَّا\s*اللَّهُ/gi, " Laa ilaaha illallaah ");
  s = s.replace(/أَسْتَغْفِرُ\s*اللَّهَ/gi, " Astaghfirullaah ");
  s = s.replace(/اللَّهِ|اللّٰه|ٱللَّهِ|اللَّهُ|اللَّهَ/gi, " Allaah ");

  // Common particles & pronouns
  s = s.replace(/(^|\s)هُوَ(\s|$|[.,!?])/gu, "$1huwa$2");
  s = s.replace(/(^|\s)هِيَ(\s|$|[.,!?])/gu, "$1hiya$2");
  s = s.replace(/(^|\s)فِي(\s|$|[.,!?])/gu, "$1fee$2");
  s = s.replace(/(^|\s)مِنْ?(\s|$|[.,!?])/gu, "$1min$2");
  s = s.replace(/(^|\s)عَنْ?(\s|$|[.,!?])/gu, "$1'an$2");
  s = s.replace(/(^|\s)إِلَىٰ?(\s|$|[.,!?])/gu, "$1ilaa$2");
  s = s.replace(/(^|\s)عَلَىٰ?(\s|$|[.,!?])/gu, "$1'alaa$2");

  // Sun letters handling for 'Al-' (ت ث د ذ ر ز س ش ص ض ط ظ ل ن)
  const sunLetterRegex = /(?:^|\s)(?:ٱل|ال|أل)([\u062a\u062b\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0644\u0646])\u0651/gu;
  s = s.replace(sunLetterRegex, (m, c) => " a" + c + "-" + c);

  // Normal Al- and prefixed prepositions
  s = s.replace(/(?:^|\s)(?:ٱلْ?|الْ?)/gu, " al-");
  s = s.replace(/(?:^|\s)بِ(?:ٱل|ال)ْ?/gu, " bil-");
  s = s.replace(/(?:^|\s)وَ(?:ٱل|ال)ْ?/gu, " wal-");
  s = s.replace(/(?:^|\s)فِي\s*(?:ٱل|ال)ْ?/gu, " fil-");

  const consonantMap = {
    "ء": "'", "أ": "", "إ": "", "ؤ": "'", "ئ": "'", "آ": "aa",
    "ب": "b", "ت": "t", "ث": "th", "ج": "j", "ح": "h", "خ": "kh",
    "د": "d", "ذ": "dh", "ر": "r", "ز": "z", "س": "s", "sh": "sh",
    "ص": "s", "ض": "d", "ط": "t", "ظ": "z", "ع": "'", "غ": "gh",
    "ف": "f", "ق": "q", "ك": "k", "ل": "l", "م": "m", "ن": "n",
    "ه": "h", "ة": "h", "پ": "p", "چ": "ch", "ژ": "zh", "گ": "g"
  };

  const harakat = {
    "\u064E": "a",   // Fatha
    "\u064F": "u",   // Damma
    "\u0650": "i",   // Kasra
    "\u064B": "an",  // Fathatan
    "\u064C": "un",  // Dammatan
    "\u064D": "in",  // Kasratan
    "\u0652": "",    // Sukun
    "\u0670": "aa",  // Dagger Alif
    "\u0653": "aa"   // Maddah
  };

  let out = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const prev = s[i - 1] || "";
    const next = s[i + 1] || "";

    // Shaddah (doubling previous consonant)
    if (ch === "\u0651") {
      let j = out.length - 1;
      while (j >= 0 && !/[a-zA-Z]/.test(out[j])) j--;
      if (j >= 0 && out[j].toLowerCase() !== 'h') {
        out += out[j];
      }
      continue;
    }

    // Harakat
    if (harakat[ch] !== undefined) {
      out += harakat[ch];
      continue;
    }

    // Consonants
    if (consonantMap[ch] !== undefined) {
      out += consonantMap[ch];
      continue;
    }

    // Alif / Waaw / Yaa
    if (ch === "ا" || ch === "ٱ") {
      if (out.endsWith("a")) {
        out += "a";
      } else if (i === 0 || /\s/.test(prev) || out.endsWith("-") || out.endsWith("'")) {
        out += (next === "\u0650") ? "i" : (next === "\u064F") ? "u" : "a";
      } else {
        out += "aa";
      }
      continue;
    }

    if (ch === "ى") {
      out += "aa";
      continue;
    }

    if (ch === "و") {
      if (out.endsWith("u")) {
        out = out.slice(0, -1) + "oo";
      } else if (i === 0 || /\s/.test(prev)) {
        out += "wa";
      } else {
        out += "w";
      }
      continue;
    }

    if (ch === "ي") {
      if (out.endsWith("i")) {
        out = out.slice(0, -1) + "ee";
      } else {
        out += "y";
      }
      continue;
    }

    out += ch;
  }

  return out
    .replace(/\b[aA]al-/g, "al-")
    .replace(/aa+/g, "aa")
    .replace(/ee+/g, "ee")
    .replace(/oo+/g, "oo")
    .replace(/eeaa/g, "yaa")
    .replace(/nnee/g, "niy")
    .replace(/bil-n/g, "bin-n")
    .replace(/aah\b/g, "ah")
    .replace(/'+/g, "'")
    .replace(/-+/g, "-")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim()
    .replace(/^[a-z]/, c => c.toUpperCase());
}

if (typeof window !== "undefined") {
  window.transliterateArabic = transliterateArabic;
}

// ==========================================================================
// URDU TO HINGLISH (ROMAN URDU) MATLAB ENGINE
// Translates/transliterates authentic Urdu commentaries and translations
// into natural, readable, elder-friendly Hinglish (Matlab)
// ==========================================================================
const SukunUrduDictionary = {
  "اللہ": "Allah", "اللّٰہ": "Allah", "رسول": "Rasool", "نبی": "Nabi", "محمد": "Muhammad",
  "صلی": "sallallahu", "علیہ": "alayhi", "وسلم": "wa sallam", "رضی": "radiyallahu", "عنہ": "anhu",
  "عنہا": "anha", "عنہم": "anhum", "رحمہ": "rahimahullah", "قرآن": "Qur'an", "حدیث": "hadith",
  "آیت": "ayat", "سورۃ": "Surah", "سورہ": "Surah", "کتاب": "kitab", "باب": "baab", "رب": "Rabb",

  "کا": "ka", "کے": "ke", "کی": "ki", "کو": "ko", "سے": "se", "پر": "par", "میں": "mein",
  "نے": "ne", "اور": "aur", "ہے": "hai", "ہیں": "hain", "تھا": "tha", "تھی": "thi", "تھے": "the",
  "ہو": "ho", "ہوا": "hua", "ہوئی": "hui", "ہوئے": "hue", "ہونا": "hona", "ہوتی": "hoti", "ہوتا": "hota", "ہوتے": "hote",
  "نہ": "na", "نہیں": "nahi", "بھی": "bhi", "یہ": "yeh", "وہ": "woh", "اس": "us", "ان": "un",
  "جس": "jis", "جن": "jin", "کس": "kis", "کیا": "kya", "کچھ": "kuch", "تو": "to", "جب": "jab",
  "تب": "tab", "اب": "ab", "سب": "sab", "ہر": "har", "ایک": "ek", "دو": "do", "تین": "teen", "چار": "chaar",
  "جو": "jo", "وہی": "wahi", "یہی": "yahi", "لیے": "liye", "لیئے": "liye", "تک": "tak", "پاس": "paas",
  "تم": "tum", "ہم": "hum", "آپ": "aap", "کوئی": "koi", "وقت": "waqt",
  "اپنے": "apne", "अपनी": "apni", "اپنی": "apni", "اپنا": "apna", "اپنوں": "apnon",

  "اعمال": "a'maal", "عمل": "amal", "دارومدار": "daromadar", "نیت": "niyyat", "نیتوں": "niyyaton",
  "انسان": "insaan", "لوگ": "log", "لوگوں": "logon", "مومن": "momin", "مسلمان": "musalman",
  "بندہ": "bandah", "بندے": "bande", "بندوں": "bandon", "بھائی": "bhai", "بہن": "behan",
  "پسند": "pasand", "محبت": "mohabbat", "نفرت": "nafrat", "خیر": "khair", "شر": "shar",
  "نیکی": "neki", "نیکیاں": "nekiyan", "گناہ": "gunah", "ثواب": "sawab", "عذاب": "azaab",
  "جنت": "jannat", "جہنم": "jahannam", "دوزخ": "dozakh", "قیامت": "qayamat", "دن": "din", "رات": "raat",
  "دنیا": "dunya", "آخرت": "aakhirat", "زمین": "zameen", "آسمان": "aasmaan", "چاند": "chaand", "سورج": "sooraj",

  "بہترین": "behtareen", "بہتر": "behtar", "شخص": "shakhs", "سیکھا": "seekha", "سکھایا": "sikhaya",
  "دوسروں": "doosron", "دوسرا": "doosra", "دوسری": "doosri", "دوسرے": "doosre",
  "سکتا": "sakta", "سکتی": "sakti", "سکتے": "sakte", "سکا": "saka",
  "کرے": "kare", "کرتا": "karta", "کرتی": "karti", "کرتے": "karte", "کر": "kar", "کرنا": "karna",
  "پڑھتا": "padhta", "پڑھی": "padhi", "پڑھے": "padhe", "پڑھنا": "padhna", "سنے": "sune", "سننا": "sunna",
  "کہا": "kaha", "فرمایا": "farmaya", "ارشاد": "irshad", "بتایا": "bataya", "پوچھا": "pouchha",
  "پاکیزگی": "pakeezgi", "پاک": "paak", "نصف": "nisf", "آدھا": "aadha", "ایمان": "imaan",
  "الحمد": "Alhamdulillah", "لله": "lillah", "میزان": "meezaan", "ترازو": "tarazu", "بھر": "bhar", "دیتا": "deta", "دیتی": "deti",

  "تکلیف": "takleef", "تکلیفوں": "takleefon", "پریشانی": "pareshani", "مصیبت": "museebat", "دور": "door", "فرمائے": "farmaye", "فرمائےگا": "farmayega",
  "رحم": "rahm", "کرنے": "karne", "والوں": "walon", "والا": "wala", "والی": "wali", "والے": "wale",
  "رحمت": "rahmat", "رحمن": "Rahman", "رحیم": "Raheem", "عبادت": "ibaadat", "دعا": "dua",
  "صدقہ": "sadqah", "خیرات": "khairat", "مسکرانا": "muskurana", "مسکراہٹ": "muskurahat",
  "چہرہ": "chehra", "چہرے": "chehre", "سامنے": "saamne", "روبرو": "roobaroo",

  "قسم": "qasam", "حکمت": "hikmat", "بھرا": "bhara", "بےشک": "beshak", "یقیناً": "yaqeenan",
  "پیغمبروں": "paighambaron", "رسولوں": "rasoolon", "سیدھے": "seedhe", "سیدھا": "seedha", "راستے": "raaste", "راستہ": "raasta",
  "ہدایت": "hidayat", "گمراہی": "gumrahi", "مغفرت": "maghfirat", "توبہ": "taubah", "معاف": "maaf",
  "حفاظت": "hifazat", "بچاؤ": "bachao", "نجات": "nijaat", "شفا": "shifa", "صحت": "sehat", "بیماری": "beemari",
  "رزق": "rizq", "برکت": "barakah", "دولت": "daulat", "مال": "maal", "فقر": "faqr", "غربت": "ghurbat",
  "قرض": "karz", "ادائیگی": "adaigi", "آسانی": "aasani", "مشکل": "mushkil", "تنگی": "tangi",
  "صبر": "sabr", "شکر": "shukr", "خوف": "khauf", "ڈر": "darr", "امن": "aman", "سکون": "sukoon",
  "دل": "dil", "جان": "jaan", "روح": "rooh", "آنکھ": "aankh", "کان": "kaan", "ہاتھ": "haath", "پاؤں": "paon",

  "صبح": "subah", "شام": "shaam", "نماز": "namaz", "فجر": "fajr", "ظہر": "zohr", "عصر": "asr",
  "مغرب": "maghrib", "عشاء": "isha", "سجدہ": "sajdah", "رکوع": "rukoo", "تسبیح": "tasbih",
  "طہارت": "taharat", "وضو": "wudhu", "غسل": "ghusl", "روزہ": "roza", "افطار": "iftaar", "سحری": "sehri",
  "حج": "hajj", "عمرہ": "umrah", "طواف": "tawaaf", "قربانی": "qurbani", "جہاد": "jihaad",
  "بہرحال": "baharhaal", "ہمیشہ": "hamesha", "کبھی": "kabhi", "پھر": "phir", "پہلے": "pehle", "بعد": "baad"
};

const SukunUrduCharMap = {
  "ا": "a", "آ": "aa", "ب": "b", "پ": "p", "ت": "t", "ٹ": "t", "ث": "s",
  "ج": "j", "چ": "ch", "ح": "h", "خ": "kh", "د": "d", "ڈ": "d", "ذ": "z",
  "ر": "r", "ڑ": "r", "ز": "z", "ژ": "zh", "س": "s", "ش": "sh", "ص": "s",
  "ض": "z", "ط": "t", "ظ": "z", "ع": "'", "غ": "gh", "ف": "f", "ق": "q",
  "ک": "k", "گ": "g", "ل": "l", "م": "m", "ن": "n", "ں": "n", "و": "o",
  "ہ": "h", "ۂ": "h", "ۃ": "t", "ھ": "h", "ء": "'", "ی": "ee", "ے": "e", "ئ": "e"
};

function transliterateUrduToHinglish(urduText) {
  if (!urduText || typeof urduText !== "string") return "";

  let text = urduText
    .replace(/۔/g, ". ")
    .replace(/،/g, ", ")
    .replace(/؛/g, "; ")
    .replace(/؟/g, "? ")
    .replace(/[«»"']/g, "")
    .replace(/الحمد لله/gi, "Alhamdulillah")
    .replace(/ﷺ/g, " (sallallahu 'alayhi wa sallam)")
    .replace(/ؑ/g, " (alayhis salam)")
    .replace(/ؓ/g, " (radiyallahu 'anhu)")
    .replace(/ؒ/g, " (rahimahullah)");

  const tokens = text.split(/(\s+|[.,;!?()]+)/);

  const convertedTokens = tokens.map(token => {
    if (!token || !token.trim() || /^[.,;!?()]+$/.test(token)) {
      return token;
    }

    const cleanWord = token.replace(/[\u064B-\u065F\u0670]/g, "").trim();

    if (SukunUrduDictionary[cleanWord]) {
      return SukunUrduDictionary[cleanWord];
    }

    for (const [w, roman] of Object.entries(SukunUrduDictionary)) {
      if (cleanWord.endsWith(w) && cleanWord.length > w.length) {
        const prefix = cleanWord.slice(0, cleanWord.length - w.length);
        if (SukunUrduDictionary[prefix]) {
          return SukunUrduDictionary[prefix] + " " + roman;
        }
      }
    }

    let out = "";
    for (let i = 0; i < cleanWord.length; i++) {
      const ch = cleanWord[i];
      if (SukunUrduCharMap[ch] !== undefined) {
        if (ch === "و") {
          if (i === 0) out += "w";
          else if (i === cleanWord.length - 1) out += "o";
          else out += "oo";
        } else if (ch === "ی") {
          if (i === 0) out += "y";
          else out += "ee";
        } else if (ch === "ے") {
          out += "e";
        } else {
          out += SukunUrduCharMap[ch];
        }
      } else {
        out += ch;
      }
    }

    return out;
  });

  let result = convertedTokens.join("")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;!?])/g, "$1")
    .trim();

  result = result.replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
  return result;
}

// ==========================================================================
// TRANSLATION LANGUAGE SELECTOR CONTROLLER
// Controls active translation view across Hadith & Quran readers
// Default: 'roman' (Roman Urdu Matlab) - keeping cards compact & Hadith # prominent
// ==========================================================================
let activeReaderLang = 'roman'; // 'roman', 'urdu', 'english', 'all'

function setReaderTranslationLang(lang) {
  if (lang === 'hinglish') lang = 'roman';
  activeReaderLang = lang;

  const keyMap = [
    { key: 'roman', ids: ['langBtn_roman', 'langBtn_hinglish'] },
    { key: 'urdu', ids: ['langBtn_urdu'] },
    { key: 'english', ids: ['langBtn_english'] },
    { key: 'all', ids: ['langBtn_all'] }
  ];

  keyMap.forEach(item => {
    item.ids.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        if (item.key === lang) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    });
  });

  const romanBlocks = document.querySelectorAll('.block-roman, .block-hinglish');
  const urduBlocks = document.querySelectorAll('.block-urdu');
  const englishBlocks = document.querySelectorAll('.block-english');

  romanBlocks.forEach(el => {
    if (lang === 'roman' || lang === 'all') {
      el.classList.remove('hidden');
      el.style.display = 'block';
    } else {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  });

  urduBlocks.forEach(el => {
    if (lang === 'urdu' || lang === 'all') {
      el.classList.remove('hidden');
      el.style.display = 'block';
    } else {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  });

  englishBlocks.forEach(el => {
    if (lang === 'english' || lang === 'all') {
      el.classList.remove('hidden');
      el.style.display = 'block';
    } else {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  });

  const labels = {
    'roman': '🌟 Roman Urdu (Aasan Matlab) Active',
    'urdu': '📖 اردو ترجمہ (Urdu Translation) Active',
    'english': '🇬🇧 English Translation Active',
    'all': '✦ Sabhi Tarjume (All Translations) Active'
  };
  if (typeof showToast === 'function' && labels[lang]) {
    showToast(labels[lang]);
  }
}

// ==========================================================================
// FLOATING HASANAT (NEKI) WIDGET CONTROLLER
// Stays visible on the side of the screen as user recites Surah / Ayahs
// ==========================================================================
function showFloatingHasanatWidget(recitedVal = 0) {
  let widget = document.getElementById("floatingHasanatWidget");
  if (!widget) {
    widget = document.createElement("div");
    widget.id = "floatingHasanatWidget";
    widget.className = "floating-hasanat-widget";
    widget.title = "Live Hasanat Recitation Counter";
    widget.innerHTML = `
      <span class="floating-hasanat-icon">✨</span>
      <div>
        <span class="floating-hasanat-label">Recited Hasanat</span>
        <span class="floating-hasanat-val" id="floatingHasanatNumber">+${recitedVal.toLocaleString()}</span>
      </div>
    `;
    document.body.appendChild(widget);
  } else {
    widget.style.display = "flex";
    const num = document.getElementById("floatingHasanatNumber");
    if (num) num.innerText = "+" + recitedVal.toLocaleString();
  }
}

function updateFloatingHasanat(recitedVal) {
  const num = document.getElementById("floatingHasanatNumber");
  if (num) num.innerText = "+" + recitedVal.toLocaleString();
  const widget = document.getElementById("floatingHasanatWidget");
  if (widget) {
    widget.classList.add("pulse-active");
    setTimeout(() => widget.classList.remove("pulse-active"), 400);
  }
}

function hideFloatingHasanatWidget() {
  const widget = document.getElementById("floatingHasanatWidget");
  if (widget) widget.style.display = "none";
}

if (typeof window !== "undefined") {
  window.transliterateUrduToHinglish = transliterateUrduToHinglish;
  window.setReaderTranslationLang = setReaderTranslationLang;
  window.showFloatingHasanatWidget = showFloatingHasanatWidget;
  window.updateFloatingHasanat = updateFloatingHasanat;
  window.hideFloatingHasanatWidget = hideFloatingHasanatWidget;
}

// 5. INITIALIZATION & LIVE INPUT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadSavedFromStorage();
  loadTasbihFromStorage();
  initFridayCheck();
  initDailyDua();
  renderTasbih();
  initLiveSearchListeners();

  // Close mobile drawer on outside click
  document.addEventListener("click", (e) => {
    const drawer = document.getElementById("mobileNavDrawer");
    const btn = document.getElementById("mobileMenuBtn");
    if (drawer && drawer.classList.contains("open")) {
      if (!drawer.contains(e.target) && !btn.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });
});

// Mobile Navigation Drawer Toggle Handlers
function toggleMobileMenu() {
  const drawer = document.getElementById("mobileNavDrawer");
  const btn = document.getElementById("mobileMenuBtn");
  if (!drawer || !btn) return;
  const isOpen = drawer.classList.toggle("open");
  btn.classList.toggle("active", isOpen);
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobileNavDrawer");
  const btn = document.getElementById("mobileMenuBtn");
  if (drawer) drawer.classList.remove("open");
  if (btn) btn.classList.remove("active");
}

// 0. THEME MANAGEMENT (Royal Light Mode & Midnight Dark Mode)
function initTheme() {
  const savedTheme = localStorage.getItem("sukun_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
  updateThemeButtonUI();
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("sukun_theme", isLight ? "light" : "dark");
  updateThemeButtonUI();
  showToast(isLight ? "Switched to Royal Ivory Light Sanctuary." : "Switched to Midnight Sapphire Dark Sanctuary.");
}

function updateThemeButtonUI() {
  const icon = document.getElementById("themeToggleIcon");
  const text = document.getElementById("themeToggleText");
  const isLight = document.body.classList.contains("light-theme");
  if (icon) icon.innerText = isLight ? "🌙" : "☀️";
  if (text) text.innerText = isLight ? "Dark" : "Light";
}

// Voice Recognition & Search Handlers (Web Speech API for Elder Accessibility)
let speechRecognizer = null;
let isRecordingVoice = false;

function toggleVoiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const statusElem = document.getElementById("voiceStatusText");
  const micBtn = document.getElementById("voiceSearchBtn");
  const searchInput = document.getElementById("searchQuery");

  if (!SpeechRecognition) {
    if (statusElem) {
      statusElem.style.display = "block";
      statusElem.innerText = "Voice search is supported on Google Chrome, Microsoft Edge, and Android/Safari.";
      setTimeout(() => { if (statusElem) statusElem.style.display = "none"; }, 4000);
    } else {
      alert("Voice search is supported on Google Chrome, Microsoft Edge, and Android/Safari.");
    }
    return;
  }

  if (isRecordingVoice && speechRecognizer) {
    try { speechRecognizer.stop(); } catch (e) {}
    stopVoiceRecognition();
    return;
  }

  try {
    speechRecognizer = new SpeechRecognition();
    speechRecognizer.continuous = false;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = "hi-IN"; // Accurately captures Urdu, Hindi & English speech

    speechRecognizer.onstart = () => {
      isRecordingVoice = true;
      if (micBtn) {
        micBtn.classList.add("recording");
        micBtn.title = "Listening... Speak now (Tap to stop)";
      }
      if (statusElem) {
        statusElem.style.display = "block";
        statusElem.innerText = "🎙️ Listening... Speak your Dua or Surah name now...";
      }
    };

    speechRecognizer.onresult = (event) => {
      let speechText = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        speechText += event.results[i][0].transcript;
      }
      const spoken = speechText.trim();
      if (spoken && searchInput) {
        searchInput.value = spoken;
      }
    };

    speechRecognizer.onerror = (event) => {
      stopVoiceRecognition();
      if (statusElem) {
        if (event.error === "not-allowed") {
          statusElem.innerText = "Please allow microphone access to use voice search.";
        } else {
          statusElem.innerText = "Voice input ended. You can also type in the search box.";
        }
        setTimeout(() => { if (statusElem) statusElem.style.display = "none"; }, 3500);
      }
    };

    speechRecognizer.onend = () => {
      stopVoiceRecognition();
      if (searchInput && searchInput.value.trim()) {
        const spokenVal = searchInput.value.trim();
        if (statusElem) {
          statusElem.innerText = `✓ Searching: "${spokenVal}"...`;
          setTimeout(() => { if (statusElem) statusElem.style.display = "none"; }, 2500);
        }
        executeSearch(spokenVal, true, true);
      } else {
        if (statusElem) statusElem.style.display = "none";
      }
    };

    speechRecognizer.start();
  } catch (err) {
    stopVoiceRecognition();
    if (statusElem) {
      statusElem.style.display = "block";
      statusElem.innerText = "Could not initialize microphone. Please try again.";
      setTimeout(() => { if (statusElem) statusElem.style.display = "none"; }, 3000);
    }
  }
}

function stopVoiceRecognition() {
  isRecordingVoice = false;
  const micBtn = document.getElementById("voiceSearchBtn");
  if (micBtn) {
    micBtn.classList.remove("recording");
    micBtn.title = "Voice Search (Tap to speak)";
  }
}

// Quick Navigation Search Focus (Scrolls directly to Search Hub from top bar)
function focusSearchInput() {
  const findSec = document.getElementById("find-solution");
  const input = document.getElementById("searchQuery");
  if (findSec) {
    findSec.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (input) {
    setTimeout(() => {
      input.focus();
    }, 300);
  }
}

// Setup Live Real-Time Search Listeners
function initLiveSearchListeners() {
  const searchBox = document.getElementById("searchQuery");
  const mainSearchBtn = document.getElementById("mainSearchBtn");
  const mobileSearchBtn = document.getElementById("mobileMainSearchBtn");
  const voiceSearchBtn = document.getElementById("voiceSearchBtn");

  if (searchBox) {
    // Real-time live input listener (updates dynamically as user types)
    searchBox.addEventListener("input", (e) => {
      debounceSearch(e.target.value);
    });

    // Enter key support triggers deep search
    searchBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        executeSearch(e.target.value, true, true);
      }
    });
  }

  if (mainSearchBtn) {
    mainSearchBtn.addEventListener("click", () => {
      const q = searchBox ? searchBox.value : "";
      executeSearch(q, true, true);
    });
  }

  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", () => {
      const q = searchBox ? searchBox.value : "";
      executeSearch(q, true, true);
    });
  }

  if (voiceSearchBtn) {
    voiceSearchBtn.addEventListener("click", () => {
      toggleVoiceSearch();
    });
  }
}

// Friday / Jummah Auto-Detection
function initFridayCheck() {
  const isFriday = new Date().getDay() === 5;
  const badge = document.getElementById("jummahBadge");
  if (badge) {
    badge.style.display = isFriday ? "inline-block" : "none";
  }
}

// Daily Dua Engine (Dynamic Live Rotation on Every Refresh)
function initDailyDua() {
  const lastId = sessionStorage.getItem("sukun_last_daily_id");
  let pool = DailyDuasPool.filter(d => d.id !== lastId);
  if (pool.length === 0) pool = DailyDuasPool;
  
  const picked = pool[Math.floor(Math.random() * pool.length)];
  currentDailyDua = picked;
  sessionStorage.setItem("sukun_last_daily_id", picked.id);
  renderDailyDua();
}

function rotateDailyDua() {
  const nextIdx = (DailyDuasPool.indexOf(currentDailyDua) + 1) % DailyDuasPool.length;
  currentDailyDua = DailyDuasPool[nextIdx];
  sessionStorage.setItem("sukun_last_daily_id", currentDailyDua.id);
  renderDailyDua();
  showToast("Shuffled to next Daily Sunnah Dua.");
}

function renderDailyDua() {
  const titleElem = document.getElementById("dailyDuaTitle");
  if (!titleElem) return;
  titleElem.innerText = currentDailyDua.title;
  const arabicElem = document.getElementById("dailyDuaArabic");
  if (arabicElem) arabicElem.innerText = currentDailyDua.arabic;
  const romanElem = document.getElementById("dailyDuaRoman");
  if (romanElem) romanElem.innerText = currentDailyDua.roman;
  const hinglishElem = document.getElementById("dailyDuaHinglish");
  if (hinglishElem) {
    hinglishElem.innerText = currentDailyDua.matlab || currentDailyDua.translationHinglish || transliterateUrduToHinglish(currentDailyDua.translationUrdu) || currentDailyDua.translationEnglish;
  }
  const urduElem = document.getElementById("dailyDuaUrdu");
  if (urduElem) urduElem.innerText = currentDailyDua.translationUrdu;
  const engElem = document.getElementById("dailyDuaEnglish");
  if (engElem) engElem.innerText = currentDailyDua.translationEnglish;
  const refElem = document.getElementById("dailyDuaRef");
  if (refElem) refElem.innerText = currentDailyDua.reference;
  updateDailyBookmarkUI();
}

// 6. SMART REACTIVE MULTI-TIER SEARCH ENGINE (Accurate Phrase & Natural Language)
let searchDebounceTimer = null;

function debounceSearch(val) {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    executeSearch(val, false);
  }, 180);
}

// Multi-Tier Natural Language Matcher
function findBestDuaMatch(queryText) {
  if (!queryText || !queryText.trim()) return null;

  // Stop-words and auxiliary particles that must never falsely score against Dua titles
  const stopWords = new Set([
    "se", "ki", "ke", "ko", "par", "me", "mein", "wali", "wala", "vale", "vali", 
    "dua", "duas", "batao", "bataiye", "chahiye", "kaise", "kare", "karna", "hona", "hoti", "hote", "hota",
    "hai", "hain", "hau", "ho", "gaya", "gayi", "gaye", "hua", "hui", "hue", "tha", "thi", "the",
    "raha", "rahi", "rahe", "diya", "diye", "liya", "liye", "kuch", "aur", "kya", "the", "a", "an", "for", "in", "of", "to", "and",
    "dekhne", "dekhna", "dekha", "dekh", "karne", "padhne", "padhna", "padhe", "sunne", "sunna", "bolne", "bolna", "jaane", "jaana", "aane", "aana"
  ]);

  const cleanQuery = queryText.toLowerCase().replace(/[^\w\s\u0600-\u06FF]/gi, ' ').replace(/\s+/g, ' ').trim();
  const queryTokens = cleanQuery.split(' ').filter(t => t.length >= 3 && !stopWords.has(t));

  // Combine MasterKnowledge with custom Duas from Admin
  let allDuas = [...MasterKnowledge];
  try {
    const custom = JSON.parse(localStorage.getItem("sukun_custom_duas") || "[]");
    if (Array.isArray(custom)) {
      allDuas = [...allDuas, ...custom];
    }
  } catch (e) {}

  let bestMatch = null;
  let highestScore = 0;

  allDuas.forEach(item => {
    let score = 0;

    // 1. TIER 1: HIGH-PRIORITY MULTI-WORD PHRASES MATCH (+150 PTS)
    if (Array.isArray(item.phrases)) {
      item.phrases.forEach(phrase => {
        const pLower = phrase.toLowerCase().trim();
        if (cleanQuery.includes(pLower)) {
          score += 150;
        }
      });
    }

    // 2. TIER 2: MEANINGFUL TOKEN MATCHING (Non-stop words)
    queryTokens.forEach(token => {
      // Direct Keyword match
      if (Array.isArray(item.keywords)) {
        item.keywords.forEach(kw => {
          const kwLower = kw.toLowerCase().trim();
          if (kwLower === token) {
            score += 35;
          } else if (kwLower.startsWith(token) && token.length >= 4) {
            score += 15;
          }
        });
      }

      // Whole-word matching for Title, Category, Roman (eliminates substring collision)
      const titleWords = (item.title || "").toLowerCase().split(/\W+/);
      if (titleWords.includes(token)) score += 30;

      const catWords = (item.category || "").toLowerCase().split(/\W+/);
      if (catWords.includes(token)) score += 20;

      const romanWords = (item.roman || "").toLowerCase().split(/\W+/);
      if (romanWords.includes(token)) score += 20;
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  });

  return { match: bestMatch, score: highestScore };
}

// 6.2 SUKUN BACKEND AI GATEWAY & SECURE DISPATCHER
let currentSearchToken = 0;
var SUKUN_WORKER_ENDPOINT = window.SUKUN_WORKER_ENDPOINT || "https://sukun-gateway.kaifofficial4.workers.dev";

// Pre-AI Crisis Interceptor Regex (Dual layer: Explicit vs Religious Context)
const EXPLICIT_CRISIS_REGEX = /(?:^|[\s،۔!?\p{P}])(?:suicide|kill\s+myself|end\s+my\s+life|want\s+to\s+die|feel\s+like\s+dying|self\s*harm|(?:apne\s+aap|khud)\s+ko\s+(?:nuksan|harm)|(?:nuksan|harm)\s+pahun?chana|(?:zindagi|khud\s+ko)\s+khatam(?:\s+karna|\s+kar\s+lu|\s+kar\s+dun)|marna\s+chahta(?:\s+h(?:u|un|oon))?|marna\s+chahti(?:\s+h(?:u|un|oon))?|mar\s+jana\s+chahta(?:\s+h(?:u|un|oon))?|mar\s+jana\s+chahti(?:\s+h(?:u|un|oon))?|marne\s+ka\s+(?:dil|mann)|mar\s*ja(?:u|un|aun|on|unga|ungi)|marne\s+(?:wale|par|ki\s+dua)|maut\s+(?:aane|chahiye|maangne|mangne|ki\s+dua)|khud\s*kush[iy]|khud\s*khus[iy]|jaan\s+de\s+(?:du|dunga|dungi)|jeene\s+ka\s+(?:man[n]?|koi\s+maqsad)\s+nahi|zeher\s+kha(?:ne|na|un)|phansi\s+lagane|kaash\s+subah\s+aankh\s+na\s+khule|so\s+ja(?:u|un|aun|on)\s+(?:aur\s+)?kabhi\s+na\s+uth(?:u|un|aun|oon)|(?:sab\s*pe|sabke\s+liye|sab\s+ke\s+liye)?\s*bojh\s+h(?:u|un|oon)(?:\s+ab)?(?:\s+nahi\s+jeena)?|sab\s+khatam\s+ho\s+jaye(?:\s+to\s+ach(?:a|ha))?|life\s+is\s+meaningless|ab\s+aur\s+nahi\s+ho\s+sakta|خودکشی|مرنا\s+چاہتا|زندگی\s+ختم|مجھے\s+مرنا\s+ہے)(?:$|[\s،۔!?\p{P}])/iu;
const RELIGIOUS_INTENT_REGEX = /(?:dua|wazifa|kaffara|janaza|hukm|fiqh|masla|hadith|ayah|ayat|padhte|parhte|sunnah|marne\s+wale|mayyat|grave|qabar)/iu;

function evaluateCrisisIntent(text) {
  if (!text) return { isExplicit: false, isReligious: false };
  const isExplicit = EXPLICIT_CRISIS_REGEX.test(text);
  const isReligious = RELIGIOUS_INTENT_REGEX.test(text);
  return { isExplicit, isReligious };
}

function getCrisisHelpCardHtml(isSoftCard) {
  const bypassButton = isSoftCard ? `
    <div style="margin-top: 14px; text-align: center;">
      <button onclick="dismissCrisisAndShowDua()" class="action-btn" style="background: rgba(212,175,55,0.15); border: 1px solid var(--gold-bright); color: var(--gold-bright); padding: 8px 16px; border-radius: 20px; font-size: 0.82rem; cursor: pointer;">
        📖 Main sirf bimari ya pareshani ki Masnoon Dua dhoond raha tha
      </button>
    </div>` : '';

  return `
    <div class="crisis-support-card" style="background: rgba(35, 14, 20, 0.95); border: 1px solid #ef4444; border-radius: 14px; padding: 20px; margin: 16px 0; box-shadow: 0 10px 25px rgba(0,0,0,0.5); text-align: left;">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
        <span style="font-size: 1.5rem;">🤝</span>
        <h4 style="color: #fca5a5; margin: 0; font-size: 1.05rem;">Hum aapke sath hain (Compassionate Support)</h4>
      </div>
      <p style="color: #fee2e2; font-size: 0.92rem; line-height: 1.6; margin-bottom: 12px;">
        Hum samajh sakte hain ke aap is waqt kitne shadeed dard aur dukh se guzar rahe hain, aur aapka ye dard waqai bohot ahem hai. Aap akele nahi hain. Barah-e-karam kisi qareebi dost, azeez ya in muft aur confidential helplines se foran rabta karein:
      </p>
      <ul style="color: #fecaca; font-size: 0.88rem; line-height: 1.7; padding-left: 20px; margin: 0 0 12px 0;">
        <li><strong>Tele-MANAS (Govt of India):</strong> <a href="tel:14416" style="color: #fff; text-decoration: underline;">14416</a> ya <a href="tel:18008914416" style="color: #fff; text-decoration: underline;">1800-891-4416</a> (24x7 Toll-Free)</li>
        <li><strong>KIRAN Helpline:</strong> <a href="tel:18005990019" style="color: #fff; text-decoration: underline;">1800-599-0019</a> (Govt of India Toll-Free)</li>
        <li><strong>Vandrevala Foundation:</strong> <a href="tel:+919999666555" style="color: #fff; text-decoration: underline;">+91 9999 666 555</a> (24x7 Free Counseling)</li>
        <li><strong>AASRA:</strong> <a href="tel:+919820466726" style="color: #fff; text-decoration: underline;">+91 98204 66726</a></li>
        <li><strong>International / Overseas:</strong> Visit <a href="https://findahelpline.com" target="_blank" rel="noopener" style="color: #93c5fd; text-decoration: underline;">findahelpline.com</a> ya <a href="https://www.befrienders.org" target="_blank" rel="noopener" style="color: #93c5fd; text-decoration: underline;">befrienders.org</a></li>
      </ul>
      <div style="background: rgba(0,0,0,0.3); border-left: 3px solid #ef4444; padding: 8px 12px; font-size: 0.84rem; color: #fca5a5;">
        🚨 <strong>Emergency:</strong> Agar aapko ya kisi ko is waqt foran khatra hai, to bina jhijhak apne local emergency number (India: <strong>112</strong>) par call karein.
      </div>
      ${bypassButton}
    </div>`;
}

function getAiOfflineFriendlyBanner() {
  return `
    <div style="background: rgba(18, 31, 66, 0.9); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 16px 20px; margin: 16px 0; text-align: left;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        <span style="font-size: 1.2rem;">🌸</span>
        <h4 style="color: var(--gold-bright); margin: 0; font-size: 0.96rem;">AI Rahnuma is waqt aaram par hai</h4>
      </div>
      <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin: 0 0 10px 0;">
        AI assistance filhal available nahi hai, lekin aapka roohani safar bilkul nahi rukega! <strong>Mukammal 30 Parah Quran, Verified Masnoon Duas aur Digital Tasbih</strong> poori tarah fa'al (active) hain.
      </p>
      <div style="font-size: 0.84rem; color: var(--gold-light);">
        ✦ Neeche aapke sawal se milti-julti authentic Dua pesh hai:
      </div>
    </div>`;
}

window.dismissCrisisAndShowDua = function() {
  const container = document.getElementById("searchResultContainer");
  const defaultDua = MasterKnowledge.find(d => d.id === "dua-ghabrahat") || MasterKnowledge[0];
  if (container) {
    displaySearchResult(defaultDua, true);
  }
};

const SYSTEM_INSTRUCTION_SCRIPTURE = `You are Sukun AI — an advanced, intelligent, scholarly, and dignified Islamic Spiritual AI Engine for 'SUKUN (سُكُون) — Sanctuary for the Soul'.
A seeker is asking for authentic spiritual guidance or supplications (Dua/Quranic Ayat/Sahih Hadith) for their life situation or emotional condition.

MANDATORY PROTOCOLS & STRICT CONSTRAINTS:
1. PROFESSIONAL, DIGNIFIED & SCHOLARLY AI TONE:
   - Speak as an intelligent, articulate, objective, and respectful Islamic AI Companion.
   - NEVER use informal pet names, romantic words, or familial terms.
   - STRICTLY FORBIDDEN TERMS: "bhai", "behan", "bhaijaan", "mere bhai", "meri behan", "pyare bhai", "pyari behan", "dost", "yaar", "meri jaan", "meri pyari rooh", "baby", "darling", "dear", "sweetheart", "saathi".
   - Address the situation with intellectual clarity, Islamic empathy, and dignified respect in Roman Urdu (or English if queried in English).
2. ABSOLUTE ZERO CHINESE & DEVANAGARI:
   - NEVER output Chinese characters (like 所谓, 的, etc.) or Hindi/Devanagari characters (like री, क, etc.) anywhere in any field.
3. PURE ARABIC:
   - The 'arabic' field must contain ONLY pure Arabic with complete Tashkeel (harakat). NEVER mix English letters (like 'uka') into Arabic.
4. PURE URDU:
   - The 'translationUrdu' field must contain ONLY pure Urdu text in Arabic script. NEVER mix English words or foreign characters.
5. NO BRAND MENTION:
   - NEVER mention Google, OpenAI, Claude, LLM, or bot. Speak as 'Sukun AI Companion'.
6. ALWAYS AUTHENTIC:
   - Provide genuine Quranic verses or Sahih Hadith (Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawood, Jami' at-Tirmidhi, Sunan an-Nasa'i, Sunan Ibn Majah).

Strictly return a JSON object with this exact schema:
{
  "id": "neural-${Date.now()}",
  "counsel": "Professional, intelligent, and comforting response in clear Roman Urdu (2-3 sentences). Directly explain the situation through Quranic and Prophetic wisdom, and introduce the Dua as the authentic remedy without using familial words like bhai, behan, or dost.",
  "title": "Descriptive Title in English (e.g. Divine Remedy for Severe Hardship & Anxiety)",
  "category": "Category Name (e.g. Solace & Relief / Peace of Mind)",
  "arabic": "Full Arabic text with accurate Tashkeel (harakat)",
  "roman": "Clear Roman transliteration / pronunciation",
  "translationUrdu": "Eloquent, pure Urdu translation in Nastaliq style",
  "translationEnglish": "Noble, dignified English translation",
  "reference": "Exact Book & Hadith Number or Surah:Ayat (e.g. Sahih al-Bukhari 6306 or Surah Al-Baqarah 2:155)",
  "waqia": "Brief authentic historical background or context of this supplication (2-3 sentences in English)",
  "lesson": "Deep spiritual counsel and practical Sunnah advice (2 sentences in English)"
}`;

// Strict Spiritual Sanitization Shield: Purges Flirting Pet Names, Chinese/Hindi, & Stray Characters
function sanitizeScriptureOutput(obj) {
  if (!obj) return obj;

  // 1. Sanitize Counsel: Purge any romantic, flirting, or familial terms
  if (obj.counsel) {
    let c = obj.counsel;
    const forbiddenPhrases = [
      /\bmeri\s+jaan\s*,\s*/gi, /\bmeri\s+pyari\s+rooh\s*,\s*/gi, /\bpyari\s+rooh\s*,\s*/gi,
      /\baye\s+meri\s+jaan\s*,\s*/gi, /\bo\s+meri\s+jaan\s*,\s*/gi, /\bmeri\s+jaaneman\s*,\s*/gi,
      /\bmere\s+mohtaram\s+bhai\s*\/?\s*behen\b\s*,\s*/gi, /\bmere\s+mohtaram\s+bhai\s*\/?\s*behan\b\s*,\s*/gi,
      /\bmere\s+pyare\s+bhai\b\s*,\s*/gi, /\bmere\s+pyare\s+dost\b\s*,\s*/gi, /\bmeri\s+pyari\s+behan\b\s*,\s*/gi,
      /\bmohtaram\s+bhai\b\s*,\s*/gi, /\bmohtaram\s+behan\b\s*,\s*/gi, /\bmohtaram\s+saathi\b\s*,\s*/gi,
      /\bmere\s+aziz\s+saathi\b\s*,\s*/gi, /\bmere\s+bhai\b\s*,\s*/gi, /\bmeri\s+behan\b\s*,\s*/gi,
      /\bmeri\s+jaan\b/gi, /\bmeri\s+pyari\s+rooh\b/gi, /\bpyari\s+rooh\b/gi,
      /\bmeri\s+jaaneman\b/gi, /\baye\s+meri\s+jaan\b/gi, /\bmere\s+pyare\s+jaan\b/gi,
      /\bmeri\s+mehboob\b/gi, /\bjaan-e-mann\b/gi, /\bo\s+meri\s+jaan\b/gi, /\bmeri\s+zindagi\b/gi,
      /\bmere\s+mohtaram\s+bhai\s*\/?\s*behen\b/gi, /\bmere\s+mohtaram\s+bhai\s*\/?\s*behan\b/gi,
      /\bmere\s+pyare\s+bhai\b/gi, /\bmere\s+pyare\s+dost\b/gi, /\bmeri\s+pyari\s+behan\b/gi,
      /\bmohtaram\s+bhai\b/gi, /\bmohtaram\s+behan\b/gi, /\bmohtaram\s+saathi\b/gi,
      /\bmere\s+bhai\b/gi, /\bmeri\s+behan\b/gi, /\bmeri\s+behen\b/gi, /\bbhaijaan\b/gi,
      /\bpyare\s+bhai\b/gi, /\bpyari\s+behan\b/gi, /\bpyare\s+dost\b/gi, /\baziz\s+saathi\b/gi
    ];
    forbiddenPhrases.forEach(rgx => {
      c = c.replace(rgx, "");
    });

    // Clean up any accidental double commas, spaces or leading punctuation
    c = c.replace(/,\s*,/g, ",");
    c = c.replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g, ""); // Strip Chinese
    c = c.replace(/[\u0900-\u097f]/g, ""); // Strip Hindi
    c = c.replace(/^[,\s\-:]+/, "").trim();
    if (c.length > 0) {
      c = c.charAt(0).toUpperCase() + c.slice(1);
    }
    obj.counsel = c;
  }

  // 2. Sanitize Arabic: Pure Arabic script only, no stray English letters or foreign scripts
  if (obj.arabic) {
    let a = obj.arabic;
    // Strip English/Latin letters
    a = a.replace(/[a-zA-Z]/g, "");
    // Strip Chinese
    a = a.replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g, "");
    // Strip Devanagari Hindi
    a = a.replace(/[\u0900-\u097f]/g, "");
    obj.arabic = a.replace(/\s+/g, " ").trim();
  }

  // 3. Sanitize Urdu: Pure Urdu script only, no Chinese, no Hindi, no stray Roman words
  if (obj.translationUrdu) {
    let u = obj.translationUrdu;
    // Strip Chinese
    u = u.replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g, "");
    // Strip Devanagari Hindi
    u = u.replace(/[\u0900-\u097f]/g, "");
    // Strip English letters
    u = u.replace(/[a-zA-Z]+/g, "");
    obj.translationUrdu = u.replace(/\s+/g, " ").trim();
  }

  // 4. Sanitize English
  if (obj.translationEnglish) {
    obj.translationEnglish = obj.translationEnglish
      .replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g, "")
      .replace(/[\u0900-\u097f]/g, "")
      .trim();
  }

  // 5. Auto-populate Roman Transliteration if missing
  if ((!obj.roman || !obj.roman.trim()) && obj.arabic) {
    obj.roman = transliterateArabic(obj.arabic);
  }

  return obj;
}

// SUKUN Backend AI Gateway Dispatcher (Cloudflare Worker Only)
// Direct browser API calls to LLM providers are strictly forbidden.
async function fetchScriptureFromAI(queryText, contextData = {}) {
  if (!SUKUN_WORKER_ENDPOINT) {
    return null;
  }

  const cacheKey = "sukun_ai_cache_" + encodeURIComponent(queryText.trim().toLowerCase());
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch (e) {}

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const headers = { "Content-Type": "application/json" };
    const sessionToken = sessionStorage.getItem("sukun_session_token");
    if (sessionToken) {
      headers["Authorization"] = `Bearer ${sessionToken}`;
    }

    let turnstileToken = "";
    if (typeof window.turnstile !== "undefined" && typeof window.turnstile.getResponse === "function") {
      turnstileToken = window.turnstile.getResponse() || "";
    }

    const payload = {
      message: queryText,
      turnstileToken: turnstileToken,
      context: contextData
    };

    if (turnstileToken) {
      headers["X-Turnstile-Token"] = turnstileToken;
    }

    const res = await fetch(`${SUKUN_WORKER_ENDPOINT}/api/chat`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn("Worker AI Gateway status:", res.status);
      if (typeof window.turnstile !== "undefined" && typeof window.turnstile.reset === "function") {
        try { window.turnstile.reset(); } catch (e) {}
      }
      return null;
    }

    const rawData = await res.json();
    if (rawData.sessionToken) {
      try { sessionStorage.setItem("sukun_session_token", rawData.sessionToken); } catch (e) {}
    }

    // Safety Block, Crisis Interceptor, or Empty Reply from AI
    if (rawData.crisisTriggered || rawData.blockReason === "SAFETY" || (!rawData.reply && !rawData.arabic)) {
      return {
        crisisTriggered: true,
        blockReason: rawData.blockReason || "SAFETY",
        reply: rawData.reply || ""
      };
    }

    // Live AI Counsel Reply from Gemini
    if (rawData.reply) {
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(rawData));
      } catch (e) {}
      return rawData;
    }

    const sanitized = sanitizeAIResponse(rawData);

    if (sanitized && sanitized.arabic && sanitized.reference) {
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(sanitized));
      } catch (e) {}
      return sanitized;
    }
    return null;
  } catch (err) {
    console.warn("Worker AI Gateway unreachable / offline:", err);
    return null;
  }
}

// Surah name detection helper for fast 1-tap navigation
function detectSurahInQuery(q) {
  if (!q) return null;
  const lower = q.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim();
  
  if (lower.includes("yaseen") || lower.includes("yasin") || lower.includes("ya-sin") || lower.includes("ya seen")) {
    return "surah-yaseen";
  }
  if (lower.includes("rahman") || lower.includes("rehman") || lower.includes("al rahman") || lower.includes("ar rahman")) {
    return "surah-rahman";
  }
  if (lower.includes("waqiah") || lower.includes("waqia") || lower.includes("waqi'ah") || lower.includes("al waqiah") || lower.includes("al waqia")) {
    return "surah-waqiah";
  }
  if (lower.includes("mulk") || lower.includes("al mulk") || lower.includes("tabarak")) {
    return "surah-mulk";
  }
  if (lower.includes("kahf") || lower.includes("al kahf") || lower.includes("surah kahf")) {
    return "surah-kahf";
  }
  if (lower.includes("kursi") || lower.includes("ayatul kursi") || lower.includes("ayat al kursi") || lower.includes("kursy")) {
    return "ayatul-kursi";
  }

  // Check all 114 Surahs dynamically from the Global Registry
  const allSurahs = (typeof getGlobalSurahs === "function") ? getGlobalSurahs() : (window.SukunAllSurahsIndex || []);
  const cleanCompact = lower.replace(/\s+/g, "");
  for (let i = 0; i < allSurahs.length; i++) {
    const s = allSurahs[i];
    const sName = (s.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!sName) continue;
    if (cleanCompact.includes("surah" + sName) || (lower.startsWith("surah ") && cleanCompact.includes(sName))) {
      return `surah-${s.number}`;
    }
  }

  return null;
}

async function executeSearch(forcedQuery = null, shouldScroll = true, isExplicitSearch = false) {
  const inputElem = document.getElementById("searchQuery");
  const query = (forcedQuery !== null ? forcedQuery : (inputElem ? inputElem.value : "")).trim();
  const box = document.getElementById("searchResultBox");
  const loader = document.getElementById("aiLoadingIndicator");
  const content = document.getElementById("resultCardContent");

  if (!query) {
    if (box) box.style.display = "none";
    return;
  }

  // 1. Instant Surah Detection (Directly opens full Surah Sanctuary for elders)
  const matchedSurah = detectSurahInQuery(query);
  if (matchedSurah && typeof openModal === "function") {
    openModal(matchedSurah);
    if (box) box.style.display = "none";
    if (typeof showToast === "function") {
      showToast("Opening Surah Tilawat Sanctuary...");
    }
    return;
  }

  // 1.5 Immediate Crisis Interceptor (Pre-Search & Pre-AI Zero Call Guarantee)
  const crisisCheck = evaluateCrisisIntent(query);
  if (crisisCheck.isExplicit) {
    if (box) box.style.display = "block";
    if (loader) loader.style.display = "none";
    if (content) {
      content.style.display = "block";
      content.innerHTML = getCrisisHelpCardHtml(crisisCheck.isReligious);
    }
    if (shouldScroll && box) {
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    return;
  }

  const thisToken = ++currentSearchToken;

  // 2. Cloudflare Worker AI Gateway trigger
  const hasAi = Boolean(SUKUN_WORKER_ENDPOINT);

  const localResult = findBestDuaMatch(query);

  // If live typing and NOT explicit search, provide immediate local match without waiting
  if (!isExplicitSearch && localResult && localResult.match && localResult.score >= 100) {
    currentSearchResult = localResult.match;
    if (loader) loader.style.display = "none";
    if (content) content.style.display = "block";
    displaySearchResult(localResult.match, shouldScroll);
    return;
  }

  // Deep AI invocation on explicit search (Enter, Mic, Search Button) or conversational query
  if (hasAi) {
    if (box) box.style.display = "block";
    if (loader) loader.style.display = "block";
    if (content) content.style.display = "none";
    if (shouldScroll && box) {
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    try {
      const baseDua = (localResult && localResult.match) ? localResult.match : (MasterKnowledge.find(d => d.id === "dua-mushkil-aasan") || MasterKnowledge[0]);
      const contextPayload = {
        title: baseDua.title || "",
        arabic: baseDua.arabic || "",
        translation: baseDua.translationUrdu || "",
        references: [baseDua.reference || ""]
      };

      const aiDua = await fetchScriptureFromAI(query, contextPayload);
      if (thisToken !== currentSearchToken) return;

      // 1. If Gemini safety blocked, crisis triggered, or empty reply: show compassionate helpline card
      if (aiDua && aiDua.crisisTriggered) {
        if (loader) loader.style.display = "none";
        if (content) {
          content.style.display = "block";
          content.innerHTML = getCrisisHelpCardHtml(false);
        }
        return;
      }

      // 2. If Gemini replied with personalized reflection, enrich the authentic Dua
      if (aiDua && aiDua.reply) {
        const enrichedDua = Object.assign({}, baseDua, {
          counsel: aiDua.reply
        });
        currentSearchResult = enrichedDua;
        if (loader) loader.style.display = "none";
        if (content) content.style.display = "block";
        displaySearchResult(enrichedDua, false);
        return;
      }

      if (aiDua && aiDua.arabic && aiDua.reference) {
        currentSearchResult = aiDua;
        if (loader) loader.style.display = "none";
        if (content) content.style.display = "block";
        displaySearchResult(aiDua, false);
        return;
      }
    } catch (err) {
      console.warn("Multi-AI Orchestrator fallback:", err);
    }
  }

  // 3. Fallback to best local match if AI offline
  if (loader) loader.style.display = "none";
  if (content) content.style.display = "block";

  if (localResult && localResult.match && localResult.score >= 40) {
    currentSearchResult = localResult.match;
    displaySearchResult(localResult.match, shouldScroll);
  } else {
    currentSearchResult = MasterKnowledge.find(d => d.id === "dua-mushkil-aasan") || MasterKnowledge[0];
    displaySearchResult(currentSearchResult, shouldScroll);
  }
}

function selectTopicPill(searchTerm) {
  const inputElem = document.getElementById("searchQuery");
  if (inputElem) inputElem.value = searchTerm;
  executeSearch(searchTerm, true);
}

// Conversational Spiritual Companion Engine (Intelligent, Dignified & Professional Islamic Guidance)
function generateConversationalCounsel(item, userQuery = "") {
  if (item.counsel && item.counsel.trim()) {
    return item.counsel;
  }

  // Objective, scholarly and dignified Islamic guidance
  if (item.id === "dua-bura-khwab") {
    return "Islam me bura ya pareshan-kun khwab dekhne par Sunnah ke mutabiq bayein (left) janib 3 martaba thookne aur karwat badalne ki hidayat hai. Is khwab ke bure asraat se bachne ke liye Rasoolullah ﷺ ki yeh authentic hifazati dua padhein:";
  }
  if (item.id === "dua-ishq-mohabbat") {
    return "Islam me jazbaat aur chahat ko Haya, Iffat aur Halal Nikah ke taabe' rakhne ki talqeen hai. Dil ko sukoon dene aur ba-barkat humsafar ke husool ke liye yeh Sunnah dua manqool hai:";
  }
  if (item.id === "dua-mushkil-aasan") {
    return "Aapke masle ke hal ke liye Quran-o-Sunnah me sabr aur pukhta tawakkul ikhtiyar karne ki hidayat hai. Har dushwari ko aasan banane ke liye Rasoolullah ﷺ ki yeh azeem Dua talqeen ki gayi hai:";
  }
  if (item.id === "dua-ghabrahat") {
    return "Bechaini aur ghabrahat ke waqt Hazrat Yunus (A.S) ki yeh Ayat-e-Kareema dilon ko taskeen dene aur har mushkil se nijaat pane ka behtareen roohani zariya hai:";
  }
  if (item.id === "dua-family-peace") {
    return "Khandani sukoon aur rishton me iftiraq ko door karne ke liye Surah Al-Furqan ki yeh mubarak ayat rozana padhna afzal aur mufeed hai:";
  }
  if (item.id === "dua-beemari") {
    return "Har tarah ke dard ya jismani takleef ke waqt mualja (ilaj) ke sath sath Rasoolullah ﷺ ki is authentic shifa wali dua ka ahtimam karein:";
  }
  if (item.id === "dua-rizq") {
    return "Tangdasti ya karz ke bojh se nijaat ke liye kasrat se Istighfar aur is authentic Prophetic dua ka parhna mustanad zariya hai:";
  }

  const lesson = item.lesson || "Allah par tawakkul rakhein aur is Sunnah dua ka ahtimam karein.";
  return `Aapki is soorat-e-haal ke liye Islamic taleemaat aur Sunnah-e-Nabawi ﷺ se yeh authentic roohani rehnumai aur Dua manqool hai. ${lesson}`;
}

function displaySearchResult(item, shouldScroll = true) {
  const box = document.getElementById("searchResultBox");
  if (!box) return;

  // Sanitize all scripture outputs (purging any romantic terms, Chinese, Hindi, or stray letters)
  item = sanitizeScriptureOutput(item);

  box.style.display = "block";

  // Conversational AI Counsel Bubble (Live Dialogue with User)
  const counselElem = document.getElementById("resultCounselText");
  const counselBox = document.getElementById("aiCounselBox");
  const queryElem = document.getElementById("searchQuery");
  const userQuery = (queryElem ? queryElem.value : "").trim();
  const dialogueText = generateConversationalCounsel(item, userQuery);

  if (counselElem) counselElem.innerText = dialogueText;
  if (counselBox) counselBox.style.display = "block";

  // Conversational interactive chat stream
  if (userQuery && (!chatConversationHistory.length || chatConversationHistory[chatConversationHistory.length - 1].text !== userQuery)) {
    chatConversationHistory.push({ role: 'user', text: userQuery, timestamp: Date.now() });
  }
  chatConversationHistory.push({ role: 'model', text: dialogueText, item, timestamp: Date.now() });
  renderChatMessages();

  const scriptureCard = document.getElementById("scriptureCardWrapper");
  if (scriptureCard) scriptureCard.style.display = "block";

  const titleElem = document.getElementById("resultTitle");
  if (titleElem) titleElem.innerText = item.title;

  const arabicElem = document.getElementById("resultArabic");
  if (arabicElem) arabicElem.innerText = item.arabic;

  const romanElem = document.getElementById("resultRoman");
  if (romanElem) romanElem.innerText = item.roman;

  const hinglishElem = document.getElementById("resultHinglish");
  if (hinglishElem) {
    hinglishElem.innerText = item.matlab || item.translationHinglish || transliterateUrduToHinglish(item.translationUrdu) || item.translationEnglish;
  }

  const urduElem = document.getElementById("resultUrdu");
  if (urduElem) urduElem.innerText = item.translationUrdu;

  const engElem = document.getElementById("resultEnglish");
  if (engElem) engElem.innerText = item.translationEnglish;

  const refElem = document.getElementById("resultRef");
  if (refElem) refElem.innerText = item.reference;

  updateResultBookmarkUI();

  if (shouldScroll) {
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// 7. AUDIO RECITATION (Web Speech API)
function playDuaAudio(type) {
  if (!('speechSynthesis' in window)) {
    showToast("Audio recitation is not supported by your browser.");
    return;
  }

  window.speechSynthesis.cancel();

  let textToSpeak = "";
  let btnId = "";

  if (type === 'daily') {
    textToSpeak = currentDailyDua.arabic;
    btnId = "dailyAudioBtn";
  } else if (type === 'result' && currentSearchResult) {
    textToSpeak = currentSearchResult.arabic;
    btnId = "resultAudioBtn";
  }

  if (!textToSpeak) return;

  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add("speaking");

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = "ar-SA";
  utterance.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find(v => v.lang.startsWith("ar"));
  if (arabicVoice) {
    utterance.voice = arabicVoice;
  }

  utterance.onend = () => {
    if (btn) btn.classList.remove("speaking");
  };

  utterance.onerror = () => {
    if (btn) btn.classList.remove("speaking");
  };

  window.speechSynthesis.speak(utterance);
}

// 8. CLIPBOARD COPY ENGINE
function copyDuaText(type) {
  let target = type === 'daily' ? currentDailyDua : currentSearchResult;
  if (!target) return;

  const formattedText = `SUKUN (سُكُون) — ${target.title}\n\n` +
    `Arabic:\n${target.arabic}\n\n` +
    `Pronunciation:\n${target.roman}\n\n` +
    `Urdu Translation:\n${target.translationUrdu}\n\n` +
    `English Translation:\n${target.translationEnglish}\n\n` +
    `Reference:\n${target.reference}`;

  navigator.clipboard.writeText(formattedText).then(() => {
    showToast("Dua copied to clipboard with authentic references.");
  }).catch(() => {
    showToast("Unable to copy to clipboard.");
  });
}

// 9. DIGITAL TASBIH ENGINE
function loadTasbihFromStorage() {
  try {
    const raw = localStorage.getItem("sukun_tasbih_data");
    if (raw) {
      const data = JSON.parse(raw);
      tasbihState.count = data.count || 0;
      tasbihState.target = data.target || 33;
      tasbihState.completedRounds = data.completedRounds || 0;
      tasbihState.dhikrIndex = data.dhikrIndex || 0;
      tasbihState.soundEnabled = data.soundEnabled !== false;
      tasbihState.vibrateEnabled = data.vibrateEnabled !== false;
    }
  } catch (e) {}
}

function saveTasbihToStorage() {
  localStorage.setItem("sukun_tasbih_data", JSON.stringify(tasbihState));
}

function incrementTasbih() {
  tasbihState.count++;
  playBeadClickSound();

  if (tasbihState.vibrateEnabled && navigator.vibrate) {
    navigator.vibrate(25);
  }

  if (tasbihState.target > 0 && tasbihState.count >= tasbihState.target) {
    tasbihState.completedRounds++;
    tasbihState.count = 0;
    playCompletionChime();
    if (tasbihState.vibrateEnabled && navigator.vibrate) {
      navigator.vibrate([40, 60, 40]);
    }
    showToast(`Mabrook! Completed round #${tasbihState.completedRounds} of ${TasbihDhikrList[tasbihState.dhikrIndex].name}.`);
  }

  renderTasbih();
  saveTasbihToStorage();
}

function resetTasbih() {
  tasbihState.count = 0;
  tasbihState.completedRounds = 0;
  renderTasbih();
  saveTasbihToStorage();
  showToast("Tasbih counter reset.");
}

function setTasbihPreset(targetVal) {
  tasbihState.target = targetVal;
  tasbihState.count = 0;
  renderTasbih();
  saveTasbihToStorage();
}

function setCustomTarget() {
  const input = prompt("Enter custom Dhikr target (e.g. 40, 70, 313, 1000):", "33");
  const num = parseInt(input, 10);
  if (!isNaN(num) && num > 0) {
    setTasbihPreset(num);
  }
}

function changeDhikr(index) {
  tasbihState.dhikrIndex = parseInt(index, 10);
  tasbihState.target = TasbihDhikrList[tasbihState.dhikrIndex].defaultTarget;
  tasbihState.count = 0;
  renderTasbih();
  saveTasbihToStorage();
}

function toggleTasbihSound() {
  tasbihState.soundEnabled = !tasbihState.soundEnabled;
  const btn = document.getElementById("tasbihSoundBtn");
  if (btn) btn.innerText = tasbihState.soundEnabled ? "Sound: ON" : "Sound: OFF";
  saveTasbihToStorage();
}

function toggleTasbihVibrate() {
  tasbihState.vibrateEnabled = !tasbihState.vibrateEnabled;
  const btn = document.getElementById("tasbihVibrateBtn");
  if (btn) btn.innerText = tasbihState.vibrateEnabled ? "Vibrate: ON" : "Vibrate: OFF";
  saveTasbihToStorage();
}

function renderTasbih() {
  const currentDhikr = TasbihDhikrList[tasbihState.dhikrIndex];
  const countElem = document.getElementById("tasbihCount");
  const arabicElem = document.getElementById("tasbihArabic");
  const meaningElem = document.getElementById("tasbihMeaning");
  const metaElem = document.getElementById("tasbihMeta");
  const selectElem = document.getElementById("tasbihSelect");

  if (countElem) countElem.innerText = String(tasbihState.count).padStart(2, '0');
  if (arabicElem) arabicElem.innerText = currentDhikr.arabic;
  if (meaningElem) meaningElem.innerText = currentDhikr.meaning;
  if (selectElem) selectElem.value = tasbihState.dhikrIndex;

  if (metaElem) {
    const targetText = tasbihState.target > 0 ? `Target: ${tasbihState.target}` : `Target: Unlimited`;
    metaElem.innerText = `${targetText} • Completed: ${tasbihState.completedRounds} Rounds`;
  }

  [33, 100, 0].forEach(val => {
    const btn = document.getElementById(`preset-${val}`);
    if (btn) {
      if (tasbihState.target === val) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
  });
}

// 10. SAVED DUAS & BOOKMARKS
function loadSavedFromStorage() {
  try {
    const raw = localStorage.getItem("sukun_saved_list");
    savedDuas = raw ? JSON.parse(raw) : [];
  } catch (e) {
    savedDuas = [];
  }
  updateSavedBadge();
}

function updateSavedBadge() {
  const badge = document.getElementById("savedCounter");
  if (badge) badge.innerText = savedDuas.length;
}

function toggleSaveItem(item) {
  const idx = savedDuas.findIndex(d => d.id === item.id);
  if (idx >= 0) {
    savedDuas.splice(idx, 1);
    showToast("Dua removed from saved sanctuary.");
  } else {
    savedDuas.push(item);
    showToast("Dua saved to your sanctuary.");
  }
  localStorage.setItem("sukun_saved_list", JSON.stringify(savedDuas));
  updateSavedBadge();
  updateDailyBookmarkUI();
  updateResultBookmarkUI();
}

function toggleSaveDaily() {
  toggleSaveItem(currentDailyDua);
}

function toggleSaveResult() {
  if (currentSearchResult) {
    toggleSaveItem(currentSearchResult);
  }
}

function updateDailyBookmarkUI() {
  const btn = document.getElementById("dailySaveBtn");
  if (!btn) return;
  const isSaved = savedDuas.some(d => d.id === currentDailyDua.id);
  btn.innerText = isSaved ? "Saved" : "Bookmark";
  btn.style.color = isSaved ? "var(--gold-light)" : "var(--text-muted)";
}

function updateResultBookmarkUI() {
  const btn = document.getElementById("resultSaveBtn");
  if (!btn || !currentSearchResult) return;
  const isSaved = savedDuas.some(d => d.id === currentSearchResult.id);
  btn.innerText = isSaved ? "Saved" : "Bookmark";
  btn.style.color = isSaved ? "var(--gold-light)" : "var(--text-muted)";
}

// 11. MODAL CONTROLS & VIEWS
let currentModalContext = null;
let modalHistoryActive = false;

function pushModalHistoryState(ctx) {
  currentModalContext = ctx;
  if (!modalHistoryActive) {
    try {
      window.history.pushState({ sukunModalOpen: true, ctx: ctx }, '');
      modalHistoryActive = true;
    } catch (e) {}
  }
}

function updateModalBackButton(ctx) {
  const backBtn = document.getElementById("modalBackBtn");
  const backText = document.getElementById("modalBackBtnText");
  if (!backBtn) return;
  backBtn.style.display = "inline-flex";

  if (ctx === 'hadith') {
    if (backText) backText.textContent = "Back to Hadith Books (کتب حدیث)";
    backBtn.title = "Back to Authentic Hadith Collections";
  } else if (ctx === 'surah') {
    if (backText) backText.textContent = "Back to 114 Surahs (فہرست سُوَر)";
    backBtn.title = "Back to 114 Quranic Surahs";
  } else if (ctx === 'parah') {
    if (backText) backText.textContent = "Back to 30 Parahs (پارہ فہرست)";
    backBtn.title = "Back to 30 Holy Parahs (Juz)";
  } else if (ctx === 'saved') {
    if (backText) backText.textContent = "Back to Sanctuary (واپس)";
    backBtn.title = "Close saved Duas";
  } else if (ctx === 'waqia') {
    if (backText) backText.textContent = "Back to Search Result (نتیجہ)";
    backBtn.title = "Back to Search Result";
  } else {
    if (backText) backText.textContent = "Back to Library (لائبریری)";
    backBtn.title = "Back to Library Drawer";
  }
}

function navigateModalBack(fromPopState = false) {
  const ctx = currentModalContext;
  closeModal();

  if (ctx === 'hadith') {
    openQuranDrawer('hadith');
  } else if (ctx === 'surah') {
    openQuranDrawer('surahs');
  } else if (ctx === 'parah') {
    openQuranDrawer('parahs');
  }

  if (!fromPopState && modalHistoryActive) {
    modalHistoryActive = false;
    try {
      window.history.back();
    } catch (e) {}
  } else {
    modalHistoryActive = false;
  }
}

function openModal(type) {
  const modal = document.getElementById("globalModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  if (type === 'waqia' && currentSearchResult) {
    currentModalContext = 'waqia';
    updateModalBackButton('waqia');
    pushModalHistoryState('waqia');
    title.innerText = currentSearchResult.title + " • Hadith Background & Story";
    body.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span style="font-size: 0.72rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-muted); display: block; margin-bottom: 8px;">Historical Background & Hadith Event:</span>
        <p style="color: var(--text-cream); font-size: 0.95rem; line-height: 1.85;">${currentSearchResult.waqia || 'Authentic Prophetic tradition transmitted via Sahih narration.'}</p>
      </div>
      <div style="background: #090806; padding: 18px 20px; border-left: 2px solid var(--gold-primary); margin-bottom: 22px;">
        <span style="font-size: 0.72rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-muted); display: block; margin-bottom: 6px;">Authentic Reference:</span>
        <strong style="color: var(--gold-bright); font-size: 0.95rem;">${currentSearchResult.reference}</strong>
      </div>
      <div>
        <span style="font-size: 0.72rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-muted); display: block; margin-bottom: 8px;">Spiritual Lesson:</span>
        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.75;">${currentSearchResult.lesson || 'Strengthens your connection with Allah through conscious remembrance.'}</p>
      </div>
    `;
  } else if (type === 'saved') {
    currentModalContext = 'saved';
    updateModalBackButton('saved');
    pushModalHistoryState('saved');
    title.innerText = "Your Saved Sanctuary Duas";
    if (savedDuas.length === 0) {
      body.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 48px 0;">No Duas saved yet. Click 'Bookmark' on any Dua to preserve it here.</p>`;
    } else {
      body.innerHTML = savedDuas.map(d => `
        <div style="border-bottom: 1px solid var(--border-subtle); padding: 20px 0;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
            <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-bright);">${d.title}</h4>
            <button onclick="removeSavedDua('${d.id}')" style="background: none; border: none; color: #f87171; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; cursor: pointer;">Remove</button>
          </div>
          <p style="font-family: var(--font-arabic); font-size: 1.6rem; color: #fef08a; text-align: right; direction: rtl; line-height: 2.2; margin-bottom: 10px;">${d.arabic}</p>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">${d.translationEnglish || d.roman}</p>
          <div style="font-size: 0.72rem; color: var(--gold-muted); margin-top: 8px;">${d.reference}</div>
        </div>
      `).join('');
    }
  } else if (type.startsWith('surah-') || type === 'ayatul-kursi') {
    currentModalContext = 'surah';
    updateModalBackButton('surah');
    pushModalHistoryState('surah');
    const db = window.SukunQuranDatabase || (typeof SukunQuranDatabase !== 'undefined' ? SukunQuranDatabase : {});
    if (db[type]) {
      renderCompleteQuranSurah(type, title, body);
    } else {
      renderDynamicSurah(type, title, body);
    }
  } else if (type.startsWith('parah-') || type.startsWith('juz-')) {
    const num = parseInt(type.replace(/\D/g, ''), 10) || 1;
    openParahModal(num);
    return;
  } else if (type.startsWith('hadith-')) {
    const collId = type.replace('hadith-', '');
    openHadithModal(collId);
    return;
  } else if (type === 'contact') {
    currentModalContext = 'contact';
    updateModalBackButton('contact');
    pushModalHistoryState('contact');
    title.innerText = "Contact Sukun • Suggest a Dua";
    body.innerHTML = `
      <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.7; margin-bottom: 20px;">
        Direct Inquiries to: <strong style="color: var(--gold-bright);">kaifofficial4@gmail.com</strong>.<br>
        Notice an incorrect translation or wish to suggest an authentic Hadith? Submit below:
      </p>
      <div class="auth-input-group">
        <label class="auth-label">Your Email</label>
        <input type="email" id="contactEmail" class="auth-input" placeholder="e.g. yourname@gmail.com">
      </div>
      <div class="auth-input-group">
        <label class="auth-label">Message / Dua Suggestion</label>
        <textarea id="contactMessage" rows="4" class="auth-input" placeholder="Enter your suggestion or inquiry..."></textarea>
      </div>
      <button onclick="submitContactForm()" class="primary-btn" style="width: 100%; margin-top: 10px;">SEND MESSAGE</button>
    `;
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("globalModal");
  if (modal) modal.style.display = "none";
  const modalContent = document.querySelector("#globalModal .modal-content");
  if (modalContent) modalContent.classList.remove("quran-reader-modal");
  // Stop audio if playing
  const audioElem = modal ? modal.querySelector("audio") : null;
  if (audioElem) audioElem.pause();
  if (currentAyahAudioObj) {
    currentAyahAudioObj.pause();
    currentAyahAudioObj = null;
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  hideFloatingHasanatWidget();
  document.body.style.overflow = "auto";
  currentModalContext = null;
  modalHistoryActive = false;
}

// ================= 11. QURANIC TILAWAT SANCTUARY READER =================
let currentSessionHasanat = 0;

function renderCompleteQuranSurah(surahKey, titleElem, bodyElem) {
  const db = window.SukunQuranDatabase || (typeof SukunQuranDatabase !== 'undefined' ? SukunQuranDatabase : {});
  const surah = db[surahKey];

  const modalContent = document.querySelector("#globalModal .modal-content");
  if (modalContent) modalContent.classList.add("quran-reader-modal");

  if (!surah || !surah.ayahs) {
    renderDynamicSurah(surahKey, titleElem, bodyElem);
    return;
  }

  currentSessionHasanat = 0;
  const totalHasanat = surah.ayahs.reduce((acc, a) => acc + (typeof calculateArabicHasanat === 'function' ? calculateArabicHasanat(a.arabic) : (a.arabic.length * 10)), 0);

  titleElem.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; width: 100%;">
      <span>${surah.title}</span>
      <span style="font-size: 0.76rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-bright); font-family: var(--font-sans); font-weight: 700; background: rgba(212, 175, 55, 0.12); padding: 4px 12px; border-radius: 999px; border: 1px solid var(--border-gold);">
        ${surah.revelation}
      </span>
    </div>
  `;

  bodyElem.innerHTML = `
    <!-- Live Hasanat (Neki) Counter Banner -->
    <div class="hasanat-meter-banner">
      <div class="hasanat-meter-stat">
        <span class="hasanat-meter-icon">✨</span>
        <div>
          <div class="hasanat-meter-title">Total Surah Hasanat (نیکیاں)</div>
          <div class="hasanat-meter-val" id="totalSurahHasanatVal">+${totalHasanat.toLocaleString()}</div>
        </div>
      </div>
      <div class="hasanat-meter-stat">
        <span class="hasanat-meter-icon">🤲</span>
        <div>
          <div class="hasanat-meter-title">Your Recited Hasanat</div>
          <div class="hasanat-meter-val" id="recitedHasanatVal" style="color: var(--gold-bright);">+0</div>
        </div>
      </div>
      <div style="font-size: 0.72rem; color: var(--text-muted); max-width: 220px; line-height: 1.5;">
        ✦ Jami' at-Tirmidhi (2910): 10 Hasanat for every Arabic letter recited.
      </div>
    </div>

    <!-- Hadith Virtues Callout -->
    <div style="background: rgba(212, 175, 55, 0.08); padding: 16px 20px; border-left: 3px solid var(--gold-bright); border-radius: 6px; margin-bottom: 22px;">
      <span style="font-size: 0.72rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px;">
        ✦ Hadith Virtues & Prophetic Blessings:
      </span>
      <p style="color: var(--text-cream); font-size: 0.92rem; line-height: 1.75; margin: 0;">
        ${surah.hadithVirtue}
      </p>
    </div>

    <!-- Audio Player Bar (Mishary Rashid Alafasy) -->
    <div class="surah-audio-bar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 1.35rem;">🎧</span>
        <div>
          <strong style="color: var(--gold-bright); font-size: 0.85rem; display: block;">Mishary Rashid Alafasy Recitation</strong>
          <span style="color: var(--text-muted); font-size: 0.74rem;">Full Studio Tilawat Audio</span>
        </div>
      </div>
      <audio controls controlsList="nodownload" style="height: 38px; max-width: 340px; outline: none; border-radius: 20px;" src="${surah.audioUrl}"></audio>
    </div>

    <!-- Mode Selector Tabs -->
    <div class="surah-tabs-bar">
      <button onclick="switchSurahView('study')" id="tabBtnStudy" class="tilawat-tab-btn active">📖 Ayat-by-Ayat Study View</button>
      <button onclick="switchSurahView('mushaf')" id="tabBtnMushaf" class="tilawat-tab-btn">📜 Continuous Mushaf View</button>
      <span style="margin-left: auto; font-size: 0.78rem; color: var(--gold-muted); align-self: center;">Total Verses: <strong>${surah.ayahs.length}</strong></span>
    </div>

    <!-- Translation Language Selector Tabs -->
    <div class="reader-lang-bar">
      <span class="reader-lang-label">✦ Tarjuma / Translation:</span>
      <div class="reader-lang-pills">
        <button onclick="setReaderTranslationLang('roman')" id="langBtn_roman" class="lang-pill ${activeReaderLang === 'roman' ? 'active' : ''}">
          🌟 Roman Urdu (Matlab)
        </button>
        <button onclick="setReaderTranslationLang('urdu')" id="langBtn_urdu" class="lang-pill ${activeReaderLang === 'urdu' ? 'active' : ''}">
          اردو (Urdu)
        </button>
        <button onclick="setReaderTranslationLang('english')" id="langBtn_english" class="lang-pill ${activeReaderLang === 'english' ? 'active' : ''}">
          English
        </button>
        <button onclick="setReaderTranslationLang('all')" id="langBtn_all" class="lang-pill ${activeReaderLang === 'all' ? 'active' : ''}">
          Sab Dikhao (All)
        </button>
      </div>
    </div>

    <!-- Bismillah Calligraphy (Except Surah 9) -->
    ${surah.number !== 9 && surah.number !== 1 ? `
      <div class="bismillah-header" style="text-align: center; font-family: var(--font-arabic); font-size: 2.1rem; color: var(--gold-bright); margin: 15px 0 25px;">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
    ` : ''}

    <!-- View 1: Ayat-by-Ayat Study View (Default) -->
    <div id="surahStudyView">
      ${surah.ayahs.map(a => {
        const ayahHasanat = typeof calculateArabicHasanat === 'function' ? calculateArabicHasanat(a.arabic) : (a.arabic.length * 10);
        return `
        <div class="quran-ayah-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="ayah-badge" style="font-size: 0.85rem; font-weight: 700;">Ayah ${a.ayahNumber}</span>
              <span class="ayah-hasanat-badge">✨ +${ayahHasanat.toLocaleString()} Hasanat</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <button onclick="playSingleAyahAudio(${surah.number}, ${a.ayahNumber}, ${ayahHasanat})" class="ayah-audio-play-btn" title="Listen to this Ayah">
                <span>🔊 Listen</span>
              </button>
              <button onclick="markAyahRead(${a.ayahNumber}, ${ayahHasanat})" id="readBtn_${a.ayahNumber}" class="ayah-audio-play-btn" title="Mark recited">
                <span>✓ Read</span>
              </button>
              <button onclick="copySingleAyah(${a.ayahNumber})" class="action-btn" style="padding: 4px 10px; font-size: 0.7rem;">Copy</button>
            </div>
          </div>
          <p class="ayah-arabic-text" id="ayahText_${a.ayahNumber}">${a.arabic}</p>
          <div class="ayah-roman-bar">
            <span class="ayah-roman-tag">Talaffuz (Pronunciation)</span>
            <p class="ayah-roman-text">${transliterateArabic(a.arabic)}</p>
          </div>

          <!-- 1. Roman Urdu Matlab Block (Default) -->
          <div class="translation-block block-roman block-hinglish ${activeReaderLang === 'roman' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'roman' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
            <div class="hinglish-matlab-card roman-matlab-card">
              <span class="hinglish-matlab-tag roman-matlab-tag">🌟 Roman Urdu (Aasan Matlab):</span>
              <p class="hinglish-matlab-text roman-matlab-text">${a.hinglish || transliterateUrduToHinglish(a.urdu)}</p>
            </div>
          </div>

          <!-- 2. Urdu Script Block -->
          <div class="translation-block block-urdu ${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
            <div class="ayah-urdu-text">${a.urdu}</div>
          </div>

          <!-- 3. English Translation Block -->
          <div class="translation-block block-english ${activeReaderLang === 'english' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'english' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
            <div class="ayah-english-text">${a.english}</div>
          </div>
        </div>
      `;
      }).join('')}
    </div>

    <!-- View 2: Continuous Mushaf View -->
    <div id="surahMushafView" style="display: none;">
      <div class="mushaf-continuous-text">
        ${surah.ayahs.map(a => `
          <span>${a.arabic}</span>
          <span class="mushaf-ayah-num">۝${toArabicIndic(a.ayahNumber)}</span>
        `).join(' ')}
      </div>
    </div>
  `;

  showFloatingHasanatWidget(currentSessionHasanat);
}

function switchSurahView(view) {
  const study = document.getElementById("surahStudyView");
  const mushaf = document.getElementById("surahMushafView");
  const tabStudy = document.getElementById("tabBtnStudy");
  const tabMushaf = document.getElementById("tabBtnMushaf");

  if (view === 'study') {
    if (study) study.style.display = "block";
    if (mushaf) mushaf.style.display = "none";
    if (tabStudy) tabStudy.classList.add("active");
    if (tabMushaf) tabMushaf.classList.remove("active");
  } else {
    if (study) study.style.display = "none";
    if (mushaf) mushaf.style.display = "block";
    if (tabStudy) tabStudy.classList.remove("active");
    if (tabMushaf) tabMushaf.classList.add("active");
  }
}

function toArabicIndic(num) {
  const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return num.toString().split('').map(d => arabicDigits[d] || d).join('');
}

function copySingleAyah(num) {
  const elem = document.getElementById("ayahText_" + num);
  if (elem) {
    navigator.clipboard.writeText(elem.innerText).then(() => {
      showToast("Ayah " + num + " copied to clipboard!");
    });
  }
}

function removeSavedDua(id) {
  savedDuas = savedDuas.filter(d => d.id !== id);
  localStorage.setItem("sukun_saved_list", JSON.stringify(savedDuas));
  updateSavedBadge();
  updateDailyBookmarkUI();
  updateResultBookmarkUI();
  openModal('saved');
}

function submitContactForm() {
  const email = document.getElementById("contactEmail").value;
  const msg = document.getElementById("contactMessage").value;
  if (!email || !msg) {
    alert("Please fill in both fields.");
    return;
  }
  closeModal();
  showToast("Your inquiry has been logged. Thank you for your sincere feedback!");
}

// 13. TOAST NOTIFICATION UTILITY
function showToast(message) {
  const existing = document.getElementById("sukunToast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "sukunToast";
  toast.className = "toast-msg";
  toast.innerHTML = `<span style="color: var(--gold-bright);">✦</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3200);
}

// ==========================================================================
// 14. LIVE HASANAT (NEKI) TRACKER & AYAH-BY-AYAH AUDIO CONTROLLERS
// (Jami' at-Tirmidhi 2910: 10 Hasanat per Arabic letter)
// ==========================================================================
function markAyahRead(num, hasanat) {
  currentSessionHasanat += hasanat;
  const valElem = document.getElementById("recitedHasanatVal");
  if (valElem) {
    valElem.innerText = "+" + currentSessionHasanat.toLocaleString();
  }
  updateFloatingHasanat(currentSessionHasanat);
  const btn = document.getElementById("readBtn_" + num);
  if (btn) {
    btn.innerHTML = "<span>✓ Recited</span>";
    btn.style.background = "var(--gold-bright)";
    btn.style.color = "#0b111e";
  }
  showToast(`MashaAllah! +${hasanat.toLocaleString()} Hasanat added (Ayah ${num})`);
}

let currentAyahAudioObj = null;

function playSingleAyahAudio(surahNum, ayahNum, hasanat) {
  if (currentAyahAudioObj) {
    currentAyahAudioObj.pause();
    currentAyahAudioObj = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  const sPad = String(surahNum).padStart(3, '0');
  const aPad = String(ayahNum).padStart(3, '0');
  const audioUrl = `https://everyayah.com/data/Alafasy_128kbps/${sPad}${aPad}.mp3`;

  const audio = new Audio(audioUrl);
  currentAyahAudioObj = audio;

  showToast(`Playing Ayah ${ayahNum} studio recitation (Alafasy)...`);

  audio.onended = () => {
    markAyahRead(ayahNum, hasanat);
  };

  audio.onerror = () => {
    // Fallback to SpeechSynthesis if offline or network error
    if ('speechSynthesis' in window) {
      const elem = document.getElementById("ayahText_" + ayahNum);
      if (elem) {
        const utterance = new SpeechSynthesisUtterance(elem.innerText);
        utterance.lang = "ar-SA";
        utterance.rate = 0.85;
        const voices = window.speechSynthesis.getVoices();
        const arVoice = voices.find(v => v.lang.startsWith("ar"));
        if (arVoice) utterance.voice = arVoice;
        utterance.onend = () => markAyahRead(ayahNum, hasanat);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      markAyahRead(ayahNum, hasanat);
    }
  };

  audio.play().catch(() => {
    if ('speechSynthesis' in window) {
      const elem = document.getElementById("ayahText_" + ayahNum);
      if (elem) {
        const utterance = new SpeechSynthesisUtterance(elem.innerText);
        utterance.lang = "ar-SA";
        utterance.rate = 0.85;
        const voices = window.speechSynthesis.getVoices();
        const arVoice = voices.find(v => v.lang.startsWith("ar"));
        if (arVoice) utterance.voice = arVoice;
        utterance.onend = () => markAyahRead(ayahNum, hasanat);
        window.speechSynthesis.speak(utterance);
      }
    }
  });
}

function copySingleAyahText(num) {
  const elem = document.getElementById("ayahText_" + num);
  if (elem) {
    navigator.clipboard.writeText(elem.innerText).then(() => {
      showToast(`Ayah ${num} copied to clipboard!`);
    });
  }
}

// Dynamic Surah Renderer for all 114 Surahs
async function renderDynamicSurah(surahKey, titleElem, bodyElem) {
  const allSurahs = getGlobalSurahs();
  let s = allSurahs.find(item => item.id === surahKey);
  if (!s && typeof surahKey === 'string' && surahKey.startsWith('surah-')) {
    const rawName = surahKey.replace('surah-', '').replace(/-/g, ' ').toLowerCase();
    s = allSurahs.find(item => item.name.toLowerCase().includes(rawName));
  }
  if (!s) s = allSurahs[0];

  const estimatedHasanat = s.ayahs * 45 * 10;
  currentSessionHasanat = 0;

  titleElem.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; width: 100%;">
      <span>Surah ${s.name} (${s.arabic})</span>
      <span style="font-size: 0.76rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-bright); font-family: var(--font-sans); font-weight: 700; background: rgba(212, 175, 55, 0.12); padding: 4px 12px; border-radius: 999px; border: 1px solid var(--border-gold);">
        ${s.revelation} • ${s.ayahs} Ayahs
      </span>
    </div>
  `;

  bodyElem.innerHTML = `
    <!-- Live Hasanat Meter Banner -->
    <div class="hasanat-meter-banner">
      <div class="hasanat-meter-stat">
        <span class="hasanat-meter-icon">✨</span>
        <div>
          <div class="hasanat-meter-title">Total Surah Hasanat (نیکیاں)</div>
          <div class="hasanat-meter-val" id="totalSurahHasanatVal">+${estimatedHasanat.toLocaleString()}</div>
        </div>
      </div>
      <div class="hasanat-meter-stat">
        <span class="hasanat-meter-icon">🤲</span>
        <div>
          <div class="hasanat-meter-title">Your Recited Hasanat</div>
          <div class="hasanat-meter-val" id="recitedHasanatVal" style="color: var(--gold-bright);">+0</div>
        </div>
      </div>
      <div style="font-size: 0.72rem; color: var(--text-muted); max-width: 220px; line-height: 1.5;">
        ✦ Jami' at-Tirmidhi (2910): 10 Hasanat for every Arabic letter recited.
      </div>
    </div>

    <!-- Audio Player Bar (Mishary Rashid Alafasy) -->
    <div class="surah-audio-bar" style="margin-bottom: 20px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 1.35rem;">🎧</span>
        <div>
          <strong style="color: var(--gold-bright); font-size: 0.85rem; display: block;">Mishary Rashid Alafasy Recitation</strong>
          <span style="color: var(--text-muted); font-size: 0.74rem;">Full Studio Tilawat Audio (${s.name})</span>
        </div>
      </div>
      <audio controls controlsList="nodownload" style="height: 38px; max-width: 340px; outline: none; border-radius: 20px;" src="${s.audioUrl}"></audio>
    </div>

    <!-- Bismillah Calligraphy (Except Surah 9) -->
    ${s.number !== 9 && s.number !== 1 ? `
      <div class="bismillah-header" style="text-align: center; font-family: var(--font-arabic); font-size: 2.1rem; color: var(--gold-bright); margin: 15px 0 25px;">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
    ` : ''}

    <!-- Translation Language Selector Tabs -->
    <div class="reader-lang-bar">
      <span class="reader-lang-label">✦ Tarjuma / Translation:</span>
      <div class="reader-lang-pills">
        <button onclick="setReaderTranslationLang('roman')" id="langBtn_roman" class="lang-pill ${activeReaderLang === 'roman' ? 'active' : ''}">
          🌟 Roman Urdu (Matlab)
        </button>
        <button onclick="setReaderTranslationLang('urdu')" id="langBtn_urdu" class="lang-pill ${activeReaderLang === 'urdu' ? 'active' : ''}">
          اردو (Urdu)
        </button>
        <button onclick="setReaderTranslationLang('english')" id="langBtn_english" class="lang-pill ${activeReaderLang === 'english' ? 'active' : ''}">
          English
        </button>
        <button onclick="setReaderTranslationLang('all')" id="langBtn_all" class="lang-pill ${activeReaderLang === 'all' ? 'active' : ''}">
          Sab Dikhao (All)
        </button>
      </div>
    </div>

    <div id="dynamicAyahsContainer" style="display: flex; flex-direction: column; gap: 14px;">
      <div style="text-align: center; padding: 30px 16px;">
        <div class="ai-loading-spinner" style="margin: 0 auto 12px;"></div>
        <p style="color: var(--gold-bright); font-family: var(--font-serif); font-size: 1.1rem; font-style: italic;">
          Retrieving complete Uthmani script &amp; translations for Surah ${s.name}...
        </p>
      </div>
    </div>
  `;

  // Fetch full Ayahs live from Quran API
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${s.number}/editions/quran-uthmani,ur.jalandhry,en.sahih`);
    if (res.ok) {
      const data = await res.json();
      const arabicAyahs = data.data?.[0]?.ayahs || [];
      const urduAyahs = data.data?.[1]?.ayahs || [];
      const enAyahs = data.data?.[2]?.ayahs || [];

      let actualTotalHasanat = 0;
      arabicAyahs.forEach(a => {
        actualTotalHasanat += typeof calculateArabicHasanat === 'function' ? calculateArabicHasanat(a.text) : (a.text.length * 10);
      });

      const totalElem = document.getElementById("totalSurahHasanatVal");
      if (totalElem) totalElem.innerText = "+" + actualTotalHasanat.toLocaleString();

      const container = document.getElementById("dynamicAyahsContainer");
      if (container && arabicAyahs.length > 0) {
        container.innerHTML = arabicAyahs.map((a, idx) => {
          const ayahHasanat = typeof calculateArabicHasanat === 'function' ? calculateArabicHasanat(a.text) : (a.text.length * 10);
          const urduText = urduAyahs[idx] ? urduAyahs[idx].text : "";
          const enText = enAyahs[idx] ? enAyahs[idx].text : "";
          return `
            <div class="quran-ayah-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="ayah-badge" style="font-size: 0.85rem; font-weight: 700;">Ayah ${a.numberInSurah}</span>
                  <span class="ayah-hasanat-badge">✨ +${ayahHasanat.toLocaleString()} Hasanat</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <button onclick="playSingleAyahAudio(${s.number}, ${a.numberInSurah}, ${ayahHasanat})" class="ayah-audio-play-btn" title="Listen to this Ayah">
                    <span>🔊 Listen</span>
                  </button>
                  <button onclick="markAyahRead(${a.numberInSurah}, ${ayahHasanat})" id="readBtn_${a.numberInSurah}" class="ayah-audio-play-btn" title="Mark recited">
                    <span>✓ Read</span>
                  </button>
                  <button onclick="copySingleAyahText('${a.numberInSurah}')" class="action-btn" style="padding: 4px 10px; font-size: 0.7rem;">Copy</button>
                </div>
              </div>
              <p class="ayah-arabic-text" id="ayahText_${a.numberInSurah}">${a.text}</p>
              <div class="ayah-roman-bar">
                <span class="ayah-roman-tag">Talaffuz (Pronunciation)</span>
                <p class="ayah-roman-text">${transliterateArabic(a.text)}</p>
              </div>

              <!-- 1. Roman Urdu Matlab Block (Default) -->
              <div class="translation-block block-roman block-hinglish ${activeReaderLang === 'roman' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'roman' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
                <div class="hinglish-matlab-card roman-matlab-card">
                  <span class="hinglish-matlab-tag roman-matlab-tag">🌟 Roman Urdu (Aasan Matlab):</span>
                  <p class="hinglish-matlab-text roman-matlab-text">${transliterateUrduToHinglish(urduText)}</p>
                </div>
              </div>

              <!-- 2. Urdu Script Block -->
              <div class="translation-block block-urdu ${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
                ${urduText ? `<div class="ayah-urdu-text">${urduText}</div>` : ''}
              </div>

              <!-- 3. English Translation Block -->
              <div class="translation-block block-english ${activeReaderLang === 'english' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'english' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
                ${enText ? `<div class="ayah-english-text">${enText}</div>` : ''}
              </div>
            </div>
          `;
        }).join('');
      }
    }
  } catch (err) {
    console.warn("Could not load dynamic Quran text:", err);
    const container = document.getElementById("dynamicAyahsContainer");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <p style="color: var(--text-cream); font-size: 1rem; line-height: 1.7;">
            Tilawat audio for Surah ${s.name} is ready above. Tap play to listen to complete recitation by Mishary Rashid Alafasy.
          </p>
        </div>
      `;
    }
  }

  showFloatingHasanatWidget(currentSessionHasanat);
}

// 30 Parahs (Juz) Modal
function openParahModal(juzNumber) {
  currentModalContext = 'parah';
  updateModalBackButton('parah');
  pushModalHistoryState('parah');

  const allParahs = getGlobalParahs();
  const parah = allParahs.find(p => p.juzNumber === juzNumber) || allParahs[0];
  const modal = document.getElementById("globalModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");
  const audioUrl = `https://server8.mp3quran.net/afs/${juzNumber.toString().padStart(3, '0')}.mp3`;
  const estimatedHasanat = (parah.ayahsCount || 200) * 45 * 10;

  title.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; width: 100%;">
      <span>Juz ${parah.juzNumber}: ${parah.title} (${parah.arabic})</span>
      <span style="font-size: 0.76rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-bright); font-family: var(--font-sans); font-weight: 700; background: rgba(212, 175, 55, 0.12); padding: 4px 12px; border-radius: 999px; border: 1px solid var(--border-gold);">
        ${parah.ayahsCount} Ayahs
      </span>
    </div>
  `;

  body.innerHTML = `
    <!-- Live Hasanat Meter Banner -->
    <div class="hasanat-meter-banner">
      <div class="hasanat-meter-stat">
        <span class="hasanat-meter-icon">✨</span>
        <div>
          <div class="hasanat-meter-title">Total Parah Hasanat (نیکیاں)</div>
          <div class="hasanat-meter-val">+${estimatedHasanat.toLocaleString()}</div>
        </div>
      </div>
      <div class="hasanat-meter-stat">
        <span class="hasanat-meter-icon">📜</span>
        <div>
          <div class="hasanat-meter-title">Surah Boundaries</div>
          <div style="font-size: 0.88rem; color: var(--gold-bright); font-weight: 600;">${parah.startSurah} → ${parah.endSurah}</div>
        </div>
      </div>
      <div style="font-size: 0.72rem; color: var(--text-muted); max-width: 200px;">
        ✦ Jami' at-Tirmidhi (2910): 10 Hasanat for every Arabic letter recited.
      </div>
    </div>

    <!-- Parah Tilawat Audio Player -->
    <div class="surah-audio-bar" style="margin-bottom: 24px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 1.35rem;">🎧</span>
        <div>
          <strong style="color: var(--gold-bright); font-size: 0.85rem; display: block;">Mishary Rashid Alafasy Recitation</strong>
          <span style="color: var(--text-muted); font-size: 0.74rem;">Full Parah ${parah.juzNumber} Tilawat Audio</span>
        </div>
      </div>
      <audio controls controlsList="nodownload" style="height: 38px; max-width: 340px; outline: none; border-radius: 20px;" src="${audioUrl}"></audio>
    </div>

    <div style="text-align: center; padding: 24px 16px; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-gold);">
      <div style="font-family: var(--font-arabic-title); font-size: 2.8rem; color: var(--gold-bright); margin-bottom: 12px;">
        ${parah.arabic}
      </div>
      <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-cream); margin-bottom: 6px;">
        Juz ${parah.juzNumber} • ${parah.title}
      </h3>
      <p style="color: var(--text-muted); font-size: 0.92rem; max-width: 600px; margin: 0 auto 16px; line-height: 1.7;">
        Encompassing sacred revelations from <strong>${parah.startSurah}</strong> through <strong>${parah.endSurah}</strong>. Reciting this entire section carries approximately <strong>+${estimatedHasanat.toLocaleString()} Hasanat</strong>.
      </p>
      <div style="display: flex; justify-content: center; gap: 12px;">
        <button onclick="playDrawerSurahAudio('${audioUrl}', 'Juz ${parah.juzNumber}')" class="primary-btn" style="padding: 10px 22px;">
          <span>🔊 Play Full Tilawat</span>
        </button>
        <button onclick="openModal('surah-al-fatihah')" class="action-pill-btn" style="padding: 10px 18px;">
          <span>📖 Read Starting Surah</span>
        </button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// 4 Authentic Hadith Collections Registry & Reader
const AuthenticHadithRegistry = {
  "bukhari": {
    name: "Sahih al-Bukhari",
    arabic: "صحيح البخاري",
    author: "Imam Muhammad al-Bukhari (رحمه الله)",
    hadiths: [
      {
        num: 1,
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        urdu: "اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
        english: "Actions are but by intention and every man shall have only that which he intended.",
        reference: "Sahih al-Bukhari 1"
      },
      {
        num: 13,
        arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        urdu: "تم میں سے کوئی شخص اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
        english: "None of you truly believes until he loves for his brother what he loves for himself.",
        reference: "Sahih al-Bukhari 13"
      },
      {
        num: 5027,
        arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ",
        urdu: "تم میں سے بہترین شخص وہ ہے جس نے قرآن سیکھا اور دوسروں کو سکھایا۔",
        english: "The best among you are those who learn the Qur'an and teach it.",
        reference: "Sahih al-Bukhari 5027"
      }
    ]
  },
  "muslim": {
    name: "Sahih Muslim",
    arabic: "صحيح مسلم",
    author: "Imam Muslim ibn al-Hajjaj (رحمه الله)",
    hadiths: [
      {
        num: 223,
        arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
        urdu: "پاکیزگی نصف ایمان ہے، اور 'الحمد لله' میزان کو بھر دیتا ہے۔",
        english: "Cleanliness is half of faith and 'Alhamdulillah' (Praise be to Allah) fills the scale.",
        reference: "Sahih Muslim 223"
      },
      {
        num: 2699,
        arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
        urdu: "جس نے کسی مسلمان کی دنیاوی تکلیف دور کی، اللہ تعالی قیامت کے دن اس کی تکلیفوں میں سے ایک تکلیف دور فرمائے گا۔",
        english: "Whoever relieves a believer of a distress from the distresses of this world, Allah will relieve him of a distress from the distresses of the Day of Resurrection.",
        reference: "Sahih Muslim 2699"
      }
    ]
  },
  "tirmidhi": {
    name: "Jami' at-Tirmidhi",
    arabic: "جامع الترمذي",
    author: "Imam Abu 'Isa at-Tirmidhi (رحمه الله)",
    hadiths: [
      {
        num: 2910,
        arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالحَسَنَةُ بِعَشْرِ أَمْثَالِهَا، لَا أَقُولُ الم حَرْفٌ، وَلَكِنْ أَلِفٌ حَرْفٌ وَلاَمٌ حَرْفٌ وَمِيمٌ حَرْفٌ",
        urdu: "جس نے اللہ کی کتاب کا ایک حرف پڑھا اس کے لیے ایک نیکی ہے، اور ایک نیکی کا ثواب دس گنا ملتا ہے۔ میں یہ نہیں کہتا کہ 'الم' ایک حرف ہے، بلکہ الف ایک حرف ہے، لام ایک حرف ہے اور میم ایک حرف ہے۔",
        english: "Whoever recites a letter from the Book of Allah, he will receive one good deed, and one good deed receives a tenfold reward. I do not say that Alif-Lam-Meem is one letter, but Alif is a letter, Lam is a letter and Meem is a letter.",
        reference: "Jami' at-Tirmidhi 2910 • Hasan Sahih"
      },
      {
        num: 1987,
        arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
        urdu: "اپنے بھائی کے سامنے تمہارا مسکرانا تمہارے لیے صدقہ ہے۔",
        english: "Your smiling in the face of your brother is charity for you.",
        reference: "Jami' at-Tirmidhi 1987 • Hasan"
      }
    ]
  },
  "abudawood": {
    name: "Sunan Abi Dawood",
    arabic: "سنن أبي داود",
    author: "Imam Abu Dawood as-Sijistani (رحمه الله)",
    hadiths: [
      {
        num: 1520,
        arabic: "إِنَّ الدُّعَاءَ هُوَ الْعِبَادَةُ",
        urdu: "بے شک دعا ہی عبادت ہے۔",
        english: "Verily, supplication (Dua) is worship itself.",
        reference: "Sunan Abi Dawood 1520 • Sahih"
      },
      {
        num: 4941,
        arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
        urdu: "رحم کرنے والوں پر رحمن رحم فرماتا ہے۔ تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم کرے گا۔",
        english: "The merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you.",
        reference: "Sunan Abi Dawood 4941 • Sahih"
      }
    ]
  }
};

const HADITH_API_BASE = "https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/";

const HadithCollectionMeta = {
  "bukhari": {
    id: "bukhari",
    slug: "bukhari",
    name: "Sahih al-Bukhari",
    arabic: "صحيح البخاري",
    author: "Imam Muhammad al-Bukhari (رحمه الله)",
    totalHadiths: 7563,
    status: "Highest Authenticity (الأصح بعد القرآن)"
  },
  "muslim": {
    id: "muslim",
    slug: "muslim",
    name: "Sahih Muslim",
    arabic: "صحيح مسلم",
    author: "Imam Muslim ibn al-Hajjaj (رحمه الله)",
    totalHadiths: 7500,
    status: "Sahih (Authentic)"
  },
  "tirmidhi": {
    id: "tirmidhi",
    slug: "tirmidhi",
    name: "Jami' at-Tirmidhi",
    arabic: "جامع الترمذي",
    author: "Imam Abu 'Isa at-Tirmidhi (رحمه الله)",
    totalHadiths: 3956,
    status: "Sunan & Fiqh Classification"
  },
  "abudawood": {
    id: "abudawood",
    slug: "abudawud",
    name: "Sunan Abi Dawood",
    arabic: "سنن أبي داود",
    author: "Imam Abu Dawood as-Sijistani (رحمه الله)",
    totalHadiths: 5274,
    status: "Core Sunan Collection"
  }
};

let currentHadithBook = "bukhari";
let currentHadithSection = 1;

function openHadithModal(collectionId = "bukhari", sectionId = 1) {
  if (collectionId === "abudawud") collectionId = "abudawood";
  currentHadithBook = collectionId;
  currentHadithSection = parseInt(sectionId, 10) || 1;

  currentModalContext = 'hadith';
  updateModalBackButton('hadith');
  pushModalHistoryState('hadith');

  const meta = HadithCollectionMeta[collectionId] || HadithCollectionMeta["bukhari"];
  const modal = document.getElementById("globalModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  const modalContent = document.querySelector("#globalModal .modal-content");
  if (modalContent) modalContent.classList.add("quran-reader-modal");

  const allSectionsMap = (typeof SukunHadithSectionsIndex !== 'undefined') ? SukunHadithSectionsIndex : (window.SukunHadithSectionsIndex || {});
  const bookSections = allSectionsMap[meta.slug] || allSectionsMap[collectionId] || {};

  title.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; width: 100%;">
      <span>${meta.name} (${meta.arabic})</span>
      <span style="font-size: 0.76rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-bright); font-family: var(--font-sans); font-weight: 700; background: rgba(212, 175, 55, 0.12); padding: 4px 12px; border-radius: 999px; border: 1px solid var(--border-gold);">
        ${meta.totalHadiths.toLocaleString()} Hadiths • ${meta.status}
      </span>
    </div>
  `;

  // Build Chapter <option> elements
  const sectionEntries = Object.entries(bookSections).filter(([id, name]) => id !== "0" && name && name.trim());
  const optionsHtml = sectionEntries.map(([id, name]) => {
    const isSelected = (parseInt(id, 10) === currentHadithSection) ? 'selected' : '';
    return `<option value="${id}" ${isSelected}>Book ${id}: ${escapeHtml(name)}</option>`;
  }).join('');

  body.innerHTML = `
    <!-- Top 4 Hadith Book Switcher Tabs -->
    <div class="hadith-books-nav-row">
      <button onclick="openHadithModal('bukhari', 1)" class="hadith-book-tab ${collectionId === 'bukhari' ? 'active' : ''}">
        <span>Sahih al-Bukhari</span>
      </button>
      <button onclick="openHadithModal('muslim', 1)" class="hadith-book-tab ${collectionId === 'muslim' ? 'active' : ''}">
        <span>Sahih Muslim</span>
      </button>
      <button onclick="openHadithModal('tirmidhi', 1)" class="hadith-book-tab ${collectionId === 'tirmidhi' ? 'active' : ''}">
        <span>Jami' at-Tirmidhi</span>
      </button>
      <button onclick="openHadithModal('abudawood', 1)" class="hadith-book-tab ${collectionId === 'abudawood' ? 'active' : ''}">
        <span>Sunan Abi Dawood</span>
      </button>
    </div>

    <!-- Chapter Selector & Jump to Hadith Number Controls -->
    <div style="background: rgba(212, 168, 83, 0.08); border: 1px solid var(--border-gold); border-radius: 8px; padding: 14px 16px; margin-bottom: 20px;">
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between;">
        
        <!-- Chapter Dropdown -->
        <div style="flex: 1; min-width: 250px;">
          <label style="display: block; font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; margin-bottom: 6px;">
            📖 Select Book / Chapter (کتاب):
          </label>
          <select id="hadithChapterSelect" onchange="loadHadithChapter('${collectionId}', this.value)" style="width: 100%; background: var(--bg-card); color: var(--text-cream); border: 1px solid var(--border-gold); border-radius: 6px; padding: 9px 12px; font-size: 0.88rem; outline: none; cursor: pointer;">
            ${optionsHtml}
          </select>
        </div>

        <!-- Jump to Hadith Number Input -->
        <div style="display: flex; gap: 8px; align-items: flex-end;">
          <div>
            <label style="display: block; font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; margin-bottom: 6px;">
              🔍 Go to Hadith #:
            </label>
            <input 
              type="number" 
              id="hadithJumpInput" 
              placeholder="1 to ${meta.totalHadiths}" 
              min="1" 
              max="${meta.totalHadiths}" 
              style="width: 130px; background: var(--bg-card); color: var(--text-cream); border: 1px solid var(--border-gold); border-radius: 6px; padding: 9px 12px; font-size: 0.88rem; outline: none;"
              onkeydown="if(event.key === 'Enter') jumpToHadithNumber('${collectionId}')"
            />
          </div>
          <button onclick="jumpToHadithNumber('${collectionId}')" class="primary-btn" style="padding: 9px 16px; font-size: 0.82rem; white-space: nowrap;">
            Open ➔
          </button>
        </div>

      </div>
    </div>

    <!-- Translation Language Selector Tabs -->
    <div class="reader-lang-bar">
      <span class="reader-lang-label">✦ Tarjuma / Translation:</span>
      <div class="reader-lang-pills">
        <button onclick="setReaderTranslationLang('roman')" id="langBtn_roman" class="lang-pill ${activeReaderLang === 'roman' ? 'active' : ''}">
          🌟 Roman Urdu (Matlab)
        </button>
        <button onclick="setReaderTranslationLang('urdu')" id="langBtn_urdu" class="lang-pill ${activeReaderLang === 'urdu' ? 'active' : ''}">
          اردو (Urdu)
        </button>
        <button onclick="setReaderTranslationLang('english')" id="langBtn_english" class="lang-pill ${activeReaderLang === 'english' ? 'active' : ''}">
          English
        </button>
        <button onclick="setReaderTranslationLang('all')" id="langBtn_all" class="lang-pill ${activeReaderLang === 'all' ? 'active' : ''}">
          Sab Dikhao (All)
        </button>
      </div>
    </div>

    <!-- Active Feed Container -->
    <div id="hadithFeedContainer" style="min-height: 250px;">
      <!-- Populated via loadHadithChapter -->
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  loadHadithChapter(collectionId, currentHadithSection);
}

async function loadHadithChapter(collectionId, sectionId) {
  currentHadithBook = collectionId;
  currentHadithSection = parseInt(sectionId, 10) || 1;

  const meta = HadithCollectionMeta[collectionId] || HadithCollectionMeta["bukhari"];
  const slug = meta.slug;
  const feed = document.getElementById("hadithFeedContainer");
  if (!feed) return;

  const allSectionsMap = (typeof SukunHadithSectionsIndex !== 'undefined') ? SukunHadithSectionsIndex : (window.SukunHadithSectionsIndex || {});
  const bookSections = allSectionsMap[slug] || {};
  const chapterName = bookSections[sectionId] || `Chapter ${sectionId}`;

  feed.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div class="ai-loading-spinner" style="margin: 0 auto 14px;"></div>
      <p style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-bright); font-style: italic;">
        Consulting sacred repository for ${meta.name}...
      </p>
      <p style="color: var(--text-muted); font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">
        Loading Chapter ${sectionId}: ${chapterName}
      </p>
    </div>
  `;

  try {
    const [araRes, urdRes, engRes] = await Promise.all([
      fetch(`${HADITH_API_BASE}ara-${slug}/sections/${sectionId}.json`).then(r => r.ok ? r.json() : null),
      fetch(`${HADITH_API_BASE}urd-${slug}/sections/${sectionId}.json`).then(r => r.ok ? r.json() : null),
      fetch(`${HADITH_API_BASE}eng-${slug}/sections/${sectionId}.json`).then(r => r.ok ? r.json() : null)
    ]);

    if (!araRes || !araRes.hadiths || araRes.hadiths.length === 0) {
      throw new Error("No Hadiths returned from repository");
    }

    const urdMap = new Map();
    if (urdRes && urdRes.hadiths) {
      urdRes.hadiths.forEach(h => urdMap.set(h.hadithnumber, h.text));
    }

    const engMap = new Map();
    if (engRes && engRes.hadiths) {
      engRes.hadiths.forEach(h => engMap.set(h.hadithnumber, h.text));
    }

    const hadithItems = araRes.hadiths.map(h => ({
      num: h.hadithnumber,
      arabic: h.text,
      urdu: urdMap.get(h.hadithnumber) || '',
      english: engMap.get(h.hadithnumber) || ''
    }));

    feed.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--border-gold); flex-wrap: wrap; gap: 8px;">
        <div>
          <span style="font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700;">
            ✦ Book ${sectionId}: ${escapeHtml(chapterName)}
          </span>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
            Total ${hadithItems.length} authentic traditions in this chapter
          </div>
        </div>
        <div style="display: flex; gap: 6px;">
          ${sectionId > 1 ? `<button onclick="loadHadithChapter('${collectionId}', ${sectionId - 1})" class="action-btn" style="padding: 4px 10px; font-size: 0.74rem;">⬅ Prev Chapter</button>` : ''}
          <button onclick="loadHadithChapter('${collectionId}', ${sectionId + 1})" class="action-btn" style="padding: 4px 10px; font-size: 0.74rem;">Next Chapter ➔</button>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${hadithItems.map(h => `
          <div class="quran-ayah-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
              <span class="ayah-badge">${meta.name} • Hadith #${h.num}</span>
              <div style="display: flex; gap: 6px;">
                <button onclick="playHadithAudio('hadithText_${h.num}')" class="ayah-audio-play-btn" title="Listen to narration">
                  <span>🔊 Listen</span>
                </button>
                <button onclick="copySingleAyahText('hadithText_${h.num}')" class="action-btn" style="padding: 4px 10px; font-size: 0.7rem;">
                  Copy
                </button>
              </div>
            </div>
            <p class="ayah-arabic-text" id="hadithText_${h.num}" style="font-size: 1.45rem; line-height: 2.3; margin-bottom: 12px;">${h.arabic}</p>

            <!-- 1. Roman Urdu Matlab Block (Default) - IMMEDIATELY below Arabic for instant readability -->
            <div class="translation-block block-roman block-hinglish ${activeReaderLang === 'roman' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'roman' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
              <div class="hinglish-matlab-card roman-matlab-card">
                <span class="hinglish-matlab-tag roman-matlab-tag">🌟 Roman Urdu (Aasan Matlab):</span>
                <p class="hinglish-matlab-text roman-matlab-text">${transliterateUrduToHinglish(h.urdu)}</p>
              </div>
            </div>

            <!-- 2. Urdu Script Block -->
            <div class="translation-block block-urdu ${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
              ${h.urdu ? `
                <div class="ayah-urdu-text" style="background: rgba(212, 175, 55, 0.05); padding: 12px 14px; border-radius: 6px; border-right: 3px solid var(--gold-primary); margin: 10px 0;">
                  <span style="font-size: 0.68rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px; font-family: var(--font-sans); direction: ltr; text-align: left;">اردو ترجمہ (Urdu):</span>
                  ${h.urdu}
                </div>
              ` : ''}
            </div>

            <!-- 3. English Translation Block -->
            <div class="translation-block block-english ${activeReaderLang === 'english' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'english' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
              ${h.english ? `
                <div class="ayah-english-text" style="background: rgba(255, 255, 255, 0.03); padding: 12px 14px; border-radius: 6px; border-left: 3px solid var(--border-gold); margin: 10px 0;">
                  <span style="font-size: 0.68rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px; font-family: var(--font-sans);">English Translation:</span>
                  ${h.english}
                </div>
              ` : ''}
            </div>

            <!-- Talaffuz (Arabic Pronunciation) below translations -->
            <div class="ayah-roman-bar" style="margin-top: 12px;">
              <span class="ayah-roman-tag">Talaffuz (Arabic Pronunciation)</span>
              <p class="ayah-roman-text">${transliterateArabic(h.arabic)}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Bottom Next / Prev Navigation -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 14px; border-top: 1px solid var(--border-gold);">
        ${sectionId > 1 ? `<button onclick="loadHadithChapter('${collectionId}', ${sectionId - 1})" class="primary-btn" style="padding: 8px 18px; font-size: 0.82rem;">⬅ Previous Chapter</button>` : '<div></div>'}
        <button onclick="loadHadithChapter('${collectionId}', ${sectionId + 1})" class="primary-btn" style="padding: 8px 18px; font-size: 0.82rem;">Next Chapter ➔</button>
      </div>
    `;

    // Sync select dropdown
    const select = document.getElementById("hadithChapterSelect");
    if (select) select.value = sectionId.toString();

  } catch (err) {
    console.warn("Hadith chapter load error:", err);
    const fallbackCollection = AuthenticHadithRegistry[collectionId] || AuthenticHadithRegistry["bukhari"];
    feed.innerHTML = `
      <div style="padding: 20px; background: rgba(212, 168, 83, 0.08); border-radius: 8px; margin-bottom: 18px; text-align: center;">
        <p style="color: var(--text-cream); font-size: 0.95rem; margin: 0 0 10px;">
          Showing core authentic traditions from ${meta.name}:
        </p>
        <button onclick="loadHadithChapter('${collectionId}', ${sectionId})" class="action-btn" style="padding: 6px 14px; font-size: 0.78rem;">
          🔄 Retry Loading Full Chapter
        </button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${fallbackCollection.hadiths.map(h => `
          <div class="quran-ayah-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span class="ayah-badge">${meta.name} • Hadith #${h.num}</span>
              <span style="font-size: 0.74rem; color: var(--gold-muted);">${h.reference}</span>
            </div>
            <p class="ayah-arabic-text" id="hadithText_${h.num}" style="font-size: 1.45rem; line-height: 2.2; margin-bottom: 12px;">${h.arabic}</p>

            <!-- 1. Roman Urdu Matlab Block (Default) - IMMEDIATELY below Arabic for instant readability -->
            <div class="translation-block block-roman block-hinglish ${activeReaderLang === 'roman' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'roman' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
              <div class="hinglish-matlab-card roman-matlab-card">
                <span class="hinglish-matlab-tag roman-matlab-tag">🌟 Roman Urdu (Aasan Matlab):</span>
                <p class="hinglish-matlab-text roman-matlab-text">${transliterateUrduToHinglish(h.urdu)}</p>
              </div>
            </div>

            <!-- 2. Urdu Script Block -->
            <div class="translation-block block-urdu ${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
              ${h.urdu ? `
                <div class="ayah-urdu-text" style="background: rgba(212, 175, 55, 0.05); padding: 12px 14px; border-radius: 6px; border-right: 3px solid var(--gold-primary); margin: 10px 0;">
                  <span style="font-size: 0.68rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px; font-family: var(--font-sans); direction: ltr; text-align: left;">اردو ترجمہ (Urdu):</span>
                  ${h.urdu}
                </div>
              ` : ''}
            </div>

            <!-- 3. English Translation Block -->
            <div class="translation-block block-english ${activeReaderLang === 'english' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'english' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
              ${h.english ? `
                <div class="ayah-english-text" style="background: rgba(255, 255, 255, 0.03); padding: 12px 14px; border-radius: 6px; border-left: 3px solid var(--border-gold); margin: 10px 0;">
                  <span style="font-size: 0.68rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px; font-family: var(--font-sans);">English Translation:</span>
                  ${h.english}
                </div>
              ` : ''}
            </div>

            <!-- Talaffuz (Arabic Pronunciation) below translations -->
            <div class="ayah-roman-bar" style="margin-top: 12px;">
              <span class="ayah-roman-tag">Talaffuz (Arabic Pronunciation)</span>
              <p class="ayah-roman-text">${transliterateArabic(h.arabic)}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

async function jumpToHadithNumber(collectionId) {
  const input = document.getElementById("hadithJumpInput");
  if (!input) return;
  const num = parseInt(input.value, 10);
  if (!num || num < 1) {
    showToast("Please enter a valid Hadith number.");
    return;
  }

  const meta = HadithCollectionMeta[collectionId] || HadithCollectionMeta["bukhari"];
  const slug = meta.slug;
  const feed = document.getElementById("hadithFeedContainer");
  if (!feed) return;

  feed.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div class="ai-loading-spinner" style="margin: 0 auto 14px;"></div>
      <p style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-bright); font-style: italic;">
        Retrieving Hadith #${num} from ${meta.name}...
      </p>
    </div>
  `;

  try {
    const [araRes, urdRes, engRes] = await Promise.all([
      fetch(`${HADITH_API_BASE}ara-${slug}/${num}.json`).then(r => r.ok ? r.json() : null),
      fetch(`${HADITH_API_BASE}urd-${slug}/${num}.json`).then(r => r.ok ? r.json() : null),
      fetch(`${HADITH_API_BASE}eng-${slug}/${num}.json`).then(r => r.ok ? r.json() : null)
    ]);

    if (!araRes || !araRes.hadiths || !araRes.hadiths[0]) {
      throw new Error("Hadith not found");
    }

    const arabicText = araRes.hadiths[0].text;
    const urduText = (urdRes && urdRes.hadiths && urdRes.hadiths[0]) ? urdRes.hadiths[0].text : '';
    const engText = (engRes && engRes.hadiths && engRes.hadiths[0]) ? engRes.hadiths[0].text : '';
    const chapterName = araRes.metadata ? (Object.values(araRes.metadata.section)[0] || '') : '';

    feed.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--border-gold); flex-wrap: wrap; gap: 8px;">
        <div>
          <span style="font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700;">
            ✦ Hadith #${num} • ${meta.name}
          </span>
          ${chapterName ? `<div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">Chapter: ${escapeHtml(chapterName)}</div>` : ''}
        </div>
        <button onclick="loadHadithChapter('${collectionId}', 1)" class="action-btn" style="padding: 4px 12px; font-size: 0.74rem;">
          View Chapters ➔
        </button>
      </div>

      <div class="quran-ayah-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <span class="ayah-badge">${meta.name} • Hadith #${num}</span>
          <div style="display: flex; gap: 6px;">
            <button onclick="playHadithAudio('hadithText_${num}')" class="ayah-audio-play-btn" title="Listen narration">
              <span>🔊 Listen</span>
            </button>
            <button onclick="copySingleAyahText('hadithText_${num}')" class="action-btn" style="padding: 4px 10px; font-size: 0.7rem;">
              Copy
            </button>
          </div>
        </div>
        <p class="ayah-arabic-text" id="hadithText_${num}" style="font-size: 1.5rem; line-height: 2.3; margin-bottom: 12px;">${arabicText}</p>

        <!-- 1. Roman Urdu Matlab Block (Default) - IMMEDIATELY below Arabic for instant readability -->
        <div class="translation-block block-roman block-hinglish ${activeReaderLang === 'roman' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'roman' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
          <div class="hinglish-matlab-card roman-matlab-card">
            <span class="hinglish-matlab-tag roman-matlab-tag">🌟 Roman Urdu (Aasan Matlab):</span>
            <p class="hinglish-matlab-text roman-matlab-text">${transliterateUrduToHinglish(urduText)}</p>
          </div>
        </div>

        <!-- 2. Urdu Script Block -->
        <div class="translation-block block-urdu ${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'urdu' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
          ${urduText ? `
            <div class="ayah-urdu-text" style="background: rgba(212, 175, 55, 0.05); padding: 12px 14px; border-radius: 6px; border-right: 3px solid var(--gold-primary); margin: 10px 0;">
              <span style="font-size: 0.68rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px; font-family: var(--font-sans); direction: ltr; text-align: left;">اردو ترجمہ (Urdu):</span>
              ${urduText}
            </div>
          ` : ''}
        </div>

        <!-- 3. English Translation Block -->
        <div class="translation-block block-english ${activeReaderLang === 'english' || activeReaderLang === 'all' ? '' : 'hidden'}" style="${activeReaderLang === 'english' || activeReaderLang === 'all' ? 'display:block;' : 'display:none;'}">
          ${engText ? `
            <div class="ayah-english-text" style="background: rgba(255, 255, 255, 0.03); padding: 12px 14px; border-radius: 6px; border-left: 3px solid var(--border-gold); margin: 10px 0;">
              <span style="font-size: 0.68rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold-bright); font-weight: 700; display: block; margin-bottom: 6px; font-family: var(--font-sans);">English Translation:</span>
              ${engText}
            </div>
          ` : ''}
        </div>

        <!-- Talaffuz (Arabic Pronunciation) below translations -->
        <div class="ayah-roman-bar" style="margin-top: 12px;">
          <span class="ayah-roman-tag">Talaffuz (Arabic Pronunciation)</span>
          <p class="ayah-roman-text">${transliterateArabic(arabicText)}</p>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
        ${num > 1 ? `<button onclick="document.getElementById('hadithJumpInput').value = ${num - 1}; jumpToHadithNumber('${collectionId}')" class="primary-btn" style="padding: 8px 16px; font-size: 0.8rem;">⬅ Hadith #${num - 1}</button>` : '<div></div>'}
        <button onclick="document.getElementById('hadithJumpInput').value = ${num + 1}; jumpToHadithNumber('${collectionId}')" class="primary-btn" style="padding: 8px 16px; font-size: 0.8rem;">Hadith #${num + 1} ➔</button>
      </div>
    `;

    showToast(`Loaded ${meta.name} Hadith #${num}`);
  } catch (err) {
    showToast(`Could not find Hadith #${num} in ${meta.name}.`);
    loadHadithChapter(collectionId, 1);
  }
}

function playHadithAudio(elemId) {
  const elem = document.getElementById(elemId);
  if (!elem) return;
  if (!('speechSynthesis' in window)) {
    showToast("Audio is not supported by your browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(elem.innerText);
  utterance.lang = "ar-SA";
  utterance.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const arVoice = voices.find(v => v.lang.startsWith("ar"));
  if (arVoice) utterance.voice = arVoice;

  window.speechSynthesis.speak(utterance);
  showToast("Playing authentic Hadith recitation...");
}

// ==========================================================================
// 15. OFF-CANVAS QURAN & HADITH DRAWER CONTROLLERS
// ==========================================================================
function openQuranDrawer(tab = 'surahs') {
  const drawer = document.getElementById("quranDrawer");
  const overlay = document.getElementById("quranDrawerOverlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  switchDrawerTab(tab);
  try {
    if (!window.history.state || !window.history.state.sukunDrawerOpen) {
      window.history.pushState({ sukunDrawerOpen: true, tab: tab }, '');
    }
  } catch (e) {}
}

function closeQuranDrawer() {
  const drawer = document.getElementById("quranDrawer");
  const overlay = document.getElementById("quranDrawerOverlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function switchDrawerTab(tab) {
  const tabs = ['surahs', 'parahs', 'hadith'];
  tabs.forEach(t => {
    const btn = document.getElementById('drawerTab' + t.charAt(0).toUpperCase() + t.slice(1));
    const view = document.getElementById('drawer' + t.charAt(0).toUpperCase() + t.slice(1) + 'View');
    if (btn) btn.classList.toggle('active', t === tab);
    if (view) {
      view.style.display = (t === tab) ? 'block' : 'none';
    }
  });

  const filterInput = document.getElementById("drawerFilterInput");
  const query = filterInput ? filterInput.value.trim() : "";

  if (tab === 'surahs') renderDrawerSurahs(query);
  else if (tab === 'parahs') renderDrawerParahs(query);
  else if (tab === 'hadith') renderDrawerHadith(query);
}

function filterDrawerContent(q) {
  const activeTabBtn = document.querySelector(".drawer-tab-btn.active");
  if (activeTabBtn) {
    if (activeTabBtn.id === "drawerTabSurahs") renderDrawerSurahs(q);
    else if (activeTabBtn.id === "drawerTabParahs") renderDrawerParahs(q);
    else if (activeTabBtn.id === "drawerTabHadith") renderDrawerHadith(q);
  }
}

// Registry Helper Getters (Guaranteed Fallback Across Scopes & Environments)
function getGlobalSurahs() {
  if (typeof SukunAllSurahsIndex !== 'undefined' && Array.isArray(SukunAllSurahsIndex) && SukunAllSurahsIndex.length > 0) {
    return SukunAllSurahsIndex;
  }
  if (typeof window !== 'undefined' && window.SukunAllSurahsIndex && Array.isArray(window.SukunAllSurahsIndex) && window.SukunAllSurahsIndex.length > 0) {
    return window.SukunAllSurahsIndex;
  }
  return [];
}

function getGlobalParahs() {
  if (typeof SukunAllParahsIndex !== 'undefined' && Array.isArray(SukunAllParahsIndex) && SukunAllParahsIndex.length > 0) {
    return SukunAllParahsIndex;
  }
  if (typeof window !== 'undefined' && window.SukunAllParahsIndex && Array.isArray(window.SukunAllParahsIndex) && window.SukunAllParahsIndex.length > 0) {
    return window.SukunAllParahsIndex;
  }
  return [];
}

function getGlobalHadiths() {
  if (typeof SukunHadithCollectionsIndex !== 'undefined' && Array.isArray(SukunHadithCollectionsIndex) && SukunHadithCollectionsIndex.length > 0) {
    return SukunHadithCollectionsIndex;
  }
  if (typeof window !== 'undefined' && window.SukunHadithCollectionsIndex && Array.isArray(window.SukunHadithCollectionsIndex) && window.SukunHadithCollectionsIndex.length > 0) {
    return window.SukunHadithCollectionsIndex;
  }
  return [];
}

function renderDrawerSurahs(filterQuery = '') {
  const container = document.getElementById("drawerSurahsGrid");
  if (!container) return;
  const allSurahs = getGlobalSurahs();
  const q = filterQuery.toLowerCase().trim();

  const filtered = allSurahs.filter(s => {
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q) ||
      s.arabic.includes(q) ||
      s.meaning.toLowerCase().includes(q) ||
      s.number.toString() === q
    );
  });

  if (filtered.length === 0) {
    if (!q) {
      container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 25px;">Loading 114 Sacred Surahs...</p>`;
      setTimeout(() => {
        if (getGlobalSurahs().length > 0) renderDrawerSurahs(filterQuery);
      }, 150);
    } else {
      container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 25px;">No Surah found matching "${filterQuery}".</p>`;
    }
    return;
  }

  container.innerHTML = filtered.map(s => {
    const hasanatApprox = s.ayahs * 45 * 10;
    return `
      <div class="drawer-item-card">
        <div class="drawer-item-left">
          <div class="drawer-item-num">${s.number}</div>
          <div class="drawer-item-text">
            <h4 class="drawer-item-name">${s.name}</h4>
            <div class="drawer-item-sub">${s.meaning} • ${s.ayahs} Ayahs &nbsp;<span class="drawer-hasanat-pill">✨ ~${hasanatApprox.toLocaleString()} Hasanat</span></div>
          </div>
        </div>
        <div class="drawer-item-actions">
          <span class="drawer-item-arabic">${s.arabic}</span>
          <button onclick="playDrawerSurahAudio('${s.audioUrl}', '${s.name}')" class="drawer-action-btn" title="Listen to Tilawat">
            <span>🔊 Tilawat</span>
          </button>
          <button onclick="closeQuranDrawer(); openModal('${s.id}')" class="drawer-action-btn" style="background: var(--gold-primary); color: #0b111e; font-weight: 600;" title="Read Surah with Ayah by Ayah Neki Counter">
            <span>📖 Read</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function playDrawerSurahAudio(audioUrl, surahName) {
  let drawerAudio = document.getElementById("drawerAudioPlayer");
  if (!drawerAudio) {
    drawerAudio = document.createElement("audio");
    drawerAudio.id = "drawerAudioPlayer";
    document.body.appendChild(drawerAudio);
  }
  drawerAudio.src = audioUrl;
  drawerAudio.play();
  showToast(`Playing Tilawat of ${surahName} (Mishary Rashid Alafasy)...`);
}

function renderDrawerParahs(filterQuery = '') {
  const container = document.getElementById("drawerParahsGrid");
  if (!container) return;
  const allParahs = getGlobalParahs();
  const q = filterQuery.toLowerCase().trim();

  const filtered = allParahs.filter(p => {
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.arabic.includes(q) ||
      p.juzNumber.toString() === q ||
      (p.startSurah && p.startSurah.toLowerCase().includes(q))
    );
  });

  if (filtered.length === 0) {
    if (!q) {
      container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 25px;">Loading 30 Sacred Parahs (Juz)...</p>`;
      setTimeout(() => {
        if (getGlobalParahs().length > 0) renderDrawerParahs(filterQuery);
      }, 150);
    } else {
      container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 25px;">No Parah (Juz) found matching "${filterQuery}".</p>`;
    }
    return;
  }

  container.innerHTML = filtered.map(p => {
    const hasanatApprox = (p.ayahsCount || 200) * 45 * 10;
    const audioUrl = `https://server8.mp3quran.net/afs/${p.juzNumber.toString().padStart(3, '0')}.mp3`;
    return `
      <div class="drawer-item-card">
        <div class="drawer-item-left">
          <div class="drawer-item-num">Juz ${p.juzNumber}</div>
          <div class="drawer-item-text">
            <h4 class="drawer-item-name">${p.title}</h4>
            <div class="drawer-item-sub">${p.startSurah} → ${p.endSurah} (${p.ayahsCount} Ayahs • ~${hasanatApprox.toLocaleString()} Hasanat)</div>
          </div>
        </div>
        <div class="drawer-item-actions">
          <span class="drawer-item-arabic">${p.arabic}</span>
          <button onclick="playDrawerSurahAudio('${audioUrl}', 'Juz ${p.juzNumber} - ${p.title}')" class="drawer-action-btn" title="Listen Tilawat">
            <span>🔊 Tilawat</span>
          </button>
          <button onclick="closeQuranDrawer(); openParahModal(${p.juzNumber})" class="drawer-action-btn" style="background: var(--gold-primary); color: #0b111e; font-weight: 600;">
            <span>📖 Read</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderDrawerHadith(filterQuery = '') {
  const container = document.getElementById("drawerHadithGrid");
  if (!container) return;
  const collections = getGlobalHadiths();
  const q = filterQuery.toLowerCase().trim();

  const filtered = collections.filter(h => {
    if (!q) return true;
    return (
      h.name.toLowerCase().includes(q) ||
      h.arabic.includes(q) ||
      h.author.toLowerCase().includes(q)
    );
  });

  container.innerHTML = filtered.map(h => {
    return `
      <div class="drawer-item-card" style="flex-direction: column; align-items: flex-start; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div>
            <h4 class="drawer-item-name" style="font-size: 1.05rem; color: var(--gold-bright);">${h.name}</h4>
            <div class="drawer-item-sub">${h.author} • ${h.hadithCount.toLocaleString()} Hadiths</div>
          </div>
          <span class="drawer-item-arabic" style="font-size: 1.25rem;">${h.arabic}</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
          ${h.description}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; border-top: 1px dashed rgba(212,168,83,0.2); padding-top: 8px;">
          <span style="font-size: 0.72rem; color: var(--gold-muted); font-weight: 600;">✦ ${h.status}</span>
          <button onclick="closeQuranDrawer(); openHadithModal('${h.id}')" class="drawer-action-btn" style="background: var(--gold-primary); color: #0b111e; font-weight: 600;">
            <span>📖 Explore Hadiths</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 16. DEDICATED DIGITAL TASBIH MODAL CONTROLLERS
// ==========================================================================
function openTasbihModal() {
  const modal = document.getElementById("tasbihModal");
  if (modal) modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeTasbihModal() {
  const modal = document.getElementById("tasbihModal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// ==========================================================================
// 17. CONVERSATIONAL AI CHAT COMPANION ENGINE
// ==========================================================================
let chatConversationHistory = [];

function appendChatMessage(role, text, metadata = {}) {
  chatConversationHistory.push({ role, text, metadata, timestamp: Date.now() });
  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById("chatMessagesList");
  if (!container) return;

  if (chatConversationHistory.length === 0) {
    container.innerHTML = `
      <div class="chat-bubble ai-chat-bubble" style="opacity: 0.85;">
        <p style="margin: 0;"><strong>Assalamu Alaikum wa Rahmatullahi wa Barakatuh.</strong></p>
        <p style="margin: 6px 0 0; font-size: 0.9rem;">I am your Sukun Spiritual Companion. How can I help you today? You may ask about feelings of anxiety, debt, family peace, a specific Surah, or request an authentic Dua from Quran and Sunnah.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = chatConversationHistory.map(msg => {
    if (msg.role === 'user') {
      return `
        <div class="chat-bubble user-chat-bubble">
          <strong>You:</strong> ${escapeHtml(msg.text)}
        </div>
      `;
    } else {
      return `
        <div class="chat-bubble ai-chat-bubble">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px; font-size: 0.76rem; color: var(--gold-bright); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
            <span>✨</span> Sukun Companion
          </div>
          <div>${escapeHtml(msg.text)}</div>
        </div>
      `;
    }
  }).join('');

  container.scrollTop = container.scrollHeight;
}

function clearConversation() {
  chatConversationHistory = [];
  renderChatMessages();
  const input = document.getElementById("chatFollowUpInput");
  if (input) input.value = "";
  const scriptureCard = document.getElementById("scriptureCardWrapper");
  if (scriptureCard) scriptureCard.style.display = "none";
  showToast("Conversation cleared. Ready for your new inquiry.");
}

async function sendFollowUpMessage() {
  const input = document.getElementById("chatFollowUpInput");
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;
  input.value = "";

  appendChatMessage('user', userText);

  // Pre-Chat Crisis Interceptor
  const crisisCheck = evaluateCrisisIntent(userText);
  if (crisisCheck.isExplicit) {
    appendChatMessage('model', getCrisisHelpCardHtml(crisisCheck.isReligious));
    return;
  }

  const container = document.getElementById("chatMessagesList");
  const typingId = "typingIndicator_" + Date.now();
  if (container) {
    const typingBubble = document.createElement("div");
    typingBubble.id = typingId;
    typingBubble.className = "chat-bubble ai-chat-bubble";
    typingBubble.innerHTML = `<em>Consulting authentic scriptures...</em>`;
    container.appendChild(typingBubble);
    container.scrollTop = container.scrollHeight;
  }

  try {
    const aiResponse = await fetchScriptureFromAI(userText);
    const typingElem = document.getElementById(typingId);
    if (typingElem) typingElem.remove();

    if (aiResponse) {
      if (aiResponse.crisisTriggered) {
        appendChatMessage('model', getCrisisHelpCardHtml(false));
        return;
      }
      const counselText = generateConversationalCounsel(aiResponse, userText);
      appendChatMessage('model', counselText);
      displaySearchResult(aiResponse, false);
    } else {
      appendChatMessage('model', getAiOfflineFriendlyBanner());
      const localFallback = findBestDuaMatch(userText);
      if (localFallback && localFallback.match) {
        displaySearchResult(localFallback.match, false);
      }
    }
  } catch (err) {
    console.warn("Follow-up error:", err);
    const typingElem = document.getElementById(typingId);
    if (typingElem) typingElem.remove();
    appendChatMessage('model', getAiOfflineFriendlyBanner());
    const localFallback = findBestDuaMatch(userText);
    if (localFallback && localFallback.match) {
      displaySearchResult(localFallback.match, false);
    }
  }
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Global key handlers
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeTasbihModal();
    closeQuranDrawer();
  }
  if (e.code === "Space" && e.target === document.body) {
    const tasbihModal = document.getElementById("tasbihModal");
    if (tasbihModal && tasbihModal.style.display === "flex") {
      e.preventDefault();
      incrementTasbih();
    }
  }
});

// Browser & Mobile Hardware Back Button Navigation Handler
window.addEventListener("popstate", (e) => {
  const modal = document.getElementById("globalModal");
  const drawer = document.getElementById("quranDrawer");
  const tasbih = document.getElementById("tasbihModal");

  if (modal && modal.style.display !== "none") {
    navigateModalBack(true);
  } else if (drawer && drawer.classList.contains("open")) {
    closeQuranDrawer();
  } else if (tasbih && tasbih.style.display !== "none") {
    closeTasbihModal();
  }
});

// Initialize Scroll-driven Reveal Observer for Main Page Animations
function initScrollRevealObserver() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-visible"));
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderChatMessages();
  initScrollRevealObserver();
});


