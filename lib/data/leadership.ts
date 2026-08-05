export type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
  photoPath?: string;
  linkedinUrl?: string;
};

export const leadership: LeadershipMember[] = [
  {
    name: "Pauline Namwakira",
    title: "AWS Authorized Instructor & Cloud Solutions Architect",
    bio: "Pauline leads all technical training and course development at SentiBay. She holds 13 AWS certifications and has guided more than 1,000 students to certification success across Africa, Europe, and the Middle East. She is an AWS Golden Jacket holder and speaks regularly at cloud and AI conferences.",
    photoPath: "/images/pauline.jpg",
    linkedinUrl: "https://www.linkedin.com/in/paulinenamwakira/",
  },
];
