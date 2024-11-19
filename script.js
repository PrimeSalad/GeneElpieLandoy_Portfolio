// script.js

const textAppear = document.querySelector('link[href ="css/text.css"]');
textAppear.disabled = true;

const ColorAppear = document.querySelector('link[href ="css/colors.css"]');
ColorAppear.disabled = true;

const FlexAppear = document.querySelector('link[href ="css/flexes.css"]');
FlexAppear.disabled = true;

const LayoutAppear = document.querySelector('link[href ="css/style.css"]');
LayoutAppear.disabled = true;

let TextDis = false;
let ColorDis = false;
let FlexDis = false;

document.addEventListener("DOMContentLoaded", function () {
  const controlIcons = [
    {
      src: "images/icons/text.png",
      alt: "icon",
      id: "textBtn",
    },
    {
      src: "images/icons/color.png",
      alt: "icon",
      id: "colorBtn",
    },
    {
      src: "images/icons/layout.png",
      alt: "icon",
      id: "layBtn",
    },
    {
      src: "images/icons/anim.png",
      alt: "icon",
      id: "animBn",
    },
  ];

  const controlSection = document.getElementById("controlSection");
  controlSection.innerHTML = `
      <div class="vectors">
          ${controlIcons
            .map(
              (icon) => `
              <img src="${icon.src}" alt="${icon.alt}" id="${icon.id}">
          `
            )
            .join("")}
      </div>
  `;

  const Appearance = document.getElementById("textBtn");
  Appearance.onclick = function () {
    ShowIntro();
    ShowAbout();
    ShowContact();
    ShowEduc();
    ShowProj();
    ShowSkill();
    ShowTime();
    ShowFooter();
    populateFooterr();

    populateNavLinks();
    populateIntro();
    populateStats();
    populateButtons();
    populateAboutSection();
    populateSkillSection();
    populateTimelineSection();
    populateProjectSection();
    populateEducationSection();
    populateContactSection();
    observeLeftToRightElements();
    textAppear.disabled = false;
    TextDis = true;

    Appearance.style.display = "none";
    if (TextDis) {
      const Appearancetwo = document.getElementById("colorBtn");
      Appearancetwo.onclick = function () {
        ColorAppear.disabled = false;
        Appearancetwo.style.display = "none";
        ColorDis = true;
        location.href = "#about";
      };
    }
    const Appearancethree = document.getElementById("layBtn");
    Appearancethree.onclick = function () {
      if (ColorDis) {
        FlexAppear.disabled = false;
        Appearancethree.style.display = "none";
        FlexDis = true;
        location.href = "#skill";
      }
    };
    const Appearancefour = document.getElementById("animBn");
    Appearancefour.onclick = function () {
      if (FlexDis) {
        LayoutAppear.disabled = false;
        const typingEffect = document.getElementById("typing-effect");
        typingEffect.textContent = "Web Developer";
        startTypingEffect([
          "Software Developer",
          "Game Developer",
          "Graphic Designer",
          "Database Manager",
        ]);
        Appearancefour.style.display = "none";
        controlSection.style.display = "none";
        location.href = "#intro";
      }
    };
  };
});

// populateAboutSection();
// populateSkillSection();
// populateTimelineSection();
// populateProjectSection();
// populateEducationSection();
// populateContactSection();
// observeLeftToRightElements();

document.querySelector(".custom-morty-front").src = "images/icon/morty.gif";
document.querySelector(".custom-morty-front").alt = "Morty Character";
document.querySelector(".custom-instructions-text").textContent =
  "Duh-buh-doh!";
document.querySelector(".custom-instructions-dets").textContent =
  "Oh geez, okay, uh... so, first, you’ll click the top button in the left corner, right? Then, normal text will appear—just plain text at first. Next, the colors and background will pop in, then everything will align all nice and tidy. Finally, whoa—animations will kick in and bring it all to life! Pretty cool, huh?";

document
  .querySelector(".custom-close-btn")
  .addEventListener("click", function () {
    const popup = document.getElementById("custom-popup");
    popup.classList.add("custom-hidden");
  });

function ShowIntro() {
  const HeaderSelection = document.getElementById("intro");
  HeaderSelection.style.display = "flex";
  HeaderSelection.innerHTML = `
  <nav class="navbar" id="start">
        <div class="navlist">
          <div class="links" id="nav-links"></div>
        </div>
      </nav>
      <h1 id="intro-text"></h1>
        <div class="all-content">
          <div class="content">
            <h1 class="myself"></h1>
            <h1 id="final-text" class="hidden name">
              <span id="typing-effect" class="highlights">Software Developer</span>
            </h1>
            <p id="final-description" class="hidden details"></p>
            <div class="years">
              <div class="years-content" id="years-content"></div>
            </div>
            <div class="cv" id="cv-buttons"></div>
          </div>
        </div>`;
}

