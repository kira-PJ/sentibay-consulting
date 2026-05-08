export type Project = {
  slug: string;
  title: string;
  summary: string;
  awsServices: string[];
  architectureImg?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  playlistUrl?: string;
  content: string;
  videos?: { title: string; duration: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "aws-ml-sagemaker-end-to-end",
    title: "AWS Machine Learning End to End with SageMaker",
    summary:
      "A 5-part hands-on series covering the full ML lifecycle on AWS from raw data preparation through model training, deployment, and MLOps pipelines with monitoring.",
    awsServices: ["SageMaker", "S3", "CloudWatch", "XGBoost", "Data Wrangler"],
    playlistUrl: "https://www.youtube.com/playlist?list=PLOHR6y1Ug2S5IPzYyTo34shskoq67p4zj",
    githubUrl: "https://github.com/kira-PJ/aws-ml-sagemaker-workshop",
    content:
      "This series walks through building a real customer churn prediction system on AWS SageMaker from scratch. Each session covers a distinct phase of the ML workflow, with full demo scripts, working code, and business context explaining why each decision matters.",
    videos: [
      {
        title: "AWS SageMaker Data Wrangler Tutorial | Data Cleaning and Feature Engineering",
        duration: "42:30",
        url: "https://www.youtube.com/playlist?list=PLOHR6y1Ug2S5IPzYyTo34shskoq67p4zj",
      },
      {
        title: "Train and Tune ML Models on AWS SageMaker (XGBoost)",
        duration: "30:39",
        url: "https://www.youtube.com/playlist?list=PLOHR6y1Ug2S5IPzYyTo34shskoq67p4zj",
      },
      {
        title: "Deploy ML Models on AWS SageMaker | Real-Time Inference",
        duration: "26:10",
        url: "https://www.youtube.com/playlist?list=PLOHR6y1Ug2S5IPzYyTo34shskoq67p4zj",
      },
      {
        title: "MLOps on AWS SageMaker | Pipelines, Monitoring and Data Drift",
        duration: "32:10",
        url: "https://www.youtube.com/playlist?list=PLOHR6y1Ug2S5IPzYyTo34shskoq67p4zj",
      },
    ],
  },
  {
    slug: "databricks-on-aws-workshop",
    title: "Databricks on AWS End to End Workshop",
    summary:
      "A 2-part hands-on workshop covering Databricks integration with AWS from environment setup through data preparation, AutoML model development, and visualization with QuickSight and Power BI.",
    awsServices: ["S3", "Databricks", "QuickSight", "IAM"],
    playlistUrl: "https://www.youtube.com/@kiratechhub",
    githubUrl: "https://github.com/kira-PJ/DatabricksOnAWSWorkshop",
    content:
      "This workshop walks through a complete data engineering and ML workflow using Databricks on AWS. Part 1 covers environment setup, S3 bucket creation, cluster configuration, and instance profiles. Part 2 goes deeper into data preparation, sales forecasting, AutoML model development with Databricks Unity Catalog, and building dashboards in AWS QuickSight and Power BI.",
    videos: [
      {
        title: "Databricks on AWS End to End Workshop Part 1: Environment Setup",
        duration: "19:56",
        url: "https://www.youtube.com/@kiratechhub",
      },
      {
        title: "Databricks on AWS End to End Workshop Part 2: ML, Forecasting and Visualization",
        duration: "46:17",
        url: "https://www.youtube.com/@kiratechhub",
      },
    ],
  },
];
