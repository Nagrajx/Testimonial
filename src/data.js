const reviews = [
  {
    id: 1,
    name: "Satish Nagraj",
    job: "Software Engineer",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg",
    text: "Collaborating with the team was an enriching experience. I joined with solid fundamentals, but working on real projects helped me develop practical skills in debugging, performance tuning, and system design."
  },
  {
    id: 2,
    name: "Shreeyansh Kourav",
    job: "Frontend Developer",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_01.jpg",
    text: "Being a frontend developer in this team taught me the importance of detail, performance, and user-centric design. I learned to build interfaces that were not only responsive and attractive but also accessible and efficient. From working with modern JavaScript frameworks to understanding the logic behind UI/UX decisions, every task improved my craft. Collaboration across departments made it easier to solve complex problems. I was also able to share knowledge and help junior developers, which boosted my confidence. This journey helped me mature into a more thoughtful and capable developer."
  },
  {
    id: 3,
    name: "Dipesh Rathore",
    job: "UI/UX Designer",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg",
    text: "Working here was a brilliant opportunity to dive deep into user experience design. I got to craft user flows, design intuitive interfaces, and learn from real user feedback. The projects were fast-paced and challenging, which pushed me to refine my design thinking and communication skills. I also collaborated closely with frontend developers to ensure pixel-perfect implementations. Seeing my designs go live and positively impact users was a rewarding experience. The team valued creativity and always encouraged exploration of new ideas and trends in design."
  },
  {
    id: 4,
    name: "Vivek Sing Rajawat",
    job: "Backend Developer",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_com_crd_01.jpg",
    text: "My time as a backend developer on the team was filled with opportunities to learn and grow. From building RESTful APIs to managing databases and optimizing server logic, I was involved in key technical decisions. I appreciated how the team followed clean code practices and encouraged testing and documentation. Debugging real-world issues taught me patience and analytical thinking. The leadership trusted us with responsibilities, which pushed me to be accountable and proactive. Every sprint brought new technical challenges and learning experiences that helped me become a more confident developer."
  },
  {
    id: 5,
    name: "Yogendra Nikum",
    job: "DevOps Engineer",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_com_crd_01.jpg",
    text: "As a DevOps engineer, I was responsible for ensuring reliable deployments and monitoring infrastructure. I learned about CI/CD pipelines, cloud deployment strategies, and infrastructure as code. The work was fast-paced and high-stakes, but the team was always there to support each other. I enjoyed automating processes and improving system stability. I also worked on setting up alerts and dashboards, which gave me insight into how systems behave in production. This experience boosted both my confidence and problem-solving skills tremendously."
  },
  {
    id: 6,
    name: "Deepak Mewada",
    job: "Mobile App Developer",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_com_crd_01.jpg",
    text: "Joining as a mobile app developer, I had the opportunity to build and maintain applications used by real users. Working with cross-platform frameworks, integrating APIs, and handling device-specific quirks taught me a lot about mobile ecosystems. The team always emphasized user feedback and iterative improvements, which made development meaningful. I learned how to handle crashes, optimize app performance, and manage app store submissions. It was fulfilling to see our apps get downloads and good reviews. Overall, it was an exciting and highly educational experience."
  },
  {
    id: 7,
    name: "Ritesh Unknown",
    job: "QA Engineer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",

    text: "As a QA engineer, I focused on ensuring the quality and reliability of every release. I built test cases, automated regression tests, and closely worked with developers to find and resolve bugs quickly. The attention to detail and responsibility I developed here were invaluable. I learned various testing tools and frameworks, and contributed to setting up test environments. Working in sync with development and operations helped me understand the full product lifecycle. I now view software from a holistic quality perspective, not just functionality."
  },
  {
    id: 8,
    name: "Anjali Girwar",
    job: "Project Manager",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_crd_01.jpg",
    text: "Managing multiple projects with dynamic teams helped me grow immensely as a project manager. From sprint planning to stakeholder updates, I was at the center of coordination and delivery. I learned to manage timelines, track progress with tools like Jira, and ensure team collaboration. Leading meetings and resolving conflicts gave me more confidence in handling people and expectations. What made this role special was the culture—everyone cared about doing their best work. I'm grateful for how this experience prepared me to manage high-stakes projects under pressure."
  },
  {
    id: 9,
    name: "Ekta Ade",
    job: "Business Analyst",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    text: "My role as a business analyst involved translating client needs into actionable insights. I conducted stakeholder interviews, mapped out user stories, and helped the development team align their goals with business priorities. This required strong communication, documentation, and analytical thinking. I was often the bridge between non-technical clients and our tech teams, which helped me improve my interpersonal and negotiation skills. It was rewarding to see ideas go from concept to implementation with my input at the core. I came away much stronger in both soft and strategic skills."
  },
  {
    id: 10,
    name: "Dikshika Gupta",
    job: "Data Scientist",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
    text: "As a data scientist, I had the chance to work with real-world datasets, build predictive models, and deliver insights that informed business decisions. I used Python, Pandas, scikit-learn, and visualization tools to make data meaningful. The problems were complex, but the environment was collaborative. I appreciated the freedom to explore solutions and the support from the team. Presenting results to non-technical stakeholders helped me improve storytelling with data. I learned to balance accuracy with interpretability, and I left with a deep appreciation for the impact data can have when used thoughtfully."
  },
   {
    id: 11,
    name: "Niraj Vermaa",
    job: "Full Stack Developer",
    image: "https://i.postimg.cc/1zYyGNxW/Niraj.jpg",
    text: "Being part of this development team was a game changer for me. I got hands-on experience with both frontend and backend technologies, including React, Node.js, and PostgreSQL. The pace of the work pushed me to keep learning, and I loved that we were encouraged to try new things. There was a strong emphasis on clean code and test coverage, which helped me build habits that I now apply in all my work. The mentorship I received here was phenomenal—it shaped my approach to building scalable software systems. This experience truly elevated my career."
  },
   {
    id: 12,
    name: "Prateek Chouhan",
    job: "Content Strategist",
    image: "https://i.postimg.cc/x1kL2LfQ/Preetak.jpg",
    text: "As a content strategist, I had the opportunity to shape the brand voice across multiple platforms. From blog content to social media storytelling, I worked closely with designers, marketers, and developers to deliver cohesive messaging. The fast-paced environment taught me how to balance creativity with deadlines. I enjoyed crafting copy that resonated with our audience and analyzing performance metrics to optimize engagement. This experience gave me a strong foundation in both content creation and strategic thinking, preparing me for future leadership roles in digital marketing."
  }
];

export default reviews