function ShowAbout() {
  const AboutSelection = document.getElementById("about");
  AboutSelection.style.display = "flex";
  AboutSelection.innerHTML = `
     <div class="accom leftToRight-anim">
        <h1 id="about-title"></h1>
      </div>
      <div class="about-me">
        <p class="leftToRight-anim" id="about-description"></p>
        <img id="profile-image" src="" alt="Profile Picture" width="50px" />
      </div>`;
}

function ShowSkill() {
  const SkillSelection = document.getElementById("skill");
  SkillSelection.style.display = "flex";
  SkillSelection.innerHTML = `
 <div class="skill-dets leftToRight-anim">
        <h1 class="leftToRight-anim" id="skill-title"></h1>
        <h2 class="skill-sub leftToRight-anim" id="skill-sub"></h2>
      </div>
      <div class="card-container leftToRight-anim" id="card-container"></div>`;
}

function ShowTime() {
  const TimelineSelection = document.getElementById("timeline");
  TimelineSelection.style.display = "flex";
  TimelineSelection.innerHTML = `
      <div class="timeline-main leftToRight-anim">
        <h1 id="time-title"></h1>
        <h2 class="time-sub" id="time-sub"></h2>
        <ul class="timeline" id="timeline-list"></ul>
      </div>`;
}

function ShowProj() {
  const ProjectSelection = document.getElementById("project");
  ProjectSelection.style.display = "flex";
  ProjectSelection.innerHTML = `
      <div class="proj-dets leftToRight-anim" id="projDets"></div>
      <div class="proj-container leftToRight-anim" id="projectContainer"></div>`;
}

function ShowEduc() {
  const EducSelection = document.getElementById("educ");
  EducSelection.style.display = "flex";
  EducSelection.innerHTML = `
      <div class="educ-dets leftToRight-anim" id="educDets"></div>
      <div class="educ-container leftToRight-anim" id="educContainer"></div>
      <div class="certif leftToRight-anim" id="certifContainer"></div>
      <div id="imageModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImg" /></div>`;
}

function ShowContact() {
  const ContactSelection = document.getElementById("contact");
  ContactSelection.style.display = "flex";
  ContactSelection.innerHTML = `
     <div class="contact-dets leftToRight-anim" id="contactDets"></div>
      <div class="contact-container">
        <div class="contact-image" id="contactImage"></div>
        <div
          class="contact-form-container leftToRight-anim"
          id="contactFormContainer"
        ></div>
        <div class="contact-links leftToRight-anim" id="contactLinks"></div>
      </div>`;
}

function ShowFooter() {
  const FooterSelection = document.getElementById("footer");
  FooterSelection.style.display = "flex";
  FooterSelection.innerHTML = `
      <div class="footer-logo" id="footerLogo"></div>
      <nav class="footer-nav" id="footerNav"></nav>`;
}

// Function to populate navigation links
function populateNavLinks() {
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#skill", text: "Skills" },
    { href: "#timeline", text: "Experience" },
    { href: "#project", text: "Projects" },
  ];

  const navContainer = document.getElementById("nav-links");
  navLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.text;
    navContainer.appendChild(anchor);
  });
}

// Function to set introductory text
function populateIntro() {
  const myselfHeading = document.querySelector(".myself");
  myselfHeading.textContent = "I'm Gene Elpie, a";

  const finalDescription = document.getElementById("final-description");
  finalDescription.textContent =
    "with a passion for creating impactful digital solutions and visually compelling designs. " +
    "I specialize in transforming ideas into interactive experiences that resonate with audiences.";
}

// Function to populate stats
function populateStats() {
  const stats = [
    { value: "+2.5", description: "Years of experience" },
    { value: "50k", description: "Lines of code written" },
    { value: "100k", description: "Coffee cups consumed" },
  ];

  const yearsContent = document.getElementById("years-content");

  stats.forEach((stat, index) => {
    const valueElement = document.createElement("h4");
    valueElement.textContent = stat.value;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = stat.description;

    yearsContent.appendChild(valueElement);
    yearsContent.appendChild(descriptionElement);

    // Add separator unless it's the last stat
    if (index < stats.length - 1) {
      const separator = document.createElement("h3");
      separator.textContent = "|";
      yearsContent.appendChild(separator);
    }
  });
}

