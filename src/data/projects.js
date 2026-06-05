export const projects = [
  {
    id: 1,
    title: "EarningsAI Assistant",
    category: "GenAI",
    customer: "Biggest South East Asian Bank",
    description: "Enterprise earnings analysis platform with AI-powered insights and natural language querying.",
    detailedDescription: "A sophisticated AI assistant that analyzes earnings reports using large language models, providing executives with instant insights, trend analysis, and comparative financial intelligence across quarters and competitors.",
    problem: "Finance teams spend hours manually analyzing earnings reports, extracting key metrics, and comparing performance across periods. This manual process is time-consuming and prone to missing critical insights.",
    solution: "Built an AI-powered platform that ingests earnings documents, creates embeddings for semantic search, and uses LLMs to answer complex financial questions in natural language. The system provides instant comparative analysis and trend identification.",
    technologies: ["Python", "LangChain", "SAP AI Core", "SAP Generative AI Hub", "Vector Search", "SAP HANA Cloud"],
    outcomes: [
      "Reduced analysis time from hours to minutes",
      "Improved insight discovery through semantic search",
      "Enabled natural language querying of financial data",
      "Automated trend detection and anomaly identification"
    ],
    tags: ["GenAI", "LLM", "Financial Analysis"],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "OilBot Document Intelligence",
    category: "Knowledge Systems",
    customer: "Oil India Limited",
    description: "Award-winning mobile app with AI chatbot serving 6400+ employees for HR queries, document intelligence, and organizational guidelines.",
    detailedDescription: "A groundbreaking mobile application built on SAP Build Apps and Mobile Services, featuring an intelligent AI chatbot that provides instant answers to employee queries about leave balance, reimbursements, payslips, and official guidelines. This solution won the SAP Ace Award and became the first SAP Build Apps and Mobile Services implementation for any CPSE (Central Public Sector Enterprise) company in India.",
    problem: "Oil India's 6400+ employees needed instant access to HR information like leave balances, reimbursement status, payslips, and organizational policies. Traditional methods required navigating multiple systems, contacting HR, or searching through document repositories, leading to delays and reduced productivity.",
    solution: "Developed a comprehensive mobile application using SAP Build Apps and SAP Mobile Services, integrated with an AI-powered chatbot built on SAP AI Core and LangChain. The chatbot uses RAG (Retrieval-Augmented Generation) to query HR data from SAP systems and organizational documents, providing employees with instant, accurate answers through natural conversation on their mobile devices.",
    technologies: ["SAP Build Apps", "SAP Mobile Services", "SAP AI Core", "LangChain", "RAG", "SAP HANA Vector Engine", "Python", "Document AI"],
    outcomes: [
      "Served 6400+ employees with instant HR information access",
      "Won the prestigious SAP Ace Award",
      "First SAP Build Apps + Mobile Services solution for CPSE company in India",
      "Reduced HR query resolution time by 90%",
      "Improved employee satisfaction with self-service capabilities",
      "Automated responses for leave, reimbursement, and payslip queries"
    ],
    tags: ["Mobile App", "SAP Build Apps", "HR Automation", "Award Winner"],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "SAP PR Creation Chatbot",
    category: "SAP AI",
    customer: "JK Cements",
    description: "Conversational AI assistant for creating SAP purchase requisitions with validation and enrichment.",
    detailedDescription: "An intelligent chatbot that streamlines procurement workflows by enabling users to create purchase requisitions through natural conversation, with built-in validation, material master enrichment, and SAP S/4HANA integration.",
    problem: "Creating purchase requisitions in SAP requires navigating complex screens, knowing material codes, and understanding procurement rules. New users struggle with the process, leading to errors and delays.",
    solution: "Built an AI-powered conversational interface that guides users through PR creation using natural language. The system validates inputs, enriches data from SAP master data, applies business rules, and submits directly to S/4HANA via OData APIs.",
    technologies: ["Python", "LangChain", "SAP S/4HANA APIs", "SAP AI Core", "Flask", "SAP BTP"],
    outcomes: [
      "Reduced PR creation time by 70%",
      "Decreased user training requirements",
      "Improved data quality through automated validation",
      "Enhanced user adoption of procurement processes"
    ],
    tags: ["SAP Integration", "Procurement", "Chatbot"],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 4,
    title: "AI Inventory Management Chatbot",
    category: "SAP AI",
    customer: "Saudi Water Authority",
    description: "Conversational interface for SAP inventory operations with real-time analytics and insights.",
    detailedDescription: "A comprehensive AI assistant for inventory management that provides natural language access to stock levels, GR/IR mismatches, dead stock analysis, and procurement recommendations, all integrated with SAP S/4HANA.",
    problem: "Warehouse managers and procurement teams need quick visibility into inventory status, but accessing this information requires navigating multiple SAP transactions and generating complex reports.",
    solution: "Developed an AI chatbot that connects to SAP S/4HANA inventory APIs, processes natural language queries, and delivers instant insights on stock levels, material movements, dead stock, and GR/IR reconciliation. The system proactively identifies issues and suggests actions.",
    technologies: ["Python", "LangGraph", "SAP S/4HANA Integration", "SAP AI Core", "OData APIs", "Agentic"],
    outcomes: [
      "Real-time inventory visibility through conversational queries",
      "Faster identification of GR/IR mismatches",
      "Proactive dead stock alerts and recommendations",
      "Improved procurement planning with AI-driven insights"
    ],
    tags: ["SAP Integration", "Inventory", "Analytics"],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 5,
    title: "Automated PR Creation & Approval Workflow",
    category: "Automation",
    customer: "Exide Industries",
    description: "End-to-end automated purchase requisition creation, validation, approval routing, and email notification system.",
    detailedDescription: "An intelligent procurement automation solution built on SAP Build Process Automation that streamlines the entire purchase requisition lifecycle. The system automatically creates PRs, validates data against business rules, routes for multi-level approvals, triggers email notifications, and provides detailed error reporting for failed transactions.",
    problem: "Manual PR creation and approval processes are time-consuming and error-prone. Users must navigate complex SAP screens, wait for sequential approvals, and manually track PR status. Errors during creation often go unnoticed until later stages, causing delays. Approvers lack visibility into pending requests, and requesters don't receive timely updates on PR status.",
    solution: "Developed a comprehensive automation solution using SAP Build Process Automation integrated with SAP S/4HANA. The system features automated PR creation from structured inputs (Excel, forms, or API calls), intelligent validation against SAP master data and business rules, dynamic approval routing based on amount thresholds and organizational hierarchy, real-time email notifications to requesters and approvers, detailed error logging with root cause analysis, and automatic retry mechanisms for transient failures.",
    technologies: ["SAP Build Process Automation", "SAP S/4HANA APIs", "OData", "Email Integration", "Python", "SAP BTP"],
    outcomes: [
      "85% reduction in PR creation time from request to approval",
      "Automated routing to appropriate approvers based on business rules",
      "Real-time email notifications for all stakeholders",
      "Comprehensive error reporting preventing failed PR submissions",
      "Improved compliance with automated validation rules",
      "Enhanced visibility into procurement pipeline for management"
    ],
    tags: ["Process Automation", "Procurement", "Workflow", "Email Notifications"],
    github: null,
    demo: null,
    featured: true
  },
  // {
  //   id: 6,
  //   title: "SAP Knowledge Graph Explorer",
  //   category: "Knowledge Systems",
  //   customer: "Enterprise Shared Services",
  //   description: "Neo4j-based knowledge graph for SAP business processes with intelligent relationship mapping.",
  //   detailedDescription: "An advanced knowledge graph system that maps SAP business processes, master data relationships, and organizational structures, enabling intelligent navigation and discovery of connections across the enterprise.",
  //   problem: "Enterprise data in SAP systems is highly interconnected but difficult to visualize and explore. Understanding relationships between materials, vendors, cost centers, and processes requires deep system knowledge.",
  //   solution: "Built a knowledge graph platform that extracts SAP data, identifies relationships, and creates a Neo4j graph database. The system enables visual exploration, path analysis, and graph-based querying to uncover hidden insights and dependencies.",
  //   technologies: ["Neo4j", "Python", "SAP OData APIs", "Graph Algorithms", "D3.js", "Flask"],
  //   outcomes: [
  //     "Visual representation of complex SAP data relationships",
  //     "Discovery of hidden dependencies in master data",
  //     "Improved impact analysis for process changes",
  //     "Enhanced data governance and quality initiatives"
  //   ],
  //   tags: ["Knowledge Graph", "SAP", "Data Visualization"],
  //   github: null,
  //   demo: null,
  //   featured: false
  // },
  // {
  //   id: 6,
  //   title: "AI Journal Posting Automation",
  //   category: "Automation",
  //   customer: "Banking & Finance Institution",
  //   description: "Automated finance workflow with AI-powered validation, approval routing, and SAP integration.",
  //   detailedDescription: "An intelligent automation platform for finance operations that uses AI to validate journal entries, detect anomalies, route approvals, and post to SAP, reducing manual effort and improving compliance.",
  //   problem: "Manual journal entry processing is time-consuming and error-prone. Finance teams spend significant time validating documents, checking amounts, and ensuring compliance before posting to SAP.",
  //   solution: "Created an end-to-end automation solution using SAP Document AI for extraction, custom Python validation logic for anomaly detection, and SAP Build Process Automation for workflow orchestration. The system automatically validates, routes, and posts journal entries.",
  //   technologies: ["SAP Document AI", "SAP Build Process Automation", "Python", "SAP S/4HANA", "SAP AI Core"],
  //   outcomes: [
  //     "75% reduction in manual journal processing time",
  //     "Improved compliance with automated validation rules",
  //     "Faster month-end closing processes",
  //     "Enhanced audit trail and documentation"
  //   ],
  //   tags: ["Finance", "Automation", "Document AI"],
  //   github: null,
  //   demo: null,
  //   featured: false
  // },
  {
    id: 6,
    title: "Connected Worker App",
    category: "Automation",
    customer: "Oil India Limited",
    description: "Mobile-first AI assistant for frontline workers with real-time guidance and IoT integration.",
    detailedDescription: "A conceptual mobile application that empowers frontline workers with AI-powered guidance, real-time equipment data, and step-by-step procedures, integrated with SAP and IoT platforms.",
    problem: "Frontline workers often lack immediate access to information needed for maintenance, troubleshooting, and operations. This leads to downtime, safety risks, and inefficiencies.",
    solution: "Designed a mobile AI assistant that provides contextual guidance based on location, equipment, and task. The app integrates with IoT sensors, SAP asset management, and knowledge bases to deliver real-time assistance and capture field data.",
    technologies: ["SAP Build Apps", "SAP IoT", "Python", "Real-time APIs", "Mobile Development"],
    outcomes: [
      "Reduced equipment downtime through faster issue resolution",
      "Improved worker safety with AI-powered guidance",
      "Better data capture from field operations",
      "Enhanced training and knowledge transfer"
    ],
    tags: ["Mobile", "IoT", "Worker Enablement"],
    github: null,
    demo: null,
    featured: false
  }
  // {
  //   id: 7,
  //   title: "HANA Vector Search Platform",
  //   category: "SAP AI",
  //   customer: "Multi-Industry Enterprise",
  //   description: "Enterprise vector search engine built on SAP HANA Cloud with semantic similarity capabilities.",
  //   detailedDescription: "A high-performance vector search platform leveraging SAP HANA Cloud's native vector engine to enable semantic search across enterprise documents, enabling RAG-based applications and intelligent information retrieval.",
  //   problem: "Traditional keyword search fails to capture semantic meaning and context. Users struggle to find relevant information when they don't know exact terms or when similar concepts are described differently.",
  //   solution: "Built a vector search platform using SAP HANA Cloud Vector Engine, creating embeddings for enterprise content and enabling semantic similarity search. The platform supports both standalone queries and RAG-based AI applications.",
  //   technologies: ["SAP HANA Cloud", "Vector Embeddings", "Python", "SAP AI Core", "REST APIs"],
  //   outcomes: [
  //     "Semantic search across millions of documents",
  //     "Foundation for enterprise RAG applications",
  //     "Improved search relevance and user satisfaction",
  //     "Scalable architecture for future AI initiatives"
  //   ],
  //   tags: ["Vector Search", "SAP HANA", "Embeddings"],
  //   github: null,
  //   demo: null,
  //   featured: false
  // }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'SAP AI', label: 'SAP AI' },
  { id: 'GenAI', label: 'GenAI' },
  { id: 'Automation', label: 'Automation' },
  { id: 'Knowledge Systems', label: 'Knowledge Systems' },
];
