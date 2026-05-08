export type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
  photoPath?: string;
  linkedinUrl?: string;
};

export const leadership: LeadershipMember[] = [
  {
    name: "Felix Mulei",
    title: "CEO and Founder",
    bio: "Felix founded SentiBay Consulting to bring structured technology training to professionals across Africa and beyond. An AWS Authorized Instructor, he leads the company's strategy, partnerships, and business development. His focus is on building programs that produce real outcomes for individuals and enterprise teams.",
    photoPath: "/images/felix.jpg",
    linkedinUrl: "https://www.linkedin.com/in/felixmulei/",
  },
  {
    name: "Pauline Namwakira",
    title: "Co-Founder and Senior Technical Trainer",
    bio: "Pauline leads all technical training and consulting delivery at SentiBay Consulting. An AWS Authorized Instructor and Cloud Solutions Architect, she holds 13 AWS certifications and has guided more than 1,000 students to certification success across Africa, Europe, and the Middle East.",
    photoPath: "/images/pauline.jpg",
    linkedinUrl: "https://www.linkedin.com/in/paulinenamwakira/",
  },
];