// nav
function populateButtons() {
  const buttons = [
    { href: "#educ", text: "Education" },
    { href: "#contact", text: "Contact" },
  ];

  const buttonContainer = document.getElementById("cv-buttons");

  buttons.forEach((buttonData) => {
    const anchor = document.createElement("a");
    anchor.href = buttonData.href;

    const button = document.createElement("button");
    button.textContent = buttonData.text;

    anchor.appendChild(button);
    buttonContainer.appendChild(anchor);
  });
}

// Function to populate About Section
function populateAboutSection() {
  const aboutTitle = "About ";
  const aboutSpan = "Me.";
  document.getElementById(
    "about-title"
  ).innerHTML = `${aboutTitle}<span class="about-you">${aboutSpan}</span>`;

  const aboutDescription = `
        I am a third-year Software Development student at Marinduque State University, specializing in tech solutions that integrate software development and cloud technologies. As Vice President of Tropic Academia and editor-in-chief of InFocus Publication, I lead teams in creating innovative projects, honing my leadership, problem-solving, and communication skills.
        
        My participation in IT competitions such as Y4IT 2024 and Hack4Gov 3 allowed me to apply predictive analytics, Java programming, and data-driven decision-making to solve real-world problems. These experiences sharpened my technical abilities and taught me to think critically under pressure.
        
        One of my proudest achievements is designing the MarSu logo, a project that merged my creative and technical skills. Additionally, I’ve worked with Arduino IDE to develop hardware-software integrated projects, expanding my understanding of systems development.
        
        In addition to my technical and leadership experience, I am driven by a passion for creating impactful solutions that address both immediate and long-term challenges. My work continues to evolve as I focus on exploring new technologies, frameworks, and development strategies that push the boundaries of what is possible in the tech industry.
    `;
  document.getElementById("about-description").textContent = aboutDescription;

  const profileImage = document.getElementById("profile-image");
  profileImage.src = "images/icon/profile.png";
  profileImage.alt = "Profile Picture";
}

