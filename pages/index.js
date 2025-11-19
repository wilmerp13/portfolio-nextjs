import { motion } from 'framer-motion'
import SkillRadar from '../components/SkillRadar'
import Link from 'next/link'
import Skills from "../components/Skills" // <-- Import your Skills component
import CaseStudies from "../components/CaseStudies" // optional, if you want case studies

const skillsData = [
  { subject: 'Networking', A: 85 },
  { subject: 'Incident Response', A: 82 },
  { subject: 'Python', A: 75 },
  { subject: 'Web Dev (React)', A: 88 },
  { subject: 'Cloud & VPN', A: 78 },
  { subject: 'Content Filtering', A: 90 },
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">
      {/* Hero Section */}
      <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
        <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6 }}>
          <h2 className="text-4xl font-extrabold leading-tight">I build reliable systems and secure environments.</h2>
          <p className="mt-4 text-lg text-slate-700">Security-focused IT professional with hands-on experience in network security monitoring and incident investigation. I blend customer-centric support with technical rigor — ideal for SOC analyst roles.</p>

          <div className="mt-6 flex gap-3">
            <Link href="/contact"><a className="rounded-md bg-slate-900 text-white px-4 py-2 font-medium shadow hover:opacity-95">Contact Me</a></Link>
            <Link href="/projects"><a className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100">See Projects</a></Link>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-600">
            <li><strong>Location:</strong> Augusta, GA</li>
            <li><strong>Availability:</strong> Open to SOC Analyst roles</li>
            <li><strong>Languages:</strong> English & Spanish</li>
            <li><strong>Certs:</strong> CompTIA Security+, NASM CPT</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
          <h3 className="text-xl font-semibold">Quick Highlights</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>• 6+ years in high-volume technical support and customer retention.</p>
            <p>• Hands-on with content filtering, URL classification, VPN routing, and policy configuration.</p>
            <p>• Experience triaging incidents, analyzing logs, and coordinating escalations with engineering.</p>
            <p>• Building SOC skills with TryHackMe labs and custom VMs.</p>
          </div>
        </motion.div>
      </section>

      {/* Skill Radar Section */}
      <section id="skill-radar" className="mt-12">
        <h3 className="text-lg font-semibold">Skill Radar</h3>
        <div className="mt-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <SkillRadar data={skillsData} />
        </div>
      </section>

      {/* Full Skills Section */}
      <Skills /> {/* <-- Add this to render your full skills section */}

      {/* Optional: SOC Analyst Case Studies Section */}
      <CaseStudies /> {/* <-- Add this if you want case studies to appear */}
    </div>
  )
}
