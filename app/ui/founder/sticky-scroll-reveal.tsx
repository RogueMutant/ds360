import { StickyScroll } from "./sticky-scroll";

import {
  IconShieldLock,
  IconChartHistogram,
  IconBrain,
  IconBellRinging,
  IconLayoutDashboard,
} from "@tabler/icons-react";

const content = [
  {
    title: "AI-Powered Threat Detection",
    description:
      "Advanced machine learning for real-time security analysis. Detect and prevent cyber threats with intelligent algorithms that adapt to evolving attack patterns.",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),rgba(0,0,0,1))] text-cyan-400">
        <IconShieldLock size={48} stroke={1.5} />
        <span className="text-white font-semibold">AI Threat Detection</span>
      </div>
    ),
  },
  {
    title: "Real-Time Analysis",
    description:
      "Our system continuously monitors your network traffic, analyzing patterns and behaviors in real time to detect potential intrusions instantly.",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),rgba(0,0,0,1))] text-blue-400">
        <IconChartHistogram size={48} stroke={1.5} />
        <span className="text-white font-semibold">Real-Time Analysis</span>
      </div>
    ),
  },
  {
    title: "Machine Learning Algorithms",
    description:
      "Using advanced AI models, our platform identifies anomalies and zero-day threats with over 95% accuracy, helping you stay ahead of cybercriminals.",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),rgba(0,0,0,1))] text-indigo-400">
        <IconBrain size={48} stroke={1.5} />
        <span className="text-white font-semibold">ML Algorithms</span>
      </div>
    ),
  },
  {
    title: "Instant Alerts",
    description:
      "Receive immediate notifications for detected threats and suspicious activities. Stay informed and respond quickly with real-time alerts.",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),rgba(0,0,0,1))] text-teal-400">
        <IconBellRinging size={48} stroke={1.5} />
        <span className="text-white font-semibold">Instant Alerts</span>
      </div>
    ),
  },
  {
    title: "AI Dashboard",
    description:
      "Launch our intuitive AI dashboard to visualize threat data, analyze incidents, and manage responses—all in one secure interface.",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),rgba(0,0,0,1))] text-cyan-400">
        <IconLayoutDashboard size={48} stroke={1.5} />
        <span className="text-white font-semibold">AI Dashboard</span>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div id="founders" className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
