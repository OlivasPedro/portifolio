
// Animação da timeline e dos projetos
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineProjects = document.querySelectorAll(".timeline-project");
    const timelineLine = document.querySelector(".timeline-line");

    function checkVisibility() {
        let anyActive = false;
        // Verifica os itens padrão da timeline
        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                item.classList.add("active");
                anyActive = true;
            } else {
                item.classList.remove("active");
            }
        });
        // Verifica os projetos para aplicar a transição lateral
        timelineProjects.forEach((project) => {
            const rect = project.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                project.classList.add("active");
            } else {
                project.classList.remove("active");
            }
        });
        // Altera a cor da linha da timeline
        timelineLine.style.background = anyActive ? "#fff" : "#333";
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

// Função para rolagem suave até a seção de carreira/projetos, ajustando 80px para o cabeçalho
function scrollToCareer() {
    const careerSection = document.getElementById("career_projects");

    window.scrollTo({
        top: careerSection.offsetTop - 80, // Ajusta conforme o cabeçalho fixo
        behavior: "smooth"
    });
}

// Animação da seção de habilidades
document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector('.skills-section');
    const skillCards = document.querySelectorAll('.skill-card');
  
    function checkSkillsVisibility() {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            skillsSection.classList.add('active');
        } else {
            skillsSection.classList.remove('active');
        }
  
        skillCards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            if (cardRect.top < window.innerHeight * 0.8 && cardRect.bottom > 0) {
                card.classList.add('active');
            }
        });
    }
  
    window.addEventListener("scroll", checkSkillsVisibility);
    checkSkillsVisibility();
});
  
// Animação das habilidades de programação com delay
document.addEventListener("DOMContentLoaded", function () {
    const programmingSection = document.querySelector('.programming-skills-section');
    const programmingCards = document.querySelectorAll('.programming-skill-card');

    function checkProgrammingSkillsVisibility() {
        const rect = programmingSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            programmingSection.classList.add('active');

            programmingCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('active');
                }, index * 150); // Delay entre os cards
            });
        }
    }

    window.addEventListener("scroll", checkProgrammingSkillsVisibility);
    checkProgrammingSkillsVisibility();
});
  
// Animação da seção "Sobre Mim"
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.about-me-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= windowHeight * 0.8) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
  
// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajusta conforme o cabeçalho fixo
            behavior: 'smooth'
        });
    });
});



