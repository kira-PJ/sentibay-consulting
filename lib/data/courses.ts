export type Course = {
  name: string;
  level: string;
  days: string;
  category: string;
  outlineUrl?: string;
  description: string;
};

export type ExamPrepCourse = {
  name: string;
  code: string;
  level: string;
  outlineUrl?: string;
  badgeUrl?: string;
  certUrl?: string;
};

export const examPrepCourses: ExamPrepCourse[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    level: "Foundational",
    badgeUrl: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    level: "Foundational",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/exam-prep-aws-certified-ai-practitioner-aif-c01.pdf",
    badgeUrl: "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    code: "SAA-C03",
    level: "Associate",
    badgeUrl: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    name: "AWS Certified Developer Associate",
    code: "DVA-C02",
    level: "Associate",
    badgeUrl: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    name: "AWS Certified Data Engineer Associate",
    code: "DEA-C01",
    level: "Associate",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/exam-prep-aws-certified-data-engineer-associate.pdf",
    badgeUrl: "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-data-engineer-associate/",
  },
  {
    name: "AWS Certified Machine Learning Engineer Associate",
    code: "MLA-C01",
    level: "Associate",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/exam-prep-aws-certified-machine-learning-engineer-associate-mla-c01.pdf",
    badgeUrl: "https://images.credly.com/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
  },
  {
    name: "AWS Certified CloudOps Engineer Associate",
    code: "COA-C02",
    level: "Associate",
    badgeUrl: "https://images.credly.com/images/88a6405e-0f26-442a-95ed-f9b9db4c857e/blob",
    certUrl: "https://aws.amazon.com/certification/certified-cloudops-engineer-associate/",
  },
  {
    name: "AWS Certified Solutions Architect Professional",
    code: "SAP-C02",
    level: "Professional",
    badgeUrl: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
  },
  {
    name: "AWS Certified DevOps Engineer Professional",
    code: "DOP-C02",
    level: "Professional",
    badgeUrl: "https://images.credly.com/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
  },
  {
    name: "AWS Certified Generative AI Developer",
    code: "AID-C01",
    level: "Professional",
    badgeUrl: "https://images.credly.com/images/52c6e5ac-9516-4944-a4df-e31b23c9bbf2/blob",
    certUrl: "https://aws.amazon.com/certification/certified-generative-ai-developer-professional/",
  },
  {
    name: "AWS Certified Advanced Networking Specialty",
    code: "ANS-C01",
    level: "Specialty",
    badgeUrl: "https://images.credly.com/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/",
  },
  {
    name: "AWS Certified Security Specialty",
    code: "SCS-C02",
    level: "Specialty",
    badgeUrl: "https://images.credly.com/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
    certUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
  },
];

