import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechCorp AI Assistant | Powered by Amazon Bedrock",
  description: "Internal AI assistant for TechCorp employees — answers questions, takes actions, stays safe.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hide the main site navbar and footer for a clean standalone demo */}
      <style>{`
        nav, footer { display: none !important; }
        main { padding: 0 !important; margin: 0 !important; }
      `}</style>
      {children}
    </>
  );
}