// Function to populate the Skill Section
// Function to populate the Skill Section
function populateSkillSection() {
  document.getElementById(
    "skill-title"
  ).innerHTML = `Skills<span class="about-you">.</span>`;
  document.getElementById(
    "skill-sub"
  ).innerHTML = `Tools and <span class="highlights">Technologies</span>`;

  const skills = [
    {
      category: "UI &<span class='highlights'>UX</span>",
      experience: "3 years experience",
      description: `With a strong background in UI and UX design, I specialize in creating intuitive, user-centered interfaces that prioritize seamless interaction and functionality. My approach involves in-depth research, user testing, and prototyping to ensure that every design decision aligns with user needs and business objectives.`,
      tools: [
        {
          src: "images/skills/Figma.png",
          alt: "Figma",
          text: `Extensive expertise in Figma, a collaborative interface design tool that allows for the creation of detailed wireframes, interactive prototypes, and design systems. I use Figma for everything from low-fidelity concepts to high-fidelity deliverables, leveraging its robust features like auto layout, components, and plugins to streamline workflows and enhance team collaboration.`,
        },
        {
          src: "images/skills/adobe-illustrator.png",
          alt: "Adobe Illustrator",
          text: `Proficient in Adobe Illustrator, which I use to craft precise vector graphics, icons, and illustrations. My experience includes creating scalable branding assets, custom typography, and intricate design elements tailored to fit specific project requirements. Illustrator’s powerful vector tools enable me to ensure flexibility and sharpness in designs, whether for digital platforms or print media.`,
        },
        {
          src: "images/skills/photoshop.png",
          alt: "Photoshop",
          text: `Advanced skills in Adobe Photoshop, utilizing it for photo manipulation, compositing, and detailed image editing. I use Photoshop to create high-quality visuals, including layered designs, marketing materials, and web assets. With expertise in tools like adjustment layers, masks, and filters, I can refine images to align with precise artistic and branding standards.`,
        },
      ],
    },
    {
      category: "Web <span class='highlights'>Development</span>",
      experience: "2 years experience",
      description: `I have a passion for developing responsive, dynamic, and scalable websites that prioritize user experience and modern design trends. My development philosophy focuses on writing clean, modular code while adhering to best practices in performance optimization and accessibility.`,
      tools: [
        {
          src: "images/skills/html.png",
          alt: "HTML",
          text: `Deep understanding of HTML, crafting semantic and well-organized code that forms the foundation of responsive web structures. I ensure compliance with accessibility standards and modern best practices, making web content usable and inclusive for a diverse audience.`,
        },
        {
          src: "images/skills/css3.png",
          alt: "CSS3",
          text: `Extensive experience in CSS3, focusing on creating visually compelling designs through advanced styling techniques, animations, and transitions. I use modern layout techniques like Flexbox and Grid to build responsive designs that adapt seamlessly to various devices and screen sizes.`,
        },
        {
          src: "images/skills/javascript.png",
          alt: "JavaScript",
          text: `Proficient in JavaScript, enabling me to build dynamic and interactive web applications. My expertise includes DOM manipulation, event handling, and integrating APIs to create immersive user experiences. I also use JavaScript frameworks and libraries for efficient development and performance.`,
        },
        {
          src: "images/skills/react.png",
          alt: "React",
          text: `Skilled in React, a powerful JavaScript library for building dynamic and modular user interfaces. I leverage React's component-based architecture to create reusable UI elements and ensure smooth and efficient application performance.`,
        },
        {
          src: "images/skills/github.png",
          alt: "GitHub",
          text: `Proficient in using GitHub for version control, team collaboration, and repository management. I employ features like branching, pull requests, and code reviews to ensure efficient and organized project workflows.`,
        },
        {
          src: "images/skills/git.png",
          alt: "Git",
          text: `Experienced with Git, a distributed version control system, for tracking changes, managing codebases, and enabling collaboration in development projects. I use Git for maintaining clean code histories and resolving merge conflicts effectively.`,
        },
      ],
    },
    {
      category: "Graphics <span class='highlights'>Editing</span>",
      experience: "8 years experience",
      description: `I have extensive experience in graphic design and video editing, combining creativity with technical expertise to produce compelling visual content. My approach focuses on storytelling and aesthetics, ensuring that each project captures attention and communicates effectively.`,
      tools: [
        {
          src: "images/skills/canva.png",
          alt: "Canva",
          text: `Expert in Canva, a user-friendly design platform that I use to create visually appealing social media graphics, presentations, and marketing materials. I leverage Canva's extensive library of templates and customization features to produce professional designs quickly and efficiently.`,
        },
        {
          src: "images/skills/capcut.png",
          alt: "CapCut",
          text: `Skilled in CapCut, an intuitive video editing tool that I use for creating high-quality video content. My work involves editing footage, adding effects, and crafting transitions to produce engaging multimedia presentations.`,
        },
        {
          src: "images/skills/photoshop.png",
          alt: "Photoshop",
          text: `Extensive experience in Adobe Photoshop, leveraging its powerful editing tools to enhance images, create visual effects, and design custom graphics. My work includes everything from retouching and color correction to advanced compositing and creative design.`,
        },
        {
          src: "images/skills/DVR.png",
          alt: "DaVinci Resolve",
          text: `Proficient in DaVinci Resolve, a professional-grade video editing and color grading software. I use its advanced features to edit videos with precision, correct colors, and enhance the overall visual storytelling of my projects.`,
        },
        {
          src: "images/skills/adobe-illustrator.png",
          alt: "Adobe Illustrator",
          text: `Expertise in Adobe Illustrator for creating vector-based artwork, including logos, illustrations, and branding materials. I utilize its precise drawing tools and advanced path editing features to deliver scalable and detailed designs.`,
        },
        {
          src: "images/skills/adobe-indesign.png",
          alt: "Adobe InDesign",
          text: `Experienced in Adobe InDesign for creating professional layouts and print-ready designs. My projects include brochures, flyers, magazines, and other materials that require a high level of attention to typography and composition.`,
        },
      ],
    },
    {
      category: "Game <span class='highlights'>Development</span>",
      experience: "2 years experience",
      description: `I have a passion for crafting immersive gaming experiences through interactive design, storytelling, and dynamic gameplay. My expertise spans the entire game development lifecycle, from concept and design to coding and deployment. I focus on blending innovative mechanics with engaging visuals to create memorable gaming journeys.`,
      tools: [
        {
          src: "images/skills/CS.png",
          alt: "C#",
          text: `Experienced in C#, a versatile programming language used for developing games and applications. I use C# to implement game logic, build robust architectures, and optimize performance across platforms.`,
        },
        {
          src: "images/skills/Android Studio.png",
          alt: "Android Studio",
          text: `Proficient in Android Studio, a powerful IDE for developing Android applications. My work includes designing intuitive mobile interfaces, coding efficient backends, and integrating APIs for seamless functionality.`,
        },
        {
          src: "images/skills/java.png",
          alt: "Java",
          text: `Experienced in Java, leveraging its object-oriented programming features to develop backend systems, desktop applications, and games. I focus on writing clean, efficient, and maintainable code for a variety of projects.`,
        },
        {
          src: "images/skills/unity.png",
          alt: "Unity",
          text: `Proficient in Unity, a leading game development engine. I use Unity to design 3D environments, implement gameplay mechanics, and create immersive player experiences across multiple platforms.`,
        },
        {
          src: "images/skills/blender.png",
          alt: "Blender",
          text: `Skilled in Blender, a 3D modeling and animation software, for creating detailed game assets, characters, and animations. I leverage its versatile tools to bring concepts to life with precision and creativity.`,
        },
        {
          src: "images/skills/kotlin.png",
          alt: "Kotlin",
          text: `Experienced in Kotlin for mobile development, creating modern, efficient, and reliable Android applications. I utilize Kotlin's concise syntax and advanced features to streamline coding processes.`,
        },
      ],
    },
  ];

  const cardContainer = document.getElementById("card-container");
  skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";

    const heading = document.createElement("div");
    heading.className = "card-heading";
    heading.innerHTML = `<h2>${skill.category} <span class="highlights"></span></h2><h3>${skill.experience}</h3>`;
    card.appendChild(heading);

    const images = document.createElement("div");
    images.className = "card-images";

    let descriptionElement;

    skill.tools.forEach((tool) => {
      const img = document.createElement("img");
      img.src = tool.src;
      img.alt = tool.alt;
      img.width = 50;

      let isActive = false;

      img.onclick = () => {
        if (isActive) {
          img.classList.remove("active");
          img.classList.add("inactive");
        } else {
          img.classList.remove("inactive");
          img.classList.add("active");
        }
        isActive = !isActive;

        if (!descriptionElement) {
          descriptionElement = card.querySelector(".cards-cont p");
        }

        if (isActive) {
          descriptionElement.textContent = tool.text;
        } else {
          descriptionElement.textContent = skill.description;
        }
      };

      images.appendChild(img);
    });

    card.appendChild(images);

    const description = document.createElement("div");
    description.className = "cards-cont";
    description.innerHTML = `<p>${skill.description}</p>`;
    card.appendChild(description);

    card.onclick = function () {
      card.classList.toggle("active");
      card.classList.toggle("inactive");
    };

    cardContainer.appendChild(card);
  });
}

