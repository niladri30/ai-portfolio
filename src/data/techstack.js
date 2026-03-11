export const techStack = {
  "AI & GenAI": {
    icon: "brain",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Generative AI", proficiency: 95 },
      { name: "Large Language Models", proficiency: 95 },
      { name: "Agentic AI", proficiency: 90 },
      { name: "LangChain", proficiency: 95 },
      { name: "LangGraph", proficiency: 85 },
      { name: "RAG (Retrieval-Augmented Generation)", proficiency: 95 },
      { name: "Vector Search & Embeddings", proficiency: 90 },
      { name: "Prompt Engineering", proficiency: 95 }
    ]
  },
  "SAP Ecosystem": {
    icon: "layers",
    color: "from-cyan-500 to-blue-500",
    technologies: [
      { name: "SAP BTP (Business Technology Platform)", proficiency: 95 },
      { name: "SAP AI Core", proficiency: 95 },
      { name: "SAP Generative AI Hub", proficiency: 95 },
      { name: "SAP Build Process Automation", proficiency: 85 },
      { name: "SAP Build Apps", proficiency: 80 },
      { name: "SAP HANA Cloud", proficiency: 90 },
      { name: "SAP S/4HANA Integration", proficiency: 90 },
      { name: "OData & REST APIs", proficiency: 95 }
    ]
  },
  "Backend & Development": {
    icon: "code",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Python", proficiency: 95 },
      { name: "Flask", proficiency: 90 },
      { name: "FastAPI", proficiency: 85 },
      { name: "Streamlit", proficiency: 90 },
      { name: "REST API Design", proficiency: 95 },
      { name: "Microservices Architecture", proficiency: 85 }
    ]
  },
  "Data & Knowledge": {
    icon: "database",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "SAP HANA Vector Engine", proficiency: 90 },
      { name: "Neo4j (Knowledge Graphs)", proficiency: 85 },
      { name: "FAISS", proficiency: 80 },
      { name: "ChromaDB", proficiency: 80 },
      { name: "Knowledge Graph Design", proficiency: 85 },
      { name: "Vector Databases", proficiency: 90 }
    ]
  },
  "Cloud & DevOps": {
    icon: "cloud",
    color: "from-indigo-500 to-purple-500",
    technologies: [
      { name: "AWS (IoT Core, Lambda, SageMaker, Kinesis)", proficiency: 90 },
      { name: "Microsoft Azure", proficiency: 80 },
      { name: "SAP BTP (Business Technology Platform)", proficiency: 95 },
      { name: "Docker & Containerization", proficiency: 85 },
      { name: "Kubernetes", proficiency: 80 },
      { name: "GitHub / Git", proficiency: 90 },
      { name: "SAP BTP Kyma", proficiency: 80 },
      { name: "Cloud Foundry", proficiency: 85 },
      { name: "CI/CD Pipelines", proficiency: 80 },
      { name: "JFrog Artifactory", proficiency: 75 }
    ]
  },
  "Document & Process AI": {
    icon: "fileText",
    color: "from-yellow-500 to-orange-500",
    technologies: [
      { name: "SAP Document Information Extraction", proficiency: 90 },
      { name: "Document Processing Pipelines", proficiency: 90 },
      { name: "Workflow Automation", proficiency: 85 },
      { name: "Business Process Intelligence", proficiency: 85 }
    ]
  }
};

export const techCategories = Object.keys(techStack);
