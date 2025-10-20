export const projects = [
  {
    id: 1,
    title: "Cross Cultural Facial Emotion Recognition",
    category: "Machine Learning & AI",
    description: "Engineered end-to-end pipeline for cross-cultural emotion recognition applying domain adaptation between Japanese and Indian facial emotion datasets",
    technologies: ["Python", "TensorFlow", "PyTorch", "ResNet-18", "ResNet-50", "Transfer Learning"],
    features: [
      "Domain adaptation between cultural datasets", 
      "Optimized ResNet-18 and ResNet-50 architectures",
      "62% accuracy with 32% performance improvement",
      "Hyperparameter tuning and cross-validation"
    ],
    github: "https://github.com/pogitha/emotion-recognition",
    demo: "#",
    image: "/images/projects/emotion-recognition.jpg",
    status: "Ongoing Research",
    achievements: ["62% accuracy", "32% performance improvement"]
  },
  {
    id: 2, 
    title: "FOE Course Registration System",
    category: "Web Development",
    description: "Built fully responsive course registration portal using ASP.NET MVC to enable self-service enrollment and streamline administrative processes",
    technologies: ["ASP.NET MVC", "MS SQL Server", "CSS", "JavaScript", "C#"],
    features: [
      "Self-service course enrollment system",
      "Normalized SQL database schema",
      "Administrative dashboard",
      "Responsive design for all devices"
    ],
    github: "https://github.com/pogitha/course-registration",
    demo: "#",
    image: "/images/projects/course-registration.jpg"
  },
  {
    id: 3,
    title: "Air Quality Monitoring System", 
    category: "IoT & Web Development",
    description: "Developed React-based dashboard integrating MQTT ingestion and MongoDB for real-time visualization of multi-sensor environmental data",
    technologies: ["React.js", "MongoDB", "MQTT", "Node.js", "Chart.js"],
    features: [
      "Real-time sensor data visualization",
      "Multi-parameter monitoring (CO, PM2.5, PM10, temperature, humidity)",
      "MQTT protocol integration",
      "Interactive dashboard with live updates"
    ],
    github: "https://github.com/pogitha/air-quality-monitor",
    demo: "#",
    image: "/images/projects/air-quality.jpg"
  },
  {
    id: 4,
    title: "Image Caption Generator",
    category: "Machine Learning & AI", 
    description: "End-to-end image captioning system using custom CNN for feature extraction and LSTM for sequence modeling with descriptive caption generation",
    technologies: ["Python", "TensorFlow", "CNN", "LSTM", "NumPy", "Pandas"],
    features: [
      "Custom CNN feature extraction architecture",
      "LSTM sequence modeling for caption generation", 
      "Word embedding integration",
      "Hyperparameter optimization pipeline"
    ],
    github: "https://github.com/pogitha/image-caption-generator",
    demo: "#",
    image: "/images/projects/image-caption.jpg"
  },
  {
    id: 5,
    title: "Face Recognition System",
    category: "Computer Vision",
    description: "Real-time face detection and recognition with labeled profiles for multiple users, suitable for security and attendance systems",
    technologies: ["Python", "OpenCV", "Haar-cascade", "Computer Vision"],
    features: [
      "Real-time face detection and recognition",
      "Multiple user profile management", 
      "Webcam integration for live monitoring",
      "Security and attendance system applications"
    ],
    github: "https://github.com/pogitha/face-recognition",
    demo: "#", 
    image: "/images/projects/face-recognition.jpg"
  },
  {
    id: 6,
    title: "Page Replacement Simulator",
    category: "Algorithms & Systems",
    description: "Built React-based simulator to visualize and compare page replacement algorithms with step-by-step tracking of page faults and memory states",
    technologies: ["React.js", "JavaScript", "Data Structures", "Algorithms"],
    features: [
      "FIFO, LRU, LFU, MFU algorithm comparison",
      "Step-by-step memory state visualization",
      "Page fault tracking and analysis", 
      "Interactive simulation controls"
    ],
    github: "https://github.com/pogitha/page-replacement-simulator",
    demo: "#",
    image: "/images/projects/page-replacement.jpg"
  },
  {
    id: 7,
    title: "Feedback Management System",
    category: "Web Development",
    description: "Engineered Bootstrap-driven feedback application with PHP and MySQL to centralize user submissions and simplify administrator review",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Centralized user feedback collection",
      "Administrative review dashboard",
      "Bootstrap responsive design",
      "MySQL database integration"
    ],
    github: "https://github.com/pogitha/feedback-management",
    demo: "#",
    image: "/images/projects/feedback-system.jpg"
  },
  {
    id: 8,
    title: "Loan Status Prediction",
    category: "Machine Learning & AI",
    description: "Built predictive models to forecast loan approval status using machine learning techniques with feature engineering and hyperparameter optimization",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Machine learning prediction models",
      "Feature engineering and selection",
      "Hyperparameter tuning optimization",
      "High prediction accuracy for efficient resource allocation"
    ],
    github: "https://github.com/pogitha/loan-prediction",
    demo: "#",
    image: "/images/projects/loan-prediction.jpg"
  }
];

export const projectCategories = [
  "All",
  "Machine Learning & AI", 
  "Web Development",
  "Computer Vision",
  "IoT & Web Development", 
  "Algorithms & Systems"
];

