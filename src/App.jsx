import React, { useState, useEffect, useRef } from 'react';
import {  
  Moon, Sun, Globe, Download, ArrowRight, ExternalLink,  
  Mail, Code, Terminal, Layout, PenTool, Lightbulb, 
  Award, PlayCircle, UserCheck, BarChart3, Wrench, Briefcase, GraduationCap,
  ChevronLeft, ChevronRight, X
} from 'lucide-react';

// --- CUSTOM ICONS ---
const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
);
const LinkedinIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.35a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/></svg>
);
const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const ChevronUpIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"></polyline></svg>
);
const UsersIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

// Typewriter Component
const Typewriter = ({ texts, speed = 100, delay = 2000, isDark }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentDisplayedText, setCurrentDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const fullText = texts[currentTextIndex];
    let timer;
    if (!isDeleting) {
      if (currentDisplayedText.length < fullText.length) {
        timer = setTimeout(() => setCurrentDisplayedText(fullText.slice(0, currentDisplayedText.length + 1)), speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (currentDisplayedText.length > 0) {
        timer = setTimeout(() => setCurrentDisplayedText(fullText.slice(0, currentDisplayedText.length - 1)), speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => clearTimeout(timer);
  }, [currentDisplayedText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span>
      {currentDisplayedText}
      <span className={`animate-pulse ${isDark ? 'text-[#B8F36B]' : 'text-[#a3e635]'}`}>|</span>
    </span>
  );
};

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      teaching: "Teaching",
      journey: "Journey",
      certificates: "Certificates",
      contact: "Contact",
      letsTalk: "Let's Talk"
    },
    hero: {
      section: "01. HELLO, I'M ARINA",
      tagline: "I make coding and data easier to understand.",
      description: "An aspiring Coding Tutor and Data Analyst with a background in Information Systems. I enjoy helping learners understand programming step by step, and I build data-driven projects that solve real problems.",
      exploreBtn: "Explore My Work",
      downloadCv: "Download CV",
    },
    about: {
      section: "02. ABOUT ME",
      heading: "Building technology, creating meaningful impact.",
      paragraphs: [
        "I’m an Information Systems graduate and an Informatics teacher candidate with a passion for technology, education, and digital innovation.",
        "My journey started from exploring how technology can solve problems and create useful solutions. Along the way, I discovered that sharing knowledge and helping others grow is just as meaningful as building technology itself.",
        "I believe technology is not only about tools and systems, but also about people, creativity, and continuous learning."
      ],
      cards: [
        {
          title: "Technology Explorer",
          desc: "I enjoy discovering how technology can be applied to create useful and meaningful solutions.",
          experience: "Exploring digital projects, software development, and technology-based solutions.",
          icon: <Lightbulb size={28} strokeWidth={1.5} />
        },
        {
          title: "Creative Problem Solver",
          desc: "I approach challenges by combining logical thinking, creativity, and continuous improvement.",
          experience: "Building projects and finding practical solutions through technology.",
          icon: <Code size={28} strokeWidth={1.5} />
        },
        {
          title: "Lifelong Learner",
          desc: "I believe growth comes from curiosity, practice, and the willingness to keep learning.",
          experience: "Continuously developing skills in technology, education, and digital innovation.",
          icon: <UsersIcon size={28} strokeWidth={1.5} />
        }
      ]
    },
    skills: {
      section: "03. TECHNICAL SKILLS",
      heading: "Tools I Build, Analyze, and Teach.",
      description: "As an Information Systems graduate and Informatics teacher candidate, I develop skills across software development, data analysis, digital design, and educational technology. I use these tools to create practical solutions, visualize information, and support meaningful technology learning experiences.",
      additionalToolsTitle: "Additional Tools",
      additionalTools: ["OrangeHRM", "Mailchimp", "SEMrush"],
      categories: [
        {
          name: "Development & Programming",
          desc: "Building digital solutions through programming fundamentals, web development, and computational thinking tools.",
          icon: <Code size={24} />,
          images: [
            { src: "/python.png", alt: "Python" },
            { src: "/html.png", alt: "HTML" },
            { src: "/css.png", alt: "CSS" },
            { src: "/javascript.png", alt: "JavaScript" },
            { src: "/mysql.png", alt: "MySQL" },
            { src: "/anaconda.png", alt: "Anaconda" },
            { src: "/scratch.png", alt: "Scratch" },
            { src: "/blockly.png", alt: "Blockly" },
          ]
        },
        {
          name: "Data & Visualization",
          desc: "Transforming data into meaningful insights through analysis, visualization, and reporting tools.",
          icon: <BarChart3 size={24} />,
          images: [
            { src: "/power-bi.png", alt: "Power BI" },
            { src: "/looker.png", alt: "Looker Studio" },
            { src: "/excel.png", alt: "Excel" },
            { src: "/gsuite.png", alt: "Google Sheets" },
            { src: "/colab.png", alt: "Google Colab" },
            { src: "/python.png", alt: "Pandas" },
            { src: "/python.png", alt: "Matplotlib" },
          ]
        },
        {
          name: "Teaching & Learning Technology",
          desc: "Supporting digital learning experiences through interactive tools and educational technology platforms.",
          icon: <GraduationCap size={24} />,
          images: [
            { src: "/scratch.png", alt: "Scratch" },
            { src: "/blockly.png", alt: "Blockly" },
            { src: "/gsuite.png", alt: "Google Workspace" },
            { src: "/gsuite.png", alt: "Google Classroom" },
            { src: "/excel.png", alt: "Spreadsheet" },
            { src: "/power-point.png", alt: "PowerPoint" },
          ]
        },
        {
          name: "Design & Productivity",
          desc: "Creating digital content, organizing workflows, and designing engaging learning materials.",
          icon: <Wrench size={24} />,
          images: [
            { src: "/figma.png", alt: "Figma" },
            { src: "/canva.png", alt: "Canva" },
            { src: "/capcut.png", alt: "CapCut" },
            { src: "/notion.png", alt: "Notion" },
            { src: "/trello.png", alt: "Trello" },
            { src: "/word.png", alt: "Word" },
          ]
        }
      ]
    },
    projects: {
      section: "04. FEATURED PROJECTS",
      heading: "Projects I've explored and built.",
      subtext: "Showcasing real projects, design works, data analytics, and educational media.",
      items: [
        {
          title: "Worklance",
          category: "UI/UX DESIGN | WEB CONCEPT",
          desc: "A freelance platform concept designed to connect clients and freelancers. This project includes business idea development, user flow design, and UI/UX prototyping using Figma.",
          tags: ["Figma"],
          img: "/Worklance.png",
          buttons: [
            { label: "View UI/UX", url: "https://www.figma.com/proto/sCNfUh3zoUjFgKkC2Oih9z/Worklance", type: "ui" },
            { label: "Watch Product Video", url: "https://www.youtube.com/watch?v=n-ihb3nJORQ", type: "video" }
          ]
        },
        {
          title: "X-Wallet",
          category: "MOBILE APPLICATION | UI/UX DESIGN",
          desc: "A digital wallet application concept that supports online and offline transactions, NFC payments, investment features, and foreign currency transactions.",
          tags: ["UI/UX Design", "Agile Method"],
          img: "/Perancangan-X-Wallet.png",
          buttons: [
            { label: "View Project Report", url: "https://drive.google.com/file/d/1VgVyRn778CWL7dLSIhxUWsA_2urSojAY/view", type: "report" }
          ]
        },
        {
          title: "Academic Data Dashboard",
          category: "DATA ANALYTICS",
          desc: "A data visualization project developed to analyze academic information and transform raw data into meaningful dashboards for decision making.",
          tags: ["Power BI", "Data Visualization"],
          img: "/Data-Academic.png",
          buttons: [
            { label: "View Dashboard", url: "#", type: "dashboard" }
          ]
        },
        {
          title: "Power BI Learning Module",
          category: "EDUCATIONAL CONTENT | DATA ANALYTICS",
          desc: "A learning module designed to introduce students to data visualization concepts using Power BI. The module combines theoretical explanation with practical exercises.",
          tags: ["Power BI", "Canva"],
          img: "/Modul-PowerBi.png",
          buttons: [
            { label: "View Module", url: "https://canva.link/34r6ezbuyzwytxf", type: "module" }
          ]
        },
        {
          title: "Chamber of Desire",
          category: "WEB DEVELOPMENT",
          desc: "An online flower shop website developed with responsive design principles. The website provides product information and ordering features through a simple user interface.",
          tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          img: "/Chamber.png",
          buttons: [
            { label: "Live Demo", url: "https://arinashlh.github.io/", type: "demo" }
          ]
        },
        {
          title: "BEM Senada Data Analysis",
          category: "DATA ANALYSIS | ORGANIZATION",
          desc: "A data analysis project for organizational evaluation using collected organizational data to support reporting and decision making.",
          tags: ["Data Analysis", "Visualization"],
          img: "/Data-BEM-Senada.png",
          buttons: [
            { label: "View Report", url: "#", type: "report" }
          ]
        },
        {
          title: "Flight Prediction Analysis",
          category: "MACHINE LEARNING | DATA ANALYSIS",
          desc: "A data analysis project that explores flight prediction using statistical analysis and predictive modeling approaches.",
          tags: ["Python", "Data Analysis"],
          img: "/flight-prediction.png",
          buttons: [
            { label: "View Project", url: "https://drive.google.com/file/d/1My4ElmJ75TFSUyHBEUAbmpcgyJGs3181/view", type: "report" }
          ]
        },
        {
          title: "E-Portfolio PPG",
          category: "WEB DEVELOPMENT | EDUCATION",
          desc: "A digital portfolio website developed to document learning activities, teaching experiences, and professional development as an Informatics educator.",
          tags: ["HTML", "CSS", "JavaScript"],
          img: "/Portofolio-PPG.png",
          buttons: [
            { label: "Live Demo", url: "https://e-portofolio-arina.vercel.app/", type: "demo" }
          ]
        },
        {
          title: "Ular Tangga Sorting",
          category: "EDUCATIONAL GAME",
          desc: "An interactive educational game that introduces sorting algorithms through a gamification approach to make programming concepts easier to understand.",
          tags: ["JavaScript", "Educational Media"],
          img: "/Ular-tangga.png",
          buttons: [
            { label: "Live Demo", url: "https://ular-tangga-sorting.vercel.app/", type: "demo" }
          ]
        },
        {
          title: "Quiz Data Cleaning",
          category: "INTERACTIVE LEARNING MEDIA",
          desc: "An interactive quiz platform designed to help students understand data cleaning concepts through engaging learning activities.",
          tags: ["Web Development", "Educational Technology"],
          img: "/Quiz-Data-cleaning.png",
          buttons: [
            { label: "Live Demo", url: "https://lkpd-data-clean.vercel.app/", type: "demo" }
          ]
        }
      ]
    },
    teaching: {
      section: "05. TEACHING APPROACH",
      heading: "How I Teach",
      subtitle: "I focus on making coding concepts clear, practical, and enjoyable for learners at any level.",
      cards: [
        {
          title: "1. Understand the Concept",
          desc: "Start with the \"why\" before the \"how\". We discuss the idea in simple terms and relate it to real life examples.",
          icon: "lightbulb"
        },
        {
          title: "2. Learn by Building",
          desc: "Practice through small projects and exercises. You'll write real code, make mistakes, and learn how to fix them.",
          icon: "code"
        },
        {
          title: "3. Grow with Support",
          desc: "Ask questions anytime. I provide feedback and explanations until you're confident to build on your own.",
          icon: "users"
        }
      ]
    },
    journey: {
      section: "06. MY JOURNEY",
      heading: "Experience & Education.",
      teaching: "Professional Experience",
      education: "Education",
      timeline: [
        {
          role: "Informatics Teacher (Practicum)",
          org: "SMA Negeri 24 Bandung",
          date: "Ongoing",
          desc: "Teaching Phase E (Grade X) students using the Kurikulum Merdeka. Responsibilities include designing interactive lesson plans, guiding students in understanding computational logic, and introducing basic algorithms through hands-on practice, resulting in improved student enthusiasm.",
          type: "teaching"
        },
        {
          role: "Mathematics Teaching Volunteer",
          org: "Taman Ilmu (Grades 1-3)",
          date: "Sep 2025 – Feb 2026",
          desc: "Guided 1st to 3rd-grade students in learning mathematics. Developed and implemented engaging visual methods and educational games (gamification) to build their basic logical foundation, making math highly enjoyable and less intimidating.",
          type: "teaching"
        },
        {
          role: "Digital Marketing Mentor",
          org: "NF Academy",
          date: "Feb 2024 – Jul 2024",
          desc: "Mentored students based on structured learning plans. Verified activity logbooks, hosted weekly sharing sessions to track progress, and provided constructive feedback on digital campaigns to ensure mentees achieved their learning objectives.",
          type: "teaching"
        },
        {
          role: "Teaching Assistant",
          org: "STT Terpadu Nurul Fikri",
          date: "Sep 2023 – Jan 2024",
          desc: "Assisted in Statistics, Probability, and Computer Mathematics courses. Evaluated assignments, prepared supplementary materials, and conducted mentoring sessions that successfully increased student engagement by 20% and improved overall performance by 25%.",
          type: "teaching"
        },
        {
          role: "PPG Prajabatan Informatika",
          org: "Universitas Pendidikan Indonesia",
          date: "Ongoing",
          desc: "Professional teacher education program focusing on modern pedagogical methods, innovative learning designs, and effective classroom management for informatics education.",
          type: "education"
        },
        {
          role: "Bachelor of Information Systems",
          org: "STT Terpadu Nurul Fikri",
          date: "Sep 2019 – Sep 2023",
          desc: "Specialized in Enterprise Information Systems, covering business process analysis, IT governance, and ERP design. Actively involved in campus organizations (BEM & Senada).",
          gpa: "GPA: 3.97 / 4.00",
          type: "education"
        }
      ]
    },
    certificates: {
      section: "07. CERTIFICATES",
      heading: "Continuous Learning.",
      description: "I actively participate in training programs to improve my technical and teaching skills.",
      viewDrive: "View All Certificates on Drive",
      items: [
        {
          title: "Basic Data Visualization - Dicoding",
          desc: "Learned the foundational principles of data visualization, exploratory data analysis, and how to effectively communicate data insights using modern tools."
        },
        {
          title: "Foundation of AI and Life Skills - Orbit Future Academy",
          desc: "Gained an understanding of fundamental Artificial Intelligence concepts, ethical considerations in AI, and essential life skills for adapting in the digital era."
        },
        {
          title: "Digital Marketing Academy - NF Computer",
          desc: "Mastered practical digital marketing strategies including SEO fundamentals, social media management, targeted campaigns, and content planning."
        }
      ]
    },
    friendlyBanner: {
      heading: "A Friendly and Practical Learning Experience",
      desc: "Whether you're a complete beginner or want to strengthen your fundamentals, I'll guide you step by step at your own pace.",
      list: [
        { num: '1', emoji: '🧠', text: 'Stay curious', colorClass: 'text-[#4ade80]' },
        { num: '2', emoji: '☕', text: 'Practice regularly', colorClass: 'text-[#d1d5db]' },
        { num: '3', emoji: '💡', text: 'Don\'t be afraid to ask', colorClass: 'text-[#facc15]' },
        { num: '4', emoji: '🔵', text: 'Build something you enjoy', colorClass: 'text-[#60a5fa]' },
        { num: '5', emoji: '🚀', text: 'Keep going!', colorClass: 'text-[#d1d5db]' }
      ]
    },
    contact: {
      section: "08. CONTACT",
      heading: "Let's Make Coding Less Intimidating.",
      description: "I'm open to tutoring opportunities, collaborations, or just a friendly chat about tech and education.",
      btnPrimary: "Send a Message",
      btnSecondary: "Download Resume",
      info: [
        { label: "Email", value: "arinasholiha@gmail.com", icon: "mail", link: "mailto:arinasholiha@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/arina-sholiha", icon: "linkedin", link: "https://www.linkedin.com/in/arina-sholiha" },
        { label: "GitHub", value: "github.com/arinashlh", icon: "github", link: "https://github.com/arinashlh" },
        { label: "Location", value: "Indonesia (Open to Remote)", icon: "location" }
      ]
    },
    buildTogether: {
      tag: "LET'S BUILD TOGETHER",
      heading1: "Ready to start",
      heading2: "your coding journey?",
      desc: "Feel free to reach out. I'd love to help you learn, build, and grow with code.",
      btn: "Let's Talk"
    },
    footer: {
      copyright: "Built with React and lots of ☕."
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      teaching: "Mengajar",
      journey: "Perjalanan",
      certificates: "Sertifikat",
      contact: "Kontak",
      letsTalk: "Mari Berdiskusi"
    },
    hero: {
      section: "01. HALO, SAYA ARINA",
      tagline: "Saya membuat coding dan data lebih mudah dipahami.",
      description: "Calon Tutor Coding dan Data Analyst dengan latar belakang Sistem Informasi. Saya senang mendampingi pemula memahami pemrograman secara bertahap dan membangun proyek berbasis data yang memecahkan masalah nyata.",
      exploreBtn: "Lihat Proyek",
      downloadCv: "Unduh CV",
    },
    about: {
      section: "02. TENTANG SAYA",
      heading: "Membangun teknologi, menciptakan dampak bermakna.",
      paragraphs: [
        "Saya adalah lulusan Sistem Informasi dan calon guru Informatika yang memiliki minat mendalam pada teknologi, pendidikan, dan inovasi digital.",
        "Perjalanan saya bermula dari eksplorasi bagaimana teknologi dapat memecahkan masalah dan menciptakan solusi yang berguna. Seiring waktu, saya menyadari bahwa berbagi pengetahuan dan membantu orang lain berkembang sama bermaknanya dengan membangun teknologi itu sendiri.",
        "Saya percaya bahwa teknologi bukan sekadar alat dan sistem, melainkan juga tentang manusia, kreativitas, dan pembelajaran berkelanjutan."
      ],
      cards: [
        {
          title: "Technology Explorer",
          desc: "Saya menikmati penemuan bagaimana teknologi dapat diterapkan untuk menciptakan solusi yang berguna dan bermakna.",
          experience: "Mengeksplorasi proyek digital, pengembangan perangkat lunak, dan solusi berbasis teknologi.",
          icon: <Lightbulb size={28} strokeWidth={1.5} />
        },
        {
          title: "Creative Problem Solver",
          desc: "Saya mendekati tantangan dengan menggabungkan pemikiran logis, kreativitas, dan peningkatan berkelanjutan.",
          experience: "Membangun proyek dan menemukan solusi praktis melalui teknologi.",
          icon: <Code size={28} strokeWidth={1.5} />
        },
        {
          title: "Lifelong Learner",
          desc: "I believe growth comes from curiosity, practice, and the willingness to keep learning.",
          experience: "Terus mengembangkan keahlian di bidang teknologi, pendidikan, dan inovasi digital.",
          icon: <UsersIcon size={28} strokeWidth={1.5} />
        }
      ]
    },
    skills: {
      section: "03. KEAHLIAN TEKNIS",
      heading: "Alat yang Saya Bangun, Analisis, dan Ajarkan.",
      description: "Sebagai lulusan Sistem Informasi dan calon guru Informatika, saya mengembangkan keahlian di bidang pengembangan perangkat lunak, analisis data, desain digital, dan teknologi pendidikan. Saya menggunakan perangkat ini untuk menciptakan solusi praktis, memvisualisasikan informasi, dan mendukung pengalaman belajar teknologi yang bermakna.",
      additionalToolsTitle: "Alat Tambahan",
      additionalTools: ["OrangeHRM", "Mailchimp", "SEMrush"],
      categories: [
        {
          name: "Development & Programming",
          desc: "Membangun solusi digital melalui dasar-dasar pemrograman, pengembangan web, dan alat berpikir komputasional.",
          icon: <Code size={24} />,
          images: [
            { src: "/python.png", alt: "Python" },
            { src: "/html.png", alt: "HTML" },
            { src: "/css.png", alt: "CSS" },
            { src: "/javascript.png", alt: "JavaScript" },
            { src: "/mysql.png", alt: "MySQL" },
            { src: "/anaconda.png", alt: "Anaconda" },
            { src: "/scratch.png", alt: "Scratch" },
            { src: "/blockly.png", alt: "Blockly" },
          ]
        },
        {
          name: "Data & Visualization",
          desc: "Mengubah data menjadi wawasan yang bermakna melalui analisis, visualisasi, dan alat pelaporan.",
          icon: <BarChart3 size={24} />,
          images: [
            { src: "/power-bi.png", alt: "Power BI" },
            { src: "/looker.png", alt: "Looker Studio" },
            { src: "/excel.png", alt: "Excel" },
            { src: "/gsuite.png", alt: "Google Sheets" },
            { src: "/colab.png", alt: "Google Colab" },
            { src: "/python.png", alt: "Pandas" },
            { src: "/python.png", alt: "Matplotlib" },
          ]
        },
        {
          name: "Teaching & Learning Technology",
          desc: "Mendukung pengalaman belajar digital melalui alat interaktif dan platform teknologi pendidikan.",
          icon: <GraduationCap size={24} />,
          images: [
            { src: "/scratch.png", alt: "Scratch" },
            { src: "/blockly.png", alt: "Blockly" },
            { src: "/gsuite.png", alt: "Google Workspace" },
            { src: "/gsuite.png", alt: "Google Classroom" },
            { src: "/excel.png", alt: "Spreadsheet" },
            { src: "/power-point.png", alt: "PowerPoint" },
          ]
        },
        {
          name: "Design & Productivity",
          desc: "Membuat konten digital, mengorganisasi alur kerja, dan merancang materi pembelajaran yang menarik.",
          icon: <Wrench size={24} />,
          images: [
            { src: "/figma.png", alt: "Figma" },
            { src: "/canva.png", alt: "Canva" },
            { src: "/capcut.png", alt: "CapCut" },
            { src: "/notion.png", alt: "Notion" },
            { src: "/trello.png", alt: "Trello" },
            { src: "/word.png", alt: "Word" },
          ]
        }
      ]
    },
    projects: {
      section: "04. PROYEK UNGGULAN",
      heading: "Proyek yang Saya Eksplorasi dan Bangun.",
      subtext: "Menampilkan proyek nyata, karya desain, analisis data, dan media edukasi.",
      items: [
        {
          title: "Worklance",
          category: "UI/UX DESIGN | WEB CONCEPT",
          desc: "Konsep platform freelance untuk menghubungkan klien dan freelancer. Mencakup pengembangan ide bisnis, desain user flow, dan prototyping UI/UX menggunakan Figma.",
          tags: ["Figma"],
          img: "/Worklance.png",
          buttons: [
            { label: "View UI/UX", url: "https://www.figma.com/proto/sCNfUh3zoUjFgKkC2Oih9z/Worklance", type: "ui" },
            { label: "Watch Product Video", url: "https://www.youtube.com/watch?v=n-ihb3nJORQ", type: "video" }
          ]
        },
        {
          title: "X-Wallet",
          category: "MOBILE APPLICATION | UI/UX DESIGN",
          desc: "Konsep aplikasi dompet digital untuk transaksi online/offline, pembayaran NFC, fitur investasi, dan mata uang asing dengan fokus pada UX & metodologi Agile.",
          tags: ["UI/UX Design", "Agile Method"],
          img: "/Perancangan-X-Wallet.png",
          buttons: [
            { label: "View Project Report", url: "https://drive.google.com/file/d/1VgVyRn778CWL7dLSIhxUWsA_2urSojAY/view", type: "report" }
          ]
        },
        {
          title: "Academic Data Dashboard",
          category: "DATA ANALYTICS",
          desc: "Proyek visualisasi data yang dikembangkan untuk menganalisis informasi akademik dan mengubah data mentah menjadi dashboard interaktif.",
          tags: ["Power BI", "Data Visualization"],
          img: "/Data-Academic.png",
          buttons: [
            { label: "View Dashboard", url: "#", type: "dashboard" }
          ]
        },
        {
          title: "Power BI Learning Module",
          category: "EDUCATIONAL CONTENT | DATA ANALYTICS",
          desc: "Modul pembelajaran yang dirancang untuk memperkenalkan konsep visualisasi data menggunakan Power BI dengan kombinasi teori dan latihan praktis.",
          tags: ["Power BI", "Canva"],
          img: "/Modul-PowerBi.png",
          buttons: [
            { label: "View Module", url: "https://canva.link/34r6ezbuyzwytxf", type: "module" }
          ]
        },
        {
          title: "Chamber of Desire",
          category: "WEB DEVELOPMENT",
          desc: "Website toko bunga online yang dikembangkan dengan prinsip responsive design, menyediakan informasi produk dan fitur pemesanan melalui antarmuka sederhana.",
          tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          img: "/Chamber.png",
          buttons: [
            { label: "Live Demo", url: "https://arinashlh.github.io/", type: "demo" }
          ]
        },
        {
          title: "BEM Senada Data Analysis",
          category: "DATA ANALYSIS | ORGANIZATION",
          desc: "Proyek analisis data untuk evaluasi organisasi menggunakan data yang dikumpulkan guna mendukung pembuatan laporan dan pengambilan keputusan.",
          tags: ["Data Analysis", "Visualization"],
          img: "/Data-BEM-Senada.png",
          buttons: [
            { label: "View Report", url: "#", type: "report" }
          ]
        },
        {
          title: "Flight Prediction Analysis",
          category: "MACHINE LEARNING | DATA ANALYSIS",
          desc: "Proyek analisis data yang mengeksplorasi prediksi penerbangan menggunakan analisis statistik dan pendekatan pemodelan prediktif.",
          tags: ["Python", "Data Analysis"],
          img: "/flight-prediction.png",
          buttons: [
            { label: "View Project", url: "https://drive.google.com/file/d/1My4ElmJ75TFSUyHBEUAbmpcgyJGs3181/view", type: "report" }
          ]
        },
        {
          title: "E-Portfolio PPG",
          category: "WEB DEVELOPMENT | EDUCATION",
          desc: "Website portofolio digital yang dikembangkan untuk mendokumentasikan kegiatan pembelajaran, pengalaman mengajar, dan pengembangan profesional pendidik.",
          tags: ["HTML", "CSS", "JavaScript"],
          img: "/Portofolio-PPG.png",
          buttons: [
            { label: "Live Demo", url: "https://e-portofolio-arina.vercel.app/", type: "demo" }
          ]
        },
        {
          title: "Ular Tangga Sorting",
          category: "EDUCATIONAL GAME",
          desc: "Game edukasi interaktif yang mengenalkan algoritma sorting melalui pendekatan gamifikasi agar konsep pemrograman lebih mudah dipahami.",
          tags: ["JavaScript", "Educational Media"],
          img: "/Ular-tangga.png",
          buttons: [
            { label: "Live Demo", url: "https://ular-tangga-sorting.vercel.app/", type: "demo" }
          ]
        },
        {
          title: "Quiz Data Cleaning",
          category: "INTERACTIVE LEARNING MEDIA",
          desc: "Platform kuis interaktif yang dirancang untuk membantu siswa memahami konsep pembersihan data (data cleaning) melalui aktivitas belajar yang menarik.",
          tags: ["Web Development", "Educational Technology"],
          img: "/Quiz-Data-cleaning.png",
          buttons: [
            { label: "Live Demo", url: "https://lkpd-data-clean.vercel.app/", type: "demo" }
          ]
        }
      ]
    },
    teaching: {
      section: "05. PENDEKATAN MENGAJAR",
      heading: "Cara Saya Mengajar",
      subtitle: "Saya berfokus pada penyampaian konsep coding yang jelas, praktis, dan menyenangkan untuk pelajar di semua tingkat.",
      cards: [
        {
          title: "1. Pahami Konsepnya",
          desc: "Mulai dari \"mengapa\" sebelum \"bagaimana\". Kita membahas ide dengan istilah sederhana dan mengaitkannya dengan contoh di dunia nyata.",
          icon: "lightbulb"
        },
        {
          title: "2. Belajar dengan Praktik",
          desc: "Berlatih melalui proyek dan latihan kecil. Anda akan menulis kode asli, membuat kesalahan, dan belajar cara memperbaikinya.",
          icon: "code"
        },
        {
          title: "3. Tumbuh dengan Dukungan",
          desc: "Tanyakan apa saja kapan saja. Saya memberikan umpan balik dan penjelasan sampai Anda percaya diri untuk mandiri.",
          icon: "users"
        }
      ]
    },
    journey: {
      section: "06. PERJALANAN SAYA",
      heading: "Pengalaman & Pendidikan.",
      teaching: "Pengalaman Profesional",
      education: "Pendidikan",
      timeline: [
        {
          role: "Guru Informatika (PPL)",
          org: "SMA Negeri 24 Bandung",
          date: "Sedang berjalan",
          desc: "Mengajar siswa Fase E (Kelas X) menggunakan Kurikulum Merdeka, membimbing logika komputasional.",
          type: "teaching"
        },
        {
          role: "Relawan Pengajar Matematika",
          org: "Taman Ilmu (Kelas 1-3 SD)",
          date: "Sep 2025 – Feb 2026",
          desc: "Mendampingi anak-anak belajar matematika dasar dengan metode visual dan gamifikasi.",
          type: "teaching"
        },
        {
          role: "Mentor Digital Marketing",
          org: "NF Academy",
          date: "Feb 2024 – Jul 2024",
          desc: "Membimbing mentee, memverifikasi logbook, dan memandu sesi sharing kampanye pemasaran digital.",
          type: "teaching"
        },
        {
          role: "Asisten Dosen",
          org: "STT Terpadu Nurul Fikri",
          date: "Sep 2023 – Jan 2024",
          desc: "Mendampingi mata kuliah Statistika, Probabilitas, dan Matematika Komputer.",
          type: "teaching"
        },
        {
          role: "PPG Prajabatan Informatika",
          org: "Universitas Pendidikan Indonesia",
          date: "Sedang berjalan",
          desc: "Pendidikan profesi guru berfokus pada pedagogi modern dan manajemen kelas.",
          type: "education"
        },
        {
          role: "S1 Sistem Informasi",
          org: "STT Terpadu Nurul Fikri",
          date: "Sep 2019 – Sep 2023",
          desc: "Peminatan Enterprise Information Systems. Aktif di organisasi BEM dan Senada.",
          gpa: "IPK: 3.97 / 4.00",
          type: "education"
        }
      ]
    },
    certificates: {
      section: "07. SERTIFIKAT",
      heading: "Pembelajaran Berkelanjutan.",
      description: "Mengikuti berbagai pelatihan untuk meningkatkan kompetensi teknis dan mengajar.",
      viewDrive: "Lihat Semua Sertifikat di Drive",
      items: [
        {
          title: "Basic Data Visualization - Dicoding",
          desc: "Mempelajari prinsip dasar visualisasi data, analisis data eksploratif, dan cara mengomunikasikan wawasan data secara efektif menggunakan berbagai alat."
        },
        {
          title: "Foundation of AI and Life Skills - Orbit Future Academy",
          desc: "Memahami konsep fundamental Kecerdasan Buatan (AI), etika penggunaan AI, serta keterampilan hidup esensial untuk beradaptasi di era digital."
        },
        {
          title: "Akademi Digital Marketing - NFTs Computer",
          desc: "Menguasai strategi pemasaran digital praktis termasuk dasar-dasar SEO, manajemen media sosial, pelaksanaan kampanye, dan perencanaan konten."
        }
      ]
    },
    friendlyBanner: {
      heading: "Pengalaman Belajar yang Ramah dan Praktis",
      desc: "Apakah Anda seorang pemula mutlak atau ingin memperkuat dasar-dasar Anda, saya akan memandu Anda selangkah demi selangkah sesuai ritme Anda.",
      list: [
        { num: '1', emoji: '🧠', text: 'Tetap penasaran', colorClass: 'text-[#4ade80]' },
        { num: '2', emoji: '☕', text: 'Latihan teratur', colorClass: 'text-[#d1d5db]' },
        { num: '3', emoji: '💡', text: 'Jangan ragu bertanya', colorClass: 'text-[#facc15]' },
        { num: '4', emoji: '🔵', text: 'Bangun apa yang Anda suka', colorClass: 'text-[#60a5fa]' },
        { num: '5', emoji: '🚀', text: 'Terus melangkah!', colorClass: 'text-[#d1d5db]' }
      ]
    },
    contact: {
      section: "08. KONTAK",
      heading: "Mari buat belajar coding lebih menyenangkan.",
      description: "Saya terbuka untuk peluang tutor coding, kolaborasi, atau sekadar berbincang santai tentang teknologi dan pendidikan.",
      btnPrimary: "Kirim Pesan",
      btnSecondary: "Unduh Resume",
      info: [
        { label: "Email", value: "arinasholiha@gmail.com", icon: "mail", link: "mailto:arinasholiha@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/arina-sholiha", icon: "linkedin", link: "https://www.linkedin.com/in/arina-sholiha" },
        { label: "GitHub", value: "github.com/arinashlh", icon: "github", link: "https://github.com/arinashlh" },
        { label: "Lokasi", value: "Indonesia (Terbuka untuk Remote)", icon: "location" }
      ]
    },
    buildTogether: {
      tag: "MARI BANGUN BERSAMA",
      heading1: "Siap memulai",
      heading2: "perjalanan coding Anda?",
      desc: "Jangan ragu untuk menghubungi. Saya sangat antusias untuk membantu Anda belajar, berkembang, dan berkreasi dengan kode.",
      btn: "Mari Berdiskusi"
    },
    footer: {
      copyright: "Dibuat dengan React dan banyak ☕."
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [lightboxImg, setLightboxImg] = useState(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = translations[lang] || translations['en']; 

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'en' || savedLang === 'id') setLang(savedLang);
    } catch(e) {}

    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'id' : 'en';
    setLang(newLang);
    try { localStorage.setItem('lang', newLang); } catch(e) {}
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    try {
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch(e) {}
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollCarousel = (direction) => {
    if (sliderRef.current) {
      // Menggunakan lebar container agar perpindahan card tepat per halaman / item
      const containerWidth = sliderRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth / 3 : containerWidth / 3;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollEvent = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.querySelector('.project-card')?.clientWidth || 360;
      const gap = 24;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(Math.max(newIndex, 0), t.projects.items.length - 1));
    }
  };

  const bgTheme = isDark ? 'bg-[#111315] text-[#F5F5F0]' : 'bg-[#F7F7F2] text-[#171923]';
  const cardTheme = isDark ? 'bg-[#1A1E21] border-[#30363B]' : 'bg-white border-[#E3E5DE]';
  const secondaryText = isDark ? 'text-[#B7BDC3]' : 'text-[#4b5563]';
  
  const CurvedDoodle = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a3e635] dark:text-[#B8F36B] opacity-90">
      <path d="M10 90C10 90 20 20 90 10" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
      <path d="M70 10L90 10L90 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const ScribbleDoodle = () => (
    <svg width="60" height="40" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a3e635] dark:text-[#B8F36B] opacity-90">
      <path d="M10 50C10 50 30 10 50 40C70 70 90 20 110 30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const SparkleDoodle = () => (
    <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a3e635] dark:text-[#B8F36B] opacity-90 animate-pulse">
      <path d="M50 10C50 30 70 50 90 50C70 50 50 70 50 90C50 70 30 50 10 50C30 50 50 30 50 10Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${bgTheme} overflow-x-hidden`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { display: flex; width: 200%; animation: marquee 20s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        .floating-element { animation: float 6s ease-in-out infinite; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-[#111315]/90' : 'bg-[#F7F7F2]/90') + ' backdrop-blur-md shadow-sm py-4' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight font-serif-custom cursor-pointer flex items-center" onClick={() => scrollTo('home')}>
             <span className={isDark ? "text-white" : "text-[#171923]"}>Edu</span><span className="text-[#a3e635] dark:text-[#B8F36B]">Code.</span>
          </div>
          
          <div className="hidden lg:flex space-x-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
            <button onClick={() => scrollTo('home')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.home}</button>
            <button onClick={() => scrollTo('about')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.about}</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.skills}</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.projects}</button>
            <button onClick={() => scrollTo('teaching')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.teaching}</button>
            <button onClick={() => scrollTo('journey')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.journey}</button>
            <button onClick={() => scrollTo('certificates')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.certificates}</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors">{t.nav.contact}</button>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleLang} className={`flex items-center space-x-1 text-xs font-bold px-2 py-1.5 rounded border ${isDark ? 'border-[#30363B] hover:bg-gray-800' : 'border-[#E3E5DE] hover:bg-white'} transition-all`}>
              <Globe className="w-3 h-3"/><span>{lang.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/50 transition-all hover:scale-110 active:scale-95">
              {isDark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
            </button>
            <a href="https://wa.me/qr/BCLY7Q4KBBMUN1" target="_blank" rel="noreferrer" className="hidden md:flex items-center space-x-2 bg-white text-[#171923] border border-gray-200 dark:bg-white dark:text-[#171923] px-5 py-2 rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg transition-all shadow-sm">
              <span>{t.nav.letsTalk}</span><ArrowRight className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[85vh]">
        <div className="md:w-1/2 space-y-6 z-10 text-left">
          <p className={`text-xs font-bold tracking-widest uppercase ${secondaryText} animate-pulse`}>{t.hero.section}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif-custom leading-tight min-h-[160px] md:min-h-[220px]">
            {lang === 'en' ? "Hi, I'm " : "Halo, Saya "}
            <span className={isDark ? "text-[#B8F36B]" : "text-[#a3e635]"}>Arina.</span><br/>
            <span className={`drop-shadow-md ${isDark ? 'text-[#B8F36B]' : 'text-[#171923]'}`}>
              <Typewriter isDark={isDark} texts={lang === 'en' ? ["I make coding easier.", "I make data simpler.", "I make learning fun."] : ["Saya membuat coding lebih mudah.", "Saya menyederhanakan data.", "Saya membuat belajar lebih seru."]} />
            </span>
          </h1>
          <p className={`text-lg max-w-md font-normal leading-relaxed text-[#4b5563] dark:text-[#B7BDC3]`}>{t.hero.description}</p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button onClick={() => scrollTo('projects')} className="bg-[#a3e635] text-[#171923] px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-[#84cc16] hover:scale-105 transition-all">
              <span>{t.hero.exploreBtn}</span><ArrowRight className="w-4 h-4"/>
            </button>
            <a href="/Arina-Sholiha-CV.pdf" download="Arina_Sholiha_CV.pdf" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium border ${isDark ? 'border-[#30363B] hover:bg-[#1A1E21]' : 'border-[#E3E5DE] hover:bg-white'} hover:scale-105 transition-all`}>
              <span>{t.hero.downloadCv}</span><Download className="w-4 h-4"/>
            </a>
          </div>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://github.com/arinashlh" target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:scale-110 transition-all ${secondaryText}`}><GithubIcon className="w-6 h-6"/></a>
            <a href="https://www.linkedin.com/in/arina-sholiha" target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:scale-110 transition-all ${secondaryText}`}><LinkedinIcon className="w-6 h-6"/></a>
            <a href="https://wa.me/qr/BCLY7Q4KBBMUN1" target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:scale-110 transition-all ${secondaryText}`}><Mail className="w-6 h-6"/></a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center items-end h-[450px] md:h-[550px]">
          <div className={`absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 ${isDark ? 'bg-[#B8F36B]/10' : 'bg-[#EBF9D8]'}`}></div>
          <div className="absolute top-10 left-10 md:-left-4 z-0 transform -rotate-12"><SparkleDoodle /></div>
          <div className="absolute top-20 right-20 md:right-10 z-0"><SparkleDoodle /></div>
          <div className="absolute bottom-32 left-4 md:-left-12 z-0 transform rotate-12"><CurvedDoodle /></div>
          <div className="absolute top-1/3 -right-4 md:-right-8 z-0 transform rotate-45"><ScribbleDoodle /></div>
          
          <div className="w-[85%] md:w-full h-full z-10 floating-element flex justify-center items-end" style={{ animationDuration: '8s' }}>
            <img src="/arina.png" alt="Arina Sholiha" className="w-full h-full object-contain object-bottom drop-shadow-2xl hover:scale-110 transition-transform duration-500 ease-out cursor-pointer"/>
          </div>
          <div className={`absolute top-12 right-0 md:-right-8 p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20 ${isDark ? 'bg-[#1A1E21] border-[#30363B] text-[#F5F5F0]' : 'bg-white border-[#E3E5DE] text-[#171923]'}`}>
            <p className="font-serif-custom font-bold text-sm md:text-base leading-snug text-center">Let's<br/>learn and<br/>build together!</p>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className={`w-full overflow-hidden py-4 ${isDark ? 'bg-[#B8F36B]' : 'bg-[#a3e635]'} relative shadow-inner my-8`}>
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 text-sm font-black font-serif-custom tracking-widest px-4 text-[#171923]">
              <span>DATA ENTHUSIAST</span><span>•</span><span>CODING TUTOR</span><span>•</span><span>DATA ANALYST</span><span>•</span><span>DIGITAL MARKETING</span><span>•</span><span>LIFELONG LEARNER</span><span>•</span>
              <span>DATA ENTHUSIAST</span><span>•</span><span>CODING TUTOR</span><span>•</span><span>DATA ANALYST</span><span>•</span><span>DIGITAL MARKETING</span><span>•</span><span>LIFELONG LEARNER</span><span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT ME */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          
          <div className="lg:w-[38%] space-y-5 text-left">
             <p className="text-xs font-bold tracking-widest uppercase text-[#4b5563] dark:text-[#B7BDC3]">{t.about.section}</p>
             <h2 className="text-4xl md:text-[56px] font-bold font-serif-custom leading-[1.05]">{t.about.heading}</h2>
             
             <div className="space-y-4 pt-1">
               {t.about.paragraphs.map((para, idx) => (
                 <p key={idx} className="font-normal text-[15px] leading-relaxed text-[#4b5563] dark:text-[#B7BDC3]">
                   {para}
                 </p>
               ))}
             </div>
          </div>

          <div className="lg:w-[62%] grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch self-center">
            {t.about.cards.map((card, idx) => (
              <div key={idx} className={`p-6 rounded-[2rem] border ${cardTheme} flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${isDark ? 'bg-[#111315] border-[#30363B]' : 'bg-[#eefde0] border-transparent'}`} style={{ color: isDark ? '#B8F36B' : '#000000' }}>
                  {card.icon}
                </div>
                
                <h3 className="font-bold text-[19px] leading-snug mb-3 min-h-[3.2rem] flex items-center">{card.title}</h3>
                <p className="font-normal text-[14px] leading-relaxed text-[#4b5563] dark:text-[#B7BDC3] mb-6">
                  {card.desc}
                </p>
                
                <div className="mt-auto">
                  <div className={`w-full h-[1px] mb-4 ${isDark ? 'bg-[#30363B]' : 'bg-[#E3E5DE]'}`}></div>
                  <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#3f6212] dark:text-[#B8F36B] mb-1.5">
                    From my experience
                  </p>
                  <p className="text-[13px] font-normal leading-snug text-[#4b5563] dark:text-[#B7BDC3]">
                    {card.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          <div className="lg:w-[38%] space-y-5 lg:sticky lg:top-28">
            <p className="text-xs font-bold tracking-widest uppercase text-[#4b5563] dark:text-[#B7BDC3]">{t.skills.section}</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif-custom leading-tight">{t.skills.heading}</h2>
            <p className="font-normal text-[15px] leading-relaxed text-[#4b5563] dark:text-[#B7BDC3]">{t.skills.description}</p>
            
            <div className="pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">{t.skills.additionalToolsTitle}</p>
              <div className="flex flex-wrap gap-2">
                {t.skills.additionalTools.map((tool, i) => (
                  <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full border ${isDark ? 'bg-[#1A1E21] border-[#30363B] text-gray-300' : 'bg-white border-[#E3E5DE] text-gray-600'}`}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {t.skills.categories.map((cat, idx) => (
              <div key={idx} className={`p-6 rounded-[2rem] border flex flex-col h-full ${cardTheme} hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl mr-3.5 ${isDark ? 'bg-[#111315] border-[#30363B]' : 'bg-[#eefde0] border-transparent'}`} style={{ color: isDark ? '#B8F36B' : '#000000' }}>
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-[17px] leading-snug">{cat.name}</h3>
                </div>

                <p className="font-normal text-[13.5px] leading-relaxed text-[#4b5563] dark:text-[#B7BDC3] mb-6 flex-grow">
                  {cat.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {cat.images.map((img, i) => (
                    <div key={i} className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 cursor-default ${isDark ? 'bg-[#111315] border-[#30363B] hover:border-gray-500' : 'bg-gray-50/85 border-[#E3E5DE] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-gray-300'}`}>
                      <img src={img.src} alt={img.alt} className="w-4 h-4 object-contain drop-shadow-sm" title={img.alt} onError={(e) => { e.target.style.display = 'none'; }} />
                      <span className={`text-[12px] font-semibold tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{img.alt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04. FEATURED PROJECTS - REVISED HORIZONTAL CAROUSEL */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto text-left relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${secondaryText}`}>{t.projects.section}</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif-custom mb-2">{t.projects.heading}</h2>
            <p className={`text-sm md:text-base font-normal ${secondaryText}`}>{t.projects.subtext}</p>
          </div>

          {/* Carousel controls & Counter */}
          <div className="flex items-center space-x-4">
            <span className={`text-sm font-mono font-bold px-3 py-1 rounded-full border ${isDark ? 'border-[#30363B] bg-[#1A1E21]' : 'border-[#E3E5DE] bg-white'}`}>
              {currentIndex + 1} / {t.projects.items.length}
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollCarousel('left')} 
                aria-label="Previous project"
                className={`p-3 rounded-full border transition-all hover:scale-110 active:scale-95 ${isDark ? 'border-[#30363B] bg-[#1A1E21] hover:bg-[#22272b]' : 'border-[#E3E5DE] bg-white hover:bg-gray-50'} shadow-sm`}
              >
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <button 
                onClick={() => scrollCarousel('right')} 
                aria-label="Next project"
                className={`p-3 rounded-full border transition-all hover:scale-110 active:scale-95 ${isDark ? 'border-[#30363B] bg-[#1A1E21] hover:bg-[#22272b]' : 'border-[#E3E5DE] bg-white hover:bg-gray-50'} shadow-sm`}
              >
                <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Container dengan Snap Presisi per Card */}
        <div 
          ref={sliderRef}
          onScroll={handleScrollEvent}
          tabIndex={0}
          role="region"
          aria-label="Featured projects carousel"
          className="flex overflow-x-auto no-scrollbar gap-6 pb-6 pt-2 focus:outline-none focus:ring-2 focus:ring-[#a3e635] rounded-3xl"
          style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
        >
          {t.projects.items.map((proj, idx) => (
            <div 
              key={idx} 
              className={`project-card flex-shrink-0 w-[85vw] sm:w-[calc(33.333%-16px)] rounded-3xl border overflow-hidden flex flex-col snap-start ${cardTheme} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group`}
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Project Image dengan Zoom In Halus & Jeda Saat Kursor Berhenti di Card (Hover) */}
              <div 
                className="aspect-[16/10] w-full overflow-hidden bg-gray-200 dark:bg-gray-800 relative cursor-pointer"
                onClick={() => setLightboxImg(proj.img)}
              >
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:transition-duration-[1200ms]" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"; }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">Click to Preview</span>
                </div>
                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md uppercase backdrop-blur-sm z-10">
                  {proj.category.split('|')[0]}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[11px] font-bold tracking-widest text-[#a3e635] dark:text-[#B8F36B] uppercase mb-1.5">{proj.category}</p>
                <h3 className="text-xl font-bold mb-2.5 font-serif-custom">{proj.title}</h3>
                
                <p className={`text-xs sm:text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3] mb-6 flex-grow leading-relaxed line-clamp-3`}>
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${isDark ? 'border-[#30363B] text-gray-300 bg-[#111315]' : 'border-gray-200 text-gray-600 bg-gray-50'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
                  {proj.buttons.map((btn, bIdx) => {
                    let btnIcon = <ArrowRight className="w-3.5 h-3.5 ml-1"/>;
                    if (btn.type === 'ui') btnIcon = <ExternalLink className="w-3.5 h-3.5 ml-1"/>;
                    if (btn.type === 'video') btnIcon = <PlayCircle className="w-3.5 h-3.5 ml-1"/>;
                    if (btn.type === 'demo') btnIcon = <ExternalLink className="w-3.5 h-3.5 ml-1"/>;

                    return (
                      <a 
                        key={bIdx}
                        href={btn.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`inline-flex items-center text-xs font-bold px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-sm ${
                          btn.type === 'video' 
                            ? 'bg-red-600 text-white hover:bg-red-700 shadow-red-600/30' 
                            : isDark 
                              ? 'bg-white text-[#171923] hover:bg-gray-100' 
                              : 'bg-[#171923] text-white hover:bg-gray-800'
                        }`}
                      >
                        <span>{btn.label}</span>
                        {btnIcon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all"
              aria-label="Close preview"
            >
              <X className="w-6 h-6"/>
            </button>
            <img 
              src={lightboxImg} 
              alt="Project Full Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10" 
            />
          </div>
        </div>
      )}

      {/* HOW I TEACH (TEACHING APPROACH) */}
      <section id="teaching" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${secondaryText}`}>{t.teaching.section}</p>
        <h2 className="text-4xl md:text-5xl font-bold font-serif-custom mb-4">{t.teaching.heading}</h2>
        <p className={`mb-12 text-lg font-normal text-[#4b5563] dark:text-[#B7BDC3]`}>{t.teaching.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.teaching.cards.map((card, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border ${cardTheme} flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isDark ? 'bg-[#111315] border-[#30363B]' : 'bg-[#eefde0] border-transparent'}`} style={{ color: isDark ? '#B8F36B' : '#000000' }}>
                {card.icon === 'lightbulb' && <Lightbulb className="w-6 h-6" strokeWidth={2}/>}
                {card.icon === 'code' && <Code className="w-6 h-6" strokeWidth={2}/>}
                {card.icon === 'users' && <UsersIcon className="w-6 h-6" strokeWidth={2}/>}
              </div>
              <h3 className="font-bold text-lg mb-3 leading-snug">{card.title}</h3>
              <p className={`text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3] leading-relaxed`}>{card.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#171923] text-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl mt-8">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold font-serif-custom leading-snug">{t.friendlyBanner.heading}</h3>
            <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed">{t.friendlyBanner.desc}</p>
          </div>
          <div className="md:w-5/12 bg-[#1A1E21] border border-gray-700/50 p-6 rounded-2xl font-mono text-sm space-y-4 w-full">
            {t.friendlyBanner.list.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                 <span className="text-gray-500 w-4 font-bold">{item.num}</span><span>{item.emoji}</span><span className={`${item.colorClass} font-semibold`}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${secondaryText}`}>{t.journey.section}</p>
        <h2 className="text-4xl md:text-5xl font-bold font-serif-custom mb-16">{t.journey.heading}</h2>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-10 flex items-center space-x-3">
              <span className="text-[#a3e635] dark:text-[#B8F36B]"><PenTool className="w-7 h-7"/></span><span>{t.journey.teaching}</span>
            </h3>
            <div className="space-y-12 border-l-2 border-[#E3E5DE] dark:border-[#30363B] pl-6 ml-3">
              {t.journey.timeline.filter(i => i.type === 'teaching').map((item, idx) => (
                <div key={idx} className="relative group cursor-default">
                  <div className="absolute w-4 h-4 bg-[#a3e635] dark:bg-[#B8F36B] rounded-full -left-[1.95rem] top-1 group-hover:scale-150 transition-all duration-300"></div>
                  <h4 className="text-xl font-bold group-hover:text-[#a3e635] transition-colors">{item.role}</h4>
                  <p className="font-semibold text-sm mt-1">{item.org}</p>
                  <span className={`inline-block mt-2 text-xs font-bold px-2.5 py-1 rounded bg-[#171923] text-white`}>{item.date}</span>
                  <p className={`text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3] mt-3 leading-relaxed text-left`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-10 flex items-center space-x-3">
              <span className="text-[#a3e635] dark:text-[#B8F36B]"><Layout className="w-7 h-7"/></span><span>{t.journey.education}</span>
            </h3>
            <div className="space-y-12 border-l-2 border-[#E3E5DE] dark:border-[#30363B] pl-6 ml-3">
              {t.journey.timeline.filter(i => i.type === 'education').map((item, idx) => (
                <div key={idx} className="relative group cursor-default">
                  <div className="absolute w-4 h-4 bg-[#171923] dark:bg-white rounded-full -left-[1.95rem] top-1 border-2 border-white dark:border-[#111315] group-hover:scale-150 transition-all duration-300"></div>
                  <h4 className="text-xl font-bold group-hover:text-[#a3e635] transition-colors">{item.role}</h4>
                  <p className="font-semibold text-sm mt-1">{item.org}</p>
                  <span className={`inline-block mt-2 text-xs font-bold px-2.5 py-1 rounded bg-[#171923] text-white`}>{item.date}</span>
                  <p className={`text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3] mt-3 leading-relaxed text-left`}>{item.desc}</p>
                  {item.gpa && <span className="inline-block mt-3 text-xs font-bold px-2.5 py-1 bg-[#a3e635] dark:bg-[#B8F36B] text-[#171923] rounded shadow-md">{item.gpa}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${secondaryText}`}>{t.certificates.section}</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif-custom mb-4">{t.certificates.heading}</h2>
            <p className={`max-w-md text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3]`}>{t.certificates.description}</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1iemJwWPmiTpzVXaIxFg2OonSP_OZD506?usp=drive_link" target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-[#171923] text-white dark:bg-white dark:text-[#171923] px-6 py-3 rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg transition-all">
            <span>{t.certificates.viewDrive}</span><ExternalLink className="w-4 h-4"/>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.certificates.items.map((cert, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border flex flex-col space-y-4 ${cardTheme} hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-[#a3e635] dark:text-[#B8F36B] flex-shrink-0 animate-pulse"/>
                <h3 className="font-bold text-sm leading-snug">{cert.title}</h3>
              </div>
              <p className={`text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3] leading-relaxed`}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT & LET'S BUILD */}
      <section id="contact" className="py-10 px-6 max-w-6xl mx-auto text-left">
        <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${secondaryText}`}>{t.contact.section}</p>
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif-custom leading-tight">{t.contact.heading}</h2>
            <p className={`leading-relaxed text-lg font-normal text-[#4b5563] dark:text-[#B7BDC3]`}>{t.contact.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/qr/BCLY7Q4KBBMUN1" target="_blank" rel="noreferrer" className="bg-[#a3e635] text-[#171923] px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-[#84cc16] hover:scale-105 transition-all w-fit">
                <span>{t.contact.btnPrimary}</span><ArrowRight className="w-4 h-4"/>
              </a>
              <a href="/Arina-Sholiha-CV.pdf" download="Arina_Sholiha_CV.pdf" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full font-bold border flex items-center justify-center space-x-2 hover:scale-105 transition-all w-fit ${isDark ? 'border-[#30363B] hover:bg-[#111315]' : 'border-gray-300 hover:bg-white'}`}>
                <span>{t.contact.btnSecondary}</span><Download className="w-4 h-4"/>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className={`p-8 rounded-[2rem] border flex flex-col space-y-6 ${cardTheme} shadow-sm h-full justify-center`}>
              {t.contact.info.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-5">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-[#111315] border-[#30363B]' : 'bg-gray-100 border-gray-200'}`}>
                    {item.icon === 'mail' && <Mail className="w-5 h-5"/>}
                    {item.icon === 'linkedin' && <LinkedinIcon className="w-5 h-5"/>}
                    {item.icon === 'github' && <GithubIcon className="w-5 h-5"/>}
                    {item.icon === 'location' && <MapPinIcon className="w-5 h-5"/>}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold text-sm leading-none mb-1.5">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className={`text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3] hover:text-[#a3e635] dark:hover:text-[#B8F36B] transition-colors inline-block`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-normal text-[#4b5563] dark:text-[#B7BDC3]`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-[#111315] text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl mt-12 mb-10">
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="md:w-1/2 relative z-10 space-y-4">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{t.buildTogether.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif-custom leading-tight">{t.buildTogether.heading1} <br/><span className="text-[#B8F36B]">{t.buildTogether.heading2}</span></h2>
            <p className="text-gray-400 text-lg font-normal max-w-md pt-2">{t.buildTogether.desc}</p>
          </div>
          <div className="md:w-1/2 relative z-10 flex justify-start md:justify-end items-center">
            <svg className="hidden md:block text-[#B8F36B] w-24 h-24 mr-6 transform rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M10,80 Q50,90 90,40" /><path d="M70,40 L90,40 L85,60" />
            </svg>
            <a href="https://wa.me/qr/BCLY7Q4KBBMUN1" target="_blank" rel="noreferrer" className="bg-[#a3e635] text-[#171923] px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-[#84cc16] hover:scale-105 transition-all shadow-[0_0_20px_rgba(184,243,107,0.3)]">
              <span>{t.buildTogether.btn}</span><ArrowRight className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 border-t ${isDark ? 'border-[#30363B] bg-[#1A1E21]' : 'border-gray-200 bg-[#F7F7F2]'}`}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-black tracking-tight font-serif-custom text-xl flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
              <span className={isDark ? "text-white" : "text-[#171923]"}>Edu</span><span className="text-[#a3e635] dark:text-[#B8F36B]">Code.</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold">
              <button onClick={() => scrollTo('home')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.home}</button>
              <button onClick={() => scrollTo('about')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.about}</button>
              <button onClick={() => scrollTo('skills')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.skills}</button>
              <button onClick={() => scrollTo('projects')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.projects}</button>
              <button onClick={() => scrollTo('teaching')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.teaching}</button>
              <button onClick={() => scrollTo('journey')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.journey}</button>
              <button onClick={() => scrollTo('certificates')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.certificates}</button>
              <button onClick={() => scrollTo('contact')} className={`hover:text-[#a3e635] transition-colors ${secondaryText}`}>{t.nav.contact}</button>
            </div>
            
            <div className="flex items-center space-x-5">
              <a href="https://github.com/arinashlh" target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:-translate-y-1 transition-all ${secondaryText}`}><GithubIcon className="w-5 h-5"/></a>
              <a href="https://www.linkedin.com/in/arina-sholiha" targetUREF target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:-translate-y-1 transition-all ${secondaryText}`}><LinkedinIcon className="w-5 h-5"/></a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:-translate-y-1 transition-all ${secondaryText}`}><YoutubeIcon className="w-5 h-5"/></a>
              <a href="https://wa.me/qr/BCLY7Q4KBBMUN1" target="_blank" rel="noreferrer" className={`hover:text-[#a3e635] hover:-translate-y-1 transition-all ${secondaryText}`}><Mail className="w-5 h-5"/></a>
            </div>
          </div>
          <div className={`flex flex-col md:flex-row justify-between items-center text-xs font-medium ${secondaryText} mt-4`}>
            <p>© {new Date().getFullYear()} EduCode. {t.footer.copyright}</p>
            <button onClick={() => scrollTo('home')} className="mt-6 md:mt-0 hover:text-[#a3e635] transition-colors flex items-center space-x-1 font-bold">
              <ChevronUpIcon className="w-4 h-4"/><span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;