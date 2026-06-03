import Image from "next/image";

const certs = [
  // Professional
  {
    name: "AWS Certified Solutions Architect Professional",
    badge: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    level: "Professional",
  },
  {
    name: "AWS Certified DevOps Engineer Professional",
    badge: "https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
    level: "Professional",
  },
  {
    name: "AWS Certified Generative AI Developer Professional",
    badge: "https://images.credly.com/size/340x340/images/52c6e5ac-9516-4944-a4df-e31b23c9bbf2/blob",
    level: "Professional",
  },
  // Specialty
  {
    name: "AWS Certified Security Specialty",
    badge: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
    level: "Specialty",
  },
  {
    name: "AWS Certified Advanced Networking Specialty",
    badge: "https://images.credly.com/size/340x340/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
    level: "Specialty",
  },
  // Associate
  {
    name: "AWS Certified Solutions Architect Associate",
    badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    level: "Associate",
  },
  {
    name: "AWS Certified Developer Associate",
    badge: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    level: "Associate",
  },
  {
    name: "AWS Certified CloudOps Engineer Associate",
    badge: "https://images.credly.com/size/340x340/images/88a6405e-0f26-442a-95ed-f9b9db4c857e/blob",
    level: "Associate",
  },
  {
    name: "AWS Certified Data Engineer Associate",
    badge: "https://images.credly.com/size/340x340/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
    level: "Associate",
  },
  {
    name: "AWS Certified Machine Learning Engineer Associate",
    badge: "https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png",
    level: "Associate",
  },
  // Foundational
  {
    name: "AWS Certified Cloud Practitioner",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    level: "Foundational",
  },
  {
    name: "AWS Certified AI Practitioner",
    badge: "https://images.credly.com/size/340x340/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
    level: "Foundational",
  },
];

const levelColor: Record<string, string> = {
  Professional: "bg-violet-100 text-violet-700",
  Specialty: "bg-amber-100 text-amber-700",
  Associate: "bg-blue-100 text-blue-700",
  Foundational: "bg-green-100 text-green-700",
};

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Credentials</span>
          <h2 className="text-4xl font-bold text-primary mt-2 mb-4">AWS Certification Prep</h2>
          <p className="text-muted max-w-xl mx-auto">
            We offer prep support across all 13 AWS certifications. Get in touch to find the right path for you.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {certs.map((c) => (
            <div key={c.name}
              className="bg-white rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <Image src={c.badge} alt={c.name} width={72} height={72} className="object-contain mb-3" />
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${levelColor[c.level]}`}>
                {c.level}
              </span>
              <p className="text-xs text-primary font-medium leading-snug">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