export const atpCourses: Course[] = [
  // Architect
  {
    name: "Architecting on AWS",
    level: "200",
    days: "3 days",
    category: "Architect",
    description: "Design available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/architecting-on-aws.pdf",
  },
  {
    name: "Advanced Architecting on AWS",
    level: "300",
    days: "3 days",
    category: "Architect",
    description: "Build complex solutions incorporating data services, governance, and specialized use cases on AWS.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/advanced-architecting-on-aws.pdf",
  },
  {
    name: "AWS Well-Architected Best Practices",
    level: "200",
    days: "1 day",
    category: "Architect",
    description: "Apply the AWS Well-Architected Framework to evaluate and improve your cloud workloads.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/aws-well-architected-best-practices.pdf",
  },
  // AI
  {
    name: "Agentic AI Foundations",
    level: "100",
    days: "1 day",
    category: "Artificial Intelligence and Machine Learning",
    description: "Understand the fundamentals of agentic AI systems and how to build them on AWS.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/agentic-ai-foundations.pdf",
  },
  {
    name: "Building Agentic AI with Amazon Bedrock AgentCore",
    level: "200",
    days: "1 day",
    category: "Artificial Intelligence and Machine Learning",
    description: "Build and deploy agentic AI applications using Amazon Bedrock AgentCore.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/building-agentic-ai-with-amazon-bedrock-agentcore.pdf",
  },
  {
    name: "Building Advanced Agentic Systems on AWS",
    level: "300",
    days: "1 day",
    category: "Artificial Intelligence and Machine Learning",
    description: "Design and implement advanced multi-agent architectures and orchestration patterns on AWS.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/building-advanced-agentic-systems-on-aws.pdf",
  },
  {
    name: "Generative AI Essentials on AWS",
    level: "100",
    days: "1 day",
    category: "Artificial Intelligence and Machine Learning",
    description: "Explore the fundamentals of generative AI and how AWS services enable GenAI applications.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/generative-ai-essentials-on-aws.pdf",
  },
  {
    name: "Generative AI for Executives",
    level: "100",
    days: "4 hours",
    category: "Artificial Intelligence and Machine Learning",
    description: "A business-focused overview of generative AI strategy, opportunities, and risks for leaders.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/generative-ai-for-executives.pdf",
  },
  {
    name: "Developing Generative AI Applications on AWS",
    level: "300",
    days: "2 days",
    category: "Artificial Intelligence and Machine Learning",
    description: "Build production-ready generative AI applications using Amazon Bedrock and related AWS services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/developing-generative-ai-applications-on-aws.pdf",
  },
  {
    name: "Advanced Generative AI Development on AWS",
    level: "300",
    days: "3 days",
    category: "Artificial Intelligence and Machine Learning",
    description: "Advanced techniques for building, fine-tuning, and deploying generative AI models on AWS.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/advanced-generative-ai-development-on-aws.pdf",
  },
  {
    name: "Practical Data Science with Amazon SageMaker",
    level: "200",
    days: "1 day",
    category: "Artificial Intelligence and Machine Learning",
    description: "Apply data science techniques using Amazon SageMaker for real-world ML workflows.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/practical-data-science-with-amazon-sagemaker.pdf",
  },
  {
    name: "Amazon SageMaker Studio for Data Scientists",
    level: "300",
    days: "3 days",
    category: "Artificial Intelligence and Machine Learning",
    description: "Master Amazon SageMaker Studio for end-to-end machine learning development.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/amazon-sagemaker-studio-for-data-scientists.pdf",
  },
  {
    name: "MLOps Engineering on AWS",
    level: "200",
    days: "3 days",
    category: "Artificial Intelligence and Machine Learning",
    description: "Implement MLOps practices to automate and streamline ML pipelines on AWS.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/mlops-engineering-on-aws.pdf",
  },
  {
    name: "Machine Learning Engineering on AWS",
    level: "200",
    days: "3 days",
    category: "Artificial Intelligence and Machine Learning",
    description: "Build, train, and deploy machine learning models at scale using AWS services.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/machine-learning-engineering-on-aws.pdf",
  },
  // Cloud Essentials
  {
    name: "AWS Cloud Practitioner Essentials",
    level: "100",
    days: "1 day",
    category: "Cloud Essentials",
    description: "Foundational understanding of AWS Cloud concepts, services, security, and pricing.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/aws-cloud-practitioner-essentials.pdf",
  },
  {
    name: "AWS Technical Essentials",
    level: "100",
    days: "1 day",
    category: "Cloud Essentials",
    description: "Introduction to core AWS services, architecture, and hands-on technical fundamentals.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/aws-technical-essentials.pdf",
  },
  {
    name: "AWS Cloud Essentials for Business Leaders",
    level: "100",
    days: "4 hours",
    category: "Cloud Essentials",
    description: "A concise overview of AWS Cloud value, strategy, and business transformation for leaders.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/aws-cloud-essentials-for-business-leaders.pdf",
  },
  // Data Analytics
  {
    name: "Building Data Lakes on AWS",
    level: "200",
    days: "1 day",
    category: "Data Analytics",
    description: "Design and build scalable data lakes on AWS using S3, Glue, Athena, and Lake Formation.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/building-data-lakes-on-aws.pdf",
  },
  {
    name: "Building Batch Data Analytics Solutions on AWS",
    level: "200",
    days: "1 day",
    category: "Data Analytics",
    description: "Implement batch data processing pipelines using AWS analytics services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/building-batch-data-analytics-solutions-on-aws.pdf",
  },
  {
    name: "Building Data Analytics Solutions Using Amazon Redshift",
    level: "200",
    days: "1 day",
    category: "Data Analytics",
    description: "Build cloud data warehouse solutions using Amazon Redshift for analytics at scale.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/building-data-analytics-solutions-using-amazon-redshift.pdf",
  },
  {
    name: "Building Streaming Data Analytics Solutions on AWS",
    level: "200",
    days: "1 day",
    category: "Data Analytics",
    description: "Process real-time data streams using Amazon Kinesis and related AWS services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/building-streaming-data-analytics-solutions-on-aws.pdf",
  },
  {
    name: "Data Warehousing on AWS",
    level: "300",
    days: "3 days",
    category: "Data Analytics",
    description: "Advanced data warehousing concepts and implementation using Amazon Redshift.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/data-warehousing-on-aws.pdf",
  },
  {
    name: "Data Engineering on AWS",
    level: "200",
    days: "3 days",
    category: "Data Analytics",
    description: "Build end-to-end data engineering pipelines using AWS data services.",
    outlineUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/training/approved/pdfs/classroom-training/data-engineering-on-aws.pdf",
  },
  // Databases
  {
    name: "Build Modern Applications with AWS NoSQL Databases",
    level: "200",
    days: "1 day",
    category: "Databases",
    description: "Design and build modern applications using DynamoDB and other AWS NoSQL services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/build-modern-applications-with-aws-nosql-databases.pdf",
  },
  // Developer
  {
    name: "Developing on AWS",
    level: "200",
    days: "3 days",
    category: "Developer",
    description: "Learn to develop secure, scalable cloud applications using the AWS SDK and core services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/developing-on-aws.pdf",
  },
  // DevOps
  {
    name: "DevOps Engineering on AWS",
    level: "200",
    days: "3 days",
    category: "DevOps",
    description: "Implement DevOps practices using AWS tools for CI/CD, automation, and monitoring.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/devops-engineering-on-aws.pdf",
  },
  // Containers
  {
    name: "Running Containers on Amazon EKS",
    level: "200",
    days: "3 days",
    category: "Containers",
    description: "Deploy, manage, and scale containerized applications using Amazon Elastic Kubernetes Service.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/docs/dataaheet-running-containers-on-amazon-elastic-kubernetes-service.pdf",
  },
  // Migrate
  {
    name: "AWS Migration Essentials",
    level: "100",
    days: "1 day",
    category: "Migration",
    description: "Understand the AWS migration methodology, tools, and best practices for moving to the cloud.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/aws-migration-essentials.pdf",
  },
  {
    name: "Migrating to AWS",
    level: "200",
    days: "3 days",
    category: "Migration",
    description: "Plan and execute cloud migrations using AWS Migration Hub, DMS, and related services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/migrating-to-aws.pdf",
  },
  // Networking
  {
    name: "Networking Essentials for Cloud Applications on AWS",
    level: "200",
    days: "1 day",
    category: "Networking",
    description: "Design and implement networking architectures for cloud applications on AWS.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/networking-essentials-for-cloud-applications-on-aws.pdf",
  },
  // Operations
  {
    name: "Cloud Operations on AWS",
    level: "200",
    days: "3 days",
    category: "Operations",
    description: "Manage and operate AWS infrastructure using Systems Manager, CloudWatch, and automation tools.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/cloud-operations-on-aws.pdf",
  },
  // Serverless
  {
    name: "Developing Serverless Solutions on AWS",
    level: "200",
    days: "3 days",
    category: "Serverless",
    description: "Build event-driven serverless applications using Lambda, API Gateway, and related services.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/developing-serverless-solutions-on-aws.pdf",
  },
  // Security
  {
    name: "AWS Security Essentials",
    level: "100",
    days: "1 day",
    category: "Security",
    description: "Understand AWS security fundamentals including IAM, encryption, and compliance.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/aws-security-essentials.pdf",
  },
  {
    name: "Security Engineering on AWS",
    level: "200",
    days: "3 days",
    category: "Security",
    description: "Implement security controls and automate security operations across AWS workloads.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/security-engineering-on-aws.pdf",
  },
  // Storage
  {
    name: "Designing and Implementing Storage on AWS",
    level: "200",
    days: "3 days",
    category: "Storage",
    description: "Select and implement the right AWS storage solutions for performance, cost, and durability.",
    outlineUrl: "https://d1.awsstatic.com/training-and-certification/classroom-training/designing-and-implementing-storage-on-aws.pdf",
  },
];

export const categories = Array.from(new Set(atpCourses.map((c) => c.category)));

const levelMap: Record<string, string> = {
  "100": "Fundamental",
  "200": "Intermediate",
  "300": "Advanced",
};

export function getLevelLabel(level: string) {
  return levelMap[level] ?? level;
}
