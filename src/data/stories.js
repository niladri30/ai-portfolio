export const customerStories = [
  {
    id: 1,
    title: "OilBot Document Intelligence",
    customer: "Oil India Limited",
    industry: "Oil & Gas / CPSE",
    companySize: "6400+ Employees",
    challenge: "Oil India's 6400+ employees needed instant access to HR information like leave balances, reimbursement status, payslips, and organizational policies. Traditional methods required navigating multiple systems, contacting HR, or searching through document repositories, leading to delays and reduced productivity. Employees wasted time waiting for responses from HR teams for routine queries.",
    solution: "Developed a comprehensive mobile application using SAP Build Apps and SAP Mobile Services, integrated with an AI-powered chatbot built on SAP AI Core and LangChain. The chatbot uses RAG (Retrieval-Augmented Generation) to query HR data from SAP systems and organizational documents, providing employees with instant, accurate answers through natural conversation on their mobile devices.",
    capabilities: [
      "Natural language Q&A for leave balance, reimbursements, and payslips",
      "Document intelligence for organizational policies and guidelines",
      "Mobile-first design accessible from anywhere",
      "Integration with SAP HR systems for real-time data",
      "Self-service capabilities reducing HR workload",
      "Instant answers to routine HR queries 24/7"
    ],
    technologies: [
      "SAP Build Apps",
      "SAP Mobile Services",
      "SAP AI Core",
      "LangChain",
      "RAG",
      "SAP HANA Vector Engine",
      "Python",
      "Document AI"
    ],
    impact: {
      metrics: [
        "Served 6400+ employees with instant HR information access",
        "Reduced HR query resolution time by 90%",
        "Improved employee satisfaction with self-service capabilities",
        "Won the prestigious SAP Ace Award"
      ],
      businessValue: "This groundbreaking solution became the first SAP Build Apps and Mobile Services implementation for any CPSE (Central Public Sector Enterprise) company in India. It transformed employee experience by providing instant access to critical HR information, reduced the burden on HR teams, and demonstrated the power of combining mobile-first design with conversational AI."
    },
    outcomes: "Award-winning solution serving 6400+ employees, dramatically reduced response times, enhanced employee satisfaction, and established a new standard for employee self-service in CPSE organizations.",
    featured: true,
    year: "2025"
  },
  {
    id: 2,
    title: "EarningsAI Assistant",
    customer: "Standard Chartered Bank",
    industry: "Banking & Financial Services",
    companySize: "Global Financial Institution",
    challenge: "Finance teams spent hours manually analyzing earnings reports, extracting key metrics, and comparing performance across periods. This manual process was time-consuming and prone to missing critical insights. Executives needed quick access to comparative financial intelligence across quarters and competitors, but traditional analysis methods couldn't keep pace with information demands.",
    solution: "Built an AI-powered platform that ingests earnings documents, creates embeddings for semantic search, and uses LLMs to answer complex financial questions in natural language. The system provides instant comparative analysis, trend identification, and executive insights using SAP AI Core, SAP Generative AI Hub, and SAP HANA Cloud's vector search capabilities.",
    capabilities: [
      "Natural language querying of financial data and earnings reports",
      "Semantic search across historical earnings documents",
      "Comparative analysis across quarters and competitors",
      "Automated trend detection and anomaly identification",
      "Executive-level insights and summarization",
      "Multi-document synthesis for comprehensive analysis"
    ],
    technologies: [
      "Python",
      "LangChain",
      "SAP AI Core",
      "SAP Generative AI Hub",
      "Vector Search",
      "SAP HANA Cloud"
    ],
    impact: {
      metrics: [
        "Reduced analysis time from hours to minutes",
        "Improved insight discovery through semantic search",
        "Enabled natural language querying of financial data",
        "Automated trend detection and anomaly identification"
      ],
      businessValue: "The EarningsAI Assistant transformed how finance teams and executives interact with earnings data. By leveraging generative AI and semantic search, the platform enabled instant access to insights that previously required hours of manual analysis, improving decision-making speed and quality."
    },
    outcomes: "Dramatically faster financial analysis, improved decision-making capabilities, enhanced competitive intelligence, and better utilization of historical financial data.",
    featured: true,
    year: "2025-2026"
  },
  {
    id: 3,
    title: "SAP PR Creation Chatbot",
    customer: "JK Cements",
    industry: "Manufacturing / Cement Production",
    companySize: "Large Enterprise",
    challenge: "Creating purchase requisitions in SAP required extensive training and knowledge of material codes, account assignments, and procurement rules. The process was slow, error-prone, and intimidating for occasional users. This led to procurement delays, incorrect requisitions requiring rework, and frustration among business users who needed materials but struggled with SAP complexity.",
    solution: "Built an AI-enabled conversational assistant that simplified purchase requisition creation through natural language interaction. The chatbot guided users through the process conversationally, validated inputs against SAP master data, enriched requisitions with appropriate account assignments and approval routing, and submitted directly to SAP S/4HANA via OData APIs.",
    capabilities: [
      "Conversational PR capture through natural dialogue",
      "Material code suggestion from natural language descriptions",
      "Automated validation of quantities, delivery dates, and cost centers",
      "Intelligent enrichment with appropriate account assignments",
      "Direct integration with SAP S/4HANA for PR creation",
      "User-friendly error messages and correction guidance"
    ],
    technologies: [
      "Python",
      "LangChain",
      "SAP S/4HANA APIs",
      "SAP AI Core",
      "Flask",
      "SAP BTP"
    ],
    impact: {
      metrics: [
        "70% reduction in PR creation time",
        "Decreased training requirements for new users",
        "Improved data quality through automated validation",
        "Enhanced user adoption of procurement processes"
      ],
      businessValue: "The PR chatbot democratized procurement at JK Cements, enabling business users to create requisitions without deep SAP knowledge. This reduced dependency on procurement teams for simple requests, accelerated procurement cycles, and improved compliance through consistent application of business rules."
    },
    outcomes: "Improved speed and consistency of PR creation, enhanced user adoption of procurement processes, reduced training burden, and better data quality in the procurement system.",
    featured: true,
    year: "2024"
  },
  // {
  //   id: 4,
  //   title: "AI Inventory Management Chatbot",
  //   customer: "Saudi Water Authority",
  //   industry: "Utilities / Water Management",
  //   companySize: "Government Enterprise",
  //   challenge: "Warehouse managers and procurement teams needed quick visibility into inventory status, but accessing this information required navigating multiple SAP transactions and generating complex reports. Stock visibility was limited, identifying GR/IR mismatches required manual report generation, dead stock analysis was time-consuming, and the complexity of SAP navigation meant only trained users could extract critical inventory data.",
  //   solution: "Developed an AI chatbot that connects to SAP S/4HANA inventory APIs, processes natural language queries, and delivers instant insights on stock levels, material movements, dead stock, and GR/IR reconciliation. The system uses LangGraph for agentic workflows, proactively identifies issues, and suggests actions.",
  //   capabilities: [
  //     "Natural language querying of inventory data",
  //     "Real-time stock visibility across all plants and storage locations",
  //     "Automated GR/IR mismatch analysis and reconciliation support",
  //     "Dead stock identification with financial impact calculation",
  //     "Procurement guidance and reorder recommendations",
  //     "Material movement tracking and historical analysis"
  //   ],
  //   technologies: [
  //     "Python",
  //     "LangGraph",
  //     "SAP S/4HANA Integration",
  //     "SAP AI Core",
  //     "OData APIs",
  //     "Agentic AI"
  //   ],
  //   impact: {
  //     metrics: [
  //       "Real-time inventory visibility through conversational queries",
  //       "Faster identification of GR/IR mismatches",
  //       "Proactive dead stock alerts and recommendations",
  //       "Improved procurement planning with AI-driven insights"
  //     ],
  //     businessValue: "The chatbot democratized access to inventory data, enabling non-SAP experts at Saudi Water Authority to make informed decisions quickly. This improved operational efficiency, reduced working capital tied up in inventory, and enhanced collaboration between warehouse and procurement teams."
  //   },
  //   outcomes: "Better operational visibility, faster decision-making, improved inventory turnover, and enhanced user satisfaction across departments.",
  //   featured: true,
  //   year: "2024"
  // },
  {
    id: 5,
    title: "Automated PR Creation & Approval Workflow",
    customer: "Exide Industries",
    industry: "Manufacturing / Automotive",
    companySize: "Large Enterprise",
    challenge: "Manual PR creation and approval processes were time-consuming and error-prone. Users had to navigate complex SAP screens, wait for sequential approvals, and manually track PR status. Errors during creation often went unnoticed until later stages, causing delays. Approvers lacked visibility into pending requests, and requesters didn't receive timely updates on PR status.",
    solution: "Developed a comprehensive automation solution using SAP Build Process Automation integrated with SAP S/4HANA. The system features automated PR creation from structured inputs (Excel, forms, or API calls), intelligent validation against SAP master data and business rules, dynamic approval routing based on amount thresholds and organizational hierarchy, real-time email notifications, and detailed error reporting.",
    capabilities: [
      "Automated PR creation from multiple input sources (Excel, forms, APIs)",
      "Intelligent validation against SAP master data and business rules",
      "Dynamic approval routing based on thresholds and hierarchy",
      "Real-time email notifications to requesters and approvers",
      "Detailed error logging with root cause analysis",
      "Automatic retry mechanisms for transient failures"
    ],
    technologies: [
      "SAP Build Process Automation",
      "SAP S/4HANA APIs",
      "OData",
      "Email Integration",
      "Python",
      "SAP BTP"
    ],
    impact: {
      metrics: [
        "85% reduction in PR creation time from request to approval",
        "Automated routing to appropriate approvers based on business rules",
        "Real-time email notifications for all stakeholders",
        "Comprehensive error reporting preventing failed PR submissions"
      ],
      businessValue: "The automated workflow transformed procurement operations at Exide Industries, eliminating manual bottlenecks and improving visibility across the procurement pipeline. Management gained real-time insights into approval status, compliance improved through automated validation, and employees experienced faster order processing."
    },
    outcomes: "Dramatically reduced processing time, improved compliance, enhanced visibility into procurement pipeline, and better stakeholder communication through automated notifications.",
    featured: true,
    year: "2023"
  }
];