// end of skills

// Function to populate the Timeline Section
function populateTimelineSection() {
  document.getElementById(
    "time-title"
  ).innerHTML = `Experience<span class="highlights">.</span>`;
  document.getElementById(
    "time-sub"
  ).innerHTML = `Accomplishment <span class="highlights">Timeline</span>`;

  const timelineEvents = [
    {
      date: "August 2024 - Present",
      title: "Infocus <span class='highlights'>Publication</span>",
      role: "Editor-in-chief",
      description: `As the Editor-in-Chief of Infocus Publication, I lead a dynamic team in curating and producing high-quality content that serves the academic and student community. In this role, I oversee the editorial direction of the publication, ensuring that all articles, reports, and creative works maintain a high standard of accuracy, creativity, and relevance. I work closely with writers, designers, and videographers to ensure that our content effectively communicates important information, highlights student achievements, and reflects the spirit of the university. My leadership is driven by a passion for excellence, collaboration, and the impact of student journalism.`,
      imgSrc: "images/exp/infocus.png",
      imgAlt: "Infocus Publication",
    },
    {
      date: "October 2024",
      title: "DICT <span class='highlights'>Hack4Gov3</span>",
      role: "",
      description: `As a participant in the DICT Hack4Gov 3 competition organized by the Department of Information and Communications Technology (DICT) MIMAROPA, I specialized in web exploitation. This event, a capture-the-flag (CTF) challenge, tested advanced cybersecurity skills across various domains. My role focused on identifying vulnerabilities, analyzing web applications, and crafting effective exploitation techniques to solve intricate challenges. This experience not only honed my technical expertise but also deepened my understanding of cybersecurity's critical role in protecting digital assets and infrastructures.`,
      imgSrc: "images/exp/h4g.png",
      imgAlt: "Hack4Gov3",
    },
    {
      date: "May 2024",
      title: "6th Y4iT <span class='highlights'>Research Summit</span>",
      role: "",
      description: `I had the privilege of being one of the select participants at the 6th Y4iT Research Summit, chosen from over 300 applicants nationwide. During the summit, I presented my research titled "CarabaoCart: An E-Commerce Platform with Integrated Database Management." This study focused on developing a user-friendly e-commerce system tailored for local businesses, emphasizing seamless database integration to enhance efficiency and scalability. The experience allowed me to share insights into how technology can empower small-scale entrepreneurs while contributing to the digital transformation of local commerce.`,
      imgSrc: "images/exp/y4it.png",
      imgAlt: "Y4iT Research Summit",
    },
    {
      date: "February 2021 - 2023",
      title: "Free<span class='highlights'>lancer</span>",
      role: "",
      description: `I have also expanded my skills as a freelance graphic designer and video editor, collaborating with various campus organizations and events at De La Salle University. Through this experience, I contributed to creating visually compelling designs and engaging video content that aligned with the university’s high standards for creativity and professionalism. My work ranged from promotional materials and event posters to video highlights and multimedia presentations, showcasing my ability to deliver impactful visuals that resonate with diverse audiences.`,
      imgSrc: "images/exp/free.png",
      imgAlt: "Freelancer",
    },
    {
      date: "October 2019",
      title:
        "Regional Innovation <span class='highlights'>Contest and Exhibits</span>",
      role: "",
      description: `Building on the foundation of my previous research, I presented an enhanced version of my project at the Regional Innovation Contest and Exhibit. The improved study, titled "NPK Deficiency Detection in Palay Crops Using Leaf Color Scanning Technology and Arduino-Based Microcontrollers," featured advanced algorithms for more accurate nutrient deficiency analysis. This iteration incorporated refined calibration techniques, additional sensors for better data accuracy, and optimization of the Arduino programming in C++ to improve system efficiency. The project highlighted the potential of integrating technology with agricultural practices to promote precision farming, empowering farmers with innovative tools for sustainable crop management.`,
      imgSrc: "images/exp/dost.png",
      imgAlt: "Regional Innovation Contest",
    },
    {
      date: "September 2019",
      title:
        "Regional Science and <span class='highlights'>Technology Fair</span>",
      role: "",
      description: `At the Regional Science and Technology Fair, I presented an innovative research study focused on utilizing Arduino programming to detect NPK (Nitrogen, Phosphorus, and Potassium) deficiencies in palay crops. The project employed advanced leaf color scanning technology integrated with a microcontroller, which was programmed primarily in C++. This system showcased how technology could revolutionize agriculture by providing a cost-effective and accurate solution for assessing nutrient deficiencies, enabling farmers to optimize crop health, enhance productivity, and promote sustainable farming practices.`,
      imgSrc: "images/exp/rstf.png",
      imgAlt: "Science Fair",
    },
    {
      date: "2019 - 2020",
      title: "Researcher of <span class='highlights'>the Year</span>",
      role: "",
      description: `In 2020, I was honored to receive the prestigious Researcher of the Year award, a recognition of my dedication to innovation and excellence in the field of research. This accolade was a testament to my efforts in developing impactful projects, particularly my work on integrating technology with agriculture. My research on NPK deficiency detection in palay crops, utilizing Arduino-based programming and advanced leaf color scanning technology, stood out for its practical applications and potential to address real-world challenges. This achievement continues to inspire my commitment to pioneering solutions that contribute to scientific and technological advancements.</p>
                  <`,
      imgSrc: "images/exp/research.png",
      imgAlt: "Research Award",
    },
  ];

  const timelineList = document.getElementById("timeline-list");
  timelineEvents.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.className = "timeline-event";

    listItem.innerHTML = `
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">${event.date}</p>
                <h3>${event.title}</h3>
                <p>${event.role || ""}</p>
                <div class="infos-dets">
                    <p>${event.description}</p>
                    <img src="${event.imgSrc}" alt="${
      event.imgAlt
    }" width="50px">
                </div>
            </div>
        `;

    timelineList.appendChild(listItem);
  });
}

