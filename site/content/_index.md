---
# It is often better to set the title in hugo.toml, but can be set here too.
# title: "Top Focus LLC - Your Technical Partner for Web Apps, SaaS & AI"
# layout: "homepage" # Optional: Can specify a different layout file if needed

hero:
  title: "Build, Scale & Innovate!"
  subtitle: "Partnering with Founders to Launch Scalable SaaS Platforms, MVPs and AI Systems."
  button_text: "Discuss Your Project"
  button_url: "https://calendly.com/moritzlaass/consultation"

client_logos:
  intro: "Trusted by ambitious founders and businesses"
  placeholder_text: "(Client logos section - Please provide 4-8 client logos)"

  logos:
    - src: "/img/landing/uverd_logo_type.svg"
      alt: "Uverd ltd"
    - src: "/img/landing/BMW_logo.svg"
      alt: "BMW Group"
    - src: "/img/landing/allianz_logo.png"
      alt: "Allianz SE"
    - src: "/img/landing/joe_security_logo.svg"
      alt: "Joe Security"
    - src: "/img/landing/e_bot7_logo.jpeg"
      alt: "eBot7"
    - src: "/img/landing/proBindr_logo.jpg"
      alt: "proBindr"
    - src: "/img/landing/wehrle_logo.png"
      alt: "Wehrle"

services:
  title: "Full-Stack Development, SaaS & AI Expertise"
  intro: "Top Focus LLC partners with ambitious founders and businesses to transform complex ideas into high-performance web applications, SaaS platforms, and AI-integrated systems. We provide strategic leadership and hands-on development, bridging the gap between your vision and successful execution using modern technologies."
  items:
    - title: "Custom Web Application Development"
      description: "Building tailored, high-performance web applications from scratch using modern frameworks like React, Svelte, Node.js, and Python/FastAPI. Get a unique, scalable web application perfectly aligned with your business processes and goals."
      icon_name: "code-bracket-square" # Reference to heroicon name (outline)
    - title: "AI Strategy & LLM Integration"
      description: "Designing, developing, and integrating Large Language Model (LLM) agents and OpenAI APIs into robust, production-ready systems. Leverage cutting-edge AI to enhance your products, automate processes, and create business value."
      icon_name: "cpu-chip" # Reference to heroicon name (outline)
    - title: "SaaS Platform Development"
      description: "End-to-end development of Software-as-a-Service platforms, from architecture design to deployment and scaling, using resilient cloud infrastructure. Launch and grow your SaaS business on a reliable, scalable, and high-performance foundation."
      icon_name: "cloud" # Reference to heroicon name (outline)
    - title: "Technical Strategy & Fractional CTO"
      description: "Providing strategic technical leadership, architecture planning, and guidance to align technology with your business objectives. Make informed technology decisions and build a future-proof technical foundation without hiring a full-time CTO."
      icon_name: "light-bulb" # Reference to heroicon name (outline)
    - title: "IoT & Embedded Systems"
      description: "Developing IoT platforms using technologies like MQTT and firmware for devices (e.g., Arduino based). Connect your physical devices to the digital world with custom IoT solutions and reliable data handling."
      icon_name: "wifi" # Reference to heroicon name (outline)
    - title: "Project Rescue & Modernization"
      description: "Tackling complex technical challenges, turning around struggling projects, and modernizing legacy systems with extensive full-stack expertise. Get your critical projects back on track and ensure your systems are robust, scalable, and maintainable."
      icon_name: "arrow-path" # Reference to heroicon name (outline)

case_studies:
  title: "Case Studies & Portfolio"
  items:
    - title: "UVERD - Environmental IoT Platform"
      description: "Developed an IoT platform for environmental monitoring in the Amazon, helping prevent illegal logging and track pollution levels."
      tags: ["Real-time Alerts", "Scalable Data", "MQTT Integration"]
      image: "/img/portfolio/uverd_case_study.png"
      image_alt: "UVERD Environmental Monitoring Platform Screenshot"
      details_anchor: "#project-uverd" # Links to the section still in index.html
      tag_colors: ["indigo", "green", "blue"] # For styling tags

    - title: "klang2 App - Interactive Audio Game"
      description: "Developed an innovative interactive audio game with Flutter, featuring NFC integration and user-generated content capabilities."
      tags: ["Flutter", "NFC", "Audio Game", "Django Backend"]
      image: "/img/portfolio/klang2_case_study.png"
      image_alt: "klang2 App Screenshot"
      details_anchor: "#project-klang2"
      tag_colors: ["red", "orange", "blue", "green"]

    - title: "Internal Learning Platform MVP"
      description: "Built an internal Minimum Viable Product (MVP) for a quiz and learning platform to test concepts and gather feedback."
      tags: ["Rapid MVP", "SvelteKit", "Internal Tool"]
      image: "/img/portfolio/tgb_case_study.png"
      image_alt: "Internal Quiz and Learning MVP Screenshot"
      details_anchor: "#project-green-bookkeeper"
      tag_colors: ["green", "yellow", "red"]


    # - title: "DataPulse Insights Dashboard"
    #   description: "Designed and built a custom web dashboard for tracking key business performance indicators (KPIs) and generating insights."
    #   tags: ["KPI Visualization", "React & Supabase", "Actionable Insights"]
    #   image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=DataPulse+Insights"
    #   image_alt: "DataPulse Insights Dashboard Screenshot"
    #   details_anchor: "#project-marketing-dash"
    #   tag_colors: ["blue", "red", "purple"]

testimonials:
  title: "Hear From Our Clients"
  items:
    - quote: "Had an excellent experience with Moritz. He took the time to understand the requirements and patiently made iterations as the project went along. Communication was prompt and the output as desired. Would recommend him highly."
      name: "Aditya Bakshi"
      title: "Editor @ Damned.com"
      image: "/img/generic_avatar_placeholder.png"
      image_alt: "Aditya Bakshi Photo Placeholder"
  more_testimonials_note: "(More testimonials coming soon...)"

process:
  title: "Our Collaborative Process"
  steps:
    - title: "Discovery"
      description: "Deep understanding of your business objectives and technical requirements through collaborative discussion."
    - title: "Strategy & Design"
      description: "Collaborative planning, architecture design, and roadmap creation tailored to your specific goals and constraints."
    - title: "Agile Development"
      description: "Iterative building using agile methodologies, with regular demos and feedback loops to ensure alignment."
    - title: "Quality Assurance"
      description: "Comprehensive testing, code reviews, and performance optimization to deliver a robust and reliable solution."
    - title: "Launch & Handoff"
      description: "Smooth deployment to your infrastructure, thorough documentation, and knowledge transfer to your team."

team:
  title: "Meet Your Technical Partner"
  member:
    name: "Moritz Laass"
    title: "Technical Partner / Full-Stack Developer & AI Specialist"
    bio: "With over 15 years of experience, doctoral-level research background, and degrees in Human-Computer Interaction & Design, Moritz partners with businesses to build high-performance web apps, SaaS platforms, and AI systems. He offers end-to-end technical expertise, from strategic planning to hands-on development in technologies like React, Python, Node.js, and AI/LLMs. He excels at solving complex problems and delivering scalable, resilient solutions."
    credentials: "MSc HCI (LMU), BA Process Design (FHNW), PhD Research (TUM). Expertise in Full-Stack, AI/LLM, SaaS, IoT."
    image: "/img/landing/moritz_laass_headshot.jpg" # Consider moving to static/img
    image_alt: "Moritz Laass Headshot Placeholder"
    linkedin: "http://www.linkedin.com/in/moritzlaass"
    github: "https://github.com/mlaass"

bottom_cta:
  title: "Ready to Build or Scale Your Vision?"
  text: "Let's discuss how Top Focus LLC can become your dedicated technical partner. Book a free 30-minute consultation to explore your project goals and see if we're the right fit."
  button_text: "Book Your Free Consultation"
  button_url: "https://calendly.com/moritzlaass/consultation"

additional_testimonials:
  title: "More Client Success Stories"
  items:
    - quote: "Working with Moritz was a fantastic experience. He possesses deep technical knowledge, communicates clearly and proactively, and consistently delivered high-quality work. He's a reliable partner who genuinely cares about the project's success."
      name: "Tye Kirk"
      title: "Founder @ The Green Bookkeeper"
      # result: "" # Add specific result if available
    - quote: "Great freelancer. Works autonomously towards the goal! Great communication! Great feedback! Will continue working with him."
      name: "Pojan Dehnavi"
      title: "Owner @ Dehnavi Labs"
      # result: ""
    # - quote: "Placeholder testimonial quote..."
    #   name: "[Client Name]"
    #   title: "[Company, Title]"
    #   result: "(Result: e.g., Met critical deadline)" # Example

contact:
  title: "Let's Discuss Your Project"
  text: "Book a free 30-minute consultation via Calendly to discuss your vision, technical requirements, and how Top Focus LLC can help you succeed."
  button_text: "Schedule Consultation Now"
  button_url: "https://calendly.com/moritzlaass/consultation"
  location: "Based in Idar-Oberstein, Germany | Serving clients globally (Remote)"
  hours: "Business Hours: Flexible - Book via Calendly"
  linkedin: "http://www.linkedin.com/in/moritzlaass"
  github: "https://github.com/mlaass"

# --- Detailed Project Sections ---
# NOTE: It's generally better practice to move these into their own
# content files (e.g., content/projects/uverd.md) or data files.
# Keeping them here temporarily for simplicity during refactoring.

project_uverd:
  title: "Project Details: UVERD - Environmental IoT Platform"
  subtitle: "An IoT platform for environmental monitoring, helping to prevent illegal logging and monitor pollution in the Amazon."
  screenshots:
    - src: "/img/portfolio/uverd_monitoring.png"
      alt: "UVERD Dashboard Screenshot"
    - src: "/img/portfolio/Uverd-IoT-and-sensors.jpg"
      alt: "UVERD IOT and sensors Diagram"
    - src: "/img/portfolio/uverd-web-app.jpg"
      alt: "UVERD IOT sensors"
    - src: "/img/portfolio/uverd_gps.png"
      alt: "UVERD GPS Tracking System Screenshot"
  description: |
    UVERD is a specialized Internet of Things (IoT) platform designed for critical environmental monitoring tasks in sensitive regions like the Amazon rainforest. It collects data from various sensors to detect activities related to illegal logging and monitor air and water pollution levels. The platform provides real-time data visualization, customizable alerts for threshold breaches, and historical data analysis capabilities to support conservation efforts and environmental protection agencies.

    Key challenges involved ensuring reliable data transmission from remote areas, processing large volumes of time-series data efficiently, and creating an intuitive interface for non-technical users involved in environmental monitoring.
  tech_stack:
    - "<strong>Frontend:</strong> Svelte, Chart.js, Tailwind CSS"
    - "<strong>Backend:</strong> Python (FastAPI)"
    - "<strong>Database:</strong> PostgreSQL with TimescaleDB extension"
    - "<strong>Infrastructure:</strong> Digital Ocean backend & Netlify Frontend"
    - "<strong>Protocols & Messaging:</strong> MQTT, Mosquitto, "
  results:
    - "Enabled real-time detection of potential illegal logging activities via custom sensors."
    - "Provided continuous monitoring of key pollution indicators"
    - "Successfully processed and stored millions of data points"
    - "Offered a user-friendly dashboard for visualizing complex environmental data."

project_green_bookkeeper:
  title: "Project Details: Internal Learning Platform MVP"
  subtitle: "An internal Minimum Viable Product (MVP) for a quiz and learning platform."
  screenshots:
    - src: "/img/portfolio/tgb_courseview2.png"
      alt: "Quiz Interface Screenshot"
    - src: "/img/portfolio/tgb_course_editing.png"
      alt: "Quiz Interface Screenshot"
  description: |
    This project involved the rapid development of an internal Minimum Viable Product (MVP) designed as a quiz and learning tool. The primary goal was to quickly build and deploy a functional prototype to test core concepts, validate user interaction patterns, and gather internal feedback before committing to a larger-scale development effort. The focus was on core functionality, user experience basics, and fast iteration.

    The MVP allowed users to take quizzes on specific topics, review learning materials, and track basic progress. It served as a valuable proof-of-concept and learning exercise.
  tech_stack:
    - "<strong>Frontend:</strong> SvelteKit, Tailwind CSS"
    - "<strong>Backend:</strong> Python (FastAPI)"
    - "<strong>Database:</strong> PostgreSQL"
    - "<strong>Infrastructure:</strong> Digital Ocean Backend & Netlify Frontend"
  results:
    - "Delivered functional MVP within 4 weeks."
    - "Successfully validated core quiz and learning module concepts internally."
    - "Gathered actionable feedback for future development iterations."
    - "Demonstrated the suitability of SvelteKit and FastAPI for rapid prototyping."

project_klang2:
  title: "Project Details: klang2 App - Interactive Audio Game"
  subtitle: "A Flutter-based interactive audio game leveraging NFC and user-generated content."
  screenshots:
    - src: "/img/portfolio/klang2_screen2.png" # Placeholder color: Red
      alt: "klang2 App Game Interface Screenshot"
    - src: "/img/portfolio/klang2_screen3.png" # Placeholder color: Red
      alt: "klang2 App Game Interface Screenshot"
    - src: "/img/portfolio/klang2_appstore.png" # Placeholder color: Red
      alt: "klang2 App Store Screenshot"

  description: |
    Developed the "klang2 app," an innovative interactive audio game for the German company klang2. Built using Flutter for cross-platform compatibility, the app featured unique gameplay mechanics centered around audio experiences, NFC reader integration for physical interactions, and capabilities for user-generated content (UGC). The backend, powered by Django, managed user data, content, and game logic.

    A key requirement was the pixel-perfect implementation of the UI/UX design provided by the client in Figma, ensuring a high-fidelity user experience. The successful launch of this app was instrumental in klang2's entry into the competitive German market.
  tech_stack:
    - "<strong>Mobile App:</strong> Flutter"
    - "<strong>Backend:</strong> Python (Django)"
    - "<strong>Database:</strong> PostgreSQL"
    - "<strong>Features:</strong> NFC Reader Integration, Audio Playback, User Generated Content Management"
    - "<strong>Design Implementation:</strong> Pixel-perfect translation from Figma"
    - "<strong>Design Implementation:</strong> Smooth animations and custom UX"
  results:
    - "Successfully facilitated klang2's market entry into Germany."
    - "Delivered a pixel-perfect implementation of the client's Figma design."
    - "Integrated complex features including NFC and audio manipulation."
    - "Enabled user-generated content, fostering community engagement."
    - "Received positive feedback on app performance and user experience."

---



