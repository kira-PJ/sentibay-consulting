export type Testimonial = {
  quote: string;
  name: string;
  role: string;        // course name for training, job title/company for consulting
  rating: number;
  company?: string;
  type: "training" | "consulting";
};

export const testimonials: Testimonial[] = [
  // ── Training ──
  {
    type: "training",
    quote: "Pauline has a unique way of explaining complex ideas and keeping a positive environment. She is very insightful and obviously passionate about the subject.",
    name: "Wade P.",
    role: "AWS Certified SysOps Administrator",
    rating: 5,
  },
  {
    type: "training",
    quote: "She has excellent communication skills. Her knowledge on AWS is excellent. Very clear with the subject and very well explained. Training and presentation skills are commendable.",
    name: "Prashanth K.S.",
    role: "AWS Certified CloudOps Engineer",
    rating: 5,
  },
  {
    type: "training",
    quote: "Pauline is interactive during the sessions and asks for feedback and questions regularly which engages us to absorb the lessons more effectively.",
    name: "Ian Carlo Y.T.",
    role: "AWS Certified SysOps Administrator",
    rating: 5,
  },
  {
    type: "training",
    quote: "The instructor makes the material easy to digest and is ready to answer my questions and clarify any ambiguities.",
    name: "Antwan H.",
    role: "AWS Technical Essentials",
    rating: 5,
  },
  {
    type: "training",
    quote: "She is highly engaging in her teaching approach, using real-life scenarios to make complex AWS concepts relatable and easy to understand.",
    name: "Anonymous",
    role: "AWS Cloud Practitioner",
    rating: 5,
  },
  {
    type: "training",
    quote: "I love her familiar analogies while explaining AWS terms. I grasp almost everything. She is the best trainer.",
    name: "Anonymous",
    role: "AWS Cloud Practitioner",
    rating: 5,
  },
  {
    type: "training",
    quote: "She uses analogy for explanation which makes it easy to understand. She is more engaging and interactive with the students, plus she is very friendly and approachable.",
    name: "Anonymous",
    role: "AWS Cloud Practitioner",
    rating: 5,
  },
  {
    type: "training",
    quote: "She is very proficient with what she is teaching. She teaches beyond the topic, expounding more on AWS. She is very engaging and fits the student's perspective.",
    name: "Anonymous",
    role: "AWS Cloud Practitioner",
    rating: 5,
  },
  {
    type: "training",
    quote: "Very excellent, very good explanation of concepts.",
    name: "Abubakar M.H.",
    role: "AWS Certified Solutions Architect – Associate",
    rating: 5,
  },
  {
    type: "training",
    quote: "Excellent lecture and labs on AWS. Keep up the great work and keep maintaining the quality of labs and lectures.",
    name: "Sujan M.",
    role: "Advanced Architecting on AWS",
    rating: 5,
  },

  // ── Consulting ──
  {
    type: "consulting",
    quote: "Pauline has been an excellent partner in our AWS projects, bringing deep expertise across EC2, S3, IAM, VPC, RDS, Lambda, CloudWatch, and Route 53. She has helped us design and implement scalable, secure cloud environments using Terraform, Docker, Kubernetes, and CI/CD pipelines, while placing strong emphasis on cloud security, IAM best practices, and network security. Her work has significantly improved our cloud reliability, governance, and operational efficiency. I highly recommend her for any AWS or DevOps engagement.",
    name: "Mohammed Ziyauddin",
    role: "AWS-Certified Professionals Needed for Ongoing Cloud Projects",
    company: "Jidabyte (AWS Partner, Australia)",
    rating: 5,
  },
];