// end of timeline

// projects

function populateProjectSection() {
  // Data for the projects
  const projects = [
    {
      title: "CarabaoCart",
      description:
        "Your one-stop shop for carabao-derived products. Shop online, enjoy convenient delivery, and support local farmers. Admins, easily manage orders and keep track of inventory.",
      image: "images/proj/carabao.jpg",
      link: "https://primesalad.github.io/CarabaoCartv1/",
    },
    {
      title: "The Worlds Hardest Game",
      description:
        "The World's Hardest Game is a deceptively simple yet brutally challenging puzzle game. Guide a ball through a maze, avoiding deadly circles and collecting checkpoints.",
      image: "images/proj/whg.jpg",
      link: "https://youtu.be/zEp_0xPBuNQ",
    },
    {
      title: "FarmTech Agricopia",
      description:
        "A website empowering farmers, enriching lives. FarmTech Agricopia is committed to supporting local agriculture and promoting healthy eating.",
      image: "images/proj/farm.jpg",
      link: "https://primesalad.github.io/FarmTech_Agricopia_Admin/",
    },
    {
      title: "FarmTech Agricopia Mobile",
      description:
        "Connect with the farm. FarmTech Agricopia brings the farm to your phone, offering a convenient way to shop for fresh, organic, and sustainable products.",
      image: "images/proj/app1.jpg",
      link: "https://drive.google.com/file/d/1mqED3cj1K3AVUEpwDcjGelJMOrIPdVhQ/view",
    },
    {
      title: "AppQuest",
      description:
        "A versatile tool that combines essential functions with engaging features to make your day more productive and enjoyable.",
      image: "images/proj/app2.jpg",
      link: "https://drive.google.com/file/d/1jpprT9jFPtvnhC44DAQ-HjH-knjIwmjS/view",
    },
    {
      title: "MarSU logo",
      description:
        "Designed a modern and dynamic logo symbolizing Marinduque State University's commitment to excellence.",
      image: "images/proj/marsu.jpg",
      link: "https://youtu.be/9nl3yYgp-9I?si=KYVEiwTGwFnw5FyM",
    },
  ];

  const projDets = document.getElementById("projDets");
  projDets.innerHTML = `
        <h1 id="proj-title">Projects<span class="about-you">.</span></h1>
        <h2 class="proj-sub" id="sub">Work <span class="highlights">Showcase</span></h2>
    `;

  const projectContainer = document.getElementById("projectContainer");
  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("proj-item");

    projectItem.innerHTML = `
             <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="Project Image" width = "50px">
                <div class="proj-overlay">
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                </div>
            </a>
        `;

    projectContainer.appendChild(projectItem);
  });
}

// end of project

// Education Section Data
const educationDetails = [
  {
    type: "Degree",
    title:
      "Bachelor of Science in Information Technology - Major in Software Development",
    duration: "August 2022 - Present",
    institution: "Marinduque State University",
    image: "images/educ/marsulogo.png",
    link: "https://www.facebook.com/marinduquestatecollege",
  },
  {
    type: "Strand",
    title: "Science, Technology, Engineering, and Mathematics (STEM)",
    duration: "August 2020 - July 2022",
    institution: "Marinduque National High School",
    image: "images/educ/mnhs.png",
    link: "https://www.facebook.com/profile.php?id=100077375326566",
  },
];

const certifications = [
  "images/educ/certif/1.jpg",
  "images/educ/certif/2.jpg",
  "images/educ/certif/3.jpg",
  "images/educ/certif/4.jpg",
  "images/educ/certif/5.jpg",
  "images/educ/certif/6.jpg",
];

// Contact Section Data
const contactImage = "images/contact/morty.png";

const contactLinks = [
  {
    platform: "Email",
    icon: "fa-solid fa-envelope",
    link: "https://mail.google.com/",
    label: "g.landoyelpie@gmail.com",
  },
  {
    platform: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/asksff_/",
    label: "@asksff_",
  },
  {
    platform: "GitHub",
    icon: "fa-brands fa-github",
    link: "https://github.com/PrimeSalad",
    label: "/PrimeSalad",
  },
];

