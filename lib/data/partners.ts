export type Partner = {
  name: string;
  logoPath?: string;
  brandColor: string;
  url: string;
};

export const partners: Partner[] = [
  { name: "AWS", logoPath: undefined, brandColor: "#FF9900", url: "https://aws.amazon.com" },
  { name: "Google Cloud", logoPath: undefined, brandColor: "#4285F4", url: "https://cloud.google.com" },
  { name: "Databricks", logoPath: undefined, brandColor: "#FF3621", url: "https://databricks.com" },
  { name: "Barracuda Email Security", logoPath: undefined, brandColor: "#00A1E0", url: "https://barracuda.com" },
  { name: "Microsoft Fabric", logoPath: undefined, brandColor: "#0078D4", url: "https://microsoft.com/fabric" },
];
