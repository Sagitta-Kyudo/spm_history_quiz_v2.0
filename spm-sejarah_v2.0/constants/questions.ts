import type { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [
  // Bab 1: Kedaulatan Negara
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'mcq',
    question: { ms: "Apakah maksud kedaulatan dalam konteks negara?", en: "What is the meaning of sovereignty in the context of a nation?" },
    options: [
      { ms: "Kuasa tertinggi sesebuah negara untuk membuat undang-undang dan menguatkuasakannya.", en: "The supreme power of a country to make and enforce laws." },
      { ms: "Sistem pemerintahan yang diketuai oleh seorang raja.", en: "A system of government headed by a monarch." },
      { ms: "Gabungan beberapa buah negeri di bawah satu pentadbiran.", en: "A federation of several states under one administration." }
    ],
    answer: "Kuasa tertinggi sesebuah negara untuk membuat undang-undang dan menguatkuasakannya.",
    explanation: { ms: "Kedaulatan ialah kuasa tertinggi yang dimiliki oleh sesebuah negara untuk memerintah dan mentadbir wilayahnya tanpa campur tangan kuasa luar.", en: "Sovereignty is the supreme power possessed by a nation to rule and administer its territory without external interference." }
  },
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'true_false',
    question: { ms: "Kedaulatan moden dikaitkan dengan idea kemunculan negara bangsa selepas Revolusi Perancis.", en: "Modern sovereignty is associated with the idea of the emergence of the nation-state after the French Revolution." },
    answer: "True",
    explanation: { ms: "Betul. Konsep negara bangsa, di mana setiap bangsa berhak menubuhkan negara sendiri, mengukuhkan idea kedaulatan moden.", en: "Correct. The concept of the nation-state, where every nation has the right to establish its own country, strengthened the idea of modern sovereignty." }
  },
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'fill_in_the_blank',
    question: { ms: "Salah satu ciri negara yang berdaulat ialah mempunyai sistem _________ yang teratur.", en: "One of the characteristics of a sovereign state is having an organized _________ system." },
    answer: "pemerintahan",
    explanation: { ms: "Sesebuah negara berdaulat mesti mempunyai sistem pemerintahan yang bertanggungjawab untuk mentadbir negara demi menjaga keamanan dan kestabilan.", en: "A sovereign state must have a system of government responsible for administering the country to maintain peace and stability." }
  },
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'mcq',
    question: { ms: "Apakah kepentingan kedaulatan kepada sesebuah negara?", en: "What is the importance of sovereignty to a nation?" },
    options: [
      { ms: "Menjamin kemerdekaan dan kebebasan negara.", en: "Guarantees the independence and freedom of the country." },
      { ms: "Meningkatkan pengaruh ekonomi di peringkat global.", en: "Increases economic influence at the global level." },
      { ms: "Menggalakkan kemasukan kuasa asing.", en: "Encourages the entry of foreign powers." }
    ],
    answer: "Menjamin kemerdekaan dan kebebasan negara.",
    explanation: { ms: "Kedaulatan memastikan negara bebas daripada penjajahan dan campur tangan luar, membolehkan rakyat menentukan nasib negara sendiri.", en: "Sovereignty ensures the country is free from colonization and external interference, allowing its people to determine their own destiny." }
  },
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'mcq',
    question: { ms: "Kedaulatan undang-undang bermaksud...", en: "Rule of law means..." },
    options: [
      { ms: "Rakyat dan kerajaan tertakluk kepada undang-undang.", en: "The people and the government are subject to the law." },
      { ms: "Raja mempunyai kuasa mutlak.", en: "The monarch has absolute power." },
      { ms: "Kerajaan boleh menukar undang-undang sesuka hati.", en: "The government can change laws at will." }
    ],
    answer: "Rakyat dan kerajaan tertakluk kepada undang-undang.",
    explanation: { ms: "Kedaulatan undang-undang menekankan bahawa tiada siapa yang mengatasi undang-undang, termasuk pemerintah, bagi memastikan keadilan dan kesaksamaan.", en: "The rule of law emphasizes that no one is above the law, including the rulers, to ensure justice and equality." }
  },
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'true_false',
    question: { ms: "Malaysia tidak mengamalkan kedaulatan antarabangsa.", en: "Malaysia does not practice international sovereignty." },
    answer: "False",
    explanation: { ms: "Salah. Kedaulatan antarabangsa merujuk kepada pengiktirafan oleh negara lain. Malaysia diiktiraf sebagai negara berdaulat oleh Pertubuhan Bangsa-Bangsa Bersatu (PBB).", en: "Incorrect. International sovereignty refers to recognition by other countries. Malaysia is recognized as a sovereign state by the United Nations (UN)." }
  },
  {
    topic: { ms: "Bab 1: Kedaulatan Negara", en: "Chapter 1: National Sovereignty" },
    type: 'fill_in_the_blank',
    question: { ms: "Kedaulatan tradisional merujuk kepada kekuasaan mutlak yang berada di tangan ____.", en: "Traditional sovereignty refers to the absolute power in the hands of the ____." },
    answer: "raja",
    explanation: { ms: "Dalam sistem pemerintahan tradisional, raja atau sultan dianggap sebagai puncak kuasa dan simbol kedaulatan negara.", en: "In traditional systems of government, the king or sultan was considered the pinnacle of power and the symbol of state sovereignty." }
  },

  // Bab 2: Perlembagaan Persekutuan
  {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'mcq',
    question: { ms: "Apakah konsep yang merujuk kepada pengasingan kuasa antara badan perundangan, eksekutif, dan kehakiman?", en: "What concept refers to the separation of powers between the legislative, executive, and judicial bodies?" },
    options: [
      { ms: "Kedaulatan Undang-undang", en: "Rule of Law" },
      { ms: "Pengasingan Kuasa", en: "Separation of Powers" },
      { ms: "Raja Berperlembagaan", en: "Constitutional Monarchy" }
    ],
    answer: "Pengasingan Kuasa",
    explanation: { ms: "Pengasingan kuasa diamalkan di Malaysia untuk mengelakkan pemusatan kuasa pada satu badan dan memastikan sistem semak dan imbang berfungsi.", en: "Separation of powers is practiced in Malaysia to avoid the concentration of power in one body and ensure the system of checks and balances functions." }
  },
  {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'true_false',
    question: { ms: "Perlembagaan Persekutuan Malaysia adalah undang-undang tidak bertulis.", en: "The Federal Constitution of Malaysia is an unwritten law." },
    answer: "False",
    explanation: { ms: "Salah. Perlembagaan Persekutuan Malaysia ialah sebuah perlembagaan bertulis yang menjadi undang-undang tertinggi negara.", en: "Incorrect. The Federal Constitution of Malaysia is a written constitution that is the supreme law of the country." }
  },
  {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'fill_in_the_blank',
    question: { ms: "Pindaan perlembagaan memerlukan majoriti _______ daripada ahli dewan.", en: "A constitutional amendment requires a _______ majority of the members of the house." },
    answer: "dua pertiga",
    explanation: { ms: "Kebanyakan pindaan kepada Perlembagaan Persekutuan memerlukan sokongan majoriti dua pertiga (2/3) daripada jumlah ahli Dewan Rakyat dan Dewan Negara.", en: "Most amendments to the Federal Constitution require the support of a two-thirds (2/3) majority of the total members of the Dewan Rakyat and Dewan Negara." }
  },
   {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'mcq',
    question: { ms: "Manakah antara berikut BUKAN ciri tradisional dalam Perlembagaan Persekutuan?", en: "Which of the following is NOT a traditional feature in the Federal Constitution?" },
    options: [
      { ms: "Bahasa Melayu", en: "The Malay Language" },
      { ms: "Agama Islam", en: "The religion of Islam" },
      { ms: "Kewarganegaraan", en: "Citizenship" }
    ],
    answer: "Kewarganegaraan",
    explanation: { ms: "Kewarganegaraan adalah ciri moden yang diperkenalkan, manakala Bahasa Melayu, Agama Islam, dan Pemerintahan Beraja adalah ciri-ciri tradisional.", en: "Citizenship is a modern feature that was introduced, while the Malay Language, Islam, and the Monarchy are traditional features." }
  },
  {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'mcq',
    question: { ms: "Suruhanjaya Reid ditubuhkan pada tahun...", en: "The Reid Commission was established in the year..." },
    options: [
        { ms: "1956", en: "1956" },
        { ms: "1957", en: "1957" },
        { ms: "1963", en: "1963" }
    ],
    answer: "1956",
    explanation: { ms: "Suruhanjaya Reid telah ditubuhkan pada tahun 1956 untuk merangka draf Perlembagaan Persekutuan Tanah Melayu yang merdeka.", en: "The Reid Commission was established in 1956 to draft the constitution for the independent Federation of Malaya." }
  },
  {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'true_false',
    question: { ms: "Mahkamah mempunyai kuasa untuk membatalkan undang-undang yang bercanggah dengan perlembagaan.", en: "The court has the power to nullify laws that contradict the constitution." },
    answer: "True",
    explanation: { ms: "Betul. Ini dikenali sebagai 'semakan kehakiman', di mana badan kehakiman memastikan semua undang-undang yang digubal oleh Parlimen adalah selaras dengan Perlembagaan Persekutuan.", en: "Correct. This is known as 'judicial review', where the judiciary ensures that all laws enacted by Parliament are consistent with the Federal Constitution." }
  },
  {
    topic: { ms: "Bab 2: Perlembagaan Persekutuan", en: "Chapter 2: Federal Constitution" },
    type: 'fill_in_the_blank',
    question: { ms: "Perkara 152 dalam Perlembagaan Persekutuan adalah berkaitan dengan ______.", en: "Article 152 in the Federal Constitution is related to ______." },
    answer: "Bahasa Melayu",
    explanation: { ms: "Perkara 152 menetapkan Bahasa Melayu sebagai bahasa kebangsaan Persekutuan Malaysia.", en: "Article 152 establishes the Malay language as the national language of the Federation of Malaysia." }
  },

  // Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'mcq',
    question: { ms: "Siapakah ketua utama negara Malaysia?", en: "Who is the supreme head of state of Malaysia?" },
    options: [
      { ms: "Perdana Menteri", en: "Prime Minister" },
      { ms: "Yang di-Pertuan Agong", en: "The Yang di-Pertuan Agong" },
      { ms: "Ketua Hakim Negara", en: "Chief Justice" }
    ],
    answer: "Yang di-Pertuan Agong",
    explanation: { ms: "Yang di-Pertuan Agong ialah ketua utama negara yang memerintah berdasarkan peruntukan dalam perlembagaan.", en: "The Yang di-Pertuan Agong is the supreme head of state who reigns according to the provisions in the constitution." }
  },
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'true_false',
    question: { ms: "Di Malaysia, kuasa perundangan terletak sepenuhnya pada Yang di-Pertuan Agong.", en: "In Malaysia, legislative power lies solely with the Yang di-Pertuan Agong." },
    answer: "False",
    explanation: { ms: "Salah. Kuasa perundangan terletak pada Parlimen, yang terdiri daripada Yang di-Pertuan Agong, Dewan Rakyat, dan Dewan Negara.", en: "Incorrect. Legislative power lies with the Parliament, which consists of the Yang di-Pertuan Agong, the Dewan Rakyat, and the Dewan Negara." }
  },
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'fill_in_the_blank',
    question: { ms: "Pilihan raya umum di Malaysia diadakan setiap ______ tahun.", en: "General elections in Malaysia are held every ______ years." },
    answer: "lima",
    explanation: { ms: "Sistem demokrasi berparlimen di Malaysia mengamalkan pilihan raya umum yang diadakan sekurang-kurangnya sekali dalam tempoh lima tahun untuk memilih wakil rakyat.", en: "The parliamentary democracy system in Malaysia practices general elections held at least once every five years to elect people's representatives." }
  },
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'mcq',
    question: { ms: "Apakah badan yang bertanggungjawab menjalankan kuasa eksekutif di Malaysia?", en: "Which body is responsible for exercising executive power in Malaysia?" },
    options: [
      { ms: "Parlimen", en: "Parliament" },
      { ms: "Mahkamah", en: "The Judiciary" },
      { ms: "Kabinet", en: "The Cabinet" }
    ],
    answer: "Kabinet",
    explanation: { ms: "Kuasa eksekutif dilaksanakan oleh Kabinet (Jemaah Menteri) yang diketuai oleh Perdana Menteri.", en: "Executive power is exercised by the Cabinet (Jemaah Menteri) which is led by the Prime Minister." }
  },
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'mcq',
    question: { ms: "Apakah nama bagi dewan tertinggi dalam sistem Parlimen Malaysia?", en: "What is the name of the upper house in the Malaysian Parliament system?" },
    options: [
        { ms: "Dewan Rakyat", en: "House of Representatives" },
        { ms: "Dewan Negara", en: "Senate" },
        { ms: "Dewan Undangan Negeri", en: "State Legislative Assembly" }
    ],
    answer: "Dewan Negara",
    explanation: { ms: "Parlimen Malaysia terdiri daripada dua dewan, iaitu Dewan Rakyat (dewan rendah) dan Dewan Negara (dewan tinggi).", en: "The Malaysian Parliament consists of two houses, the Dewan Rakyat (lower house) and the Dewan Negara (upper house)." }
  },
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'true_false',
    question: { ms: "Perdana Menteri dilantik oleh rakyat melalui pilihan raya secara langsung.", en: "The Prime Minister is directly elected by the people through elections." },
    answer: "False",
    explanation: { ms: "Salah. Perdana Menteri dilantik oleh Yang di-Pertuan Agong daripada kalangan ahli Dewan Rakyat yang pada hemat baginda mendapat kepercayaan majoriti ahli dewan.", en: "Incorrect. The Prime Minister is appointed by the Yang di-Pertuan Agong from among the members of the Dewan Rakyat who, in his judgment, is likely to command the confidence of the majority of the members of that House." }
  },
  {
    topic: { ms: "Bab 3: Raja Berperlembagaan & Demokrasi Berparlimen", en: "Chapter 3: Constitutional Monarchy & Parliamentary Democracy" },
    type: 'fill_in_the_blank',
    question: { ms: "Badan yang bertanggungjawab untuk mengendalikan pilihan raya di Malaysia ialah ______.", en: "The body responsible for conducting elections in Malaysia is the ______." },
    answer: "Suruhanjaya Pilihan Raya",
    explanation: { ms: "Suruhanjaya Pilihan Raya (SPR) adalah badan bebas yang diwujudkan di bawah Perlembagaan Persekutuan untuk mentadbir dan menguruskan pilihan raya di Malaysia.", en: "The Election Commission (EC) is an independent body established under the Federal Constitution to administer and manage elections in Malaysia." }
  },
];