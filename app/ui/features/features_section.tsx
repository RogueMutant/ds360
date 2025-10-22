import { cn } from "../../lib/utils/tw.merge";
import {
  IconBrain,
  IconLock,
  IconClock,
  IconSatellite,
  IconShieldLock,
  IconSearch,
  IconDashboard,
  IconCircleCheck,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const securityFeatures = [
    {
      title: "AI-Powered Threat Detection",
      details: [
        "Uses ML algorithms for early warning",
        "Real-time threat intelligence",
        "Predictive analytics",
        "Behavioral anomaly detection",
      ],
      icon: <IconBrain size={24} />,
    },
    {
      title: "Dark Web Scanning",
      details: [
        "Continuously monitors dark web forums and data dumps",
        "Stolen credential detection",
        "Threat actor monitoring",
        "Data breach alerts",
      ],
      icon: <IconLock size={24} />,
    },
    {
      title: "Real-Time Alerts & Network Monitoring",
      details: [
        "Live system behavior anomaly detection",
        "24/7 network surveillance",
        "Instant incident alerts",
        "Automated threat response",
      ],
      icon: <IconClock size={24} />,
    },
    {
      title: "Satellite-Aided Surveillance",
      details: [
        "Integration with satellite feeds",
        "National infrastructure tracking",
        "Geospatial threat analysis",
        "Global threat mapping",
      ],
      icon: <IconSatellite size={24} />,
    },
    {
      title: "Deepfake Detection & Prevention",
      details: [
        "NLP & computer vision for fake media recognition",
        "Media authenticity verification",
        "Tamper-proof evidence collection",
        "Real-time media analysis",
      ],
      icon: "replace",
    },
    {
      title: "Phishing Link Identification",
      details: [
        "URL scanners and blacklists powered by AI",
        "Email protection systems",
        "User education modules",
        "Real-time link analysis",
      ],
      icon: <IconShieldLock size={24} />,
    },
    {
      title: "Digital Forensics & Investigation",
      details: [
        "Collect, analyze, and visualize digital evidence",
        "Incident reconstruction",
        "Legal-grade reporting",
        "Chain of custody management",
      ],
      icon: <IconSearch size={24} />,
    },
    {
      title: "Secure Cloud Dashboard",
      details: [
        "AWS-Powered centralized threat intelligence",
        "Customizable dashboards",
        "Role-based access control",
        "Real-time security analytics",
      ],
      icon: <IconDashboard size={24} />,
    },
  ];
  return (
    <div
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto"
    >
      {securityFeatures.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  details,
  icon,
  index,
}: {
  title: string;
  details: string[];
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <ul className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-10 space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start">
            <IconCircleCheck className="h-4 w-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />{" "}
            {/* Use an icon here */}
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
