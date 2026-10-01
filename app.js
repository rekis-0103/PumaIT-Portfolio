(function () {
  'use strict';

  const translations = {
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'hero.name': 'Rekishii Lucy',
      'hero.role': 'Informatics Student at President University & Software Developer',
      'hero.bio': 'Informatics student at President University with a background in Software Engineering from SMK Telekomunikasi Telesandi. I enjoy building software projects, working with databases and backend systems, and learning about emerging technologies, especially in software development and AI.',

      'sec.experience': 'Experience',
      'sec.projects': 'Projects',
      'sec.education': 'Education',
      'sec.skills': 'Skills',
      'sec.contact': 'Get in Touch',

      'exp.role': 'IT Division — Intern',
      'exp.company': 'PT. Waindo Specterra',
      'exp.date': '2025',
      'exp.b1': 'Developed an integrated e-recruitment and company profile website during my internship at PT Waindo Specterra.',
      'exp.b2': 'Built end-to-end features including job vacancy management, online job applications, interview scheduling, and applicant status management.',
      'exp.b3': 'Collaborated directly with the IT team and internal users to translate requirements into reliable web modules.',

      'p1.name': 'Company Profile & E-Recruitment System',
      'p1.tag': 'Internship • 2025',
      'p1.desc': 'Developed an e-recruitment and company profile website during my internship at PT Waindo Specterra. The project included a company profile, job vacancy management, job applications, interview scheduling, and applicant status management.',

      'p2.name': 'Web-Based Food Ordering System',
      'p2.tag': 'SMK Telesandi Project',
      'p2.desc': 'Developed a web-based food ordering system as a school project with a focus on managing food menus, customer orders, and the ordering process. Worked on the system\'s features and interface as part of a project-based development process.',

      'p3.name': 'Desktop Food Ordering System (Restoran Desktop)',
      'p3.tag': 'SMK Telesandi Project',
      'p3.desc': 'Desktop food ordering and cashier management application built with Visual Basic .NET and SQL Server as part of the semester 1 school project curriculum.',

      'edu.pu_name': 'President University',
      'edu.pu_year': '2026 – Present',
      'edu.pu_degree': 'Bachelor of Science in Informatics',
      'edu.pu_desc': 'Currently pursuing undergraduate studies in Informatics with an emphasis on software engineering, algorithms, and artificial intelligence.',

      'edu.smk_name': 'SMK Telekomunikasi Telesandi',
      'edu.smk_year': '2023 – 2026',
      'edu.smk_degree': 'Software Engineering (Rekayasa Perangkat Lunak)',
      'edu.smk_desc': 'Completed vocational education in Software Engineering with rigorous training in web development (PHP, JS), databases (MySQL, SQL Server), desktop software (VB.Net, Java), and team project development.',

      'skills.languages': 'Languages',
      'skills.web': 'Web & Frameworks',
      'skills.db': 'Databases & Tools',
      'skills.soft': 'Soft Skills',
      'skills.soft_val': 'Problem Solving, Teamwork, Time Management, Attention to Detail',

      'contact.email_label': 'Student Email',
      'contact.phone_label': 'WhatsApp / Phone',
      'contact.github_label': 'GitHub',
      'contact.linkedin_label': 'LinkedIn',
      'contact.copy': 'Copy',
      'contact.copied': 'Copied!',

      'footer.text': '© 2026 Rekishii Lucy. Built with HTML, CSS & JavaScript.',
      'footer.top': 'Back to top ↑'
    },

    id: {
      'nav.about': 'Tentang',
      'nav.experience': 'Pengalaman',
      'nav.projects': 'Proyek',
      'nav.education': 'Pendidikan',
      'nav.skills': 'Keahlian',
      'nav.contact': 'Kontak',

      'hero.name': 'Rekishii Lucy',
      'hero.role': 'Mahasiswa Informatika di President University & Software Developer',
      'hero.bio': 'Mahasiswa S1 Informatika di President University dengan latar belakang Rekayasa Perangkat Lunak dari SMK Telekomunikasi Telesandi. Saya gemar membangun proyek perangkat lunak, mengelola basis data dan sistem backend, serta mempelajari teknologi baru, terutama dalam software development dan AI.',

      'sec.experience': 'Pengalaman Kerja & Magang',
      'sec.projects': 'Proyek Pilihan',
      'sec.education': 'Riwayat Pendidikan',
      'sec.skills': 'Keahlian',
      'sec.contact': 'Hubungi Saya',

      'exp.role': 'Divisi IT — Intern',
      'exp.company': 'PT. Waindo Specterra',
      'exp.date': '2025',
      'exp.b1': 'Mengembangkan website company profile dan sistem e-recruitment terintegrasi selama masa magang di PT Waindo Specterra.',
      'exp.b2': 'Membangun fitur pengelolaan lowongan kerja, formulir lamaran online, penjadwalan wawancara, dan pelacakan status pelamar.',
      'exp.b3': 'Berkolaborasi langsung dengan tim IT dan pengguna internal untuk memastikan fungsionalitas dan keandalan sistem.',

      'p1.name': 'Company Profile & E-Recruitment System',
      'p1.tag': 'Magang Industri • 2025',
      'p1.desc': 'Mengembangkan website company profile dan sistem e-recruitment selama magang di PT Waindo Specterra. Mencakup profil perusahaan, manajemen lowongan pekerjaan, pengajuan lamaran, jadwal interview, dan pemantauan status kandidat.',

      'p2.name': 'Web-Based Food Ordering System',
      'p2.tag': 'Proyek SMK Telesandi',
      'p2.desc': 'Mengembangkan sistem pemesanan makanan berbasis web sebagai proyek sekolah, berfokus pada manajemen menu makanan, pesanan pelanggan, dan alur pemrosesan pesanan.',

      'p3.name': 'Desktop Food Ordering System (Restoran Desktop)',
      'p3.tag': 'Proyek SMK Telesandi',
      'p3.desc': 'Aplikasi desktop kasir dan pemesanan makanan restoran yang dibangun menggunakan Visual Basic .NET dan basis data SQL Server untuk bahan kerja proyek semester 1.',

      'edu.pu_name': 'President University',
      'edu.pu_year': '2026 – Sekarang',
      'edu.pu_degree': 'S1 Informatika (Bachelor of Science in Informatics)',
      'edu.pu_desc': 'Menempuh studi sarjana Informatika dengan fokus pada rekayasa perangkat lunak, algoritma pemrograman, dan kecerdasan buatan.',

      'edu.smk_name': 'SMK Telekomunikasi Telesandi',
      'edu.smk_year': '2023 – 2026',
      'edu.smk_degree': 'Rekayasa Perangkat Lunak (Software Engineering)',
      'edu.smk_desc': 'Menyelesaikan pendidikan vokasi Rekayasa Perangkat Lunak dengan pelatihan intensif dalam pemrograman web (PHP, JS), basis data (MySQL, SQL Server), aplikasi desktop (VB.Net, Java), serta pengerjaan proyek tim.',

      'skills.languages': 'Bahasa Pemrograman',
      'skills.web': 'Web & Framework',
      'skills.db': 'Basis Data & Tools',
      'skills.soft': 'Kemampuan Interpersonal',
      'skills.soft_val': 'Problem Solving, Kerja Sama Tim, Manajemen Waktu, Ketelitian',

      'contact.email_label': 'Email Mahasiswa',
      'contact.phone_label': 'WhatsApp / Telepon',
      'contact.github_label': 'GitHub',
      'contact.linkedin_label': 'LinkedIn',
      'contact.copy': 'Salin',
      'contact.copied': 'Tersalin!',

      'footer.text': '© 2026 Rekishii Lucy. Dibuat dengan HTML, CSS & JavaScript.',
      'footer.top': 'Kembali ke atas ↑'
    }
  };

  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  function setupCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toastNotice');

    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-copy');
        if (!text) return;

        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = currentLang === 'id' ? 'Tersalin!' : 'Copied!';
          btn.style.color = 'var(--blue-primary)';

          if (toast) {
            toast.textContent = currentLang === 'id' ? `Disalin: ${text}` : `Copied: ${text}`;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
          }

          setTimeout(() => {
            btn.textContent = currentLang === 'id' ? 'Salin' : 'Copy';
            btn.style.color = '';
          }, 1800);
        });
      });
    });
  }

  function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navLinks');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });

    applyLanguage(currentLang);
    setupCopyButtons();
    setupMobileMenu();
  });
})();
