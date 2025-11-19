// components/CaseStudies.js
import { motion } from "framer-motion";
import { FaShieldAlt, FaNetworkWired, FaBug } from "react-icons/fa";

// Example case studies - replace with your real SOC work
const caseStudies = [
  {
    title: "Malware Incident Response",
    description: "Investigated a Redline Stealer alert, isolated the affected system, and removed malware without data loss.",
    icon: <FaBug />,
    type: "Incident Response",
  },
  {
    title: "Network Intrusion Detection",
    description: "Monitored suspicious traffic patterns using Splunk and Wazuh, blocked unauthorized connections, and updated firewall rules.",
    icon: <FaNetworkWired />,
    type: "Network Security",
  },
  {
    title: "Access Control Audit",
    description: "Reviewed Active Directory permissions, corrected misconfigurations, and ensured compliance with security policies.",
    icon: <FaShieldAlt />,
    type: "Compliance",
  },
  {
    title: "SIEM Log Analysis",
    description: "Analyzed SIEM logs to identify anomalies, escalated potential threats, and documented findings for management review.",
    icon: <FaShieldAlt />,
    type: "Monitoring",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        SOC Analyst Case Studies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4 text-gray-800 dark:text-gray-100 text-2xl">
              {caseStudy.icon}
              <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{caseStudy.description}</p>
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
              {caseStudy.type}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