document.getElementById("language").addEventListener("change", function() { 
    const lang = this.value;
    const translations = {
      pt: {
        page_title: "Pedro de Oliveira - Portfólio",
        logo: "Pedro de Oliveira",
        nav_career: "Carreira e Projetos",
        nav_skills: "Habilidades",
        nav_about: "Sobre mim",
        nav_contact: "Contatos",
        intro_h1: "Opa, tudo bem? Eu sou o Pedro de Oliveira",
        intro_open_to_work: "Open to Work",
        intro_p: "Um desenvolvedor apaixonado por técnologia, trabalhando cada vez mais para fazer a sonhos virarem realidade!",
        scroll_to_career: "Vamos lá!",
        timeline1_title: "Como tudo começou",
        timeline1_subtitle: "Julho de 2020 - Rapido BR",
        timeline1_p1: "Minha jornada como desenvolvedor começou na Rapido BR, uma pequena empresa onde eu era o único desenvolvedor. Esse período foi fundamental, pois tive que aprender muitas coisas sozinho e, ao mesmo tempo, aplicar o conhecimento de forma prática. Apesar das dificuldades, foi uma experiência extremamente recompensadora.",
        timeline1_p2: "Tive participação direta no desenvolvimento de apps para controle de estoque, controle de carga e carregamento, além de realizar modificações em um sistema de impressão de QR Codes para impressoras Zebra. Esse foi o momento em que a transição da minha vida escolar para a adulta começou.",
        timeline2_title: "Projeto #1",
        timeline2_subtitle: "Desenvolvimento de apps para controle de carga e estoque",
        timeline3_title: "Expandindo Horizontes",
        timeline3_subtitle: "Agosto de 2021 - Wizard",
        timeline3_p1: "Após um período desafiador na Rapido BR, decidi sair da minha zona de conforto e explorar o campo do ensino. Trabalhei como professor de inglês na Wizard, onde vivenciei meu maior crescimento interpessoal.",
        timeline3_p2: "Foi uma oportunidade para desenvolver habilidades de trabalho em equipe, comunicação e liderança. Além disso, a experiência me ajudou a perder a timidez e a aprimorar minhas habilidades no idioma inglês.",
        timeline4_title: "\"O bom filho a casa torna\"",
        timeline4_subtitle: "Agosto de 2024 - Rapido BR (novamente)",
        timeline4_p1: "A paixão por tecnologia nunca deixou de me acompanhar, então em agosto de 2024, voltei à Rapido BR, desta vez com novas responsabilidades e desafios. Nesse período, refatorei códigos em Java para Kotlin, desenvolvi aplicativos para iOS utilizando Swift e implementei controle de versões com Git.",
        timeline4_p2: "Também criei uma automação para envio de emails com dados de mercadorias e desenvolvi APIs com Python. Atualmente, estou focado no desenvolvimento de um app para confirmação de entrega de cargas e em buscar novos desafios para aplicar meu conhecimento e continuar crescendo.",
        timeline5_title: "Projeto #2",
        timeline5_subtitle: "Desenvolvimento de app para controle de carregamento (Android & iOS).",
        timeline6_title: "Projeto #3",
        timeline6_subtitle: "Refatoração e Migração do app de controle de carga e estoque.",
        skills_title: "Habilidades",
        skill1_title: "Clean Architecture",
        skill1_desc: "Aplicação de princípios arquiteturais como SOLID e separação de responsabilidades para criar código modular, testável e sustentável.",
        skill2_title: "APIs",
        skill2_desc: "Desenvolvimento e consumo de APIs RESTful e GraphQL para integrar aplicações de forma eficiente e escalável.",
        skill3_title: "Git",
        skill3_desc: "Uso avançado de Git para versionamento de código, trabalho colaborativo e integração contínua com GitHub/GitLab.",
        skill4_title: "SQL",
        skill4_desc: "Modelagem, manipulação e otimização de bancos de dados relacionais. Experiência com SQLite, Room e consultas eficientes para alta performance.",
        prog_skills_title: "Principais Ferramentas de Programação",
        prog_kotlin: "Kotlin",
        prog_swift: "Swift",
        prog_python: "Python",
        prog_javascript: "JavaScript",
        prog_csharp: "C#",
        about_title: "Sobre Mim",
        about_desc: "Meu nome é Pedro de Oliveira Guimarães, tenho 22 anos e moro em Guarulhos, Brasil. Sou formado em Análise e Desenvolvimento de Sistemas e aficionado por técnologia. Tento ser músico nas horas vagas, amo automobilismo e adoro uma boa conversa. O que mais me motiva é viver novas experiências, tentar coisas novas e aplicar meus conhecimentos de forma que faça sentido além do meu próprio mundo. Quando sobra um tempo, gosto de sair com os amigos, curtir uma música e viver o momento com minha família e namorada.",
        formation_title: "Formações",
        formation1_title: "Ensino Médio Técnico em Informática",
        formation1_subtitle: "Ensino médio (2018 - 2020)",
        formation1_institution: "Colégio Eniac",
        formation2_title: "Análise e Desenvolvimento de Sistemas",
        formation2_subtitle: "Graduado (2023 - 2024)",
        formation2_institution: "FIAP",
        formation3_title: "Java Programmer",
        formation3_subtitle: "Curso (2018)",
        formation3_institution: "Impacta",
        formation4_title: "Android Programmer",
        formation4_subtitle: "Curso (2019)",
        formation4_institution: "Impacta",
        formation5_title: "English Proficiency",
        formation5_subtitle: "Curso (2019)",
        formation5_institution: "Wizard",
        contact_title: "Entre em Contato",
        contact_desc: "Tem alguma dúvida ou quer falar comigo?",
        contact_open_to_work: "Open to Work",
        contact_subtitle: "Oportunidades de trabalho remoto ou híbrido em São Paulo",
        timeline7_title: "E também...",
        timeline7_subtitle: "Janeiro de 2025 - FlyingStudio",
        timeline7_p1: "Desenvolvi um web app em parceria com a FlyingStudio para tótens interativos, com foco na apresentação de um novo empreendimento imobiliário.",
        timeline7_p2: "A solução permite que os visitantes explorem o prédio por meio de imagens, tour 360° e informações detalhadas sobre a construção, proporcionando uma experiência moderna, dinâmica e imersiva diretamente nos pontos de visitação.",
        timeline8_title: "Projeto #4",
        timeline8_subtitle: "Desenvolvimento do app para tótens",
        popup1_title: "Consulta Rapido BR (Android)",
        popup1_desc: "Um aplicativo desenvolvido para o monitoramento remoto da operação logística da empresa. Ele oferece uma visão geral em tempo real das mercadorias, permitindo consultar estatísticas como quantidade em depósito, em trânsito e em carregamento, além de informações detalhadas sobre valor, peso e data de entrada dos produtos.",
        popup2_title: "Leitor de Etiquetas",
        popup2_desc: "Um aplicativo desenvolvido para o controle de embarque de cargas nos caminhões da empresa. Ele utiliza a leitura de QR Codes impressos nas etiquetas das mercadorias para registrar automaticamente a baixa no sistema, agilizando o processo logístico e garantindo maior precisão no monitoramento das cargas durante o carregamento.",
        popup3_title: "Consulta Rapido BR (iOS)",
        popup3_desc: "Um aplicativo desenvolvido para o monitoramento remoto da operação logística da empresa. Ele oferece uma visão geral em tempo real das mercadorias, permitindo consultar estatísticas como quantidade em depósito, em trânsito e em carregamento, além de informações detalhadas sobre valor, peso e data de entrada dos produtos. O sistema foi reestruturado e migrado para as plataformas móveis, com desenvolvimento nativo em Kotlin para Android e Swift para iOS, garantindo maior desempenho e compatibilidade com os dispositivos atuais.",
        btnVerProjeto: "➜ Ver Projeto"
      },
      en: {
        page_title: "Pedro de Oliveira's Portfolio",
        logo: "Pedro de Oliveira",
        nav_career: "Career & Projects",
        nav_skills: "Skills",
        nav_about: "About Me",
        nav_contact: "Contact",
        intro_h1: "Hey, how are you? I am Pedro de Oliveira",
        intro_open_to_work: "Open to Work",
        intro_p: "A developer passionate about technology, working harder every day to make dreams come true!",
        scroll_to_career: "Let's go!",
        timeline1_title: "How It All Started",
        timeline1_subtitle: "July 2020 - Rapido BR",
        timeline1_p1: "My journey as a developer began at Rapido BR, a small company where I was the sole developer. This period was crucial as I had to learn many things on my own while applying my knowledge practically. Despite the challenges, it was an extremely rewarding experience.",
        timeline1_p2: "I was directly involved in developing apps for inventory control, load management, and shipping, as well as modifying a QR Code printing system for Zebra printers. This marked the transition from my school life to adulthood.",
        timeline2_title: "Project #1",
        timeline2_subtitle: "Development of apps for load and inventory control",
        timeline3_title: "Expanding Horizons",
        timeline3_subtitle: "August 2021 - Wizard",
        timeline3_p1: "After a challenging period at Rapido BR, I decided to step out of my comfort zone and explore the field of education. I worked as an English teacher at Wizard, where I experienced significant personal growth.",
        timeline3_p2: "It was an opportunity to develop teamwork, communication, and leadership skills. Additionally, the experience helped me overcome shyness and improve my English.",
        timeline4_title: "\"The prodigal son returns\"",
        timeline4_subtitle: "August 2024 - Rapido BR (again)",
        timeline4_p1: "My passion for technology never faded, so in August 2024 I returned to Rapido BR, this time with new responsibilities and challenges. During this period, I refactored code from Java to Kotlin, developed iOS apps using Swift, and implemented version control with Git.",
        timeline4_p2: "I also created an automation for sending emails with merchandise data and developed APIs using Python. Currently, I am focused on developing an app for delivery confirmation and seeking new challenges to further apply my skills.",
        timeline5_title: "Project #2",
        timeline5_subtitle: "Development of an app for load management (Android & iOS)",
        timeline6_title: "Project #3",
        timeline6_subtitle: "Refactoring and migration of the load and inventory control app",
        skills_title: "Skills",
        skill1_title: "Clean Architecture",
        skill1_desc: "Application of architectural principles such as SOLID and separation of concerns to create modular, testable, and sustainable code.",
        skill2_title: "APIs",
        skill2_desc: "Development and consumption of RESTful and GraphQL APIs to efficiently and scalably integrate applications.",
        skill3_title: "Git",
        skill3_desc: "Advanced use of Git for code versioning, collaborative work, and continuous integration with GitHub/GitLab.",
        skill4_title: "SQL",
        skill4_desc: "Modeling, manipulating, and optimizing relational databases. Experience with SQLite, Room, and efficient queries for high performance.",
        prog_skills_title: "Main Programming Tools",
        prog_kotlin: "Kotlin",
        prog_swift: "Swift",
        prog_python: "Python",
        prog_javascript: "JavaScript",
        prog_csharp: "C#",
        about_title: "About Me",
        about_desc: "My name is Pedro de Oliveira Guimarães, I'm 22 years old and I live in Guarulhos, Brazil. I hold a degree in Systems Analysis and Development and have a passion for technology. I also pursue music in my spare time, love motorsports, and enjoy a good conversation. What motivates me most is living new experiences, trying new things, and applying my knowledge in a way that goes beyond my own world. In my free time, I love hanging out with friends, enjoying music, and cherishing moments with my family and partner.",
        formation_title: "Education",
        formation1_title: "Technical High School in Informatics",
        formation1_subtitle: "High School (2018 - 2020)",
        formation1_institution: "Colégio Eniac",
        formation2_title: "Systems Analysis and Development",
        formation2_subtitle: "Graduate (2023 - 2024)",
        formation2_institution: "FIAP",
        formation3_title: "Java Programmer",
        formation3_subtitle: "Course (2018)",
        formation3_institution: "Impacta",
        formation4_title: "Android Programmer",
        formation4_subtitle: "Course (2019)",
        formation4_institution: "Impacta",
        formation5_title: "English Proficiency",
        formation5_subtitle: "Course (2019)",
        formation5_institution: "Wizard",
        contact_title: "Get In Touch",
        contact_desc: "Have any questions or want to talk?",
        contact_open_to_work: "Open to Work",
        contact_subtitle: "Remote or hybrid work opportunities in São Paulo",
        timeline7_title: "And also...",
        timeline7_subtitle: "January 2025 - FlyingStudio",
        timeline7_p1: "I developed a web app in partnership with FlyingStudio for interactive kiosks, focusing on presenting a new real estate development.",
        timeline7_p2: "The solution allows visitors to explore the building through images, a 360° tour, and detailed construction information, providing a modern, dynamic, and immersive experience directly at the viewing points.",
        timeline8_title: "Project #4",
        timeline8_subtitle: "Development of the kiosk app",
        popup1_title: "Rapido BR Consultation (Android)",
        popup1_desc: "An application developed for remote monitoring of the company's logistics operations. It provides a real-time overview of goods, allowing access to statistics such as quantities in storage, in transit, and being loaded, along with detailed information about value, weight, and entry date of the products.",
        popup2_title: "Label Scanner",
        popup2_desc: "An application developed to control the loading of cargo onto the company's trucks. It reads QR Codes printed on the merchandise labels to automatically register them in the system, streamlining the logistics process and ensuring greater accuracy during cargo loading.",
        popup3_title: "Rapido BR Consultation (iOS)",
        popup3_desc: "An application developed for remote monitoring of the company's logistics operations. It provides a real-time overview of goods, allowing access to statistics such as quantities in storage, in transit, and being loaded, along with detailed information about value, weight, and entry date of the products. The system was restructured and migrated to mobile platforms, with native development in Kotlin for Android and Swift for iOS, ensuring higher performance and better compatibility with modern devices.",
        btnVerProjeto: "➜ View Project"
      }
    };

    // Atualiza cada elemento com atributo data-i18n
document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  
  // Atualiza o título da página
  document.title = translations[lang].page_title;
  
})


function abrirPopup() {
    const popup = document.getElementById("popupProjeto");
    if (popup) {
      popup.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function fecharPopup() {
    const popup = document.getElementById("popupProjeto");
    if (popup) {
      popup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  function abrirPopup2() {
    const popup = document.getElementById("popupProjeto2");
    if (popup) {
      popup.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function fecharPopup2() {
    const popup = document.getElementById("popupProjeto2");
    if (popup) {
      popup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  
  function abrirPopup3() {
    const popup = document.getElementById("popupProjeto3");
    if (popup) {
      popup.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function fecharPopup3() {
    const popup = document.getElementById("popupProjeto3");
    if (popup) {
      popup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }







