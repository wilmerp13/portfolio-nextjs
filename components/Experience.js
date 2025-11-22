import { motion } from "framer-motion";
import { Briefcase, Shield, Headphones, TerminalSquare } from "lucide-react";

export default function Experience() {
  const jobs = [
    {
      icon: Shield,
      role: "Technical Support & Network Security Specialist",
      company: "Netspark Ltd",
      period: "2023 – 2024",
      description:
        "Performed VPN traffic inspection, content filtering validation, secure policy enforcement, and URL security analysis. Investigated logs, validated incidents, and collaborated with engineering teams to ensure effective filtering and endpoint protection.",
      tech: [
        "Network Security",
        "Filtering Systems",
        "VPN Technologies",
        "Traffic Analysis",
        "Incident Validation",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      role: "Customer Care & Retention Specialist (Commercial Accounts)",
      company: "DIRECTV",
      period: "2017 – 2020",
      description:
        "Supported enterprise customers with technical troubleshooting, secure account configurations, commercial service maintenance, and billing controls. Awarded Top Performer badge for consistently exceeding KPIs and SLA expectations.",
      tech: [
        "Enterprise Support",
        "Technical Troubleshooting",
        "Secure Configurations",
        "Account Management",
        "SLA Compliance",
      ],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: TerminalSquare,
      role: "Cybersecurity Analyst (Labs & Projects)",
      company: "Self-Directed | TryHackMe | OSCP Prep",
      period: "2024 – Present",
      description:
        "Hands-on experience performing vulnerability assessments, packet captures, log forensics, SIEM monitoring, privilege escalation, and exploitation in simulated environments. Training for OSCP and Security+ certifications.",
      tech: [
        "SIEM Monitoring",
        "Threat Hunting",
        "Vulnerability Assessment",
        "Python Scripting",
        "Packet Analysis",
      ],
      color: "from-purple-500 to-fuchsia-500",
    },
  ];

  return (
    <section id="experience" className="mt-28 scroll-mt-20">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold flex items-center gap-3"
      >
        <Briefcase className="w-8 h-8 text-slate-700" />
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-slate-300 mt-12 pl-8 space-y-16">
        {jobs.map((job, index) => {
          const Icon = job.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md bg-gradient-to-r from-slate-400 to-slate-600"></div>

              {/* Card */}
              <div className="bg-white p-7 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  {/* Gradient Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${job.color} text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-slate-600">
                      {job.company} • {job.period}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-slate-700 leading-relaxed">
                  {job.description}
                </p>

                {/* Tech badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-xl border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
