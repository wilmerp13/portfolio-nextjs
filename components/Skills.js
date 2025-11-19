// components/Skills.js
import { motion } from "framer-motion";
import { FaLinux, FaWindows, FaNetworkWired, FaPython, FaCloud, FaShieldAlt, FaServer } from "react-icons/fa";

// Define your skills with icons and proficiency (0-100)
const skills = [
  { name: "Windows Administration", level: 90, icon: <FaWindows /> },
  { name: "Linux Administration", level: 85, icon: <FaLinux /> },
  { name: "Network Troubleshooting (TCP/IP, DNS, DHCP)", level: 90, icon: <FaNetworkWired /> },
  { name: "Firewalls & VPNs", level: 75, icon: <FaShieldAlt /> },
  { name: "CompTIA Security+ Knowledge", level: 90, icon: <FaShieldAlt /> },
  { name: "SIEM Tools (Splunk, ELK)", level: 70, icon: <FaServer /> },
  { name: "Incident Response & SOC Procedures", level: 85, icon: <FaShieldAlt /> },
  { name: "Python for Automation & Scripting", level: 70, icon: <FaPython /> },
  { name: "Cloud Platforms (Azure, AWS) Basics", level: 65, icon: <FaCloud /> },
  { name: "Access Control & Authentication", level: 80, icon: <FaShieldAlt /> },
  { name: "Packet Analysis & Wireshark", level: 75, icon: <FaNetworkWired /> },
  { name: "Technical Support & Troubleshooting", level: 95, icon: <FaServer /> },
  { name: "Active Directory & Group Policy", level: 80, icon: <FaWindows /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4 text-gray-800 dark:text-gray-100 text-2xl">
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-3 rounded-full bg-blue-500 dark:bg-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{skill.level}% Proficiency</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