// Dynamically populate the education section
function populateEducationSection() {
  const educDets = document.getElementById("educDets");
  educDets.innerHTML = `<h1 id="educ-title">Education<span class="about-you">.</span></h1>`;

  const educContainer = document.getElementById("educContainer");
  educationDetails.forEach((educ) => {
    const educItem = document.createElement("div");
    educItem.classList.add("educ-mats");
    educItem.innerHTML = `
            <a href="${educ.link}" target="_blank"><img src="${educ.image}" alt="${educ.institution} Logo" width="50px">
            </a>
            <div class="educ-details">
                <h2>${educ.type}</h2>
                <h1>${educ.title}</h1>
                <h3>${educ.duration}</h3>
                <h3>${educ.institution}</h3>
            </div>
        `;
    educContainer.appendChild(educItem);
  });

  const certifContainer = document.getElementById("certifContainer");
  certifications.forEach((cert) => {
    const certImage = document.createElement("img");
    certImage.src = cert;
    certImage.alt = "Certification";
    certImage.classList.add("certif-img");
    certifContainer.appendChild(certImage);
  });

  document.querySelectorAll(".card-images img").forEach((img) => {
    img.addEventListener("click", function () {
      document
        .querySelectorAll(".card-images img")
        .forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Get all images in the certif class
  const images = document.querySelectorAll(".certif-img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const close = document.getElementsByClassName("close")[0];

  images.forEach((image) => {
    image.onclick = function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    };
  });

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Dynamically populate the contact section
function populateContactSection() {
  const contactDets = document.getElementById("contactDets");
  contactDets.innerHTML = `<h1 id="contact-title">Contact<span class="highlight">.</span></h1>`;

  const contactImageContainer = document.getElementById("contactImage");
  contactImageContainer.innerHTML = `<img src="${contactImage}" alt="Character with gun" />`;

  const contactFormContainer = document.getElementById("contactFormContainer");
  contactFormContainer.innerHTML = `
    <form class="contact-form" action="mailto:g.landoyelpie@gmail.com" method="POST" enctype="multipart/form-data">
        <div class="res-size">
            <input type="text" placeholder="Full Name" required class="text-contact full-name" name="full-name" />
            <input type="email" placeholder="Email Address" required class="text-contact email" name="email" />
        </div>
        <textarea placeholder="Message" required class="message" name="message"></textarea>
        <button type="submit" class="submit-btn">Submit</button>
    </form>
    `;

  const contactLinksContainer = document.getElementById("contactLinks");
  contactLinks.forEach((link) => {
    const linkItem = document.createElement("div");
    linkItem.classList.add("link-item");
    linkItem.innerHTML = `
            <a href="${link.link}" rel="noopener noreferrer" target="_blank">
                <i class="${link.icon}"></i>
            </a>
            <a href="${link.link}" rel="noopener noreferrer" target="_blank">
                <span>${link.label}</span>
            </a>
        `;
    contactLinksContainer.appendChild(linkItem);
  });
}

// Footer Data

const footerLogoText = "Gene Elpie<span>.</span>";
const socialIcons = [
  {
    platform: "Facebook",
    icon: "fab fa-facebook-f",
    link: "https://www.facebook.com/pickl.piee",
    ariaLabel: "Facebook",
  },
  {
    platform: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/asksff_/",
    ariaLabel: "Instagram",
  },
  {
    platform: "TikTok",
    icon: "fab fa-tiktok",
    link: "https://www.tiktok.com/@elpie.landoy",
    ariaLabel: "TikTok",
  },
  {
    platform: "YouTube",
    icon: "fab fa-youtube",
    link: "https://www.youtube.com/@S4laddd",
    ariaLabel: "YouTube",
  },
  {
    platform: "WhatsApp",
    icon: "fab fa-whatsapp",
    link: "https://www.whatsapp.com",
    ariaLabel: "WhatsApp",
  },
];

const footerNavLinks = [
  { text: "Home", href: "#start" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skill" },
  { text: "Experience", href: "#timeline" },
  { text: "Projects", href: "#project" },
  { text: "Education", href: "#educ" },
  { text: "Contact", href: "#contact" },
];

// Populate footer logo and social icons
function populateFooterr() {
  const footerLogo = document.getElementById("footerLogo");
  footerLogo.innerHTML = `
          ${footerLogoText}
          <div class="social-icons">
              ${socialIcons
                .map(
                  (icon) => `
                  <a href="${icon.link}" target="_blank" rel="noopener noreferrer" aria-label="${icon.ariaLabel}">
                      <i class="${icon.icon}"></i>
                  </a>
              `
                )
                .join("")}
          </div>
      `;

  const footerNav = document.getElementById("footerNav");
  footerNav.innerHTML = footerNavLinks
    .map((link) => `<a href="${link.href}">${link.text}</a>`)
    .join("");
}

var animateButton = function (e) {
  e.preventDefault();
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var buttons = document.querySelectorAll(".final .cv button");
buttons.forEach((button) => {
  button.addEventListener("click", animateButton, false);
});

function startTypingEffect(roles) {
  const typingElement = document.getElementById("typing-effect");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    let displayedText = isDeleting
      ? currentRole.substring(0, charIndex--)
      : currentRole.substring(0, charIndex++);

    const firstSpaceIndex = displayedText.indexOf(" ");
    if (firstSpaceIndex !== -1) {
      const firstWord = displayedText.substring(0, firstSpaceIndex);
      const restText = displayedText.substring(firstSpaceIndex);
      displayedText = `<span class="first-word">${firstWord}</span>${restText}`;
    }

    typingElement.innerHTML = displayedText;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
  }

  typingElement.style.visibility = "hidden";
  setTimeout(() => {
    typingElement.style.visibility = "visible";
    typingElement.classList.add("typing-active");
  }, 300);

  type();
}

function updateText(imageElement, newText) {
  const cardContainer = imageElement.closest(".skill-card");
  const textContainer = cardContainer.querySelector(".cards-cont p");
  textContainer.textContent = newText;
}

document.querySelectorAll(".leftToRight-anim").forEach((about) => {
  about.classList.add("left-right-animation");
});

const lrobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("left-to-right-animate");
    }
  });
});

function observeLeftToRightElements() {
  const leftToRightElements = document.querySelectorAll(
    ".left-right-animation"
  );
  leftToRightElements.forEach((el) => lrobserver.observe(el));
}

// populateIntro();
// populateNavLinks();
